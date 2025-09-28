# service/lectin.py

# TODO: use db instead of direct xlsx

import pandas as pd

class LectinService:
  data: dict[str, pd.DataFrame]
  
  def __init__(self,):
    self.data = pd.read_excel("data/galectins_id_cleaned.xlsx") # todo: dynamic
  
  def get_lectin_info(self, id: str):
    '''Return available glycan info'''
    return self.data.get(id, None)

  
