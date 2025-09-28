# service/lectin.py
import pandas as pd
from typing import Optional

# TODO: use db instead of direct xlsx

class LectinService:
  data: dict[str, pd.DataFrame]
  
  def __init__(self,):
    self.data = pd.read_excel("app/data/galectins_id_cleaned.xlsx", sheet_name=None) # todo: dynamic
  
  def get_lectin_info(self, id: str) -> Optional[dict]:
    '''Return available glycan info'''
    res = self.data.get(id, None)
    if res is None or res.empty: return None
    return res.to_dict(orient="records")

  def get_lectins(self) -> list[str]:
    '''Return available lectins'''
    return sorted(list(self.data.keys()))