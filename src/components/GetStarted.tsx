const GetStarted = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start lg:items-center justify-center w-full px-6 lg:px-0 lg:w-[90%] mx-auto my-16">
      <div className="w-full flex flex-col gap-4 items-start lg:items-center">
        <div className="bg-primary/10 text-primary p-4 py-5 rounded-xl flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-6 -ml-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
        <h1 className="section-h1 font-semibold leading-[1.2]">
          Get started any way you want
        </h1>
        <p className="text-left lg:text-center text-[1rem] md:text-lg lg:text-xl w-full lg:w-[60%]">
          Jump right into building with Bootstrap—use the CDN, install it via
          package manager, or download the source code.
        </p>
        <span className="flex items-center text-blue-600 font-medium cursor-pointer text-[1rem] md:text-lg lg:text-xl pb-2 hover:text-blue-800 peer">
          <span className="border-b-2 border-blue-400">
            Read installation docs{' '}
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
  );
};

export default GetStarted;
