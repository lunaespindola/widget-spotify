"use client"; // Mark the component as a Client Component
import Image from "next/image";
import LatinCover from "../../public/img/latin_cover.jpg";


export default function SpotifyWidget() {

  const token = process.env.NEXT_PUBLIC_AUTH_TOKEN;

  return (
    <div className="relative min-h-screen bg-gradient-to-tr from-purple-500 via-pink-300 to-yellow-200 flex justify-center items-center">
      {/* Spotify Widget */}
      <div className="w-96 p-4 bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg flex items-center space-x-4">
        {/* Album Cover */}
        <div className="w-16 h-16 rounded-lg overflow-hidden">
          <Image
            src={LatinCover}
            alt="Album cover"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Song Info */}
        <div className="flex flex-col flex-grow">
          <h3 className="text-lg font-semibold text-gray-800">Episode 23</h3>
          <p className="text-sm text-gray-600">She has her ways</p>
          {/* Progress Bar */}
          <div className="mt-2">
            <input
              type="range"
              className="w-full h-1 rounded-lg bg-gray-300 accent-green-500"
            />
          </div>
        </div>
        {/* Playback Buttons */}
        <div className="flex space-x-2 text-rose-400">
          <button onClick={() => console.log(token)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3.75 12l6.75-7.5M21 19.5L14.25 12l6.75-7.5"
              />
            </svg>
          </button>
          <button onClick={() => console.log(token)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18V6m12 12V6"
              />
            </svg>
          </button>
          <button onClick={() => console.log("Next")}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L20.25 12l-6.75 7.5M3 4.5L9.75 12 3 19.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
