#!/usr/bin/env node

"use strict";

// Pandoc filter to convert all text to uppercase

import * as pandoc from "pandoc-filter";

var Str: string = pandoc.Str;
let ignore: boolean = false;

function action(type: string, value: string, format: string, meta: string) {
    if (type === 'Str') {
        if (value === '{{<') {
            ignore = true;
            return [];
        }
        if (value === '>}}') {
            ignore = false;
            return [];
        }
    }
    if (ignore == true) return [];
}

pandoc.stdio(action);
