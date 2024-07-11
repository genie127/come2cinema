import React from 'react';
import './Main.css';
import image1 from '../assets/image2.png';
import image2 from '../assets/image1.png';
import image3 from '../assets/image3.png';
import image4 from '../assets/image4.png';
import image5 from '../assets/image5.png';
import image6 from '../assets/icon1.png';
import image7 from '../assets/개봉예정작슬라이드.png';
import image8 from '../assets/Maskgroup.png';
import image9 from '../assets/free-icon-question-5668097(1).png';
import image10 from '../assets/free-icon-customer-service-10041643(1).png';
import image11 from '../assets/free-icon-map-3969582(1).png';

const Main = () => { 
  return (
    <main class="main">
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

    <section id="reserve" class="reserve">
      <div class="text_box_title">
        <div class="container_fix">
          <div class="title">
            <p>빠른 예매</p>
          </div>
          <div class="reserve_box">
            <div class="icon">
              <nav class="menu_box">
              <img src={image6} alt="img6"/>
                <ul>
                  <li>
                    <a class="movie_name">영화명</a>
                    <ul class="movie_name_list">
                      <li><a href="#">그녀가 죽었다</a></li>
                      <li><a href="#">챌린저스</a></li>
                      <li><a href="#">범죄도시4</a></li>
                      <li><a href="#">극장판 하이큐!! 쓰레기장의 결전</a></li>
                      <li><a href="#">악마와의 토크쇼</a></li>
                    </ul>
                  </li>
                </ul>
               </nav>
             <input type="date" 
                    id="currentDate" 
                    name="reserve_date" 
                    value="2024-06-19" 
                    min="currentDate" 
                    max="2024-09-19" />
            <select required>
              <option value="select_time_box">시간 선택</option>
              <option value="0930">09:30</option>
              <option value="1100">11:00</option>
              <option value="1200">12:00</option>
              <option value="0900">13:10</option>
              <option value="0900">14:00</option>
              <option value="0900">15:30</option>
              <option value="0900">17:40</option>
              <option value="0900">19:00</option>
              <option value="0900">21:00</option>
              <option value="0900">23:00</option>
            </select>
            <div class="quick_reserve">
              <p>예매하기</p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
    <section id="board_wrap">
      <div class="container_fix">
        <div class="board_title">
          <div class="board_text">
            <p>공지사항/이벤트</p>
            <a href="#">+ 더보기</a>
          </div>
          <hr />
          <div class="board_content">
            <div class="board_con">
              <p>게시글 제목이 노출됩니다.</p> <span>2024-05-27</span>
            </div>
            <hr />
            <div class="board_con">
              <p>게시글 제목이 노출됩니다.</p> <span>2024-05-27</span>
            </div>
            <hr />
            <div class="board_con">
              <p>게시글 제목이 노출됩니다.</p> <span>2024-05-27</span>
            </div>
            <hr />
            <div class="board_con">
              <p>게시글 제목이 노출됩니다.</p> <span>2024-05-27</span>
            </div>
            <hr />
            <div class="board_con">
              <p>게시글 제목이 노출됩니다.</p> <span>2024-05-27</span>
            </div>
            <hr /> 
            <div class="board_con">
              <p>게시글 제목이 노출됩니다.</p> <span>2024-05-27</span>
            </div>
            <hr />
          </div>
        </div>
        <div class="todays_movie">
          <div class="board_text">
            <p>요즘 영화</p>
            <a href="#">+더보기</a>
          </div>
          <img src={image7} alt="img7"/>
        </div>
      </div>
    </section>
    <section id="todays_theater">
      <div class="container_fix">
        <div class="theater_img">
          <img src={image8} alt="img8"/>
        </div>
        <div class="theater_text">
          <p>요즘 극장</p>
        </div>
      </div>
    </section>
    <section id="info">
      <div class="container_fix">
        <div class="qna">
        <img src={image9} alt="img9"/>
          <p>자주묻는 질문</p>
        </div>
        <div class="service">
        <img src={image10} alt="img10"/>
          <p>1:1 문의 게시판</p>
        </div>
        <div class="map">
        <img src={image11} alt="img11"/>
          <p>찾아오시는 길</p>
        </div>
      </div>
    </section>
    </main>
  );
};

export default Main;