"use client";

import Link from 'next/link';
import { useState } from "react";
import { useRouter } from "next/navigation";
import { getUpperCaseFirstChar, getUpperCase } from '@/app/utility/StringUtil';

export default function RegisterForm(props) {

    var strLogin = getUpperCaseFirstChar(props.trans.login);
    var strRegister = getUpperCaseFirstChar(props.trans.register);
    var strEmail = getUpperCaseFirstChar(props.trans.email);
    var strPassword = getUpperCaseFirstChar(props.trans.password);
    var strAlreadyHaveAnAccount = getUpperCaseFirstChar(props.trans.already_have_an_account);
    var strDontHaveAnAccount = getUpperCaseFirstChar(props.trans.dont_have_an_account);
    var strForgotPassword = getUpperCaseFirstChar(props.trans.forgot_password);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
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
            console.log("resUserExists: ", resUserExists)
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
                    name, email, password
                })
            });

            if (res.ok) {
                const form = e.target;
                form.reset();
                router.push("/login");
            } else {
                console.log("User registration failed")
            }
        } catch (error) {
            console.log("Error: ", error)
        }
    };

    console.log("Name: ", name);
    console.log("Email: ", email);
    console.log("Password: ", password);

    return (
        <div className="grid place-items-center h-screen">
            <div className="shadow-lg p-5 rounded-lg border-t-4 border-green-400">
                <h1 className="text-xl font-bold my-4">{strRegister}</h1>

                <form onSubmit={handleSubmit} action="" className="flex flex-col gap-3">
                    <input
                        onChange={e => setName(e.target.value)}
                        type="text"
                        placeholder="Full Name"
                    />
                    <input
                        onChange={e => setEmail(e.target.value)}
                        type="text"
                        placeholder={strEmail}
                    />
                    <input
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                        placeholder={strPassword}
                    />
                    <button className="bg-green-600 text-white font-bold cursor-pointer px-6 py-2">{strRegister}</button>
                </form>

                {error && (
                    <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">{error}</div>
                )}

                <div className="w-fit text-sm py-1 rounded-md mt-3">
                    <Link className="text-sm mt-3 text-right text-deco-none" href={'/login'}>
                        {strAlreadyHaveAnAccount} <span className="underline">{strLogin}</span>
                    </Link>
                </div>

                <div className="w-fit text-sm py-1 rounded-md mt-3 text-deco-none">
                    <Link href={'/forgot-password'}>
                        <span className="underline">{strForgotPassword}</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}
