import { Routes, Route } from "react-router";
import { Home } from "../pages/Home";
import { CreateUser } from "../pages/user/CreateUser";
import { Profile } from "../pages/user/Profile";

export const Approuter = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/create-user" element={<CreateUser />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};
