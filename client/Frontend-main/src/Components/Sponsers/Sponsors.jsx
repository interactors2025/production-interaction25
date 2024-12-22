import "./Sponsors.css";

const Sponsors = () => {
  const sponsors = [
    {
      name: "Company A",
      logo: "https://www.coditude.com/assets/images/logo.webp?imwidth=256",
    },
    {
      name: "Company B",
      logo: "https://www.coditude.com/assets/images/logo.webp?imwidth=256",
    },
    {
      name: "Company C",
      logo: "https://www.coditude.com/assets/images/logo.webp?imwidth=256",
    },
    {
      name: "Company D",
      logo: "https://www.coditude.com/assets/images/logo.webp?imwidth=256",
    },
    {
      name: "Company D",
      logo: "https://www.coditude.com/assets/images/logo.webp?imwidth=256",
    },
    {
      name: "Company D",
      logo: "https://www.coditude.com/assets/images/logo.webp?imwidth=256",
    },
    {
      name: "Company D",
      logo: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Bank_of_Maharashtra_logo.svg",
    },
    {
      name: "Company E",
      logo: "https://www.coditude.com/assets/images/logo.webp?imwidth=256",
    },
  ];

  return (
    <div className="sponsor-logos">
      <h1>Proudly Supported By</h1>
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
