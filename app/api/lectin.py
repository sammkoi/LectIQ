# api/lectin.py
from fastapi import APIRouter

router = APIRouter()

@router.get("/lectin")
def get_lectin(id: str):
  return {"Status": 200}
