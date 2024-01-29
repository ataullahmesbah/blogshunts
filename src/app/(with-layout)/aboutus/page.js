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
                <h1 className="text-3xl font-semibold ">About HYASCKA</h1>

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
                    <h1 className="lg:text-4xl md:text-3xl text-2xl font-semibold text-center lg:text-left">Vision and Values</h1>
                    <p>Empowering businesses through innovative digital solutions is at the core of our vision. We envision a digital ecosystem where every business, regardless of size or industry, can thrive through effective digital marketing and cutting-edge web development.</p>
                </div>
            </div>

            <MarqueeImages />

            {/* our story */}


            <div className="flex flex-col lg:flex-row items-center container mx-auto justify-center gap-5 lg:gap-20 px-4 lg:px-20 mt-12">


                <div className="space-y-4 w-1/2">
                    <h1 className="lg:text-4xl md:text-3xl text-2xl font-semibold text-center lg:text-left">Our Story</h1>
                    <p>
                        HYASCKA started as a small team of dedicated professionals with a vision to transform the digital landscape.
                        Over the years, we have grown into a full-service agency, offering a wide range of digital marketing and web development services.
                    </p>
                </div>
                <div className="">


                    <img className="w-3/4 justify-center" src="https://i.ibb.co/NjbCKFJ/image.png" alt="" />
                </div>
            </div>


            <div className="items-center text-center">
                {/* <div className="w-1/2 pr-4">
                    <h2 className="text-2xl font-semibold mb-4"></h2>

                </div> */}

                <div className=" pl-4">
                    <h2 className="lg:text-4xl md:text-3xl text-2xl font-semibold text-center ">Our Team</h2>
                    <p>
                        Meet the talented individuals behind HYASCKA. Our team consists of experts in digital marketing, web development,
                        design, and more. We are committed to excellence and work collaboratively to bring success to our clients.
                    </p>
                </div>
            </div>


            <div className="grid grid-cols-2 container mx-auto m-14 px-10 lg:gap-10 justify-between">
                <div className="space-y-3">
                    <h4 className="lg:text-4xl md:text-3xl text-2xl font-semibold ">Services and Expertise</h4>
                    <li>Clearly outline the digital marketing and web development services you offer.
                    </li>
                    <li>Highlight your expertise, technology stack, and unique selling points.</li>
                </div>

                <div className="space-y-3">
                    <h4 className="lg:text-4xl md:text-3xl text-2xl font-semibold ">Why Choose HYASCKA</h4>
                    <p><span className="font-semibold">End-to-End Solutions: </span>From digital marketing to web development, we offer a complete suite of services, ensuring a cohesive and integrated approach to your digital strategy.
                    </p>
                    <p><span className="font-semibold">Industry Expertise: </span>Our team comprises industry experts and professionals with a deep understanding of diverse sectors, allowing us to tailor our services to your unique needs.

                    </p>
                    <p><span className="font-semibold">Proven Results: </span>We let our results speak for themselves. Over the years, we have achieved success stories across various industries, driving tangible growth for our clients.</p>

                </div>


            </div>


{/* extra */}

            <div className="flex">
                {/* Left side content */}
                <div className="bg-gray-100 w-full  p-80">
                    <h1 className="text-4xl font-bold text-black">Left Side Content</h1>
                </div>

                {/* Container for the gradient background */}
                <div className="relative bg-gradient-to-r from-cyan-700 via-cyan-700 to-cyan-700  p-80">
                    {/* Content in the gradient background */}
                    <h1 className="text-4xl font-bold text-white">Your Header Title</h1>

                    {/* Skewed div centered within the container */}

                   
                    
                </div>

                
            </div>


        </div>
    );
};

export default AboutPage;