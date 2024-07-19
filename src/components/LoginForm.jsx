import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const navigate = useNavigate();
    const initialValues = {
        email: '',
        password: '',
    };

    const validationSchema = Yup.object({
        email: Yup.string()
            .email('Invalid email address')
            .required('Email is required'),
        password: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .required('Password is required'),
    });

    const handleSubmit = (values, { setSubmitting }) => {
        console.log('Form data', values);

        if (values.email == "saksham16dec@gmail.com" && values.password == "12345678") {
            localStorage.setItem("token", "saksham16dec@gmail.com");
            setSubmitting(false);

            setTimeout(() => {
                navigate("/dashboard");
            }, 500);
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 border-2 p-4 rounded-lg border-white blur-100   ">
            <h1 className="text-2xl text-center text-white font-bold mb-5">Login</h1>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-white/50">Email</label>
                            <Field
                                type="email"
                                name="email"
                                className="w-full px-3 py-2 border text-white bg-transparent rounded"
                            />
                            <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="password" className="block text-white/50">Password</label>
                            <Field
                                type="password"
                                name="password"
                                className="w-full px-3 py-2 border bg-transparent text-white rounded"
                            />
                            <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
                        </div>

                        <div className="mb-4">
                            <button
                                type="submit"
                                className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-700"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Logging in...' : 'Login'}
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default LoginForm;
