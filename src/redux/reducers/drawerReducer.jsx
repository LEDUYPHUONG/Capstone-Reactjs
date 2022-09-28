// // rxslice
// import React from 'react';
// import { createSlice } from '@reduxjs/toolkit'

// const initialState = {
//     Component: (props) => {
//         return <div>
//           <video width="{'100%'}" height="{'100%'}" controls className='' playsInline x5-playsinline="true" webkit-playsinline="true" tabIndex={2} mediatype="video" src="https://v16-webapp.tiktok.com/70c8d246fa75f3d92d6b6ebb7c80487c/631dd14b/video/tos/alisg/tos-alisg-pve-0037/c1ea330255aa4d58bd4e7139b3e1066c/?a=1988&ch=0&cr=0&dr=0&lr=tiktok&cd=0%7C0%7C1%7C0&cv=1&br=2846&bt=1423&cs=0&ds=3&ft=z_piDPWT2NvjVWe~3ozfuaYQFAe4nRQjlWK~neOB&mime_type=video_mp4&qs=0&rc=ZTo1ZjYzZjo0Omg8OzlnPEBpamxmdWk6ZjNvZjMzODgzNEA1L140LmIzXl4xYC5jYzJhYSNxcGlkcjRva2JgLS1kLy1zcw%3D%3D&l=2022091106143901024500505101EC2378&btag=80000" />
//         </div>
//     }
// }

// const drawerReducer = createSlice({
//   name: 'drawerReducer',
//   initialState,
//   reducers: {
//     setComponent: (state,action) =>{
//         // lấy component từ payload
//         const Component = action.payload
//         state.Component = Component
//     }
//   }
// });

// export const {setComponent} = drawerReducer.actions

// export default drawerReducer.reducer