import { createSlice } from '@reduxjs/toolkit'
import { ACCESS_TOKEN, clearStore, getStoreJson, http, setCookie, setStore, setStoreJson, USER_LOGIN } from '../../util/tools';
import { history } from '../../index';

const initialState = {
    userLogin: getStoreJson(USER_LOGIN) // có thể null hoặc object
    
}

const userReducer = createSlice({
  name: 'userReducer',
  initialState,
  reducers: {
    getProfileAction: (state,action) => {
        state.userLogin = action.payload;
    },

  }
});

export const {getProfileAction} = userReducer.actions

export default userReducer.reducer

// login
export const loginApi = (userLogin) => {//{email,password}
    return async (dispatch) => {
        try {
            const result = await http.post('/users/signin',userLogin)
            //sau khi đăng nhập thành công +> lưu dữ liệu vào localStorage haowcj cookie
            // setCookie(ACCESS_TOKEN,result.data.content.accessToken,30);
            setStore(ACCESS_TOKEN,result.data.content.accessToken);
            //chuyển hướng về profile, trang quên mật khẩu
            history.push('/profile')
            // sau khi đăng nhập thành công thì dispatch action getProfile
            dispatch(getProfileApi())
        } catch (err) {
            history.push('/home')
            console.log(err);
        }
    }
    
}
// login fb
export const loginFacebook = (accessToken) => {//{email,password}
    return async (dispatch) => {
        try {
            const result = await http.post('/Users/facebooklogin',{facebookToken:accessToken})
                //sau khi đăng nhập thành công +> lưu dữ liệu vào localStorage haowcj cookie
                // setCookie(ACCESS_TOKEN,result.data.content.accessToken,30);
                setStore(ACCESS_TOKEN,result.data.content.accessToken);
                //chuyển hướng về profile, trang quên mật khẩu
                history.push('/profile')
                // sau khi đăng nhập thành công thì dispatch action getProfile
                dispatch(getProfileApi())
        } catch (err) {
            history.push('/home')
            console.log(err);
        }
    }
    
}
// index
export const getProfileApi = () => {
    return async dispatch => {
        try {
            const result = await http.post('/users/getProfile');
            //lấy được thông tin profile => đưa lên redux
            const action = getProfileAction(result.data.content);
            dispatch(action);

            //lưu vào storage 
            setStoreJson(USER_LOGIN,result.data.content)
        } catch (err) {
            
        }
    }
}
// register
export const createProfileApi = (formData) => {
    return async () => {
      try {
        delete formData.passwordConfirm;
        const response = await http.post('/users/signup', formData);
        if (response && response.data) {
          alert(response.data.message);
          history.push('/login');
        }
      } catch (err) {
        console.log(err);
        if (err.response.status === 400 && err.response.data) {
          alert(err.response.data.message);
        }
      }
    };
};

// export const getOrderHistoryApi = () => {
//     return async dispatch => {
//         try {
//             const result = await http.post('/users/getProfile');
//             const action = getProfileAction(result.data.content);
//             dispatch(action);
//         } catch (err) {
            
//         }
//     }
// }



// profile
export const updateProfileApi = (formData) => {//{email,password}
    return async (dispatch) => {
        try {
            const response = await http.post('/users/updateProfile',formData)
           
            if (response && response.data) {
                dispatch(getProfileApi())
                alert(response.data.content);
            }
        } catch (err) {
            console.log(err);

            if (err.response.status === 400 && err.response.data) {
                alert(err.response.data.content);
            }
        }
    }
    
}
// carts
export const getUserOderApi = () => {
    return async dispatch => {
        try {
            const response = await http.post('/users/order');
        } catch (err) {
            
        }
    }
}

