import Link from "next/link";
import { FaBackward } from "react-icons/fa";


const SignUpPage = () => {
    return (
        <div className="container mx-auto ">

            <div className=" font-semibold flex justify-between items-center p-4">
                <Link href='/' className="flex items-center gap-4" ><FaBackward /> <h3>Back to Home</h3></Link>
                <Link href='/login'>Already have an Account</Link>

            </div>
            {/* img optimize */}
            <div className="flex justify-center items-center text-center">
                <div className="mx-auto m-4">
                    <img
                        className="w-12"
                        src='https://i.ibb.co/LptmthK/image.png'
                        alt="blogs hunts"
                    />
                </div>
            </div>
            {/* img optimize */}


            <h2 className="text-xl font-semibold text-center">Sign Up into Hyascka</h2>


            {/* Log section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-between items-center mx-auto mt-8 p-4 lg:w-3/4">

                <div className="">

                    <div className="flex gap-2 items-center">
                        {/* First Name Input */}
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-600 mb-2">First Name</label>
                            <input
                                type="name"
                                id="name"
                                name="name"
                                placeholder="Your First Name"
                                className="w-full px-4 py-2 border rounded focus:outline-none focus:border-gray-500 bg-gray-100"
                            />
                        </div>
                        {/* Last Name Input */}

                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-600 mb-2">Last Name</label>
                            <input
                                type="name"
                                id="name"
                                name="name"
                                placeholder="Your Last Name"
                                className="w-full px-4 py-2 border rounded focus:outline-none focus:border-gray-500 bg-gray-100"
                            />
                        </div>

                    </div>


                    {/* Email Input */}
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-600 mb-2">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="name@example.com"
                            className="w-full px-4 py-2 border rounded focus:outline-none focus:border-gray-500 bg-gray-100"
                        />
                    </div>

                    {/* Password Input */}
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-gray-600 mb-2 ">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Your Password"
                            className="w-full px-4 py-2 border rounded focus:outline-none focus:border-gray-500 bg-gray-100"
                        />
                    </div>
                    {/* Confirm Password Input */}
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-gray-600 mb-2 ">Confirm Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Confirm Password"
                            className="w-full px-4 py-2 border rounded focus:outline-none focus:border-gray-500 bg-gray-100"
                        />
                    </div>

                    {/* Submit Button */}
                    <p
                        type="submit"
                        className="bg-black text-center text-white px-4 py-2 rounded hover:bg-gray-800 focus:outline-none focus:shadow-outline-blue"
                    >
                        Sign Up
                    </p>

                </div>


                {/* Or */}

                <div className="hidden lg:flex items-center justify-center flex-col mx-auto space-y-5">
                    <div className="border-l items-center justify-center border-gray-600 h-10"></div>
                    <div className="text-gray-500">OR</div>
                    <div className="border-l items-center justify-center border-gray-600 h-10"></div>
                </div>






                {/* Social Login Section */}
                <div className="space-y-3">
                    <div className="flex items-center border-gray-700 border rounded-md justify-between px-16 p-2">
                        <img className="w-8 h-8" src="https://i.ibb.co/SKdhz0J/image.png" alt="Login Google" />
                        <p className="text-xs font-semibold">Sign In With Google</p>
                    </div>
                    <div className="flex items-center border-gray-700 border rounded-md justify-between px-16 p-2">
                        <img className="w-8 h-8" src="https://i.ibb.co/9qXCrfs/image.png" alt="Login Google" />
                        <p className="text-xs font-semibold">Sign In With Facebook</p>
                    </div>
                    <div className="flex items-center border-gray-700 border rounded-md justify-between px-16 p-2">
                        <img className="w-8 h-8" src="https://i.ibb.co/JnD2t8y/image.png" alt="Login Google" />
                        <p className="text-xs font-semibold">Sign In With Github</p>
                    </div>
                </div>





            </div>


            {/* Forgotten Password */}
            {/* <Link href='/'> <p className="text-center mt-16  uppercase font-medium">Forgotten password?</p></Link> */}

            <div className="text-center mt-10 mb-10">
                <p>Secure Login with reCAPTCHA subject to Google</p>
                <p>Terms & Privacy</p>
            </div>




        </div>
    );
};

export default SignUpPage;