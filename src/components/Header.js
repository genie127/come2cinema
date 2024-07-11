import React from 'react';
import image from '../assets/image9.png';
import './Header.module.css';
const Header = () => {
  return (
    <header>
        <div class="container_fix">
            <nav><a><img src={image} alt="C2C"/></a></nav>
            <nav>
                <ul class = "main_menu">
                    <li><a>빠른예매</a></li>
                    <li><a>요즘영화</a></li>
                    <li><a>요즘극장</a></li>
                    <li><a><strong>공지사항/이벤트</strong></a></li>
                    <li><a>고객센터</a></li>
                </ul>
            </nav>
                <nav>
                <ul class = "info_wrap">
                    <li><a>회원가입</a></li>
                    <li><a>로그인</a></li>
                </ul>
            </nav>
        </div>
        <hr/>
    </header>
  );
};

export default Header;