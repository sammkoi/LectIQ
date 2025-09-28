# api/router.py
from fastapi import APIRouter
from app.api.lectin import router as lectin_router


router = APIRouter()

router.include_router(lectin_router, tags=["lectin"])
