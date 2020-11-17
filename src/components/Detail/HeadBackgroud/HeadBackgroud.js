import React from "react";
function HeadBackgroud() {
  return (
    <div className="MuiContainer-root jss358 MuiContainer-maxWidthXl">
      <div className="jss357">
        <div
          className=" gatsby-image-wrapper"
          style={{
            position: "relative",
            overflow: "hidden",
            height: "700px",
            width: "auto",
          }}
        >
          <div
            aria-hidden="true"
            style={{ width: "100%", paddingBottom: "34.4444%" }}
          />
          <img
            aria-hidden="true"
            src="./images/hinh_detail.jpg"
            alt=""
            style={{
              position: "absolute",
              top: "0px",
              left: "0px",
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center center",
              opacity: 0,
              transitionDelay: "500ms",
            }}
          />
          <picture>
            <source
              srcSet="./images/hinh_detail.jpg"
              sizes="(max-width: 1080px) 100vw, 1080px"
            />
            <img
              sizes="(max-width: 1080px) 100vw, 1080px"
              srcSet="./images/hinh_detail.jpg"
              src="./images/hinh_detail.jpg"
              alt=""
              loading="lazy"
              style={{
                position: "absolute",
                top: "0px",
                left: "0px",
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center center",
                opacity: 1,
                transition: "opacity 500ms ease 0s",
              }}
            />
          </picture>
        </div>
      </div>
    </div>
  );
}
export default HeadBackgroud;
