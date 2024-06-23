import Image from "next/image";
import Link from "next/link";
import { FaCarOn } from "react-icons/fa6";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoSearch } from "react-icons/io5";

const Navber = () => {

    const navItems = [
        {
            title: 'Home',
            path: '/'
        },
        {
            title: 'About',
            path: '/about'
        },
        {
            title: 'Services',
            path: '/services'
        },
        {
            title: 'Blog',
            path: '/blog'
        },
        {
            title: 'Contacts',
            path: '/contacts'
        },
    ]

    return (
        <div className="bg-slate-100 ">
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden border border-black">
                            <Link href='/'>
                                <FaCarOn className="text-3xl" />
                            </Link>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                navItems.map(nav => (
                                    <Link key={nav.path} href={nav.path} className="mr-5 font-medium hover:text-orange-600 duration-300">{nav.title}</Link>
                                ))
                            }
                        </ul>
                    </div>
                    <a className=" text-2xl font-semibold ml-2">Cars<span className="text-orange-600">Doctor</span></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            navItems.map(nav => (
                                <Link key={nav.path} href={nav.path} className="mr-5 font-medium hover:text-orange-600 duration-300">{nav.title}</Link>
                            ))
                        }

                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="flex space-x-3 items-center">
                        <AiOutlineShoppingCart className="text-2xl" />
                        <IoSearch className="text-2xl" />
                        <a className="btn btn-outline btn-primary text-white px-4">Appointment</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navber;