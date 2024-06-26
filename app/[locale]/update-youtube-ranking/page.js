import { useTranslations } from 'next-intl';

import "@/public/asset/youtube-ranking/css/style.css";
import "@/public/asset/youtube-ranking/css/bootstrap.min.css";

import Navbar from '../components/frontend/Navbar';
import UpdateYouTubeRankForm from "./view/UpdateYouTubeRankForm";

export const metadata = {
    title: 'KDPLAYBACK | CONTACT',
    description: 'KDPLAYBACK',
    keywords: 'subcribe youtube ranking, hololive, vtuber, pewdiepie, nextjs',
    viewport: 'width=device-width',
    openGraph: {
        title: 'Twitter',
        description: 'Generated by create next app Twitter',
    }
}

export default function UpdateYouTubeRank() {

    const tCommon = useTranslations('common');

    const transVO = {
        "login": tCommon('login'),
        "sign_in": tCommon('sign-in'),
        "register": tCommon('register'),
        "email": tCommon('email'),
        "password": tCommon('password'),
    }

    return (
        <div>
            <Navbar />
            <UpdateYouTubeRankForm 
                trans={transVO}
            />
        </div>
    )
}
