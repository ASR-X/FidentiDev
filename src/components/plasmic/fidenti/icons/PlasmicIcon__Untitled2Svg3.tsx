// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Untitled2Svg3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Untitled2Svg3Icon(props: Untitled2Svg3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      data-name={"Layer 1"}
      viewBox={"0 0 79.5 79.5"}
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
        strokeWidth={"3"}
        d={"M1.5 1.5L78 78m0-76.5L1.5 78"}
      ></path>
    </svg>
  );
}

export default Untitled2Svg3Icon;
/* prettier-ignore-end */
