import Avatar from '@/assets/images/user avatar.svg';
import Categories from '@/components/categories';
import Recipes from '@/components/recipes';
import AppScreen from "@/components/screen";
import Icon from "@/utils/heroicons";
import { bell, search } from "@/utils/heroicons/outline";
import { Button, Heading, HStack, Paragragh, TextField, VStack } from "nixix/view-components";

const Screen = (): JSX.Element => {
  return (
    <VStack className='w-full h-full bg-white relative flex flex-col justify-center items-center gap-y-10 ' >
      <VStack className="w-full h-full safe-area-top " >
        <HStack className="w-full h-fit px-4 mb-4 flex items-center justify-between">
          <img src={Avatar} height={48} width={48} />
          <Icon path={bell} size={28} stroke-width={1.5} className="stroke-black fill-none" />
        </HStack>

        {/* greetings and punchline */}
        <VStack className='w-full h-fit px-4 space-y-2 mb-4' >
          <Heading type='h3' className='font-semibold text-neutral-600' >Hello, Charles!</Heading>
          <Paragragh className='text-3xl font-bold text-stone-700' >Make your own food, <br /> stay at <span className='text-amber-400 inline-block' >home</span>
          </Paragragh>
        </VStack>

        {/* search bar */}
        <VStack className='mx-4 mb-4 flex items-center justify-between rounded-full bg-black/5 p-1.5 '>
          <TextField className='w-3/4 bg-transparent pl-2 text-gray-950 placeholder:text-gray-400 focus:outline-none ' placeholder='Search any recipe' />
          <Button className='p-3 bg-white rounded-full' >
            <Icon path={search} size={20} className='fill-none stroke-gray-950 ' />
          </Button>
        </VStack>

        {/* categories */}
        <VStack className='ml-4 mb-6 h-fit' >
          <Categories />
        </VStack>

        <VStack className='mx-4 h-fit pb-6 space-y-4'>
          <Recipes />
        </VStack>
      </VStack>
    </VStack>
  )
}

export default function HomeScreen() {
  return <AppScreen name="Home" componentScreen={Screen} />
};