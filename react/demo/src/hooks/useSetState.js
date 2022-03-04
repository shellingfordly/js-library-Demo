import { useState } from "react";

function isArray(value) {
  return value instanceof Array;
}

function isObject(value) {
  return value instanceof Object && !(value instanceof Array);
}

function isNotObject(value) {
  return typeof value !== "object";
}

export default function useSetState(initValue) {
  const [_value, _setValue] = useState(initValue);

  function setValue(newValue) {
    // 初始数据为 数组
    if (isArray(initValue)) {
      if (isArray(newValue)) {
        _setValue((oldValue) => [...oldValue, ...newValue]);
      } else {
        _setValue((oldValue) => [...oldValue, newValue]);
      }
    }
    // 初始数据为 对象
    else if (isObject(initValue)) {
      if (isObject(newValue)) {
        _setValue((oldValue) => ({
          ...oldValue,
          ...newValue,
        }));
      } else {
        throw new Error(`${JSON.stringify(newValue)} 与初始数据类型不符！`);
      }
    } else if (isNotObject(initValue)) {
      _setValue(newValue);
    }
  }
  return [_value, setValue];
}
