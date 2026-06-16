import Slider from "./slider";
import { SwiperSlide } from "swiper/react";

export function CategoryCarrocel({ cars }) {
  return (
    <div className="category-slider">
      <Slider settings={{ slidesPerView: 1 }}>
        {cars.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="slide-content">
              <img src={slide.banner} alt={slide.title} />
              <div className="slide-overlay">
                <small>Estoque selecionado</small>
                <span>{slide.title}</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Slider>
    </div>
  );
}
