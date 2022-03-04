import { Children } from "react";

function ChildOne() {
  return <>ChildOne</>;
}

function ChildTwo() {
  return <>ChildTwo</>;
}

function Container({ children }) {
  const newChildren = Children.toArray(children)
    .map((child) => {
      return { ...child, key: Math.random() };
    })
    .sort((a, b) => a.key - b.key);

  console.log(newChildren);

  return <div>{newChildren}</div>;
}

export default function ChildrenPage() {
  return (
    <div>
      <h2>ChildrenPage: </h2>
      <Container>
        <ChildOne></ChildOne>
        <ChildOne></ChildOne>
        <ChildTwo></ChildTwo>
        <ChildTwo></ChildTwo>
      </Container>
    </div>
  );
}
