import React from 'react';
import { Link } from 'react-router-dom';
import "./css/Contact.css"
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import SignIn from './SignIn';

const Contact = () => {
  // Form submission function
  const onSubmit = (values, { resetForm }) => {
    // Submit form logic goes here
    console.log(values);
    resetForm();
  };

  // Form validation schema
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    message: Yup.string().required('Message is required'),
  });

  return (
    <div className="contact-container">
      <h1 className='heading'>Contact Us</h1>
      <Formik
        initialValues={{ name: '', email: '', message: '' }}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ errors, touched }) => (
          <Form className="form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <Field className={`form-control ${touched.name && errors.name ? 'is-invalid' : ''}`} type="text" name="name" id="name" />
              <ErrorMessage name="name" component="div" className="invalid-feedback" />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <Field className={`form-control ${touched.email && errors.email ? 'is-invalid' : ''}`} type="email" name="email" id="email" />
              <ErrorMessage name="email" component="div" className="invalid-feedback" />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <Field className={`form-control ${touched.message && errors.message ? 'is-invalid' : ''}`} component="textarea" name="message" id="message" rows="5" />
              <ErrorMessage name="message" component="div" className="invalid-feedback" />
            </div>
            <button className="btn btn-primary" type="submit" style={{ display: 'block', margin: '0 auto' }}>Submit</button>

          </Form>
        )}
      </Formik> 
          
      
          <p>If you want to login? Please <Link to="/signin" style={{textDecoration:'none', fontWeight:'bold'}}>Sign In</Link></p>
        <p>Or want to create new account? <Link to="/signup"style={{textDecoration:'none', fontWeight:'bold'}}>Sign Up</Link>
      </p>
    </div>
  );
};

export default Contact;
