export default function localStoragenSessionMng(){
    localStorage.setItem("username", "rayhan")
    localStorage.setItem("age", 29)

    const username = localStorage.getItem("username")
    const age = localStorage.getItem("age")
    return(
        <>
            <h1>localStoage example</h1>
            <p>username: {username}</p>
            <p>age:{age}</p>
        </>
    )
}