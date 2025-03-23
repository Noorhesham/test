import { cookies } from "next/headers";
import React from "react";

const page = () => {
  return <div>{cookies().toString()}</div>;
};

export default page;
