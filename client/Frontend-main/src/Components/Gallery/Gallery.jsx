import "./Gallery.css";

const images = [
  {
    id: 1,
    src: "https://res.cloudinary.com/delnxjp38/image/upload/v1735147779/trophy_dbgen5.jpg",
    title: "Image 1",
  },
  {
    id: 2,
    src: "https://res.cloudinary.com/delnxjp38/image/upload/v1735147778/IMG_20240208_080134_590_s7ctlm.webp",
    title: "Image 2",
  },
  {
    id: 3,
    src: "https://res.cloudinary.com/delnxjp38/image/upload/v1735147785/IMG_20240207_123912_e6jrxs.jpg",
    title: "Image 3",
  },
  {
    id: 4,
    src: "https://res.cloudinary.com/delnxjp38/image/upload/v1735147784/IMG_20240207_125424_hgp4bz.jpg",
    title: "Image 4",
  },
  {
    id: 5,
    src: "https://res.cloudinary.com/delnxjp38/image/upload/v1735147779/IMG-20240209-WA0095_ygfgle.jpg",
    title: "Image 5",
  },
  {
    id: 6,
    src: "https://res.cloudinary.com/delnxjp38/image/upload/v1735147782/IMG_20240206_121104_cjaepw.jpg",
    title: "Image 6",
  },
  {
    id: 7,
    src: "https://res.cloudinary.com/delnxjp38/image/upload/v1735147777/IMG-20240214-WA0005_jwvsle.jpg",
    title: "Image 7",
  },
  {
    id: 8,
    src: "https://res.cloudinary.com/delnxjp38/image/upload/v1735147786/IMG_20240207_181728_onaa9v.jpg",
    title: "Image 8",
  },
];

const Gallery = () => {
  return (
    <div className="gallery-container">
      <h2 className="gallery-title">Our Memories</h2>
      <div className="gallery-grid">
        {images.map((image) => (
          <div key={image.id} className="gallery-card">
            <img src={image.src} alt={image.title} className="gallery-image" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
