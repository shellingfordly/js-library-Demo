import { useEffect, useRef, useState } from "react";

// const getUsername = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("John");
//     }, 3000);
//   });
// };

export default function ClosurePage() {
  const [count, setCount] = useState(0);

  // setTimeout 会造成闭包问题
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     console.log(count);
  //   }, 3000);
  //   return () => {
  //     clearTimeout(timer);
  //   };
  // }, []);

  // setInterval 会造成闭包问题
  //   useEffect(() => {
  //     const timer = setInterval(() => {
  //       console.log(count);
  //     }, 3000);
  //     return () => {
  //       clearInterval(timer);
  //     };
  //   }, []);

  //   // Promise.then 会造成闭包问题
  //   useEffect(() => {
  //     getUsername().then(() => {
  //       console.log(count);
  //     });
  //   }, []);

  //   // useEffect 卸载函数会造成闭包问题
  // useEffect(() => {
  //   return () => {
  //     console.log(count);
  //   };
  // }, []);

  // 通过 ref 来记忆最新的 count
  const countRef = useRef(count);
  countRef.current = count;

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log(countRef.current);
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    console.log("useEffect", count);
  });

  function onClick() {
    setCount((c) => c + 1);
    console.log("countRef.current", countRef.current);
    console.log("onClick count", count);
  }

  return (
    <div>
      <h2>ClosurePage: </h2>
      <button onClick={onClick}>click</button>
    </div>
  );
}
