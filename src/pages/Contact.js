import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import Axios from "axios";
import { Link } from 'react-router-dom'

const AnyReactComponent = ({ text }) => (
  <div id="map" style={{ color: "red" }}>
    <i className="fa fa-4x fa-map-marker" aria-hidden="true"></i>
    <h3>
      <strong>{text} </strong>
    </h3>
  </div>
);

const Contact = () => {
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [center] = useState({
    lat: 28.6604822,
    lng: 77.27968539999999,
  });
  const [zoom] = useState(11);
  const { name, email, company, message } = contactData;

  const onChange = (e) => {
    setContactData({ ...contactData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(contactData);
    const contact = {
      name,
      email,
      company,
      message,
    };
    try {
      const config = {
        headers: {
          "content-Type": "application/json",
        },
      };
      const body = JSON.stringify(contact);
      const res = await Axios.post(
        "http://localhost:5000/api/v1/public/contact",
        body,
        config
      );
      console.log(res.data);
    } catch (error) {
      console.error(error.response.data);
    }
  };
  return (
    <div className="contactStyle ">
      <div className="flex justify-center text-3xl section-title font-serif md:text-5xl">
        <div
          className=" contactFont flex justify-center "
          style={{ marginTop: "202px" }}
        >
          Our Coverage and Empanelment
        </div>
      </div>
      <div className="block justify-center md:grid grid-cols-3 gap-5">
        <div className="m-8 md:col-span-2 flex justify-center">
          <form className="w-full max-w-lg" onSubmit={(e) => onSubmit(e)}>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="name"
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => onChange(e)}
                  placeholder="Name"
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  name="company"
                  value={company}
                  onChange={(e) => onChange(e)}
                  placeholder="Company Name"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="email"
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => onChange(e)}
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <textarea
                  className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                  id="message"
                  placeholder="Message"
                  name="message"
                  value={message}
                  onChange={(e) => onChange(e)}
                ></textarea>
              </div>
            </div>
            <div className="md:flex md:items-center">
              <div className="md:w-1/3">
                <button
                  className="shadow bg-teal-400 hover:bg-red-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded content-center	"
                  type="submit"
                >
                  Send
                </button>
              </div>
              <div className="md:w-2/3"></div>
            </div>
          </form>
        </div>
        <div className="m-8 md:col-span-1 block justify-center ">
          {/* <div className="font"> Contact Info</div> */}
          {/* <div
            className="fa fa-map-marker"
            style={{ fontSize: "18px" }}
          ></div>{" "} */}
          {/* Registered Office : FBIV Infocomm Pvt. Ltd.
          <p className="font1"> D-2/6, Krishna Nagar, Delhi-110051</p>
          <div className="contact-item ">
            <p className="font1">
              <span>
                <i className="fa fa-phone"></i> Phone
              </span>{" "}
              +91-11 410 02777
              <br />
              +91-11 455 02777
            </p>
          </div> */}
          {/* <div className="contact-item font1">
            <span>
              <i className="fa fa-envelope-o"></i> Email
            </span>{" "}
            <a href="mailto:info@vfast.in">: info@vfast.in</a>
          </div> */}
          {/* <div style={{ height: "27vh", width: "80%" }}>
            <GoogleMapReact
              className="map"
              bootstrapURLKeys={{
                key: "AIzaSyCFU9xoXBEkIUAm2XWJj7jlkerEaITusWY",
              }}
              defaultCenter={center}
              defaultZoom={zoom}
            >
              <AnyReactComponent
                lat={28.6604822}
                lng={77.27968539999999}
                text="VFAST FBIV infocomm pvt ltd"
              />
            </GoogleMapReact>
          </div> */}
        </div>
      </div>


      <div className="my-2  border-solid  border-white-900 opacity-25 w-1/2 mx-auto" />

      <div class="container mx-auto px-6">

        <div class="sm:flex sm:mt-8">
          <div class="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-evenly">
            <div class="flex flex-col">
              <p>Delhi :</p>
              <a href="https://www.google.com/maps/place/VFAST+-+FBIV+Infocomm+Pvt.+Ltd./@28.6604822,77.2796854,15z/data=!4m5!3m4!1s0x0:0x5726ef0c572a5513!8m2!3d28.6604822!4d77.2796854">  FBIV Infocomm Pvt. Ltd.
          <p > D-2/6 Krishna Nagar,</p>
                <p>East Delhi,</p>
                <p > Delhi-110051</p> </a>
              <div className="contact-item ">
                <p className="font1">
                  <span>
                    <i className="fa fa-phone"></i> Phone <br></br>
                  </span>{" "}
               <a href="tel:+91-11 410 02777">+91-11 410 02777 </a>

              <br />
              <a href="tel:+91-11 455 02777">+91-11 455 02777 </a>
              
            </p>
                <p> <a href="mailto: contact@vfast.in">contact@vfast.in</a></p>
                <p> <a href="mailto: sales@vfast.in">sales@vfast.in</a></p>
              </div>
            </div>
            <div class="flex flex-col">
              <p>Noida :</p>
              <a href="https://www.google.com/maps/place/KLJ+Noida+One/@28.6236111,77.3639636,17z/data=!3m1!4b1!4m5!3m4!1s0x390ce544da5a9ebf:0x4024cbbabd66b412!8m2!3d28.6236064!4d77.3661523">  Noida One Office
          <p > # 419 Noida  </p>
                <p > UP - 201301</p> </a>
              <div className="contact-item ">
                <p className="font1">
                  <span>
                    <i className="fa fa-phone"></i> Phone <br></br>
                  </span>{" "}
                  <a href="tel:+91 9700 120 977">+91 9700 120 977 </a>          
              <br />
              <a href="tel:+91 9700 120 177">+91 9700 120 177</a>         
            </p>
              </div>
            </div>
            <div class="flex flex-col">
              <p>Mumbai : </p>
              <a href="https://www.google.com/maps/place/VFAST/@18.9932535,72.831544,3a,75y,90t/data=!3m8!1e2!3m6!1sAF1QipOWf940oS6onFkieL3dqiTqxAQtAUyZvtyarKzV!2e10!3e12!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipOWf940oS6onFkieL3dqiTqxAQtAUyZvtyarKzV%3Dw203-h152-k-no!7i4032!8i3024!4m19!1m13!4m12!1m4!2m2!1d77.3641491!2d28.59046!4e1!1m6!1m2!1s0x3be7cf6c0ab42f85:0xd83ae05ce75f515a!2sVFAST,+A1-001,+Centre+Point+Condominium,+NM+Joshi+Marg,+Lower+Parel+East,+Mumbai,+Maharashtra+400013!2m2!1d72.8325775!2d18.9933088!3m4!1s0x3be7cf6c0ab42f85:0xd83ae05ce75f515a!8m2!3d18.9933088!4d72.8325775"> A1-001 Centre Point
          <p >N.M Joshi Marg, Lower Parel </p>
                <p >(East) Mumbai 400013 </p> </a>
              <div className="contact-item ">
                <p className="font1">
                  <span>
                    <i className="fa fa-phone"></i> Phone<br></br>
                  </span>{" "}
                  <a href="tel:+91 22 49637877">+91 22 49637877</a>              
            </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
