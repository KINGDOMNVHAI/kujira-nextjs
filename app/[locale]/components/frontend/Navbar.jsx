import Link from 'next-intl/link';
import Image from 'next/image';
import SelectTranslation from './SelectTranslation';
import { getUpperCaseFirstChar, getUpperCase } from '@/app/utility/StringUtil';

// import KR from '../../../public/korea.png'
// import JP from '../../../public/japan.png'
// import UK from '../../../public/united-kingdom.png'
// import VN from '../../../public/vietnam.png'

import { useTranslations } from 'next-intl';

export default function Navbar() {

    const tNavbar = useTranslations('navbar'); // en.json -> "navbar"
    const tCountry = useTranslations('country');
    const tCommon = useTranslations('common');
    var strVideo = getUpperCase(tNavbar('video'));
    var strAbout = getUpperCase(tNavbar('about'));
    var strContact = getUpperCase(tNavbar('contact'));
    var strLogin = getUpperCase(tCommon('login'));
    
    const transVO = {
        "login": tCommon('login'),
        "sign_in": tCommon('sign-in'),
        "email": tCommon('email'),
        "password": tCommon('password'),
        "english": tCountry('english'),
        "korea": tCountry('korea'),
        "japan": tCountry('japan'),
        "vietnam": tCountry('vietnam'),
    }

    return (
        <div className="p-4 flex justify-between items-center shadow-md">

            <div className="flex justify-between">
                <Link className="font-bold text-lg text-blue-700 text-deco-none" href={"/"}>KAWAII CODE</Link>

                <Link className="font-bold text-lg text-blue-700 text-deco-none ml-4" href={"/video"}>{strVideo}</Link>

                <Link className="font-bold text-lg text-blue-700 text-deco-none ml-4" href={"/about"}>{strAbout}</Link>

                <Link className="font-bold text-lg text-blue-700 text-deco-none ml-4" href={"/login"}>{strLogin}</Link>
            </div>

            <div className="flex justify-between items-center">
                {/* <Link className="text-deco-none ml-2" href="/" locale="en">
                    {strEnglish}
                </Link>
                <Link className="text-deco-none ml-2" href="/" locale="kr">
                    {strKorean}
                </Link>
                <Link className="text-deco-none ml-2" href="/" locale="vn">
                    {strVietnam}
                </Link> */}
                
                <SelectTranslation 
                    trans={transVO}
                />
            </div>
        </div>
    )
}
