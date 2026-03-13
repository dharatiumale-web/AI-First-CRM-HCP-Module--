import React,{useState} from "react"

function ChatInterface(){

const [message,setMessage]=useState("")
const [response,setResponse]=useState("")

const send=async()=>{

const res=await fetch("http://localhost:8000/chat",{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({message})
})

const data=await res.json()

setResponse(data.reply)

}

return(

<div>

<h3>AI Chat Logging</h3>

<textarea
placeholder="Describe doctor interaction"
value={message}
onChange={(e)=>setMessage(e.target.value)}
/>

<br/><br/>

<button onClick={send}>
Send to AI
</button>

<p>{response}</p>

</div>

)

}

export default ChatInterface