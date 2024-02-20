import Link from "next/link";
import GetStarted from "./settings/GetStarted";


const navLinks = [
    {
        path: ' /',
        title: 'Home'
    },
    {
        path: ' /aboutus',
        title: 'About'
    },
    {
        path: ' /services',
        title: 'Services'
    },
    {
        path: ' /blogs',
        title: 'Blogs'
    },
    {
        path: ' /login',
        title: 'Login'
    },
]

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center container mx-auto">
            <Link href='/'> <h1 className="text-xl font-semibold">Hyascka</h1></Link>

            {/* <div className="text-5xl font-extrabold text-blue-500 font-'YourCustomFont'">
                <span className="text-gray-800">H</span>
                <span className="text-gray-700">y</span>
                <span className="text-gray-600">a</span>
                <span className="text-gray-500">s</span>
                <span className="text-gray-400">c</span>
                <span className="text-gray-300">k</span>
                <span className="text-gray-200">a</span>
            </div> */}


            <ul className="flex justify-center items-center">
                {
                    navLinks.map(({ path, title }) => (
                        <li className="mx-2" key={path}>
                            <Link href={path}>{title}</Link>

                        </li>
                    ))
                }
                <Link href='/'><GetStarted /></Link>
            </ul>

        </nav>
    );
};

export default Navbar;