import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import rootReducer from './reducers';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// 스토어 생성
const store = createStore(rootReducer);
store.dispatch({
  type: 'ADD_TODO',
  text: 'USE REDUX'
})
console.log('store.getState() : ', store.getState());

// 액션을 추가해서 스토어에 전달
// 사진에서 UI안의 Deposit, Withdraw처럼
// root.render(
//   <React.StrictMode>
//     <App 
//       value={store.getState()}
//       onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
//       onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
//     />
//   </React.StrictMode>
// );

const render = () => root.render(
  <React.StrictMode>
    <App 
      value={store.getState()}
      onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
      onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
    />
  </React.StrictMode>
);

render();
store.subscribe(render);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
