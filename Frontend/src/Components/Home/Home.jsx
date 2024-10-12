import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Style from "./home.module.css";
import { Margin } from "@mui/icons-material";

export const Home = () => {
  let images = [
    "https://realtimeworld.in/wp-content/uploads/2024/07/Best-Phones-Under-10000-in-2024-860x487.jpg",
    "https://www.brutimes.com/cache/top%2010%20mobile%20phones%20under%2020000_2100_x_1470.webp",
    "https://www.unboxtheory.com/wp-content/uploads/2024/06/New-Project-2024-06-09T043410.986-1.jpg",
    "https://www.poco.in/images/poco-M6-Pro-5g/M/page3.png",
    "https://exstatic-in.iqoo.com/Oz84QB3Wo0uns8j1/in/1724143639774/9b2b7b82d943f8c08a362ab9b0d1edbd.jpg_w860-h860.webp",
  ];

  const [image, setImage] = useState();
  const number = useRef(0);

  useEffect(() => {
    const run = setInterval(() => {
      setImage(images[number.current]);
      number.current += 1;
      number.current == 5 ? (number.current = 0) : "";
    }, 4000);

    return () => clearInterval(run);
  });

  return (
    <div>
      <div className={Style.top_image}>
        <img src={image} alt="Phones" />
      </div>
      <div className={Style.catergories_head}>
        <h1 style={{paddingTop:'10px'}} >Categories</h1>
        <div className={Style.subTitle}>
          <kbd>₹10000</kbd>
          <kbd>₹20000</kbd>
        </div>
        <div className={Style.cat_images}>
          <Link to="/mobiles/under_10000">
            <img
              src="https://www.triveniworld.com/cdn/shop/collections/buy-smart-phone-under-10000-triveni-world_616c941e-15c0-4254-ae02-9796170db743.jpg?v=1717480224"
              alt="10000"
              loading="eager"
            />
          </Link>
          <Link to="/mobiles/under_20000">
            <img
              src="https://i.ytimg.com/vi/vJhmwdi9eug/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDFBD46HUV71s-OkV3-uGqf4A1RQQ"
              alt=""
            />
          </Link>
        </div>
      </div>
      <div className={Style.Message}>
        <kbd>" A Place for Best smart phones under Rs 20000 and Rs 10000 "</kbd>
      </div>
    </div>
  );
};
