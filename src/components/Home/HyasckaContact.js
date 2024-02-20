import Link from "next/link";


const HyasckaContact = () => {
    return (
        <div className="flex flex-col lg:flex-row container lg:gap-7 bg-blue-100 p-14 justify-center items-center lg:w-[60%] text-center mx-auto rounded-md m-10">
            <div className="font-bold text-2xl mb-4 lg:mb-0 ">
                <h3>Hyascka can help you own your piece of the web. Let’s talk.</h3>
            </div>

            <div className=" lg:flex lg:justify-end">
                <Link
                    className="flex items-center gap-3 bg-blue-500 hover:bg-blue-600 p-5 px-6 border-b-4 border-gray-400 rounded-md"
                    href="/contactus"
                >
                    <button className="text-white font-semibold uppercase">Contact Hyascka Today</button>
                </Link>
            </div>
        </div>

    );
};

export default HyasckaContact;