// // rxslice
// import { createSlice } from '@reduxjs/toolkit'

// const initialState = {
//     arrCommnent: [
//         {name: 'khải',content: 'hihi 123'},
//         {name: 'hậu',content: 'hihi 456'},
//     ]
// }

// const facebookReducer = createSlice({
//   name: 'facebookReducer', //tên nối với tên action
//   initialState,
//   reducers: {
//     addComment: (state,action) => {
//         // b1: lấy dữ liệu action gửi lên
//         const userComment = action.payload;
//         // b2:  cập nhật state
//         // vì userComment.current 2 lần push là giống nhau vùng nhớ => clone ra trước khi push
//         state.arrCommnent.push({...userComment})
//     }
//   }
// });

// export const {addComment} = facebookReducer.actions

// export default facebookReducer.reducer