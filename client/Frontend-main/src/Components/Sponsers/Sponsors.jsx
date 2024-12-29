import "./Sponsors.css";

const Sponsors = () => {
  const sponsors = [
    {
      name: "Company A",
      logo: "https://res.cloudinary.com/delnxjp38/image/upload/v1735399897/Cosmosbank_orzh84.jpg",
    },
    {
      name: "Company B",
      logo: "https://res.cloudinary.com/delnxjp38/image/upload/v1735399926/Bank_of_maha_hpwkux.png",
    },
    {
      name: "Company C",
      logo: "https://res.cloudinary.com/delnxjp38/image/upload/v1735399903/Hdfc_bank_xo8syk.jpg",
    },
    {
      name: "Company D",
      logo: "https://res.cloudinary.com/delnxjp38/image/upload/v1735399906/idbi-bank_gh781i.webp",
    },
    {
      name: "Company E",
      logo: "https://res.cloudinary.com/delnxjp38/image/upload/v1735363937/coditude_krffx7.jpg",
    },
    {
      name: "Company F",
      logo: "https://res.cloudinary.com/delnxjp38/image/upload/v1735363952/Rian_a83vwc.webp",
    },
    {
      name: "Company G",
      logo: "https://res.cloudinary.com/delnxjp38/image/upload/v1735364254/jetking_q5cmai.png",
    },
    {
      name: "Company H",
      logo: "https://res.cloudinary.com/delnxjp38/image/upload/v1735364481/top_it_efzb9p.jpg",
    },
    {
      name: "Company I",
      logo: "https://res.cloudinary.com/delnxjp38/image/upload/v1735399977/Edwise_od3s42.avif",
    },
  ];

  return (
    <div className="sponsor-logos">
      <h1>Supported By</h1>
      <div className="logo-container">
        {sponsors.map((sponsor, index) => (
          <div key={index} className="logo-item">
            <img src={sponsor.logo} alt={`Sponsor Logo ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sponsors;
