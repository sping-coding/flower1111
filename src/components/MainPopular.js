import React, { useState, useCallback } from "react";
import { render } from "react-dom";
import ImageViewer from "react-simple-image-viewer";
import popular1 from "../images/장미.jpg";
import popular2 from "../images/연분홍.jpg";
import popular3 from "../images/진핑크.jpg";
import popular4 from "../images/토마토장미.jpg";
import popular5 from "../images/11.png";
import popular6 from "../images/22.png";
import popular7 from "../images/33.png";

function MainPopular() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const images = [
    `${popular1}`,
    // `${popular2}`,
    `${popular3}`,
    `${popular4}`,
    `${popular6}`,
  ];

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <div className="mainpopularTs">
      <div className="mainpopularT">
        <h2>이달의 꽃</h2>
        <p>Rose Day</p>
      </div>
      <div className="mainpopulari">
        {images.map((src, index) => (
          <img
            src={src}
            onClick={() => openImageViewer(index)}
            width="300"
            key={index}
            style={{ margin: "0px" }}
            alt=""
          />
        ))}

        {isViewerOpen && (
          <ImageViewer
            src={images}
            currentIndex={currentImage}
            disableScroll={false}
            closeOnClickOutside={true}
            onClose={closeImageViewer}
          />
        )}
      </div>
      <div className="mainpopulariTTT">
        <p>햇살 미니장미</p>
        <p>스윗핑크 미니장미</p>
        <p>아이라이너 미니장미</p>
        <p>5번가 장미</p>
      </div>
    </div>
  );
}

export default MainPopular;
