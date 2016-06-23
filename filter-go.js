#!/usr/bin/env node
"use strict";
var pandoc = require("pandoc-filter");
var Str = pandoc.Str;
var startGoTemplate = "{{<";
var endGoTemplate = ">}}";
var ignore = false;
function action(type, value, format, meta) {
    if (type === "Str") {
        if (value === startGoTemplate) {
            ignore = true;
            return [];
        }
        if (value.indexOf(startGoTemplate) > 0) {
            value = value.replace(startGoTemplate, "");
            var s = value.indexOf("[");
            s++;
            var e = value.indexOf("]");
            ignore = true;
            return Str(value.substr(s, e - s));
        }
        if (value === endGoTemplate) {
            ignore = false;
            return [];
        }
        if (value.indexOf(endGoTemplate + ")") >= 0) {
            value = value.replace(endGoTemplate + ")", "");
            ignore = false;
            return Str(value);
        }
    }
    if (ignore === true)
        return [];
}
pandoc.stdio(action);
