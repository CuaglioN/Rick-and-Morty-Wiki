import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from "axios"
import { Formik,Form,Field,ErrorMessage } from "formik";
//import styles
import "./Register.css"



function Register() {

  const apiUsersHTTP= axios.create({
    baseURL:"https://api-rick-morty-bootcamp.herokuapp.com"
  })
  const apiUsersAddHTTP= axios.create({
    baseURL:"https://api-rick-morty-bootcamp.herokuapp.com"
  })

  let navigate=useNavigate();
  const [errorLogin,setErroLogin]=useState("");
  return (
    <>

  <div className="error">{errorLogin}</div>
      <Formik

        onSubmit={(valores,{resetForm}) => { 
          let flag=0;
          resetForm();
          apiUsersHTTP.get("/users")
          .then(response=>{
            response.data.map(el=>{
              if(el.username===valores.username || el.email===valores.email ){
                flag=1
              }
            })
            if(flag==0){
              apiUsersAddHTTP.post(`/user/${valores.email}/${valores.pass}/${valores.username}`)
              .then(response=>console.log(response))
              navigate("/login")
            }
            else
            setErroLogin("Existing user ")
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

        if(!valores.email){
          errores.email="Please enter your email"
        }
        if(!valores.pass){
          errores.pass="Please enter your password"
        }
        return errores;
      })}

      initialValues={{
        username: "",
        pass: "",
        email:""
      }}
      >

        {({errors})=>
        (

        <div className="container registerWrapper">
          <h3 data-aos="fade-right" className='welcomeTitle'>New Around here? <br /><span className='text-white'>Sign in</span></h3>
          <Form>
            <div className="form-floating my-3 form-group">
              <Field
                type="text"
                name="username"
                id="user"
                className="form-control"
                placeholder="Username"
              />
              <label htmlFor="user">Username</label>
              <ErrorMessage name='username' component={()=>(
                <div className="error">{errors.username}</div>
              )}/>
             <div className="form-floating mb-4 mx-auto">
              <Field
                type="email"
                name="email"
                id="email"
                className="my-3 form-control"
                placeholder="Email"
              />
             <label htmlFor="email">Email</label>
                <ErrorMessage name='email' component={()=>(
                  <div className="error">{errors.email}</div>
                )}/>
              </div>
              <div className="form-floating mb-5 mx-auto">
              <Field
                type="password"
                name="pass"
                id="pass"
                className="form-control"
                placeholder="Password"
              />
              <ErrorMessage name="pass" component={()=>(
                <h2 className='error'>{errors.pass}</h2>
              )}/>
              <label htmlFor="pass">Password</label>
            </div>

              <div className="col-xs-5 mt-5 pull-right">
                <button
                  type="submit"
                  name="login-submit"
                  id="login-submit"
                  tabindex="4"
                  className="form-control btn registerBtn"
                >Register</button>
              </div>
            </div>
          </Form>
        </div>
        )
        }
      </Formik>
    </>
  )
}

export default Register
