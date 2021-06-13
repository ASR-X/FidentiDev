// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: wNxtZcFa8F4mXc5wMcFAw1
// Component: C4Svn72q0K
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
import NameBox from "../../NameBox"; // plasmic-import: fmg2kCtHOo/component
import MicButton2 from "../../MicButton2"; // plasmic-import: wiKeBsYJZc/component

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_fidenti.module.css"; // plasmic-import: wNxtZcFa8F4mXc5wMcFAw1/projectcss
import * as sty from "./PlasmicMode2.module.css"; // plasmic-import: C4Svn72q0K/css

export type PlasmicMode2__VariantMembers = {};

export type PlasmicMode2__VariantsArgs = {};
type VariantPropType = keyof PlasmicMode2__VariantsArgs;
export const PlasmicMode2__VariantProps = new Array<VariantPropType>();

export type PlasmicMode2__ArgsType = {};
type ArgPropType = keyof PlasmicMode2__ArgsType;
export const PlasmicMode2__ArgProps = new Array<ArgPropType>();

export type PlasmicMode2__OverridesType = {
  root?: p.Flex<"div">;
  home?: p.Flex<typeof Home>;
  classic?: p.Flex<typeof Mode>;
  umolympics?: p.Flex<typeof Mode>;
  recitation?: p.Flex<typeof Mode>;
  analysis?: p.Flex<typeof Mode>;
  modetitle?: p.Flex<typeof ModeTitle2>;
  nameBox?: p.Flex<typeof NameBox>;
  micButton2?: p.Flex<typeof MicButton2>;
};

export interface DefaultMode2Props {
  className?: string;
}

function PlasmicMode2__RenderFunc(props: {
  variants: PlasmicMode2__VariantsArgs;
  args: PlasmicMode2__ArgsType;
  overrides: PlasmicMode2__OverridesType;
  dataFetches?: PlasmicMode2__Fetches;
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
          <div className={classNames(defaultcss.all, sty.box__wzjH)}>
            <Home
              data-plasmic-name={"home"}
              data-plasmic-override={overrides.home}
              className={classNames("__wab_instance", sty.home)}
            />

            <div className={classNames(defaultcss.all, sty.box__vgz2X)}>
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(defaultcss.all, sty.box___5XxZp)}
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
                      sty.box__u7HfO
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
                      sty.box__rT2J
                    )}
                  >
                    {"um olympics"}
                  </div>
                </Mode>

                <Mode
                  data-plasmic-name={"recitation"}
                  data-plasmic-override={overrides.recitation}
                  className={classNames("__wab_instance", sty.recitation)}
                >
                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.box__t2Spj
                    )}
                  >
                    {"recitation"}
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
                      sty.box__bj4A
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
              className={classNames(defaultcss.all, sty.box__t8Ex4)}
            >
              <ModeTitle2
                data-plasmic-name={"modetitle"}
                data-plasmic-override={overrides.modetitle}
                className={classNames("__wab_instance", sty.modetitle)}
              />

              <NameBox
                data-plasmic-name={"nameBox"}
                data-plasmic-override={overrides.nameBox}
                className={classNames("__wab_instance", sty.nameBox)}
              />

              <MicButton2
                data-plasmic-name={"micButton2"}
                data-plasmic-override={overrides.micButton2}
                className={classNames("__wab_instance", sty.micButton2)}
              />
            </p.Stack>

            <div className={classNames(defaultcss.all, sty.box__un3T6)} />
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
    "recitation",
    "analysis",
    "modetitle",
    "nameBox",
    "micButton2"
  ],
  home: ["home"],
  classic: ["classic"],
  umolympics: ["umolympics"],
  recitation: ["recitation"],
  analysis: ["analysis"],
  modetitle: ["modetitle"],
  nameBox: ["nameBox"],
  micButton2: ["micButton2"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  home: typeof Home;
  classic: typeof Mode;
  umolympics: typeof Mode;
  recitation: typeof Mode;
  analysis: typeof Mode;
  modetitle: typeof ModeTitle2;
  nameBox: typeof NameBox;
  micButton2: typeof MicButton2;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicMode2__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicMode2__VariantsArgs;
    args?: PlasmicMode2__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicMode2__Fetches;
  } & Omit<PlasmicMode2__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicMode2__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicMode2__ArgProps,
      internalVariantPropNames: PlasmicMode2__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicMode2__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicMode2";
  } else {
    func.displayName = `PlasmicMode2.${nodeName}`;
  }
  return func;
}

export const PlasmicMode2 = Object.assign(
  // Top-level PlasmicMode2 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    home: makeNodeComponent("home"),
    classic: makeNodeComponent("classic"),
    umolympics: makeNodeComponent("umolympics"),
    recitation: makeNodeComponent("recitation"),
    analysis: makeNodeComponent("analysis"),
    modetitle: makeNodeComponent("modetitle"),
    nameBox: makeNodeComponent("nameBox"),
    micButton2: makeNodeComponent("micButton2"),

    // Metadata about props expected for PlasmicMode2
    internalVariantProps: PlasmicMode2__VariantProps,
    internalArgProps: PlasmicMode2__ArgProps
  }
);

export default PlasmicMode2;
/* prettier-ignore-end */