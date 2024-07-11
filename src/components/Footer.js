import React from 'react';
import './Footer.css';
import image from '../assets/image9.png';
import image12 from '../assets/Group46.png';
import image13 from '../assets/Vector.png';
import image14 from '../assets/Vector(1).png';

const Footer= () => {
  return (
    <footer>
        <div class="container_fix">
        <div class="footer">
          <div class="footer_c2c">
          <img src={image} alt="C2C"/>
          </div>
          <div class="team_name">
            <p>Come 2 cinema<br />
              주소: 인천 남동구 인주대로 593 엔타스빌딩 12층<br />
              제작: 강원준, 김지홍, 김태형, 신진희, 조혜린, 한만서</p>
          </div>
          <div class="copy_rights">
            <p>COPYRIGHTS@2024.C2C.ALL RIGHTS RESERVED.</p>
          </div>
          <div class="privacy">
            <p>개인정보처리방침 | 이메일무단수집거부</p>
          </div>
          <div class="sns_icon">
            <div class="facebook_icon">
            <img src={image12} alt="img12"/>
            </div>
            <div class="insta_icon">
            <img src={image13} alt="img13"/>
            </div>
            <div class="youtube_icon">
            <img src={image14} alt="img14"/>
            </div>
          </div>
        </div>
      </div>
        <hr/>
    </footer>
  );
};

export default Footer;