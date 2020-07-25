import React from "react";
import PropTypes from "prop-types";
import SaveButton from "../save-button/save-button.jsx";

const PropertySaveButton = (props) => {
  const cardClassName = `property__bookmark-button${ props.className || ``}`;
  const iconClassName = `property__bookmark-icon`;
  const width = `31`;
  const height = `33`;

  const restProps = Object.assign({}, props);
  delete restProps.className;

  return (
    <SaveButton
      className={cardClassName}
      iconClassName={iconClassName}
      width={width}
      height={height}
      {...restProps}/>
  );
};

PropertySaveButton.propTypes = {
  className: PropTypes.string
};

export default PropertySaveButton;
