import React from "react";
import host from "../assets/images/host.webp";

const HostDetails = () => {
  return (
    <div className="bg-[#f0efe9]">
      <div className="">
        {/* card */}
        <div className="grid grid-cols-3 md:w-96">
          <div className="col-span-2">
            <div>
              <div>
                <img
                  className="rounded-full"
                  width={100}
                  height={100}
                  src={host}
                  alt="host"
                />
              </div>
            </div>
            <div>
              <h1 className="text-3xl font-bold">Sagrario</h1>
              <p className="flex items-center text-sm">
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
          <div className="col-span-1">column-2</div>
        </div>
      </div>
    </div>
  );
};

export default HostDetails;
