import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faTimes, faCheck } from "@fortawesome/free-solid-svg-icons";
import Header from "../components/header";
import Footer from "../components/footer";

const MenteeDashBoard = () => {
    // using dummy data to populate fields
    const [userData, setUserData] = useState();
    const [bookmarkedMentors, setBookmarkedMentors] = useState([]);
    const [matchedMentors, setMatchedMentors] = useState([]);
    const [upcomingMeetings, setUpcomingMeetings] = useState([]);
    const [recommendedMentors, setRecommendedMentors] = useState([]);

    useEffect(() => {
        setUserData({
            name: "John Doe",
            image_url: "https://i.pravatar.cc/150?img=7",
            university: "Brown University",
            tagline: "CS @ Brown '27",
            description: "Passionate about coding and learning new technologies."
        });

        setBookmarkedMentors([
            {id: 1, name: "Alison Johnson", role: "Senior Developer"},
            {id: 2, name: "Bob Smith", role: "ML Engineer"},
            {id: 3, name: "Clark Kent", role:"UX Designer"}
        ])

        setMatchedMentors([
            { id: 4, name: "Emma Wilson", location: "New York", university: "NYU", interests: ["AI", "Machine Learning"] },
            { id: 5, name: "David Brown", location: "San Francisco", university: "Stanford", interests: ["Web Development", "Cloud Computing"] },
            { id: 6, name: "Ada Lovelace", location: "Seattle", university: "Columbia", interests: ["Compilers", "ML Infrastructure"]},
          ]);

          setUpcomingMeetings([
            { id: 1, mentor: "Emma Wilson", date: "July 15, 2023", time: "14:00" },
            { id: 2, mentor: "David Brown", date: "July 18, 2023", time: "10:30" },
          ]);

          setRecommendedMentors([
            { id: 7, name: "Leonard Euler", location: "Miami", university: "University of Central Miami", interests: ["Data Science", "VR"]},
            { id: 8, name: "Albert Einstein", location: "Arlington", university: "Princeton", interests: ["Fullstack Development", "Mobile Development"]},
          ])
    }, []);

    return (
        <div className="dashboard">
            <Header />
                <div className="main-content">
                    <aside className="left-section">
                        <div className="user-info">
                            { userData ? (
                                <>
                                    <div className="img-container">
                                       <img className="display-pic" src={ userData.image_url } alt="profile-pic" height={70} width={70} /> 
                                    </div>
                                    <div className="tagline">
                                        <h2> { userData['name'] } </h2>
                                        <p> { userData['tagline'] } </p> 
                                    </div>
                                    <div className="desc">
                                        <p> {userData['description'] } </p>
                                    </div>
                                </>
                            ) : (
                                <p> Loading user data...</p>
                            )}
                        </div>
                        <div className="bookmarks">
                            <h3>Bookmarks</h3>
                            {bookmarkedMentors ? (
                                bookmarkedMentors.map(mentor => (
                                    <li className="bookmark-item" key={mentor.id}>{mentor.name} - {mentor.role} <button><FontAwesomeIcon className="remove-bookmark" icon={ faBookmark } size="x" /></button>
                                    </li>
                                ))) : (
                                    <>
                                        <p>You have no bookmarks yet</p>
                                        <p>Tap the bookmark icon where you see one to add it to your bookmarks</p>
                                    </>
                                )}
                        </div>
                    </aside>
                    <div className="right-section">
                        <section>
                            <h3>The Mentor Connect community is here to help!</h3>
                            <p>Recommended mentors: </p>
                            {matchedMentors ? (
                                matchedMentors.map(mentor => (
                                    <div key={ mentor.id } className="mentor-card">
                                        <h4>{mentor.name}</h4>
                                        <p>Location: {mentor.location}</p>  
                                        <p>University: {mentor.university}</p>
                                        <p>Interests: {mentor.interests.join(", ")}</p>
                                        <div className="buttons">
                                            <button className="decline"><FontAwesomeIcon icon={ faTimes } /></button>
                                            <button className="bookmark"><FontAwesomeIcon icon={ faBookmark } /></button>
                                            <button className="message"><FontAwesomeIcon icon={ faCheck } /></button>
                                        </div>
                                    </div>
                                ))) : (
                                    <p>Improve your recommendations by updating your profile.</p>
                                )}
                            <p>Most similar mentors: </p>
                            {recommendedMentors ? (
                                recommendedMentors.map(similar => (
                                    <div key={ similar.id } className="mentor-card">
                                        <h4>{similar.name}</h4>
                                        <p>Location: {similar.location}</p>  
                                        <p>University: {similar.university}</p>
                                        <p>Interests: {similar.interests.join(", ")}</p>
                                        <div className="buttons">
                                            <button className="decline"><FontAwesomeIcon icon={ faTimes } /></button>
                                            <button className="bookmark"><FontAwesomeIcon icon={ faBookmark } /></button>
                                            <button className="message"><FontAwesomeIcon icon={ faCheck } /></button>
                                        </div>
                                    </div>
                                ))) : (
                                    <p>Improve your recommendations by updating your profile.</p>
                                )}
                        </section>
                        <section className="meetings">
                            <h3> Upcoming Meetings </h3>
                            {upcomingMeetings ? (
                                upcomingMeetings.map(meeting => (
                                    <div key={meeting.id} className="meeting-card">
                                        <p><strong>{meeting.mentor}</strong></p>
                                        <p>{meeting.date} at {meeting.time}</p>
                                    </div>
                                ))) : (
                                <p>You have no upcoming meetings.</p>
                            )}
                        </section>
                    </div>
                </div>
            <Footer />
        </div>
    );
};

export default MenteeDashBoard;