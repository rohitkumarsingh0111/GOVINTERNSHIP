from fastapi import FastAPI
from pydantic import BaseModel
import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

app = FastAPI()

df = pd.read_csv("jobs_data.csv")
df["skills"] = df["skills"].fillna("")

vectorizer = TfidfVectorizer()
vectors = vectorizer.fit_transform(df["skills"])

class Input(BaseModel):
    skills: str

@app.post("/recommend")
def recommend(data: Input):
    user_vec = vectorizer.transform([data.skills])
    scores = cosine_similarity(user_vec, vectors).flatten()

    top = scores.argsort()[::-1][:5]
    result = df.iloc[top].to_dict(orient="records")

    return result