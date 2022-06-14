import { Table } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addCount } from './../store.jsx';
import { changeName, increase } from "./../store/userSlice.jsx";

function Cart() {
  let dispatch = useDispatch(); //store.jsx로 요청 보내주는 함수
  let state = useSelector((state) => {
    return state;
  }); // Redux store에 있던거 가져와줌
  // console.log(state.cart );

  return (
    <div>
      <h6>{state.user.name} {state.user.age}의 장바구니</h6> 
      <button onClick={() => {
        dispatch(increase(100))
      }}>age +1 버튼</button>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {state.cart.map((a, i) => {
            return (
              <tr key={i}>
                <td>{state.cart[i].id}</td>
                <td>{state.cart[i].name}</td>
                <td>{state.cart[i].count}</td>
                <td>
                  <button
                    onClick={() => {
                      dispatch(addCount(state.cart[i].id)); // dispatch안에 변경함수 써줘야함 // 이러면 더 정확한 코드
                    }}
                  >
                    +
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default Cart;
