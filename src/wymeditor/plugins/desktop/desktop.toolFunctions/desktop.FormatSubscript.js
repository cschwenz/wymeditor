/*
 * Desktop plugin for WYMeditor : what you see is What You Mean web-based editor
 * Copyright (c) 2011  Calvin Schwenzfeier
 * Dual licensed under the MIT (MIT-license.txt)
 * and GPL (GPL-license.txt) licenses.
 *
 * File Authors:
 *      Calvin Schwenzfeier (calvin DOT schwenzfeier A~T gmail dotCOM)
 */

WYMeditor.editor.prototype.desktop.toolFunctions.FormatSubscript = new Object();

/*
 *################################## WARNING ###################################
 *##                                                                          ##
 *##   File is generated by the .../scripts/create_tool_defaults.pl script!   ##
 *##                                                                          ##
 *##  To disable auto-generation of this file, place a multi-line comment in  ##
 *##  the space before the tool entry in the .availableTools() method in the  ##
 *##  jquery.wymeditor.desktop.js file.                                       ##
 *##                                                                          ##
 *##############################################################################
 */

/**
 * Set the parent object for this FormatSubscript object.
 * 
 * @param parentObj  A reference to the parent object of this FormatSubscript object.
 */
WYMeditor.editor.prototype.desktop.toolFunctions.FormatSubscript.setParent = function(parentObj) {
    this.parent = parentObj;
};

/**
 * Default event handler for 'blur' events on the FormatSubscript tool.
 */
WYMeditor.editor.prototype.desktop.toolFunctions.FormatSubscript.blur = function(eventObj) {
    if( (this.selfObject.parent.DEBUG != undefined) &&
        (typeof(this.selfObject.parent.DEBUG) == "boolean") &&
        this.selfObject.parent.DEBUG ) {
        console.log("The FormatSubscript tool detected a 'blur' event.");
        console.log(eventObj);
    }
};

/**
 * Default event handler for 'change' events on the FormatSubscript tool.
 */
WYMeditor.editor.prototype.desktop.toolFunctions.FormatSubscript.change = function(eventObj) {
    if( (this.selfObject.parent.DEBUG != undefined) &&
        (typeof(this.selfObject.parent.DEBUG) == "boolean") &&
        this.selfObject.parent.DEBUG ) {
        console.log("The FormatSubscript tool detected a 'change' event.");
        console.log(eventObj);
    }
};

/**
 * Default event handler for 'click' events on the FormatSubscript tool.
 */
WYMeditor.editor.prototype.desktop.toolFunctions.FormatSubscript.click = function(eventObj) {
    var wym = this.selfObject.parent.parent;
    var sel = wym.selection();
    var anchor = sel.anchorNode;
    var focus = sel.focusNode;
    var anchorValue = anchor.nodeValue;
    var focusValue = focus.nodeValue;
    var anchorParent = anchor.parentNode;
    var focusParent = focus.parentNode;
    var begin = sel.anchorOffset;
    var end = sel.focusOffset;
    if(wym.desktop.domUtils.sameNode(anchor, focus)) {
        var beforeNode = document.createTextNode(anchorValue.substring(0, begin));
        var strikeNode = document.createElement("sub");
        strikeNode.innerHTML = anchorValue.substring(begin, end);
        var afterNode = document.createTextNode(anchorValue.substring(end, anchorValue.length));
        anchorParent.replaceChild(afterNode, anchor);
        anchorParent.insertBefore(strikeNode, afterNode);
        anchorParent.insertBefore(beforeNode, strikeNode);
    }
    else {
        var beforeNode = document.createTextNode(anchorValue.substring(0, begin));
        var strikeNodeBegin = document.createElement("sub");
        strikeNodeBegin.innerHTML = anchorValue.substring(begin, anchorValue.length);
        var curNode = (anchor.nextSibling != null)
                        ? anchor.nextSibling
                        : anchor.parentNode.nextSibling.firstChild;
        while(!wym.desktop.domUtils.sameNode(curNode, focus)) {
            curNode.innerHTML = "<sub>" + curNode.innerHTML + "</sub>";
            curNode = (curNode.nextSibling != null)
                        ? curNode.nextSibling
                        : curNode.parentNode.nextSibling.firstChild;
        }
        var afterNode = document.createTextNode(focusValue.substring(end, focusValue.length));
        var strikeNodeEnd = document.createElement("sub");
        strikeNodeEnd.innerHTML = focusValue.substring(0, end);
        anchorParent.replaceChild(strikeNodeBegin, anchor);
        anchorParent.insertBefore(beforeNode, strikeNodeBegin);
        focusParent.replaceChild(afterNode, focus);
        focusParent.insertBefore(strikeNodeEnd, afterNode);
    }
};

/**
 * Default event handler for 'dblclick' events on the FormatSubscript tool.
 */
WYMeditor.editor.prototype.desktop.toolFunctions.FormatSubscript.dblclick = function(eventObj) {
    if( (this.selfObject.parent.DEBUG != undefined) &&
        (typeof(this.selfObject.parent.DEBUG) == "boolean") &&
        this.selfObject.parent.DEBUG ) {
        console.log("The FormatSubscript tool detected a 'dblclick' event.");
        console.log(eventObj);
    }
};

/**
 * Default event handler for 'error' events on the FormatSubscript tool.
 */
WYMeditor.editor.prototype.desktop.toolFunctions.FormatSubscript.error = function(eventObj) {
    if( (this.selfObject.parent.DEBUG != undefined) &&
        (typeof(this.selfObject.parent.DEBUG) == "boolean") &&
        this.selfObject.parent.DEBUG ) {
        console.log("The FormatSubscript tool detected an 'error' event.");
        console.log(eventObj);
    }
};

/**
 * Default event handler for 'focus' events on the FormatSubscript tool.
 */
WYMeditor.editor.prototype.desktop.toolFunctions.FormatSubscript.focus = function(eventObj) {
    if( (this.selfObject.parent.DEBUG != undefined) &&
        (typeof(this.selfObject.parent.DEBUG) == "boolean") &&
        this.selfObject.parent.DEBUG ) {
        console.log("The FormatSubscript tool detected a 'focus' event.");
        console.log(eventObj);
    }
};

/**
 * Default event handler for 'focusin' events on the FormatSubscript tool.
 */
WYMeditor.editor.prototype.desktop.toolFunctions.FormatSubscript.focusin = function(eventObj) {
    if( (this.selfObject.parent.DEBUG != undefined) &&
        (typeof(this.selfObject.parent.DEBUG) == "boolean") &&
        this.selfObject.parent.DEBUG ) {
        console.log("The FormatSubscript tool detected a 'focusin' event.");
        console.log(eventObj);
    }
};

/**
 * Default event handler for 'focusout' events on the FormatSubscript tool.
 */
WYMeditor.editor.prototype.desktop.toolFunctions.FormatSubscript.focusout = function(eventObj) {
    if( (this.selfObject.parent.DEBUG != undefined) &&
        (typeof(this.selfObject.parent.DEBUG) == "boolean") &&
        this.selfObject.parent.DEBUG ) {
        console.log("The FormatSubscript tool detected a 'focusout' event.");
        console.log(eventObj);
    }
};

/**
 * Default event handler for 'hover' events on the FormatSubscript tool.
 */
WYMeditor.editor.prototype.desktop.toolFunctions.FormatSubscript.hover = function(eventObj) {
    if( (this.selfObject.parent.DEBUG != undefined) &&
        (typeof(this.selfObject.parent.DEBUG) == "boolean") &&
        this.selfObject.parent.DEBUG ) {
        console.log("The FormatSubscript tool detected a 'hover' event.");
        console.log(eventObj);
    }
};

/**
 * Default event handler for 'keydown' events on the FormatSubscript tool.
 */
WYMeditor.editor.prototype.desktop.toolFunctions.FormatSubscript.keydown = function(eventObj) {
    if( (this.selfObject.parent.DEBUG != undefined) &&
        (typeof(this.selfObject.parent.DEBUG) == "boolean") &&
        this.selfObject.parent.DEBUG ) {
        console.log("The FormatSubscript tool detected a 'keydown' event.");
        console.log(eventObj);
    }
};

/**
 * Default event handler for 'keypress' events on the FormatSubscript tool.
 */
WYMeditor.editor.prototype.desktop.toolFunctions.FormatSubscript.keypress = function(eventObj) {
    if( (this.selfObject.parent.DEBUG != undefined) &&
        (typeof(this.selfObject.parent.DEBUG) == "boolean") &&
        this.selfObject.parent.DEBUG ) {
        console.log("The FormatSubscript tool detected a 'keypress' event.");
        console.log(eventObj);
    }
};

/**
 * Default event handler for 'keyup' events on the FormatSubscript tool.
 */
WYMeditor.editor.prototype.desktop.toolFunctions.FormatSubscript.keyup = function(eventObj) {
    if( (this.selfObject.parent.DEBUG != undefined) &&
        (typeof(this.selfObject.parent.DEBUG) == "boolean") &&
        this.selfObject.parent.DEBUG ) {
        console.log("The FormatSubscript tool detected a 'keyup' event.");
        console.log(eventObj);
    }
};

/**
 * Default event handler for 'load' events on the FormatSubscript tool.
 */
WYMeditor.editor.prototype.desktop.toolFunctions.FormatSubscript.load = function(eventObj) {
    if( (this.selfObject.parent.DEBUG != undefined) &&
        (typeof(this.selfObject.parent.DEBUG) == "boolean") &&
        this.selfObject.parent.DEBUG ) {
        console.log("The FormatSubscript tool detected a 'load' event.");
        console.log(eventObj);
    }
};

/**
 * Default event handler for 'mousedown' events on the FormatSubscript tool.
 */
WYMeditor.editor.prototype.desktop.toolFunctions.FormatSubscript.mousedown = function(eventObj) {
    if( (this.selfObject.parent.DEBUG != undefined) &&
        (typeof(this.selfObject.parent.DEBUG) == "boolean") &&
        this.selfObject.parent.DEBUG ) {
        console.log("The FormatSubscript tool detected a 'mousedown' event.");
        console.log(eventObj);
    }
};

/**
 * Default event handler for 'mouseenter' events on the FormatSubscript tool.
 */
WYMeditor.editor.prototype.desktop.toolFunctions.FormatSubscript.mouseenter = function(eventObj) {
    if( (this.selfObject.parent.DEBUG != undefined) &&
        (typeof(this.selfObject.parent.DEBUG) == "boolean") &&
        this.selfObject.parent.DEBUG ) {
        console.log("The FormatSubscript tool detected a 'mouseenter' event.");
        console.log(eventObj);
    }
};

/**
 * Default event handler for 'mouseleave' events on the FormatSubscript tool.
 */
WYMeditor.editor.prototype.desktop.toolFunctions.FormatSubscript.mouseleave = function(eventObj) {
    if( (this.selfObject.parent.DEBUG != undefined) &&
        (typeof(this.selfObject.parent.DEBUG) == "boolean") &&
        this.selfObject.parent.DEBUG ) {
        console.log("The FormatSubscript tool detected a 'mouseleave' event.");
        console.log(eventObj);
    }
};

/**
 * Default event handler for 'mousemove' events on the FormatSubscript tool.
 */
WYMeditor.editor.prototype.desktop.toolFunctions.FormatSubscript.mousemove = function(eventObj) {
    if( (this.selfObject.parent.DEBUG != undefined) &&
        (typeof(this.selfObject.parent.DEBUG) == "boolean") &&
        this.selfObject.parent.DEBUG ) {
        console.log("The FormatSubscript tool detected a 'mousemove' event.");
        console.log(eventObj);
    }
};

/**
 * Default event handler for 'mouseout' events on the FormatSubscript tool.
 */
WYMeditor.editor.prototype.desktop.toolFunctions.FormatSubscript.mouseout = function(eventObj) {
    if( (this.selfObject.parent.DEBUG != undefined) &&
        (typeof(this.selfObject.parent.DEBUG) == "boolean") &&
        this.selfObject.parent.DEBUG ) {
        console.log("The FormatSubscript tool detected a 'mouseout' event.");
        console.log(eventObj);
    }
};

/**
 * Default event handler for 'mouseover' events on the FormatSubscript tool.
 */
WYMeditor.editor.prototype.desktop.toolFunctions.FormatSubscript.mouseover = function(eventObj) {
    if( (this.selfObject.parent.DEBUG != undefined) &&
        (typeof(this.selfObject.parent.DEBUG) == "boolean") &&
        this.selfObject.parent.DEBUG ) {
        console.log("The FormatSubscript tool detected a 'mouseover' event.");
        console.log(eventObj);
    }
};

/**
 * Default event handler for 'mouseup' events on the FormatSubscript tool.
 */
WYMeditor.editor.prototype.desktop.toolFunctions.FormatSubscript.mouseup = function(eventObj) {
    if( (this.selfObject.parent.DEBUG != undefined) &&
        (typeof(this.selfObject.parent.DEBUG) == "boolean") &&
        this.selfObject.parent.DEBUG ) {
        console.log("The FormatSubscript tool detected a 'mouseup' event.");
        console.log(eventObj);
    }
};

/**
 * Default event handler for 'ready' events on the FormatSubscript tool.
 */
WYMeditor.editor.prototype.desktop.toolFunctions.FormatSubscript.ready = function(eventObj) {
    if( (this.selfObject.parent.DEBUG != undefined) &&
        (typeof(this.selfObject.parent.DEBUG) == "boolean") &&
        this.selfObject.parent.DEBUG ) {
        console.log("The FormatSubscript tool detected a 'ready' event.");
        console.log(eventObj);
    }
};

/**
 * Default event handler for 'resize' events on the FormatSubscript tool.
 */
WYMeditor.editor.prototype.desktop.toolFunctions.FormatSubscript.resize = function(eventObj) {
    if( (this.selfObject.parent.DEBUG != undefined) &&
        (typeof(this.selfObject.parent.DEBUG) == "boolean") &&
        this.selfObject.parent.DEBUG ) {
        console.log("The FormatSubscript tool detected a 'resize' event.");
        console.log(eventObj);
    }
};

/**
 * Default event handler for 'scroll' events on the FormatSubscript tool.
 */
WYMeditor.editor.prototype.desktop.toolFunctions.FormatSubscript.scroll = function(eventObj) {
    if( (this.selfObject.parent.DEBUG != undefined) &&
        (typeof(this.selfObject.parent.DEBUG) == "boolean") &&
        this.selfObject.parent.DEBUG ) {
        console.log("The FormatSubscript tool detected a 'scroll' event.");
        console.log(eventObj);
    }
};

/**
 * Default event handler for 'select' events on the FormatSubscript tool.
 */
WYMeditor.editor.prototype.desktop.toolFunctions.FormatSubscript.select = function(eventObj) {
    if( (this.selfObject.parent.DEBUG != undefined) &&
        (typeof(this.selfObject.parent.DEBUG) == "boolean") &&
        this.selfObject.parent.DEBUG ) {
        console.log("The FormatSubscript tool detected a 'select' event.");
        console.log(eventObj);
    }
};

/**
 * Default event handler for 'submit' events on the FormatSubscript tool.
 */
WYMeditor.editor.prototype.desktop.toolFunctions.FormatSubscript.submit = function(eventObj) {
    if( (this.selfObject.parent.DEBUG != undefined) &&
        (typeof(this.selfObject.parent.DEBUG) == "boolean") &&
        this.selfObject.parent.DEBUG ) {
        console.log("The FormatSubscript tool detected a 'submit' event.");
        console.log(eventObj);
    }
};

/**
 * Default event handler for 'toggle' events on the FormatSubscript tool.
 */
WYMeditor.editor.prototype.desktop.toolFunctions.FormatSubscript.toggle = [
    function(eventObj) {
        if( (this.selfObject.parent.DEBUG != undefined) &&
            (typeof(this.selfObject.parent.DEBUG) == "boolean") &&
            this.selfObject.parent.DEBUG ) {
            console.log("The FormatSubscript tool detected a 'toggle' event (click one).");
            console.log(eventObj);
        }
    },
    function(eventObj) {
        if( (this.selfObject.parent.DEBUG != undefined) &&
            (typeof(this.selfObject.parent.DEBUG) == "boolean") &&
            this.selfObject.parent.DEBUG ) {
            console.log("The FormatSubscript tool detected a 'toggle' event (click two).");
            console.log(eventObj);
        }
    }
];

/**
 * Default event handler for 'unload' events on the FormatSubscript tool.
 */
WYMeditor.editor.prototype.desktop.toolFunctions.FormatSubscript.unload = function(eventObj) {
    if( (this.selfObject.parent.DEBUG != undefined) &&
        (typeof(this.selfObject.parent.DEBUG) == "boolean") &&
        this.selfObject.parent.DEBUG ) {
        console.log("The FormatSubscript tool detected an 'unload' event.");
        console.log(eventObj);
    }
};

