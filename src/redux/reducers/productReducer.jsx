// rxslice
import { createSlice } from '@reduxjs/toolkit'
import { http } from '../../util/tools';

const initialState = {
    arrProduct : [],
    productDetail:[],
}

const productReducer = createSlice({
  name: 'productReducer',
  initialState,
  reducers: {
    getProductAction: (state,action) => {
        // lấy dữ liệu từ pauload
        const arrProduct = action.payload;
        // cập nhật lại state
        state.arrProduct = arrProduct;
    },
    getProductDetailAction: (state,action) => {
        // bước 4: sau khi nhận được dữ liệu từ dispatch lần 2
        const productDetail = action.payload;
        state.productDetail = productDetail;
    }
  }
});

//............action type,payload ....................

export const {getProductAction,getProductDetailAction} = productReducer.actions

export default productReducer.reducer

// ............action Api ....................

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