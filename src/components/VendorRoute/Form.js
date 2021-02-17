import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { useParams } from "react-router-dom";


const Form = (props) => {
  let color = "gray";
  const [openTab, setOpenTab] = React.useState(1);
  const { id } = useParams();

  const [other, setOther] = useState({
    a: "",
    b: "",
    c: "",
    d: "",
    e: "",
    f: "",
    g: "",
    h: "",
  });
  let { a, b, c, d, e, f, g, h } = other;

  const onsubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("other", a);
    formData.append("other", b);

    try {
      const res = await axios.put(
        `http://192.168.1.18:5000/api/v1/vendor/updatebyvendor/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(res);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div className="flex flex-wrap justify-center">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 1
                    ? "text-white bg-" + color + "-600"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Custom Form
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 2
                    ? "text-white bg-" + color + "-600"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                Vfast Form
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <form onSubmit={(e) => onsubmit(e)}>
                    <div className="block mx-auto md:flex">
                      <label class="w-64 h-44 mx-auto flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-gray-900">
                        {!a ?<div className="block align-middle">
                          <svg
                            class="w-8 h-8"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                          </svg>
                          <span class="mt-2 text-base leading-normal">
                            Select a file
                          </span>
                        </div> : <img src={URL.createObjectURL(a)} className='w-64 h-full' />}

                        <input
                          type="file"
                          name="a"
                          class="hidden"
                          accept="image/*"
                          capture="user"
                          onChange={(e) =>
                            setOther({
                              ...other,
                              [e.target.name]: e.target.files[0],
                            })
                          }
                        />
                      </label>

                      <label class="w-64 h-44 mx-auto flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-gray-900">
                        {!b ? <div className="block align-middle">
                          <svg
                            class="w-8 h-8"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                          </svg>
                          <span class="mt-2 text-base leading-normal">
                            Select a file
                          </span>
                        </div>: <img src={URL.createObjectURL(b)} className='w-64 h-full' />}

                        <input
                          type="file"
                          name="b"
                          class="hidden"
                          accept="image/*"
                          capture="user"
                          onChange={(e) =>
                            setOther({
                              ...other,
                              [e.target.name]: e.target.files[0],
                            })
                          }
                        />
                      </label>

                      {/* <label class="w-64 h-44 mx-auto flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-gray-900">
                        <div className='block align-middle'><svg
                        class="w-8 h-8"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                      </svg>
                      <span class="mt-2 text-base leading-normal">
                        Select a file
                      </span></div> 
                       
                        <input
                          type="file"
                          name="c"
                          class="hidden"
                          accept = "image/*"
                          capture='user'
                         // onChange={(e) => submitother(e)}
                        />
                      </label> */}
                    </div>
                    {/* <div className='block mx-auto md:flex'>
                <label class="w-64 h-44 mx-auto flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-gray-900">
                        <div className='block align-middle'><svg
                        class="w-8 h-8"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                      </svg>
                      <span class="mt-2 text-base leading-normal">
                        Select a file
                      </span></div> 
                       
                        <input
                          type="file"
                          name="a"
                          class="hidden"
                          accept = "image/*"
                          capture='user'
                         // onChange={(e) => submitother(e)}
                        />
                      </label>
                
                      <label class="w-64 h-44 mx-auto flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-gray-900">
                        <div className='block align-middle'><svg
                        class="w-8 h-8"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                      </svg>
                      <span class="mt-2 text-base leading-normal">
                        Select a file
                      </span></div> 
                       
                        <input
                          type="file"
                          name="d"
                          class="hidden"
                          accept = "image/*"
                          capture='user'
                         // onChange={(e) => submitother(e)}
                        />
                      </label>
                
                      <label class="w-64 h-44 mx-auto flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-gray-900">
                        <div className='block align-middle'><svg
                        class="w-8 h-8"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                      </svg>
                      <span class="mt-2 text-base leading-normal">
                        Select a file
                      </span></div> 
                       
                        <input
                          type="file"
                          name="e"
                          class="hidden"
                          accept = "image/*"
                          capture='user'
                         // onChange={(e) => submitother(e)}
                        />
                      </label>
                
                      </div> */}
                    {/* <div className='block mx-auto md:flex'>
                <label class="w-64 h-44 mx-auto flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-gray-900">
                        <div className='block align-middle'><svg
                        class="w-8 h-8"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                      </svg>
                      <span class="mt-2 text-base leading-normal">
                        Select a file
                      </span></div> 
                       
                        <input
                          type="file"
                          name="f"
                          class="hidden"
                          accept = "image/*"
                          capture='user'
                         // onChange={(e) => submitother(e)}
                        />
                      </label>
                
                      <label class="w-64 h-44 mx-auto flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-gray-900">
                        <div className='block align-middle'><svg
                        class="w-8 h-8"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                      </svg>
                      <span class="mt-2 text-base leading-normal">
                        Select a file
                      </span></div> 
                       
                        <input
                          type="file"
                          name="g"
                          class="hidden"
                          accept = "image/*"
                          capture='user'
                         // onChange={(e) => submitother(e)}
                        />
                      </label>
                
                      <label class="w-64 h-44 mx-auto flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-gray-900">
                        <div className='block align-middle'><svg
                        class="w-8 h-8"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                      </svg>
                      <span class="mt-2 text-base leading-normal">
                        Select a file
                      </span></div> 
                       
                        <input
                          type="file"
                          name="h"
                          class="hidden"
                          accept = "image/*"
                          capture='user'
                         // onChange={(e) => submitother(e)}
                        />
                      </label>
                
                      </div> */}
                    <button type="submit"> submit</button>
                  </form>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <p>
                    Completely synergize resource taxing relationships via
                    premier niche markets. Professionally cultivate one-to-one
                    customer service with robust ideas.
                    <br />
                    <br />
                    Dynamically innovate resource-leveling customer service for
                    state of the art customer service.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Form.propTypes = {};

export default Form;
