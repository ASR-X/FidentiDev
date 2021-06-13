// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CancelsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CancelsvgIcon(props: CancelsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 47.5 47.5"}
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

      <defs>
        <clipPath id={"Jt-XPJGxOa"} clipPathUnits={"userSpaceOnUse"}>
          <path d={"M0 38h38V0H0v38z"}></path>
        </clipPath>
      </defs>

      <g
        clipPath={"url(#Jt-XPJGxOa)"}
        transform={"matrix(1.25 0 0 -1.25 0 47.5)"}
      >
        <path
          fill={"currentColor"}
          d={
            "M23.238 18.996l9.883 9.883a3 3 0 11-4.242 4.242l-9.883-9.883-9.883 9.883a3 3 0 11-4.242-4.243l9.883-9.882-9.907-9.907A3 3 0 019.09 4.847l9.906 9.906 9.883-9.882A2.992 2.992 0 0131 3.993a3 3 0 012.121 5.121l-9.883 9.882z"
          }
        ></path>
      </g>
    </svg>
  );
}

export default CancelsvgIcon;
/* prettier-ignore-end */
