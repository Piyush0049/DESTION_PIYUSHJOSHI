import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FaEye, FaGoogle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const navigate = useNavigate();
    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email').required('Required'),
        password: Yup.string().required('Required'),
    });

    return (
        <div className="min-h-screen flex font-poppins bg-gradient-to-b from-blue-50 to-indigo-100">
            {/* Left Side - Form Section */}
            <div className="flex-1 flex justify-center items-center bg-white p-5 rounded-3xl bg-opacity-70">
                <div className="w-full max-w-md space-y-8">
                    <div className="text-center">
                        <div className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500 tracking-wide mb-10 animate-pulse">
                            Destion
                        </div>
                        <p className="text-gray-500">
                            Enter to get unlimited access to data & information.
                        </p>
                    </div>
                    <Formik
                        initialValues={{ email: '', password: '' }}
                        validationSchema={validationSchema}
                        onSubmit={(values) => {
                            console.log(values);
                        }}
                    >
                        {() => (
                            <Form className="mt-8 space-y-6">
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">
                                            Email <span className="text-red-500">*</span>
                                        </label>
                                        <Field
                                            name="email"
                                            type="email"
                                            placeholder="Enter your mail address"
                                            className="w-full p-3 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                                        />
                                        <ErrorMessage
                                            name="email"
                                            component="div"
                                            className="text-red-400 text-sm mt-2"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">
                                            Password <span className="text-red-500">*</span>
                                        </label>
                                        <div className="relative">
                                            <Field
                                                name="password"
                                                type="password"
                                                placeholder="Enter password"
                                                className="w-full p-3 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                                            />
                                            <FaEye className="absolute right-3 top-5 text-gray-400 cursor-pointer" />
                                        </div>
                                        <ErrorMessage
                                            name="password"
                                            component="div"
                                            className="text-red-400 text-sm mt-2"
                                        />
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <input
                                            type="checkbox"
                                            className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                                        />
                                        <label
                                            htmlFor="remember-me"
                                            className="ml-2 block text-sm text-gray-700"
                                        >
                                            Remember me
                                        </label>
                                    </div>
                                    <div>
                                        <a
                                            href="#"
                                            className="text-sm text-indigo-600 hover:text-indigo-700"
                                        >
                                            Forgot your password?
                                        </a>
                                    </div>
                                </div>
                                <button
                                    onClick={()=>{navigate('/dashboard')}}
                                    className="w-full py-3 bg-gradient-to-r from-indigo-600 to-blue-500 text-white font-semibold rounded-lg shadow-xl hover:shadow-2xl hover:bg-gradient-to-r hover:from-indigo-500 hover:to-blue-400 transition-all transform hover:scale-105"
                                >
                                    Log In
                                </button>
                                <div className="flex items-center justify-between mt-4">
                                    <span className="border-b w-1/5 lg:w-1/4"></span>
                                    <span className="text-xs text-center text-gray-500 uppercase">
                                        Or Login with
                                    </span>
                                    <span className="border-b w-1/5 lg:w-1/4"></span>
                                </div>
                                <button
                                    onClick={()=>{navigate('/dashboard')}}
                                    className="flex items-center justify-center w-full py-3 mt-4 bg-white border rounded-lg shadow-lg hover:shadow-2xl hover:bg-gray-100 transition-all transform hover:scale-105"
                                >
                                    <FaGoogle className="mr-3 text-red-500" />
                                    Sign up with Google
                                </button>
                                <p className="text-center text-sm mt-4">
                                    Don’t have an account?{' '}
                                    <a
                                        href="/signup"
                                        className="text-indigo-600 hover:text-indigo-700"
                                    >
                                        Register here
                                    </a>
                                </p>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>

            {/* Right Side - Background Section */}
            <div className="hidden md:block flex-1 relative">
                <div
                    className="absolute inset-0 bg-gradient-to-r from-blue-900 to-indigo-800 opacity-60 backdrop-blur-md"
                ></div>
                <div
                    className="h-full w-full bg-cover bg-no-repeat bg-center animate-fade-in"
                    style={{
                        backgroundImage:
                            "url('https://img.freepik.com/premium-photo/handsome-business-man-working-computer-drinking-coffee-cafe_1042628-551779.jpg?w=360')",
                    }}
                ></div>
            </div>
        </div>
    );
};

export default LoginPage;