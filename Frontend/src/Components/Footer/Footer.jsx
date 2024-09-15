import { Component } from "react";
import Style from "./footer.module.css";
import { X, LinkedIn, GitHub } from "@mui/icons-material";

export class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={Style.footer}>
        <div className={Style.footer_Content}>
          <div className={Style.Head}>Mobi World</div>
          <div className={Style.about}>
            <a target="_blank" href="https://github.com/AnandaSH-8/Mobi-World-E-commerce">
              About
            </a>
            <a href="">Terms & Conditions</a>
            <a href="">Privacy Policy</a>
            <a href="mailto:anandsholla8@gmail.com">Contact</a>
          </div>
          <div className={Style.connect}>
            Connect
            <div className={Style.Icons}>
              <a target="_blank" href="https://github.com/AnandaSH-8">
                <GitHub sx={{ fontSize: 35, color: "white" }}></GitHub>
              </a>
              <a target="_blank" href="https://www.linkedin.com/in/ananda-s-holla-268b94147/">
                <LinkedIn
                  sx={{ color: "rgb(20, 80, 185)", fontSize: 35 }}
                ></LinkedIn>
              </a>
              <a target="_blank" href="https://x.com/AnandSHolla8">
                <X
                  sx={{ color: "rgb(255, 255, 255)", fontSize: 35 }}
                ></X>
              </a>
            </div>
          </div>
          <div className={Style.copy}>MobiWorld 2024. All rights Reserved</div>
        </div>
      </div>
    );
  }
}
