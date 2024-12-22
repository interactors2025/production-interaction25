
import "./CoordinatorSection.css";
import img1 from "../../assets/img/img1.jpg";
import img2 from "../../assets/img/img2.jpg";
import img3 from "../../assets/img/img3.jpg";
import img4 from "../../assets/img/img4.jpg";
import img5 from "../../assets/img/img5.jpg";
import img6 from "../../assets/img/img6.jpg";

// Coordinator Data
const coordinators = [
  { id: 1, name: "Priyanka", description: "Event Manager", image: img1 },
  { id: 2, name: "Karan Sheth", description: "Refreshment Head", image: img2 },
  { id: 3, name: "Michael Brown", description: "Marketing Lead", image: img3 },
  { id: 4, name: "Shree Bhai", description: "Stage Coordinator", image: img4 },
  { id: 5, name: "Balwadkar Bhau", description: "Publicity Head", image: img5 },
  { id: 6, name: "Aporva Sheth", description: "Technical Lead", image: img6 },
];

const CoordinatorSection = () => {
  return (
    <div className="coordinator-container">
      <h2 className="coordinator-title">Meet Our Coordinators</h2>
      <div className="coordinator-grid">
        {coordinators.map((coordinator) => (
          <div key={coordinator.id} className="coordinator-card">
            <img
              src={coordinator.image}
              alt={coordinator.name}
              className="coordinator-image"
            />
            <div className="coordinator-info">
              <h3 className="coordinator-name">{coordinator.name}</h3>
              <p className="coordinator-description">
                {coordinator.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoordinatorSection;
