import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './formulario.css'
import Swal from 'sweetalert2'
import { postUser } from '../../services/users';
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';

const validate = (values) => {

  const errors = {};
  if(!values.name){
    errors.name = 'Required'
  }

  if(!values.nickName){
    errors.nickName = 'Required'
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
  ) {
    errors.email = 'Invalid email address';
  }

  if(!values.password){
    errors.password = 'Required'
  }

  return errors;
}
const Formulario = () => {
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  return(
      <div className='content'>
      <h1 title='title-singOn'>REGISTRATE</h1>
      <Formik
        
        initialValues={{ name: '', nickName: '', email: '', password: '' }}
        validate={validate}
        onSubmit={(values, {resetForm}) => {
          postUser(values)
          .then(res =>{
            setIsLoading(true)
            if(res.error){
              Swal.fire(
              {
                title: 'Error!',
                text: 'Email o Nickname ya tiene una cuenta',
                icon: 'error',
                confirmButtonText: 'Aceptar'
              }
             
            )
            setIsLoading(false)
            }else{
              Swal.fire(
              {
                title: 'EXITO!',
                text: 'Tu cuenta fue creada con Exito!!',
                icon: 'success',
                confirmButtonText: 'Aceptar',
              }
            ).then( result =>{
              if(result.isConfirmed){
                setIsLoading(false)
                return navigate('/')
              }
            })
          }})
                
        resetForm()}}
      >
        { isLoading && <Loading isLoading={isLoading}/>}

        <Form className='formulario'>
          <label>Name</label>
          <Field type="text" name="name" />
          <ErrorMessage name="name" />
          <label>Nickname</label>
          <Field type="text" name="nickName" />
          <ErrorMessage name="nickName" />
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
      <Link to={'/'}>Login</Link>
    </div>
  )
}
  


export default Formulario;