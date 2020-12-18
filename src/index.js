import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'

import store from './redux/store'
import App from './containers/app/app.jsx'
// import App1 from './components/app1/app1.jsx'
import './index.css'
// import './index1.css'

ReactDOM.render(
 (
   <Provider store={store}>
     <App />
   </Provider>
 ),
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals