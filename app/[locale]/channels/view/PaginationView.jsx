"use client";

import { BsPersonFill, BsThreeDotsVertical, BsFillPencilFill } from 'react-icons/bs'
import React, { useState, useEffect, useCallback } from 'react';
import { useRouter, redirect, useSearchParams } from 'next/navigation';

import PaginationControls from './PaginationControls';
import ChannelStore from '../store/ChannelStore';

export default function PaginationView() {

    const [channels, setChannels] = useState([])
    const searchParams = useSearchParams();

    useEffect(()=>{
        // Data default
        const c = new ChannelStore().getAllChannelsMySQL();
        console.log("Channels list")
        console.log(c)
        c.then((res) => {
            setChannels(res.data)
        })
    }, [])

    const totalResult = channels.length;
    // parentFn(totalResult);

    const page = Number(searchParams.get('page') ?? "1"); // default value is "1"

    const per_page = Number(searchParams.get('per_page') ?? "10")

    var totalPage = Math.ceil(channels.length / per_page);

    // mocked, skipped and limited in the real app
    const startData = (page - 1) * per_page;
    const endData = startData + per_page;
    const data = channels.slice(startData, endData);

    const ConditionalPagination = useCallback(() => {
        return totalResult > per_page && (
            <PaginationControls
                page={page}
                per_page={per_page}
                totalResult={totalResult}
                hasNextPage={page < totalPage}
                hasPervPage={page > 1}
            />
        )
    }, [totalResult, per_page, page])

    var list = <h3>LOADING...</h3>;

    if (data && data.length > 0) {
        list = data.map((item) => (
            <ul>
                {data.map((order, id) => (
                    <li key={id} className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-3 grid md:grid-cols-4'>
                        <div className='flex items-center'>
                            <p className='pl-4'>{order.nameChannel}</p>
                        </div>
                        <p className='text-gray-600 sm:text-left text-right'>{order.subscribe}</p>
                        <p className='hidden md:flex'>{order.createdDateChannel}</p>
                        <div className='sm:flex hidden justify-between items-center'>
                            <div className='bg-purple-100 rounded-lg p-3'>
                                <BsFillPencilFill className='text-purple-800' />
                            </div>
                            <BsThreeDotsVertical />
                        </div>
                    </li>
                ))}
            </ul>
        ))
    }

    return (
        <div>
            <div className='p-4'>
                <div className='w-full m-auto border rounded-lg bg-white overflow-y-auto'>
                    <div className='my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'>
                        <span>Name</span>
                        <span className='sm:text-left text-right'>Subscribe</span>
                        <span className='hidden md:grid'>Created Date</span>
                        <span className='hidden md:grid'>Action</span>
                    </div>
                </div>
                {list}
            </div>

            <ConditionalPagination />
        </div>
    )
}
