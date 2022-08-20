const Footer = () => {
  return (
    <div className="bg-gray-100 w-full">
      <div className="text-gray-500 pt-20 pb-24 px-6 lg:px-0  max-w-[600px]  lg:max-w-full lg:w-[90%] mx-auto flex flex-col lg:flex-row gap-10 justify-between">
        <div className="w-full lg:w-[35%] flex flex-col items-start text-sm gap-2">
          <h1 className="text-black flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="32"
              className=""
              viewBox="0 0 118 94"
              role="img"
            >
              <title>Bootstrap</title>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M24.509 0c-6.733 0-11.715 5.893-11.492 12.284.214 6.14-.064 14.092-2.066 20.577C8.943 39.365 5.547 43.485 0 44.014v5.972c5.547.529 8.943 4.649 10.951 11.153 2.002 6.485 2.28 14.437 2.066 20.577C12.794 88.106 17.776 94 24.51 94H93.5c6.733 0 11.714-5.893 11.491-12.284-.214-6.14.064-14.092 2.066-20.577 2.009-6.504 5.396-10.624 10.943-11.153v-5.972c-5.547-.529-8.934-4.649-10.943-11.153-2.002-6.484-2.28-14.437-2.066-20.577C105.214 5.894 100.233 0 93.5 0H24.508zM80 57.863C80 66.663 73.436 72 62.543 72H44a2 2 0 01-2-2V24a2 2 0 012-2h18.437c9.083 0 15.044 4.92 15.044 12.474 0 5.302-4.01 10.049-9.119 10.88v.277C75.317 46.394 80 51.21 80 57.863zM60.521 28.34H49.948v14.934h8.905c6.884 0 10.68-2.772 10.68-7.727 0-4.643-3.264-7.207-9.012-7.207zM49.948 49.2v16.458H60.91c7.167 0 10.964-2.876 10.964-8.281 0-5.406-3.903-8.178-11.425-8.178H49.948z"
                fill="currentColor"
              ></path>
            </svg>
            <span className="text-lg">Bootstrap</span>
          </h1>
          <p>
            Designed and built with all the love in the world by the{' '}
            <span className="text-gray-600 cursor-pointer hover:text-blue-500 hover:underline">
              Bootstrap team{' '}
            </span>
            with the help of{' '}
            <span className="text-gray-600 cursor-pointer hover:text-blue-500 hover:underline">
              our contributors
            </span>
            .
          </p>
          <p>
            Code licensed{' '}
            <span className="text-gray-600 cursor-pointer hover:text-blue-500 hover:underline">
              MIT
            </span>
            , docs{' '}
            <span className="text-gray-600 cursor-pointer hover:text-blue-500 hover:underline">
              CC BY 3.0
            </span>
            .
          </p>
          <p>Currently v5.2.0.</p>
        </div>
        <div className="w-full flex items-start flex-wrap lg:flex-nowrap justify-evenly">
          <ul className="text-[1rem] flex flex-col gap-2  w-1/2 lg:w-auto">
            <li className="text-black font-medium text-xl">Links</li>
            <li className="text-gray-600 cursor-pointer hover:text-blue-500 hover:underline">
              Home
            </li>
            <li className="text-gray-600 cursor-pointer hover:text-blue-500 hover:underline">
              Docs
            </li>
            <li className="text-gray-600 cursor-pointer hover:text-blue-500 hover:underline">
              Examples
            </li>
            <li className="text-gray-600 cursor-pointer hover:text-blue-500 hover:underline">
              Icons
            </li>
            <li className="text-gray-600 cursor-pointer hover:text-blue-500 hover:underline">
              Themes
            </li>
            <li className="text-gray-600 cursor-pointer hover:text-blue-500 hover:underline">
              Blog
            </li>
            <li className="text-gray-600 cursor-pointer hover:text-blue-500 hover:underline">
              Swag Store
            </li>
          </ul>
          <ul className="text-[1rem] flex flex-col gap-2 w-1/2 lg:w-auto">
            {' '}
            <li className="text-black font-medium text-xl">Guides</li>
            <li className="text-gray-600 cursor-pointer hover:text-blue-500 hover:underline">
              Getting Started
            </li>
            <li className="text-gray-600 cursor-pointer hover:text-blue-500 hover:underline">
              Starter Template
            </li>
            <li className="text-gray-600 cursor-pointer hover:text-blue-500 hover:underline">
              Webpack
            </li>
            <li className="text-gray-600 cursor-pointer hover:text-blue-500 hover:underline">
              Parcel
            </li>
            <li className="text-gray-600 cursor-pointer hover:text-blue-500 hover:underline">
              Vite
            </li>
          </ul>
          <ul className="text-[1rem] flex flex-col gap-2 w-1/2 lg:w-auto mt-6 lg:mt-0">
            <li className="text-black font-medium text-xl">Projects</li>

            <li className="text-gray-600 cursor-pointer hover:text-blue-500 hover:underline">
              Bootstrap 5
            </li>
            <li className="text-gray-600 cursor-pointer hover:text-blue-500 hover:underline">
              Bootstrap 4
            </li>
            <li className="text-gray-600 cursor-pointer hover:text-blue-500 hover:underline">
              Icons
            </li>
            <li className="text-gray-600 cursor-pointer hover:text-blue-500 hover:underline">
              RFS
            </li>
            <li className="text-gray-600 cursor-pointer hover:text-blue-500 hover:underline">
              npm starter
            </li>
          </ul>
          <ul className="text-[1rem] flex flex-col gap-2 w-1/2 lg:w-auto mt-6 lg:mt-0">
            <li className="text-black font-medium text-xl">Community</li>

            <li className="text-gray-600 cursor-pointer hover:text-blue-500 hover:underline">
              Issues
            </li>
            <li className="text-gray-600 cursor-pointer hover:text-blue-500 hover:underline">
              Discussions
            </li>
            <li className="text-gray-600 cursor-pointer hover:text-blue-500 hover:underline">
              Corporate Sponsors
            </li>
            <li className="text-gray-600 cursor-pointer hover:text-blue-500 hover:underline">
              Open Collective
            </li>
            <li className="text-gray-600 cursor-pointer hover:text-blue-500 hover:underline">
              Slack
            </li>
            <li className="text-gray-600 cursor-pointer hover:text-blue-500 hover:underline">
              Stack Overflow
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
