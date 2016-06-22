#!/usr/bin/env node

"use strict";

// Pandoc filter to convert all text to uppercase

var pandoc = require("pandoc-filter");

var Str = pandoc.Str;
var ignore = false;
var startGoTemplate = "{{<"
var endGoTemplate = ">}}"

function action(type, value, format, meta) {
  if (type === 'Str') {
    if (value === startGoTemplate) {
      ignore = true;
      return [];
    }
    if (value.indexOf(startGoTemplate) > 0) {
      value = value.replace(startGoTemplate, "")
      return Str(value)
    }
    if (value === endGoTemplate) {
      ignore = false;
      return [];
    }
    if (value.indexOf(endGoTemplate) == 0) {
      value = value.replace(endGoTemplate, "")
      return Str(value)
    }
  }
  if (ignore == true)
    return [];
}

pandoc.stdio(action);
