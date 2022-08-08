import './SignIn.scss';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import HeaderPageRoute from '../../../components/HeaderPageRoute';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { signInWithPopup, FacebookAuthProvider, GoogleAuthProvider, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../firebase/firebaseConfig';
import { AuthProvider } from '../../../Context/AuthProvider';
import { useFormik } from 'formik';
import * as Yup from 'yup';

function SignInPage() {
    const navigate = useNavigate();

    const handleFacebookLogin = () => {
        const provider = new FacebookAuthProvider();
        signInWithPopup(auth, provider)
            .then(() => {
                navigate('/account');
            })
            .catch((err) => {
                console.log(err.message);
            });
    };

    const handleGoogleLogin = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then(() => {
                navigate('/account');
            })
            .catch((err) => {
                console.log(err.message);
            });
    };

    const handleLogin = () => {
        const email = formik.values.emailUser;
        const password = formik.values.passwordUser;

        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                navigate('/account');
            })

            .catch(() => {
                if (email === '' || password === '') {
                    alert('Please fill in all the required fields!');
                } else {
                    alert('The username or password you entered is incorrect. Please enter it again');
                }
            });
    };

    const formik = useFormik({
        initialValues: {
            emailUser: '',
            passwordUser: '',
        },
        validationSchema: Yup.object({
            emailUser: Yup.string()
                .required('*Please enter your email')
                .matches(/^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/, 'Email is not valid.'),
            passwordUser: Yup.string().required('*Please enter your password'),
        }),

        onSubmit: (values) => {
            console.log(values);
        },
    });

    return (
        <AuthProvider>
            <HeaderPageRoute>
                <form className="login" onSubmit={formik.handleSubmit}>
                    <div className="form-login">
                        <div className="email-input">
                            <label htmlFor="emailUser" className="label">
                                Email
                            </label>
                            <input
                                name="emailUser"
                                id="emaiUser"
                                placeholder="Enter your email"
                                value={formik.values.emailUser}
                                onChange={formik.handleChange}
                            />
                            {formik.errors.emailUser ? (
                                <div className="error-message">{formik.errors.emailUser}</div>
                            ) : null}
                        </div>
                        <div className="password-input">
                            <label htmlFor="passwordUser" className="label">
                                Password
                            </label>
                            <input
                                type="password"
                                name="passwordUser"
                                id="passwordUser"
                                placeholder="Enter your password"
                                value={formik.values.passwordUser}
                                onChange={formik.handleChange}
                            />
                            {formik.errors.passwordUser ? (
                                <div className="error-message">{formik.errors.passwordUser}</div>
                            ) : null}
                        </div>
                        <div className="signin-btn">
                            <button type="submit" onClick={handleLogin}>
                                SIGNIN
                            </button>
                        </div>
                        <div className="other-btn1">
                            <div className="btn-login-google" onClick={handleGoogleLogin}>
                                <div>
                                    <FontAwesomeIcon icon={faGoogle} className="login-icon" />
                                    SIGNIN WITH GOOGLE
                                </div>
                            </div>
                            <div className="btn-login-facebook" onClick={handleFacebookLogin}>
                                <div>
                                    <FontAwesomeIcon icon={faFacebook} className="login-icon" />
                                    SIGNIN WITH FACEBOOK
                                </div>
                            </div>
                        </div>

                        <div className="other-btn2">
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
                </form>
            </HeaderPageRoute>
        </AuthProvider>
    );
}

export default SignInPage;
