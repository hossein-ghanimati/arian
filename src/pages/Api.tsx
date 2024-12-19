/* eslint-disable @typescript-eslint/no-explicit-any */
import Card from "@/components/api/Card";
import { useEffect, useState } from "react";

const Api = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then((response) => response.json())
      .then((result) => setData(result));
  }, []);

  console.log(data);

  return data?.length ? (
    <div className="grid container mb-8 mt-4 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2 bg-white dark:bg-gray-800">
      {[...Array(4).keys()].map((item) => (
        <Card key={item} {...data} />
      ))}
    </div>
  ) : (
    <h3 className="text-4xl text-center mt-16 font-bold">Loading ...</h3>
  );
};

export default Api;
