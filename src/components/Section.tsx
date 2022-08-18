import Image from '../assets/bootstrap-icons.png';

const Section = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start lg:items-center w-full px-6 lg:px-0 lg:w-[90%] mx-auto my-16">
      <div className="w-full lg:w-1/2 flex flex-col gap-4 items-start">
        <div className="bg-[#20c997]/10 p-4 rounded-xl">
          <svg
            className="text-[#20c997]"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            focusable="false"
            viewBox="0 0 16 16"
          >
            <path d="M0 6a6 6 0 1112 0A6 6 0 010 6z"></path>
            <path d="M12.93 5h1.57a.5.5 0 01.5.5v9a.5.5 0 01-.5.5h-9a.5.5 0 01-.5-.5v-1.57a6.953 6.953 0 01-1-.22v1.79A1.5 1.5 0 005.5 16h9a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0014.5 4h-1.79c.097.324.17.658.22 1z"></path>
          </svg>
        </div>
        <h1 className="section-h1 font-semibold leading-[1.2]">
          Personalize it with Bootstrap Icons
        </h1>
        <p className="text-[1rem] md:text-lg lg:text-xl">
          <span className="text-blue-600 underline inline-block hover:text-blue-800 cursor-pointer">
            Bootstrap Icons{' '}
          </span>{' '}
          is an open source SVG icon library featuring over 1,500 glyphs, with
          more added every release. They're designed to work in any project,
          whether you use Bootstrap itself or not. Use them as SVGs or icon
          fonts—both options give you vector scaling and easy customization via
          CSS.
        </p>
        <span className="flex items-center text-blue-600 font-medium cursor-pointer text-[1rem] md:text-lg lg:text-xl pb-2 hover:text-blue-800 peer">
          <span className="border-b-2 border-blue-400">
            Get Bootstrap Icons{' '}
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
      <div className="w-full lg:w-1/2 max-w-[700px]">
        <img
          src={Image}
          className="w-full h-full object-cover"
          alt="bootstrap-icons"
        />
      </div>
    </div>
  );
};

export default Section;
