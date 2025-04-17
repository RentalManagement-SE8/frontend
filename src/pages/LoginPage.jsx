import React from 'react';
import Login from '../components/auth/Login';
import { Link } from 'react-router-dom';

const LoginPage = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="text-center text-3xl font-extrabold text-gray-900">
                    Sign in to your account
                </h2>
                <p className="mt-2 text-center text-sm text-gray-600">
                    Or{' '}
                    <Link to="/register" className="font-medium text-blue-600 hover:text-blue-500">
                        create a new account
                    </Link>
                </p>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <Login />

                    <div className="mt-6">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  Or continue with
                </span>
                            </div>
                        </div>

                        <div className="mt-6 grid grid-cols-2 gap-3">
                            <div>
                                <button
                                    type="button"
                                    className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                                >
                                    <span className="sr-only">Sign in with Google</span>
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12.545 12.151c0 .811-.669 1.466-1.495 1.466-.828 0-1.495-.655-1.495-1.466 0-.812.668-1.466 1.495-1.466.827 0 1.495.654 1.495 1.466zm5.83-1.171c-.827 0-1.495.654-1.495 1.466s.669 1.466 1.495 1.466c.828 0 1.495-.655 1.495-1.466.001-.812-.667-1.466-1.495-1.466zm-11.66 0c-.827 0-1.495.654-1.495 1.466s.669 1.466 1.495 1.466c.828 0 1.495-.655 1.495-1.466.001-.812-.667-1.466-1.495-1.466z" />
                                    </svg>
                                </button>
                            </div>

                            <div>
                                <button
                                    type="button"
                                    className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                                >
                                    <span className="sr-only">Sign in with Facebook</span>
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            fillRule="evenodd"
                                            d="M10 0C4.477 0 0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.879V12.89h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.989C16.343 19.129 20 14.99 20 10c0-5.523-4.477-10-10-10z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 text-center">
                        <Link to="/forgot-password" className="font-medium text-blue-600 hover:text-blue-500">
                            Forgot your password?
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;