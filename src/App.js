import { useSelector } from "react-redux";
import "./App.css";
import { AppNavbar } from "./components/navbar";
import { LoginUser } from "./pages/user/LoginUser";
import { Approuter } from "./router/AppRouter";

function App() {
  const userDetails = useSelector((state) => state.userAuthDetails);
  const { userAuthDetails } = userDetails;
  
  console.log(userDetails, "in app ");
  if(!userAuthDetails.verified_email) {
    console.log("logged out");
  }
  
  return (
    <article>
      <header>
        <AppNavbar />
      </header>
      <main>
        {userAuthDetails?.verified_email ? <Approuter /> : <LoginUser />}
      </main>

      <footer>Footer</footer>
    </article>
  );
}

export default App;
