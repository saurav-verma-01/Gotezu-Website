import React from 'react';
import styles from './Signup.module.css';

const SignupPage = () => {
    return (
        <div className={styles.signupContainer}>
            <h2>Weekly Coding Challenge #1: Sign in/up Form</h2>
            <div className={styles.SignupContainerWrapper} id="container">
                <div className={`${styles.formContainer} ${styles.signUpContainer}`}>
                    <form action="#">
                        <h1>Create Account</h1>
                        <div className={styles.socialContainer}>
                            <a href="#" className={styles.social}><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className={styles.social}><i className="fab fa-google-plus-g"></i></a>
                            <a href="#" className={styles.social}><i className="fab fa-linkedin-in"></i></a>
                        </div>
                        <span>or use your email for registration</span>
                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <button>Sign Up</button>
                    </form>
                </div>

                <div className={`${styles.formContainer} ${styles.signInContainer}`}>
                    <form action="#">
                        <h1>Sign in</h1>
                        <div className={styles.socialContainer}>
                            <a href="#" className={styles.social}><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className={styles.social}><i className="fab fa-google-plus-g"></i></a>
                            <a href="#" className={styles.social}><i className="fab fa-linkedin-in"></i></a>
                        </div>
                        <span>or use your account</span>
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <a href="#">Forgot your password?</a>
                        <button>Sign In</button>
                    </form>
                </div>

                <div className={styles.overlayContainer}>
                    <div className={styles.overlay}>
                        <div className={`${styles.overlayPanel} ${styles.overlayLeft}`}>
                            <h1>Welcome Back!</h1>
                            <p>To keep connected with us please login with your personal info</p>
                            <button className={styles.ghost} id="signIn">Sign In</button>
                        </div>
                        <div className={`${styles.overlayPanel} ${styles.overlayRight}`}>
                            <h1>Hello, Friend!</h1>
                            <p>Enter your personal details and start journey with us</p>
                            <button className={styles.ghost} id="signUp">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>

            <footer className={styles.footer}>
                <p>
                    Created with <i className="fa fa-heart"></i> by
                    <a target="_blank" href="https://florin-pop.com">Florin Pop</a>
                    - Read how I created this and how you can join the challenge
                    <a target="_blank" href="https://www.florin-pop.com/blog/2019/03/double-slider-sign-in-up-form/">here</a>.
                </p>
            </footer>
        </div>
    );
};

export default SignupPage;