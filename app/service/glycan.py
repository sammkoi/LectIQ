# service/glycan.py

# TODO: use db instead of direct xlsx

import requests

BASE_URL = "https://image.glycosmos.org/snfg/png/"


class GlycanService:  
  async def get_img(self, glytoucan_id: str) -> str:
    '''Return byte string for glycan'''
    url = f'{BASE_URL}{glytoucan_id}'
    resp = requests.get(url)
    byte_str = resp.contents
    
    return byte_str
    
    
    
    
