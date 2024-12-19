/* eslint-disable @typescript-eslint/no-explicit-any */
import Card from "@/components/api/card";
import { useEffect, useState } from "react";

const Api = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then((response) => response.json())
      .then((result) => setData(result));
  }, []);

  console.log(data);

  return (
    <div className="grid mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2 bg-white dark:bg-gray-800">
      {
        data 
          ? [...Array(4).keys()].map(item => <Card key={item} {...data}/> )
          : "Loading ..."
      }
    </div>
  );
};

export default Api;
