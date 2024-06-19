import Link from "next/link";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import stars from "../assets/stars.png";
import section1 from "../assets/about_sec1.png";
import section2 from "../assets/about_sec2.png";
import section3 from "../assets/about_sec3.png";
import section4 from "../assets/about_sec4.png";
import vibes1 from "../assets/vibes1.png";
import vibes2 from "../assets/vibes2.png";
import vibes3 from "../assets/vibes3.png";
import vibes4 from "../assets/vibes4.png";
import offer4 from "../assets/offer4.png";
import offer5 from "../assets/offer5.png";
import offer6 from "../assets/offer6.png";
import offer7 from "../assets/offer7.png";
import Image from "next/image";

const page = () => {
  return (
    <>
      <div className="w-full h-full bg-white flex flex-col justify-center items-center py-20">
        <h1 className="mb-1 text-4xl font-medium font-serif text-[#F45044]">
          About
        </h1>
        <div className="flex items-center gap-2">
          <Link href={"/"} className="text-[#F45044]">Home</Link>
          <IoIosArrowForward />
          <Link href={`/about`}>About</Link>
        </div>
      </div>

      <div className="flex flex-col items-center sm:flex-row justify-around py-[5rem] px-5">
        <div>
          <Image
            src={section1}
            className="w-[30rem] h-[20rem] sm:w-[35rem] sm:h-96"
          />
        </div>

        {/* <!-- content - start --> */}
        <div className="flex flex-col justify-center text-left md:w-[40rem]">
          <p className="font-semibold text-[#656565] md:text-lg xl:text-xl flex items-center gap-2 mb-1">
            <Image width={22} src={stars} /> The Focus
          </p>

          <h1 className="mb-1 text-2xl sm:text-3xl font-medium font-serif text-[#F45044]">
            Bridging Connections and Building Communities
          </h1>

          <p className="mb-5 leading-relaxed text-sm md:text-lg text-gray-500 ">
            <span className="text-black ">Welcome to Connectly,</span> your
            go-to social media platform designed to connect like-minded
            individuals and foster meaningful relationships.
          </p>

          <p className="leading-relaxed text-sm md:text-lg text-gray-500 ">
            Whether you're looking to expand your network, share your
            experiences, or simply find people who share your interests,
            Connectly provides the perfect space to do so.
          </p>
        </div>
        {/* <!-- content - end --> */}
      </div>

      <div className="py-6 px-5">
        <section className="flex flex-col justify-between gap-3 sm:gap-10 md:gap-6 lg:flex-row px-4 md:px-8 ">
          {/* <!-- content - start --> */}
          <div className="flex flex-col justify-center text-left lg:py-12 lg:text-left xl:py-24">
            <p className="mb-2 font-semibold text-[#656565] text-sm md:text-lg xl:text-xl flex items-center sm:justify-start gap-2">
              <Image width={22} src={stars} /> The Mission
            </p>

            <h1 className="mb-1 text-3xl font-medium font-serif text-[#F45044] md:mb-3">
              Crafting genuine connections
            </h1>

            <p className="mb-5 text-xs leading-relaxed text-gray-500 lg:w-4/5 xl:text-lg">
              <span className="text-black">At Connectly,</span> our mission is
              to bring people together through a dynamic and interactive
              platform that prioritizes genuine connections and community
              engagement.
            </p>

            <p className="text-xs leading-relaxed text-gray-500 lg:w-4/5 xl:text-lg">
              We <span className="text-black">believe</span> in the power of
              social networking to create positive experiences and opportunities
              for personal and professional growth.
            </p>
          </div>
          {/* <!-- content - end --> */}

          <div>
            <Image src={section2} />
          </div>
        </section>
      </div>

      <div className="py-6 px-5">
        <div className="flex flex-col items-center">
          <p className="font-semibold text-sm text-[#656565] md:text-lg xl:text-xl flex items-center gap-2 mb-1 text-center">
            <Image width={22} src={stars} /> We Offer
          </p>

          <h1 className="mb-1 text-2xl sm:text-4xl font-medium font-serif text-[#F45044]">
            Connectly
          </h1>
        </div>

        {/* <!-- component --> */}
        <section className="my-5">
          <div className="relative mx-auto h-full sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
            <div className="mx-auto max-w-7xl relative">
              <div className="grid grid-cols-1 gap-y-10 gap-x-5 sm:grid-cols-2">
                <div className="bg-white shadow-md shadow-[#EC0D621F] hover:shadow-xl hover:shadow-[#EC0D621F]">
                  <div className="flex justify-between relative">
                    <div className="p-5 flex flex-col w-2/3">
                      <h1 className="text-sm sm:text-2xl font-semibold mb-5">
                        Trending Vibes
                      </h1>
                      <p className="text-xs sm:text-lg">
                        Discover what’s currently sweeping across the platform
                        and hop onto the trend!
                      </p>
                    </div>

                    <Image
                      src={vibes1}
                      className="h-20 w-20 sm:h-32 absolute bottom-0 right-2 sm:w-32"
                    />
                  </div>
                </div>
                <div className="bg-white shadow-md shadow-[#EC0D621F] hover:shadow-xl hover:shadow-[#EC0D621F]">
                  <div className="flex justify-between relative">
                    <div className="p-5 flex flex-col w-2/3">
                      <h1 className="text-sm sm:text-2xl font-semibold mb-5">
                        Friends & Super Vibe
                      </h1>
                      <p className="text-xs sm:text-lg">
                        Find friends and spark connections that really hit the
                        vibe.
                      </p>
                    </div>

                    <Image
                      src={vibes2}
                      className="h-20 w-20 sm:h-32 absolute bottom-0 right-2 sm:w-32"
                    />
                  </div>
                </div>
                <div className="bg-white shadow-md shadow-[#EC0D621F] hover:shadow-xl hover:shadow-[#EC0D621F]">
                  <div className="flex justify-between relative">
                    <div className="p-5 flex flex-col w-2/3">
                      <h1 className="text-sm sm:text-2xl font-semibold mb-5">
                        User Posts Feed
                      </h1>
                      <p className="text-xs sm:text-lg">
                        Stay up-to-date with your friends’ daily escapades
                        through visually appealing post cards.
                      </p>
                    </div>

                    <Image
                      src={vibes3}
                      className="h-20 w-20 sm:h-32 absolute bottom-0 right-2 sm:w-32"
                    />
                  </div>
                </div>
                <div className="bg-white shadow-md shadow-[#EC0D621F] hover:shadow-xl hover:shadow-[#EC0D621F]">
                  <div className="flex justify-between relative">
                    <div className="p-5 flex flex-col w-2/3">
                      <h1 className="text-sm sm:text-2xl font-semibold mb-5">
                        Rich User Profiles
                      </h1>
                      <p className="text-xs sm:text-lg">
                        Create a detailed profile showcasing your interests,
                        experiences, and activities, similar to a Twitter
                        profile, for others to view and engage with.
                      </p>
                    </div>

                    <Image
                      src={offer4}
                      className="h-20 w-20 sm:h-32 absolute bottom-0 right-2 sm:w-32"
                    />
                  </div>
                </div>
                <div className="bg-white shadow-md shadow-[#EC0D621F] hover:shadow-xl hover:shadow-[#EC0D621F]">
                  <div className="flex justify-between relative">
                    <div className="p-5 flex flex-col w-2/3">
                      <h1 className="text-sm sm:text-2xl font-semibold mb-5">
                        Interactive Features
                      </h1>
                      <p className="text-xs sm:text-lg">
                        Like profiles, send friend requests, and interact with
                        posts through likes and comments.
                      </p>
                    </div>

                    <Image
                      src={vibes4}
                      className="h-20 w-20 sm:h-32 absolute bottom-0 right-2 sm:w-32"
                    />
                  </div>
                </div>
                <div className="bg-white shadow-md shadow-[#EC0D621F] hover:shadow-xl hover:shadow-[#EC0D621F]">
                  <div className="flex justify-between relative">
                    <div className="p-5 flex flex-col w-2/3">
                      <h1 className="text-sm sm:text-2xl font-semibold mb-5">
                        Interactive Features
                      </h1>
                      <p className="text-xs sm:text-lg">
                        Like profiles, send friend requests, and interact with
                        posts through likes and comments.
                      </p>
                    </div>

                    <Image
                      src={offer5}
                      className="h-20 w-20 sm:h-32 absolute bottom-0 right-2 sm:w-32"
                    />
                  </div>
                </div>
                <div className="bg-white shadow-md shadow-[#EC0D621F] hover:shadow-xl hover:shadow-[#EC0D621F]">
                  <div className="flex justify-between relative">
                    <div className="p-5 flex flex-col w-2/3">
                      <h1 className="text-sm sm:text-2xl font-semibold mb-5">
                        Real-Time Chat and Video Calls
                      </h1>
                      <p className="text-xs sm:text-lg">
                        Stay connected with friends through instant messaging,
                        group chats, and video calls.
                      </p>
                    </div>

                    <Image
                      src={offer6}
                      className="h-20 w-20 sm:h-32 absolute bottom-0 right-2 sm:w-32"
                    />
                  </div>
                </div>
                <div className="bg-white shadow-md shadow-[#EC0D621F] hover:shadow-xl hover:shadow-[#EC0D621F]">
                  <div className="flex justify-between relative">
                    <div className="p-5 flex flex-col w-2/3">
                      <h1 className="text-sm sm:text-2xl font-semibold mb-5">
                        Group Parties and Events
                      </h1>
                      <p className="text-xs sm:text-lg">
                        Create and join group parties, organize events, and
                        engage in live video sessions with multiple users.
                      </p>
                    </div>

                    <Image
                      src={offer7}
                      className="h-20 w-20 sm:h-32 absolute bottom-0 right-2 sm:w-32"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="bg-white py-6">
        <section className="flex flex-col justify-between gap-3 sm:gap-10 md:gap-6 lg:flex-row px-4 md:px-8 ">
          {/* <!-- content - start --> */}
          <div className="flex flex-col justify-center text-left lg:py-12 lg:text-left xl:py-24">
            <p className="mb-2 font-semibold text-[#656565] text-sm md:text-lg xl:text-xl flex items-center sm:justify-start gap-2">
              <Image width={22} src={stars} /> Connectly Team
            </p>

            <h1 className="mb-1 text-3xl font-medium font-serif text-[#F45044] md:mb-3">
              Meet Your Experts.
            </h1>

            <p className="mb-5 text-xs leading-relaxed text-gray-500 lg:w-4/5 xl:text-lg">
              Connectly is brought to life by a dedicated team of college
              students with a passion for technology and social innovation.
            </p>

            <p className="text-xs leading-relaxed text-gray-500 lg:w-4/5 xl:text-lg">
              With expertise in the MERN stack (MongoDB, Express.js, React.js,
              and Node.js), our developers and designers work collaboratively to
              create a seamless and enjoyable user experience. Guided by our
              project manager, we strive to deliver a platform that meets the
              highest standards of functionality and design.
            </p>
          </div>
          {/* <!-- content - end --> */}

          <div className="">
            <Image src={section3} className="w-[30rem] h-[15rem] sm:w-[115rem] sm:h-96 " />
          </div>
        </section>
      </div>

      <div className="flex flex-col items-center sm:flex-row justify-around py-[5rem] px-5 gap-3">
        <div>
          <Image
            src={section4}
            className="w-[30rem] h-[15rem] sm:w-[35rem] sm:h-96"
          />
        </div>

        {/* <!-- content - start --> */}
        <div className="flex flex-col justify-center text-left md:w-[40rem]">
          <p className="font-semibold text-[#656565] md:text-lg xl:text-xl flex items-center gap-2 mb-1">
            <Image width={22} src={stars} /> Join Now
          </p>

          <h1 className="mb-3 pr-10 capitalize text-2xl sm:text-4xl font-medium font-serif text-[#F45044]">
            Stop being a lone wolf in an interactive cosmos!
          </h1>

          <p className="mb-5 leading-relaxed text-sm md:text-lg text-gray-500 ">
            Embark on a journey of discovery, connection, and growth with
            Connectly. Whether you're looking to make new friends, share your
            passions, or network with professionals, Connectly is here to make
            those connections happen.
          </p>

          <p className="leading-relaxed text-sm md:text-lg text-gray-500 ">
            Thank you for choosing Connectly. Together, let's build a community
            where everyone feels connected and valued.
          </p>
        </div>
        {/* <!-- content - end --> */}
      </div>
    </>
  );
};

export default page;

export const metadata = {
  title: "Connectly - About Us",
  description: "Generated by create next app",
};