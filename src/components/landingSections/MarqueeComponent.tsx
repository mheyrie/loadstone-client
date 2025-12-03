import Marquee from "react-fast-marquee";
import BaseDirectories from "../../baseDir/baseDirectories";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function MarqueeComponent() {
    AOS.init();
  return (
    <div className=" bg-brand-white">
      <Marquee speed={30} gradientColor="rgb(239, 240, 246)" pauseOnHover={true}>
        <div className="flex items-center space-x-10 px-10 py-5">
          <img
            src={`${BaseDirectories.LOGOS_DIR}/farmer1st.png`}
            alt="Trade Lenda"
          />
          <img
            src={`${BaseDirectories.LOGOS_DIR}/marquee/onek.png`}
            alt="Trade Lenda"
          />
          <img
            src={`${BaseDirectories.LOGOS_DIR}/buffex.png`}
            alt="Trade Lenda"
          />
          <img
            src={`${BaseDirectories.LOGOS_DIR}/smartTeller.png`}
            alt="Trade Lenda"
          />
          <img
            src={`${BaseDirectories.LOGOS_DIR}/arm.png`}
            alt="Trade Lenda"
            style={{ paddingTop: "30px" }}
          />
          <img
            src={`${BaseDirectories.LOGOS_DIR}/terminal.png`}
            alt="Trade Lenda"
          />
          <img
            src={`${BaseDirectories.LOGOS_DIR}/boi.png`}
            alt="Trade Lenda"
            style={{ width: "280px" }}
          />
          <img
            src={`${BaseDirectories.LOGOS_DIR}/eazipay.png`}
            alt="Trade Lenda"
            style={{ width: "200px" }}
          />
          <img
            src={`${BaseDirectories.LOGOS_DIR}/fintech.png`}
            alt="Trade Lenda"
            style={{ width: "211px", paddingBottom: "10px" }}
          />
          <img
            src={`${BaseDirectories.LOGOS_DIR}/payslice.png`}
            alt="Trade Lenda"
            style={{ width: "211px", paddingTop: "10px" }}
          />
          <img
            src={`${BaseDirectories.LOGOS_DIR}/paystack.png`}
            alt="Trade Lenda"
            style={{ width: "211px", paddingTop: "10px" }}
          />
          <img
            src={`${BaseDirectories.LOGOS_DIR}/zenith.png`}
            alt="Trade Lenda"
            style={{ width: "160px", padding: "0px" }}
          />
          <img
            src={`${BaseDirectories.LOGOS_DIR}/providus.png`}
            alt="Trade Lenda"
            style={{
              width: "235px",
              paddingBottom: "15px",
              paddingRight: "50px",
            }}
          />
        </div>
      </Marquee>
    </div>
  );
}
