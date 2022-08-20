import { BsClipboard, BsPalette2 } from 'react-icons/bs';

const Customize = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start   w-full px-6 lg:px-0 lg:w-[90%] mx-auto my-12">
        <div className="w-full flex flex-col gap-4 items-start">
          <div className="bg-blue-600/10 text-blue-600 p-4 py-5 rounded-xl flex ">
            <BsPalette2 className="text-4xl" />
          </div>
          <h1 className="section-h1 font-semibold leading-[1.2]">
            Customize everything with Sass
          </h1>
          <p className=" text-[1rem] md:text-lg lg:text-xl w-full lg:w-[60%]">
            Bootstrap utilizes Sass for a modular and customizable architecture.
            Import only the components you need, enable global options like
            gradients and shadows, and write your own CSS with our variables,
            maps, functions, and mixins.
          </p>
          <span className="flex items-center text-blue-600 font-medium cursor-pointer text-[1rem] md:text-lg lg:text-xl pb-2 hover:text-blue-800 peer">
            <span className="border-b-2 border-blue-400">
              Learn more about customizing{' '}
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </span>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 w-full px-6 lg:px-0 lg:w-[90%] mx-auto">
        <div className="w-wfull lg:w-1/2 flex flex-col gap-2 items-start ">
          <h1 className="text-2xl lg:text-3xl font-medium">
            Include all of Bootstrap’s Sass
          </h1>
          <p>
            Import one stylesheet and you're off to the races with every feature
            of our CSS.
          </p>

          <div className="w-full relative z-[1] p-4 rounded bg-[#f8f9fa] flex items-center justify-start gap-2 text-center pr-16 text-sm">
            <pre className="overflow-auto">
              <code className="text-left language-css flex flex-col">
                <span className="text-gray-500">
                  &#47;&#47; Variable overrides first
                </span>
                <span>
                  <span className="orange">$primary</span>:{' '}
                  <span className="teal">#900</span>;
                </span>
                <span>
                  <span className="orange">$enable-shadows</span>:{' '}
                  <span className="orange">true</span>;
                </span>
                <span>
                  <span className="orange">$prefix</span>:
                  <span className="blue">"mo-"</span>;
                </span>
                <br />
                <span className="text-gray-500">
                  &#47;&#47; Then import Bootstrap
                </span>
                <span>
                  <span className="import">@import</span>{' '}
                  <span className="blue">
                    "../node_modules/bootstrap/scss/bootstrap"
                  </span>
                  ;
                </span>
              </code>
            </pre>

            <span
              className="absolute top-[18px] hidden md:block right-5"
              onClick={() =>
                navigator.clipboard.writeText(`// Variable overrides first
$primary: #900;
$enable-shadows: true;
$prefix: "mo-";

// Then import Bootstrap
@import "../node_modules/bootstrap/scss/bootstrap";`)
              }
            >
              <BsClipboard className="cursor-pointer hover:text-[#0d6efd] text-lg" />
            </span>
          </div>

          <p>
            Learn more about our{' '}
            <span className="text-blue-600 underline inline-block hover:text-blue-800 cursor-pointer">
              global Sass options.
            </span>
          </p>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col gap-2 items-start">
          <h1 className="text-2xl lg:text-3xl font-medium">
            Include what you need
          </h1>
          <p className="w-full lg:w-[85%]">
            The easiest way to customize Bootstrap—include only the CSS you
            need.{' '}
          </p>

          <div className="w-full relative z-[1] p-4 rounded bg-[#f8f9fa] flex items-center justify-start gap-2 text-center pr-16 text-sm">
            <pre className="overflow-auto">
              <code className="text-left language-css flex flex-col">
                <span className="text-gray-500">
                  &#47;&#47; Functions first
                </span>
                <span>
                  <span className="import">@import</span>{' '}
                  <span className="blue">
                    "../node_modules/bootstrap/scss/functions"
                  </span>
                  ;
                </span>
                <br />
                <span className="text-gray-500">
                  &#47;&#47; Variable overrides Second
                </span>
                <span>
                  <span className="orange">$primary</span>:{' '}
                  <span className="teal">#900</span>;
                </span>
                <span>
                  <span className="orange">$enable-shadows</span>:{' '}
                  <span className="orange">true</span>;
                </span>
                <span>
                  <span className="orange">$prefix</span>:
                  <span className="blue">"mo-"</span>;
                </span>
                <br />
                <span className="text-gray-500">
                  &#47;&#47; Required Bootstrap imports
                </span>
                <span>
                  <span className="import">@import</span>{' '}
                  <span className="blue">
                    "../node_modules/bootstrap/scss/variables"
                  </span>
                  ;
                </span>
                <span>
                  <span className="import">@import</span>{' '}
                  <span className="blue">
                    "../node_modules/bootstrap/scss/maps"
                  </span>
                  ;
                </span>
                <span>
                  <span className="import">@import</span>{' '}
                  <span className="blue">
                    "../node_modules/bootstrap/scss/mixins"
                  </span>
                  ;
                </span>
                <span>
                  <span className="import">@import</span>{' '}
                  <span className="blue">
                    "../node_modules/bootstrap/scss/root"
                  </span>
                  ;
                </span>
                <br />
                <span className="text-gray-500">
                  &#47;&#47; Optional components
                </span>
                <span>
                  <span className="import">@import</span>{' '}
                  <span className="blue">
                    "../node_modules/bootstrap/scss/utilities"
                  </span>
                  ;
                </span>
                <span>
                  <span className="import">@import</span>{' '}
                  <span className="blue">
                    "../node_modules/bootstrap/scss/reboot"
                  </span>
                  ;
                </span>
                <span>
                  <span>
                    <span className="import">@import</span>{' '}
                    <span className="blue">
                      "../node_modules/bootstrap/scss/containers"
                    </span>
                    ;
                  </span>
                </span>
                <span>
                  <span className="import">@import</span>{' '}
                  <span className="blue">
                    "../node_modules/bootstrap/scss/grid"
                  </span>
                  ;
                </span>
                <span>
                  <span className="import">@import</span>{' '}
                  <span className="blue">
                    "../node_modules/bootstrap/scss/helpers"
                  </span>
                  ;
                </span>
                <span>
                  <span className="import">@import</span>{' '}
                  <span className="blue">
                    "../node_modules/bootstrap/scss/utilities/api"
                  </span>
                  ;
                </span>
              </code>
            </pre>

            <span
              className="absolute top-[18px] hidden md:block right-5"
              onClick={() =>
                navigator.clipboard.writeText(`// Functions first
@import "../node_modules/bootstrap/scss/functions";

// Variable overrides second
$primary: #900;
$enable-shadows: true;
$prefix: "mo-";

// Required Bootstrap imports
@import "../node_modules/bootstrap/scss/variables";
@import "../node_modules/bootstrap/scss/maps";
@import "../node_modules/bootstrap/scss/mixins";
@import "../node_modules/bootstrap/scss/root";

// Optional components
@import "../node_modules/bootstrap/scss/utilities";
@import "../node_modules/bootstrap/scss/reboot";
@import "../node_modules/bootstrap/scss/containers";
@import "../node_modules/bootstrap/scss/grid";
@import "../node_modules/bootstrap/scss/helpers";
@import "../node_modules/bootstrap/scss/utilities/api";`)
              }
            >
              <BsClipboard className="cursor-pointer hover:text-[#0d6efd] text-lg" />
            </span>
          </div>
          <p>
            Learn more about{' '}
            <span className="text-blue-600 underline inline-block hover:text-blue-800 cursor-pointer">
              using Bootstrap with Sass.
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Customize;
