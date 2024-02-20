
import Marquee from 'react-fast-marquee';


const MarqueeSection = () => {
  return (
    <div className='  pb-20'>
      <p className='text-center uppercase text-3xl font-bold pt-20'>Brands We’re Lucky to Work With</p>
      <Marquee speed={30} className='mt-12'>

        <div className='mx-20'>
          <img src="https://i.ibb.co/z8BFTMy/image.png" alt="Logo" className="h-16" />

        </div>
        <div className='mx-20'>
          <img src="https://i.ibb.co/BGy5Sy1/image.png" alt="Logo" className="h-16" />

        </div>
        <div className='mx-20'>
          <img src="https://i.ibb.co/VqqFSp0/image.png" alt="Logo" className="h-16" />

        </div>
        <div className='mx-20'>
          <img src="https://i.ibb.co/m0wqwfw/image.png" alt="Logo" className="h-16" />

        </div>
      </Marquee>
    </div>
  );
};

export default MarqueeSection;
