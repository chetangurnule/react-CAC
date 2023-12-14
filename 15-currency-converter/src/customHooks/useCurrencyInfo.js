import { useEffect, useState } from "react";

export default function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  useEffect(() => {
    let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`;

    fetch(url)
      .then((res) => res.json())
      .then((jsonData) => setData(jsonData[currency]));
  }, [currency]);
  return data;
}
