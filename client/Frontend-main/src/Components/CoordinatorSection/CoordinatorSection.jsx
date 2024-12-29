import "./CoordinatorSection.css";

const coordinators = [
  {
    name: "Dr Vinay Kumar",
    posi : "HOD (Biotechnology)",
    title:"PM Usha Coordinator",
    image:
      "https://res.cloudinary.com/delnxjp38/image/upload/v1735446610/Vinay_kumar_ospyrk.png",
    alt: "",
  },
  {
    name: "Dr. Dipali Meher",
    posi : "CEO (Vice Principal)",
    title: "PM Usha Coordinator",
    image:
      "https://res.cloudinary.com/delnxjp38/image/upload/v1735146722/Dipali_Ma_am_kpcvuj.png",
    alt: "PM Usha Coordinator",
  },
  {
    name: "Prof. Meenal Jabde",
    title: "PM Usha Coordinator",
    image:
      "https://res.cloudinary.com/delnxjp38/image/upload/v1735146728/Meenal_Ma_am_pqluev.png",
    alt: "PM Usha Coordinator",
  },
  {
    name: "Dr. Satish Ambike",
    title: "PM Usha Coordinator",
    image:
     "https://res.cloudinary.com/delnxjp38/image/upload/v1735146772/Satish_Sir_vypted.png",
    alt: "PM Usha Coordinator",
  },
];

const Coordinators = () => {
  return (
    <div className="container1 text-center">
      <h1 className="section-header" style={{ fontWeight: 600 }}>
        PM USHA(RUSA) Coordinators
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
              <h5 className="card-text">{coordinator.posi}</h5>
              <h5 className="card-text fw-bolder">{coordinator.title}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Coordinators;
