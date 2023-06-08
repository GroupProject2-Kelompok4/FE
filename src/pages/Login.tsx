import React, { FC, useState, useEffect, useCallback } from "react";
import { PrimButton } from "../components/Button";
import { Layout } from "../components/Layout";
import { Input } from "../components/Input";
import loginImage from "../assets/login.png";

import axios from "axios";
import { login } from "../store/features/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import Swal from "sweetalert2";

const Login: FC = () => {
  const [password, setPassword] = useState<any>("");
  const [email, setEmail] = useState("");
  const [cookies, setCookie] = useCookies(["userToken"]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //"email" : "admin@gmail.com"
  //"password" : "secret"
  const authLogin = useCallback(
    async (e: any) => {
      e.preventDefault();
      try {
        const response = await axios.post("https://peterzalai.biz.id/login", {
          email: email,
          password: password,
        });
        const { data } = response.data;
        console.log(data);
        if (data) {
          Swal.fire({
            position: "center",
            icon: "success",
            text: "Signed successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          setCookie("userToken", data.role, { path: "/" });
          setCookie("userToken", data.token, { path: "/" });
          dispatch(login(data));
          navigate("/dashboard");
        }
      } catch (error) {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Email or Password incorrect",
          showConfirmButton: true,
        });
        console.log(error);
      }
    },
    [dispatch, email, navigate, password, setCookie]
  );
  document.title = `Login | Immersive Dashboard`;

  useEffect(() => {
    if (cookies.userToken) {
      navigate("/dashboard");
    }
  }, [cookies.userToken, navigate]);

  return (
    <Layout>
      <div className="grid md:grid-cols-2 lg:grid-cols-2 bg-slate-100  dark:bg-slate-800">
        <div className="flex justify-center items-center">
          <img src={loginImage} alt="image-login" className="hidden md:block" />
        </div>
        <div className="flex  m-10 lg:m-10 justify-center items-center  dark:bg-slate-800  rounded-2xl">
          <form
            className="flex flex-col w-full lg:w-7/12 p-5 items-center shadow-md bg-white dark:bg-@264653 gap-3 rounded-md"
            onSubmit={authLogin}
          >
            <h1 className="font-semibold text-3xl text-back dark:text-white">
              LOGIN
            </h1>
            <div className="w-full">
              <label className=" dark:text-white">
                Email <span className="text-red">*</span>
              </label>
              <Input
                placeholder="Enter Your Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="Email"
                type="email"
              />
            </div>
            <div className="w-full">
              <label className=" dark:text-white">
                Password <span className="text-red">*</span>
              </label>
              <Input
                placeholder="Enter Your Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                id="input-password"
                type="password"
              />
            </div>
            <PrimButton label="Login" id="button-login" type="submit" />
          </form>
        </div>
      </div>
    </Layout>
  );
};
export default Login;
