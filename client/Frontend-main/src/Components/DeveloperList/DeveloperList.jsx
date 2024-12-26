import "./DeveloperList.css";

const DeveloperList = () => {
  const developers = [
    {
      image:
        "https://res.cloudinary.com/delnxjp38/image/upload/v1735227902/developers/Akshay.jpg",
      name: "Akshay Shiralsheth",
      role: "Backend Developer",
      no: 7741853466,
      email: "shiralshethakshay@gmail.com",
      linkedin: "https://www.linkedin.com/in/akshay-shiralsheth-65b6391a6/",
    },
    {
      image:
        "https://www.pngitem.com/pimgs/m/106-1068071_black-person-png-black-man-business-png-transparent.png",
      name: "Aryan Wagh",
      role: "Frontend Developer",
      no: 9898989898,
      email: "aryanwagh1007@gmail.com",
      linkedin: "https://www.linkedin.com/in/aryan-wagh-481a7a259",
    },
    {
      image:
        "https://res.cloudinary.com/delnxjp38/image/upload/v1735227903/developers/t0eogywydmjkybiutjgo.jpg",
      name: "Rajan Vishwakarma",
      role: "Frontend Developer",
      no: 7058968426,
      email: "rajanv0607@gmail.com",
      linkedin: "https://www.linkedin.com/in/rajan-vishwakarma-209807259",
    },
    {
      image:
        "https://res.cloudinary.com/delnxjp38/image/upload/v1735227902/developers/x7yhulnlcgklflcrtuom.jpg",
      name: "Dhananjay Kakade",
      role: "Backend+Devops Developer",
      no: 9765073521,
      email: "kakadedhananjay59@gmail.com",
      linkedin: "https://www.linkedin.com/in/dhananjay-kakade-657087294/",
    },
    {
      image:
        "https://res.cloudinary.com/delnxjp38/image/upload/v1735229008/developers/beeqo9idufogqlitnma4.jpg",
      name: "Prasad Deshpande",
      role: "MERN Stack Developer",
      no: 8788098130,
      email: "gurudesh2204@gmail.com",
      linkedin: "https://www.linkedin.com/in/prasad-deshpande-a59530267",
    },
  ];

  return (
    <div className="developer-list">
      <h1> Team Interactors</h1>
      <div className="top-developers">
        {developers.slice(0, 3).map((dev, index) => (
          <div className="developer-card" key={index}>
            <img
              src={dev.image}
              alt={`${dev.name}'s profile`}
              className="developer-image"
            />
            <h3 className="developer-name">{dev.name}</h3>
            <p className="developer-role">{dev.role}</p>
            <p className="developer-email">{dev.email}</p>
            <p>{dev.no}</p>
            <a
              href={dev.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="developer-linkedin"
            >
              LinkedIn Profile
            </a>
          </div>
        ))}
      </div>
      <div className="bottom-developers">
        {developers.slice(3).map((dev, index) => (
          <div className="developer-card" key={index}>
            <img
              src={dev.image}
              alt={`${dev.name}'s profile`}
              className="developer-image"
            />
            <h3 className="developer-name">{dev.name}</h3>
            <p className="developer-role">{dev.role}</p>
            <p className="developer-email">{dev.email}</p>
            <p>{dev.no}</p>
            <a
              href={dev.linkedin}
              target="_blank"
              className="developer-linkedin"
            >
              LinkedIn Profile
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeveloperList;
