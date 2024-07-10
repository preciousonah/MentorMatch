import sqlite3

def clear_profiles_table():
    conn = sqlite3.connect('database.db')
    cursor = conn.cursor()

    # Delete all records from the profiles table
    cursor.execute('DELETE FROM profiles')

    conn.commit()
    conn.close()

if __name__ == '__main__':
    clear_profiles_table()
    print("Database cleared successfully.")