import Image from "next/image";
import { HiArrowLongDown } from "react-icons/hi2";
import hyasckaService from '@/assets/services/hyascka-service.jpg'
// import hyasckaWeb from '@/assets/services/web-development.png'
import google from '@/assets/services/icons/google-partner.png'
import user from '@/assets/services/icons/user-like-us.png'
import customer from '@/assets/services/icons/customer-bg.webp'
import client from '@/assets/services/icons/clicnt-say.png'

export const metadata = {
    title: 'Digital Services: Custom Web Design & Digital Marketing Services | Hyascka',
    description: 'Discover the story behind Hyascka - Your Partner in Digital Success. Learn about our journey, mission, and commitment to driving growth for businesses through innovative digital marketing strategies and expert web development services.',
};


const ServicesPage = () => {
    return (
        <div>
            <div className="bg-gray-50">
                <div className="relative flex flex-col lg:flex-row container mx-auto items-center justify-between pt-16 pb-16 px-2 lg:gap-10">
                    {/* left side text */}
                    <div className="lg:w-1/2 lg:pr-10 relative z-10 space-y-3 text-center lg:text-left">
                        <h1 className="lg:text-5xl md:text-4xl text-3xl font-semibold mb-4">
                            Online Marketing Services
                        </h1>
                        <p className="text-lg lg:text-xl mb-6">
                            Explore the pinnacle of digital marketing with HYASCKA's full-service solutions. We seamlessly navigate all channels to craft a unified and impactful brand narrative. In the realm of digital marketing, we transcend the ordinary, always keeping your business goals at the forefront.
                        </p>





                        <div className="flex items-center gap-2 pt-4">
                            <div className="bg-blue-500 rounded-full p-2">
                                <HiArrowLongDown className="text-white" />
                            </div>
                            <p className="font-semibold">Scroll For More</p>
                        </div>

                    </div>

                    {/* blue-50 circle */}
                    <div className="lg:w-1/2 mt-16 lg:mt-6 absolute top-0 lg:mx-[-40px]  left-0">
                        <div className="w-56 h-56 bg-blue-50 rounded-full"></div>
                    </div>

                    {/* right side images */}
                    <div className="lg:w-1/2 mt-5 lg:mt-0 relative z-10">
                        {/* Move the second image above the first image */}

                        <Image
                            className="rounded-md block md:hidden" // Hide on mobile and tablet devices
                            src={hyasckaService}
                            alt="hyascka Services"
                            width={600}
                            height={381.5}
                            placeholder="blur"
                        />
                        <Image
                            className="rounded-md hidden md:block" // Show on laptop (md) screens
                            src={hyasckaService}
                            alt="Our website services"
                            width={600}
                            height={381.5}
                            placeholder="blur"
                        />
                    </div>


                </div>



            </div>

            {/* icons */}
            <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center container mx-auto p-2 m-10 lg:px-28 md:px-20">
                <Image src={google} alt="Google" width={200} placeholder="blur" className="mb-4 lg:mb-0 lg:mr-10" />
                <Image src={user} alt="User" width={100} placeholder="blur" className="mb-4 lg:mb-0" />
                <Image src={customer} alt="Customer" width={150} placeholder="blur" className="mb-4 lg:mb-0" />
                <Image src={client} alt="Client" width={150} placeholder="blur" />
            </div>
        </div>
    );
};

export default ServicesPage;