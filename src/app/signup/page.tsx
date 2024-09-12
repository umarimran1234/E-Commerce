import Link from "next/link";

import { Metadata } from "next";
import FormComponent from "@/components/Form/FormComponent";
import SocialButton from "@/components/SocialButton/SocialButton";
import Navbar from "@/components/Navbar/Navbar";

export const metadata: Metadata = {
    title: "Sign Up Page | Free Next.js Template for Startup and SaaS",
    description: "This is Sign Up Page for Startup Nextjs Template",
    // other metadata
};

const SignupPage = () => {
    return (
        <>
            <Navbar></Navbar>
            <section className="relative z-10 overflow-hidden pb-16 md:pb-20 lg:pb-28 pt-10">
                <div className="container">
                    <div className="-mx-4 flex flex-wrap">
                        <div className="w-full px-4">
                            <div className="mx-auto max-w-[500px] rounded bg-white px-6 py-10 shadow-three dark:bg-dark sm:p-[60px]">
                                <h3 className="mb-3 text-center text-2xl font-bold text-black dark:text-white sm:text-3xl">
                                    Create your account
                                </h3>
                                <p className="mb-11 text-center text-base font-medium text-body-color">
                                    Sign up today For and start your journey with us.
                                </p>
                                <SocialButton></SocialButton>
                                <div className="mb-8 flex items-center justify-center">
                                    <span className="hidden h-[1px] w-full max-w-[60px] bg-body-color/50 sm:block"></span>
                                    <p className="w-full px-5 text-center text-base font-medium text-body-color">
                                        Or, register with your email
                                    </p>
                                    <span className="hidden h-[1px] w-full max-w-[60px] bg-body-color/50 sm:block"></span>
                                </div>
                                <FormComponent></FormComponent>
                                <p className="text-center text-black font-medium">
                                    Already have an account?{" "}
                                    <Link href="/signin" className="text-red-500 hover:underline">
                                        Sign in
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SignupPage;