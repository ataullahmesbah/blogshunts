import Image from "next/image";
import Link from "next/link";
import { FaArrowDown, FaChevronRight } from "react-icons/fa";
import { HiArrowLongDown } from "react-icons/hi2";
import bannerImg from '@/assets/banner/hyascka-official-team-meet.jpeg';
import bannerPartner from '@/assets/banner/hyascka-bing-partnaship.webp';


const Banner = () => {
    return (
        <div className="bg-gray-50">
            <div className="relative flex flex-col lg:flex-row container mx-auto items-center justify-between pt-16 pb-16 px-2">
                {/* left side text */}
                <div className="lg:w-1/2 lg:pr-10 relative z-10 space-y-3 text-center lg:text-left">
                    <h1 className="lg:text-5xl md:text-4xl text-3xl font-semibold mb-4">
                        An Online Marketing Service That Helps You Grow Confidently
                    </h1>
                    <p className="text-lg lg:text-xl mb-6">
                        HYASCKA, your go-to partner for top-notch Digital Marketing and SEO Services.
                        Elevate your brand’s online visibility and drive meaningful results.
                    </p>
                    <p className="text-lg lg:text-xl mb-6">
                        Our Web Development expertise goes beyond coding; it’s about crafting exceptional digital experiences.
                        Explore our Web Developer Blog for insights into the latest trends and best practices.
                    </p>
                    <p className="text-lg lg:text-xl mb-6">
                        For E-Commerce ventures, we offer tailored solutions to boost your online store’s performance.
                        Trust HYASCKA to bring your digital aspirations to life.
                    </p>

                    <Link
                        className="flex items-center gap-3 bg-blue-500 hover:bg-blue-600 p-2 px-6 border-b-4 border-gray-400 rounded-md"
                        href="/contactus"
                        style={{ width: 'fit-content' }}
                    >
                        <button className="text-white font-semibold">Let’s Talk</button>
                        <FaChevronRight className="text-white" />
                    </Link>

                    <div className="flex items-center gap-2 pt-4">
                        <div className="bg-blue-500 rounded-full p-2">
                            <HiArrowLongDown className="text-white" />
                        </div>
                        <p className="font-semibold">Scroll For More</p>
                    </div>

                </div>

                {/* cyan-100 circle */}
                <div className="lg:w-1/2 mt-16 lg:mt-6 absolute top-0 lg:mx-[-40px]  left-0">
                    <div className="w-56 h-56 bg-blue-50 rounded-full"></div>
                </div>

                {/* right side images */}
                <div className="lg:w-1/2 mt-5 lg:mt-0 relative z-10">
                    {/* Move the second image above the first image */}
                    <Image
                        className="rounded-lg block absolute bottom-0 right-0 hidden lg:block lg:-mr-20 lg:mt-60 xl:-mt-20 xl:-mr-24"
                        src={bannerPartner}
                        alt="hyascka about us"
                        width={400}
                        placeholder="blur"
                    />
                    <Image
                        className="rounded-md block md:hidden" // Hide on mobile and tablet devices
                        src={bannerImg}
                        alt="hyascka about us"
                        width={600}
                        height={381.5}
                        placeholder="blur"
                    />
                    <Image
                        className="rounded-md hidden md:block" // Show on laptop (md) screens
                        src={bannerImg}
                        alt="hyascka about us"
                        width={600}
                        height={381.5}
                        placeholder="blur"
                    />
                </div>


            </div>



        </div>
    );
};

export default Banner;