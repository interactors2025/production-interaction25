import './CardsGrid.css';

const CardsGrid = () => {
  const cards = [
    { id: 1, title: 'Prerana Sarode', description: 'This is the first card.' },
    { id: 2, title: 'Sayali Suryawanshi', description: 'This is the second card.' },
    { id: 3, title: 'Atharva Fude', description: 'This is the third card.' },
    { id: 4, title: 'Himani Thombre', description: 'This is the fourth card.' },
  ];

  return (
    <div className="container">
      <h2 className="title">Event Coordinators</h2>
      <div className="grid-container">
        {cards.map((card) => (
          <div key={card.id} className="card1">
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardsGrid;
