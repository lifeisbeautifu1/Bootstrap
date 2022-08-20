import { BsClipboard, BsCheck2 } from 'react-icons/bs';
import { useState, useEffect, useRef } from 'react';
import { GoTriangleDown } from 'react-icons/go';

const Powerful = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [clipboard, setClipboard] = useState('Copy to clipboard');

  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const clickOutside = (e: MouseEvent) => {
      if (
        e.target !== buttonRef.current &&
        !buttonRef.current?.contains(e.target as Node)
      ) {
        setShowDropDown(false);
      }
    };
    window.addEventListener('click', clickOutside);
    return () => window.removeEventListener('click', clickOutside);
  }, []);
  return (
    <>
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start   w-full px-6 lg:px-0 lg:w-[90%] mx-auto my-12">
        <div className="w-full flex flex-col gap-4 items-start">
          <div className="bg-[#ffc107]/10 text-[#ffc107] p-4 rounded-xl flex ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="w-10 h-10"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1 8a7 7 0 1 1 2.898 5.673c-.167-.121-.216-.406-.002-.62l1.8-1.8a3.5 3.5 0 0 0 4.572-.328l1.414-1.415a.5.5 0 0 0 0-.707l-.707-.707 1.559-1.563a.5.5 0 1 0-.708-.706l-1.559 1.562-1.414-1.414 1.56-1.562a.5.5 0 1 0-.707-.706l-1.56 1.56-.707-.706a.5.5 0 0 0-.707 0L5.318 5.975a3.5 3.5 0 0 0-.328 4.571l-1.8 1.8c-.58.58-.62 1.6.121 2.137A8 8 0 1 0 0 8a.5.5 0 0 0 1 0Z"
              />
            </svg>
          </div>
          <h1 className="section-h1 font-semibold leading-[1.2]">
            Powerful JavaScript plugins <br /> without jQuery
          </h1>
          <p className=" text-[1rem] md:text-lg lg:text-xl w-full lg:w-[60%]">
            Easily add toggleable hidden elements, modals and offcanvas menus,
            popovers and tooltips, and so much more—all without jQuery.
            JavaScript in Bootstrap is HTML-first, which means adding plugins is
            as easy as adding <span className="text-[#d63384]">data</span>{' '}
            attributes. Need more control? Include individual plugins
            programmatically.
          </p>
          <span className="flex items-center text-blue-600 font-medium cursor-pointer text-[1rem] md:text-lg lg:text-xl pb-2 hover:text-blue-800 peer">
            <span className="border-b-2 border-blue-400">
              Learn more about Bootstrap JavaScript{' '}
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
            Data attribute API
          </h1>
          <p>
            Why write more JavaScript when you can write HTML? Nearly all of
            Bootstrap's JavaScript plugins feature a first-class data API,
            allowing you to use JavaScript just by adding{' '}
            <span className="text-[#d63384]">data</span> attributes.
          </p>
          <div className="my-2 p-4 rounded-md border border-gray-200 w-full">
            <div
              ref={buttonRef}
              className="py-2 px-3 text-white bg-blue-500 cursor-pointer hover:bg-blue-600 w-[fit-content] rounded flex items-center gap-1 relative"
              onClick={() => setShowDropDown(!showDropDown)}
            >
              Dropdown <GoTriangleDown />
              {showDropDown && (
                <ul className="py-2 w-[135%] absolute z-10 top-[105%] left-0 bg-white rounded border border-gray-200 text-black">
                  <li className="px-3 py-[6px] hover:bg-gray-100">
                    Dropdown item
                  </li>
                  <li className="px-3 py-[6px] hover:bg-gray-100">
                    Dropdown item
                  </li>
                  <li className="px-3 py-[6px] hover:bg-gray-100">
                    Dropdown item
                  </li>
                </ul>
              )}
            </div>
          </div>
          <div className="w-full relative z-[1] p-4 rounded bg-[#f8f9fa] flex items-center justify-start gap-2 text-center pr-16 text-sm">
            <pre className="overflow-auto">
              <code className="text-left language-css flex flex-col">
                <span>
                  &lt;<span className="orange">div</span>{' '}
                  <span className="purple">class</span>="
                  <span className="blue">dropdown</span>
                  "&gt;
                </span>
                <span className="pl-4">
                  &lt;<span className="orange">button </span>
                  <span className="purple">class</span>="
                  <span className="blue">btn btn-primary dropdown-toggle</span>"
                  <span className="purple"> type</span>="
                  <span className="blue">button</span>"
                  <span className="purple"> data-bs-toggle=</span>"
                  <span className="blue">dropdown</span>"
                  <span className="purple"> aria-expanded</span>="
                  <span className="blue">false</span>"&gt;
                </span>
                <span className="pl-8">Dropdown</span>
                <span className="pl-4">
                  &lt;&#47;<span className="orange">button</span>&gt;
                </span>
                <span className="pl-4">
                  &lt;<span className="orange">ul </span>
                  <span className="purple">class=</span>"
                  <span className="blue">dropdown-menu</span>"&gt;
                </span>
                <span className="pl-8">
                  &lt;<span className="orange">li</span>&gt;&lt;
                  <span className="orange">a </span>
                  <span className="purple">class=</span>"
                  <span className="blue">dropdown-blue</span>"
                  <span className="purple"> href=</span>"
                  <span className="blue">#</span>"&gt;Dropdown item&lt;&#47;
                  <span className="orange">a</span>
                  &gt;&lt;&#47;<span className="orange">li</span>&gt;
                </span>
                <span className="pl-8">
                  &lt;<span className="orange">li</span>&gt;&lt;
                  <span className="orange">a </span>
                  <span className="purple">class=</span>"
                  <span className="blue">dropdown-blue</span>"
                  <span className="purple"> href=</span>"
                  <span className="blue">#</span>"&gt;Dropdown item&lt;&#47;
                  <span className="orange">a</span>
                  &gt;&lt;&#47;<span className="orange">li</span>&gt;
                </span>
                <span className="pl-8">
                  &lt;<span className="orange">li</span>&gt;&lt;
                  <span className="orange">a </span>
                  <span className="purple">class=</span>"
                  <span className="blue">dropdown-blue</span>"
                  <span className="purple"> href=</span>"
                  <span className="blue">#</span>"&gt;Dropdown item&lt;&#47;
                  <span className="orange">a</span>
                  &gt;&lt;&#47;<span className="orange">li</span>&gt;
                </span>
                <span className="pl-4">
                  &lt;&#47;<span className="orange">ul</span>&gt;
                </span>
                <span>
                  &lt;&#47;<span className="orange">div</span>&gt;
                </span>
              </code>
            </pre>

            <span
              className="absolute top-[18px] right-5 hidden md:block"
              onClick={() => {
                navigator.clipboard.writeText(`<div class="dropdown">
  <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Dropdown item</a></li>
    <li><a class="dropdown-item" href="#">Dropdown item</a></li>
    <li><a class="dropdown-item" href="#">Dropdown item</a></li>
  </ul>
</div>`);
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
          <p>
            Learn more about{' '}
            <span className="text-blue-600 underline inline-block hover:text-blue-800 cursor-pointer">
              our JavaScript as modules
            </span>{' '}
            and{' '}
            <span className="text-blue-600 underline inline-block hover:text-blue-800 cursor-pointer">
              using the programmatic API
            </span>
            .
          </p>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col gap-2 items-start  pr-8 lg:px-0">
          <h1 className="text-2xl lg:text-3xl font-medium">
            Comprehensive set of plugins
          </h1>
          <p className="w-full">
            Bootstrap features a dozen plugins that you can drop into any
            project. Drop them in all at once, or choose just the ones you need.
          </p>
          <div className="mt-4 w-full border-b border-gray-200" />
          <div className="flex flex-wrap">
            <div className="mt-4 cursor-pointer w-1/2 pr-4">
              <h1 className="text-xl font-semibold text-blue-500 hover:text-blue-600">
                Alert
              </h1>
              <p className="text-sm text-gray-500">
                Show and hide alert messages to your users.
              </p>
            </div>
            <div className="mt-4 cursor-pointer w-1/2 pr-4">
              <h1 className="text-xl font-semibold text-blue-500 hover:text-blue-600">
                Button
              </h1>
              <p className="text-sm text-gray-500">
                Programmatically control the active state for buttons.
              </p>
            </div>
            <div className="mt-4 cursor-pointer w-1/2 pr-4">
              <h1 className="text-xl font-semibold text-blue-500 hover:text-blue-600">
                Carousel
              </h1>
              <p className="text-sm text-gray-500">
                Add slideshows to any page, including support for crossfade.
              </p>
            </div>
            <div className="mt-4 cursor-pointer w-1/2 pr-4">
              <h1 className="text-xl font-semibold text-blue-500 hover:text-blue-600">
                Collapse
              </h1>
              <p className="text-sm text-gray-500">
                Expand and collapse areas of content, or create accordions.
              </p>
            </div>
            <div className="mt-4 cursor-pointer w-1/2 pr-4">
              <h1 className="text-xl font-semibold text-blue-500 hover:text-blue-600">
                Dropdown
              </h1>
              <p className="text-sm text-gray-500">
                Create menus of links, actions, forms, and more.
              </p>
            </div>

            <div className="mt-4 cursor-pointer w-1/2 pr-4">
              <h1 className="text-xl font-semibold text-blue-500 hover:text-blue-600">
                Modal
              </h1>
              <p className="text-sm text-gray-500">
                Add flexible and responsive dialogs to your project
              </p>
            </div>
            <div className="mt-4 cursor-pointer w-1/2 pr-4">
              <h1 className="text-xl font-semibold text-blue-500 hover:text-blue-600">
                Offcanvas
              </h1>
              <p className="text-sm text-gray-500">
                Build and toggle hidden sidebars into any page.
              </p>
            </div>
            <div className="mt-4 cursor-pointer w-1/2 pr-4">
              <h1 className="text-xl font-semibold text-blue-500 hover:text-blue-600">
                Popover
              </h1>
              <p className="text-sm text-gray-500">
                Create custom overlays. Built on Popper.
              </p>
            </div>
            <div className="mt-4 cursor-pointer w-1/2 pr-8">
              <h1 className="text-xl font-semibold text-blue-500 hover:text-blue-600">
                Scrollspy
              </h1>
              <p className="text-sm text-gray-500">
                Automatically update active nav links based on page scroll.
              </p>
            </div>

            <div className="mt-4 cursor-pointer w-1/2 pr-4">
              <h1 className="text-xl font-semibold text-blue-500 hover:text-blue-600">
                Tab
              </h1>
              <p className="text-sm text-gray-500">
                Allow Bootstrap nav components to toggle contents.
              </p>
            </div>

            <div className="mt-4 cursor-pointer w-1/2 pr-8">
              <h1 className="text-xl font-semibold text-blue-500 hover:text-blue-600">
                Toast
              </h1>
              <p className="text-sm text-gray-500">
                Show and hide notifications to your visitors.
              </p>
            </div>
            <div className="mt-4 cursor-pointer w-1/2 pr-4">
              <h1 className="text-xl font-semibold text-blue-500 hover:text-blue-600">
                Tooltip
              </h1>
              <p className="text-sm text-gray-500">
                Replace browser tooltips with custom ones. Built on Popper.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Powerful;
