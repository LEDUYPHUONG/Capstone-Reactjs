import React from "react";
import {useFormik} from 'formik';
import * as Yup from 'yup'
import { useDispatch } from "react-redux";
import { createProfileApi } from "../../redux/reducers/userReducer";
import { useState } from "react";

export default function Register() {
  const [showPassWord,setShowPassword] = useState('password')
  const [showEyeOpen,setShowEyeOpen] = useState('none')
  const [showEyeClose,setShowEyeClose] = useState('block')
  const [showPassWordCF,setShowPasswordCF] = useState('password')
  const [showEyeOpenCF,setShowEyeOpenCF] = useState('none')
  const [showEyeCloseCF,setShowEyeCloseCF] = useState('block')

  const dispatch = useDispatch();
  const frm = useFormik({
      initialValues: {
          email:'',
          password:'',
          phone:'',
          name:'',
          gender: true,
          passwordConfirm:'',
      },
      validationSchema: Yup.object().shape({
          email:Yup.string().required('email không được bỏ trống!').email('email không đúng định dạng!'),
          password:Yup.string().required('password không được bỏ trống!').min(1,'password từ 1-32 ký tự!').max(32,'password từ 1-32 ký tự!'),
          phone:Yup.string().required('phone không được bỏ trống!').min(9,'phone từ 9-11 số!').max(11,'phone từ 9-11 số!'),
          name:Yup.string().required('name không được bỏ trống!').min(1,'password từ 1-32 ký tự!').max(32,'password từ 1-32 ký tự!'),
          passwordConfirm: Yup.string().oneOf([Yup.ref('password'), null], 'passwordConfirm phải giống với password!'),
          gender:Yup.string().required('gender không được bỏ trống!')
      }),
      onSubmit: (values) => {
          console.log(values);
          if(values.gender === 'true'){
            values.gender = true
          }else{
            values.gender = false
          }
        dispatch(createProfileApi(values))
      }
  })
  return (
    <div className="register">
      <div className="register-container">
        <div className="register-title">
          <p className="register-title-text">Register</p>
        </div>
        <div className="horizontal-line"></div>
        <div className='register-container'>
          <div className='register-avata'></div>
          <div className="form-default">
            <form onSubmit={frm.handleSubmit}>
              <div className='form-item-input'>
                <div className="form-item">
                  <p className='form-item-title'>Email</p>
                  <div className="input-default">
                    <input type="text" placeholder="email" id="email" name="email" onChange={frm.handleChange} onBlur={frm.handleBlur}/>
                  </div>
                  <div className="span-danger">
                    {frm.errors.email ? <span className="text-danger text-err">{frm.errors.email}</span>: ''}
                  </div>
                </div>
                <div className="form-item">
                  <p className='form-item-title'>Name</p>
                  <div className="input-default">
                  <input type="text" placeholder="name" id="name" name="name" onChange={frm.handleChange} onBlur={frm.handleBlur}/>
                    <div className="span-danger">
                    {frm.errors.name ? <span className="text-danger text-err">{frm.errors.name}</span>: ''}
                    </div>
                  </div>
                </div>
                <div className="form-item">
                  <p className='form-item-title'>Password</p>
                  <div className="input-default">
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
                <div className="form-item">
                  <p className='form-item-title'>Phone</p>
                  <div className="input-default">
                    <input type="text" placeholder="phone" id="phone" name="phone" onChange={frm.handleChange} onBlur={frm.handleBlur}/>
                  </div>
                  <div className="span-danger">
                      {frm.errors.phone ? <span className="text-danger text-err">{frm.errors.phone}</span>: ''}
                    </div>
                </div>
                <div className="form-item">
                  <p className='form-item-title'>Password confirm</p>
                  <div className="input-default">
                    <input type={showPassWordCF} placeholder="passwordConfirm" id="passwordConfirm" name="passwordConfirm" onChange={frm.handleChange} onBlur={frm.handleBlur}/>
                    <div className="eye-input">
                      <div className="eye-open" style={{display:showEyeOpenCF}} onClick={() =>{
                        setShowEyeCloseCF('block');
                        setShowEyeOpenCF('none');
                        setShowPasswordCF('password')
                      }} >
                        <i className="fa-solid fa-eye"></i>
                      </div>
                      <div className="eye-closed" style={{display:showEyeCloseCF}} onClick={() =>{
                        setShowEyeCloseCF('none');
                        setShowEyeOpenCF('block');
                        setShowPasswordCF('text')
                      }}>
                        <i className="fa-regular fa-eye-slash"></i>
                    </div>
                  </div>
                    <div className="span-danger">
                      {frm.errors.passwordConfirm ? <span className="text-danger text-err">{frm.errors.passwordConfirm}</span>: ''}
                    </div>
                  </div>
                </div>
                <div className="register-gender" id="gender">
                  <p className='Gender-title'>Gender</p>
                  <div className="male-option">
                    <input type="radio" id="male" name="gender" value={true} onClick={frm.handleChange}/>
                    <label htmlFor='css'>Male</label>
                  </div>
                  <div className="female-option">
                    <input type="radio" id="female" name="gender" value={false} onClick={frm.handleChange}/>
                    <label htmlFor="css">Female</label>
                  </div>
                  {frm.errors.gender ? <span className="text-danger text-err">{frm.errors.gender}</span>: ''}
                </div>
                <div className="form-item">
                </div>
                <div className="submit-button">
                    <button className='button-submit' type="submit">Submit</button>
                  </div>
              </div>
            </form>
          </div>          
        </div>
      </div>
    </div>
  )
}
