import { useStatStyles } from "@chakra-ui/react";
import apiClient from "../services/apiClient";
import useData from "./useData";
import { useEffect, useState } from "react";
import { CanceledError } from "axios";

const useProfile = () => {
  const [data, setData] = useState("");
  const [error, setError] = useState("");
  const token = sessionStorage.getItem("x-auth-token");

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get("/api/user/profile", {
        signal: controller.signal,
        headers: {
          "x-auth-token": token,
        },
      })
      .then((response) => setData(response.data))
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error);
      });

    return () => controller.abort();
  }, []);

  return { data, error };
};

export default useProfile;
