
import { useState, useEffect } from 'react'
export default function SetTimeout() {
  const [value, setValue] = useState(0);
  // const [timers, setTimers] = useState([]);

  useEffect(() => {
    const timer = setInterval(() => {
      setValue(value + 1);
    }, 1000);
    // timers.push(timer);
    // setTimers(timers);
    // console.log(timers);
    return () => {
      clearInterval(timer);
    };
  });

  return <div>{value}</div>;
}

