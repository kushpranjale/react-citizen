import classNames from "classnames";
import { FunctionComponent } from "react";

/**
 * Configurable properties for Loader component
 */
export interface LoaderProps {
  /**
   * Shows loading component if set, otherwise child component(s)
   */
  isLoading?: boolean;

  /**
   * Content to be displayed after loading finishes
   */
  children: React.ReactNode;
}

/**
 * List of styles to apply to the component
 */
const styles = classNames(
 "h-10",
 "w-10",
);

/**
 * Loader component
 */
export const Loader: FunctionComponent<LoaderProps> = (
  {
    isLoading,
    children
  }
) => (
  <div className={styles}>
  { !isLoading ?  <img src={require('../../assets/loader.svg')} />:
  <div>{children}</div>}
  </div>
);
