"use client";

import Link from 'next/link';
import { useState } from "react";
import { useRouter } from "next/navigation";
import { getUpperCaseFirstChar, getUpperCase } from '@/app/utility/StringUtil';

export default function ForgotPasswordForm(props) {

    var strRegister = getUpperCase(props.trans.register);
    var strEmail = getUpperCaseFirstChar(props.trans.email);
    var strAlreadyHaveAnAccount = getUpperCaseFirstChar(props.trans.already_have_an_account);
    var strDontHaveAnAccount = getUpperCaseFirstChar(props.trans.dont_have_an_account);
    var strForgotPassword = getUpperCaseFirstChar(props.trans.forgot_password);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState("user exists");

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name || !email || !password) {
            setError("All field are necessary");
            return;
        }

        try {
            const resUserExists = await fetch("api/user-exists", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }),
            });

            const { user } = await resUserExists.json();
            console.log("user: ", user)

            if (user) {
                setError("User already exists.");
                return;
            }

            const res = await fetch('api/register', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name, email
                })
            });

            if (res.ok) {
                const form = e.target;
                form.reset();
                router.push("/");
            } else {
                console.log("User registration failed")
            }
        } catch (error) {
            console.log("Error: ", error)
        }
    };

    console.log("Name: ", name);
    console.log("Email: ", email);

    return (
        <div className="grid place-items-center h-screen">
            <div className="shadow-lg p-5 rounded-lg border-t-4 border-green-400">
                <h1 className="text-xl font-bold my-4">Forgot Password</h1>

                <form onSubmit={handleSubmit} action="" className="flex flex-col gap-3">
                    <input
                        onChange={e => setEmail(e.target.value)}
                        type="text"
                        placeholder={strEmail}
                    />
                    <button className="bg-green-600 text-white font-bold cursor-pointer px-6 py-2">Send</button>
                </form>

                {error && (
                    <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">{error}</div>
                )}

                <div className="w-fit text-sm py-1 rounded-md mt-3">
                    <Link className="text-sm mt-3 text-right text-deco-none" href={'/login'}>
                        {strAlreadyHaveAnAccount} <span className="underline">Login</span>
                    </Link>
                </div>

                <div className="w-fit text-sm py-1 rounded-md mt-3">
                    <Link className="text-sm mt-3 text-right text-deco-none" href={'/register'}>
                        {strDontHaveAnAccount} <span className="underline">Register</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}
