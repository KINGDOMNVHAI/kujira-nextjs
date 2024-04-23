import { useTranslations } from 'next-intl';

import "@/public/asset/youtube-ranking/css/style.css";
import "@/public/asset/youtube-ranking/css/bootstrap.min.css";

import Navbar from '../components/frontend/Navbar';
import SignInForm from "./view/SignInForm";

export default function Login() {

    const tCommon = useTranslations('common');
    const tLogin = useTranslations('login');

    const transVO = {
        "login": tCommon('login'),
        "sign_in": tCommon('sign-in'),
        "register": tCommon('register'),
        "email": tCommon('email'),
        "password": tCommon('password'),
        "already_have_an_account": tLogin('already-have-an-account'),
        "dont_have_an_account": tLogin('dont-have-an-account'),
        "forgot_password": tLogin('forgot-password'),
    }

    return (
        <div>
            <Navbar />
            <SignInForm
                trans={transVO}
            />
        </div>
    )
}
