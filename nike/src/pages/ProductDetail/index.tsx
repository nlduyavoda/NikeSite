import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import ProductRecommened from "../../components/ProductRecommened";
import "./index.css";
import { pokemonType } from "../../Types/pokemonType";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";

function ProductDetail() {
  const { state } = useLocation<pokemonType>();
  const [indexSlide, setIndexSlide] = useState(0);
  const history = useHistory();
  const handleChangeSlide = (swiper: any) => {
    setIndexSlide(swiper.activeIndex);
    console.log(swiper);
  };
  console.log(indexSlide);

  return (
    <div className="ProductDetail">
      <Swiper
        initialSlide={indexSlide}
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={(swiper) => handleChangeSlide(swiper)}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <img src={state.dreamworld} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={state.dreamworld} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={state.dreamworld} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={state.dreamworld} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={state.dreamworld} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={state.dreamworld} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={state.dreamworld} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={state.dreamworld} alt="" />
        </SwiperSlide>
      </Swiper>
      <Swiper
        initialSlide={indexSlide}
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={(swiper) => handleChangeSlide(swiper)}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <img src={state.artwork} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={state.artwork} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={state.artwork} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={state.artwork} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={state.artwork} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={state.artwork} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={state.artwork} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={state.artwork} alt="" />
        </SwiperSlide>
      </Swiper>
      <button
        onClick={() => {
          history.push("/");
        }}
      >
        back to the home{" "}
      </button>
    </div>
  );
}

export default ProductDetail;
