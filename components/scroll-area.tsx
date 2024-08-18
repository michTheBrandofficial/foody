import Nixix from "nixix";
import { callRef } from "nixix/primitives";
import { VStack } from "nixix/view-components";

type Props = {
  children?: someView;
  className?: string;
  horizontal?: true
};

/** 
 * @note returns a flex container with a scrollable content
 * @supports horizontal and vertical drag scrolling
 * @upcoming features: elastic scrolling like IOS devices
 */
const ScrollArea: Nixix.FC<Props> = ({ className, children, horizontal }): someView => {
  const scrollRef= callRef<HTMLElement>()
  const style: Nixix.CSSProperties = horizontal ? {
    display: 'flex'
  } : {
    display: 'flex',
    flexDirection: 'column'
  }

  // horizontal scrolling logic
  let isDown: boolean;
  let startX: number;
  let scrollLeft: number;
  return (
    <VStack bind:ref={scrollRef} style={style} className={`w-full h-full overflow-scroll no-scroll ` + className} on:mousedown={(ev) => {
      isDown = true;
      startX = ev.pageX - scrollRef.current!.offsetLeft;
      scrollLeft = scrollRef.current!.scrollLeft;
    }} on:mouseleave={() => {
      isDown = false
    }} on:mouseup={() => {
      isDown = false;
    }} on:mousemove={(ev) => {
      if (!isDown) return;
      ev.preventDefault();
      const x = ev.pageX - scrollRef.current!.offsetLeft;
      const walk = x - startX;
      scrollRef.current!.scroll({
        left: scrollLeft - walk,
        behavior: 'smooth'
      })
    }} >
      {children}
    </VStack>

  )
}

export default ScrollArea;