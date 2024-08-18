import FoodyImage from '@/assets/images/icon.png';
type Props = {
  size: number
};

const Foody: Nixix.FC<Props> = ({ size }): someView => {
  return (
    <img src={FoodyImage} alt="Foody image" className='rounded-full' width={size * 640} height={size * 640} />
  )
}

export default Foody;