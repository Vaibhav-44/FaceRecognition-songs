from fastapi import *
from rec import Moodify

app = FastAPI()

@app.get("/song-list/")
async def get_song_list(image_location: str, limit: int = 10):
    try:
        moodify = Moodify()
        return moodify.get_songs(image_location=image_location, list_limit=limit)
    except:
        return {"err" : "Could not get song list"}

