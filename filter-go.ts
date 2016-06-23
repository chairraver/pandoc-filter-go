#!/usr/bin/env node

///// <reference path="typings/index.d.ts" />

declare var require: any;

"use strict";

const pandoc = require("pandoc-filter");

const Str = pandoc.Str;
const startGoTemplate = "{{<";
const endGoTemplate = ">}}";

let ignore: boolean = false;

function action(type: string, value: string, format: string, meta: string) {
  if (type === "Str") {
    if (value === startGoTemplate) {
      ignore = true;
      return [];
    }
    if (value.indexOf(startGoTemplate) > 0) {
      value = value.replace(startGoTemplate, "");
      let s = value.indexOf("[");
      s++;
      let e = value.indexOf("]");
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
  if (ignore === true) return [];
}

pandoc.stdio(action);


