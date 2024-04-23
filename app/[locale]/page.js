import Link from 'next-intl/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Metadata } from 'next';

import PaginationControls from "@/app/[locale]/youtube-ranking/view/PaginationView";
import Navbar from './components/frontend/Navbar';
import YouTubeRanking from "@/app/[locale]/youtube-ranking/page";

export default function Home() {



    return (
        <YouTubeRanking />
    );
}
