import { Routes, Route } from "react-router";
import { Home } from "../pages/Home";
import { CreateEvent } from "../pages/events/CreateEvent";



export const Approuter = () => {
    return <Routes>
    <Route index element={<Home />} />
    <Route path="/create-event" element={<CreateEvent />}/>
  </Routes>
};