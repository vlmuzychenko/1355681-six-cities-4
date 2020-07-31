import React from "react";
import SaveButton from "../save-button/save-button";

interface Props {
  authorizationStatus: string;
  isFavorite: boolean;
  offerId: number;
  className?: string;
}

const PropertySaveButton: React.FunctionComponent<Props> = (props: Props) => {
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

export default PropertySaveButton;
