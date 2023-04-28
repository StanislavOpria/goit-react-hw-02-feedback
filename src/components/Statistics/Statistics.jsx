import PropTypes from 'prop-types';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <ul>
      <li key="good">Good:{good}</li>
      <li key="neutral">Neutral:{neutral}</li>
      <li key="bad">Bad:{bad}</li>
      <li key="total">Total:{total}</li>
      <li key="percentage">Positive Feedback:{positivePercentage}%</li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
