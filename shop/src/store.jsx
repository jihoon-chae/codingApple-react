// 리덕스
import { createSlice } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import user from './store/userSlice.jsx'

let stock = createSlice({
  // useState랑 비슷한 역할
  name: "stock",
  initialState: [10, 11, 12],
});

let cart = createSlice({
  name: "cart",
  initialState: [
    { id: 0, name: "White and Black", count: 2 },
    { id: 2, name: "Grey Yordan", count: 1 },
  ],
});

export default configureStore({
  reducer: {
    user: user.reducer, // 등록하기
    stock: stock.reducer,
    cart: cart.reducer,
  },
});
