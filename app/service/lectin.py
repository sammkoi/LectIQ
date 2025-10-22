# service/lectin.py
import pandas as pd
from typing import Optional

# TODO: use db instead of direct xlsx

class LectinService:
  data: dict[str, pd.DataFrame]
  
  def __init__(self,):
    # self.data = pd.read_excel("app/data/galectins_id_cleaned.xlsx", sheet_name=None) # todo: dynamic
    self.data = pd.read_excel("app/data/Galectins_GlyTouCanID_Updated.xlsx", sheet_name=None) # todo: dynamic
  
  def get_lectin_info(self, id: str) -> Optional[dict]:
    '''Return available glycan info'''
    res = self.data.get(id, None)
    if res is None or res.empty: return None
    kd_col_name = res.columns[2]
    unit = kd_col_name.split(',')[1].strip()
    res = res.rename(columns={
      kd_col_name: "Kd",
      "stdev_Kd": "kderr",
      "SD": "inverr",
    })
    res["unit"] = unit
    
    return res.to_dict(orient="records")

  def get_lectins(self) -> list[str]:
    '''Return available lectins'''
    return sorted(list(self.data.keys()))