import React from "react";
import avatar from "../assets/images/placeholder.jpg";

const RoomDetails = () => {
  return (
    <div>
      <div class="grid grid-cols-3 gap-2">
        <div className="col-span-2">
          <div className="flex justify-between">
            <div>Room in a rental unit hosted by Sagrario</div>
            <div className="w-10">
              <img className=" rounded-full" src={avatar} alt="avatar" />
            </div>
          </div>

          <section class=" body-font">
            <div class="container py-5 mx-auto">
              <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                <div class="border-2 rounded-xl items-center border-r-2 p-4 md:w-1/3 flex">
                  <div class="w-12 h-12 inline-flex items-center justify-center rounded-full flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                      role="presentation"
                      focusable="false"
                      style={{
                        display: "block",
                        height: "24px",
                        width: "24px",
                        fill: "currentcolor",
                      }}
                    >
                      <path d="M26 4a2 2 0 0 1 2 1.85v7.99l1.85 5.54a3 3 0 0 1 .11.46l.03.24.01.24V30h-2v-2H4v2H2v-9.68a3 3 0 0 1 .09-.71l.06-.23L4 13.84V6a2 2 0 0 1 1.7-1.98l.15-.01L6 4zm2 18H4v4h24zm-1.39-6H5.4l-1.34 4h23.9zM26 6H6v8h2v-4a2 2 0 0 1 1.85-2H22a2 2 0 0 1 2 1.85V14h2zm-11 4h-5v4h5zm7 0h-5v4h5z"></path>
                    </svg>
                  </div>
                  <div class="flex-grow">1 double bed</div>
                </div>
                <div class="border-2 rounded-xl items-center p-4 md:w-1/3 flex">
                  <div class="w-12 h-12 inline-flex items-center justify-center rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-6 h-6"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="6" cy="6" r="3"></circle>
                      <circle cx="6" cy="18" r="3"></circle>
                      <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                    </svg>
                  </div>
                  <div class="flex-grow">Shared bathroom</div>
                </div>
                <div class="border-2 rounded-xl items-center p-4 md:w-1/3 flex">
                  <div class="w-12 h-12 inline-flex items-center justify-center rounded-full  flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-6 h-6"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                  <div class="flex-grow">Host and other guests may be here</div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="col-span-1">2</div>
      </div>
    </div>
  );
};

export default RoomDetails;
