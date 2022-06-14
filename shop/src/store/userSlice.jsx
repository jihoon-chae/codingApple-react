import { createSlice } from "@reduxjs/toolkit";

// user가 너무 길어지면 파일로 분할하기
let user = createSlice({
  // useState랑 비슷한 역할
  name: "user",
  initialState: { name: "kim", age: 20 }, // state를 오브젝트 형식으로

  reducers: {
    changeName(state) {
      // state 수정해주는 함수
      state.name = "park"; // 오브젝트나 어레이는 할당으로 직접 수정해도 State 변경됨
    },

    increase(state, action) {
      // 나이 증가하는 함수
      state.age += action.payload; // action은 state변경함수를 보통 그렇게 부름
    },
  },
});

export let { changeName, increase } = user.actions; // state 변경 함수들 남음 (오른쪽 자료를 변수로 빼는 문법) 
// 이것도 파일로 분할하면 좋음

export default user