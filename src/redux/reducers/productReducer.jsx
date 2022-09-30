// rxslice
import { createSlice } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'
import { http } from '../../util/tools';

const initialState = {
    arrProduct : [],
    productDetail:[],
    quantityCarts: 0,
}

const productReducer = createSlice({
  name: 'productReducer',
  initialState,
  reducers: {
    getProductAction: (state,action) => {
        state.arrProduct = action.payload;
    },
    getProductDetailAction: (state,action) => {
        state.productDetail = action.payload;
    },
    setQuantityCarts: (state,action) => {
        state.quantityCarts = action.payload;
    },
  }
});

//............action type,payload ....................

export const {getProductAction,getProductDetailAction,setQuantityCarts} = productReducer.actions

export default productReducer.reducer

// ............action Api (action thunk) ....................

export const getProductApi =  () => {
    return async (dispatch) => {
        // console.log(getState());
        try{
            const result = await http.get('/product');
            let arrProduct = result.data.content
            const action = getProductAction(arrProduct);
            dispatch(action);
      
        } catch(err) {
            console.log({err});
        }
    }
}

export const getProductDetailApi = (id) =>{
    return async (dispatch) => {
        // bước 2: thực thi thunk
        try {
            let result = await http.get(`/Product/getbyid?id=${id}`)
            /**
             * axios({
                url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${id}`,
                method: 'GET'
            });
             */
            //sau khi lấy dữ liệu api thành công => đưa lên reducer = hàm dispatch2 từ thuk
            //const action = {type,payload}
            // bước 3: sau khi có dữ liệu => dispatch lần 2
            let arrProduct = result.data.content
            const action = getProductDetailAction(arrProduct)
            dispatch(action)
        } catch (err){
            console.log(err);
        }
    }
}