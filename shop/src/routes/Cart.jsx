import { Table } from "react-bootstrap";
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";
import { changeName } from "./../store.jsx"

function Cart() {
  let state = useSelector((state) => {
   let dispatch = useDispatch() //store.jsx로 요청 보내주는 함수
    return state;
  }); // Redux store에 있던거 가져와줌
  console.log(state.cart );

  return (
    <div>

{state.user}의 장바구니

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
{
  state.cart.map((a, i) => {
    return (
      <tr key={i}>
      <td>1</td>
      <td>{state.cart[i].name}</td>
      <td>{state.cart[i].count}</td>
      <td><button onClick={() => {
        dispatch(changeName())
      }}>+
        </button></td>
    </tr>
    )
  })
}

         
        </tbody>
      </Table>
    </div>
  );
}

export default Cart;
