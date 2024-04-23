import { React, useCallback } from "react";

// import UpdateSubcribeBtn from './view/UpdateSubcribeBtn';
import PaginationView from './view/PaginationView';
import Header from '../components/admin/Header';
import Sidebar from '../components/admin/Sidebar';

export default function Channels() {

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

    return (
        <div className='flex'>
            <Sidebar />
            <main className='ml-20 w-full'>
                <Header />

                <PaginationView />
            </main>
        </div>
    )
}
