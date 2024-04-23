"use client";

import Link from 'next-intl/link';
import { useRouter, redirect, useSearchParams } from 'next/navigation';
import React, { useState, useEffect, useCallback } from 'react';
import { FaTwitter } from "react-icons/fa";
import { HiLink, HiPlay } from "react-icons/hi";

import PaginationControls from './PaginationControls';
import YouTubeRankingStore from '../store/YouTubeRankingStore';

export default function PaginationView({ parentFn, requestSearch, channels = [] }) {

    const searchParams = useSearchParams();

    const totalResult = channels.length;
    parentFn(totalResult);

    const page = Number(searchParams.get('page') ?? "1") ; // default value is "1"

    const per_page = Number(searchParams.get('per_page') ?? "10")

    var totalPage = Math.ceil(channels.length / per_page);

    // mocked, skipped and limited in the real app
    const startData = (page - 1) * per_page;
    const endData = startData + per_page;
    const data = channels.slice(startData, endData);

    const SocialURL = ({ icon, url }) => {
        return url ? (
            <Link className="font-bold text-lg text-blue-700" target="_blank" href={url}>{icon}</Link>
        ) : (
            ''
        )
    }

    const VideoPresent = ({ url }) => {
        return url && (
            <Link className="btn d-block w-100 d-sm-inline-block btn-light" target="_blank" href={url}>Watch Video</Link>
        )
    }

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
            <div key={item._id} className="job-box d-md-flex align-items-center justify-content-between mb-30">
                <div className="job-left my-4 d-md-flex align-items-center flex-wrap">
                    <div className="col-md-3 text-center">
                        <img src={item.thumbnailChannel} width="100" alt={item.nameChannel} />
                    </div>
                    <div className="col-md-8">
                        <h5 className="text-md-left">{item.nameChannel}</h5>
                        <p className="d-md-flex">
                            Created date: {item.createdDateChannel}<br />
                            Subcribe: {item.subscribe}
                        </p>
                        <p>{item.descriptionChannel}</p>

                        <p className="d-md-flex">
                            <SocialURL icon={<FaTwitter size={24} />} url={item.twitterChannel}></SocialURL>{'\u00A0'}{'\u00A0'}
                            <SocialURL icon={<HiPlay size={24} />} url={item.youtube}></SocialURL>{'\u00A0'}{'\u00A0'}
                            <SocialURL icon={<HiLink size={24} />} url={item.websiteChannel}></SocialURL>
                        </p>
                    </div>
                </div>
                <div className="job-right my-4 flex-shrink-0">
                    <VideoPresent url={item.urlVideoPresent}></VideoPresent>
                </div>
            </div>
        ))
    }

    return (
        <div>
            <ConditionalPagination />
            {list}
            <ConditionalPagination />
        </div>
    )
}
