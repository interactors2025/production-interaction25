import "./Gallery.css";

const images = [
  { id: 1, src: "https://via.placeholder.com/300", title: "Image 1" },
  { id: 2, src: "https://via.placeholder.com/300", title: "Image 2" },
  { id: 3, src: "https://via.placeholder.com/300", title: "Image 3" },
  { id: 4, src: "https://via.placeholder.com/300", title: "Image 4" },
  { id: 5, src: "https://via.placeholder.com/300", title: "Image 5" },
  { id: 6, src: "https://via.placeholder.com/300", title: "Image 6" },
  { id: 7, src: "https://via.placeholder.com/300", title: "Image 7" },
  { id: 8, src: "https://via.placeholder.com/300", title: "Image 8" },
];

const Gallery = () => {
  return (
    <div className="gallery-container">
      <h2 className="gallery-title">Our Memories</h2>
      <div className="gallery-grid">
        {images.map((image) => (
          <div key={image.id} className="gallery-card">
            <img src={image.src} alt={image.title} className="gallery-image" />
            <div className="gallery-info">
              <p className="gallery-title">{image.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
