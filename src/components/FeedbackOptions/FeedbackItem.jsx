import PropTypes from 'prop-types';
import css from './FeedbackList.module.css';

export const FeedbackItem = ({ btn }) => {
  return (
    <li>
      <button className={css.btn} type="button">
        {btn}
      </button>
    </li>
  );
};

FeedbackItem.propTypes = {
  btn: PropTypes.string.isRequired,
};
