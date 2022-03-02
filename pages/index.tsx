import type { NextPage } from "next";
import { useState } from "react";

const Home: NextPage = () => {
  const [value, setValue] = useState(0);
  return (
    <div>
      <div className="m-5 p-5 text-4xl">{value}</div>
      <button
        className="w-36 m-5 p-5 bg-sky-400 rounded-lg text-xl"
        onClick={() => setValue(value + 1)}
      >
        Add
      </button>
      <button
        className="w-36 text-xl m-5 p-5 bg-red-400 rounded-lg"
        onClick={() => setValue(value - 1)}
      >
        Subtract
      </button>
    </div>
  );
};

export default Home;
