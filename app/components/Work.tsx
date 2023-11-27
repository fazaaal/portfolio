export default function Work({ experiences }) {
  return (
    <div>
      {experiences.length === 0 ? (
        ''
      ) : (
        <div>
          <h1 className="text-center mt-10 pb-3 font-medium text-slate-700 text-2xl ">
            Experiences
          </h1>
          <ol className="relative border-l border-gray-200 dark:border-gray-700">
            {experiences.map((ExpItem) => (
              <li
                className="mb-10 m-4  bg-[#dcdcd9] text-[#275c61] transition-all ease-in-out px-4 py-2 rounded-md drop-shadow-lg"
                key={ExpItem.id}
              >
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white "></div>
                <time className="mb-1 sm:mb-10 text-sm font-normal leading-none text-[#315155]">
                  {/* {ExpItem.attributes.fromDate} - {ExpItem.attributes.toDate} */}
                  {ExpItem.isCurrent === null || ExpItem.isCurrent === false ? (
                    <p>
                      {ExpItem.fromDate} - {ExpItem.toDate}
                    </p>
                  ) : (
                    <div className="flex flex-row items-baseline">
                      <p>{ExpItem.fromDate}</p>
                      <div className="ml-5 border rounded-md bg-[#275c61] text-[#dcdcd9] font-semibold px-2 py-1">
                        Current
                      </div>
                    </div>
                  )}
                </time>
                <p className="mb-1 text-lg font-bold leading-none text-[#315155]">
                  {ExpItem.company}
                </p>
                <h3 className="text-lg font-semibold pb-2">{ExpItem.Title}</h3>
                <p
                  className="mb-4 text-base font-normal"
                  style={{ whiteSpace: 'pre-line' }}
                >
                  {ExpItem.description}
                </p>
                <a
                  href="/"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                >
                  Learn more{' '}
                  <svg
                    className="w-3 h-3 ml-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}
