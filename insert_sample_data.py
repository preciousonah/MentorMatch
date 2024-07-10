import sqlite3
import json

def insert_sample_data():
    conn = sqlite3.connect('database.db')
    cursor = conn.cursor()

    # Expanded sample data
    profiles = [
        # Mentors
        {
            'name': 'Alice',
            'user_type': 'mentor',
            'skills': json.dumps(['Python', 'Machine Learning', 'Data Science']),
            'interests': 'Artificial Intelligence',
            'goals': 'Help mentees learn AI'
        },
        {
            'name': 'Bob',
            'user_type': 'mentor',
            'skills': json.dumps(['JavaScript', 'React', 'Node.js']),
            'interests': 'Web Development',
            'goals': 'Guide mentees in web development'
        },
        {
            'name': 'Eve',
            'user_type': 'mentor',
            'skills': json.dumps(['Java', 'Spring', 'Microservices']),
            'interests': 'Backend Development',
            'goals': 'Mentor students in enterprise application development'
        },
        {
            'name': 'Frank',
            'user_type': 'mentor',
            'skills': json.dumps(['C++', 'Embedded Systems', 'Robotics']),
            'interests': 'Hardware and Robotics',
            'goals': 'Inspire interest in robotics and hardware programming'
        },
        {
            'name': 'Grace',
            'user_type': 'mentor',
            'skills': json.dumps(['HTML', 'CSS', 'UI/UX Design']),
            'interests': 'Design',
            'goals': 'Help students build intuitive user interfaces'
        },
        {
            'name': 'Hank',
            'user_type': 'mentor',
            'skills': json.dumps(['R', 'Statistics', 'Data Analysis']),
            'interests': 'Data Science',
            'goals': 'Guide students in statistical analysis and data interpretation'
        },

        # Mentees
        {
            'name': 'Charlie',
            'user_type': 'mentee',
            'skills': json.dumps(['Python', 'Data Analysis']),
            'interests': 'Artificial Intelligence',
            'goals': 'Learn more about AI'
        },
        {
            'name': 'Diana',
            'user_type': 'mentee',
            'skills': json.dumps(['JavaScript', 'CSS']),
            'interests': 'Web Development',
            'goals': 'Become a full-stack developer'
        },
        {
            'name': 'Ivy',
            'user_type': 'mentee',
            'skills': json.dumps(['Java', 'Data Structures']),
            'interests': 'Backend Development',
            'goals': 'Master backend technologies'
        },
        {
            'name': 'Jack',
            'user_type': 'mentee',
            'skills': json.dumps(['C++', 'Algorithms']),
            'interests': 'Competitive Programming',
            'goals': 'Improve problem-solving skills'
        },
        {
            'name': 'Kate',
            'user_type': 'mentee',
            'skills': json.dumps(['HTML', 'CSS', 'JavaScript']),
            'interests': 'Frontend Development',
            'goals': 'Enhance frontend development skills'
        },
        {
            'name': 'Leo',
            'user_type': 'mentee',
            'skills': json.dumps(['R', 'Excel']),
            'interests': 'Data Analysis',
            'goals': 'Gain expertise in data visualization and analysis'
        }
    ]

    # Insert data into the profiles table
    for profile in profiles:
        cursor.execute('''
            INSERT INTO profiles (name, user_type, skills, interests, goals)
            VALUES (?, ?, ?, ?, ?)
        ''', (profile['name'], profile['user_type'], profile['skills'], profile['interests'], profile['goals']))

    conn.commit()
    conn.close()

if __name__ == '__main__':
    insert_sample_data()
    print("Sample data inserted successfully.")