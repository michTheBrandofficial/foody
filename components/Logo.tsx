import { animate, SpringEasing, } from '@okikio/animate';
import { callRef, effect } from "nixix/primitives";
import { VStack } from "nixix/view-components";
import Foody from "./foody";

type Props = {

};

const Logo: Nixix.FC<Props> = (): someView => {
  const outerRing = callRef<HTMLElement>();
  const innerRing = callRef<HTMLElement>()
  effect(() => {
    const [padding, duration] = SpringEasing([0, 40]);
    const [padding2, duration2] = SpringEasing([0, 32])
    animate({
      target: outerRing.current!,
      duration: duration as number,
      fillMode: 'forwards',
      // properties here
      padding
    })
    animate({
      target: innerRing.current!,
      duration: duration2 as number,
      fillMode: 'forwards',
      // properties here
      padding: padding2
    })
  })
  return (
    <VStack bind:ref={outerRing} className='bg-white/20 rounded-full w-fit p-10'>
      <VStack bind:ref={innerRing} className='bg-white/20 rounded-full w-fit p-8'>
        <Foody size={.3} />
      </VStack>
    </VStack>
  )
}

export default Logo;