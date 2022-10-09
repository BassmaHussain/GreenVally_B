import React  from 'react';
import { BrowserRouter , Route, Routes  } from "react-router-dom";
import "./app.css"
import Home from './components/Home';
import Login from "./components/Login";
import SignUp from "./components/SignUp"
import Error404 from  "./components/Error404"


function App() {
  return (
   <BrowserRouter>
   <div className="App">
        
   <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/loginPage" element={<Login />} />
      <Route path="/signUpPage" element={<SignUp />} />
      <Route path="/*" element={<Error404 />} />
   </Routes>
</div>
   </BrowserRouter>
  );
}

export default App;
