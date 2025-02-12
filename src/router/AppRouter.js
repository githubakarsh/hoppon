import { Routes, Route } from "react-router";
import { Home } from "../pages/Home";
import { CreateUser } from "../pages/user/CreateUser";



export const Approuter = () => {
    return <Routes>
    <Route index element={<Home />} />
    <Route path="/create-user" element={<CreateUser />}/>
  </Routes>
};