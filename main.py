from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import requests
from datetime import datetime
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Define the URL for top stories
TOP_STORIES_URL = "https://hacker-news.firebaseio.com/v0/beststories.json?print=pretty&orderBy=\"$priority\"&limitToFirst=10"
ITEM_URL = "https://hacker-news.firebaseio.com/v0/item/{item_id}.json?print=pretty"

class Story(BaseModel):
    title: str
    author: str
    url: str
    score: int
    time: str

def fetch_top_story_ids():
    try:
        response = requests.get(TOP_STORIES_URL)
        response.raise_for_status()
        return response.json()
    except requests.RequestException:
        raise HTTPException(status_code=500, detail="Error fetching top stories IDs")

def fetch_story_details(story_id):
    try:
        response = requests.get(ITEM_URL.format(item_id=story_id))
        response.raise_for_status()
        story_data = response.json()
        return {
            "title": story_data["title"],
            "author": story_data.get("by", "Unknown"),
            "url": story_data.get("url", "#"),
            "score": story_data.get("score", 0),
            "time": datetime.fromtimestamp(story_data["time"]).strftime('%Y-%m-%d %H:%M:%S')
        }
    except requests.RequestException:
        raise HTTPException(status_code=500, detail="Error fetching story details")

@app.get("/top-stories", response_model=list[Story])
async def get_top_stories():
    story_ids = fetch_top_story_ids()
    top_stories = []
    for story_id in story_ids[:10]: 
        story = fetch_story_details(story_id)
        top_stories.append(story)
    return top_stories
