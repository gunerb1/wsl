"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Options = void 0;
const Dictionary_1 = require("./Dictionary");
const AnchorMode_1 = require("./AnchorMode");
class Options {
    constructor() {
        // current document options
        this.optionsFlag = [];
        this.isProgrammaticallySave = false;
        this.isOrderedListDetected = false;
        // workspace settings
        this.DEPTH_FROM = new Dictionary_1.Dictionary("depthFrom", 1);
        this.DEPTH_TO = new Dictionary_1.Dictionary("depthTo", 6);
        this.INSERT_ANCHOR = new Dictionary_1.Dictionary("insertAnchor", false);
        this.WITH_LINKS = new Dictionary_1.Dictionary("withLinks", true);
        this.ORDERED_LIST = new Dictionary_1.Dictionary("orderedList", false);
        this.UPDATE_ON_SAVE = new Dictionary_1.Dictionary("updateOnSave", true);
        this.ANCHOR_MODE = new Dictionary_1.Dictionary("anchorMode", AnchorMode_1.AnchorMode.github);
        this.BULLET_CHAR = new Dictionary_1.Dictionary("bulletCharacter", "-");
        this.DETECT_AUTO_SET_SECTION = new Dictionary_1.Dictionary("detectAndAutoSetSection", false);
        this.extensionName = "markdown-toc";
        this.EOL = require('os').EOL;
        // language configuration
        this.lineEnding = "";
        this.tabSize = 2;
        this.insertSpaces = false;
        this.autoSave = false;
        // special characters
        this.tab = '\t';
    }
}
exports.Options = Options;
//# sourceMappingURL=Options.js.map