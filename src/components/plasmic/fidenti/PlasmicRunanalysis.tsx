// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: wNxtZcFa8F4mXc5wMcFAw1
// Component: AEh8gMdRh2
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
import ModeTitle2 from "../../ModeTitle2"; // plasmic-import: jFhxioJa-O/component
import Box from "../../Box"; // plasmic-import: fCWWx9yiYh/component

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_fidenti.module.css"; // plasmic-import: wNxtZcFa8F4mXc5wMcFAw1/projectcss
import * as sty from "./PlasmicRunanalysis.module.css"; // plasmic-import: AEh8gMdRh2/css

export type PlasmicRunanalysis__VariantMembers = {};

export type PlasmicRunanalysis__VariantsArgs = {};
type VariantPropType = keyof PlasmicRunanalysis__VariantsArgs;
export const PlasmicRunanalysis__VariantProps = new Array<VariantPropType>();

export type PlasmicRunanalysis__ArgsType = {};
type ArgPropType = keyof PlasmicRunanalysis__ArgsType;
export const PlasmicRunanalysis__ArgProps = new Array<ArgPropType>();

export type PlasmicRunanalysis__OverridesType = {
  root?: p.Flex<"div">;
  modeTitle2?: p.Flex<typeof ModeTitle2>;
};

export interface DefaultRunanalysisProps {
  className?: string;
}

function PlasmicRunanalysis__RenderFunc(props: {
  variants: PlasmicRunanalysis__VariantsArgs;
  args: PlasmicRunanalysis__ArgsType;
  overrides: PlasmicRunanalysis__OverridesType;
  dataFetches?: PlasmicRunanalysis__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  return (
    <React.Fragment>
      {}
      {}

      <div className={defaultcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            defaultcss.all,
            projectcss.root_reset,
            sty.root
          )}
        >
          <ModeTitle2
            data-plasmic-name={"modeTitle2"}
            data-plasmic-override={overrides.modeTitle2}
            className={classNames("__wab_instance", sty.modeTitle2)}
          />

          <div className={classNames(defaultcss.all, sty.box__jsImD)}>
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(defaultcss.all, sty.box__viAuJ)}
            >
              <Box className={classNames("__wab_instance", sty.box__aEdyh)} />

              <Box className={classNames("__wab_instance", sty.box__pTa18)} />

              <Box className={classNames("__wab_instance", sty.box__ijua7)} />

              <Box className={classNames("__wab_instance", sty.box__kf2Kb)} />
            </p.Stack>

            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(defaultcss.all, sty.box___1Ozox)}
            >
              <Box className={classNames("__wab_instance", sty.box__tLlWs)} />

              <Box className={classNames("__wab_instance", sty.box__nDm9P)} />

              <Box className={classNames("__wab_instance", sty.box__vkERx)} />

              <Box className={classNames("__wab_instance", sty.box__xHau3)} />
            </p.Stack>
          </div>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "modeTitle2"],
  modeTitle2: ["modeTitle2"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  modeTitle2: typeof ModeTitle2;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicRunanalysis__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicRunanalysis__VariantsArgs;
    args?: PlasmicRunanalysis__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicRunanalysis__Fetches;
  } & Omit<PlasmicRunanalysis__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicRunanalysis__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicRunanalysis__ArgProps,
      internalVariantPropNames: PlasmicRunanalysis__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicRunanalysis__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicRunanalysis";
  } else {
    func.displayName = `PlasmicRunanalysis.${nodeName}`;
  }
  return func;
}

export const PlasmicRunanalysis = Object.assign(
  // Top-level PlasmicRunanalysis renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    modeTitle2: makeNodeComponent("modeTitle2"),

    // Metadata about props expected for PlasmicRunanalysis
    internalVariantProps: PlasmicRunanalysis__VariantProps,
    internalArgProps: PlasmicRunanalysis__ArgProps
  }
);

export default PlasmicRunanalysis;
/* prettier-ignore-end */