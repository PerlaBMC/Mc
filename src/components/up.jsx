import React from 'react';

const ScrollToTopButton = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Agrega un desplazamiento suave
    });
  };

  return (
    <button className='UP' onClick={handleScrollToTop}>
<i className="bi bi-arrow-up-circle-fill"></i>
    </button>
  );
};

export default ScrollToTopButton;