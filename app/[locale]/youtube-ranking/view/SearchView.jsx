"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { HiSearch } from "react-icons/hi";
import { FaFileExcel } from "react-icons/fa";

import { getUpperCaseFirstChar } from '@/app/utility/StringUtil';
import PaginationView from './PaginationView';
import YouTubeRankingStore from '../store/YouTubeRankingStore';

export default function SearchView(props) {

    const [channels, setChannels] = useState([])
    const [total, setTotal] = useState(0);
    const inputKeyword = useRef(null);
    const requestSearch = {};

    useEffect(()=>{
        // Data default
        const c = new YouTubeRankingStore().getAllChannelsMySQL();
        console.log("YouTubeRankingStore")
        console.log(c)
        c.then((res) => {
            setChannels(res.data)
        })
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();

        const requestSearch = {
            keyword: inputKeyword.current.value
        };

        const res = await new YouTubeRankingStore().searchChannelsMySQL(requestSearch)
        if (res.ok) {
            console.log(res.data);
            setChannels(res.data)
        } else {
            alert("Search failed");
        }
    };

    // Cách dùng đa ngôn ngữ: dịch từ page.js rồi gửi qua props.
    var strEnterYourKeywords = getUpperCaseFirstChar(props.trans.enter_your_keywords);
    var strSubcribeFilter = getUpperCaseFirstChar(props.trans.subcribe_filter);
    var strIncrease = getUpperCaseFirstChar(props.trans.increase);
    var strDecrease = getUpperCaseFirstChar(props.trans.decrease);
    var strVtuber = getUpperCaseFirstChar(props.trans.vtuber);
    var strDevelopment = getUpperCaseFirstChar(props.trans.development);
    var strCosplay = getUpperCaseFirstChar(props.trans.cosplay);
    var strTotal = getUpperCaseFirstChar(props.trans.total);

    const parentFn = useCallback((childData) => {
        setTotal(childData);
    }, []);

    return (
        <div className="career-search mb-20 min-height-700">
            <form action="#" className="career-form mb-20" onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-md-6 col-lg-3 my-3">
                        <div className="input-group position-relative">
                            <input
                                id="keywords"
                                name="keywords"
                                type="text"
                                className="form-control"
                                placeholder={strEnterYourKeywords}
                                ref={inputKeyword}
                            />
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 my-3">
                        <div className="select-container">
                            <select name="filter" className="custom-select">
                                <option defaultValue="">{strSubcribeFilter}</option>
                                <option value="asc">{strIncrease}</option>
                                <option value="desc">{strDecrease}</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 my-3">
                        <div className="select-container">
                            <select name="category" className="custom-select">
                                <option defaultValue="">Select YouTube Content</option>
                                <option value="vtuber">{strVtuber}</option>
                                <option value="development">{strDevelopment}</option>
                                <option value="cosplay">{strCosplay}</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-2 col-lg-1 my-3">
                        <button type="submit" className="btn btn-lg btn-block btn-light btn-custom" id="contact-submit">
                            <HiSearch size={24} />
                        </button>
                    </div>
                    <div className="col-md-2 col-lg-1 my-3">
                        <button type="button" className="btn btn-lg btn-block btn-light btn-custom" id="excel-submit">
                            <FaFileExcel size={24} />
                        </button>
                    </div>
                </div>
            </form>

            <div className="filter-result">
                <p className="mb-30 ff-montserrat">{strTotal}: {total}</p>
                <PaginationView
                    parentFn={parentFn}
                    requestSearch={requestSearch}
                    channels={channels}
                />
            </div>
        </div>
    );
}
