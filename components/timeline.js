import Date from '../components/date';

const Timeline = ({ content, year }) => {
  return (
    <section className="mt-8 sm:flex">
      <TimelineHeader year={year} />
      <TimelineContentList content={content} />
    </section>
  );
};

const TimelineHeader = ({ year }) => {
  return (
    <header
      className="top-4 mr-3 h-fit min-w-[6ch] basis-16
        text-xl font-bold text-gray-700 sm:sticky"
    >
      {year}
    </header>
  );
};

const TimelineContentList = ({ content }) => {
  return (
    <ul
      className="prose mt-4 prose-a:font-normal prose-a:text-blue-500 prose-a:decoration-blue-200
        prose-a:decoration-2
          prose-a:underline-offset-4 hover:prose-a:text-blue-600
        hover:prose-a:decoration-blue-300
        sm:mt-0"
    >
      {content.body.map((item) => {
        return (
          <TimelineItem key={item.date}>
            <TimelineSeparator connector={item.connector} />
            <TimelineContent item={item} />
          </TimelineItem>
        );
      })}
    </ul>
  );
};

const TimelineItem = ({ children }) => {
  return <li className="my-0 flex pl-0">{children}</li>;
};

const TimelineSeparator = ({ connector = true }) => {
  return (
    <div className="mt-[1px] flex flex-col items-center pt-2">
      <span
        className="inline-block h-2 w-2 rounded-full
        bg-gray-300 content-['']"
      ></span>
      {connector && (
        <span
          className="mt-1 inline-block h-full
            w-[1px] bg-gray-300"
        ></span>
      )}
    </div>
  );
};

const TimelineContent = ({ item }) => {
  return (
    <div className="ml-4 sm:ml-6">
      <div className="mt-[1px] text-sm text-gray-400">
        <Date dateString={item.date} hideDays />
      </div>
      <h2 className="my-2 text-lg font-normal sm:text-xl">{item.heading}</h2>
      <p
        dangerouslySetInnerHTML={{ __html: item.description }}
        className="mt-3 mb-8 text-[15px] sm:text-base"
      />
    </div>
  );
};

export default Timeline;
