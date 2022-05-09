// ==UserScript==
// @name         Synology Notes UI
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Make Synology Notes UI look similar to Notion
// @author       Justin
// @include      https://*/?launchApp=SYNO.SDS.NoteStation.Application*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=quickconnect.to
// @grant        none
// ==/UserScript==


function GM_addStyle(css) {
  const style = document.getElementById("GM_addStyleBy8626") || (function() {
    const style = document.createElement('style');
    style.type = 'text/css';
    style.id = "GM_addStyleBy8626";
    document.head.appendChild(style);
    return style;
  })();
  const sheet = style.sheet;
  sheet.insertRule(css, (sheet.rules || sheet.cssRules || []).length);
}

//demo :

//body
GM_addStyle("body {font-size: 14px;}");
GM_addStyle("body {font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, 'Apple Color Emoji', Arial, sans-serif, 'Segoe UI Emoji', 'Segoe UI Symbol';}");

GM_addStyle(".syno-ns-win .x-tree-node .x-tree-selected {background: rgba(55, 53, 47, 0.08) none repeat scroll 0% 0%;");
GM_addStyle("div.x-tree-selected {color: rgb(55, 53, 47);")
GM_addStyle(".syno-ns-note-snippet-thumbnail{display:none;}");
GM_addStyle(".sds-window-v5 .x-layout-split.x-layout-split-west {border-right-width: 0px;}");
//GM_addStyle(".syno-ns-note-container-panel {background: rgba(55, 53, 47, 0.08)}");
GM_addStyle(".syno-ns-note-container-panel {border-right-width: 1px;border-right-color: rgba(198,212,224,0.7);}");
GM_addStyle(".x-layout-split-west {background: rgba(55, 53, 47, 0.08)}");


//top menu bar
//GM_addStyle(".syno-ns-win .x-window-tl {background: rgb(247, 246, 243)}");
GM_addStyle(".syno-ns-win .x-window-tl {background: #edebe9}");

//search bar
GM_addStyle("#ext-gen79 {background:#f3f2f1}");

//tree background
//GM_addStyle("div.syno-ux-treepanel {background: rgb(247, 246, 243) none repeat scroll 0% 0%;}");
GM_addStyle("div.syno-ux-treepanel {background: #f3f2f1;}");
//tree bvorder right
GM_addStyle("#ext-comp-1022 {border-right: 1px solid #edebe9;}");
//tree icons
GM_addStyle(".syno-ns-win .x-tree-node .x-tree-node-el .x-tree-node-icon { opacity: 0.7; }");

//tree text
GM_addStyle(".syno-ux-treepanel .x-tree-root-ct .x-tree-node-ct a span {color: rgba(25, 23, 17, 0.6);font-weight: 500; }");

//tree text selected
GM_addStyle(".syno-ns-win .x-tree-node .x-tree-selected .syno-ns-notebook-title {font-weight: 600; color: rgb(55, 53, 47);}");
GM_addStyle(".syno-ns-win .x-tree-node .x-tree-selected .syno-ns-notebook-total {font-weight: 600; color: rgb(55, 53, 47);}");
GM_addStyle(".syno-ns-win .x-tree-node .x-tree-selected .x-tree-node-icon {background-position: 0px 0px;}");

//main white section
GM_addStyle("#ext-comp-1233 {border-top: 1px solid #edebe9; padding-top: 4px;}");
GM_addStyle("#ext-comp-1022-xsplit {border-top: 1px solid #edebe9;}");

GM_addStyle(".syno-ns-win .syno-ns-note-snippet-group-container.syno-ns-note-snippet-container-select .syno-ns-note-snippet-container { background-color: rgba(55, 53, 47, 0.08); }");

//buttons
GM_addStyle(".syno-ux-button-default { background-color: inherit;}");
GM_addStyle(".syno-ns-win .syno-ns-mainpanel .syno-ns-toolbar .syno-ns-create-btn {background-image: none; background-color: #057FEB;}");
GM_addStyle(".syno-ns-win .syno-ns-mainpanel .syno-ns-toolbar .syno-ns-create-btn:hover {background-image: none; background-color: #005A9E;}");

/* Colours

    --themeDarker: #004578;
    --themeDark: #005A9E;
    --themeDarkAlt: #106EBE;
    --themePrimary: #0078d4;
    --themeSecondary: #2B88D8;
    --themeTertiary: #71AFE5;
    --themeLight: #C7E0F4;
    --themeLighter: #DEECF9;
    --themeLighterAlt: #EFF6FC;

    --neutralDark: #201f1e;
    --neutralPrimary: #323130;
    --neutralPrimaryAlt: #3b3a39;
    --neutralSecondary: #605e5c;
    --neutralTertiary: #a19f9d;
    --neutralTertiaryAlt: #c8c6c4;
    --neutralQuaternary: #d2d0ce;
    --neutralQuaternaryAlt: #e1dfdd;
    --neutralLight: #edebe9;
    --neutralLighter: #f3f2f1;
    --neutralLighterAlt: #faf9f8;
    */
