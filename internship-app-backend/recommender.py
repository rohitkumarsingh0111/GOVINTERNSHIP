# recommender.py

import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import sys
import json

def get_recommendations(user_skills):
    # 1. Data load kar
    try:
        df = pd.read_csv('jobs_data.csv')
    except FileNotFoundError:
        return {"error": "jobs_data.csv file not found."}

    # 2. Skills ko ek string mein jod de
    df['combined_skills'] = df['skills'].apply(lambda x: ' '.join(x.lower().split(',')))

    # 3. TF-IDF vectorizer use kar
    vectorizer = TfidfVectorizer()
    job_skill_vectors = vectorizer.fit_transform(df['combined_skills'])
    
    # User skills ko bhi vector mein convert kar
    user_skill_vector = vectorizer.transform([user_skills.lower()])

    # 4. Cosine similarity score nikal
    similarity_scores = cosine_similarity(user_skill_vector, job_skill_vectors).flatten()

    # 5. Scores ko sort kar ke jobs nikal
    # Sabse jyada score wale jobs ka index nikal
    top_indices = similarity_scores.argsort()[::-1]
    
    # Un indices ke hisaab se jobs ke details nikal
    recommended_jobs = df.iloc[top_indices].copy() # <--- Yahaan .copy() lagana zaroori hai

    # Ek naya 'match_score' column add kar (FIXED PART)
    recommended_jobs.loc[:, 'match_score'] = similarity_scores[top_indices]

    # JSON format mein return kar
    
    
    return recommended_jobs[['id', 'title', 'company', 'location', 'skills', 'match_score']].to_dict('records')

if __name__ == "__main__":
    # Command line se user skills le
    user_skills_str = sys.argv[1]
    
    # Recommendations nikal
    recommendations = get_recommendations(user_skills_str)
    
    # JSON output print kar
    print(json.dumps(recommendations))