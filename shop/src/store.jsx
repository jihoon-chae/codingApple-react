// 리덕스
import { createSlice } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";

let user = createSlice({
  // useState랑 비슷한 역할
  name: "user",
  initialState: "kim",

  reducers: {
    changeName(state) {
      // state 수정해주는 함수
      return "john" + state;
    },
  },
});

export let { changeName } = user.actions; // state 변경 함수들 남음 (오른쪽 자료를 변수로 빼는 문법)

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
