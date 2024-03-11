import { useState } from "react";
const Counter=()=> {
    const [count, setCount] = useState(0);
    const handleIncrement = () => {
        console.log("before",count)
        setCount((count)=>count + 1);
        setCount((count)=>count + 1);
        setCount((count)=>count + 1);
        console.log("after",count)
    };
    return (
        <>
            <h1>Count is :{count}</h1>
            <input type="number" placeholder="enter a number" />
            <button onClick={handleIncrement}>Increment</button>
        </>
    );
}

export default Counter ;
// setCount((count)=>count +1)//ye direct dom sy value uthatha hi  
//    setCount(count+1) //ye mmemory sy value uthatha hi 