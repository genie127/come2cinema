import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Userinfoupdate.css";

const ProfileEdit = () => {
  const navigate = useNavigate()
  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    address: "",
    detailaddress: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [userid, setUserid] =  useState();

  useEffect(() => {
    const userInfo = JSON.parse(sessionStorage.getItem('userData'))
    if (userInfo != null){
    setUserid(userInfo.id)
    } else {
      navigate("/")
    }
  }, [])
 
  useEffect(() => {
    async function fetchUserData() {
      try {
        const response = await axios.get("http://localhost:8000/getUserInfo", {id:userid});
        const userData = response.data; // 예시: 서버에서 받은 사용자 정보
        console.log(userData)
        // setUserid
      } catch (error) {
        console.error("사용자 정보 불러오기 오류:", error);
      }
    }
    fetchUserData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });

  };

  const validate = (values) => {
    const errors = {};

    if (!values.username) {
      errors.username = "*성함을 입력해 주세요";
    }

    if (!values.password) {
      errors.password = "*비밀번호를 입력해 주세요.";
    } else if (values.password.length < 6) {
      errors.password = "*비밀번호는 6자 이상이어야 합니다.";
    }

    if (!values.confirmPassword) {
      errors.confirmPassword = "*비밀번호 확인을 입력해 주세요.";
    } else if (values.confirmPassword !== values.password) {
      errors.confirmPassword = "*비밀번호가 일치하지 않습니다.";
    }

    if (!values.phoneNumber) {
      errors.phoneNumber = "*휴대폰 번호를 입력해 주세요";
    }

    if (!values.address) {
      errors.address = "*주소를 입력해 주세요";
    }

    if (!values.detailaddress) {
      errors.detailaddress = "*상세 주소를 입력해 주세요";
    }
    return errors;
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const errors = validate(formValues);
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      setIsSubmit(true);
      try {
        const response = await axios.put(
          "http://localhost:8000/Userinfoupdate",
          {
            username: formValues.username,
            password: formValues.password,
            email: formValues.email,
            address: formValues.address,
            detailaddress: formValues.detailaddress,
            phonenumber: formValues.phoneNumber,
            userid: userid,
          }
        );
        console.log("서버 응답:", response.data);
        alert("회원정보가 수정되었습니다.");
        window.location.href = "/mypage";
      } catch (error) {
        if (error.response) {
          console.log(
            "서버 응답 오류:",
            error.response.status,
            error.response.data
          );
          alert("서버 오류: " + error.response.data.message);
        } else if (error.request) {
          console.log("서버 응답이 없음:", error.request);
          alert("서버 응답이 없습니다.");
        } else {
          console.log("요청 설정 중 오류:", error.message);
          alert("요청 설정 중 오류가 발생했습니다.");
        }
      } finally {
        setIsSubmit(false);
      }
    }
  };

  return (
    <div>
      <div id="sub_banner">
        <div className="container_fix">
          <h2>회원정보 수정</h2>
          <p>회원정보를 수정하세요.</p>
        </div>
      </div>
      <main>
        <h3>회원정보 수정</h3>
        <form className="signup_form" onSubmit={handleUpdate}>
          <div className="signup_form_con">
            <label htmlFor="name">성함</label>
            <div>
              <input
                type="text"
                name="username"
                id="name"
                value={formValues.username}
                placeholder="성함을 입력하세요"
                onChange={handleChange}
              />
              {formErrors.username && <p>{formErrors.username}</p>}
            </div>
          </div>
         
          <div className="signup_form_con">
            <label htmlFor="password">비밀번호</label>
            <div>
              <div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={formValues.password}
                  placeholder="비밀번호를 입력하세요"
                  onChange={handleChange}
                />
              </div>
              {formErrors.password && <p>{formErrors.password}</p>}
            </div>
          </div>
          <div className="signup_form_con">
            <label htmlFor="password_check">비밀번호 확인</label>
            <div className="password_wrap">
              <input
                type="password"
                name="confirmPassword"
                value={formValues.confirmPassword}
                placeholder="비밀번호 확인을 입력하세요"
                onChange={handleChange}
              />
              {formErrors.confirmPassword && (
                <p>{formErrors.confirmPassword}</p>
              )}
            </div>
          </div>
          <div className="signup_form_con">
            <label htmlFor="phonenumber">휴대폰 번호</label>
            <div>
              <input
                type="text"
                name="phoneNumber"
                id="phonenumber"
                value={formValues.phoneNumber}
                placeholder="휴대폰 번호를 입력하세요"
                onChange={handleChange}
              />
              {formErrors.phoneNumber && <p>{formErrors.phoneNumber}</p>}
            </div>
          </div>
          <div className="signup_form_con">
            <label htmlFor="address">주소</label>
            <div>
              <input
                type="text"
                name="address"
                value={formValues.address}
                placeholder="주소를 입력하세요"
                onChange={handleChange}
              />
              {formErrors.address && <p>{formErrors.address}</p>}
            </div>
          </div>
          <div className="signup_form_con">
            <label>상세 주소</label>
            <div>
              <input
                type="text"
                name="detailaddress"
                id="detailaddress"
                value={formValues.detailaddress}
                placeholder="상세주소를 입력하세요"
                onChange={handleChange}
              />
              {formErrors.detailaddress && <p>{formErrors.detailaddress}</p>}
            </div>
          </div>
          <div id="btn_signup">
            <Link to="/mypage" type="reset" className="btn_back">
              뒤로가기
            </Link>
            <button type="submit" className="btn_signup" disabled={isSubmit}>
              정보 수정
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default ProfileEdit;
