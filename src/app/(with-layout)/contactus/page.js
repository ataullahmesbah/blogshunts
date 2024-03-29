export const metadata = {
    title: 'Contact Us | Hyascka',
    description: 'Contact Hyascka to get in touch with our team. Whether you have questions, feedback, or inquiries, we are here to help. Fill out the contact form or use our provided office information to reach us. We look forward to hearing from you!',
};


import { FaLocationArrow, FaMailBulk, FaPhone, FaSearchLocation, FaTelegram } from "react-icons/fa";


const ContactPage = () => {
    return (


        <div className="mt-5 mb-16">





            <div className="text-center py-20 p-4 space-y-5 items-center justify-center bg-sky-100 ">
                <h1 className="text-3xl font-semibold  ">Got a question? Contact us.</h1>
                <p className="text-center ">Whether you are just starting out or you are an old pro, our experts are here to help.</p>

            </div>

            <div className="container mx-auto mt-10">


                {/* Box Modules Talk */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-center justify-center p-3">

                    <div className="border-t-4 border-b-2 border-l-2 border-r-2 border-blue-500 p-8 lg:w-3/4 lg:py-16 rounded-md text-center transition-transform transform hover:scale-105">
                        <div className="text-4xl mb-4">
                            <span role="img" aria-label="Help Desk">
                                🛠️
                            </span>
                        </div>
                        <h2 className="font-semibold text-xl lg:text-2xl">Help Desk</h2>
                        <p className="text-gray-600 mt-2">Get assistance from our help desk team.</p>
                    </div>

                    <div className="border-t-4 border-b-2 border-l-2 border-r-2 border-green-500 p-8 lg:w-3/4 lg:py-16 rounded-md text-center mt-4 md:mt-0 transition-transform transform hover:scale-105">
                        <div className="text-4xl mb-4">
                            <span role="img" aria-label="Support Center">
                                🌐
                            </span>
                        </div>
                        <h2 className="font-semibold text-xl lg:text-2xl">Support Center</h2>
                        <p className="text-gray-600 mt-2">Explore our support resources and FAQs.</p>
                    </div>

                    <div className="border-t-4 border-b-2 border-l-2 border-r-2 border-purple-500 p-8 lg:w-3/4 lg:py-16 rounded-md text-center mt-4 lg:mt-0 transition-transform transform hover:scale-105">
                        <div className="text-4xl mb-4">
                            <span role="img" aria-label="Message Information">
                                📧
                            </span>
                        </div>
                        <h2 className="font-semibold text-xl lg:text-2xl">Message Information</h2>
                        <p className="text-gray-600 mt-2">Learn about our latest updates and messages.</p>
                    </div>

                </div>



                {/* contact form */}
                <div className="mt-10 lg:mt-16">
                    <div className="text-center mb-8 mt-8 space-y-2 lg:mb-16">
                        <p className="text-2xl font-semibold">Let’s Talk!</p>
                        <p className="text-xl">Give us a call or fill out the form below. We’d love to hear from you!</p>
                    </div>


                    <div className="lg:flex lg:gap-16">

                        <form className="lg:w-1/2 px-2">
                            <div className="grid grid-cols-2 gap-4">

                                <div className="mb-4">
                                    <label className="block text-gray-600 mb-2" htmlFor="firstName">
                                        First Name *
                                    </label>
                                    <input
                                        className="w-full px-4 py-2 border rounded focus:outline-none focus:border-gray-500 bg-gray-100"
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        placeholder="John"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-600 mb-2" htmlFor="lastName">
                                        Last Name *
                                    </label>
                                    <input
                                        className="w-full px-4 py-2 border rounded focus:outline-none focus:border-gray-500 bg-gray-100"
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        placeholder="Doe"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">

                                <div className="mb-4">
                                    <label className="block text-gray-600 mb-2" htmlFor="companyName">
                                        Company Name
                                    </label>
                                    <input
                                        className="w-full px-4 py-2 border rounded focus:outline-none focus:border-gray-500 bg-gray-100"
                                        type="text"
                                        id="companyName"
                                        name="companyName"
                                        placeholder="ABC Corporation"
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="block text-gray-600 mb-2" htmlFor="phone">
                                        Phone
                                    </label>
                                    <input
                                        className="w-full px-4 py-2 border rounded focus:outline-none focus:border-gray-500 bg-gray-100"
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        placeholder="123-456-7890"
                                    />
                                </div>
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-600 mb-2" htmlFor="email">
                                    Email *
                                </label>
                                <input
                                    className="w-full px-4 py-2 border rounded focus:outline-none focus:border-gray-500 bg-gray-100"
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="john.doe@example.com"
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-600 mb-2" htmlFor="message">
                                    How can we help? *
                                </label>
                                <textarea
                                    className="w-full p-2 border-gray-400 border rounded-md"
                                    id="message"
                                    name="message"
                                    rows="4"
                                    placeholder="Your message..."
                                ></textarea>
                            </div>

                            <div className="mt-6 w-1/2">
                                <input
                                    className="w-full bg-blue-500 hover:bg-blue-600 p-2 px-6 text-white font-semibold border-b-4 border-gray-400 rounded-md"
                                    type="submit"
                                    value="Submit"
                                />
                            </div>
                        </form>

                        {/* Office Info */}
                        <div className="lg:w-1/2 space-y-4 mt-10 p-2">
                            <h2 className="text-3xl font-semibold">Get in Touch</h2>
                            <p className="flex gap-4 items-center">
                                <FaSearchLocation />
                                <span>1007 Via Merano Santa Barbara, CA 93111</span>
                            </p>
                            <p className="flex gap-4 items-center">
                                <FaPhone />
                                <span> Phone: 503.697.1441</span>
                            </p>
                            <p className="flex gap-4 items-center">
                                <FaMailBulk />
                                <span>hyascka@info.com</span>
                            </p>
                        </div>
                    </div>



                </div>
            </div>

        </div>
    );
};

export default ContactPage;