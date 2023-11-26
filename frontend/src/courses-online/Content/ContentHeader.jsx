import React from "react";
import logo from "../../images/banner.jpg";
import "./banner.css";


const tempData = [
  {
    src: 'ahhahaha',
    nameCourse: "hahaha",
    numerMember: "404043",
    tag: "khoa hoc online",
    price: "12982",
    underPrice: "19238238",
    discount:"64%"
  },
  {
    src: 'ahhahaha',
    nameCourse: "hahaha",
    numerMember: "404043",
    tag: "khoa hoc online",
    price: "12982",
    underPrice: "19238238",
    discount:"64%"
  },
  {
    src: 'ahhahaha',
    nameCourse: "hahaha",
    numerMember: "404043",
    tag: "khoa hoc online",
    price: "12982",
    underPrice: "19238238",
    discount:"64%"
  },
  {
    src: 'ahhahaha',
    nameCourse: "hahaha",
    numerMember: "404043",
    tag: "khoa hoc online",
    price: "12982",
    underPrice: "19238238",
    discount:"64%"
  },
]

const ContentHeader = () => {
  return (
    <div className="container mt-4">
      <div class="row justify-content-center align-items-center g-2">
        <div class="col">
          <img src= {logo} alt="123" style={{ width: "100%" }} />
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-12">
           <h2 className="text-align-start">Khoá học online</h2>  
        </div>
        <div className="col-12">
          <div className="content-details">
            <p className="text-align-start">
              Những khoá học tiếng Anh online chất lượng cao của STUDY4 được thiết
              kế theo chương trình tiếng Anh chuẩn CEFR (A1-C2) của đại học
              Cambridge và Oxford (Anh) với hệ thống bài giảng, bài tập phong phú
              đa dạng. Bạn có thể học thử miễn phí trước khi đặt mua sản phẩm.
            </p>
          </div>
        </div>
      </div>
      <div className="content-wrapper">
          <h2 className="text-align-start">Khóa học:</h2>
          <div className="row ">
            {
              tempData.map((value,index) => (
                <>
                <div className="col-4 col-md-4">
                  <img src={value.src} alt="chua co anh"></img>
                  <span>{value.nameCourse}</span>
                  <span>{value.numerMember}</span>
                  <span>{value.tag}</span>
                  <span>{value.price}</span>
            </div>
                </>
              ))
            }
          </div>
      </div>
    </div>
  );
};

export default ContentHeader;
