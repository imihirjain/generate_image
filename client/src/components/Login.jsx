import { CiUser } from "react-icons/ci";
import { MdOutlineMail } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { motion } from "motion/react";
import axios from "axios";
import { toast } from "react-toastify";
const Login = () => {
  const [state, setState] = useState("Login");
  const { setShowLogin, backendUrl, setToken, setUser } =
    useContext(AppContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (state === "Login") {
        const { data } = await axios.post(backendUrl + "/api/user/login", {
          email,
          password,
        });

        if (data.success) {
          setToken(data.token);
          setUser(data.user);
          localStorage.setItem("token", data.token);
          setShowLogin(false);
        } else {
          toast.error(data.message);
        }
      } else {
        const { data } = await axios.post(backendUrl + "/api/user/register", {
          name,
          email,
          password,
        });
        console.log(data);

        if (data.sucess) {
          setToken(data.token);
          setUser(data.user);
          localStorage.setItem("token", data.token);
          setShowLogin(false);
        } else {
          toast.error(data.message);
        }
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center">
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0.2, y: 50 }}
        transition={{ duration: 0.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative bg-white p-10 rounded-xl text-slate-500"
      >
        <h1 className="text-center text-2xl text-neutral-700 font-medium">
          {state}
        </h1>
        <p className="text-sm">
          Welcome back! Please sign {state === "Login" ? "in" : "up"} to
          continue
        </p>

        {state !== "Login" && (
          <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-4">
            <CiUser />
            <input
              className="outline-none text-sm"
              type="text"
              placeholder="Full Name"
              required
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>
        )}

        <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-4">
          {/* <img src={assets.email_icon} alt="" />
           */}
          <MdOutlineMail />
          <input
            className="outline-none text-sm"
            type="email"
            placeholder="Email id"
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-5">
          {/* <img src={assets.lock_icon} alt="" /> */}
          <CiLock />
          <input
            className="outline-none text-sm"
            type="password"
            placeholder="Password"
            required
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        {/* <p className="text-sm text-blue-600 my-4 cursor-pointer">
          Forgot Password?
        </p> */}
        <button className="bg-blue-600 w-full mt-4 text-white py-2 rounded-full">
          {state !== "Login" ? "Create Account" : "Login"}
        </button>

        {state === "Login" ? (
          <p className="mt-5 text-center">
            Don't have an account?{" "}
            <span
              className="text-blue-600 cursor-pointer"
              onClick={() => setState("Sign Up")}
            >
              Sign Up
            </span>
          </p>
        ) : (
          <p className="mt-2 text-center">
            Already have an account?
            <span
              className="text-blue-600 cursor-pointer"
              onClick={() => setState("Login")}
            >
              Login
            </span>
          </p>
        )}

        <IoCloseOutline
          className="absolute top-5 right-5 cursor-pointer w-6 h-6"
          onClick={() => setShowLogin(false)}
        />
      </motion.form>
    </div>
  );
};

export default Login;
