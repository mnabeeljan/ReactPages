import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const SignUp = () => {
  const initialValues = {
    name: '',
    email: '',
    password: ''
  };

  const handleSubmit = (values, { resetForm }) => {
    // Handle sign up logic here
    console.log('Sign Up:', values);
    resetForm();
  };

  const validateForm = (values) => {
    const errors = {};

    // Add validation rules for form fields
    if (!values.name) {
      errors.name = 'Required';
    }
    if (!values.email) {
      errors.email = 'Required';
    }
    if (!values.password) {
      errors.password = 'Required';
    }

    return errors;
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <div style={{ width: '300px' }}>
        <h2 style={{ marginBottom: '20px' }}>Sign Up</h2>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validate={validateForm}
        >
          <Form style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ marginBottom: '10px' }}>
              <label htmlFor="name">Name:</label>
              <Field type="text" id="name" name="name" style={{ padding: '5px', width: '100%' }} />
              <ErrorMessage name="name" component="div" style={{ color: 'red', fontSize: '14px' }} />
            </div>
            <div style={{ marginBottom: '10px' }}>
              <label htmlFor="email">Email:</label>
              <Field type="email" id="email" name="email" style={{ padding: '5px', width: '100%' }} />
              <ErrorMessage name="email" component="div" style={{ color: 'red', fontSize: '14px' }} />
            </div>
            <div style={{ marginBottom: '10px' }}>
              <label htmlFor="password">Password:</label>
              <Field type="password" id="password" name="password" style={{ padding: '5px', width: '100%' }} />
              <ErrorMessage name="password" component="div" style={{ color: 'red', fontSize: '14px' }} />
            </div>
            <button type="submit" style={{ padding: '10px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '3px', fontSize: '16px', cursor: 'pointer' }}>
              Sign Up
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default SignUp;
