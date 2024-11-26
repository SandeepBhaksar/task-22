import { useState, useEffect, useCallback } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true); // Start in loading state
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    setLoading(true); // Ensure loading is true at the start
    setError(null); // Reset error state
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json(); // Wait for the JSON response
      setData(result); // Only set data once it is fully fetched
    } catch (err) {
      setError(err.message);
    } finally {
      // Set loading to false only after data fetch is complete or fails
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fetchData(); // Trigger the fetch when the URL changes
  }, [fetchData]);

  return { data, loading, error }; // Return all states
};

export default useFetch;
