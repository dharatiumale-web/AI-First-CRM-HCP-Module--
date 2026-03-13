import React from "react";
import InteractionForm from "./InteractionForm";
import ChatInterface from "./ChatInterface";

function App() {
  return (
    <div style={{fontFamily:"Inter", padding:"40px"}}>
      <h2>AI CRM – HCP Interaction</h2>
      <InteractionForm/>
      <hr/>
      <ChatInterface/>
    </div>
  );
}

export default App;