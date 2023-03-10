import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './formulario.css'
import Swal from 'sweetalert2'
import { postUser } from '../../services/users';
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';
import Title from '../Title/Title';
import ButtonInit from '../ButtonInit/ButtonInit';
import Text from '../Text/Text';

const validate = (values) => {

  const errors = {};
  if(!values.name){
    errors.name = <div title='requerido'>❗</div>
  }

  if(!values.nickName){
    errors.nickName = <div title='requerido'>❗</div>
  }

  if (!values.email) {
    errors.email = <div title='requerido'>❗</div>;
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
  ) {
    errors.email =<div title='correo invalido'>⚠️</div>;
  }

  if(!values.password){
    errors.password = <div title='requerido'>❗</div>
  }

  return errors;
}
const Formulario = () => {

  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  if(isLoading) return <Loading  isLoading={isLoading}/>

  return(
      <div className='content'>

        <Title title='title-singOn'>REGISTRATE</Title>

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
          <Form className='formulario'>
            <Text>Name</Text>
            <div className='content-input'> 
              <Field className='input-singIn' type="text" name="name" />
              <ErrorMessage name="name" />
            </div>

            <Text>Nickname</Text>
            <div className='content-input'> 
              <Field type="text" className='input-singIn' name="nickName" />
              <ErrorMessage name="nickName" />
            </div>
            <Text>Email</Text>
            <div className='content-input'> 
              <Field type="email" className='input-singIn' name="email" />
              <ErrorMessage name="email"  />
            </div> 

            <Text>Password</Text>
            <div className='content-input'> 
              <Field type="password" className='input-singIn' name="password" />
              <ErrorMessage name="password"/>
            </div>
            <ButtonInit type="submit">
              Submit
            </ButtonInit>
          </Form>
        </Formik>
        <Link to={'/'}>Login</Link>
    </div>
  )
}
  


export default Formulario;