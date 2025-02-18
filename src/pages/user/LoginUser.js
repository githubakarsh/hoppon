import React, { useState, useEffect } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUserAuthDetails } from "../../stateManagement/slices/userAuthSlice";

export const LoginUser = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState([]);
  const [profile, setProfile] = useState({});

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log("Login Failed:", error),
  });

  useEffect(() => {
    if (user) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          console.log(res.data);
          setProfile(res.data);
          dispatch(setUserAuthDetails(res.data));
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  return (
    <div className="login-wrapper">
        <button className="login-button" onClick={() => login()}>Sign in with Google 🚀 </button>
    </div>
  );
};
