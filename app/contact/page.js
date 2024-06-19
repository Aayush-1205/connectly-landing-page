import Link from "next/link";
import React from "react";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import stars from "../assets/stars.png";
import contact from "../assets/contact.png";
import Image from "next/image";

const page = () => {
  return (
    <>
      <div className="w-full h-full bg-white flex flex-col justify-center items-center py-20">
        <h1 className="mb-1 text-4xl font-medium font-serif text-[#F45044]">
          Contact Us
        </h1>
        <div className="flex items-center gap-2">
          <Link href={"/"} className="text-[#F45044]">
            Home
          </Link>
          <IoIosArrowForward />
          <Link href={`/contact`}>Contact Us</Link>
        </div>
      </div>

      <div className="flex flex-col items-center sm:flex-row justify-around py-[5rem] px-10 md:gap-3">
        <div>
          <Image
            src={contact}
            className="w-[25rem] h-[20rem] sm:w-[40rem] sm:h-[30rem]"
          />
        </div>

        {/* <!-- content - start --> */}
        <div className="flex flex-col justify-center text-left md:w-[30rem]">
          <p className="font-semibold text-[#656565] md:text-lg xl:text-xl flex items-center gap-2 mb-4">
            <Image width={22} src={stars} /> Join Now!
          </p>

          <h1 className="mb-5 text-2xl sm:text-3xl font-medium font-serif text-[#F45044]">
            Simply pop in your email & let the best adventures on the cosmos
            land in your inbox.
          </h1>

          <p className="mb-5 leading-relaxed text-xs md:text-sm text-gray-500 ">
            Stop being a lone wolf in an interactive cosmos! Try VibeMatch now
            and bid those lonely spaces adieu.
          </p>

          <div className="flex flex-col gap-5">
            <div className="flex gap-5 w-full">
              <input
                type="text"
                placeholder="First name"
                className="w-full px-3 py-1 border-[1px] border-[#737373] rounded-md"
              />
              <input
                type="text"
                placeholder="Last name"
                className="w-full px-3 py-1 border-[1px] border-[#737373] rounded-md"
              />
            </div>

            <input
              type="email"
              placeholder="Email"
              className="w-full px-3 py-1 border-[1px] border-[#737373] rounded-md"
            />

            <textarea
              rows={5}
              placeholder="Write Message"
              className="w-full px-3 py-1 border-[1px] border-[#737373] rounded-md"
            ></textarea>

            <div>
              <button
                href="#"
                className="flex items-center rounded-full bg-[#00AEF0] px-10 py-3 text-center text-sm font-semibold text-white"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
        {/* <!-- content - end --> */}
      </div>

      <div className="bg-white py-6 px-5">
        <div className="flex flex-col items-center">
          <p className="font-semibold text-sm text-[#656565] md:text-lg xl:text-xl flex items-center gap-2 mb-1 text-center">
            <Image width={22} src={stars} /> The Mission
          </p>

          <h1 className="mb-1 text-2xl sm:text-3xl font-medium font-serif text-[#F45044]">
            Find Your Vibe
          </h1>
        </div>

        <div>
          {/* <!-- component --> */}
          <div class="max-w-screen-xl mx-auto px-5 mt-5 bg-white min-h-sceen">
            <div class="grid grid-cols-2 gap-3 mx-auto">
              <div class="py-2">
                <details class="group bg-[#EDEDED] rounded-lg border-[1px] border-[#D3D3D3] hover:shadow-md hover:shadow-[#EC0D621F]">
                  <summary class="flex justify-between items-center font-medium cursor-pointer list-none px-3 py-4">
                    <span className="text-[#F45044] font-serif">
                      {" "}
                      What is Connectly?
                    </span> 
                    <span class="transition group-open:rotate-180">
                      <IoIosArrowDown />
                    </span>
                  </summary>
                  <hr className="border-[1px] border-[#D3D3D3]" />
                  <p class="text-neutral-600 group-open:animate-fadeIn px-3 py-4">
                    Connectly is a social media platform designed to connect
                    like-minded individuals and foster meaningful relationships.
                    It allows users to filter and find people who share their
                    interests, engage with content through posts and stories,
                    and connect through real-time chat and video calls.
                  </p>
                </details>
              </div>

              <div class="py-2">
                <details class="group bg-[#EDEDED] border-[1px] border-[#D3D3D3] rounded-lg hover:shadow-md hover:shadow-[#EC0D621F]">
                  <summary class="flex justify-between items-center font-medium cursor-pointer list-none px-3 py-4">
                    <span className="text-[#F45044] font-serif">
                      {" "}
                      How do I sign up for Connectly?
                    </span>
                    <span class="transition group-open:rotate-180">
                      <IoIosArrowDown />
                    </span>
                  </summary>
                  <hr className="border-[1px] border-[#D3D3D3]" />
                  <p class="text-neutral-600 group-open:animate-fadeIn px-3 py-4">
                    To sign up for Connectly, visit our landing page and click
                    on the "Get Started" button. You can create an account using
                    your email or sign up through Google verification.
                  </p>
                </details>
              </div>

              <div class="py-2">
                <details class="group bg-[#EDEDED] border-[1px] border-[#D3D3D3] rounded-lg hover:shadow-md hover:shadow-[#EC0D621F]">
                  <summary class="flex justify-between items-center font-medium cursor-pointer list-none px-3 py-4">
                    <span className="text-[#F45044] font-serif">
                      {" "}
                      How do I update my profile information?
                    </span>
                    <span class="transition group-open:rotate-180">
                      <IoIosArrowDown />
                    </span>
                  </summary>
                  <hr className="border-[1px] border-[#D3D3D3]" />
                  <p class="text-neutral-600 group-open:animate-fadeIn px-3 py-4">
                    After logging in, navigate to your profile section. Here,
                    you can update your personal information, add interests, and
                    customize your profile to reflect your preferences.
                  </p>
                </details>
              </div>

              <div class="py-2">
                <details class="group bg-[#EDEDED] border-[1px] border-[#D3D3D3] rounded-lg hover:shadow-md hover:shadow-[#EC0D621F]">
                  <summary class="flex justify-between items-center font-medium cursor-pointer list-none px-3 py-4">
                    <span className="text-[#F45044] font-serif">
                      {" "}
                      How do I connect with other users?
                    </span>
                    <span class="transition group-open:rotate-180">
                      <IoIosArrowDown />
                    </span>
                  </summary>
                  <hr className="border-[1px] border-[#D3D3D3]" />
                  <p class="text-neutral-600 group-open:animate-fadeIn px-3 py-4">
                    You can search for users based on your preferences using the
                    explore feature. Send friend requests to connect with
                    others, and once accepted, you can chat and interact with
                    their posts.
                  </p>
                </details>
              </div>

              <div class="py-2">
                <details class="group bg-[#EDEDED] border-[1px] border-[#D3D3D3] rounded-lg hover:shadow-md hover:shadow-[#EC0D621F]">
                  <summary class="flex justify-between items-center font-medium cursor-pointer list-none px-3 py-4">
                    <span className="text-[#F45044] font-serif">
                      {" "}
                      How can I participate in group parties and events?
                    </span>
                    <span class="transition group-open:rotate-180">
                      <IoIosArrowDown />
                    </span>
                  </summary>
                  <hr className="border-[1px] border-[#D3D3D3]" />
                  <p class="text-neutral-600 group-open:animate-fadeIn px-3 py-4">
                    You can create or join group parties through the dedicated
                    section in the app. Organize events, invite friends, and
                    engage in live video sessions with multiple users.
                  </p>
                </details>
              </div>

              <div class="py-2">
                <details class="group bg-[#EDEDED] border-[1px] border-[#D3D3D3] rounded-lg hover:shadow-md hover:shadow-[#EC0D621F]">
                  <summary class="flex justify-between items-center font-medium cursor-pointer list-none px-3 py-4">
                    <span className="text-[#F45044] font-serif">
                      {" "}
                      How do I report inappropriate content or users?
                    </span>
                    <span class="transition group-open:rotate-180">
                      <IoIosArrowDown />
                    </span>
                  </summary>
                  <hr className="border-[1px] border-[#D3D3D3]" />
                  <p class="text-neutral-600 group-open:animate-fadeIn px-3 py-4">
                    You can report inappropriate content or users through the
                    reporting feature available on posts and profiles. Our team
                    will review the reports and take appropriate action.
                  </p>
                </details>
              </div>

              <div class="py-2">
                <details class="group bg-[#EDEDED] border-[1px] border-[#D3D3D3] rounded-lg hover:shadow-md hover:shadow-[#EC0D621F]">
                  <summary class="flex justify-between items-center font-medium cursor-pointer list-none px-3 py-4">
                    <span className="text-[#F45044] font-serif">
                      {" "}
                      How does the real-time chat and video calling work?
                    </span>
                    <span class="transition group-open:rotate-180">
                      <IoIosArrowDown />
                    </span>
                  </summary>
                  <hr className="border-[1px] border-[#D3D3D3]" />
                  <p class="text-neutral-600 group-open:animate-fadeIn px-3 py-4">
                    Our platform uses WebSocket/Socket.io for real-time
                    communication. You can chat with your friends instantly and
                    initiate video calls directly from the chat interface.
                  </p>
                </details>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;

export const metadata = {
  title: "Connectly - Contact Us",
  description: "Generated by create next app",
};