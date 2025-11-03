import './Counter.css'
import { useState , useEffect} from 'react'

const Counter = () => {
    const[count,setCount] = useState(0);
    const[animate,setAnimate] = useState(false);

    const Increment = () =>{
        setCount(count + 1);
        setAnimate(true);
    };
    const Decrement = () =>{
        setCount(count - 1);
        setAnimate(true);
    };
    const Reset = () =>{
        setCount(0);
        setAnimate(true);
    };
    useEffect(() => {
        if(animate) {
            const timeout = setTimeout(() =>setAnimate(false), 300);
            return () => clearTimeout(timeout);
        } 
    }, [animate]);

return(

    <div className='container'>
        <h1>Counter app</h1>
        <h2 className={animate ? "pop": ""}>{count}</h2>
        <button type='button' onClick={Increment}>Increase</button>
        <button type='button' onClick={Decrement}>Decrease</button>
        <button type='button' onClick={Reset}>Reset</button>


    </div>
)
};
export default Counter;