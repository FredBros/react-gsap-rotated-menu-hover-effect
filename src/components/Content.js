import React from "react";
import styled from "styled-components";

const StyledContentSection = styled.section`
  position: relative;
  padding: 30vh 4vw 10vh;
  background-color: #e1dfdd;
  z-index: -1;
  .content__wrapper {
    width: 100%;
    max-width: 1417px;
    margin: 0 auto;
    .content__text--heading {
      font-family: "Italiana", serif;
      font-size: clamp(1rem, 5.25vw, 10rem);
      line-height: 1;
      font-weight: 300;
    }
    .content__text--copy {
      font-size: clamp(1rem, 2vw, 1.25rem);
      line-height: 1.3;
      font-weight: 300;
      width: 50%;
      margin-bottom: 10vh;
      margin-top: 10vh;
    }
  }
`;

function Content() {
  return (
    <StyledContentSection>
      <div className="content__wrapper">
        <p className="content__text--heading">
          Vaporware cloud bread hexagon single-origin coffee narwhal VHS
          helvetica post-ironic wolf big mood.
        </p>
        <p className="content__text--copy">
          Kale chips sustainable skateboard synth chia, copper mug raw denim
          leggings jianbing art party YOLO. Shabby chic disrupt la croix seitan
          readymade. Bruh bushwick photo booth, flexitarian readymade hexagon
          enamel pin DIY.
        </p>
      </div>
    </StyledContentSection>
  );
}

export default Content;
