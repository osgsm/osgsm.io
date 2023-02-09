import { parseISO, format } from 'date-fns';

const Date = ({ dateString, hideDays }) => {
  const date = parseISO(dateString);
  const formatString = hideDays ? 'LLLL, yyyy' : 'LLLL d, yyyy';

  return <time dateTime={dateString}>{format(date, formatString)}</time>;
};

export default Date;
