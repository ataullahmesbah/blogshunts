import ContainerPage from "@/app/container/page";
import MarqueeImages from "@/app/Marquee";
import Image from "next/image";
import Link from "next/link";
import { FaChevronRight, FaForward } from "react-icons/fa";

export const metadata = {
    title: 'About Us | Hyascka',
    description: 'Discover the story behind Hyascka - Your Partner in Digital Success. Learn about our journey, mission, and commitment to driving growth for businesses through innovative digital marketing strategies and expert web development services.',
};


const AboutPage = () => {
    return (
        <div className="mt-5 mb-16">
            <div className="text-center py-20 p-4 space-y-5 items-center justify-center bg-sky-100 ">
                <h1 className="text-3xl font-semibold ">About Us</h1>

            </div>

            {/* About Banner */}
            <div className="bg-gray-100 py-10">

                <div className="flex flex-col lg:flex-row items-center container mx-auto gap-5 lg:gap-20 px-4 lg:px-20">

                    <div className="lg:w-1/2">
                        <div className="space-y-4">
                            <h1 className="lg:text-4xl md:text-3xl text-2xl font-semibold text-center lg:text-left">Full-Service Digital Marketing Service</h1>
                            <p className="text-center lg:text-left">Since our foundation in 2020, HYASCKA has effectively helped businesses experience growth through data-driven digital marketing campaigns. We emphasize a disciplined, transparent approach, and we won’t be out-communicated.</p>
                            <p className="text-center lg:text-left">If you want to experience what it’s like to work with (or work for) a full-service digital marketing agency that does things a little bit differently than you’ve experienced in the past, learn more about us below.</p>

                            <div className="mt-6 text-center lg:text-left">
                                <Link className="flex items-center gap-3 bg-blue-500 hover:bg-blue-600 p-2 px-6 border-b-4 border-gray-400 rounded-md" href="/contactus" style={{ width: 'fit-content' }}>
                                    <button className="text-white font-semibold">
                                        Contact Us
                                    </button>
                                    <FaChevronRight className="text-white" />
                                </Link>



                            </div>
                        </div>
                    </div>

                    {/* right side */}
                    <div className="lg:w-1/2 mt-4 lg:mt-0">
                        <img className="rounded-md w-full" src="https://i.ibb.co/GWt1NTg/image.png" alt="Hyascka About Us" />
                    </div>

                </div>


            </div>

            {/* Vision */}
            <div className="flex flex-col lg:flex-row items-center container mx-auto gap-5 lg:gap-20 px-4 lg:px-20 mt-12">

                <div className="">


                    <img className=" justify-center" src="https://i.ibb.co/L9p9DHX/image.png" alt="" />
                </div>
                <div className="space-y-4">
                    <h1 className="lg:text-4xl md:text-3xl text-2xl font-semibold text-center lg:text-left">Our Vision</h1>
                    <p>Empowering businesses through innovative digital solutions is at the core of our vision. We envision a digital ecosystem where every business, regardless of size or industry, can thrive through effective digital marketing and cutting-edge web development.</p>
                </div>
            </div>

            <MarqueeImages />



        </div>
    );
};

export default AboutPage;