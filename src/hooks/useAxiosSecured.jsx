import React from "react";
import axios from "axios";
import useAuth from "./useAuth";
import { useEffect } from "react";
import { useNavigate } from "react-router";

const axiosSecure = axios.create({
  baseURL: "https://article-arena-server.vercel.app",
});

const useAxiosSecured = () => {
  const { user, logoutUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const reqInterceptor = axiosSecure.interceptors.request.use((config) => {
      config.headers.Authorization = `Bearer ${user?.accessToken}`;
      return config;
    });

    const resInterceptor = axiosSecure.interceptors.response.use(
      (res) => {
        return res;
      },
      (err) => {
        const statusCode = err.status;
        if (statusCode === 401) {
          logoutUser().then(() => {
            navigate("/login");
          });
        }

        if (statusCode === 403) {
          navigate("/");
        }

        return Promise.reject(err);
      }
    );

    return () => {
      axiosSecure.interceptors.request.eject(reqInterceptor);
      axiosSecure.interceptors.response.eject(resInterceptor);
    };
  }, [user, logoutUser, navigate]);

  return axiosSecure;
};

export default useAxiosSecured;
