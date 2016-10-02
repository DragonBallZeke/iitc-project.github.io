// ==UserScript==
// @id             iitc-plugin-highlight-forgotten@jonatkins
// @name           IITC plugin: Inactive portals. Hightlight unclaimed portals with no recent activity
// @category       Highlighter
// @version        0.1.0.20161002.200117
// @namespace      https://github.com/jonatkins/ingress-intel-total-conversion
// @updateURL      https://iitc.me/build/test/plugins/portal-highlighter-forgotten.meta.js
// @downloadURL    https://iitc.me/build/test/plugins/portal-highlighter-forgotten.user.js
// @description    [iitc-test-2016-10-02-200117] Use the portal fill color to denote if the portal is unclaimed with no recent activity. Shades of red from one week to one month, then tinted to purple for longer. May also highlight captured portals that are stuck and fail to decay every 24 hours.
// @include        https://*.ingress.com/intel*
// @include        http://*.ingress.com/intel*
// @match          https://*.ingress.com/intel*
// @match          http://*.ingress.com/intel*
// @include        https://*.ingress.com/mission/*
// @include        http://*.ingress.com/mission/*
// @match          https://*.ingress.com/mission/*
// @match          http://*.ingress.com/mission/*
// @grant          none
// ==/UserScript==
