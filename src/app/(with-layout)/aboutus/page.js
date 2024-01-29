import ContainerPage from "@/app/container/page";
import MarqueeSection from "@/components/Marquee";

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

                        {/* <Image src='https://i.ibb.co/GWt1NTg/image.jpg' alt="about us" width={100} height={20}/> */}
                    </div>

                </div>


            </div>

            <div className="flex flex-col lg:flex-row items-center container mx-auto gap-5 lg:gap-20 px-4 lg:px-20 mt-16">

                <div className="w-full lg:w-1/2">
                    <img className="max-w-full" src="https://i.ibb.co/L9p9DHX/image.png" alt="Hyascka Vision" loading="lazy" />
                </div>

                <div className="text-center lg:text-left space-y-3 w-full lg:w-1/2">
                    <h1 className="lg:text-4xl md:text-3xl text-2xl font-semibold">Vision and Values</h1>
                    <p className="text-base lg:text-lg">
                        Empowering businesses through innovative digital solutions is at the core of our vision.
                        We envision a digital ecosystem where every business, regardless of size or industry,
                        can thrive through effective digital marketing and cutting-edge web development.
                    </p>
                    <p className="">
                        At HYASCKA, our values guide every aspect of our operations:
                    </p>
                    <ul className="list-disc ml-6">
                        <li className="text-base lg:text-lg">
                            <strong>Customer-Centric Approach:</strong> Putting our clients at the center of everything we do,
                            ensuring their success is our top priority.
                        </li>
                        <li className="text-base lg:text-lg">
                            <strong>Innovation:</strong> Embracing creativity and staying ahead of industry trends to
                            deliver cutting-edge solutions to our clients.
                        </li>
                        <li className="text-base lg:text-lg">
                            <strong>Integrity:</strong> Upholding the highest standards of honesty, transparency, and
                            ethical conduct in all our interactions.
                        </li>
                        {/* Add more values as needed */}
                    </ul>
                </div>
            </div>


            <MarqueeSection />

            <ContainerPage>
                {/* our story */}


                <div className="flex flex-col lg:flex-row items-center container mx-auto justify-center gap-5 lg:gap-20 px-4 lg:px-20 mt-12">


                    <div className="space-y-4 w-1/2">
                        <h1 className="lg:text-4xl md:text-3xl text-2xl font-semibold text-center lg:text-left">Our Story</h1>
                        <p>
                            HYASCKA started as a small team of dedicated professionals with a vision to transform the digital landscape.
                            Over the years, we have grown into a full-service agency, offering a wide range of digital marketing and web development services.
                        </p>
                        <p>
                            Our journey is marked by a commitment to excellence and a passion for delivering results.
                            We believe in the power of innovation and strategic thinking to help businesses thrive in the ever-evolving online world.
                        </p>
                        <p>
                            At HYASCKA, we prioritize client satisfaction and tailor our solutions to meet the unique needs of each project.
                            Whether it’s SEO, web development, or a comprehensive digital marketing strategy, we bring creativity and expertise to every endeavor.
                        </p>
                    </div>
                    <div className="">


                        <img className="w-3/4 justify-center" src="https://i.ibb.co/NjbCKFJ/image.png" alt="" />
                    </div>
                </div>


                <div className="flex flex-col-reverse lg:flex-row items-center justify-between mx-auto container lg:space-x-20 md:space-x-10 px-4 lg:px-20 lg:mt-14">
                    <div className="w-full lg:w-1/2">
                        <img className="max-w-full" src="https://i.ibb.co/C50F6rC/image.png" alt="Hyascka Team" />
                    </div>

                    <div className="w-full lg:w-1/2 pl-4 space-y-3">
                        <h2 className="lg:text-4xl md:text-3xl text-2xl font-semibold">Our Team</h2>
                        <p>
                            Meet the talented individuals behind HYASCKA. Our team consists of experts in digital marketing, web development,
                            design, and more. We are committed to excellence and work collaboratively to bring success to our clients.
                        </p>
                        <p>
                            Meet the talented individuals behind HYASCKA. Our team consists of experts in various sectors, each contributing their unique skills.
                        </p>
                    </div>
                </div>



                <div className="lg:flex lg:justify-between container mx-auto m-10 lg:space-x-20 md:space-x-10 px-4 lg:px-24 mt-16">
                    <div className="lg:w-1/2 space-y-3 mb-6 lg:mb-0">
                        <h4 className="lg:text-4xl md:text-3xl text-2xl font-semibold ">Services and Expertise</h4>

                        <li>Clearly outline the digital marketing and web development services you offer.</li>
                        <li>Highlight your expertise, technology stack, and unique selling points.</li>
                        <li>Provide data-driven SEO strategies to improve online visibility.</li>
                        <li>Create responsive and user-friendly web applications.</li>
                        {/* Add more list items as needed */}

                    </div>


                    <div className="lg:w-1/2 space-y-3">
                        <h4 className="lg:text-4xl md:text-3xl text-2xl font-semibold ">Why Choose HYASCKA</h4>
                        <p><span className="font-semibold">End-to-End Solutions: </span>From digital marketing to web development, we offer a complete suite of services, ensuring a cohesive and integrated approach to your digital strategy.
                        </p>
                        <p><span className="font-semibold">Industry Expertise: </span>Our team comprises industry experts and professionals with a deep understanding of diverse sectors, allowing us to tailor our services to your unique needs.
                        </p>
                        <p><span className="font-semibold">Proven Results: </span>We let our results speak for themselves. Over the years, we have achieved success stories across various industries, driving tangible growth for our clients.</p>
                    </div>
                </div>

            </ContainerPage>


            {/* extra */}




        </div>
    );
};

export default AboutPage;