import { Inertia } from "@inertiajs/inertia";
import axios from "axios";
import React, { useState } from "react";
import HomeLayout from "../../layouts/HomeLayout";

async function handleLogin(password, onError) {
  try {
    await axios.post("/api/login", { password });
    localStorage.setItem("accessToken", data.token);
    Inertia.visit("/", { replace: true });
  } catch (error) {
    onError();
  }
}

const LoginView = () => {
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handlePssword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    await handleLogin(password, handleErrorSubmit);
  };

  const handleErrorSubmit = () => {
    setErrorMessage("Invalid credentials")
  };

  return (
    <>
      <div className="flex flex-col items-center py-4">
        <h2 className="text-xl font-bold py-2">Ingreso</h2>
        <form
          action="post"
          onSubmit={handleSubmit}
          className="flex flex-col gap-2"
        >
          <span
            className={`${
              errorMessage ? "my-1 px-2 py-1" : "h-0 p-0 m-0 border-0"
            } rounded-sm text-sm w-full border transition-all border-red-700 bg-red-300`}
          >
            {errorMessage}
          </span>
          <input
            className="py-2 px-1 rounded-md"
            type="text"
            value={password}
            onChange={handlePssword}
            maxLength={20}
            minLength={1}
            required
          />
          <input
            className="py-2 rounded-md transition-all bg-tomato/45 hover:bg-tomato"
            type="submit"
            value="Ingresar"
            title="button"
          />
        </form>
      </div>
    </>
  );
};

LoginView.layout = (page) => <HomeLayout children={page} />;
export default LoginView;
