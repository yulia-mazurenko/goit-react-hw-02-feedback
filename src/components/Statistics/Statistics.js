import PropTypes from 'prop-types';
import Notification from 'components/Notification';
import { StatisticsText } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      {total ? (
        <div>
          <StatisticsText>Good:{good}</StatisticsText>
          <StatisticsText>Neutral: {neutral}</StatisticsText>
          <StatisticsText>Bad:{bad}</StatisticsText>
          <StatisticsText>Total: {total}</StatisticsText>
          <StatisticsText>
            Positive feedback: {positivePercentage}
          </StatisticsText>
        </div>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};
