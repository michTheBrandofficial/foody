import categories from '@/src/data/categories.json';
import { animate, SpringEasing } from '@okikio/animate';
import { For } from 'nixix/hoc';
import { concat, memo, signal } from 'nixix/primitives';
import { Paragragh, VStack } from "nixix/view-components";
import ScrollArea from "./scroll-area";

type Props = {

};

const Categories: Nixix.FC<Props> = (): someView => {
  const [activeCategory, setActiveCategory] = signal<number>(0);
  return (
    <ScrollArea horizontal className="w-full gap-4 pr-4" >
      {/* For component here */}
      <For each={[...categories.data, ...categories.data, ...categories.data]} >
        {({ category, thumbnail }, i) => {
          const bgMemo = memo(() => activeCategory.value === i ? 'bg-amber-400' : 'bg-neutral-300', [activeCategory])
          return (
            <VStack className="font-semibold flex flex-col items-center space-y-2 active:opacity-25 transition-opacity " on:click={() => setActiveCategory(i)} bind:ref={({ current }) => {
              const [translateY, duration] = SpringEasing([40, 0])
              animate({
                target: current,
                duration: duration as number,
                translateY,
                delay: i * 30
              })
            }} >
              <img src={thumbnail} alt="Category" className={concat`w-12 h-12 p-1 rounded-full object-cover ${bgMemo} transition-colors `} />
              <Paragragh >{category}</Paragragh>
            </VStack>
          )
        }}
      </For>
    </ScrollArea>
  )
}

export default Categories;