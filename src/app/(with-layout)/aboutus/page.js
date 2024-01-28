export const metadata = {
    title: 'About Us | Hyascka',
    description: 'About Hyascka to get in touch with our team. Whether you have questions, feedback, or inquiries, we are here to help. Fill out the contact form or use our provided office information to reach us. We look forward to hearing from you!',
};

const AboutPage = () => {
    return (
        <div className="mt-5 mb-16">
            <div className="text-center py-20 p-4 space-y-5 items-center justify-center bg-sky-100 ">
                <h1 className="text-3xl font-semibold ">About Us</h1>

            </div>

            {/* About Banner */}
            <div className="bg-gray-100 py-10">
                <div className="flex items-center justify-between container mx-auto gap-5 px-4 lg:px-10">

                    <div className="space-y-4">
                        <h1 className="lg:text-4xl md:text-3xl text-2xl font-semibold">Full-Service Digital Marketing Service</h1>
                        <p>Since our foundation in 2006, HYASCKA has effectively helped businesses experience growth through data-driven digital marketing campaigns. We emphasize a disciplined, transparent approach, and we won't be out communicated.</p>
                        <p>If you want to experience what it's like to work with (or work for) an full service digital marketing agency that does things a little bit differently than you've experienced in the past, learn more about us below.</p>

                        <div className="mt-6 ">

                            <button className=" bg-blue-500 hover:bg-blue-600 p-2 px-6 text-white font-semibold border-b-4 border-gray-400 rounded-md">Contact Us</button>
                        </div>
                    </div>
                    {/* right side */}
                    <div>

                        <img className="rounded-md " src="https://i.ibb.co/GWt1NTg/image.png" alt="Hyascka About Us" />
                    </div>

                </div>
            </div>



        </div>
    );
};

export default AboutPage;