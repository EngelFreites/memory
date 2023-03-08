import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import Swal from "sweetalert2"
import Loading from '../Loading/Loading';
import { postLogin } from '../../services/login';


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
  const [isLoading, setIsLoading] = useState(false)
 const navigate = useNavigate()

  if(isLoading) return <Loading isLoading={isLoading} />
  return(
    <div className='content'>
    <h1>Login</h1>
    <Formik
      
      initialValues={{email: '', password: '' }}
      validate={validate}
      onSubmit={(values, {resetForm}) => {

        setIsLoading(true)
       
        postLogin({values}).then(res => {
          if(!res.error){
            window.localStorage.setItem( 'tokenUser', JSON.stringify(res))
            
            navigate('/home')
            setIsLoading(false)
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