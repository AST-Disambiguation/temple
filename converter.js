"use strict";
const fs = require('fs');
const { parse } = require('@babel/parser');
const types = require('@babel/types');
const generator = require('@babel/generator').default;
const traverse = require('@babel/traverse').default;

const chaos_file = '';
let chaos_code = fs.readFileSync(chaos_file, { encoding: 'utf-8' });
let ast_code = parse(chaos_code, { sourceType: "module" });

// process rules visitor
const visitor = {}

const visitors_container = [visitor];

visitors_container.forEach(rule => {
    traverse(ast_code, rule, { name: "OE" })
});

// generate clean js file
const { code } = generator(ast_code, {
    minified: false, comments: false, retainLines: false, compact: false, jsescOption: {},
})
// output clean js code
fs.writeFileSync(decodeFile, code, { encoding: "utf-8" });
