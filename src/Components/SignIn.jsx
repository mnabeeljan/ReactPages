import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const SignIn = () => {
  const initialValues = {
    email: '',
    password: ''
  };

  const handleSubmit = (values, { resetForm }) => {
    // Handle sign in logic here
    console.log('Sign In:', values);
    resetForm();
  };

  const validateForm = (values) => {
    const errors = {};

    // Add validation rules for form fields
    if (!values.email) {
      errors.email = 'Required';
    }
    if (!values.password) {
      errors.password = 'Required';
    }

    return errors;
  };

  return (
    <div style={{ width:'50%', margin:'20px auto' }}>
      <h2 style={{ marginBottom: '20px' }}>Sign In</h2>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validate={validateForm}
      >
<Form>
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
    Sign In
  </button>
</Form>

      </Formik>
    </div>
  );
};

export default SignIn;
