import { useEffect, useState } from "react";

export default function UseEffectPage() {
  const [value, setValue] = useState(1);
  const [count, setCount] = useState(1);

  useEffect(() => {
    document.title = ` ${value} `;
  });

  useEffect(() => {
    setCount(count + 1);
  }, []);

  useEffect(() => {
    // const timer = setInterval(() => setValue((val) => val + 1), 1000);
    // return () => {
    //   clearInterval(timer);
    // };
  }, []);

  return (
    <div>
      <h2>UseEffectPage: </h2>
      {value}
    </div>
  );
}
