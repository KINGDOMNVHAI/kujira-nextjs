"use client"

import Image from "next/image";

export default function SignInGoogleBtn() {

    return (
        <button className="flex items-center gap-4 shadow-xl rounded-lg pl-3">
            <Image src="/google-logo.png" height={30} width={30} />
            <span className="bg-blue-500 text-white px-4 py-3">
                Sign in with Google
            </span>
        </button>
    )
}
