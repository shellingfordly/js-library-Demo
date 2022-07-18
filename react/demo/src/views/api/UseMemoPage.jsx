import { useEffect, useMemo, useState } from "react";
import useSetState from "../../hooks/useSetState";

export default function UseMemoPage() {
  const [count, setCount] = useState(0);

  const doubleCount = useMemo(() => count * 2, [count]);

  const [obj, setObj] = useSetState({
    a: 1,
    b: 2,
    c: 3,
  });
  const [arr, setArr] = useSetState([{ id: 1 }, { id: 2 }]);

  useEffect(() => {
    setObj({ d: 2 });
    setArr({ id: 3 });
  }, []);

  return (
    <>
      <h2>UseMemoPage: </h2>
      <div>
        {count} - {doubleCount}
        <button onClick={() => setCount((v) => v + 1)}>add</button>
      </div>
      <div>{JSON.stringify(obj)}</div>
      <div>
        {arr.map((item) => (
          <span key={item.id}> id:{item.id}</span>
        ))}
      </div>
    </>
  );
}
