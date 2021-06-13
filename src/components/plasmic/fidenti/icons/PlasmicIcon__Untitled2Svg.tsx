// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Untitled2SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Untitled2SvgIcon(props: Untitled2SvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      data-name={"Layer 1"}
      viewBox={"0 0 77.5 77.5"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",
        stroke: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeMiterlimit={"10"}
        d={"M.5.5L77 77M77 .5L.5 77"}
      ></path>
    </svg>
  );
}

export default Untitled2SvgIcon;
/* prettier-ignore-end */
