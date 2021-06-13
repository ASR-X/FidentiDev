// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: wNxtZcFa8F4mXc5wMcFAw1
// Component: MIo-gqCJB6
import * as React from "react";

import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_fidenti.module.css"; // plasmic-import: wNxtZcFa8F4mXc5wMcFAw1/projectcss
import * as sty from "./PlasmicXButton3.module.css"; // plasmic-import: MIo-gqCJB6/css

import Untitled2Svg3Icon from "./icons/PlasmicIcon__Untitled2Svg3"; // plasmic-import: Au8umHxTs/icon

export type PlasmicXButton3__VariantMembers = {};

export type PlasmicXButton3__VariantsArgs = {};
type VariantPropType = keyof PlasmicXButton3__VariantsArgs;
export const PlasmicXButton3__VariantProps = new Array<VariantPropType>();

export type PlasmicXButton3__ArgsType = {};
type ArgPropType = keyof PlasmicXButton3__ArgsType;
export const PlasmicXButton3__ArgProps = new Array<ArgPropType>();

export type PlasmicXButton3__OverridesType = {
  root?: p.Flex<"svg">;
};

export interface DefaultXButton3Props {
  className?: string;
}

function PlasmicXButton3__RenderFunc(props: {
  variants: PlasmicXButton3__VariantsArgs;
  args: PlasmicXButton3__ArgsType;
  overrides: PlasmicXButton3__OverridesType;
  dataFetches?: PlasmicXButton3__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  return (
    <Untitled2Svg3Icon
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
      role={"img"}
    />
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "svg";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicXButton3__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicXButton3__VariantsArgs;
    args?: PlasmicXButton3__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicXButton3__Fetches;
  } & Omit<PlasmicXButton3__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicXButton3__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicXButton3__ArgProps,
      internalVariantPropNames: PlasmicXButton3__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicXButton3__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicXButton3";
  } else {
    func.displayName = `PlasmicXButton3.${nodeName}`;
  }
  return func;
}

export const PlasmicXButton3 = Object.assign(
  // Top-level PlasmicXButton3 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicXButton3
    internalVariantProps: PlasmicXButton3__VariantProps,
    internalArgProps: PlasmicXButton3__ArgProps
  }
);

export default PlasmicXButton3;
/* prettier-ignore-end */
