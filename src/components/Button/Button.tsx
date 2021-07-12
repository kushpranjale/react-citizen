import { Color } from "../../tokens/Colorimetry";
import "./Button.css";

import classNames from "classnames";
import { FunctionComponent } from "react";

/**
 * Configurable properties for Button component
 */
export interface ButtonProps {
  /**
   * Indication of whether the button style is hollow
   */
  hollow?: boolean;

  /**
   * Color of the button
   */
  color?: Color;

  /**
   * Content displayed within the button
   */
  children?: React.ReactNode;

  /**
   * Primary action
   */
  onClick?: () => void;
}

/**
 * Button component
 */
export const Button: FunctionComponent<ButtonProps> = ({
  hollow,
  color,
  children,
  onClick,
}) => {
  /**
   * List of styles to apply to the component
   */
  const styles = classNames("btn", {
    [`btn-${color}`]: color,
    [`btn--hollow`]: hollow,
  });

  return (
    <>
      <button type="button" onClick={onClick} className={styles}>
        {children}
      </button>
    </>
  );
};
