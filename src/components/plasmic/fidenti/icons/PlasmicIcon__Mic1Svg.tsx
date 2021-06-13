// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Mic1SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Mic1SvgIcon(props: Mic1SvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 15 32"}
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

      <g fill={"currentColor"}>
        <path
          d={
            "M7 24.007V28H4.034c-1.141 0-2 .859-2 2v1.5a.5.5 0 00.5.5h10a.5.5 0 00.5-.5v-1.425c0-1.164-.879-2.075-2-2.075H8v-3.993a7.58 7.58 0 007.068-7.564v-1.887a.534.534 0 10-1.068.001v1.887c0 3.597-2.9 6.522-6.466 6.522s-6.466-2.926-6.466-6.522v-1.887a.534.534 0 10-1.068 0v1.887c0 4.003 3.095 7.285 7 7.563zm5.034 6.068V31h-9v-1c0-.589.411-1 1-1h7c.57 0 1 .462 1 1.075z"
          }
        ></path>

        <path
          d={
            "M7.534-.034C5.034-.034 3 2.025 3 4.557v11.887c0 2.531 2.034 4.591 4.534 4.591s4.534-2.06 4.466-4.591V4.557A4.468 4.468 0 007.534-.034zM11 16.443c0 1.942-1.555 3.522-3.466 3.522S4 18.386 4 16.443V4.557c0-1.942 1.623-3.522 3.534-3.522S11 2.614 11 4.557v11.886z"
          }
        ></path>
      </g>
    </svg>
  );
}

export default Mic1SvgIcon;
/* prettier-ignore-end */
