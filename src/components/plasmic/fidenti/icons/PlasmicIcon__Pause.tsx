// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PauseIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PauseIcon(props: PauseIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M8 3v18a1 1 0 01-2 0V3a1 1 0 012 0zm9-1a1 1 0 00-1 1v18a1 1 0 002 0V3a1 1 0 00-1-1z"
        }
        data-name={"22 Pause"}
      ></path>
    </svg>
  );
}

export default PauseIcon;
/* prettier-ignore-end */
