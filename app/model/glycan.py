from app.model.base import Base
from typing import List
from sqlalchemy import Integer, String, Float, ForeignKey
from sqlalchemy.orm import Mapped, mapped_column, relationship

class Lectin(Base):
  __tablename__ = "lectin"
  id: Mapped[int] = mapped_column(Integer, primary_key=True)
  name: Mapped[str] = mapped_column(String)
  pairs: Mapped[List["Pairs"]] = relationship("Pairs", back_populates="lectin")


class Glycan(Base):
  __tablename__ = "glycan"
  id: Mapped[int] = mapped_column(Integer, primary_key=True)
  name: Mapped[str] = mapped_column(String)
  glytoucan_id: Mapped[str] = mapped_column(String)
  pairs: Mapped[List["Pairs"]] = relationship("Pairs", back_populates="glycan")

class Pairs(Base):
  __tablename__ = "pairs"
  id: Mapped[int] = mapped_column(Integer, primary_key=True)
  lectin_id: Mapped[int] = mapped_column(Integer, ForeignKey("lectin.id"))
  lectin: Mapped[Lectin] = relationship("Lectin", back_populates="pairs")
  glycan_id: Mapped[int] = mapped_column(Integer, ForeignKey("glycan.id"))
  glycan: Mapped[Glycan] = relationship("Glycan", back_populates="pairs")
  pair_data: Mapped[List["PairData"]] = relationship(
    "PairData", back_populates="pairs"
  )

  
class PairData(Base):
  __tablename__ = "pair_data"
  pairs_id: Mapped[int] = mapped_column(Integer, ForeignKey("pairs.id"), primary_key=True)
  source: Mapped[str] = mapped_column(String, primary_key=True)
  pairs: Mapped[Pairs] = relationship("Pairs", back_populates="pair_data")
  kd: Mapped[float] = mapped_column(Float)
  kderr: Mapped[float] = mapped_column(Float)
  inverr: Mapped[float] = mapped_column(Float)
  unit: Mapped[str] = mapped_column(String)