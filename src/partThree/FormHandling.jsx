import { useState } from "react"

export default function FormHandling(){
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    function handleSubmit(e){
        e.preventDefault()
        console.log("form submitted", {name, email})
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <h1>sample form</h1>

                <input 
                    type="text"
                    placeholder="enter your name"
                    value={name}
                    required
                    onChange = {(e) => setName(e.target.value)}
                    />

                <input 
                    type="text"
                    placeholder="enter your email"
                    value={email}
                    required
                    onChange={e=>setEmail(e.target.value)}
                />    

                <button type="submit">submit</button>

                

                {name==="" || email === "" ? <p>please fill all field</p> : 
                <p>your name is: {name} <br /> your email is : {email}</p>  }
                
            </form>
        </>
    )
}