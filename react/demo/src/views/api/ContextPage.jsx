import { createContext, useContext, useState } from "react";

const Context = createContext();

function Foo() {
  return <Context.Consumer>{(context) => context.current}</Context.Consumer>;
}

function Bar() {
  const context = useContext(Context);
  return <div style={{ color: "red" }}> {context.current}</div>;
}

export default function ContextPage() {
  const [state] = useState({
    current: "this is test data",
  });

  return (
    <Context.Provider value={state}>
      <h2>ContextPage: </h2>
      <Foo />
      <Bar />
    </Context.Provider>
  );
}
