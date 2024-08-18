import meals from "@/src/data/meals.json";
import { animate, SpringEasing } from "@okikio/animate";
import { Heading, Paragragh, VStack } from "nixix/view-components";

type Props = {

};

const Recipes: Nixix.FC<Props> = (): someView => {
  return (
    <>
      <Heading type='h3' className='text-2xl font-bold text-stone-700' >Recipes</Heading>
      <VStack className="grid grid-cols-2 gap-4">
        {meals.data.map((meal, index) => (
          <VStack className={`w-full ${index % 3 === 0 ? 'row-span-3' : 'row-span-9'} flex flex-col gap-2 justify-between`} bind:ref={({current}) => {
            queueMicrotask(() => {
              const [translateY, duration] = SpringEasing([-60, 0])
              const [opacity] = SpringEasing([0, 1])
              animate({
                target: current,
                translateY,
                opacity,
                duration: duration as number,
                delay: index * 100,
                fillMode: 'both'
              })
            })
          }} >
            <img src={meal.thumbnail} className={`rounded-[30px] h-full object-cover `} alt="Image" />
            <Paragragh className="pl-1 line-clamp-1 font-semibold " >{meal.name}</Paragragh>
          </VStack>
        ))}
      </VStack>
    </>
  )
}



export default Recipes;