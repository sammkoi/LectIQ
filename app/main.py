# main.py
from fastapi import FastAPI
from contextlib import asynccontextmanager

# Change this line so it safely finds the router folder
from api.router import router  

@asynccontextmanager
async def lifespan(app: FastAPI):
    yield

app = FastAPI(lifespan=lifespan)
app.include_router(router, prefix="/api")
