import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import Swal from "sweetalert2"
import Loading from '../Loading/Loading';
import { postLogin } from '../../services/login';
import'./login.css'
import Title from '../Title/Title';
import Text from '../Text/Text';
import ButtonInit from '../ButtonInit/ButtonInit'


const validate = (values) => {

  const errors = {}

  if (!values.email) {
    errors.email = <div title='requerido'>❗</div>;
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
  ) {
    errors.email = <div title='correo invalido'>⚠️</div>;
  }

  if(!values.password){
    errors.password =  <div title='requerido'>❗</div>
  }

  return errors;
}




const Login = () => {
  const [isLoading, setIsLoading] = useState(false)
 const navigate = useNavigate()

  if(isLoading) return <Loading isLoading={isLoading} />
  return(
    <div className='content'>

      <Title>Iniciar Sesion</Title>

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
              setIsLoading(false)
            }

          })
          resetForm()
        }}
      >      
        <Form className='formulario'>
            <Text>Email</Text>
          <div className='content-input'> 
            <Field className='input-login' type="email" name="email" />
            <ErrorMessage name="email"  title='requeride' />
          </div>
          
          <Text>Password</Text>
          <div className='content-input'>
            <Field  className='input-login' type="password" name="password" />
            <ErrorMessage name="password"/>
          </div>
          <ButtonInit className='button-formulario' type="submit">
            Submit
          </ButtonInit>
        </Form>
      </Formik>

      <Link to={'/registro'} >Registrate</Link>
    </div>
  )
}

export default Login