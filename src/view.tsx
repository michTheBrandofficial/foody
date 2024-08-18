import HomeScreen from '@/screens/home-screen';
import WelcomeScreen from '@/screens/welcome-screen';
import { VStack } from 'nixix/view-components';
import "./index.css";

/**
 * @todo scrollarea elastic
 * @todo status bar component from mobily-responsive
 */
const View = (): someView => {
  return (
    <VStack className='w-screen h-screen relative overflow-hidden' >
      <HomeScreen />
      <WelcomeScreen />
    </VStack>
  );
};

export default View;