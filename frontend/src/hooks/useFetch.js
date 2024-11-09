import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null); // Default to null
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); // Start by loading

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null); // Clear previous errors

      try {
        const res = await fetch(url);

        if (!res.ok) {
          throw new Error(`Failed to fetch: ${res.statusText} (Status Code: ${res.status})`);
        }

        const result = await res.json();
        setData(result.data || []); // Ensure data is set, default to empty array if no data
      } catch (err) {
        setError(err.message || "An error occurred");
      } finally {
        setLoading(false); // Ensure loading is false when fetch is done
      }
    };

    fetchData();
  }, [url]); // Runs when URL changes

  return { data, error, loading };
};

export default useFetch;
