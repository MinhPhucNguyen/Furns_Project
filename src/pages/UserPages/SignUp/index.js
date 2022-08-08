import './SignUp.scss';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderPageRoute from '../../../components/HeaderPageRoute';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { auth } from '../../../firebase/firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function SignUpPage() {
    const [isDisable, setIsDisable] = useState(true);
    const navigate = useNavigate();

    const handleCheck = (e) => {
        e.target.checked ? setIsDisable(false) : setIsDisable(true);
        console.log('oke');
    };

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            Email: '',
            Phone: '',
            password: '',
            confirmpassword: '',
        },
        validationSchema: Yup.object({
            firstName: Yup.string().required('*Enter your firstname.').min(2, '*Must be more 2 characters.'),
            lastName: Yup.string().required('*Enter your lastname.').min(4, '*Must be more 4 characters.'),
            Email: Yup.string()
                .required('*Enter your email')
                .matches(/^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/, 'Email is not valid.'),
            Phone: Yup.string()
                .required('*Enter your phone number.')
                .matches(/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/, 'Phone is not valid.'),
            password: Yup.string()
                .required('*Enter your password.')
                .matches(
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,19}$/,
                    'Password must be 8-19 characters , at least one uppercase letter, one lowercase letter, one number and one special character.',
                ),

            confirmpassword: Yup.string()
                .required('*Enter confirm password.')
                .oneOf([Yup.ref('password')], 'Password is not match.'),
        }),
        onSubmit: (values) => {
            console.log(values);
        },
    });

    const handleSignUp = () => {
        const email = formik.values.Email;
        const password = formik.values.password;

        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                const user = auth.currentUser;
                user.displayName = formik.values.lastName + ' ' + formik.values.firstName;
                user.phoneNumber = formik.values.Phone;

                // Signed in
                alert('User Created');
                navigate('/signin');
            })
            .catch((error) => {
                const errorMessage = error.message;
                alert(errorMessage);
            });
    };

    return (
        <HeaderPageRoute>
            <form className="signup" onSubmit={formik.handleSubmit}>
                <div className="form-signup">
                    <div className="row">
                        <div className="firstname-input">
                            <label htmlFor="firstName" className="label">
                                First Name *
                            </label>
                            <input
                                name="firstName"
                                id="firstName"
                                onChange={formik.handleChange}
                                value={formik.values.firstName}
                            />
                            {formik.errors.firstName ? (
                                <div className="error-message">{formik.errors.firstName}</div>
                            ) : null}
                        </div>
                        <div className="lastname-input">
                            <label htmlFor="lastName" className="label">
                                Last Name *
                            </label>
                            <input
                                name="lastName"
                                id="lastName"
                                onChange={formik.handleChange}
                                value={formik.values.lastName}
                            />
                            {formik.errors.lastName ? (
                                <div className="error-message">{formik.errors.lastName}</div>
                            ) : null}
                        </div>
                    </div>
                    <div className="row">
                        <div className="info-input">
                            <label htmlFor="Email" className="label">
                                Email *
                            </label>
                            <input name="Email" id="Email" onChange={formik.handleChange} value={formik.values.Email} />
                            {formik.errors.Email ? <div className="error-message">{formik.errors.Email}</div> : null}
                        </div>
                    </div>
                    <div className="row">
                        <div className="info-input">
                            <label htmlFor="Phone" className="label">
                                Phone *
                            </label>
                            <input
                                type="text"
                                name="Phone"
                                id="Phone"
                                onChange={formik.handleChange}
                                value={formik.values.Phone}
                            />
                            {formik.errors.Phone ? <div className="error-message">{formik.errors.Phone}</div> : null}
                        </div>
                    </div>
                    <div className="row">
                        <div className="info-input">
                            <label htmlFor="password" className="label">
                                Password *
                            </label>
                            <input
                                name="password"
                                id="password"
                                type="password"
                                onChange={formik.handleChange}
                                value={formik.values.password}
                            />
                            {formik.errors.password ? (
                                <div className="error-message">{formik.errors.password}</div>
                            ) : null}
                        </div>
                    </div>
                    <div className="row">
                        <div className="info-input">
                            <label htmlFor="confirmpassword" className="label">
                                Confirm Password *
                            </label>
                            <input
                                name="confirmpassword"
                                id="confirmpassword"
                                type="password"
                                onChange={formik.handleChange}
                                value={formik.values.confirmpassword}
                            />
                            {formik.errors.confirmpassword ? (
                                <div className="error-message">{formik.errors.confirmpassword}</div>
                            ) : null}
                        </div>
                    </div>
                    <div className="checkbox-policy">
                        <div className="checkbox">
                            <input type="checkbox" name="policy" id="policy" onChange={handleCheck} />
                            <label htmlFor="policy">I've read and accept the Privacy Policy</label>
                        </div>
                        <p>
                            By signing up, you agree to our <a href="/">Terms of Service.</a> Learn how we collect and
                            use your data in our <a href="/">Privacy Policy.</a>
                        </p>
                    </div>
                    <div className="btn">
                        <button
                            type="submit"
                            className={isDisable ? 'signup-btn disable' : 'signup-btn'}
                            onClick={() => {
                                handleSignUp();
                            }}
                        >
                            SIGN UP
                        </button>
                        <Link
                            to="/signin"
                            className="bottom-btn"
                            type="submit"
                            onClick={() => {
                                window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                            }}
                        >
                            Already have a account?
                        </Link>
                    </div>
                </div>
            </form>
        </HeaderPageRoute>
    );
}

export default SignUpPage;
