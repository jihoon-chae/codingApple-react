// 리덕스 
import { createSlice } from '@reduxjs/toolkit'
import { configureStore } from '@reduxjs/toolkit'

let user = createSlice({ // useState랑 비슷한 역할
name : 'user',
initialState : 'kim'
})

let stock = createSlice({ // useState랑 비슷한 역할
  name : 'stock',
  initialState : [10, 11, 12]
  })

export default configureStore({
  reducer: { 
    user : user.reducer, // 등록하기
    stock : stock.reducer
  }
})