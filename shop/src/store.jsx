// 리덕스
import { createSlice } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import user from "./store/userSlice.jsx";

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
    // { id: 1, name: "Red Knit", count: 1 },
  ],
  reducers: {
    addCount(state, action) {
      // 함수 실행할때마다 수량+1
      let 번호 = state.findIndex((a) => {
        return a.id === action.payload;
      }); // 일치하면 어레이 내부 인덱스 찾아줌
      state[번호].count++;
    },
    
    addItem(state, action){
      state.push(action.payload) // 어레이 뒤에 오브젝트 추가
    },
  },
});


export let { addCount, addItem } = cart.actions;

export default configureStore({
  reducer: {
    user: user.reducer, // 등록하기
    stock: stock.reducer,
    cart: cart.reducer,
  },
});
