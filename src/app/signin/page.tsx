import Link from "next/link";

import { Metadata } from "next";
import SocialButton from "@/components/SocialButton/SocialButton";
import LoginForm from "@/components/LoginForm/LoginForm";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
    title: "Sign In Page | Free Next.js Template for Startup and SaaS",
    description: "This is Sign In Page for Startup Nextjs Template",
    // other metadata
};

const SigninPage = () => {
    return (
        <>
            <Navbar></Navbar>
            <section className="relative z-10 overflow-hidden pb-16 md:pb-20 lg:pb-28 mt-10">
                <div className="container">
                    <div className="-mx-4 flex flex-wrap">
                        <div className="w-full px-4">
                            <div className="mx-auto max-w-[500px] rounded bg-white px-6 py-10 shadow-three dark:bg-dark sm:p-[60px]">
                                <h3 className="mb-3 text-center text-2xl font-bold text-black dark:text-white sm:text-3xl">
                                    Sign in to your account
                                </h3>
                                <p className="mb-11 text-center text-base font-medium text-body-color">
                                    Login to your account.
                                </p>
                                <SocialButton></SocialButton>
                                <div className="mb-8 flex items-center justify-center">
                                    <span className="hidden h-[1px] w-full max-w-[70px] bg-body-color/50 sm:block"></span>
                                    <p className="w-full px-5 text-center text-base font-medium text-body-color">
                                        Or, sign in with your email
                                    </p>
                                    <span className="hidden h-[1px] w-full max-w-[70px] bg-body-color/50 sm:block"></span>
                                </div>
                                <LoginForm></LoginForm>
                                <p className="text-center text-black font-medium">
                                    Don’t you have an account?{" "}
                                    <Link href="/signup" className="text-red-500 hover:underline">
                                        Sign up
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </>
    );
};

export default SigninPage;