# core/dependencies.py
from app.service.lectin import LectinService
from app.service.glycan import GlycanService

def get_lectin_service() -> LectinService:
  return LectinService()