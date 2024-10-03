import { useState, useEffect } from "react";
import { useAuth } from "../context/auth";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Spinner from "../Spinner";

export default function AdminRoute() {
  const [ok, setOk] = useState(false);
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const authCheck = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API}/api/v1/auth/admin-auth`
        );
        if (res.data.ok) {
          setOk(true);
        } else {
          handleUnauthorized();
        }
      } catch (error) {
        handleUnauthorized();
      }
    };
    if (auth?.token) authCheck();
  }, [auth?.token]);

  const handleUnauthorized = () => {
    // Redirect user to the login page
    navigate("/pagenotfound");
  };

  return ok ? <Outlet /> : <Spinner />;
}
