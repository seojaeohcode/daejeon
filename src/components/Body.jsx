import React from "react";
import './Body.scss'

export function Body() {
  return (
    <section>
      <div class="sec">
        <div class="Largetitle">Attractions in Daejeon</div>
        <div class="flexbox">
          <div class="leftimagepos"><img id="photo" src="https://github.com/shareproject-0/portfolio-web-daejeon/blob/main/1.jpg?raw=true" height="800px" /></div>
          <div class="textbox one">
            <div class="textpos">
              <h3>명소1</h3><br />
              <h1>오 월드</h1><br />
              <h2>
                가족과 함께 나들이하기 좋은 곳이다. <br />
                대전시에서 옛 대전동물원을 중심으로 놀이동산과<br /> 
                플라워랜드를 합쳐 만든 테마파크이다. <br />
                동물원과 식물원, 놀이공원이 합쳐져 있어 <br />
                볼거리와 놀거리가 많다.
              </h2>
            </div>
          </div>
        </div>
        <div class="flexbox">
          <div class="rightimagepos"><img id="photo" src="https://github.com/shareproject-0/portfolio-web-daejeon/blob/main/2.jpg?raw=true" height="800px" /></div>
          <div class="textbox two">
            <div class="textpos">
              <h3>명소2</h3><br />
              <h1>한밭수목원</h1><br />
              <h2>
                한밭수목원은 정부 대전청사와 엑스포과학공원의<br />
                중앙 부분에 있는 도심 속 인공 수목원이다.<br />
                사계절 다양한 꽃과 나무들이 볼거리를 제공하고<br />
                다양한 편의시설이 있어 산책과 휴식 공간으로 제격이다.
              </h2>
            </div>
          </div>
        </div>
        <div class="flexbox">
          <div class="leftimagepos"><img id="photo" src="https://github.com/shareproject-0/portfolio-web-daejeon/blob/main/3.jpg?raw=true" height="800px" /></div>
          <div class="textbox one">
            <div class="textpos">
              <h3>명소3</h3><br />
              <h1>대동벽화마을</h1><br />
              <h2>
                대동 벽화마을은 대전 대동역 <br />
                대동 종합복지센터 근처에서 가깝다.<br />
                마을 담장은 강아지 벽화부터 고흐의 작품 벽화 등 <br />
                다양한 벽화로 가득하다.<br />
                연인과 도란도란 이야기를 나누며 길을 걷기 좋다.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Body