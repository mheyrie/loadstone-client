import Marquee from "react-fast-marquee";
import BaseDirectories from "../../baseDir/baseDirectories";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function MarqueeComponent() {
    AOS.init();
  return (
    <>
    <h3 className="text-2xl font-medium my-6">Backed by strong partners</h3>
    <div className=" bg-brand-white">
      <Marquee speed={30} gradientColor="rgb(239, 240, 246)" pauseOnHover={true}>
        <div className="flex items-center space-x-10 px-10 py-5">
          <img
            src={`${BaseDirectories.LOGOS_DIR}/marquee/arm.png`}
            alt="Trade Lenda"
          />
          <img
            src={`${BaseDirectories.LOGOS_DIR}/marquee/onek.png`}
            alt="Trade Lenda"
          />
          <img
            src={`${BaseDirectories.LOGOS_DIR}/marquee/buffex.png`}
            alt="Trade Lenda"
          />
          <img
            src={`${BaseDirectories.LOGOS_DIR}/marquee/farmer.png`}
            alt="Trade Lenda"
          />
          <img
            src={`${BaseDirectories.LOGOS_DIR}/marquee/glidex.png`}
            alt="Trade Lenda"
            // style={{ paddingTop: "30px" }}
          />
          <img
            src={`${BaseDirectories.LOGOS_DIR}/marquee/smart.png`}
            alt="Trade Lenda"
          />
          <img
            src={`${BaseDirectories.LOGOS_DIR}/marquee/terminal.png`}
            alt="Trade Lenda"
            // style={{ width: "280px" }}
          />
         
        </div>
      </Marquee>
    </div></>
  );
}
