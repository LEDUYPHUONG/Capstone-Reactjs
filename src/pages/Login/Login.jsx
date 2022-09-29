import React from "react";
import {useFormik} from 'formik';
import * as Yup from 'yup'
import { useDispatch } from "react-redux";
import { loginApi } from "../../redux/reducers/userReducer";


export default function Login(props) {
  const dispatch = useDispatch();
  // lấy dữ liệu từ form
  const frm = useFormik({
      initialValues: {//dữ liệu mặc định ban đầu của form
          email:'',
          password:'',
      },
      validationSchema: Yup.object().shape({// check validation
          email:Yup.string().required('email không được bỏ trống!').email('email không đúng định dạng!'),
          password:Yup.string().required('password không được bỏ trống!').min(1,'password từ 1-32 ký tự!').max(32,'password từ 1-32 ký tự!'),
          //.matches(/abc/,'password không đúng định dạng!')
      }),
      onSubmit: (values) => {
          // console.log(values);
        dispatch(loginApi(values))
      }
  })
  return (
    <form className="login" onSubmit={frm.handleSubmit}>
      <div className="login-container">
        <div className="login-title">
          <p className="login-title-text">Login</p>
        </div>
        <div className="horizontal-line"></div>
        <div className="form-default">
          <form>
            <div className="form-item">
              <p className="form-item-title">Email</p>
              <div className="form-group input-default">
                <input type="text" placeholder="email" id="email" name="email" onChange={frm.handleChange} onBlur={frm.handleBlur}/>
                {frm.errors.email ? <span className="text-danger">{frm.errors.email}</span>: ''}
              </div>
              <div className="span-danger">
                {frm.errors.email ? <span className="text-danger text-err">{frm.errors.email}</span>: ''}
              </div>
            </div>
            <div className="space-betwwen-form-item"></div>
            <div className="form-item">
              <p className="form-item-title">Password</p>
              <div className="form-group input-default">
                <input type="password" placeholder="password" id="password" name="password" onChange={frm.handleChange} onBlur={frm.handleBlur}/>
                <div className="eye-input">
                  <div className="eye-open">
                    <i className="fa-solid fa-eye"></i>
                  </div>
                  <div className="eye-closed">
                    <i className="fa-regular fa-eye-slash"></i>
                  </div>
                </div>
                <div className="span-danger">
                  {frm.errors.password ? <span className="text-danger text-err">{frm.errors.password}</span>: ''}
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="form-group register-now">
          <span className="register-now-question">Register now ?</span>
          <button className="button-login" type="submit">LOGIN</button>
        </div>
        <div className="login-with-facebook">
          <button className="button-facebook">
            <i className="fa-brands fa-facebook"></i> Continue with Facebook
          </button>
        </div>
      </div>
    </form>
  );
}
