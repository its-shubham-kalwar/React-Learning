import { useEffect, useState } from "react";

// custom hook design
function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    // Define the base URL for the currency API
    const apiUrl = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/";

    // Fetch data from the dynamic API endpoint
    fetch(apiUrl + `${currency}.json`)
      .then((res) => res.json())
      .then((res) => setData(res[currency]))
      .catch((error) => {
        // Handle errors, e.g., log the error or set an error state
        console.error("Error fetching currency data:", error);
      });
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
