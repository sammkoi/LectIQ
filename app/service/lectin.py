# service/lectin.py
import pandas as pd
from typing import Optional

# TODO: use db instead of direct xlsx

class LectinService:
  data: dict[str, pd.DataFrame]
  
  def __init__(self,):
    self.data = pd.read_excel("data/galectins_id_cleaned.xlsx", sheet_name=None) # todo: dynamic
  
  def get_lectin_info(self, id: str) -> Optional[dict]:
    '''Return available glycan info'''
    res = self.data.get(id, None)
    if not res: return None
    return res.to_dict()

  def get_lectins(self) -> list[str]:
    '''Return available lectins'''
    print(self.data)
    return sorted(list(self.data.keys()))