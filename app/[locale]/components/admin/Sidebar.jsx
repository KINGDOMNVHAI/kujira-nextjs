import Link from 'next-intl/link';
import Image from 'next/image';
import { signOut } from 'next-auth/react';
import { FaPlay, FaTv, FaBorderAll } from "react-icons/fa";
import { FiSettings } from 'react-icons/fi'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import { RxSketchLogo, RxDashboard, RxPerson } from 'react-icons/rx'
import { useTranslations } from 'next-intl';

import SignOutBtn from './SignOutBtn';

import Header from './Header';
import { getUpperCaseFirstChar, getUpperCase } from '@/app/utility/StringUtil';

export default function Navbar() {

    const tNavbar = useTranslations('navbar');
    const tCountry = useTranslations('country');
    const tCommon = useTranslations('common');
    var strVideo = getUpperCase(tNavbar('video'));
    var strAbout = getUpperCase(tNavbar('about'));
    var strContact = getUpperCase(tNavbar('contact'));
    var strLogin = getUpperCase(tCommon('login'));

    const transVO = {
        "login": tCommon('login'),
        "sign_in": tCommon('sign-in'),
        "email": tCommon('email'),
        "password": tCommon('password'),
        "english": tCountry('english'),
        "korea": tCountry('korea'),
        "japan": tCountry('japan'),
        "vietnam": tCountry('vietnam'),
    }

    const handleSignOut = async (e) => {
        e.preventDefault()
        signOut()
    };

    return (
        <div className='fixed w-20 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between'>
            <div className='flex flex-col items-center'>
                <Link href='/'>
                    <div className='bg-purple-800 text-white p-3 rounded-lg inline-block'>
                        <RxSketchLogo size={20} />
                    </div>
                </Link>
                <span className='border-b-[1px] border-gray-200 w-full p-2'></span>
                <Link href='/dashboard'>
                    <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block'>
                        <RxDashboard size={20} />
                    </div>
                </Link>
                <Link href='/channels'>
                    <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block'>
                        <FaTv size={20} />
                    </div>
                </Link>
                <Link href='/videos'>
                    <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block'>
                        <FaPlay size={20} />
                    </div>
                </Link>
                <Link href='/profile'>
                    <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block'>
                        <RxPerson size={20} />
                    </div>
                </Link>
                <Link href='/setting'>
                    <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block'>
                        <FiSettings size={20} />
                    </div>
                </Link>
                <Link href='/kanban'>
                    <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block'>
                        <FaBorderAll size={20} />
                    </div>
                </Link>
            </div>
        </div>
    )
}
