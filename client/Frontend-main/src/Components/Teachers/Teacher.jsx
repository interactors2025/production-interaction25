import "./Teacher.css";
import Coordinators from "../Coordinators/Coordinators";
import CardsGrid from "../CardsGrid/CardsGrid";
import CoordinatorSection from "../CoordinatorSection/CoordinatorSection";

const Teacher = () => {
  const events = [
    {
      name: "Brain Battle",
      teachers: [
        {
          name: "Prof. Sonal Kulkarni",
          image:
            "https://res.cloudinary.com/delnxjp38/image/upload/v1735146776/Sonal_Ma_am_krx1ly.png",
        },
        {
          name: "Prof. Kumod Sapkal",
          image:
            "https://res.cloudinary.com/delnxjp38/image/upload/v1735146727/Kumod_sir_xunfwo.png",
        },
        {
          name: "Std. Karan Mishra",
          image:
            "https://res.cloudinary.com/delnxjp38/image/upload/v1735146704/Karan_Mishra_spzeic.png",
        },
        {
          name: "Std. Srushti Shelke",
          image:
            "https://res.cloudinary.com/delnxjp38/image/upload/v1735146717/Shrusti_Shelke_bccuu9.png",
        },
      ],
    },
    {
      name: "Media Splash",
      teachers: [
        {
          name: "Dr. Vaishali Salunke",
          image:
            "https://res.cloudinary.com/delnxjp38/image/upload/v1735402923/Vaishali_Mam_wttp9m.png",
        },
        {
          name: "Prof. Rajashree Umrani",
          image:
            "https://res.cloudinary.com/delnxjp38/image/upload/v1735402848/Rajashree_Umrani_l7py89.png",
        },
        {
          name: "Std. Mukta Bedekar",
          image:
            "https://res.cloudinary.com/delnxjp38/image/upload/v1735146710/Mukta_Bedekar_z2dnyl.png",
        },
        {
          name: "Std. Shravani Adhav",
          image:
            "https://res.cloudinary.com/delnxjp38/image/upload/v1735146715/Shravani_Adhav_whn9ck.png",
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
        },
        {
          name: "Prof. Pradnya Patil",
          image:
            "https://res.cloudinary.com/delnxjp38/image/upload/v1735402565/Pradnya_Patil_apsgnh.png",
        },
        {
          name: "Std. Arati Giri",
          image:
            "https://res.cloudinary.com/delnxjp38/image/upload/v1735146705/Arti_Giri_ldtiav.png",
        },
        {
          name: "Std. Aishwarya Jaybhay",
          image:
            "https://res.cloudinary.com/delnxjp38/image/upload/v1735386266/Aishwarya_i6cai8.png",
        },
      ],
    },
    {
      name: "Gamer's Strike",
      teachers: [
        {
          name: "Prof. Atharav Gujar",
          image:
            "https://res.cloudinary.com/delnxjp38/image/upload/v1735146723/Atharva_Gujar_yzoh8v.png",
        },
        {
          name: "Prof. Shubham Bende",
          image:
            "https://res.cloudinary.com/delnxjp38/image/upload/v1735451883/Shubham_hzfee0.jpg",
        },
        {
          name: "Std. Pushkar Dabhade",
          image:
            "https://res.cloudinary.com/delnxjp38/image/upload/v1735448296/Pushkar_Dabhade_l7dai4.png",
        },
        {
          name: "Std. Prasad Deshpande",
          image:
            "https://res.cloudinary.com/delnxjp38/image/upload/v1735449684/Prasad_deshpande_xls34a.jpg",
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
        },
        {
          name: "Prof. Sonali Pathade",
          image:
            "https://res.cloudinary.com/delnxjp38/image/upload/v1735146776/Sonali_Ma_am_ftoqph.png",
        },
        {
          name: "Std. Sakshee Lolgay",
          image:
            "https://res.cloudinary.com/delnxjp38/image/upload/v1735146712/Sakshi_Lolgay_lx940y.png",
        },
        {
          name: "Std. Sakshi Salunke",
          image:
            "https://res.cloudinary.com/delnxjp38/image/upload/v1735146713/Sakshi_Salunkhe_dy2cad.png",
        },
      ],
    },
    {
      name: "Spark The Idea",
      teachers: [
        {
          name: "Dr. Deepak Kumbhar",
          image:
            "https://res.cloudinary.com/delnxjp38/image/upload/v1735347999/Kumbhar_sir_qyum8y.png",
        },
        {
          name: "Dr. Shubhangi Bhatambrekar",
          image:
            "https://res.cloudinary.com/delnxjp38/image/upload/v1735146724/HOD_Ma_am_l1l01k.png",
        },
        {
          name: "Std. Abhishek Bhujbal",
          image:
            "https://res.cloudinary.com/delnxjp38/image/upload/v1735146701/Abhishek_Bhujbal_qixkbu.png",
        },
        {
          name: "Std. Shreyash Babar",
          image:
            "https://res.cloudinary.com/delnxjp38/image/upload/v1735146714/Sheraysh_Babar_bchjxn.png",
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
        },
        {
          name: "Prof. Shashikala Jadhav",
          image:
            "https://res.cloudinary.com/delnxjp38/image/upload/v1735348030/Shashikala_Jadhav_rv8wz9.png",
        },
        {
          name: "Std. Dhanashree Pawar",
          image:
            "https://res.cloudinary.com/delnxjp38/image/upload/v1735146702/Dhanashree_Pawar_brpvcu.png",
        },
        {
          name: "Std. Sakshi Jagtap",
          image:
            "https://res.cloudinary.com/delnxjp38/image/upload/v1735146707/Sakshi_Jagtap_vnrllg.png",
        },
      ],
    },
  ];

  return (
    <>
      <Coordinators />
      <CoordinatorSection />
      <CardsGrid />
      <div className="teacher-container">
        <h1 className="header1">INTERACTION COORDINATORS 2025</h1>
        <div className="event-grid">
          {events.map((event, index) => (
            <div className="event-card" key={index}>
              <h2 className="event-title">{event.name}</h2>
              <h5>(Co-ordinator)</h5>
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
