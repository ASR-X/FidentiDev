// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: wNxtZcFa8F4mXc5wMcFAw1
// Component: KRwSeJjW7Eq
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
import Home from "../../Home"; // plasmic-import: yXGuMQsgCK/component
import Mode from "../../Mode"; // plasmic-import: TTI1JEnzco/component
import ModeTitle2 from "../../ModeTitle2"; // plasmic-import: jFhxioJa-O/component
import RunBox from "../../RunBox"; // plasmic-import: adxIUkabTF/component

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_fidenti.module.css"; // plasmic-import: wNxtZcFa8F4mXc5wMcFAw1/projectcss
import * as sty from "./PlasmicMode4.module.css"; // plasmic-import: KRwSeJjW7Eq/css

export type PlasmicMode4__VariantMembers = {};

export type PlasmicMode4__VariantsArgs = {};
type VariantPropType = keyof PlasmicMode4__VariantsArgs;
export const PlasmicMode4__VariantProps = new Array<VariantPropType>();

export type PlasmicMode4__ArgsType = {};
type ArgPropType = keyof PlasmicMode4__ArgsType;
export const PlasmicMode4__ArgProps = new Array<ArgPropType>();

export type PlasmicMode4__OverridesType = {
  root?: p.Flex<"div">;
  home?: p.Flex<typeof Home>;
  classic?: p.Flex<typeof Mode>;
  umolympics?: p.Flex<typeof Mode>;
  analysis?: p.Flex<typeof Mode>;
  modetitle?: p.Flex<typeof ModeTitle2>;
  runBox?: p.Flex<typeof RunBox>;
};

export interface DefaultMode4Props {
  className?: string;
}

function PlasmicMode4__RenderFunc(props: {
  variants: PlasmicMode4__VariantsArgs;
  args: PlasmicMode4__ArgsType;
  overrides: PlasmicMode4__OverridesType;
  dataFetches?: PlasmicMode4__Fetches;
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
          <div className={classNames(defaultcss.all, sty.box__iGnk8)}>
            <Home
              data-plasmic-name={"home"}
              data-plasmic-override={overrides.home}
              className={classNames("__wab_instance", sty.home)}
            />

            <div className={classNames(defaultcss.all, sty.box__oytKf)}>
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(defaultcss.all, sty.box__etvzI)}
              >
                <Mode
                  data-plasmic-name={"classic"}
                  data-plasmic-override={overrides.classic}
                  className={classNames("__wab_instance", sty.classic)}
                >
                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.box__eopj
                    )}
                  >
                    {"classic"}
                  </div>
                </Mode>

                <Mode
                  data-plasmic-name={"umolympics"}
                  data-plasmic-override={overrides.umolympics}
                  className={classNames("__wab_instance", sty.umolympics)}
                >
                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.box__eE7Hg
                    )}
                  >
                    {"um olympics"}
                  </div>
                </Mode>

                <Mode
                  data-plasmic-name={"analysis"}
                  data-plasmic-override={overrides.analysis}
                  className={classNames("__wab_instance", sty.analysis)}
                >
                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.box___8Jht
                    )}
                  >
                    {"analysis"}
                  </div>
                </Mode>
              </p.Stack>
            </div>

            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(defaultcss.all, sty.box__yJhwu)}
            >
              <ModeTitle2
                data-plasmic-name={"modetitle"}
                data-plasmic-override={overrides.modetitle}
                className={classNames("__wab_instance", sty.modetitle)}
              />

              <RunBox
                data-plasmic-name={"runBox"}
                data-plasmic-override={overrides.runBox}
                className={classNames("__wab_instance", sty.runBox)}
              />
            </p.Stack>

            <div className={classNames(defaultcss.all, sty.box__hy0Yt)} />
          </div>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "home",
    "classic",
    "umolympics",
    "analysis",
    "modetitle",
    "runBox"
  ],
  home: ["home"],
  classic: ["classic"],
  umolympics: ["umolympics"],
  analysis: ["analysis"],
  modetitle: ["modetitle"],
  runBox: ["runBox"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  home: typeof Home;
  classic: typeof Mode;
  umolympics: typeof Mode;
  analysis: typeof Mode;
  modetitle: typeof ModeTitle2;
  runBox: typeof RunBox;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicMode4__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicMode4__VariantsArgs;
    args?: PlasmicMode4__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicMode4__Fetches;
  } & Omit<PlasmicMode4__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicMode4__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicMode4__ArgProps,
      internalVariantPropNames: PlasmicMode4__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicMode4__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicMode4";
  } else {
    func.displayName = `PlasmicMode4.${nodeName}`;
  }
  return func;
}

export const PlasmicMode4 = Object.assign(
  // Top-level PlasmicMode4 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    home: makeNodeComponent("home"),
    classic: makeNodeComponent("classic"),
    umolympics: makeNodeComponent("umolympics"),
    analysis: makeNodeComponent("analysis"),
    modetitle: makeNodeComponent("modetitle"),
    runBox: makeNodeComponent("runBox"),

    // Metadata about props expected for PlasmicMode4
    internalVariantProps: PlasmicMode4__VariantProps,
    internalArgProps: PlasmicMode4__ArgProps
  }
);

export default PlasmicMode4;
/* prettier-ignore-end */
