export default function Work() {
  const exp = [
    {
      id: 1,
      attributes: {
        Title: 'Apprentice Information Systems',
        description:
          '- Responsible for the maintenance, configuration, and reliable operation of computer systems\n- Install, upgrade and troubleshoot computer components and software\n- Manage Microsoft Active Directory',
        fromDate: '2023-12-01',
        toDate: '2020-04-01',
        createdAt: '2023-10-22T18:27:23.988Z',
        updatedAt: '2023-10-22T18:27:23.988Z',
        publishedAt: '2023-10-22T18:30:35.931Z',
        company: 'Dhiraagu',
        isCurrent: null,
      },
    },
    {
      id: 2,
      attributes: {
        Title: 'Technical Support Officer',
        description:
          '- Serve as entry point for end users and resolving and/or escalating requests for service.\n- Responsible for communication with end-users to provide status, feedback, or general information regarding their request or inquiry for service.\n- Monitor trends in problems and seek opportunities to improve support\n- Data manipulation in SQL to perform certain tasks\n- Ensure SOPs are up to date and uploaded to Sharepoint',
        fromDate: '2020-04-01',
        toDate: '2022-10-31',
        createdAt: '2023-10-22T18:29:14.444Z',
        updatedAt: '2023-10-22T18:29:14.444Z',
        publishedAt: '2023-10-22T18:30:35.931Z',
        company: 'Dhiraagu',
        isCurrent: null,
      },
    },
    {
      id: 3,
      attributes: {
        Title: 'Assistant Engineer Product Development',
        description:
          '- Work with product owners technical architects to set a strategic product direction and layout tactical goals\n- Provide technical advice and recommendations during product conceptualisation phase with business teams.\n- Identify suitable or cost-effective solutions and provide recommendations for the business requirements collated in the product roadmap and ad-hoc product requirements\n- Work closely with the offshore and in-house teams to ensure development, testing and delivery of the solution in a timely manner.\n- Prioritise and re-align solution deliverables based on resource and other constraints in agreement with the product owners.',
        fromDate: '2022-11-01',
        toDate: null,
        createdAt: '2023-10-22T18:30:25.833Z',
        updatedAt: '2023-11-10T10:26:18.864Z',
        publishedAt: '2023-10-22T18:30:35.931Z',
        company: 'Dhiraagu',
        isCurrent: true,
      },
    },
  ];
  return (
    <div>
      <h1 className="text-center mt-10 pb-3 font-medium text-slate-700 text-2xl ">
        Experiences
      </h1>
      <ol className="relative border-l border-gray-200 dark:border-gray-700">
        {exp.map((ExpItem) => (
          <li
            className="mb-10 m-4  bg-[#dcdcd9] text-[#275c61] transition-all ease-in-out px-4 py-2 rounded-md drop-shadow-lg"
            key={ExpItem.id}
          >
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white "></div>
            <time className="mb-1 sm:mb-10 text-sm font-normal leading-none text-[#315155]">
              {/* {ExpItem.attributes.fromDate} - {ExpItem.attributes.toDate} */}
              {ExpItem.attributes.isCurrent === null ||
              ExpItem.attributes.isCurrent === false ? (
                <p>
                  {ExpItem.attributes.fromDate} - {ExpItem.attributes.toDate}
                </p>
              ) : (
                <div className="flex flex-row items-baseline">
                  <p>{ExpItem.attributes.fromDate}</p>
                  <div className="ml-5 border rounded-md bg-[#275c61] text-[#dcdcd9] font-semibold px-2 py-1">
                    Current
                  </div>
                </div>
              )}
            </time>
            <p className="mb-1 text-lg font-bold leading-none text-[#315155]">
              {ExpItem.attributes.company}
            </p>
            <h3 className="text-lg font-semibold pb-2">
              {ExpItem.attributes.Title}
            </h3>
            <p
              className="mb-4 text-base font-normal"
              style={{ whiteSpace: 'pre-line' }}
            >
              {ExpItem.attributes.description}
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
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </li>
        ))}
      </ol>
    </div>
  );
}
