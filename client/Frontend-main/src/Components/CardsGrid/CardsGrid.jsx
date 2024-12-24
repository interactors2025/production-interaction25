import "./CardsGrid.css";
import img1 from "../../assets/img/prernamam.jpg";
import img2 from "../../assets/img/atharvagujarsir.jpg";
import img3 from "../../assets/img/atharva.jpg";
import img4 from "../../assets/img/himani2.jpg";

const CardsGrid = () => {
  const cards = [
    {
      id: 1,
      title: "Prerana Sarode",
      description: "This is the first card.",
      img: img1,
    },
    {
      id: 2,
      title: "Atharva Gujar",
      description: "This is the second card.",
      img: img2,
    },
    {
      id: 3,
      title: "Atharva Fude",
      description: "This is the third card.",
      img: img3,
    },
    {
      id: 4,
      title: "Himani Thombre",
      description: "This is the fourth card.",
      img: img4,
    },
  ];

  return (
    <div className="container">
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
