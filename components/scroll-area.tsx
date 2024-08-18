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
  const scrollRef = callRef<HTMLElement>()
  const style: Nixix.CSSProperties = horizontal ? {
    display: 'flex'
  } : {
    display: 'flex',
    flexDirection: 'column'
  }

  // horizontal scrolling logic
  let isDown: boolean;
  let startX: number;
  let startY: number;
  let scrollLeft: number;
  let scrollTop: number;
  return (
    <VStack bind:ref={scrollRef} style={style} className={`w-full h-full overflow-scroll no-scroll ` + className} on:mousedown={(ev) => {
      isDown = true;
      startX = ev.pageX - scrollRef.current!.offsetLeft;
      startY = ev.pageY - scrollRef.current!.offsetTop;
      scrollLeft = scrollRef.current!.scrollLeft;
      scrollTop = scrollRef.current!.scrollTop;
    }} on:mouseleave={() => {
      isDown = false
    }} on:mouseup={() => {
      isDown = false;
    }} on:mousemove={(ev) => {
      if (!isDown) return;
      ev.preventDefault();
      if (horizontal) {
        const x = ev.pageX - scrollRef.current!.offsetLeft;
        const walkX = x - startX;
        scrollRef.current!.scroll({
          left: scrollLeft - walkX,
          behavior: 'smooth'
        })
      } else {
        const y = ev.pageY - scrollRef.current!.offsetTop;
        const walkY = y - startY;
        scrollRef.current!.scroll({
          top: scrollTop - walkY,
          behavior: 'smooth'
        })
      }
    }} >
      {children}
    </VStack>

  )
}

export default ScrollArea;