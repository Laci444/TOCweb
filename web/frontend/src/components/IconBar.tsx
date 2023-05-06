import "../assets/IconBar.css";
import dcPng from "../assets/discord.svg";
import fbPng from "../assets/facebook.svg";
import instaPng from "../assets/instagram.svg";
import ghPng from "../assets/github.svg";
import tiktokPng from "../assets/tiktok.svg";

function IconBar() {
  return (
    <div className="icon-bar hidden md:block">
      <a
        aria-label="Csatlakozz a Discord szerverünkhöz!"
        href="https://discord.oldcrafters.net"
        target="_blank"
        className="discord"
      >
        <img alt="Discord logo" src={dcPng} className="socialmedia" />
      </a>
      <a
        aria-label="Látogasd meg a Facebook oldalunkat!"
        href="https://www.facebook.com/groups/theoldc"
        target="_blank"
        className="facebook"
      >
        <img alt="Facebook logo" src={fbPng} className="socialmedia" />
      </a>
      <a
        aria-label="Nézd meg az Instagram oldalunkat is!"
        href="https://www.instagram.com/theoldcrafters2"
        target="_blank"
        className="instagramm"
      >
        <img alt="Instagram logo" src={instaPng} className="socialmedia" />
      </a>
      <a
        aria-label="A GitHub oldalunkot tudsz hibákat jelenteni"
        href="https://github.com/TheOld-Crafters/Minecraft-servers"
        target="_blank"
        className="github"
      >
        <img alt="GitHub logo" src={ghPng} className="socialmedia" />
      </a>
      <a
        aria-label="Nézd meg rövid videóinkat TikTokon!"
        href="https://tiktok.com/@theoldcrafters"
        target="_blank"
        className="tiktok"
      >
        <img alt="TikTok logo" src={tiktokPng} className="socialmedia" />
      </a>
    </div>
  );
}

export default IconBar;
