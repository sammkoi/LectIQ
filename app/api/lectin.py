# api/lectin.py
from fastapi import APIRouter, Depends
from typing import Optional
router = APIRouter()

@router.get("/lectin")
def get_lectin(
  id: Optional[str] = None,
  ):
  return {"Status": 200, "id": id, "type": f'{type(id)}'}
