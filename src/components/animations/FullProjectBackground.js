import React from "react";
import styled from "styled-components";

export default function FullProjectBackground() {
  return (
    <Wrapper>
      <div className="mockup1" />
      <div className="mockup2" />
      <div className="mockup3" />
      <div className="mockup4" />
      <div className="mockup5" />
      <div className="mockup6" />
      <div className="mockup7" />
      <div className="mockup8" />
      <div className="mockup9" />
      <div className="mockup10" />
      <div className="mockup11" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  display: block;
  height: 720px;
  z-index: 100;

  /* perspective: 5000;
  perspective-origin: bottom left; */

  /* div {
    transform: rotateY(-20deg) rotateX(20deg);
  } */

  * {
    transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  :hover div {
    transform: rotateY(0deg) rotateX(0deg);
    &.mockup1 {
      transform: translate(0, -30px);
      transition-delay: 0.1s;
    }
    &.mockup2 {
      transform: translate(0, -30px);
      transition-delay: 0.2s;
    }
    &.mockup3 {
      transform: translate(0, 0);
      transition-delay: 0s;
    }
    /*&.mockup4 {
      transform: translate(-120px, 60px);
      transition-delay: 0.1s;
    }
    &.mockup5 {
      transform: translate(-90px, 60px);
      transition-delay: 0.2s;
    } */
    :hover {
      filter: brightness(150%) saturate(120%);
    }
  }

  .mockup1 {
    position: absolute;
    width: 80px;
    height: 104px;
    left: 12px;
    top: 200px;
    background: url("https://www.dropbox.com/s/e5z678mrnz1jalh/fullproject_1_1.svg?dl=0");
    border: 0.273134px solid rgba(255, 255, 255, 0.3);
    box-sizing: border-box;
  }
  .mockup2 {
    position: absolute;
    width: 174px;
    height: 104px;
    left: 92px;
    top: 200px;
    background: url("/images/animations/fullproject_1_2.svg");
    box-sizing: border-box;
  }
  .mockup3 {
    position: absolute;
    width: 146px;
    height: 68px;
    left: 3px;
    top: 340px;
    background: url("/images/animations/fullproject_1_3.svg");
    box-sizing: border-box;
  }
  .mockup4 {
    position: absolute;
    width: 146px;
    height: 68px;
    left: 131px;
    top: 340px;
    background: url("/images/animations/fullproject_1_4.svg");
    box-sizing: border-box;
  }
  .mockup5 {
    position: absolute;
    width: 146px;
    height: 68px;
    left: 259px;
    top: 340px;
    background: url("/images/animations/fullproject_1_5.svg");
    box-sizing: border-box;
  }
  .mockup6 {
    position: absolute;
    width: 146px;
    height: 68px;
    left: 387px;
    top: 340px;
    background: url("/images/animations/fullproject_1_6.svg");
    box-sizing: border-box;
  }
  .mockup7 {
    position: absolute;
    width: 146px;
    height: 68px;
    left: 515px;
    top: 340px;
    background: url("/images/animations/fullproject_1_7.svg");
    box-sizing: border-box;
  }
  .mockup8 {
    position: absolute;
    width: 146px;
    height: 68px;
    left: 643px;
    top: 340px;
    background: url("/images/animations/fullproject_1_8.svg");
    box-sizing: border-box;
  }
  .mockup9 {
    position: absolute;
    width: 146px;
    height: 68px;
    left: 771px;
    top: 340px;
    background: url("/images/animations/fullproject_1_9.svg");
    box-sizing: border-box;
  }
  .mockup10 {
    position: absolute;
    width: 402px;
    height: 40px;
    left: 387px;
    top: 432px;
    background: url("/images/animations/fullproject_1_10.svg");
    box-sizing: border-box;
  }
  .mockup11 {
    position: absolute;
    width: 920px;
    height: 44px;
    left: 0px;
    top: 489px;
    background: url("/images/animations/fullproject_1_11.svg");
    box-sizing: border-box;
  }
`;
