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
        path: ' /features',
        title: 'Features'
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