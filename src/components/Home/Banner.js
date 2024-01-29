import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";


const Banner = () => {
    return (
        <div className="bg-gray-100">
            <div className="flex container mx-auto">
                {/* left side text */}
                <div className="space-y-3">
                    <h1 className="lg:text-5xl md:text-4xl text-3xl font-semibold text-center lg:text-left mb-4">An Online Marketing Service That Helps You Grow Confidently</h1>
                    <p className="text-lg lg:text-xl text-center lg:text-left mb-6">
                        HYASCKA, your go-to partner for top-notch Digital Marketing and SEO Services.
                        Elevate your brand’s online visibility and drive meaningful results.
                    </p>
                    <p className="text-lg lg:text-xl text-center lg:text-left mb-6">
                        Our Web Development expertise goes beyond coding; it’s about crafting exceptional digital experiences.
                        Explore our Web Developer Blog for insights into the latest trends and best practices.
                    </p>
                    <p className="text-lg lg:text-xl text-center lg:text-left mb-6">
                        For E-Commerce ventures, we offer tailored solutions to boost your online store’s performance.
                        Trust HYASCKA to bring your digital aspirations to life.
                    </p>

                    <Link className="flex items-center gap-3 bg-blue-500 hover:bg-blue-600 p-2 px-6 border-b-4 border-gray-400 rounded-md" href="/contactus" style={{ width: 'fit-content' }}>
                        <button className="text-white font-semibold">
                            Let’s Talk
                        </button>
                        <FaChevronRight className="text-white" />
                    </Link>

                </div>
            </div>

        </div>
    );
};

export default Banner;