// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Untitled2Svg2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Untitled2Svg2Icon(props: Untitled2Svg2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      data-name={"Layer 1"}
      viewBox={"0 0 78.5 78.5"}
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
        strokeWidth={"2"}
        d={"M1 1l76.5 76.5m0-76.5L1 77.5"}
      ></path>
    </svg>
  );
}

export default Untitled2Svg2Icon;
/* prettier-ignore-end */
