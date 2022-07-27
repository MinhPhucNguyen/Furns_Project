import './SignIn.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import HeaderPageRoute from '../../../components/HeaderPageRoute';

function SignInPage() {
    return (
        <>
            <HeaderPageRoute>
                <div className="login">
                    <div className="form-login">
                        <div className="email-input">
                            <label htmlFor="email-user" className="label">
                                Email *
                            </label>
                            <input id="email-user" placeholder="Enter your email" />
                        </div>
                        <div className="password-input">
                            <label htmlFor="password-user" className="label">
                                Password *
                            </label>
                            <input id="password-user" placeholder="Enter your password" />
                        </div>
                        <div className="signin-btn">
                            <button>SIGNIN</button>
                        </div>
                        <div className="other-btn">
                            <div className="btn-left">
                                <Link
                                    to="/signup"
                                    onClick={() => {
                                        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                                    }}
                                >
                                    CREATE A ACCOUNT
                                </Link>
                            </div>
                            <div className="btn-right">
                                <a href="/">FORGET PASSWORD?</a>
                            </div>
                        </div>
                    </div>
                </div>
            </HeaderPageRoute>
        </>
    );
}

export default SignInPage;
