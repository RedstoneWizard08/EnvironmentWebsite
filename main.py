import os
import dotenv
import requests

dotenv.load_dotenv()

token = os.getenv("EDL_TOKEN")
sess = requests.Session()

sess.headers["Authorization"] = f"Bearer {token}"

print(sess.get("https://archive.podaac.earthdata.nasa.gov/podaac-ops-cumulus-protected/ANTARCTICA_MASS_TELLUS_MASCON_CRI_TIME_SERIES_RL06.3_V4/antarctica_mass_200204_202501.txt").text)
