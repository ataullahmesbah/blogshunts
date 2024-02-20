import Image from "next/image";

import galleryImage1 from '@/assets/gallery/webdeveloper.jpeg';
import galleryImage2 from '@/assets/gallery/meetteam.jpg';
import galleryImage3 from '@/assets/gallery/seoteam.jpg';
import galleryImage4 from '@/assets/gallery/teamvalues.jpg';


const HyasckaGallery = () => {
    return (
        <div className="container mx-auto my-10 justify-center items-center text-center">
            <div className="justify-center items-center space-y-2">
                <div className="flex flex-wrap justify-center gap-2">
                    {/* First Image */}
                    <div className="relative" style={{ width: '100%', maxWidth: '450px', height: '350px' }}>
                        <Image src={galleryImage1} alt="Gallery Image 1" layout="fill" objectFit="cover" placeholder="blur" />
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-center opacity-100">
                            <p className="font-bold text-lg">Meet Hyascka Team</p>
                        </div>
                    </div>
                    {/* Second Image */}
                    <div className="relative" style={{ width: '100%', maxWidth: '600px', height: '350px' }}>
                        <Image src={galleryImage2} alt="Gallery Image 2" layout="fill" objectFit="cover" placeholder="blur" />
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-center opacity-100">
                            <p className="font-bold text-lg">Marketing Analytics</p>
                        </div>
                    </div>
                    {/* Third Image */}
                    <div className="relative" style={{ width: '100%', maxWidth: '600px', height: '350px' }}>
                        <Image src={galleryImage3} alt="Gallery Image 3" layout="fill" objectFit="cover" placeholder="blur" />
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-center opacity-100">
                            <p className="font-bold text-lg">Your Third Caption</p>
                        </div>
                    </div>
                    {/* Fourth Image */}
                    <div className="relative" style={{ width: '100%', maxWidth: '450px', height: '350px' }}>
                        <Image src={galleryImage4} alt="Gallery Image 4" layout="fill" objectFit="cover" placeholder="blur" />
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-center opacity-100">
                            <p className="font-bold text-lg">Your Fourth Caption</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>




    );
};

export default HyasckaGallery;