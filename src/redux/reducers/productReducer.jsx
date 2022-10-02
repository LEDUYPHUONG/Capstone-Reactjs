// rxslice
import { createSlice } from '@reduxjs/toolkit'
import { http } from '../../util/tools';

const initialState = {
    arrProduct : [],
    productDetail:[],
    quantityCarts: 0,
    arrProductCarts: [],
    infoOrder: {
        "orderDetail": [
            {
              "productId": "",
              "quantity": 0
            }
          ],
          "email": ""
    }
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
    setArrProductCarts: (state,action) => {
        state.arrProductCarts.push(action.payload)
    },
    getArrProductAfterDelete: (state,action) => {
        state.arrProductCarts = action.payload
    },
    setInfoOrder: (state,action) => {
        state.infoOrder = action.payload
        console.log(12345);
    },
  }
});

//............action type,payload ....................

export const {setInfoOrder,getProductAction,getProductDetailAction,setQuantityCarts,setArrProductCarts,getArrProductAfterDelete} = productReducer.actions

export default productReducer.reducer

// ............action Api (action thunk) ....................

export const getProductApi =  () => {
    return async (dispatch) => {
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
        try {
            let result = await http.get(`/Product/getbyid?id=${id}`)
            let arrProduct = result.data.content
            const action = getProductDetailAction(arrProduct)
            dispatch(action)
        } catch (err){
            console.log(err);
        }
    }
}

// export const postProductCartsOrder = (infoOrder) =>{
//     return async () => {
//         try {
        
//           const response = await http.post('/Users/order', infoOrder);
//           console.log(456);
//           console.log(response);
//             alert('order thanh cong')
//         } catch (err) {
//             console.log(789);
//           console.log(err);
//         //   if (err.response.status === 400 && err.response.data) {
//         //     alert(err.response.data.message);
//         //   }
//         }
//       };
//   };
