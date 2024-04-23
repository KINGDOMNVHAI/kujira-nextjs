import Link from 'next-intl/link';
import { useTranslations } from 'next-intl';

import "@/public/asset/youtube-ranking/css/style.css";
import "@/public/asset/youtube-ranking/css/bootstrap.min.css";

import Navbar from '../components/frontend/Navbar';
import ForgotPasswordForm from "./view/ForgotPasswordForm";

export default function ForgotPassword() {

    const tCommon = useTranslations('common');
    const tLogin = useTranslations('login');

    const transVO = {
        "register": tCommon('register'),
        "sign_in": tCommon('sign-in'),
        "email": tCommon('email'),
        "password": tCommon('password'),
        "already_have_an_account": tLogin('already-have-an-account'),
        "dont_have_an_account": tLogin('dont-have-an-account'),
        "forgot_password": tLogin('forgot-password'),
    }

    return (
        <div>
            <Navbar />
            <ForgotPasswordForm 
                trans={transVO}
            />
        </div>
    )
}
