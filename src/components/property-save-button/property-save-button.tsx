import React from "react";
import SaveButton from "../save-button/save-button";
import {Subtract} from "utility-types";

interface InjectingProps {
  className?: string;
  iconClassName?: string;
  width?: string;
  height?: string;
}

type P = React.ComponentProps<typeof SaveButton>;
type T = Subtract<P, InjectingProps>;

const PropertySaveButton: React.FunctionComponent<T> = (props: T) => {
  const cardClassName = `property__bookmark-button`;
  const iconClassName = `property__bookmark-icon`;
  const width = `31`;
  const height = `33`;

  const restProps = Object.assign({}, props);

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
