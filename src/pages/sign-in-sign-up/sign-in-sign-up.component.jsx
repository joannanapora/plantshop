import React from 'react';
import './sign-in-sign-up.component.scss';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';
import BackArrow from "../../components/back-arrow/back-arrow.component";

const SignInSignUp = () => (
    <>
        <BackArrow/>
    <div className="sign-in-sign-up">
        <SignIn />
        <SignUp />
    </div></>
);

export default SignInSignUp;