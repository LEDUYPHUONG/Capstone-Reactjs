import React from "react";
import {useFormik} from 'formik';
import * as Yup from 'yup'
import { useDispatch } from "react-redux";
import { loginApi } from "../../redux/reducers/userReducer";
import { useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
// import FacebookLogin from 'react-facebook-login'; this is button login faccebook default

export default function Login(props) {
  const [showPassWord,setShowPassword] = useState('password')
  const [showEyeOpen,setShowEyeOpen] = useState('none')
  const [showEyeClose,setShowEyeClose] = useState('block')

  const dispatch = useDispatch();
  const frm = useFormik({
      initialValues: {
          email:'',
          password:'',
      },
      validationSchema: Yup.object().shape({
          email:Yup.string().required('email không được bỏ trống!').email('email không đúng định dạng!'),
          password:Yup.string().required('password không được bỏ trống!').min(1,'password từ 1-32 ký tự!').max(32,'password từ 1-32 ký tự!'),

      }),
      onSubmit: (values) => {
          console.log(values);
        dispatch(loginApi(values))
      }
  })

  const responseFacebook = (response) => {
    axios({
      url:"https://shop.cyberlearn.vn/api/Users/facebooklogin",
      method: "POST",
      data: {
        facebookToken: response.accessToken
      }
    }).then(res => {
      // lưu vào localStore
      localStorage.setItem("accessToken", res.data.content.accessToken )
    })
  }

  return (
    <form className="login" onSubmit={frm.handleSubmit}>
      <div className="login-container">
        <div className="login-title">
          <p className="login-title-text">Login</p>
        </div>
        <div className="horizontal-line"></div>
        <div className="form-default">
          <div className="form-item-container">
            <div className="form-item">
              <p className="form-item-title">Email</p>
              <div className="form-group input-default">
                <input type="text" placeholder="email" id="email" name="email" onChange={frm.handleChange} onBlur={frm.handleBlur}/>
              </div>
              <div className="span-danger">
                {frm.errors.email ? <span className="text-danger text-err">{frm.errors.email}</span>: ''}
              </div>
            </div>
            <div className="space-betwwen-form-item"></div>
            <div className="form-item">
              <p className="form-item-title">Password</p>
              <div className="form-group input-default">
                <input type={showPassWord} placeholder="password" id="password" name="password" onChange={frm.handleChange} onBlur={frm.handleBlur}/>
                <div className="eye-input">
                  <div className="eye-open" style={{display:showEyeOpen}} onClick={() =>{
                    setShowEyeClose('block');
                    setShowEyeOpen('none');
                    setShowPassword('password')
                  }} >
                    <i className="fa-solid fa-eye"></i>
                  </div>
                  <div className="eye-closed" style={{display:showEyeClose}} onClick={() =>{
                    setShowEyeClose('none');
                    setShowEyeOpen('block');
                    setShowPassword('text')
                  }}>
                    <i className="fa-regular fa-eye-slash"></i>
                  </div>
                </div>
                <div className="span-danger">
                  {frm.errors.password ? <span className="text-danger text-err">{frm.errors.password}</span>: ''}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="form-group register-now">
          <NavLink to="/register"><span className="register-now-question">Register now ?</span></NavLink>
          <button className="button-login" type="submit">LOGIN</button>
        </div>
        <div className="login-with-facebook">     
          <FacebookLogin
            appId="1135304574089308"
            autoLoad={true}
            fields="name,email,picture"
            render={renderProps => (
                <button onClick={renderProps.onClick} className="border-0">
                  <button className="button-facebook">
                    <i className="fa-brands fa-facebook"></i> Continue with Facebook
                  </button>
              </button>
            )}
            callback={responseFacebook} />
            {/*  */}
        </div>
        
      </div>
    </form>
  );
}
