import "./Coordinators.css";

const coordinators = [
  {
    name: "Dr. Sanjay Kharat",
    title: "Principal",
    image:
      "https://res.cloudinary.com/delnxjp38/image/upload/v1735146732/Principal_Sir_oib2zf.png",
    alt: "Principal_Sir",
  },
  {
    name: "Prof. Swati Kandharkar",
    title: "Vice Principal (Science)",
    image:
      "https://res.cloudinary.com/delnxjp38/image/upload/v1735146779/Vice_Principal_Ma_am_crxjkg.png",
    alt: "Vice_Principal_Mam",
  },
  {
    name: "Dr. Shubhangi Bhatambrekar",
    title: "HOD (Computer Science)",
    image:
      "https://res.cloudinary.com/delnxjp38/image/upload/v1735146724/HOD_Ma_am_l1l01k.png",
    alt: "HOD_Mam",
  }
];

const Coordinators = () => {
  return (
    <div className="container1 text-center">
      <h1 className="section-header" style={{ fontWeight: 600 }}>
        Under the guidance of
      </h1>
      <div className="card-deck">
        {coordinators.map((coordinator, index) => (
          <div className="card" key={index}>
            <img
              src={coordinator.image}
              className="card-img-top"
              alt={coordinator.alt}
            />
            <div className="card-body">
              <h4 className="card-title">{coordinator.name}</h4>
              <h5 className="card-text fw-bolder">{coordinator.title}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Coordinators;
