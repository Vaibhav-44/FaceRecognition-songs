from fastapi import *
from rec import Moodify

from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
)
@app.get("/song-list/")
async def get_song_list(image_location: str, limit: int = 10):
    try:
        moodify = Moodify()
        return moodify.get_songs(image_location=image_location, list_limit=limit)
    except Exception as e:
        return {"err" : e}
