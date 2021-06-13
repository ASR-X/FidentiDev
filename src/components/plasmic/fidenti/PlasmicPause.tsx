// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: wNxtZcFa8F4mXc5wMcFAw1
// Component: -s6EJFyC7E
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
import * as sty from "./PlasmicPause.module.css"; // plasmic-import: -s6EJFyC7E/css

import PauseIcon from "./icons/PlasmicIcon__Pause"; // plasmic-import: YhFAUigc_/icon

export type PlasmicPause__VariantMembers = {};

export type PlasmicPause__VariantsArgs = {};
type VariantPropType = keyof PlasmicPause__VariantsArgs;
export const PlasmicPause__VariantProps = new Array<VariantPropType>();

export type PlasmicPause__ArgsType = {};
type ArgPropType = keyof PlasmicPause__ArgsType;
export const PlasmicPause__ArgProps = new Array<ArgPropType>();

export type PlasmicPause__OverridesType = {
  root?: p.Flex<"svg">;
};

export interface DefaultPauseProps {
  className?: string;
}

function PlasmicPause__RenderFunc(props: {
  variants: PlasmicPause__VariantsArgs;
  args: PlasmicPause__ArgsType;
  overrides: PlasmicPause__OverridesType;
  dataFetches?: PlasmicPause__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  return (
    <PauseIcon
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
  PlasmicPause__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicPause__VariantsArgs;
    args?: PlasmicPause__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicPause__Fetches;
  } & Omit<PlasmicPause__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicPause__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicPause__ArgProps,
      internalVariantPropNames: PlasmicPause__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicPause__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPause";
  } else {
    func.displayName = `PlasmicPause.${nodeName}`;
  }
  return func;
}

export const PlasmicPause = Object.assign(
  // Top-level PlasmicPause renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicPause
    internalVariantProps: PlasmicPause__VariantProps,
    internalArgProps: PlasmicPause__ArgProps
  }
);

export default PlasmicPause;
/* prettier-ignore-end */