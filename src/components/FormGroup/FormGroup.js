import React,{useState} from "react";
import { Formik,Form,Field,ErrorMessage } from "formik";
import "./formGroup.css"
import axios from "axios"

import { useNavigate } from 'react-router-dom';

function FormGroup({set}) {

  const apiUsersHTTP= axios.create({
    baseURL:"https://api-rick-morty-bootcamp.herokuapp.com/verify"
  })

  let navigate=useNavigate();
  const [errorLogin,setErroLogin]=useState("");

  return (
    <>
    <p className="error">{errorLogin}</p>
    
      <Formik
        onSubmit={async(valores,{resetForm}) => {
          
          resetForm();
          await apiUsersHTTP.post(`/${valores.username}/${valores.pass}`)
          .then(response=>{
              if(response.data===true){
                set(user=>{
                  return({
                    ...user,
                    username:valores.username,
                    pass:valores.pass
                  })
                })
                navigate("/");
              }
              else{
                setErroLogin("Data is incorrect")
              }
          })
        }}

        validate={(valores=>{
          let errores={}
          if(!valores.username){
            errores.username="Please enter your username"
          }
          else if(/ /.test(valores.username)){
              errores.username="Spaces are not valid"
          }
          if(!valores.pass){
            errores.pass="Please enter your password"
          }
          return errores;
        })}

        initialValues={{
          username: "",
          pass: ""
        }}
      >
        
        {({ errors }) =>
        (
          
          <div className="container formContainer">
            <Form >
              <div className="form-floating w-50 mb-4 mx-auto">
                <Field 
                type="text" 
                name="username" 
                className="form-control" 
                id="user" 
                placeholder="userName"  />
                <label htmlFor="user">Username</label>
                <ErrorMessage name="username" component={()=>(
                  <div className="error">{errors.username}</div>
                )}/>
                
              </div>
              <div className="form-floating w-50 mb-5 mx-auto">
                <Field type="password" name="pass" className="form-control" id="password" placeholder="Password"/>
                <label htmlFor="password">Password</label>
                <ErrorMessage name="pass" component={()=>(
                  <div className="error">{errors.pass}</div>
                )}/>
              </div>
              <div className="d-grid gap-2 mt-3">
                <button className="btn registerBtn mx-auto" type="submit" >Login</button>
              </div>
            </Form>
          </div>
        )
        }
      </Formik>
    </>
  );
}

export default FormGroup;
