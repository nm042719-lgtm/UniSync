from fastapi import FastAPI

app = FastAPI(
    title="UniSync API",
    version="0.1.0"
)


@app.get("/")
def home():
    return {"message": "UniSync backend is running!"}