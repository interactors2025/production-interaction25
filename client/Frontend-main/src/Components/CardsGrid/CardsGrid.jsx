import "./CardsGrid.css";

const CardsGrid = () => {
  const cards = [
    {
      id: 1,
      title: "Prof. Prerana Sarode",
      description: "Teacher Interaction Coordinator",
      img: "https://res.cloudinary.com/delnxjp38/image/upload/v1735146730/Prerana_Sarode_fuz2wq.png",
    },
    {
      id: 2,
      title: "Prof. Atharva Gujar",
      description: "Teacher Interaction Coordinator",
      img: "https://res.cloudinary.com/delnxjp38/image/upload/v1735146723/Atharva_Gujar_yzoh8v.png",
    },
    {
      id: 3,
      title: "Atharva Funde",
      description: "Student Coordinator",
      img: "https://res.cloudinary.com/delnxjp38/image/upload/v1735146706/Atharva_Funde_vz97y8.png",
    },
    {
      id: 4,
      title: "Himani Thombre",
      description: "Student Coordinator",
      img: "https://res.cloudinary.com/delnxjp38/image/upload/v1735146708/Himani_Thombre_m6i0uj.png",
    },
  ];

  return (
    <div className="container1">
      <h2 className="title">Event Coordinators</h2>
      <div className="grid-container">
        {cards.map((card) => (
          <div key={card.id} className="card1">
            <img src={card.img} alt="" />
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardsGrid;
