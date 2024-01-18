import React, { useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import Button from './Button.jsx';
import { useFormik } from 'formik';
import Swal from 'sweetalert2';
import Box from '@mui/material/Box';
import { TextField, ThemeProvider, createTheme } from '@mui/material';

const palettes = createTheme({
  palette: {
    primary: {
      main: '#000000',
    }
  },
});

const Toast = Swal.mixin({
  toast: true,
  position: 'bottom',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didRender: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

const selectValues = [
  {
    value: '',
    label: '',
  },
  {
    value: 'Tienda Online',
    label: 'Tienda Online',
  },
  {
    value: 'Landing Page',
    label: 'Landing Page',
  },
  {
    value: 'Desarrollo Libre',
    label: 'Desarrollo Libre',
  }
];


const url = 'https://desusweb.com/api/mail/';
const key = '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'; //? Key de testeo para modo local
//const key = '6Le8M9AoAAAAAHpXqz7JVdZyWB824wDhgn2pQF56';

export default function Formulary(){
  const [disable, setDisable] = useState(true);
  const [reCaptcha, setReCaptcha] = useState(false);
  
  function validateSubmit ( values ) {
    if( values.nombre && values.apellido && values.email && values.plan !== ''){
      setDisable(false)
    }else if( values.nombre || values.apellido || values.email || values.plan === ''){
      setDisable(true);
      setReCaptcha(false)
    }
  }
  
  const validate = values => {
    const errors = {};
    
    validateSubmit( values );
    
    if (values.nombre.length > 15) {
      errors.nombre = 'Must be 15 characters or less';
    }else if(values.nombre.length < 4){
      errors.nombre = 'Must be 4 characters or more';
    }
  
    if (values.apellido.length > 20) {
      errors.apellido = 'Must be 20 characters or less';
    }else if(values.apellido.length < 4){
      errors.apellido = 'Must be 4 characters or more';
    }
  
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }

    if (!values.plan) {
      errors.plan = 'Required';
    }
  
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      nombre: '',
      apellido: '',
      email: '',
      plan: '',
      mensaje: ''
    },
    validate,
    // !* con values puedo enviar al fetch, me da un objeto del id de los textfield
    onSubmit: values => {
      
      fetch( url , {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      Toast.fire({
        icon: 'success',
        title: 'Datos enviados!'
      })
      
      formik.resetForm();
    },
  });
  
  return (
    <Box
      sx={{
        background:"#fff",
        width: { lg: '60%',sm: '75%', xs: '100%' }, ml: { lg: '20%', sm: '12%', xs: '-0.2%' },
        border: '2px solid #051622', borderRadius: '25px', boxShadow: '6px 6px 0px #191919, 10px 10px 15px -5px rgba(5, 22, 34, 0.5)',
        '& .MuiTextField-root': { m: '10px 0px 25px 0px', width: '90%' },
        height: "850px"
      }}
      noValidate
      autoComplete="off"
    >
          <Box
            component='form'
            onSubmit={ formik.handleSubmit }
            sx={{
              display: 'flex', flexDirection: 'column', alignItems: 'center',
              mt: 5, mb: 5
            }}
          >
            <ThemeProvider theme={palettes}>
              <TextField
                required
                id="nombre"
                type="text"
                label='Nombre'
                error={ formik.touched.nombre && formik.errors.nombre ? true : false }
                helperText={ formik.touched.nombre && formik.errors.nombre ? formik.errors.nombre : false }
                onChange={formik.handleChange}
                value={formik.values.nombre}
              />
              <TextField
                required
                label="Apellido"
                id="apellido"
                type="text"
                error={ formik.touched.apellido && formik.errors.apellido ? true : false }
                helperText={ formik.touched.apellido && formik.errors.apellido ? formik.errors.apellido : false }
                onChange={formik.handleChange}
                value={formik.values.apellido}
              />
              <TextField
                required
                label="Correo electrónico"
                id="email"
                type='email'
                error={ formik.touched.email && formik.errors.email ? true : false }
                helperText={ formik.touched.email && formik.errors.email ? formik.errors.email : 'example@gmail.com' }
                onChange={formik.handleChange}
                value={ formik.values.email }
              />
              <TextField
                required
                label="Selecciona un plan"
                id="plan"
                type='select'
                select
                SelectProps={{
                  native: true,
                }}
                variant="filled"
                error={ formik.touched.plan && formik.errors.plan ? true : false }
                helperText={ formik.touched.plan && formik.errors.plan ? formik.errors.plan : 'Tenemos los siguientes planes para ti' }
                onChange={formik.handleChange}
                value={ formik.values.plan }
              >
                {selectValues.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
              <TextField
              sx={{ pb: 1 }}
                multiline
                rows={5}
                label="¿Querés dejarnos algún comentario?"
                id='mensaje'
                onChange={formik.handleChange}
                value={ formik.values.mensaje }
              />
            </ThemeProvider>

            {
              disable
              ?
              null
              :
              <ReCAPTCHA
                sitekey={key}
                onChange={() => { setReCaptcha(true) }}
                onExpired={() => { setReCaptcha(false) }}
              />
            }

            <Box sx={{ mt: 4 }}><Button buttonContent={'Enviar'} disable={!reCaptcha}/></Box>
          </Box>
    </Box>
  );
};