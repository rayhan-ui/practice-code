export default function Child(props){
    return(
        <>
        <p>{props.count}</p>
        <button onClick={props.increment}>+</button>
        <button onClick={props.decrement}>-</button>
        <button onClick={props.reset}>reset</button>
        </>
    )
}