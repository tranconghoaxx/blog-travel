import React from "react";
import { Link } from "react-router-dom";
import './Home.scss';
export default function Home() {
  return (
    <div className="snow">
      <div className="MuiContainer-root jss150 MuiContainer-maxWidthMd">
        <h3 className="MuiTypography-root MuiTypography-h3 MuiTypography-alignCenter">
          Travel Blog
        </h3>

        <div className="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-4 MuiGrid-align-items-xs-center MuiGrid-justify-xs-center">
          <div className="MuiGrid-root MuiGrid-item">
            <a
              aria-current="page"
            >
              <button
                className="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textSizeLarge MuiButton-sizeLarge"
                tabIndex="0"
                type="button"
              >
                <span className="MuiButton-label">Home</span>
                <span className="MuiTouchRipple-root"></span>
              </button>
            </a>
          </div>
          <div className="MuiGrid-root MuiGrid-item">
            <Link to="/about">
              <button
                className="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textSizeLarge MuiButton-sizeLarge"
                tabIndex="0"
                type="button"
              >
                <span className="MuiButton-label">About</span>
                <span className="MuiTouchRipple-root"></span>
              </button>
            </Link>
          </div>
          <div className="MuiGrid-root MuiGrid-item">
            <Link href="/blogs">
              <button
                className="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textSizeLarge MuiButton-sizeLarge"
                tabIndex="0"
                type="button"
              >
                <span className="MuiButton-label">Blogs</span>
                <span className="MuiTouchRipple-root"></span>
              </button>
            </Link>
          </div>
          <div className="MuiGrid-root MuiGrid-item">
            <Link href="/login">
              <button
                className="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textSizeLarge MuiButton-sizeLarge"
                tabIndex="0"
                type="button"
              >
                <span className="MuiButton-label">Login</span>
                <span className="MuiTouchRipple-root"></span>
              </button>
            </Link>
          </div>
        </div>

        <div className="icon-item">
          <div className="MuiGrid-root MuiGrid-item">
            <a
              className="MuiButtonBase-root MuiIconButton-root"
              tabIndex="0"
              aria-disabled="false"
              href="https://twitter.com/dulichnhatrang3"
              target="_blank"
              rel="noreferrer"
            >
              <span className="MuiIconButton-label">
                <svg
                  className="MuiSvgIcon-root"
                  focusable="false"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z"></path>
                </svg>
              </span>
              <span className="MuiTouchRipple-root"></span>
            </a>
          </div>

          <div className="MuiGrid-root MuiGrid-item">
            <a
              className="MuiButtonBase-root MuiIconButton-root"
              tabIndex="0"
              aria-disabled="false"
              href="https://github.com/duclong09"
              target="_blank"
              rel="noreferrer"
            >
              <span className="MuiIconButton-label">
                <svg
                  className="MuiSvgIcon-root"
                  focusable="false"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"></path>
                </svg>
              </span>
              <span className="MuiTouchRipple-root"></span>
            </a>
          </div>

          <div className="MuiGrid-root MuiGrid-item">
            <a
              className="MuiButtonBase-root MuiIconButton-root"
              tabIndex="0"
              aria-disabled="false"
              href="https://www.linkedin.com/in/long-%C4%91%E1%BB%A9c-417a481a8/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="MuiIconButton-label">
                <svg
                  className="MuiSvgIcon-root"
                  focusable="false"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z"></path>
                </svg>
              </span>
              <span className="MuiTouchRipple-root"></span>
            </a>
          </div>

          <div className="MuiGrid-root MuiGrid-item">
            <a
              className="MuiButtonBase-root MuiIconButton-root"
              tabIndex="0"
              aria-disabled="false"
              href="https://www.facebook.com/BiSewDev"
              target="_blank"
              rel="noreferrer"
            >
              <span className="MuiIconButton-label">
                <svg
                  className="MuiSvgIcon-root"
                  focusable="false"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z"></path>
                </svg>
              </span>
              <span className="MuiTouchRipple-root"></span>
            </a>
          </div>

          <div className="MuiGrid-root MuiGrid-item">
            <a
              className="MuiButtonBase-root MuiIconButton-root"
              tabIndex="0"
              aria-disabled="false"
              href="/rss.xml"
              target="_blank"
              rel="noreferrer"
            >
              <span className="MuiIconButton-label">
                <svg
                  className="MuiSvgIcon-root"
                  focusable="false"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M6.18,15.64A2.18,2.18 0 0,1 8.36,17.82C8.36,19 7.38,20 6.18,20C5,20 4,19 4,17.82A2.18,2.18 0 0,1 6.18,15.64M4,4.44A15.56,15.56 0 0,1 19.56,20H16.73A12.73,12.73 0 0,0 4,7.27V4.44M4,10.1A9.9,9.9 0 0,1 13.9,20H11.07A7.07,7.07 0 0,0 4,12.93V10.1Z"></path>
                </svg>
              </span>
              <span className="MuiTouchRipple-root"></span>
            </a>
          </div>
        </div>
      </div>

      <div className="snow__item"></div>
      <div className="snow__item"></div>
      <div className="snow__item"></div>
    </div>
  );
}
