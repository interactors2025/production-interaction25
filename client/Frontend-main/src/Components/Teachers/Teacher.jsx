import "./Teacher.css";
import Coordinators from "../Coordinators/Coordinators";
import CardsGrid from "../CardsGrid/CardsGrid";

const Teacher = () => {
  const events = [
    {
      name: "Brain Battle",
      teachers: [
        {
          name: "Dr. Sonal Kulkarni",
          image:
            "https://res.cloudinary.com/delnxjp38/image/upload/v1735146776/Sonal_Ma_am_krx1ly.png",
          contact: "",
        },
        {
          name: "Prof. Kumod Sapkal",
          image:
            "https://res.cloudinary.com/delnxjp38/image/upload/v1735146727/Kumod_sir_xunfwo.png",
          contact: "",
        },
        {
          name: "Coord. Karan Mishra",
          image:
            "https://res.cloudinary.com/delnxjp38/image/upload/v1735146704/Karan_Mishra_spzeic.png",
          contact: "+91 ",
        },
        {
          name: "Coord. Srushti Shelke",
          image:
            "https://res.cloudinary.com/delnxjp38/image/upload/v1735146717/Shrusti_Shelke_bccuu9.png",
          contact: "+91 ",
        },
      ],
    },
    {
      name: "Media Splash",
      teachers: [
        {
          name: "Dr. Vaishali Salunke",
          image: "",
          contact: "",
        },
        {
          name: "Prof. Rajashree Umrani",
          image: "",
          contact: "",
        },
        {
          name: "Coord. Mukta Bedekar",
          image:
            "https://res.cloudinary.com/delnxjp38/image/upload/v1735146710/Mukta_Bedekar_z2dnyl.png",
          contact: "+91 ",
        },
        {
          name: "Coord. Shravani Adhav",
          image:
            "https://res.cloudinary.com/delnxjp38/image/upload/v1735146715/Shravani_Adhav_whn9ck.png",
          contact: "+91",
        },
      ],
    },
    {
      name: "Wisdom War",
      teachers: [
        {
          name: "Dr. Satish Ambike",
          image:
            "https://res.cloudinary.com/delnxjp38/image/upload/v1735146772/Satish_Sir_vypted.png",
          contact: "",
        },
        {
          name: "Prof. Pradnya Patil",
          image: "",
          contact: "",
        },
        {
          name: "Coord. Arati Giri",
          image:
            "https://res.cloudinary.com/delnxjp38/image/upload/v1735146705/Arti_Giri_ldtiav.png",
          contact: "+91",
        },
        {
          name: "Coord. Aishwarya Jaybhay",
          image: "",
          contact: "+91 ",
        },
      ],
    },
    {
      name: "Hack In The Dark",
      teachers: [
        {
          name: "Prof. Ashwini Pawar",
          image:
            "https://res.cloudinary.com/delnxjp38/image/upload/v1735146720/Ashwini_Ma_am_tepkhh.png",
          contact: "",
        },
        {
          name: "Prof. Sonali Pathade",
          image: "",
          contact: "",
        },
        {
          name: "Coord. Sakshee Lolgay",
          image:
            "https://res.cloudinary.com/delnxjp38/image/upload/v1735146712/Sakshi_Lolgay_lx940y.png",
          contact: "+91",
        },
        {
          name: "Coord. Sakshi Salunke",
          image:
            "https://res.cloudinary.com/delnxjp38/image/upload/v1735146713/Sakshi_Salunkhe_dy2cad.png",
          contact: "+91 ",
        },
      ],
    },
    {
      name: "Spark The Idea",
      teachers: [
        {
          name: "Dr. Deepak Kumbhar",
          image: "",
          contact: "",
        },
        {
          name: "Dr. Shubhangi Bhatambrekar",
          image:
            "https://res.cloudinary.com/delnxjp38/image/upload/v1735146724/HOD_Ma_am_l1l01k.png",
          contact: "",
        },
        {
          name: "Coord. Abhishek Bhujbal",
          image:
            "https://res.cloudinary.com/delnxjp38/image/upload/v1735146701/Abhishek_Bhujbal_qixkbu.png",
          contact: "+91 ",
        },
        {
          name: "Coord. Shreyash Baber",
          image:
            "https://res.cloudinary.com/delnxjp38/image/upload/v1735146714/Sheraysh_Babar_bchjxn.png",
          contact: "+91 ",
        },
      ],
    },
    {
      name: "Gold Rush",
      teachers: [
        {
          name: "Prof. Rutuja Mokashi",
          image:
            "https://res.cloudinary.com/delnxjp38/image/upload/v1735146734/Rutuja_Ma_am_eccjvz.png",
          contact: "",
        },
        {
          name: "Prof. Shashikala Jadhav",
          image: "",
          contact: "",
        },
        {
          name: "Coord. Dhanashree Pawar",
          image:
            "https://res.cloudinary.com/delnxjp38/image/upload/v1735146702/Dhanashree_Pawar_brpvcu.png",
          contact: "+91 ",
        },
        {
          name: "Coord. Sakshi Jagtap",
          image:
            "https://res.cloudinary.com/delnxjp38/image/upload/v1735146707/Sakshi_Jagtap_vnrllg.png",
          contact: "+91",
        },
      ],
    },
    // Add more events as needed
  ];

  return (
    <>
      <Coordinators />
      <CardsGrid />
      <div className="teacher-container">
        <h1 className="header1">INTERACTION COORDINATORS 2025</h1>
        <div className="event-grid">
          {events.map((event, index) => (
            <div className="event-card" key={index}>
              <h2 className="event-title">{event.name}</h2>
              <div className="teachers">
                {event.teachers.map((teacher, i) => (
                  <div className="teacher" key={i}>
                    <img
                      src={teacher.image}
                      alt={teacher.name}
                      className="teacher-image"
                    />
                    <p className="teacher-name">{teacher.name}</p>
                    {teacher.contact && (
                      <p className="teacher-contact">{teacher.contact}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Teacher;
