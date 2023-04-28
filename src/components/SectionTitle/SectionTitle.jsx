import PropTypes from 'prop-types';

export const SectionTitle = ({ title, children }) => {
  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
