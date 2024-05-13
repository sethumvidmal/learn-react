import PropTypes from 'prop-types';

export default function Button({
  children,
  className,
  mode = "filled",
  Icon,
  ...props
}) {
  let cssClasses = `button ${mode}-button`;

  if (Icon) {
    cssClasses += " icon-button";
  }

  if (className) {
    cssClasses += " " + className;
  }

  return (
    <button className={cssClasses} {...props}>
      {Icon && (
        <span className="button-icon">
          <Icon />
        </span>
      )}
      <span>{children}</span>
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  mode: PropTypes.oneOf(['filled', 'outlined']), // Assuming there are only two modes: filled and outlined
  Icon: PropTypes.elementType
};
