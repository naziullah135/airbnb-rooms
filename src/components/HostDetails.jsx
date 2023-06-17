import React from "react";
import host from "../assets/images/host.webp";

const HostDetails = () => {
  return (
    <div className="bg-[#f0efe9] pb-5">
    <div className="flex justify-center">
      {/* card */}
      <div className=" bg-white w-96 flex justify-between px-8 py-6 rounded-xl shadow-2xl mt-8">
        <div className="mx-auto">
          <div>
            <div class="relative inline-block">
              <img
                class="rounded-full"
                width="100"
                height="100"
                src={host}
                alt="host"
              />
              <span class="absolute top-20 right-3 transform translate-x-1/2 -translate-y-1/2 bg-pink-500 text-white text-sm px-2 py-1 rounded-full">
                &#x2713;
              </span>
            </div>
            <div>
              <h1 className="text-3xl font-bold py-2">Sagrario</h1>
              <p className="flex items-center text-sm font-semibold" >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    aria-hidden="true"
                    role="presentation"
                    focusable="false"
                    style={{
                      display: "block",
                      height: "12px",
                      width: "12px",
                      fill: "currentcolor",
                    }}
                  >
                    <path d="m8.5 7.6 3.1-1.75 1.47-.82a.83.83 0 0 0 .43-.73V1.33a.83.83 0 0 0-.83-.83H3.33a.83.83 0 0 0-.83.83V4.3c0 .3.16.59.43.73l3 1.68 1.57.88c.35.2.65.2 1 0zm-.5.9a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z"></path>
                  </svg>
                </span>
                Superhost
              </p>
            </div>
          </div>
        </div>
        <div className="w-1/3">
          <div>
            <h2 className="text-2xl font-semibold">316</h2>
            <small className="pb-2 font-semibold">Reviews</small>
          </div>
          <hr />
          <div>
            <h2 className="text-2xl font-semibold">4.86</h2>
            <small className="pb-2 font-semibold">Rating</small>
          </div>
          <hr />
          <div>
            <h2 className="text-2xl font-semibold">6</h2>
            <small className="pb-2 font-semibold">Years hosting</small>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default HostDetails;
