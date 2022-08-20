import { BsClipboard, BsBraces } from 'react-icons/bs';

const Build = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start   w-full px-6 lg:px-0 lg:w-[90%] mx-auto my-12">
        <div className="w-full flex flex-col gap-4 items-start">
          <div className="bg-[#d63384]/10 text-[#d63384] p-4 py-5 rounded-xl flex ">
            <BsBraces className="text-4xl" />
          </div>
          <h1 className="section-h1 font-semibold leading-[1.2]">
            Build and extend in real-time with <br /> CSS variables
          </h1>
          <p className=" text-[1rem] md:text-lg lg:text-xl w-full lg:w-[60%]">
            Bootstrap 5 is evolving with each release to better utilize CSS
            variables for global theme styles, individual components, and even
            utilities. We provide dozens of variables for colors, font styles,
            and more at a{' '}
            <span className="text-[#d63384] font-mono lg:text-lg">:root</span>{' '}
            level for use anywhere. On components and utilities, CSS variables
            are scoped to the relevant class and can easily be modified.
          </p>
          <span className="flex items-center text-blue-600 font-medium cursor-pointer text-[1rem] md:text-lg lg:text-xl pb-2 hover:text-blue-800 peer">
            <span className="border-b-2 border-blue-400">
              Learn more about CSS variables{' '}
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
        <div className="w-wfull lg:w-1/2 flex flex-col gap-2 items-start pr-8 lg:px-0">
          <h1 className="text-2xl lg:text-3xl font-medium">
            Using CSS variables
          </h1>
          <p>
            Use any of our{' '}
            <span className="text-blue-600 underline inline-block hover:text-blue-800 cursor-pointer">
              global <span className="font-mono text-sm">:root</span> variables
            </span>{' '}
            to write new styles. CSS variables use the{' '}
            <span className="text-[#d63384] font-mono text-sm">
              var(--bs-variableName)
            </span>
            syntax and can be inherited by children elements.
          </p>

          <div className="w-full relative z-[1] p-4 rounded bg-[#f8f9fa] flex items-center justify-start gap-2 text-center pr-16 text-sm">
            <pre className="overflow-auto">
              <code className="text-left language-css flex flex-col">
                <span>
                  <span className="brown">.component</span> &#123;{' '}
                </span>
                <span className="pl-4 inline-block">
                  <span className="purple">color</span>:{' '}
                  <span className="blue">var</span>(--
                  <span className="orange">bs-gray-800</span>);{' '}
                </span>
                <span className="pl-4 inline-block">
                  <span className="purple">background-color</span>:
                  <span className="blue"> var</span>(--
                  <span className="orange">bs-gray-100</span>);
                </span>
                <span className="pl-4 inline-block">
                  <span className="purple">border</span>:{' '}
                  <span className="teal">1</span>
                  <span className="purple">px</span>{' '}
                  <span className="orange">solid</span>{' '}
                  <span className="blue">var</span>(--
                  <span className="orange">bs-gray-200</span>);
                </span>
                <span className="pl-4 inline-block">
                  <span className="purple">border-radius</span>:{' '}
                  <span className="teal">.25</span>
                  <span className="purple">rem</span>;
                </span>
                <span>&#125;</span>
                <br />
                <span>
                  <span className="brown">.component-header</span> &#123;{' '}
                </span>
                <span className="pl-4 inline-block">
                  <span className="purple">color</span>:{' '}
                  <span className="blue">var</span>(--
                  <span className="orange">bs-purple</span>);
                </span>

                <span>&#125;</span>
              </code>
            </pre>

            <span
              className="absolute top-[18px] hidden md:block right-5"
              onClick={() =>
                navigator.clipboard.writeText(`.component {
  color: var(--bs-gray-800);
  background-color: var(--bs-gray-100);
  border: 1px solid var(--bs-gray-200);
  border-radius: .25rem;
}

.component-header {
  color: var(--bs-purple);
}`)
              }
            >
              <BsClipboard className="cursor-pointer hover:text-[#0d6efd] text-lg" />
            </span>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col gap-2 items-start  pr-8 lg:px-0">
          <h1 className="text-2xl lg:text-3xl font-medium">
            Customizing via CSS variables
          </h1>
          <p className="w-full">
            Override global, component, or utility class variables to customize
            Bootstrap just how you like. No need to redeclare each rule, just a
            new variable value.
          </p>

          <div className="w-full relative z-[1] p-4 rounded bg-[#f8f9fa] flex items-center justify-start gap-2 text-center pr-16 text-sm ">
            <pre className="overflow-auto">
              <code className="text-left language-css flex flex-col">
                <span>
                  <span className="brown">body</span> &#123;{' '}
                </span>
                <span className="pl-4 inline-block">
                  <span className="purple">--bs-body-font-family</span>:
                  <span className="blue"> var</span>(--
                  <span className="orange">bs-font-monospace</span>);
                </span>
                <span className="pl-4 inline-block">
                  <span className="purple">--bs-body-line-height</span>:{' '}
                  <span className="teal">1.4</span>;
                </span>
                <span className="pl-4 inline-block">
                  <span className="purple">--bs-body-bg</span>:{' '}
                  <span className="blue">var</span>(--
                  <span className="orange">bs-gray-100</span>);
                </span>

                <span>&#125;</span>
                <br />
                <span>
                  <span className="brown">.table</span> &#123;{' '}
                </span>
                <span className="pl-4 inline-block">
                  <span className="purple">--bs-table-color</span>:{' '}
                  <span className="blue">var</span>(--
                  <span className="orange">bs-gray-600</span>);
                </span>
                <span className="pl-4 inline-block">
                  <span className="purple">--bs-table-bg</span>:{' '}
                  <span className="blue">var</span>(--
                  <span className="orange">bs-gray-100</span>);
                </span>
                <span className="pl-4 inline-block">
                  <span className="purple">--bs-table-border-color</span>:{' '}
                  <span className="orange">transparent</span>;
                </span>

                <span>&#125;</span>
              </code>
            </pre>

            <span
              className="absolute hidden md:block top-[18px] right-5"
              onClick={() =>
                navigator.clipboard.writeText(`body {
  --bs-body-font-family: var(--bs-font-monospace);
  --bs-body-line-height: 1.4;
  --bs-body-bg: var(--bs-gray-100);
}

.table {
  --bs-table-color: var(--bs-gray-600);
  --bs-table-bg: var(--bs-gray-100);
  --bs-table-border-color: transparent;
}`)
              }
            >
              <BsClipboard className="cursor-pointer hover:text-[#0d6efd] text-lg" />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Build;
