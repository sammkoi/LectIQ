# service/lectin.py
import pandas as pd
from typing import Optional

# TODO: use db instead of direct xlsx

class LectinService:
  data: dict[str, pd.DataFrame]
  
  def __init__(self,):
    self.data = pd.read_excel("data/galectins_id_cleaned.xlsx") # todo: dynamic
  
  def get_lectin_info(self, id: str) -> Optional[pd.DataFrame]:
    '''Return available glycan info'''
    return self.data.get(id, None)

  def get_lectins(self) -> list[str]:
    return sorted(list(self.data.keys()))