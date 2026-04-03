from fastapi import FastAPI
import uvicorn
from ollama import chat


app = FastAPI()

@app.get("/")
async def root():
    return {"message": "Py Backend Running"}

@app.get("/plan")
async def plan(model):
    messages = [
        {"role" : "system" , "content" : "Yoir are a Schedule planner based on the given task"}
    ]
    pass



if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=8000)