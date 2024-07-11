import sqlite3
import json

# Conect to database & set rows to dictionaries
def get_db_connection():
    conn = sqlite3.connect('database.db')
    conn.row_factory = sqlite3.Row
    return conn


# From database load the profiles & corresponding skills
def fetch_profiles():
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute('SELECT * FROM profiles')
    profiles = cursor.fetchall()
    conn.close()

    profiles_list = [dict(profile) for profile in profiles]
    for profile in profiles_list:
        profile['skills'] = json.loads(profile['skills'])

    return profiles_list


def compute_similarity(mentor, mentee):
    # Compute skill similarity using Jaccard similarity coefficient
    mentor_skills = set(mentor['skills'])
    mentee_skills = set(mentee['skills'])
    intersection = len(mentor_skills & mentee_skills)
    union = len(mentor_skills | mentee_skills)
    skill_similarity = intersection / union if union != 0 else 0

    # Compute interests similarity using Jaccard similarity coefficient
    mentor_interests = set(mentor['interests'])
    mentee_interests = set(mentee['interests'])
    intersection = len(mentor_interests & mentee_interests)
    union = len(mentor_interests | mentee_interests)
    interest_similarity = intersection / union if union != 0 else 0

    # Compute goals similarity using Jaccard similarity coefficient
    mentor_goals = set(mentor['goals'])
    mentee_goals = set(mentee['goals'])
    intersection = len(mentor_goals & mentee_goals)
    union = len(mentor_goals | mentee_goals)
    goal_similarity = intersection / union if union != 0 else 0

    # Compute other attribute similarity
    location_similarity = 1 if mentor['location'] == mentee['location'] else 0

    # Weighted sum of similarities
    total_similarity = (0.2 * skill_similarity + 
                        0.2 * interest_similarity + 
                        0.5 * location_similarity +
                        0.1 * goal_similarity)

    return total_similarity

def rank_mentors_for_mentees(profiles):
    mentors = [profile for profile in profiles if profile['user_type'] == 'mentor']
    mentees = [profile for profile in profiles if profile['user_type'] == 'mentee']

    ranked_matches = []
    for mentee in mentees:
        mentor_scores = []
        for mentor in mentors:
            score = compute_similarity(mentor, mentee)
            mentor_scores.append((mentor, score))
        mentor_scores.sort(key=lambda x: x[1], reverse=True)
        ranked_matches.append({'mentee': mentee, 'mentors': mentor_scores})

    return ranked_matches

if __name__ == '__main__':
    profiles = fetch_profiles()
    ranked_matches = rank_mentors_for_mentees(profiles)
    
    for match in ranked_matches:
        print(f"Recommended mentors for {match['mentee']['name']}: {match['mentors'][0][0]['name']}")
        print(f"Most similar mentors for {match['mentee']['name']}:")
        for mentor, score in match['mentors']:
                print(f"  Mentor: {mentor['name']} is a match with a score of {score:.2f}")