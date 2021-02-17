import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import Axios from "axios";

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
          GET IN TOUCH
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
          <div className="font"> Contact Info</div>
          <div
            className="fa fa-map-marker"
            style={{ fontSize: "18px" }}
          ></div>{" "}
          Registered Office : FBIV Infocomm Pvt. Ltd.
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
          </div>
          <div className="contact-item font1">
            <span>
              <i className="fa fa-envelope-o"></i> Email
            </span>{" "}
            <a href="mailto:info@vfast.in">: info@vfast.in</a>
          </div>
          <div style={{ height: "27vh", width: "80%" }}>
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
          </div>
        </div>
      </div>

      {/* <div className="block justify-center item">
        <div className="block md: flex grid grid-cols-4 justify-between">
          <ul className=" mx-auto md:flex col-start-2 col-span-2">
            <li>
              <a
                href="https://www.facebook.com/www.vfast.in/"
                className="md:m-6"
              >
                <i className="fa fa-facebook fa-2x"></i>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/VFAST_IN" className="md:m-6">
                <i className="fa fa-twitter fa-2x"></i>
              </a>
            </li>
            <li>
              <a
                href="https://in.pinterest.com/pin/819444094682129972/"
                className="md:m-6"
              >
                <i className="fa fa-pinterest fa-2x"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/vfast.in/?igshid=udh0i53a85ww"
                className="md:m-6"
              >
                <i className="fa fa-instagram fa-2x"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/authwall?trk=gf&trkInfo=AQHExrOAglby_wAAAXZHoXfILabnDG7p4NRWvDLHbBHhJCsITf1nP_R1m3F3rcIxTWcdVfsiYPj0Y_hO9SanLPT92bMwV5_2CgEh3E5BfFr5WoAB12Zk6Svek0Y415inN6ziel0=&originalReferer=http://vfast.co.in/&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fvfast"
                className="md:m-6"
              >
                <i className="fa fa-linkedin fa-2x"></i>
              </a>
            </li>
            <li>
              <a href="https://vfastverify.tumblr.com/" className="md:m-6">
                <i className="fa fa-tumblr fa-2x"></i>
              </a>
            </li>
          </ul>
        </div>
        </div> */}
      <div className="my-2  border-solid  border-white-900 opacity-25 w-1/2 mx-auto" />
      <p className="flex justify-center mx-auto text-sm md:text-4xl">
        {/* Copyright &copy; 2021 All Rights Reserved @ VFAST */}

      </p>
    </div>

  );
};

export default Contact;
