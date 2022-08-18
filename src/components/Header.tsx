import { BsBookHalf, BsClipboard } from 'react-icons/bs';

import Logo from '../assets/bootstrap-logo-shadow.png';

const Header = () => {
  return (
    <div className="header__gradient px-6 lg:p-0">
      <div className="w-full md:w-[60%] mx-auto pt-28 flex flex-col items-center">
        <div className="flex flex-col lg:flex-row items-center gap-3">
          <button className="bg-[#ffe484] font-bold py-[6px] px-2 rounded-md shadow">
            New in v5.2
          </button>
          <p className="text-gray-500">
            CSS variables, responsive offcanvas, new utilities, and more!
          </p>
        </div>
        <div className="w-[200px] height-[165px] my-4">
          <img
            src={Logo}
            alt="Bootstrap"
            className="w-full h-ful object-cover"
          />
        </div>
        <h1 className="header-h1 mb-2 text-center font-semibold leading-none">
          Build fast, responsive sites with Bootstrap
        </h1>
        <p className="my-2 text-[16px] text-center  text-gray-500 leading-[1.5]">
          Powerful, extensible, and feature-packed frontend toolkit. Build and
          customize with Sass, utilize prebuilt grid system and components, and
          bring projects to life with powerful JavaScript plugins.
        </p>
        <div className="mt-4 flex flex-col lg:justify-center lg:flex-row lg:items-center gap-4 w-full">
          <div className="relative p-4 rounded bg-code flex items-center justify-center gap-2 text-center pr-16 h-[60px]">
            <span className="select-none text-gray-500">$</span>
            <code>npm i bootstrap@5.2.0</code>
            <span className="absolute top-[18px] right-5 z-[1]">
              <BsClipboard className="cursor-pointer hover:text-[#0d6efd] text-xl" />
            </span>
          </div>
          <button
            onClick={() =>
              navigator.clipboard.writeText('npm i bootstrap@5.2.0')
            }
            className="bg-primary text-center w-full lg:w-auto text-white flex items-center justify-center gap-2 text-xl font-semibold py-4 px-8 rounded-md shadow hover:bg-[#6528e0]"
          >
            <BsBookHalf />
            Read the docs
          </button>
        </div>
        <p className="mt-4 flex items-center gap-2 text-gray-500">
          Currently <span className="font-semibold">v5.2.0</span> ·{' '}
          <span className="underline hover:text-gray-600 cursor-pointer">
            Download
          </span>{' '}
          ·{' '}
          <span className="underline hover:text-gray-600 cursor-pointer">
            v4.6.x docs
          </span>{' '}
          ·
          <span className="underline hover:text-gray-600 cursor-pointer">
            All releases
          </span>
        </p>
      </div>
    </div>
  );
};

export default Header;
