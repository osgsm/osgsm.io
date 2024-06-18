import { twJoin } from 'tailwind-merge';
import Date from '../components/date';

const Timeline = ({ content }) => {
  return (
    <section className="mt-4 sm:flex">
      <TimelineHeader headerContent={content.header} />
      <TimelineContentList content={content} />
    </section>
  );
};

const TimelineHeader = ({ headerContent }) => {
  return (
    <header
      className="top-4 mr-3 h-fit min-w-[6ch] basis-16
        text-2xl font-semibold text-muted-foreground sm:sticky sm:top-[4.5rem] sm:pb-10"
    >
      {headerContent}
    </header>
  );
};

const TimelineContentList = ({ content }) => {
  return (
    <ul className="prose mt-4 sm:mt-0">
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
    <div className="flex flex-col items-center pt-2">
      <span className="inline-block h-[7px] w-[7px] rounded-full bg-twilight-indigo-500 content-[''] dark:bg-twilight-indigo-600"></span>
      {connector && (
        <span
          className="mt-2 inline-block w-px grow
            bg-twilight-indigo-500 dark:bg-twilight-indigo-600 sm:mt-[9px]"
        ></span>
      )}
    </div>
  );
};

const TimelineContent = ({ item }) => {
  return (
    <div className="ml-4 text-foreground sm:ml-6">
      <div className="mt-[1px] text-sm text-muted-foreground">
        <Date dateString={item.date} hideDays />
      </div>
      <h2 className="mb-2 mt-0.5 text-lg font-semibold text-foreground">
        {item.heading}
      </h2>
      <p
        dangerouslySetInnerHTML={{ __html: item.description }}
        className={twJoin(
          'mb-0 pb-10 text-base leading-7',
          '[&_a]:text-link-foreground [&_a]:decoration-link-decoration hover:[&_a]:text-link-hover-foreground hover:[&_a]:decoration-link-hover-decoration',
        )}
      />
    </div>
  );
};

export default Timeline;
