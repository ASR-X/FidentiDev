// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type HomesvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function HomesvgIcon(props: HomesvgIconProps) {
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
          "M20.27 10.56l-7.92-7.91a.48.48 0 00-.7 0l-7.92 7.91A2.49 2.49 0 003 12.33v6.17A2.5 2.5 0 005.5 21h13a2.5 2.5 0 002.5-2.5v-6.17a2.49 2.49 0 00-.73-1.77zM20 18.5a1.5 1.5 0 01-1.5 1.5h-13A1.5 1.5 0 014 18.5v-6.17a1.5 1.5 0 01.44-1.06L12 3.71l7.56 7.56a1.5 1.5 0 01.44 1.06z"
        }
      ></path>
    </svg>
  );
}

export default HomesvgIcon;
/* prettier-ignore-end */
