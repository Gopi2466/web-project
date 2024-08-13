import axios from "axios"
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom"
import './App.css'
import { Suspense, lazy } from "react"
const Signup = lazy(() => import("./Components/SignUp"))
const Login= lazy(() => import("./Components/Login"))

function App() {
 // fetch and axios is used to connect to the end points on the backends.
  return (
    <>
    <BrowserRouter>
    <TopBar />
    <Routes>
      <Route path="/signup" element={<Suspense fallback={"loading..."}><Signup /></Suspense>}></Route>
      <Route path="/signin" element={<Suspense fallback={"loading..."}><Login /></Suspense>}></Route>
    </Routes>
    </BrowserRouter>
     
    </>
  )
}
function TopBar() {
  const Navigate = useNavigate();
  return <>
  <button onClick = {() => {
    Navigate("/signup")
  }}>Signup</button>
  <button onClick={() => {
    Navigate("/signin")
  }}>Login</button>
  </>
}

export default App
