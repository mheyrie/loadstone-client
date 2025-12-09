import LandingLayout from "../../components/_shared/LandingLayout";
import BaseDirectories from '../../baseDir/baseDirectories';
import Button from '../ui/Button';
import { FaLinkedin, FaInstagram, FaTwitter, FaFacebook, FaWhatsapp, FaEnvelope, FaPhone, FaTelegram } from 'react-icons/fa';
import { Link } from "react-router-dom";

export default function ContactUs() {
  return (
    <LandingLayout>

      <section className="font-montserrat w-screen text-xl ">


        {/* ================= HERO SECTION ================= */}
        <section className="w-full h-[600px] sm:h-[700px] md:h-[776px] bg-contactus text-white font-inter text-center overflow-hidden px-4">
          {/* Centered Text */}
          <div className="flex items-center justify-center text-center h-full">
            <h2 className="text-2xl md:text-[70px] font-bold">
              We’re always available to
              <br className="hidden md:block" />
              answer your questions
            </h2>
          </div>
        </section>

        <div className="w-full flex text-start justify-center px-6 py-12 md:px-16 md:py-20">
          <div className="max-w-7xl w-full h-[618px] grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

            {/* Left: Contact Form */}
            <div className="bg-white p-6 rounded-xl shadow-md">

              <form className="space-y-4">
                {/* Name */}
                <div>
                  <label className="block fw-400 text-[18px]">Full Name*</label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block fw-400 text-[18px]">Email Address</label>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block fw-400 text-[18px]">Message</label>
                  <textarea

                    placeholder="Write your message..."
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none"
                  ></textarea>
                </div>

                <Button
                  classes="primary-btn btn-sm !py-5 "
                  content="Send"
                  onClick={() => { }}
                />

              </form>
            </div>

            {/* Right: Image */}



            <div className="flex items-center justify-center ">
              <div className="relative">
                {/* Circular background element */}
                <div className="absolute top-0 left-0 w-32 h-32 bg-yellow-400 rounded-full -z-10"></div>

                {/* Image container */}
                <img
                  src={`${BaseDirectories.CONTACT_US_DIR}/businesswoman.png`}
                  alt="business woman"
                  className=" object-cover rounded-l-full"
                />
              </div>
            </div>


          </div>
        </div>


        <div className="w-full bg-[#f7efff] px-6 py-16 flex justify-center">
          <div className="max-w-5xl w-full text-center">

            {/* Heading */}
            <h2 className="text-3xl md:text-[48px] fw-700 font-bold font-inter">
              Still Have Questions?
              <br />
              Get In Touch With Us
            </h2>

            {/* Subheading */}
            <p className="text-[#14142B] font-inter text-[20px] font-medium fw-600 max-w-5xl mx-auto ">
              Your satisfaction is our top priority! Our support service is available 24/7 to assist you with any
              questions you have about Loanstome finance and our services; loans, investments, insurance etc,
            </p>
            <p className="font-semibold mb-6"> You can get in touch with us any way you prefer: </p>


            {/* Social Icons */}
            <div className="flex justify-center gap-5 mb-10">
              <div className="bg-[#612FCC] w-[60px] h-[60px] flex items-center justify-center text-white rounded-full">
                <FaLinkedin size={36} />
              </div>

              <div className="bg-[#612FCC] w-[60px] h-[60px] flex items-center justify-center text-white rounded-full">
                <FaFacebook size={35} />
              </div>

              <div className="bg-[#612FCC] w-[60px] h-[60px] flex items-center justify-center text-white rounded-full">
                <FaInstagram size={40} />
              </div>

              <div className="bg-[#612FCC] w-[60px] h-[60px] flex items-center justify-center text-white rounded-full">
                <FaTwitter size={35} />
              </div>
            </div>


            {/* Contact Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-15">

              {/* Card 1 */}
              <div className="bg-white border border-[#D9DBE9] rounded-xl p-6 ">
                <div className="bg-[#612FCC] text-purple-700 w-12 h-12 flex items-center justify-center rounded-xl mx-auto mb-3">
                  <FaEnvelope />
                </div>
                <h3 className="font-bold text-lg">SEND US A MAIL</h3>
                <a
                  href="mailto:info@loanstone.com"
                  className="text-[#054B99] mt-1 hover:text-purple-600 transition"
                >
                  info@loanstone.com
                </a>
              </div>

              {/* Card 2 */}
              <div className="bg-white border border-[#D9DBE9] rounded-xl p-6 ">
                <div className="bg-[#612FCC] text-purple-700 w-12 h-12 flex items-center justify-center rounded-xl mx-auto mb-3">
                  <FaPhone />
                </div>
                <h3 className="font-bold text-lg">GIVE US A CALL</h3>
                <p className="text-[#010101] fw-400 text-[20px] mt-1">+234 810 000 0000</p>
              </div>

              {/* Card 3 */}
              <div className="bg-white border border-[#D9DBE9] rounded-xl p-6 ">
                <div className="bg-[#612FCC] text-green-700 w-12 h-12 flex items-center justify-center rounded-xl mx-auto mb-3">
                  <FaWhatsapp />
                </div>
                <h3 className="font-bold text-lg">CHAT WITH US</h3>
                <p className="text-[#010101] fw-400 text-[20px] mt-1">Chat with us on Whatsapp</p>
              </div>

              {/* Card 4 */}
              <div className="bg-white border border-[#D9DBE9] rounded-xl p-6 ">
                <div className="bg-[#612FCC] text-blue-700 w-12 h-12 flex items-center justify-center rounded-xl mx-auto mb-3">
                  <FaTelegram />
                </div>
                <h3 className="font-bold text-lg">JOIN OUR COMMUNITY</h3>
                <p className="text-[#010101] fw-400 text-[20px] mt-1">Join other lenders on Telegram</p>
              </div>
            </div>
          </div>
        </div>


      </section>

    </LandingLayout>
  );
}
