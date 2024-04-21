import { useState, useEffect } from "react";
import { CanceledError } from "axios";
import apiClient from "../services/apiClient";

const useData = ({ endpoint, reqConfig, dependency }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get(endpoint, { signal: controller.signal, ...reqConfig })
      .then((response) => setData(response.data))
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error);
      });

    return () => controller.abort();
  }, [dependency]);

  return { data, error };
};

export default useData;
