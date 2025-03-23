import React from "react";

const page = async () => {
  const res = await fetch("https://backend.orient-paints.com/api/rm_ecommarce/v1/products", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "device-unique-id": "1234567890",
      "device-type": "web",
      "device-info": "{}",
    },
  });
  const data = await res.json();
  console.log(data);
  return <div></div>;
};

export default page;
