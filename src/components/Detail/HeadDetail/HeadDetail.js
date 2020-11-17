import React from "react";
import "./HeadDetail.scss";

function HeadDetail() {
  return (
    <React.Fragment>
      <div className="MuiContainer-root MuiContainer-maxWidthLg">
        <h2 className="MuiTypography-root jss354 MuiTypography-h2 MuiTypography-alignCenter">
          Chào mừng đến với website blog của nhóm B. Đây là trang chi tiết bài đăng{" "}
        </h2>
        <div className="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-1 MuiGrid-align-items-xs-center MuiGrid-justify-xs-center">
          <div className="MuiGrid-root MuiGrid-item">
            <div
              className="MuiButtonBase-root MuiChip-root MuiChip-colorPrimary MuiChip-clickableColorPrimary MuiChip-sizeSmall MuiChip-clickable"
              tabIndex={0}
              role="button"
            >
              <span className="MuiChip-label MuiChip-labelSmall">
                Programming
              </span>
              <span className="MuiTouchRipple-root" />
            </div>
          </div>
          <div className="MuiGrid-root MuiGrid-item">
            <div
              className="MuiButtonBase-root MuiChip-root MuiChip-colorPrimary MuiChip-clickableColorPrimary MuiChip-sizeSmall MuiChip-clickable"
              tabIndex={0}
              role="button"
            >
              <span className="MuiChip-label MuiChip-labelSmall">
                Typescript
              </span>
              <span className="MuiTouchRipple-root" />
            </div>
          </div>
          <div className="MuiGrid-root MuiGrid-item">
            <div
              className="MuiButtonBase-root MuiChip-root MuiChip-colorPrimary MuiChip-clickableColorPrimary MuiChip-sizeSmall MuiChip-clickable"
              tabIndex={0}
              role="button"
            >
              <span className="MuiChip-label MuiChip-labelSmall">
                AutoMapper
              </span>
              <span className="MuiTouchRipple-root" />
            </div>
          </div>
        </div>
        <span className="MuiTypography-root jss355 MuiTypography-caption MuiTypography-alignCenter MuiTypography-displayBlock">
          03/20/2020 - 05:06 | 11 min read
        </span>
      </div>
    </React.Fragment>
  );
}

export default HeadDetail;
