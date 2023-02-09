// import PropTypes from 'prop-types';
import css from './FeedbackList.module.css';
import PropTypes from 'prop-types';
import { FeedbackItem } from './FeedbackItem';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={css.list} onClick={onLeaveFeedback}>
      {options.map(btn => (
        <FeedbackItem key={btn} btn={btn} />
      ))}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onBtnClick: PropTypes.func.isRequired,
};
