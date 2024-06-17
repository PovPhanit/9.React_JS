import React, { useState, useEffect } from 'react';


const App = () => {
  const [curSlide, setCurSlide] = useState(0);

  useEffect(() => {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dots__dot');

    const goToSlide = (slide) => {
      slides.forEach((s, i) => {
        s.style.transform = `translateX(${100 * (i - slide)}%)`;
      });
    };

    const activateDot = (slide) => {
      dots.forEach(dot => dot.classList.remove('dots__dot--active'));
      dots[slide].classList.add('dots__dot--active');
    };

    const nextSlide = () => {
      if (curSlide === slides.length - 1) {
        setCurSlide(0);
      } else {
        setCurSlide(curSlide + 1);
      }
    };

    const prevSlide = () => {
      if (curSlide === 0) {
        setCurSlide(slides.length - 1);
      } else {
        setCurSlide(curSlide - 1);
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
      }
    };

    goToSlide(curSlide);
    activateDot(curSlide);

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [curSlide]);

  const testimonialData = [
    {
      header: 'Best financial decision ever!',
      text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium...',
      name: 'Aarav Lynn',
      location: 'San Francisco, USA',
      photo: 'img/user-1.jpg'
    },
    {
      header: 'The last step to becoming a complete minimalist',
      text: 'Quisquam itaque deserunt ullam, quia ea repellendus provident...',
      name: 'Miyah Miles',
      location: 'London, UK',
      photo: 'img/user-2.jpg'
    },
    {
      header: 'Finally free from old-school banks',
      text: 'Debitis, nihil sit minus suscipit magni aperiam vel tenetur incidunt...',
      name: 'Francisco Gomes',
      location: 'Lisbon, Portugal',
      photo: 'img/user-3.jpg'
    }
  ];

  return (
    <section className="section" id="section--3">
      <div className="slider">
        {testimonialData.map((testimonial, index) => (
          <div key={index} className={`slide ${curSlide === index ? 'active' : ''}`}>
            <div className="testimonial">
              <h5 className="testimonial__header">{testimonial.header}</h5>
              <blockquote className="testimonial__text">{testimonial.text}</blockquote>
              <address className="testimonial__author">
                <img src={testimonial.photo} alt="" className="testimonial__photo" />
                <h6 className="testimonial__name">{testimonial.name}</h6>
                <p className="testimonial__location">{testimonial.location}</p>
              </address>
            </div>
          </div>
        ))}
        <button className="slider__btn slider__btn--left" onClick={() => setCurSlide((curSlide === 0) ? testimonialData.length - 1 : curSlide - 1)}>&larr;</button>
        <button className="slider__btn slider__btn--right" onClick={() => setCurSlide((curSlide === testimonialData.length - 1) ? 0 : curSlide + 1)}>&rarr;</button>
        <div className="dots">
          {testimonialData.map((_, index) => (
            <button key={index} className={`dots__dot ${curSlide === index ? 'dots__dot--active' : ''}`} onClick={() => setCurSlide(index)}></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default App;
