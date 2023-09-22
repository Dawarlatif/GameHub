import  { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig } from "axios";


interface ResponseGenerator<T> {
  count: number;
  results: T[];
}
const useData = <T>(endpoint:string, requestConfig?:AxiosRequestConfig , dependency?:any[]) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    //using apiClient to get response from rawg Api
    apiClient
      .get<ResponseGenerator<T>>(endpoint,{...requestConfig})
      .then((res) => {
        setData(res.data.results);
        setLoading(false);
      })
      .catch((error) => setError(error.message));
  }, 
  //optionally assigns dependency iff dependency is there
  dependency?[...dependency]:[]);

  return { data, error, loading };
};

export default useData;
