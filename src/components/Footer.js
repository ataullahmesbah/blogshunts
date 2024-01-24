

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div>
            <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8 space-y-5">
                {/* 1st Section: Logo and Short Info */}
                <div className="mb-4 lg:mb-0 space-y-3">
                    <img className="w-6 h-6" src="https://i.ibb.co/LptmthK/image.png" alt="Social Icon 1" />
                    <p className="text-sm">This Website is Digital Marketing</p>
                </div>

                {/* 2nd Section: Resources */}
                <div className="mb-4 lg:mb-0">
                    <h2 className="text-xl font-semibold mb-2 border-b  border-green-400">Resources</h2>
                    <ul className="text-sm space-y-2">
                        <li className="hover:text-gray-500 cursor-pointer">Contact Us</li>
                        <li className="hover:text-gray-500 cursor-pointer">Blogs</li>
                        <li className="hover:text-gray-500 cursor-pointer">About Us</li>
                        <li className="hover:text-gray-500 cursor-pointer">FAQs</li>
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
                    <div className="flex space-x-3 mb-4 space-y-2">
                        {/* Social Icons */}
                        <img className="w-6 h-6" src="social-icon-1.png" alt="Social Icon 1" />
                        <img className="w-6 h-6" src="social-icon-2.png" alt="Social Icon 2" />
                        <img className="w-6 h-6" src="social-icon-3.png" alt="Social Icon 3" />
                    </div>
                    {/* Copyright Information */}

                </div>

            </div>
            
        </footer>
        <p className="text-sm text-white p-3 justify-center text-center bg-gray-500">&copy; {currentYear} BlogsHunts. All rights reserved.</p>
        </div>
    );
};

export default Footer;
