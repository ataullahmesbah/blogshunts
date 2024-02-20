import Link from 'next/link';
import { FaFacebook, FaFacebookF, FaFacebookSquare, FaInstagram, FaLinkedin, FaLinkedinIn, FaMedium, FaMediumM, FaPinterest } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div>
            <footer className="bg-gray-800 text-white py-4 px-2">
                <div className="container mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8 space-y-5">
                    {/* 1st Section: Logo and Short Info */}
                    <div className="mb-4 lg:mb-0 space-y-3">
                        <div className="flex gap-3 items-center">
                            <img className="w-6 h-6" src="https://i.ibb.co/LptmthK/image.png" alt="Social Icon 1" />
                            <h1 className="text-xl font-semibold">Hyascka</h1>
                        </div>
                        <p className="text-sm">Hyascka is a dynamic digital marketing platform, fostering innovation and expertise in online promotion. Dive into a world of strategic insights, trends, and tools, empowering your digital journey with concise, impactful guidance.</p>
                    </div>

                    {/* 2nd Section: Resources */}
                    <div className="mb-4 lg:mb-0">
                        <h2 className="text-xl font-semibold mb-2 border-b  border-green-400">Resources</h2>
                        <ul className="text-sm space-y-2">
                            <Link href='/contactus'> <li className="hover:text-gray-500 cursor-pointer">Contact Us</li></Link>
                            <li className="hover:text-gray-500 cursor-pointer">Blogs</li>
                            <Link href='/aboutus'> <li className="hover:text-gray-500 cursor-pointer">About Us</li></Link>
                            <Link href='/faqs'><li className="hover:text-gray-500 cursor-pointer">FAQs</li></Link>
                            <li className="hover:text-gray-500 cursor-pointer">Privacy & Policy</li>
                        </ul>
                    </div>
                    {/* 3rd Section: Company */}
                    <div className="mb-4 lg:mb-0">
                        <h2 className="text-xl font-semibold mb-2 border-b  border-green-400">Services</h2>
                        <ul className="text-sm space-y-2">
                            <li className="hover:text-gray-500 cursor-pointer">Marketing</li>
                            <li className="hover:text-gray-500 cursor-pointer">SMM</li>
                            <li className="hover:text-gray-500 cursor-pointer">SEO</li>
                            <li className="hover:text-gray-500 cursor-pointer">Web Developer</li>
                        </ul>
                    </div>



                    {/* 4th Section: Social Icons and Copyright */}
                    <div className="flex flex-col ">
                        <h2 className="text-xl font-semibold mb-2 border-b  border-green-400">Social</h2>
                        <div className=" mb-4 space-y-2">
                            {/* Social Icons */}
                            <Link href='/' className='flex items-center gap-4 text-xl '><FaFacebookSquare className='' />
                                <span className='text-base'>Facebook</span></Link>
                            <Link href='/' className='flex items-center gap-4 text-xl '><FaInstagram className='' />
                                <span className='text-base'>Instagram</span></Link>
                            <Link href='/' className='flex items-center gap-4 text-xl '><FaLinkedin className='' />
                                <span className='text-base'>LinkedIn</span></Link>
                            <Link href='/' className='flex items-center gap-4 text-xl '><FaPinterest className='' />
                                <span className='text-base'>Pinterest</span></Link>
                            <Link href='/' className='flex items-center gap-4 text-xl '><FaMediumM className='' />
                                <span className='text-base'>Medium</span></Link>
                        </div>


                    </div>

                </div>

            </footer>
            {/* Copyright Information */}
            <p className="text-sm text-white p-3 justify-center text-center bg-gray-700">&copy; {currentYear} Hyascka. All rights reserved.</p>
        </div>
    );
};

export default Footer;
