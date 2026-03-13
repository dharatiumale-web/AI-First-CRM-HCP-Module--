from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

database=[]

class Interaction(BaseModel):
    hcp:str
    notes:str

class Chat(BaseModel):
    message:str

@app.post("/log")
def log(data:Interaction):
    database.append(data)
    return {"message":"Interaction saved"}

@app.post("/chat")
def chat(data:Chat):
    return {"reply":"AI processed interaction"}