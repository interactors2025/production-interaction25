import "./Coordinators.css";
import Principal_Sir from '../../assets/img/Principal_Sir.webp';
import Vice_principal from '../../assets/img/Vice_principal.webp';
import HOD_Maam from '../../assets/img/HOD_Maam.webp';
import Dipali_Maam from '../../assets/img/Dipali_Maam.webp';

const coordinators = [
  {
    name: "Dr. Sanjay Kharat",
    title: "Principal",
    image: Principal_Sir,
    alt: "Principal_Sir",
  },
  {
    name: "Dr. Swati Kandharkar",
    title: "Vice Principal (Science)",
    image:  Vice_principal,
    alt: "Vice_Principal_Mam",
  },
  {
    name: "Dr. Shubhangi Bhatambrekar",
    title: "HOD (Computer Science)",
    image: HOD_Maam,
    alt: "HOD_Mam",
  },
  {
    name: "Dr. Dipali Meher",
    title: "CEO",
    image: Dipali_Maam,
    alt: "CEO",
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
