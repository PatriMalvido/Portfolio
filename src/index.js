import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import App from "./components/App";

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById("root")
);


// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter as Router, Switch, Route, Link  } from 'react-router-dom';
// import App from './components/App';
// import Contact from './components/Contact'

// ReactDOM.render(
//     <Router>
//         <Routes>
//           <Route path='/' element={<App/>}/>
//           <Route path='/contact' element={<Contact/>}/>
//         </Routes>
//     </Router>,
//   document.getElementById('root')
// );