"use client";

import Link from 'next-intl/link';
import { useRouter, usePathname } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';

import { getUpperCaseFirstChar, getUpperCaseFirstCharEachWord, getUpperCase } from '@/app/utility/StringUtil';

export default function SelectTranslation(props) {

    const router = useRouter();
    const locale = useLocale(); // get current locale
    const pathname = usePathname();

    const changeLang = (locale) => {
        router.push(`/${locale}`, `/${locale}`, { locale: false })
    }

    var strEnglish = getUpperCaseFirstCharEachWord(props.trans.english);
    var strKorea = getUpperCaseFirstCharEachWord(props.trans.korea);
    var strJapan = getUpperCaseFirstCharEachWord(props.trans.japan);
    var strVietnam = getUpperCaseFirstCharEachWord(props.trans.vietnam);

    return (
        <select className="custom-select" defaultValue={locale} onChange={(e) => changeLang(e.currentTarget.value)}> 
            <option value={"en"}>{strEnglish}</option>
            <option value={"jp"}>{strJapan}</option>
            <option value={"kr"}>{strKorea}</option>
            <option value={"vn"}>{strVietnam}</option>
        </select>
    )
}
