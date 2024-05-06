import { useEffect, useState } from "react";
import axios from "axios";
import apiClient from "../services/apiClient";

const postData = ({ endpoint, data, config }) => {
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (!data) return;
    const controller = new AbortController();

    apiClient
      .post(endpoint, data, {
        ...config,
        signal: controller.signal,
      })
      .then((response) => {
        setResult(response);
      })

      .catch((error) => {
        if (axios.isCancel(error)) return;
        setError(error);
      });

    return () => controller.abort();
  }, [endpoint, data, config]);

  return { result, error };
};

export default postData;
