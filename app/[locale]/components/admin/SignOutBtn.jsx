"use client";

import Link from 'next-intl/link';
import Image from 'next/image';
import { signOut } from 'next-auth/react';
import { useTranslations } from 'next-intl';
import { redirect } from "next/navigation";

export default function SignOutBtn() {

    // Logout (MongoDB, use signIn)
    // const handleSignOut = async (e) => {
    //     e.preventDefault()
    //     signOut()
    // };

    // Check login
    const token = localStorage.getItem("jwtToken");
    if (token == null || token == undefined) redirect("/login");

    // Logout (API Spring Boot)
    const handleLogOut = async (e) => {
        e.preventDefault()
        localStorage.removeItem("jwtToken");
        location.reload();
    };

    return (
        <div>
            <a className='bg-green-200 p-2 rounded-lg' onClick={handleLogOut}>
                Logout
            </a>
        </div>
    )
}
