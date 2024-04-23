"use client";

import { BsPersonFill, BsThreeDotsVertical, BsFillPencilFill } from 'react-icons/bs'
import React, { useState, useEffect, useCallback } from 'react';
import { useRouter, redirect, useSearchParams } from 'next/navigation';

import KanbanStore from '../store/KanbanStore';

export default function KanbanView() {

    return (
        <div>
            <div className='grid grid-cols-10 gap-4 p-4'>
                <div className='lg:col-span-2 col-span-1 bg-white justify-between w-full border p-4 rounded-lg'>
                    <div class="p-6">
                        <div class="flex justify-center">
                            <img src="assets/images/avatars/01.png" alt="profile" class="w-20 h-20 mb-6 rounded img-fluid avatar-80" />
                        </div>
                        <h6 class="mb-2 font-bold text-blue-600">Create Sidebar in Dashboard</h6>
                        <small class="text-sm">13 Feb 2022</small>
                    </div>
                </div>
                <div className='lg:col-span-2 col-span-1 bg-white justify-between w-full border p-4 rounded-lg'>
                    <div class="p-6">
                        <div class="flex justify-center">
                            <img src="assets/images/avatars/01.png" alt="profile" class="w-20 h-20 mb-6 rounded img-fluid avatar-80" />
                        </div>
                        <h6 class="mb-2 font-bold text-blue-600">Create Sidebar in Dashboard</h6>
                        <small class="text-sm">13 Feb 2022</small>
                    </div>
                </div>
                <div className='lg:col-span-2 col-span-1 bg-white justify-between w-full border p-4 rounded-lg'>
                    <div class="p-6">
                        <div class="flex justify-center">
                            <img src="assets/images/avatars/01.png" alt="profile" class="w-20 h-20 mb-6 rounded img-fluid avatar-80" />
                        </div>
                        <h6 class="mb-2 font-bold text-blue-600">Create Sidebar in Dashboard</h6>
                        <small class="text-sm">13 Feb 2022</small>
                    </div>
                </div>
                <div className='lg:col-span-2 col-span-1 bg-white justify-between w-full border p-4 rounded-lg'>
                    <div class="p-6">
                        <div class="flex justify-center">
                            <img src="assets/images/avatars/01.png" alt="profile" class="w-20 h-20 mb-6 rounded img-fluid avatar-80" />
                        </div>
                        <h6 class="mb-2 font-bold text-blue-600">Create Sidebar in Dashboard</h6>
                        <small class="text-sm">13 Feb 2022</small>
                    </div>
                </div>
                <div className='lg:col-span-2 col-span-1 bg-white justify-between w-full border p-4 rounded-lg'>
                    <div class="p-6">
                        <div class="flex justify-center">
                            <img src="assets/images/avatars/01.png" alt="profile" class="w-20 h-20 mb-6 rounded img-fluid avatar-80" />
                        </div>
                        <h6 class="mb-2 font-bold text-blue-600">Create Sidebar in Dashboard</h6>
                        <small class="text-sm">13 Feb 2022</small>
                    </div>
                </div>
            </div>
        </div>
    )
}
