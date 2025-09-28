# api/lectin.py
from fastapi import APIRouter

router = APIRouter()

@router.get("/lectin")
def get_lectin():
  return {"Status": 200}
