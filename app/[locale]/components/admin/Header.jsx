"use client";

import Link from 'next-intl/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import SignOutBtn from './SignOutBtn';

export default function Header() {

    return (
        <div className='flex justify-between px-4 pt-4'>
            <h3>Dashboard</h3>
            <SignOutBtn />
        </div>
    )
}
