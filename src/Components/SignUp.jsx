import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
    const navigate = useNavigate();
    const validationSchema = Yup.object({
        username: Yup.string().required('Required'),
        email: Yup.string().email('Invalid email').required('Required'),
        password: Yup.string().required('Required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Required'),
    });

    return (
        <div className="min-h-screen flex font-poppins bg-gray-50 relative">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: "url('https://img.freepik.com/premium-photo/handsome-business-man-working-computer-drinking-coffee-cafe_1042628-551779.jpg?w=360')",
                    opacity: 0.8, // Adjust the opacity as needed
                    filter: 'blur(8px)'
                }}
            />
             <div className="absolute inset-0 bg-black opacity-40" />
            <div className="flex-1 flex justify-center items-center p-6 shadow-xl rounded-lg m-3 z-10">
                <div className="w-full max-w-md space-y-8">
                    <div className="text-center">
                        <div className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500 tracking-wide mb-10 animate-pulse">
                            Destion
                        </div>
                        <p className="text-white">
                            Join us for unlimited access to data & information.
                        </p>
                    </div>
                    <Formik
                        initialValues={{ username: '', email: '', password: '', confirmPassword: '' }}
                        validationSchema={validationSchema}
                        onSubmit={(values) => {
                            console.log(values);
                        }}
                    >
                        {() => (
                            <Form className="mt-8 space-y-6">
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-300">
                                        Username <span className="text-red-500">*</span>
                                    </label>
                                    <Field
                                        name="username"
                                        type="text"
                                        placeholder="Enter your username"
                                        className="w-full text-black p-3 mt-1 border rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-dark-placeholder"
                                    />
                                    <ErrorMessage
                                        name="username"
                                        component="div"
                                        className="text-red-500 text-sm"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-300">
                                        Email <span className="text-red-500">*</span>
                                    </label>
                                    <Field
                                        name="email"
                                        type="email"
                                        placeholder="Enter your email address"
                                        className="w-full text-black p-3 mt-1 border rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-dark-placeholder"
                                    />
                                    <ErrorMessage
                                        name="email"
                                        component="div"
                                        className="text-red-500 text-sm"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-300">
                                        Password <span className="text-red-500">*</span>
                                    </label>
                                    <Field
                                        name="password"
                                        type="password"
                                        placeholder="Enter password"
                                        className="w-full text-black p-3 mt-1 border rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-dark-placeholder"
                                    />
                                    <ErrorMessage
                                        name="password"
                                        component="div"
                                        className="text-red-500 text-sm"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-300">
                                        Confirm Password <span className="text-red-500">*</span>
                                    </label>
                                    <Field
                                        name="confirmPassword"
                                        type="password"
                                        placeholder="Confirm password"
                                        className="w-full text-black p-3 mt-1 border rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-dark-placeholder"
                                    />
                                    <ErrorMessage
                                        name="confirmPassword"
                                        component="div"
                                        className="text-red-500 text-sm"
                                    />
                                </div>
                            </div>
                            <button
                                onClick={() => { navigate('/dashboard') }}
                                className="w-full py-3 bg-gradient-to-r from-indigo-600 to-blue-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-2xl hover:bg-gradient-to-r hover:from-indigo-500 hover:to-blue-400 transition-all transform hover:scale-105"
                            >
                                Sign Up
                            </button>
                            <p className="text-center text-sm mt-4 text-gray-100">
                                Already have an account?{' '}
                                <a onClick={() => { navigate('/') }} className="text-blue-300 hover:text-blue-700">
                                    Log in here
                                </a>
                            </p>
                        </Form>
                        
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    );
};

export default SignupPage;
