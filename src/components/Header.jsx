import React from "react";
import './Header.scss'
import YoutubeBackground from 'react-youtube-background'

export function Header() {
  return (
    <div className="backvideo">
      <YoutubeBackground
        videoId={"9dMyE48Gr8A"} // default -> "jssO8-5qmag"
        // aspectRatio={string} // default -> "16:9"
        // overlay={string}       // defaults -> null | e.g. "rgba(0,0,0,.4)"
        className={"sizeup"}   // defaults -> null
      // onReady={func}       // defaults -> null
      >
        {
          <div>

          </div>
        }
        <div className="linklist">
          <div className="toplist">list</div>
          <a href="https://seojaeohcode.github.io/seoul/#/">-서울</a><br />
          <a href="https://seojaeohcode.github.io/Incheon/">-인천</a><br />
          <div className="current">-대전</div>
          -대구<br />
          -울산<br />
          -부산<br />
          -광주<br />
          -제주
        </div>
        <div className="sloganimage">
          <img src="https://github.com/shareproject-0/portfolio-web-daejeon/blob/main/image-removebg-preview.png?raw=true" height="150px" />
        </div>
        <div className="slogantext">
          Edu&Science<br/>
          Daejeon
        </div>
      </YoutubeBackground>
    </div>
  )
}

export default Header