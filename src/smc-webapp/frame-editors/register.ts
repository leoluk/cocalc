/* Register the frame-tree based editors. */

import "./generic/jquery-plugins";

import "./code-editor/register";  // should be first.

import "./wiki-editor/register";
import "./rmd-editor/register";
import "./rst-editor/register";

import "./markdown-editor/register.ts";
import "./html-editor/register.ts";
import "./latex-editor/register.ts";

import "./generic/test/init";