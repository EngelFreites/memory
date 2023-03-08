import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import Swal from "sweetalert2"
const apiUrl = import.meta.env.VITE_API_URL

const validate = (values) => {

  const errors = {}

  if (!values.email) {
    errors.email = 'Required';
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
  ) {
    errors.email = 'Invalid email address';
  }

  return errors;
}




const Login = () => {
 const navigate = useNavigate()

  
  return(
    <div className='content'>
    <h1>Login</h1>
    <Formik
      
      initialValues={{email: '', password: '' }}
      validate={validate}
      onSubmit={(values, {resetForm}) => {
        fetch(`${apiUrl}api/login/`,{ method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body : JSON.stringify(values)
        }
       
        )
        .then(res => res.json())
        .then(res => {
          console.log(res)
          
          if(!res.error){
            window.localStorage.setItem( 'tokenUser', JSON.stringify(res))
            
            navigate('/levels/1')
          }else{
            Swal.fire({
              title: 'ERROR',
              text: 'Email o Contraseña incorrecta',
              icon: 'warning'
            }
            )
          }

        })
        resetForm()
      }}
    >      
      <Form className='formulario'>
        <label>Email</label>
        <Field type="email" name="email" />
        <ErrorMessage name="email"  />
        <label>Password</label>
        <Field type="password" name="password" />
        <ErrorMessage name="password"/>
        <button className='button-formulario' type="submit">
          Submit
        </button>
      </Form>
    </Formik>

    <Link to={'/registro'} >Registrate</Link>
  </div>
  )
}

export default Login