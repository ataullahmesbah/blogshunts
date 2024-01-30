import Image from "next/image";
import hyasckaSuccess from '@/assets/excellence/hyascka-successfully-story.jpeg'
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";


const ExcellenceHub = () => {
    return (
        <div className="">
            <div className="container mx-auto flex flex-col p-2 lg:flex-row items-center justify-between pt-12 pb-12">

                <div className="lg:w-1/2 space-y-6 lg:pr-10 text-center lg:text-left">
                    <h1 className="text-3xl font-semibold">Unlocking Digital Success with HYASCKA</h1>
                    <p>Discover a new era of transparency and results with [Your Company Name]. We cut through industry noise to deliver impactful digital marketing solutions. Your success, our commitment. Trust us to redefine your brand’s online presence.</p>
                    <p>At HYASCKA, we understand the frustration of navigating through - snake oil - narratives. Our commitment goes beyond intentions – we bring tangible, impactful results to the forefront of your digital marketing strategy.</p>

                    <Link className="flex items-center gap-3 bg-blue-500 hover:bg-blue-600 p-2 px-6 border-b-4 border-gray-400 rounded-md" href="/contactus" style={{ width: 'fit-content' }}>
                        <button className="text-white font-semibold">
                            Partner With Us
                        </button>
                        <FaChevronRight className="text-white" />
                    </Link>

                </div>

                <div className="lg:w-1/2 mt-5 lg:mt-0">
                    <Image src={hyasckaSuccess} alt="Unlocking Digital Success with HYASCKA" width={600} />
                </div>

            </div>
        </div>

    );
};

export default ExcellenceHub;