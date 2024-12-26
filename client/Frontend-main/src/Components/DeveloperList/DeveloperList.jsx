import "./DeveloperList.css";

const DeveloperList = () => {
  const developers = [
    {
      image:
        "https://www.pngitem.com/pimgs/m/106-1068071_black-person-png-black-man-business-png-transparent.png",
      name: "Akshay Shiralsheth",
      role: "Frontend Developer",
      email: "Akshay@example.com",
      linkedin: "https://www.linkedin.com/in/alice",
    },
    {
      image:
        "https://www.pngitem.com/pimgs/m/106-1068071_black-person-png-black-man-business-png-transparent.png",
      name: "Aryan  Wagh",
      role: "Backend Developer",
      email: "Aryan@example.com",
      linkedin: "https://www.linkedin.com/in/bob",
    },
    {
      image:
        "https://www.pngitem.com/pimgs/m/106-1068071_black-person-png-black-man-business-png-transparent.png",
      name: "Rajan Vishwakarma",
      role: "Full Stack Developer",
      email: "Rajan@example.com",
      linkedin: "https://www.linkedin.com/in/charlie",
    },
    {
      image:
        "https://www.pngitem.com/pimgs/m/106-1068071_black-person-png-black-man-business-png-transparent.png",
      name: "Dhananjay Kakade",
      role: "Full Stack Developer",
      email: "Dhananjay@example.com",
      linkedin: "https://www.linkedin.com/in/charlie",
    },
    {
      image:
        "https://www.pngitem.com/pimgs/m/106-1068071_black-person-png-black-man-business-png-transparent.png",
      name: "Prasad Deshpande",
      role: "Full Stack Developer",
      email: "gurudesh2204@gmail.com",
      linkedin: "https://www.linkedin.com/in/prasad-deshpande-a59530267",
    },
  ];

  return (
    <div className="developer-list">
    <h1> Our Developer's</h1>
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
