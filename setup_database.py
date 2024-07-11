import sqlite3
import json

def create_db_and_table():
    conn = sqlite3.connect('database.db')
    cursor = conn.cursor()

    # Create the profiles table
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS profiles (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            user_type TEXT NOT NULL,
            location TEXT NOT NULL,
            university TEXT NOT NULL,
            skills TEXT NOT NULL,
            interests TEXT NOT NULL,
            goals TEXT NOT NULL
        )
    ''')
    conn.commit()
    conn.close()

if __name__ == '__main__':
    create_db_and_table()
    print("Database and table created successfully.")