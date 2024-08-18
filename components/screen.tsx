import { animate } from "@okikio/animate";
import { VStack } from "nixix/view-components";

class ScreensMap<K, V> extends Map<K, V> {
  currentScreen: {
    el: HTMLElement,
    name: Screens,
    component: (() => JSX.Element),
  } | null = null
  constructor() {
    super()
  }
}

let screenNamesMap = new ScreensMap<string, {
  el: HTMLElement,
  component: (() => JSX.Element),
  name: Screens
}>()

type Screens = 'Home' | 'Welcome'

export const navigate = (name: Screens) => {
  if (screenNamesMap.has(name)) {
    if (screenNamesMap.currentScreen?.name === name) return;
    else {
      const { currentScreen } = screenNamesMap;
      const nextScreen = screenNamesMap.get(name)!
      const prevElement = currentScreen!.el;
      const nextElement = nextScreen!.el
      prevElement.style.zIndex = `50`
      nextElement.style.zIndex = `100`;

      // call component if it has not been yet
      if (!nextElement.children.length) nextElement.replaceChildren(nextScreen.component()) 
      animate({
        duration: 300,
        target: prevElement,
        transform: `perspective(${window.innerWidth}px) rotateY(5deg) translateX(0%) translateY(0%)`,
        easing: 'ease'
      }).then(_ => {
        prevElement.style.transform = `translateX(100%) translateY(0%)`
      })
      animate({
        delay: 150,
        duration: 300,
        target: nextElement,
        fillMode: 'forwards',
        transform: `translateX(0%) translateY(0%)`,
        easing: 'ease'
      }).then(_ => {
        screenNamesMap.currentScreen = nextScreen;
      });
    }
  }
}

let firstScreen: boolean = true;

type Props = {
  name: Screens,
  componentScreen: () => JSX.Element;
};

const AppScreen: Nixix.FC<Props> = ({ name, componentScreen: Component }): someView => {
  return (
    <VStack style={{
      position: 'absolute',
      top: `0px`,
      zIndex: 50,
    }} bind:ref={({ current }) => {
      const translatePercentage = firstScreen ? 0 : 100;
      screenNamesMap.set(name, {
        el: current,
        component: Component,
        name
      });
      current.style.setProperty('transform', `translateX(${translatePercentage}%) translateY(0%)`);
      current.style.setProperty('zIndex', `${firstScreen ? 100 : 0}`);
      if (firstScreen) {
        screenNamesMap.currentScreen = {
          name,
          el: current,
          component: Component
        }
        current.replaceChildren(Component())
        firstScreen = false
      }
    }} className="w-screen h-screen select-none font-Satoshi " >
    </VStack>
  )
}

export default AppScreen;