import { BsBoxSeam, BsClipboard, BsGlobe, BsCheck2 } from 'react-icons/bs';
import { useState } from 'react';
import Webpack from '../assets/webpack.png';
import Parcel from '../assets/parcel.png';
import Vite from '../assets/vite.png';

const Installation = () => {
  const [clipboard, setClipboard] = useState('Copy to clipboard');
  const [clipboard2, setClipboard2] = useState('Copy to clipboard');
  const [clipboard3, setClipboard3] = useState('Copy to clipboard');
  const [clipboard4, setClipboard4] = useState('Copy to clipboard');
  return (
    <>
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-0 w-full px-6 lg:px-0 lg:w-[90%] mx-auto">
        <div className="w-full lg:w-[47%] flex flex-col gap-4 items-start ">
          <BsBoxSeam className="text-3xl text-gray-500" />
          <h1 className="text-2xl lg:text-3xl font-medium">
            Install via package manager
          </h1>
          <p>
            Install Bootstrap’s source Sass and JavaScript files via npm,
            RubyGems, Composer, or Meteor. Package managed installs don’t
            include documentation or our full build scripts. You can also{' '}
            <span className="text-blue-600 underline inline-block hover:text-blue-800 cursor-pointer">
              use our npm template repo
            </span>{' '}
            to quickly generate a Bootstrap project via npm.
          </p>

          <div className="w-full relative z-[1] p-4 rounded bg-[#f8f9fa] flex items-center justify-start gap-2 text-center pr-16 h-[60px] text-sm">
            <span className="select-none text-gray-500">$</span>
            <code>npm i bootstrap@5.2.0</code>
            <span
              className="absolute top-[18px] right-5 hidden md:block"
              onClick={() => {
                navigator.clipboard.writeText('npm i bootstrap@5.2.0');
                setClipboard3('Copied!');
                setTimeout(() => setClipboard3('Copy to clipboard'), 2000);
              }}
            >
              {clipboard3 === 'Copied!' ? (
                <BsCheck2 className="text-xl cursor-pointer hover:text-[#0d6efd] peer" />
              ) : (
                <BsClipboard className="cursor-pointer hover:text-[#0d6efd] text-xl peer" />
              )}

              <span
                className={`peer-hover:block tooltip hidden absolute -top-10 -left-14 
                 w-[130px]
                rounded bg-black text-white p-1 text-sm`}
              >
                {clipboard3}
              </span>
            </span>
          </div>
          <div className="w-full relative z-[1] p-4 rounded bg-[#f8f9fa] flex items-center justify-start gap-2 text-center pr-16 h-[60px] text-sm">
            <span className="select-none text-gray-500">$</span>
            <code>gem install bootstrap -v 5.2.0</code>
            <span
              className="absolute top-[18px] right-5 hidden md:block"
              onClick={() => {
                navigator.clipboard.writeText('gem install bootstrap -v 5.2.0');
                setClipboard4('Copied!');
                setTimeout(() => setClipboard4('Copy to clipboard'), 2000);
              }}
            >
              {clipboard4 === 'Copied!' ? (
                <BsCheck2 className="text-xl cursor-pointer hover:text-[#0d6efd] peer" />
              ) : (
                <BsClipboard className="cursor-pointer hover:text-[#0d6efd] text-xl peer" />
              )}

              <span
                className={`peer-hover:block tooltip hidden absolute -top-10 -left-14 
                 w-[130px]
                rounded bg-black text-white p-1 text-sm`}
              >
                {clipboard4}
              </span>
            </span>
          </div>
          <p>
            <span className="text-blue-600 underline inline-block hover:text-blue-800 cursor-pointer">
              Read our installation docs
            </span>{' '}
            for more info and additional package managers.
          </p>
        </div>
        <div className="bg-gray-200  w-[1px] hidden md:block mx-12"></div>
        <div className="w-full lg:w-[47%] flex flex-col gap-4 items-start">
          <BsGlobe className="text-3xl text-gray-500" />
          <h1 className="text-2xl lg:text-3xl font-medium">Include via CDN</h1>
          <p className="w-full lg:w-[85%]">
            When you only need to include Bootstrap’s compiled CSS or JS, you
            can use{' '}
            <span className="text-blue-600 underline inline-block hover:text-blue-800 cursor-pointer">
              jsDelivr
            </span>
            . See it in action with our simple{' '}
            <span className="text-blue-600 underline inline-block hover:text-blue-800 cursor-pointer">
              quick start
            </span>
            , or{' '}
            <span className="text-blue-600 underline inline-block hover:text-blue-800 cursor-pointer">
              browse the examples
            </span>{' '}
            to jumpstart your next project. You can also choose to include
            Popper and our JS{' '}
            <span className="text-blue-600 underline inline-block hover:text-blue-800 cursor-pointer">
              separately
            </span>
            .
          </p>

          <div className="w-full relative z-[1] p-4 pr-12 rounded bg-[#f8f9fa] flex items-center justify-start gap-2 text-center text-sm">
            <pre className="overflow-auto">
              <code className="text-left language-html flex flex-col">
                &lt;!-- CSS only --&gt;
                <span className="overflow-auto whitespace-nowrap">
                  &lt;
                  <span className="orange">link </span>
                  <span className="purple">href</span>
                  ="
                  <span className="blue">
                    https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css
                  </span>
                  " <span className="purple">rel</span>="
                  <span className="blue">stylesheet</span>"
                  <span className="purple"> integrity</span>
                  ="
                  <span className="blue">
                    sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx
                  </span>
                  " <span className="purple">crossorigin</span>
                  ="<span className="blue">anonymous</span>"&gt;
                </span>
              </code>
            </pre>

            <span
              className="absolute top-[18px] right-5 hidden md:block"
              onClick={() => {
                navigator.clipboard.writeText(`<!-- CSS only -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">`);
                setClipboard('Copied!');
                setTimeout(() => setClipboard('Copy to clipboard'), 2000);
              }}
            >
              {clipboard === 'Copied!' ? (
                <BsCheck2 className="text-xl cursor-pointer hover:text-[#0d6efd] peer" />
              ) : (
                <BsClipboard className="cursor-pointer hover:text-[#0d6efd] text-xl peer" />
              )}

              <span
                className={`peer-hover:block tooltip hidden absolute -top-10 -left-14 
                 w-[130px]
                rounded bg-black text-white p-1 text-sm`}
              >
                {clipboard}
              </span>
            </span>
          </div>
          <div className="w-full relative z-[1] p-4 pr-12 rounded bg-[#f8f9fa] flex items-center justify-start gap-2 text-center text-sm">
            <pre className="overflow-auto">
              <code className="text-left language-html flex flex-col">
                &lt;!-- JavaScript Bundle with Popper --&gt;
                <span className="overflow-auto whitespace-nowrap">
                  &lt;
                  <span className="orange">script</span>
                  <span className="purple"> src</span>
                  ="
                  <span className="blue">
                    https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js
                  </span>
                  "<span className="purple"> integrity</span> ="
                  <span className="blue">
                    sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa
                  </span>
                  "<span className="purple"> crossorigin</span>="
                  <span className="blue">anonymous</span>" &gt;&lt;/
                  <span className="orange">script</span>&gt;
                </span>
              </code>
            </pre>

            <span
              className="absolute top-[18px] right-5 hidden md:block"
              onClick={() => {
                navigator.clipboard
                  .writeText(`<!-- JavaScript Bundle with Popper -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>`);
                setClipboard2('Copied!');
                setTimeout(() => setClipboard2('Copy to clipboard'), 2000);
              }}
            >
              {clipboard2 === 'Copied!' ? (
                <BsCheck2 className="text-xl cursor-pointer hover:text-[#0d6efd] peer" />
              ) : (
                <BsClipboard className="cursor-pointer hover:text-[#0d6efd] text-xl peer" />
              )}

              <span
                className={`peer-hover:block tooltip hidden absolute -top-10 -left-14 
                 w-[130px]
                rounded bg-black text-white p-1 text-sm`}
              >
                {clipboard2}
              </span>
            </span>
          </div>
        </div>
      </div>
      <div className="mt-12 w-full px-6 lg:w-[90%] mx-auto lg:px-0 flex flex-col items-center">
        <h1 className="text-2xl font-medium">
          Read our getting started guides
        </h1>
        <p className="mt-2 mb-6 text-center">
          Get a jump on including Bootstrap's source files in a new project with
          our official guides.
        </p>
        <ul className="flex gap-6 items-center text-gray-500">
          <li className="flex flex-col items-center cursor-pointer">
            <img
              className="w-[4.5rem] h-[4.5rem] object-cover"
              src={Webpack}
              alt="Webpack"
            />
            <h2>Webpack</h2>
          </li>
          <li className="flex flex-col items-center cursor-pointer">
            <img
              className="w-[4.5rem] h-[4.5rem] object-cover"
              src={Parcel}
              alt="Parcel"
            />
            <h2>Parcel</h2>
          </li>
          <li className="flex flex-col items-center cursor-pointer">
            <img
              className="w-[4.5rem] h-[4.5rem] object-cover"
              src={Vite}
              alt="Vite"
            />
            <h2>Vite</h2>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Installation;
