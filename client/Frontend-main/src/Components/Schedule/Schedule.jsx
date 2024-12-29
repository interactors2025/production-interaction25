import { useState } from "react";
import "./Schedule.css";

const Schedule = () => {
  const [activeTab, setActiveTab] = useState("Day 1");
  const handleDownload =() => {
    const link = document.createElement('a');
    link.href = 'src/assets/ICS_Interaction_Rules_2025.pdf'; 
    link.download = 'ICS_Interaction_Rules_2025'; 
    link.click(); 
  };

  const events = {
    "Day 1": [
      {
        name: "Brain Battle",
        description:
          "Brain battle is a Quiz competition, where experts and creative minds collaborate.",
        image:
          "https://res.cloudinary.com/delnxjp38/image/upload/v1735146783/Brain_Battle_pugzlj.png",
      },
      {
        name: "Media Splash",
        description:
          "A Quick Reel Competition is a creative challenge that invites individuals or teams to produce short video reels, within a limited timeframe.",
        image:
          "https://res.cloudinary.com/delnxjp38/image/upload/v1735146791/Quick_Reel_rtwcqv.png",
      },
      {
        name: "Wisdom War",
        description: "Under Wisdom, industry experts hire and guide students, offering them real-world insights, mentorship, and opportunities to excel in their careers.",

        image:
          "https://res.cloudinary.com/delnxjp38/image/upload/v1735146792/Wisdom_War_eonvmq.png",
      },
      {
        name: "Gamer Strike",
        description: "Students form teams and compete in multiplayer games, showcasing their strategic thinking, teamwork, and gaming skills. It promotes collaboration, quick decision-making, and a fun, competitive spirit.",

        image:
          "https://res.cloudinary.com/delnxjp38/image/upload/v1735146786/Gamer_Strike_jr1llg.png",
      },
    ],
    "Day 2": [
      {
        name: "Hack In The Dark",
        description: "In this activity, students demonstrate their coding skills by solving challenges without direct access to references or tools, relying solely on their knowledge and logic. It tests their ability to think critically and code efficiently under pressure.",
        image:
          "https://res.cloudinary.com/delnxjp38/image/upload/v1735146788/Hack_in_the_Dark_nei9ox.png",
      },
      {
        name: "Spark The Idea",
        description: "In this activity, participants ignite their creativity by presenting innovative ideas and sharing insights about them. It encourages brainstorming, effective communication, and the ability to articulate concepts clearly to inspire others.",
        image: "https://res.cloudinary.com/delnxjp38/image/upload/v1735399994/Spark_the_idea_cvo2vg.png",
      },
      {
        name: "Gold Rush",
        description: "In this activity, participants solve a series of clues and challenges to progress through stages, ultimately finding the hidden treasure. It fosters teamwork, problem-solving, and critical thinking in an engaging and adventurous way.",
        image:
          "https://res.cloudinary.com/delnxjp38/image/upload/v1735146787/Gold_Rust_Quest_lrrppl.png",
      },
    ],
  };

  const schedules = {
    "Day 1": [
      { time: "08:30 AM to 10:00 AM", activity: "Verification & Breakfast" },
      { time: "10:00 AM to 01:00 AM", activity: "Inauguration & Planary Session" },
      { time: "01:00 AM to 02:00 PM", activity: "Lunch Break" },
      { time: "02:00 PM to 05:00 PM", activity: "Day 1 Events" },
    ],
    "Day 2": [
      { time: "08:30 AM to 09:00 AM", activity: "Verification & Breakfast" },
      { time: "09:00 AM to 11:00 AM", activity: "Hack In The Dark/Spark The Idea" },
      { time: "11:00 AM to 01:00 PM", activity: "Planary Session" },
      { time: "01:00 PM to 02:00 PM", activity: "Lunch Break" },
      { time: "02:00 PM to 04:00 PM", activity: "Gold Rush" },
      { time: "04:00 PM ", activity: "Valedictory" },
    ],
  };

  return (
    <div className="event-schedule">
      <h1>EVENT SCHEDULE</h1>
      <div className="tabs">
        {Object.keys(events).map((day) => (
          <button
            key={day}
            className={activeTab === day ? "active" : ""}
            onClick={() => setActiveTab(day)}
          >
            {day}
          </button>
        ))}
      </div>
      <div className="event-details">
        <h2>Events for {activeTab}</h2>
        {events[activeTab].map((event, index) => (
          <div key={index} className="event">
            <img src={event.image} alt={event.name} className="event-image" />
            <div className="event-info">
              <h3>{event.name}</h3>
              <p>{event.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="schedule">
        <h2>Schedule for {activeTab}</h2>
        {schedules[activeTab].map((item, index) => (
          <div key={index} className="schedule-item">
            <span className="time">{item.time}</span>
            <span className="activity">{item.activity}</span>
          </div>
        ))}
      </div>
     <div>
      <li>
        <button className="rule-button" onClick={handleDownload}>Download Rules</button>
      </li>
      </div>
    </div>
  );
};

export default Schedule;
