import { useEffect, useState } from "react";

export default function SetStatePage() {
  const [value, setValue] = useState(1);

  useEffect(() => {
    setValue((val) => ++val);
    // console.log(value);
  }, []);

  useEffect(() => {
    // console.log(value);
  }, [value]);

  return (
    <div>
      <h2>SetStatePage: </h2>
      {value}
    </div>
  );
}
