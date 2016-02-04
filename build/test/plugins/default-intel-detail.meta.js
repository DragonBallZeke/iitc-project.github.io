// ==UserScript==
// @id             iitc-plugin-default-intel-detail@jonatkins
// @name           IITC plugin: Default intel detail level
// @category       Tweaks
// @version        0.2.0.20151111.74206
// @namespace      https://github.com/jonatkins/ingress-intel-total-conversion
// @updateURL      https://secure.jonatkins.com/iitc/test/plugins/default-intel-detail.meta.js
// @downloadURL    https://secure.jonatkins.com/iitc/test/plugins/default-intel-detail.user.js
// @description    [jonatkins-test-2015-11-11-074206] Use the portal level detail levels from the standard intel site. By default, IITC shows less detail when zoomed out, as this is enough for general use, is more friendly to the niantic servers, and loads much faster. This plugin restores the default zoom level to portal level mapping. Note: using this plugin causes a larger number of requests to the intel server, and at high resolutions can cause excessive requests to be made (yes: the default intel site also has this problem!), so it is not recommended except for low resolution screens.
// @include        https://www.ingress.com/intel*
// @include        http://www.ingress.com/intel*
// @match          https://www.ingress.com/intel*
// @match          http://www.ingress.com/intel*
// @include        https://www.ingress.com/mission/*
// @include        http://www.ingress.com/mission/*
// @match          https://www.ingress.com/mission/*
// @match          http://www.ingress.com/mission/*
// @grant          none
// ==/UserScript==
