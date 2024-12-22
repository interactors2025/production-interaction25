import { useState } from "react";
import "./Schedule.css";

const Schedule = () => {
  const [activeTab, setActiveTab] = useState("Day 1");

  const events = {
    "Day 1": [
      {
        name: "Gamer Strike",
        description:
          "In Gamer Strike, participants compete in games. Players face off in a virtual arena, showcasing their gaming skills and strategy.",
        image: "/images/gamer-strike.jpg",
      },
      {
        name: "Quick Reel",
        description:
          "A Quick Reel Competition is a creative challenge that invites individuals or teams to produce short video reels, within a limited timeframe.",
        image: "/images/quick-reel.jpg",
      },
      {
        name: "Brain Battle",
        description:
          "Brain battle is a Quiz competition, where experts and creative minds collaborate.",
        image: "/images/brain-battle.jpg",
      },
    ],
    "Day 2": [
      {
        name: "Play Game",
        description: "In Gamer Strike, participants compete in games.",
        image: "/images/play-game.jpg",
      },
      {
        name: "Patpat",
        description: "Patpat is an innovative idea competition.",
        image: "/images/patpat.jpg",
      },
      {
        name: "Sample",
        description: "Sample is a collaboration on solutions.",
        image: "/images/sample.jpg",
      },
    ],
  };

  const schedules = {
    "Day 1": [
      {
        time: "08:30 AM to 09:30 AM",
        activity: "Verification & Token Distribution",
      },
      { time: "09:30 AM to 10:30 AM", activity: "Inauguration" },
      { time: "11:30 AM to 01:30 PM", activity: "Event 1st Session (Morning)" },
      { time: "01:30 PM to 02:30 PM", activity: "Lunch Time" },
      {
        time: "02:30 PM to 04:30 PM",
        activity: "Event 2nd Session (Afternoon)",
      },
    ],
    "Day 2": [
      { time: "09:00 AM to 10:00 AM", activity: "Welcome & Introduction" },
      { time: "10:00 AM to 12:00 PM", activity: "Workshop 1" },
      { time: "12:00 PM to 01:00 PM", activity: "Networking & Lunch" },
      { time: "01:00 PM to 03:00 PM", activity: "Panel Discussion" },
      { time: "03:00 PM to 04:00 PM", activity: "Closing Remarks" },
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
      <div className="download-button">
        <a
          href="/path/to/your-file.pdf"
          download="YourFileName.pdf"
          className="button"
        >
          Download Rules
        </a>
      </div>
    </div>
  );
};

export default Schedule;
