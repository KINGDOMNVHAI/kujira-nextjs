"use client";

import Link from 'next/link';
import { useState } from "react";
import { useRouter } from "next/navigation";
import { getUpperCaseFirstChar, getUpperCase } from '@/app/utility/StringUtil';

export default function UpdateYouTubeRankForm(props) {

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

    const fetchData = async () => {
        const req = await fetch("api/update-youtube-ranking", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(
                {
                    id_channel: 'UCxUL0zS-XiU36bkUsr5dWbg',
                    name_channel: 'KINGDOM NVHAI',
                    url_channel: 'https://www.youtube.com/channel/UCxUL0zS-XiU36bkUsr5dWbg?sub_confirmation=1',
                    url_video_present: 'https://youtu.be/hxY99J_OMtg',
                    subcribe: 3190,
                    thumbnail_channel: 'img/channel/500x500/kingdom-nvhai-channel-thumbnail.jpg',
                    description_channel: '',
                    created_date_channel: '2015-06-28',
                    enable_channel: true,
                    hololive: true,
                },
                // {
                //     name: 'GTCoding',
                //     subcribe: 35100,
                //     thumbnail: 'img/channel/500x500/gtcoding-channel-thumbnail.jpg',
                //     created_date: '2015-06-13',
                //     facebook: '',
                //     twitter: 'https://www.youtube.com/watch?v=PEMfsqZ2-As',
                //     youtube: 'https://www.youtube.com/watch?v=PEMfsqZ2-As',
                //     video_present: undefined,
                // },
            ),
        });
        const newData = await req.json();


        
        if (req.ok) {
            console.log("done")
        }
        // return setData(newData.results);
    };
    
    const handleClick = (event) => {
        event.preventDefault();
        fetchData();
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name || !email || !password) {
            setError("All field are necessary");
            return;
        }

        try {
            // Check Channel Exist
            const resUserExists = await fetch("api/update-youtube-ranking", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }),
            });

            const { user } = await resUserExists.json();
            console.log("user: ", user)

            // if (user) {
            //     setError("User already exists.");
            //     return;
            // }

            // const res = await fetch('api/register', {
            //     method: "POST",
            //     headers: {
            //         "Content-Type": "application/json"
            //     },
            //     body: JSON.stringify({
            //         name, email, password
            //     })
            // });

            // if (res.ok) {
            //     const form = e.target;
            //     form.reset();
            //     router.push("/");
            // } else {
            //     console.log("User registration failed")
            // }
        } catch (error) {
            console.log("Error: ", error)
        }
    };

    return (
        <div>
            <h3 className='mt-10 text-center'>Auto Update Youtube Ranking</h3>
            <div className="container">
                <div className="main-body">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="card">
                                <div className="card-body">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                            <h6 className="mb-0">Database</h6> <span className="text-secondary">MongoDB</span>
                                        </li>
                                        <li
                                            className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                            <h6 className="mb-0">Project</h6> <span className="text-secondary">KDPLAYBACK</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="card">
                                <div className="card-body">
                                    <div className="row mb-3 px-3">
                                        By clicking this button, you will get data from API of YouTube and update number of subcribe to your database.
                                        If BE is failed, FE will automatically continue work.
                                    </div>
                                    {/* <div className="row mb-3">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Address</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div> */}
                                    <div className="row">
                                        <div className="col-sm-3"></div>
                                        <div className="col-sm-9 text-secondary">
                                            <input type="button" onClick={handleClick} className="btn btn-primary px-4" value="Update"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
