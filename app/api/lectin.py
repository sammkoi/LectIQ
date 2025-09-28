# api/lectin.py
from fastapi import APIRouter, Depends
from app.service.lectin import LectinService
from app.core.dependencies import get_lectin_service
router = APIRouter()

@router.get("/lectins")
def get_all_lectins(
  service: LectinService = Depends(get_lectin_service)
  ):
  return {
    "lectins": service.get_lectins()
  }

@router.get("/lectins/{id}")
def get_lectin_info(
  id: str,
  service: LectinService = Depends(get_lectin_service)
  ):
  res = service.get_lectin_info(id)
  return {"Status": 200, "id": id, "type": f'{type(id)}'}
