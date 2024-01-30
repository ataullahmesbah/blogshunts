import Image from "next/image";


const ExcellenceHub = () => {
    return (
        <div className="bg-gray-50">
            <div className="container mx-auto flex flex-col p-2 lg:flex-row items-center justify-between pt-12 pb-12">

                <div className="lg:w-1/2 space-y-3 lg:pr-10 text-center lg:text-left">
                    <h1 className="text-3xl font-semibold">Unlocking Digital Success with HYASCKA</h1>
                    <p>Discover a new era of transparency and results with [Your Company Name]. We cut through industry noise to deliver impactful digital marketing solutions. Your success, our commitment. Trust us to redefine your brand's online presence.</p>
                    <p>At HYASCKA, we understand the frustration of navigating through 'snake oil' narratives. Our commitment goes beyond intentions – we bring tangible, impactful results to the forefront of your digital marketing strategy.</p>
                </div>

                <div className="lg:w-1/2 mt-5 lg:mt-0">
                    <Image src='' alt="Unlocking Digital Success with HYASCKA" width={600} />
                </div>

            </div>
        </div>

    );
};

export default ExcellenceHub;