import "./css/style.css";
import {
  RiFacebookBoxLine,
  RiGithubLine,
  RiInstagramLine,
  RiTwitterXLine,
  RiYoutubeLine,
} from "@remixicon/react";

export const App = () => {
  const getFullYear = new Date().getFullYear();
  return (
    <div className="container">
      <div className="footer">
        <div className="footer-items footer-links">
          <ul>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className="footer-items footer-socials">
          <ul>
            <li>
              <a
                aria-label="Link to Youtube profile"
                href="https://www.youtube.com/"
              >
                <RiYoutubeLine size={24} />
              </a>
            </li>
            <li>
              <a
                aria-label="Link to Instagram profile"
                href="https://www.instagram.com/"
              >
                <RiInstagramLine size={24} />
              </a>
            </li>
            <li>
              <a
                aria-label="Link to Facebook profile"
                href="https://www.facebook.com/"
              >
                <RiFacebookBoxLine size={24} />
              </a>
            </li>
            <li>
              <a aria-label="Link to Github profile" href="https://github.com/">
                <RiGithubLine size={24} />
              </a>
            </li>
            <li>
              <a aria-label="Link to Twitter profile" href="https://x.com/">
                <RiTwitterXLine size={24} />
              </a>
            </li>
          </ul>
        </div>
        <span className="footer-copyright">
          © {getFullYear} Abstractly, Inc. All rights reserved.
        </span>
      </div>
    </div>
  );
};
