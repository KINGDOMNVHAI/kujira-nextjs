"use client"

import axios from "axios";
import Link from 'next-intl/link';
import Image from "next/image";
import SignInGoogleBtn from './SignInGoogleBtn';
import { signIn, signOut } from 'next-auth/react';
import { getUpperCaseFirstChar, getUpperCase } from '@/app/utility/StringUtil';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import bcrypt from "bcryptjs";

export default function SignInForm(props) {

    var strLogin = getUpperCase(props.trans.login);
    var strSignIn = getUpperCaseFirstChar(props.trans.sign_in);
    var strRegister = getUpperCaseFirstChar(props.trans.register);
    var strEmail = getUpperCaseFirstChar(props.trans.email);
    var strPassword = getUpperCaseFirstChar(props.trans.password);
    var strAlreadyHaveAnAccount = getUpperCaseFirstChar(props.trans.already_have_an_account);
    var strDontHaveAnAccount = getUpperCaseFirstChar(props.trans.dont_have_an_account);
    var strForgotPassword = getUpperCaseFirstChar(props.trans.forgot_password);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const request = {};

    const router = useRouter();

    // Handle login (use NextJS, MongoDB, nextauth route.js)
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await signIn("credentials", {
                email,
                password,
                redirect: false,
            });
            if (!res.ok) {
                setError("Invalid Credentials")
                return;
            }
            router.replace("dashboard")
        } catch (error) {
            console.log(error)
        }
    };

    // Handle login (use Spring Boot)
    // const handleLogin = async (e) => {
    //     e.preventDefault();

    //     const requestSearch = {
    //         keyword: inputKeyword.current.value
    //     };

    //     const res = await new YouTubeRankingStore().searchChannelsMySQL(requestSearch)
    //     if (res.ok) {
    //         console.log(res.data);
    //         setChannels(res.data)
    //     } else {
    //         alert("Search failed");
    //     }
    // };
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const salt = await bcrypt.genSalt(10);
            const hash = await bcrypt.hash(password, salt);
            const request = {
                email: email,
                password: hash,
            }

            const res = await axios.post('http://localhost:8080/api/v1/public/signin', request)

            console.log(res.config.data)
            if (res.status != 200) {
                setError(res.data.message)
                return;
            }

            setError("");
            const token = res.data.token;
            localStorage.setItem('jwtToken', token);
            router.replace("dashboard")
            // Redirect or perform any other actions
        } catch (error) {
            // Handle error
            setError("Invalid email or password");
            console.log(error)
        }
    };

    return (
        <div className="grid place-items-center h-screen">
            <div className="shadow-lg p-5 rounded-lg border-t-4 border-blue-600">
                <h1 className="text-xl font-bold my-4">{strSignIn}</h1>

                <form onSubmit={handleLogin} action="" className="flex flex-col gap-3">
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        type="text"
                        placeholder={strEmail}
                    />
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        placeholder={strPassword}
                    />
                    <button type="submit" className="bg-blue-600 text-white font-bold cursor-pointer px-6 py-2">{strLogin}</button>
                </form>

                <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">{error}</div>

                <div className="w-fit text-sm py-1 rounded-md mt-3">
                    <Link className="text-sm mt-3 text-right text-deco-none" href={'/register'}>
                        {strDontHaveAnAccount} <span className="underline">{strRegister}</span>
                    </Link>
                </div>

                <div className="w-fit text-sm py-1 rounded-md mt-3">
                    <Link href={'/forgot-password'}>
                        <span className="underline">{strForgotPassword}</span>
                    </Link>
                </div>

                <br /><br />
                <SignInGoogleBtn />
            </div>
        </div>
    )
}
