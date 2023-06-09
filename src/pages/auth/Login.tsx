import { TextField } from "@mui/material"
import "./Login.css"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { tokenInstance } from "../../axios"
import { toast, ToastContainer } from "react-toastify"

const Login = () => {
  const [username, setusername] = useState("")
  const [password, setpassword] = useState("")
  const navigate = useNavigate()
  const handleLogin = async () => {
    try {
      const response = await tokenInstance.post("", { username, password })
      console.log("response", response)
      if (response.status === 200) {
        localStorage.setItem("pminToken", response.data.jwt_token)
        navigate("/")
        setTimeout(() => {
          toast.success("Login Successfull")
        }, 1000)
      } else {
        toast.error("Invalid Username or Password")
      }
    } catch (error) {
      console.log("error", error)
      toast.error("Invalid Username or Password")
    }
  }
  return (
    <>
      <ToastContainer position="top-right" />
      <div className="loginContainer min-vh-100">
        <div className="loginLeft">
          <div className="topIcon">
            <img src="/images/logo.png" alt="Pure Beauty Logo" />
          </div>
          <div className="loginComponent">
            <div className="loginItem">
              <h1 className="basicHeading">Login</h1>
            </div>
            <div className="loginItem">
              <TextField
                sx={{
                  input: {
                    accentColor: "red",
                    color: "green",
                  },
                  fieldset: { borderColor: "red" },
                }}
                value={username}
                onChange={(e) => setusername(e.target.value)}
                id="username"
                className="loginInput"
                label="Username"
                variant="standard"
              />
            </div>
            <div className="loginItem">
              <TextField
                id="password"
                className="loginInput"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                label="Password"
                variant="standard"
              />
            </div>
            <div className="loginItem">
              <button className="loginButton mx-auto " onClick={handleLogin}>
                LOGIN
              </button>
            </div>
            <div className="loginItem">
              <div className="bottonTextDiv ">
                <span className="bottomText">LOGIN OR</span>
                <Link to={"/shop"} className="link">
                  <span className="bottonText">&nbsp; SHOP</span>
                </Link>{" "}
              </div>
            </div>
          </div>
        </div>
        <div className="loginRight">
          <div className="imageRight">
            <img src="/images/loginBg.png" alt="Background Image For Login" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
