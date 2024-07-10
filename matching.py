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
    # Compute skill similarity using Jaccard similarity
    mentor_skills = set(mentor['skills'])
    mentee_skills = set(mentee['skills'])
    intersection = len(mentor_skills & mentee_skills)
    union = len(mentor_skills | mentee_skills)
    skill_similarity = intersection / union if union != 0 else 0

    # Compute other attribute similarity (for simplicity, we'll use binary values)
    interest_similarity = 1 if mentor['interests'] == mentee['interests'] else 0
    goal_similarity = 1 if mentor['goals'] == mentee['goals'] else 0

    # Weighted sum of similarities
    total_similarity = (0.4 * skill_similarity + 
                        0.4 * interest_similarity + 
                        0.2 * goal_similarity)

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
    user_input = int(input("View ranked matches for each mentee (1) or View suggested matches (2)\n"))
    while user_input != 1 and user_input != 2:
        print("Please enter either '1' or '2'")
        user_input = int(input("View ranked matches for each mentee (1) or View suggested matches (2)\n"))
    if user_input == 1:
        for match in ranked_matches:
            print(f"Recommended mentors for {match['mentee']['name']}:")
            for mentor, score in match['mentors']:
                print(f"  Mentor: {mentor['name']} is a match with a score of {score:.2f}")
    if user_input == 2:
        for match in ranked_matches:
            print(f"Recommended mentor for {match['mentee']['name']}:")
            mentor = match['mentors'][0][0]['name']
            print(f"  Mentor: {mentor}")