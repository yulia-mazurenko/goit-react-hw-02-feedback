import { Box } from 'components/Box';
import PropTypes from 'prop-types';
import { Button } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="flex-start"
      ml="auto"
      mr="auto"
      mb={3}
      pl={4}
      gridGap={3}
      as="div"
    >
      {options.map(option => (
        <Button
          key={option}
          onClick={e => {
            onLeaveFeedback(option);
          }}
        >
          {option}
        </Button>
      ))}
    </Box>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
