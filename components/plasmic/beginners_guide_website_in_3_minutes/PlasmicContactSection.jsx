/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ieFqT7zduQSG5bkum3ngpi
// Component: uiOL1dk5Q8jl
import * as React from "react";
import {
  PlasmicLink as PlasmicLink__,
  Stack as Stack__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  hasVariant
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import { useScreenVariants as useScreenVariantsqLm3LzkJRke9 } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: qLm3LzkJRke9/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic.module.css"; // plasmic-import: ieFqT7zduQSG5bkum3ngpi/projectcss
import sty from "./PlasmicContactSection.module.css"; // plasmic-import: uiOL1dk5Q8jl/css
import RightArrowIcon from "./icons/PlasmicIcon__RightArrow"; // plasmic-import: _SLG_PuUcB9P/icon

createPlasmicElementProxy;

export const PlasmicContactSection__VariantProps = new Array();

export const PlasmicContactSection__ArgProps = new Array();

const $$ = {};

function PlasmicContactSection__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );
  const $props = {
    ...args,
    ...variants
  };
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsqLm3LzkJRke9()
  });
  return (
    <Stack__
      as={"section"}
      data-plasmic-name={"contact"}
      data-plasmic-override={overrides.contact}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.contact
      )}
      id={"contact"}
    >
      <div className={classNames(projectcss.all, sty.freeBox__aZljr)}>
        <h2
          data-plasmic-name={"h2"}
          data-plasmic-override={overrides.h2}
          className={classNames(
            projectcss.all,
            projectcss.h2,
            projectcss.__wab_text,
            sty.h2
          )}
          id={"contact"}
        >
          {hasVariant(globalVariants, "screen", "mobileOnly")
            ? "Ready to get your business out \nthere?"
            : "Ready to work together?"}
        </h2>
        <div className={classNames(projectcss.all, sty.freeBox__grYfC)}>
          <PlasmicLink__
            data-plasmic-name={"link"}
            data-plasmic-override={overrides.link}
            className={classNames(
              projectcss.all,
              projectcss.a,
              projectcss.__wab_text,
              sty.link
            )}
            href={"https://www.plasmic.app/"}
            platform={"react"}
          >
            {hasVariant(globalVariants, "screen", "mobileOnly")
              ? "let\u2019s make something special"
              : "I'd love to hear from you"}
          </PlasmicLink__>
          <RightArrowIcon
            data-plasmic-name={"svg"}
            data-plasmic-override={overrides.svg}
            className={classNames(projectcss.all, sty.svg)}
            role={"img"}
          />
        </div>
      </div>
    </Stack__>
  );
}

const PlasmicDescendants = {
  contact: ["contact", "h2", "link", "svg"],
  h2: ["h2"],
  link: ["link"],
  svg: ["svg"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicContactSection__ArgProps,
          internalVariantPropNames: PlasmicContactSection__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicContactSection__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "contact") {
    func.displayName = "PlasmicContactSection";
  } else {
    func.displayName = `PlasmicContactSection.${nodeName}`;
  }
  return func;
}

export const PlasmicContactSection = Object.assign(
  // Top-level PlasmicContactSection renders the root element
  makeNodeComponent("contact"),
  {
    // Helper components rendering sub-elements
    h2: makeNodeComponent("h2"),
    link: makeNodeComponent("link"),
    svg: makeNodeComponent("svg"),
    // Metadata about props expected for PlasmicContactSection
    internalVariantProps: PlasmicContactSection__VariantProps,
    internalArgProps: PlasmicContactSection__ArgProps
  }
);

export default PlasmicContactSection;
/* prettier-ignore-end */
