import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"

const About = () => {
  return (
    <div className="secion" id="greetings">
      <div className="container">
        <div className="about-section">
          <div className="content">
            <Fade bottom cascade>
              <h1>thanks for coming.</h1>
            </Fade>
            <p>
              안녕하세요 주인장이에요🙇‍♂️<br></br>
              제주도에서 시작하게된 공간이 어느덧 커져버렸네요
              <br></br>
              <br></br>
              유행을 타지 않고 같은 곡을 다양한 가수의 목소리로 들을 수 있어서
              좋은 재즈,<br></br>
              평소 사람들 사는 이야기에 관심이 많아 단편집 읽듯이 읽어 내려간
              댓글창,<br></br>
              행복과 여유가 넘치는 마음으로 유튜브를 시작했을 때의 제주도,
              <br></br>
              추억이 몽글몽글 떠오르게 만드는 선곡들로 느끼는 향수들,<br></br>
              항상 힘든 마음을 잠시나마 내려놓게 만들어주는 위스키,<br></br>
              언제든지 편하게 쉬었다 갔으면 하고 항상 그 자리에서 기다리고 있는
              공간.
              <br></br>
              <br></br>
              이러한 무드들을 좋아해주고 찾아와 준 분들에게<br></br>
              진심으로 고맙다는 말을 전합니다.
              {/* {data.aboutParaThree} */}
            </p>
          </div>
          <div className="image-wrapper">
            <img src={data.aboutImage} alt="about"></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
