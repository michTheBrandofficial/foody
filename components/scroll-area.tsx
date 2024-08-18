import { RefFunction } from "nixix";
import { VStack } from "nixix/view-components";

type Props = {
  children?: someView;
  className?: string;
  horizontal?: true
};

const ScrollArea: Nixix.FC<Props> = ({ className, children, horizontal }): someView => {
  const scrollRef: RefFunction<HTMLElement> = ({ current }) => {
    current.scroll({
      behavior: 'smooth'
    })
    queueMicrotask(() => {
      if (horizontal) {
      }
    })
  }
  return (
    // viewport
    <VStack bind:ref={scrollRef} className={`w-full h-full overflow-scroll no-scroll ` + className} style={horizontal ? {
      display: 'flex',
    } : {}} >
      {children}
    </VStack>

  )
}

export default ScrollArea;