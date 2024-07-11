import React from 'react';
import image1 from '../assets/image2.png';
import image2 from '../assets/image1.png';
import image3 from '../assets/image3.png';
import image4 from '../assets/image4.png';
import image5 from '../assets/image5.png';
import './Sliderwrap.css';
import "swiper/swiper.min.css";
import SwiperCore, { Navigation } from "swiper";


const Sliderwrap1 = () => {
  SwiperCore.use([Navigation]);
    return (
        <section class="mainbanner">
      <div class="swiper main_slider">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="slide_con">
            <img src={image1} alt="img1"/>
              <div class="text_box">
                <div class="container_fix">
                  <h2>그녀가 죽었다</h2>
                  <p>개봉 2024.05.15</p>
                  <div class="yellow_box"><a href="">예매 바로가기</a></div>
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="slide_con">
            <img src={image2} alt="img2"/>
              <div class="text_box">
                <div class="container_fix">
                  <h2>챌린저스</h2>
                  <p>개봉 2024.04.24</p>
                  <div class="yellow_box"><a href="">예매 바로가기</a></div>
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="slide_con">
            <img src={image3} alt="img3"/>
              <div class="text_box">
                <div class="container_fix">
                  <h2>범죄도시4</h2>
                  <p>개봉 2024.04.24</p>
                  <div class="yellow_box"><a href="">예매 바로가기</a></div>
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="slide_con">
             <img src={image4} alt="img4"/>
              <div class="text_box">
                <div class="container_fix">
                  <h2>극장판 하이큐!! <br />쓰레기장의 결전</h2>
                  <p>개봉 2024.05.15</p>
                  <div class="yellow_box"><a href="">예매 바로가기</a></div>
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="slide_con">
            <img src={image5} alt="img5"/>
              <div class="text_box">
                <div class="container_fix">
                  <h2>악마와의 토크쇼</h2>
                  <p>개봉 2024.05.08</p>
                  <div class="yellow_box"><a href="">예매 바로가기</a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    );
};

export default Sliderwrap1;