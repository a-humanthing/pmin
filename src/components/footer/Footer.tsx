import { FaInstagram, FaFacebookF } from "react-icons/fa"
import "./Footer.css"
const Footer = () => {
  return (
    <>
      <div className="footerContainer">
        <div className="footerTop">
          <div className="leftFooter">
            <img src="/images/logo.png" alt="Logo of Pure Beauty Skin Care" />
          </div>
          <div className="rightFooter">
            <div className="addressDiv">
              <h5 className="primFont">ADDRESS</h5>
              <span className="footerText primFont">
                13 Brinkley Circuit Palmerston
              </span>
            </div>
            <div className="socialMedia">
              <h5 className="primFont">SOCIAL MEDIA</h5>
              <span className="primFont d-flex gap-4">
                <FaInstagram />
                <FaFacebookF />
              </span>
            </div>
          </div>
        </div>
        <div className="footerBottom">
          <div className="leftFooter">
            <span className="copyRightText primFont">
              2022 PURE BEAUTY, POWERED BY{" "}
            </span>
            <span className="primFont">planetmedia</span>
          </div>
          <div className="rightFooter">
            <span className="copyRightText primFont">ALL RIGHTS RESERVED.</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
