import Image from '../assets/bootstrap-themes.png';

const Section = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start lg:items-center w-full px-6 lg:px-0 lg:w-[90%] mx-auto my-16">
      <div className="w-full lg:w-1/2 flex flex-col gap-4 items-start">
        <div className="bg-primary/10 p-4 rounded-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            className="text-primary"
            height="32"
            fill="currentColor"
            focusable="false"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M8 16a6 6 0 006-6c0-1.655-1.122-2.904-2.432-4.362C10.254 4.176 8.75 2.503 8 0c0 0-6 5.686-6 10a6 6 0 006 6zM6.646 4.646c-.376.377-1.272 1.489-2.093 3.13l.894.448c.78-1.559 1.616-2.58 1.907-2.87l-.708-.708z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
        <h1 className="section-h1 font-semibold leading-[1.2]">
          Make it yours with official Bootstrap Themes
        </h1>
        <p className="text-[16px] md:text-lg lg:text-xl">
          Take Bootstrap to the next level with premium themes from the
          <span className="text-blue-600 underline  hover:text-blue-800 cursor-pointer">
            {' '}
            official Bootstrap Themes marketplace
          </span>
          . Themes are built on Bootstrap as their own extended frameworks, rich
          with new components and plugins, documentation, and powerful build
          tools.
        </p>
        <span className="flex items-center text-blue-600 font-medium cursor-pointer text-[1rem] md:text-lg lg:text-xl pb-2 hover:text-blue-800 peer">
          <span className="border-b-2 border-blue-400">
            Browse Bootstrap Themes{' '}
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
