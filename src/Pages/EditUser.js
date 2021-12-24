import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from "axios"
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./EditUser.css";

const EditUser = () => {
    const apiUsersHTTP = axios.create({
        baseURL: "https://api-rick-morty-bootcamp.herokuapp.com"
    })
    const apiUsersAddHTTP = axios.create({
        baseURL: "https://api-rick-morty-bootcamp.herokuapp.com"
    })

    let navigate = useNavigate();
    const [errorLogin, setErroLogin] = useState("");
    return (
        <>

            <p className="error">{errorLogin}</p>
            <Formik

                onSubmit={(valores, { resetForm }) => {
                    let flag = 0;
                    resetForm();
                    apiUsersHTTP.get("/users")
                        .then(response => {
                            response.data.map(el => {
                                if (el.username === valores.username || el.email === valores.email) {
                                    flag = 1
                                }
                            })
                            if (flag == 0) {
                                apiUsersAddHTTP.post(`/user/${valores.email}/${valores.pass}/${valores.username}`)
                                    .then(response => console.log(response))
                                navigate("/login")
                            }
                            else
                                setErroLogin("Existing user ")
                        })
                }}


                validate={(valores => {

                    let errores = {}
                    if (!valores.username) {
                        errores.username = "Please enter your username"
                    }
                    else if (/ /.test(valores.username)) {
                        errores.username = "Spaces are not valid"
                    }

                    if (!valores.email) {
                        errores.email = "Please enter your email"
                    }
                    if (!valores.pass) {
                        errores.pass = "Please enter your password"
                    }
                    if (valores.confirmPass != valores.pass) {
                        errores.confirmPass = "The passwords you entered do not match."
                    }
                    return errores;
                })}

                initialValues={{
                    username: "",
                    pass: "",
                    confirmPass: "",
                    email: ""
                }}
            >

                {({ errors }) =>
                (

                    <div className="container registerWrapper">
                        <h3 data-aos="fade-right" className='welcomeTitle mt-0'>Please <span className='text-white'> Make you changes here</span></h3>
                        <Form>
                            <div className="my-3 form-group">
                                <Field
                                    type="text"
                                    name="username"
                                    id="user"
                                    className="form-control"
                                    placeholder="New Username"
                                />
                                <ErrorMessage name='username' component={() => (
                                    <h2 className="error">{errors.username}</h2>
                                )} />

                                <Field
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="my-3 form-control"
                                    placeholder="New Email"
                                />
                                <ErrorMessage name='email' component={() => (
                                    <h2 className="error">{errors.email}</h2>
                                )} />

                                <Field
                                    type="password"
                                    name="pass"
                                    id="pass"
                                    className="form-control"
                                    placeholder="New Password"
                                />
                                <ErrorMessage name="pass" component={() => (
                                    <h2 className='error'>{errors.pass}</h2>
                                )} />

                                <Field
                                    type="password"
                                    name="confirmPass"
                                    id="confirmPass"
                                    className="form-control"
                                    placeholder="Confirm your Password"
                                />
                                <ErrorMessage name="confirmPass" component={() => (
                                    <h2 className='error'>{errors.confirmPass}</h2>
                                )} />

                                <div className="col-xs-5 mt-5 pull-right">
                                    <button
                                        type="submit"
                                        name="login-submit"
                                        id="login-submit"
                                        tabindex="4"
                                        className="form-control btn registerBtn"
                                    >Continue</button>
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


export default EditUser