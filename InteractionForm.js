import React,{useState} from "react"

function InteractionForm(){

const [hcp,setHcp]=useState("")
const [notes,setNotes]=useState("")

const submit=async()=>{

await fetch("http://localhost:8000/log",{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({hcp,notes})
})

alert("Interaction Logged")

}

return(

<div>

<input
placeholder="HCP Name"
value={hcp}
onChange={(e)=>setHcp(e.target.value)}
/>

<br/><br/>

<textarea
placeholder="Interaction Notes"
value={notes}
onChange={(e)=>setNotes(e.target.value)}
/>

<br/><br/>

<button onClick={submit}>
Log Interaction
</button>

</div>

)

}

export default InteractionForm