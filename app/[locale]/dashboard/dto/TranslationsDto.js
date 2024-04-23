import { getServerSession } from "next-auth";
import { useTranslations } from 'next-intl';

export default function TranslationsDto() {

    const tDashboard = useTranslations('dashboard');
    const tSearchView = useTranslations('search-view');

    const transDto = {
        "enter_your_keywords": tSearchView('enter-your-keywords'),
        "subcribe_filter": tSearchView('subcribe-filter'),
        "subcribe": tSearchView('subcribe'),
        "increase": tSearchView('increase'),
        "decrease": tSearchView('decrease'),
        "vtuber": tSearchView('vtuber'),
        "development": tSearchView('development'),
        "cosplay": tSearchView('cosplay'),
    }

    return transDto;
}
