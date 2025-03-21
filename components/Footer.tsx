// components/Footer.js
export default function Footer() {
  return (
    <footer
      className="bg-gray-800 text-white py-6 border-t-[4px] border-t-[#46000C]"
      dir="ltr"
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Instagram Link Section */}
        <div className="flex items-center space-x-2">
          <a
            href="https://www.instagram.com/hoffen.ir"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:text-gray-400"
          >
            {/* Instagram Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              width="26"
              height="26"
            >
              <path d="M8.25 2.25h7.5a6 6 0 016 6v7.5a6 6 0 01-6 6h-7.5a6 6 0 01-6-6v-7.5a6 6 0 016-6z" />
              <path d="M15.75 11.25a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
              <circle cx="17.25" cy="6.75" r="1.125" />
            </svg>
            {/* Text */}
            <span>هفن را در اینستاگرم دنبال کنید</span>
          </a>
        </div>

        {/* Navigation Links */}
        <nav className="flex space-x-6 gap-[18px]">
          <a href="/" className="hover:text-gray-400">
            خانه
          </a>
          <a href="/about" className="hover:text-gray-400">
            درباره ما
          </a>
        </nav>
      </div>

      {/* Copyright */}
      <div className="text-center mt-4">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Hoffen. All Rights Reserved.
        </p>
      </div>
      <a
        referrerPolicy="origin"
        target="_blank"
        href="https://trustseal.enamad.ir/?id=591219&Code=2aF6lcw64I594GWxFiud2m6Wc2zHIad0"
      >
        <img
          referrerPolicy="origin"
          src="https://trustseal.enamad.ir/logo.aspx?id=591219&Code=2aF6lcw64I594GWxFiud2m6Wc2zHIad0"
          alt=""
          code="2aF6lcw64I594GWxFiud2m6Wc2zHIad0"
          style={{cursor:'pointer'}}
        />
      </a>
    </footer>
  );
}
