import { style } from "@vanilla-extract/css";
import { reset } from "../layers.css";
/**
 * Base reset styles to be applied to every element
 */
export const baseReset = style(reset({
    boxSizing: "border-box",
    margin: 0,
    padding: 0,
    fontSize: "100%",
    fontFamily: '"proxima-nova", "Nunito Sans", Arial, sans-serif',
    fontWeight: "inherit",
    fontStyle: "normal",
    lineHeight: "inherit",
    borderWidth: 0,
    borderStyle: "solid",
    "::before": {
        boxSizing: "border-box",
        borderWidth: 0,
        borderStyle: "solid",
    },
    "::after": {
        boxSizing: "border-box",
        borderWidth: 0,
        borderStyle: "solid",
    },
}));
const anchor = style(reset({
    color: "inherit",
    textDecoration: "inherit",
}));
const title = style(reset({
    fontSize: "inherit",
}));
const block = style(reset({
    display: "block",
}));
const visualBlock = style([
    block,
    reset({
        verticalAlign: "middle",
    }),
]);
const imgBlock = style([
    visualBlock,
    reset({
        maxWidth: "100%",
        height: "auto",
    }),
]);
const body = style(reset({
    lineHeight: 1.15,
}));
const list = style(reset({
    listStyle: "none",
}));
const transparent = style(reset({
    backgroundColor: "transparent",
}));
/**
 * CSS resets for certain HTML elements
 */
export const elementResets = {
    a: anchor,
    article: block,
    aside: block,
    audio: visualBlock,
    body: body,
    button: transparent,
    canvas: visualBlock,
    details: block,
    embed: visualBlock,
    figcaption: block,
    figure: block,
    footer: block,
    h1: title,
    h2: title,
    h3: title,
    h4: title,
    h5: title,
    h6: title,
    header: block,
    hgroup: block,
    iframe: visualBlock,
    img: imgBlock,
    menu: block,
    nav: block,
    object: visualBlock,
    ol: list,
    section: block,
    svg: visualBlock,
    ul: list,
    video: imgBlock,
};
