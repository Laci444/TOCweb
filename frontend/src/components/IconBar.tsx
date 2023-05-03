import "../assets/IconBar.css";
import dcPng from "../assets/dc.png";
import fbPng from "../assets/fb_o.png";
import instaPng from "../assets/insta_o.png";
import ghPng from "../assets/github.png";
import tiktokPng from "../assets/tiktok.png";

function IconBar() {
  return (
    <div className="icon-bar">
      <a
        href="https://discord.oldcrafters.net"
        target="_blank"
        className="discord"
      >
        <img src={dcPng} className="socialmedia" />
      </a>
      <a
        href="https://www.facebook.com/groups/theoldc"
        target="_blank"
        className="facebook"
      >
        <img src={fbPng} className="socialmedia" />
      </a>
      <a
        href="https://www.instagram.com/theoldcrafters2"
        target="_blank"
        className="instagramm"
      >
        <img src={instaPng} className="socialmedia" />
      </a>
      <a
        href="https://github.com/TheOld-Crafters/Minecraft-servers"
        target="_blank"
        className="github"
      >
        <img src={ghPng} className="socialmedia" />
      </a>
      <a
        href="https://tiktok.com/@theoldcrafters"
        target="_blank"
        className="tiktok"
      >
        <img src={tiktokPng} className="socialmedia" />
      </a>
    </div>
  );
}

export default IconBar;
