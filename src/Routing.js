import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Login.js';
import Home from './Home.js';
import Form from './Form.js';

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/Form" element={<Form />}></Route>
        {/* <Route path="/edit" render={() => <Form selectedData={editData} />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default Routing