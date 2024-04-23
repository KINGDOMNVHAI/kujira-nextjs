import Link from 'next-intl/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import "@/public/asset/youtube-ranking/css/style.css";
import "@/public/asset/youtube-ranking/css/bootstrap.min.css";

import SearchView from "./view/SearchView";
import Navbar from '../components/frontend/Navbar';

export default function YouTubeRanking() {

    const tChannel = useTranslations('channel-list');
    const tSearchView = useTranslations('search-view');
    const tCommon = useTranslations('common');

    const transVO = {
        "enter_your_keywords": tSearchView('enter-your-keywords'),
        "subcribe_filter": tSearchView('subcribe-filter'),
        "subcribe": tSearchView('subcribe'),
        "increase": tSearchView('increase'),
        "decrease": tSearchView('decrease'),
        "vtuber": tSearchView('vtuber'),
        "development": tSearchView('development'),
        "cosplay": tSearchView('cosplay'),
        "total": tCommon('total'),
    }

    return (
        <div>
            <Navbar />
            <div className="event-schedule-area-two bg-color pad100">
                <div className="container">
                    <div className="row my-5">
                        <div className="col-lg-10 mx-auto mb-4">
                            <div className="section-title text-center">
                                <h3 itemProp="title" className="top-c-sep">{tChannel('title')}</h3>
                                <p itemProp="description">{tChannel('description')}</p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-10 mx-auto">
                            <SearchView
                                trans={transVO}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
