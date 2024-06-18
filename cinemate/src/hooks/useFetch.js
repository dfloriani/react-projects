import { useState, useEffect } from "react";

const useFetch = (apiPath, queryTerm="") => {
  const [data, setData] = useState([]);
  const API_KEY = process.env.REACT_APP_API_KEY;
  const baseUrl = "https://api.themoviedb.org/3/";

  const url = `${baseUrl}${apiPath}?api_key=${API_KEY}&query=${queryTerm}`;

  useEffect(() => {
    async function fetchMovies() {
      const response = await fetch(url);
      const json = await response.json();
      setData(json.results);
    }
    fetchMovies();
  }, [url]);
  return { data };
};

export default useFetch;
