"use strict"

var Viz = require("viz.js")

module.exports.activate = () => {
    return {
        extendMarkdownIt(md) {
            const highlight = md.options.highlight;
            md.options.highlight = (code, lang) => {
                if (lang && lang.match(/\bdot\b/i)) {
                    var result = Viz(code, { format: "svg" });
                    return `<div style='{padding-top: -1cm}'>${result}</div>`;
                    //return result
                }
                return highlight(code, lang);
            };
            return md;
        }
    }
}
