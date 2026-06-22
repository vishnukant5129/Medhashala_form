import {
  FaGithub,
  FaLinkedin
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t dark:border-slate-800 py-12 px-6">

      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">

        <div>
          <h1 className="text-2xl font-bold text-[#F4B400]">
            Medhashala
          </h1>

          <p className="mt-4 text-slate-500">
            AI-powered productivity platform.
          </p>
        </div>

        <div>
          <h3 className="font-semibold dark:text-white">
            About
          </h3>

          <div className="mt-4 space-y-3 text-slate-500">
            <p>Mission</p>
            <p>Features</p>
            <p>Community</p>
          </div>
        </div>

        <div>
          <h3 className="font-semibold dark:text-white">
            Legal
          </h3>

          <div className="mt-4 space-y-3 text-slate-500">
            <p>Privacy Policy</p>
            <p>Terms</p>
          </div>
        </div>

        <div>
          <h3 className="font-semibold dark:text-white">
            Contact
          </h3>

          <div className="flex gap-5 mt-5 text-2xl">

            <FaLinkedin className="hover:text-[#F4B400] cursor-pointer duration-300" />

            <FaGithub className="hover:text-[#F4B400] cursor-pointer duration-300" />

          </div>
        </div>

      </div>

      <div className="mt-12 text-center text-slate-500">
        © 2026 Medhashala. All rights reserved.
      </div>

    </footer>
  );
}