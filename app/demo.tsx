"use client";
import { Button } from "@/components/ui/button";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import store from "@/store/store";
import { increment } from "@/store/counterSlice";
// import axiosInstance from "@/lib/axios";

export default function Demo() {
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.counter.value);
  const [latestCount, setLatestCount] = useState(count);
  useEffect(() => {
    setLatestCount(count);
  }, [count]);

  useEffect(() => {
    // async function fetchData() {
    //   const response = await axiosInstance.get("/api/demo");
    //   console.log(response);
    //   return {
    //     props: {
    //       data: response.data,
    //     },
    //   };
    // }
    // fetchData();
  }, []);
  useEffect(() => {
    console.log("Count updated:", count);
  }, [count]);
  function handleCountIncrement(event: any): void {
    console.log("old count:", latestCount);
    dispatch(increment());
    //获取的还是旧的状态
    console.log("New count:", latestCount);
  }

  const handleIncrement = () => {
    console.log("old count:", latestCount);
    dispatch(increment());

    // 立即获取最新状态
    const currentState = store.getState();
    console.log("Updated state:", currentState.counter.value);
  };

  return (
    <div>
      <div>
        <div>Count: {count}</div>
        <Button onClick={handleIncrement}>Increment</Button>
      </div>
    </div>
  );
}
