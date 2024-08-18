import Logo from "@/components/Logo";
import AppScreen, { navigate } from "@/components/screen";
import { Paragragh, VStack } from "nixix/view-components";

const Screen = () => {
  setTimeout(() => {
    navigate('Home')
  }, 2000);
  return (
    <VStack className='w-full h-full bg-amber-400 safe-area-top relative flex flex-col justify-center items-center gap-y-10 ' >
      <Logo />

      <VStack className='flex flex-col items-center justify-center gap-y-2'>
        <Paragragh className='text-6xl font-bold text-white tracking-wide ' >Foody</Paragragh>
        <Paragragh className='text-lg font-bold text-white tracking-wide ' >Food is always right</Paragragh>
      </VStack>
    </VStack>
  )
}

export default function WelcomeScreen() {
  return <AppScreen name="Welcome" componentScreen={Screen} />
};