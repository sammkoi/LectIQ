# main.py
from fastapi import FastAPI
from contextlib import asynccontextmanager
from app.api.router import router

@asynccontextmanager
def lifespan():
  yield


app = FastAPI(lifespan=lifespan)
app.include_router(router, prefix="/api")