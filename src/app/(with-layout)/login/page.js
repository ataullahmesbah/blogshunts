import Image from "next/image";
import Link from "next/link";



const LogIn = () => {
    return (
        <div className="container mx-auto">

            <div className="text-xs font-semibold flex justify-between items-center p-4">
                <Link href='/'><h3>Back to Home</h3></Link>
                <Link href='/'>Create an Account</Link>

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


            <h2 className="text-xl font-semibold text-center">BlogsHunts</h2>


            {/* Log section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-between items-center mt-8 p-4">

                <div className="">

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

                    {/* Submit Button */}
                    <p
                        type="submit"
                        className="bg-black text-center text-white px-4 py-2 rounded hover:bg-gray-800 focus:outline-none focus:shadow-outline-blue"
                    >
                        Log In
                    </p>

                </div>

                {/* OR */}


                <div className="flex items-center justify-center  ">
                    {/* Left Border */}
                    <div className="border-t-2 border-purple-700"></div>

                    {/* Content in the Middle */}
                    <div className="p-8">
                        {/* Your content goes here */}
                        <h2 className="text-2xl font-semibold mb-4">OR</h2>
                        {/* ... other login form elements */}
                    </div>

                    {/* Right Border */}
                    <div className="border-l-2 h-1/2"></div>
                </div>

                {/* Social Login Section */}
                <div className="space-y-3">
                    <div className="flex items-center border rounded-md justify-between px-16 p-2">
                        <img className="w-10 h-10" src="https://i.ibb.co/SKdhz0J/image.png" alt="Login Google" />
                        <p className="text-xs font-semibold">Sign In With Google</p>
                    </div>
                    <div className="flex  items-center border rounded-md justify-between px-16 p-2">
                        <img className="w-10 h-10" src="https://i.ibb.co/9qXCrfs/image.png" alt="Login Google" />
                        <p className="text-xs font-semibold">Sign In With Facebook</p>
                    </div>
                    <div className="flex  items-center border rounded-md justify-between px-16 p-2">
                        <img className="w-10 h-10" src="https://i.ibb.co/JnD2t8y/image.png" alt="Login Google" />
                        <p className="text-xs font-semibold">Sign In With Github</p>
                    </div>
                </div>





            </div>




        </div>
    );
};

export default LogIn;