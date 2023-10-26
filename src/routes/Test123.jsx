import { useState, useEffect } from "react";

const Test123 = () => {
  const [temp, setTemp] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api-formula-1.p.rapidapi.com/timezone",
          {
            method: "GET",
            headers: {
              "x-rapidapi-host": "api-formula-1.p.rapidapi.com",
              "x-rapidapi-key": "bbcf8c302ffebc5c9ce08e62ae2f989b", // Replace with your API key
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          console.log(data);
          // Assuming "current.temp_f" exists in the response data
          setTemp(data.current.temp_f);
        } else {
          console.error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error during API request: ", error);
      }
    };

    fetchData();
  }, []);

  return <div>London Temp: {temp}</div>;
};

export default Test123;
