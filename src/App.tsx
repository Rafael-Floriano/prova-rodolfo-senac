import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react'
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<PageShowCompany/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
