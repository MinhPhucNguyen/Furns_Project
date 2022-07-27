import './SignUp.scss';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderPageRoute from '../../../components/HeaderPageRoute';

function SignUpPage() {
    const [isDisable, setIsDisable] = useState(true);

    const handleCheck = (e) => {
        e.target.checked ? setIsDisable(false) : setIsDisable(true);
    };

    return (
        <>
            <HeaderPageRoute>
                <div className="signup">
                    <div className="form-signup">
                        <div className="row">
                            <div className="firstname-input">
                                <label htmlFor="firstname-user" className="label">
                                    First Name *
                                </label>
                                <input id="firstname-user" />
                            </div>
                            <div className="lastname-input">
                                <label htmlFor="lastname-user" className="label">
                                    Last Name *
                                </label>
                                <input id="lastname-user" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="info-input">
                                <label htmlFor="email-user" className="label">
                                    Email *
                                </label>
                                <input id="email-user" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="info-input">
                                <label htmlFor="phone" className="label">
                                    Phone *
                                </label>
                                <input id="phone" type="email" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="info-input">
                                <label htmlFor="password" className="label">
                                    Password *
                                </label>
                                <input id="password" type="password" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="info-input">
                                <label htmlFor="confirmpassword" className="label">
                                    Confirm Password *
                                </label>
                                <input id="confirmpassword" type="password" />
                            </div>
                        </div>
                        <div className="checkbox-policy">
                            <div className="checkbox">
                                <input type="checkbox" id="policy" onChange={handleCheck} />
                                <label htmlFor="policy">I've read and accept the Privacy Policy</label>
                            </div>
                            <p>
                                By signing up, you agree to our <a href="/">Terms of Service.</a> Learn how we collect
                                and use your data in our <a href="/">Privacy Policy.</a>
                            </p>
                        </div>
                        <div className="btn">
                            <button type="submit" className={isDisable ? 'signup-btn disable' : 'signup-btn'} disabled>
                                SIGN UP
                            </button>
                            <Link to="/" className="bottom-btn" type="submit">
                                Already have a account?
                            </Link>
                        </div>
                    </div>
                </div>
            </HeaderPageRoute>
        </>
    );
}

export default SignUpPage;
