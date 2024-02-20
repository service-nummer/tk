/*! jQuery UI - v1.13.0 - 2021-09-05
 * http://jqueryui.com
 * Includes: widget.js, position.js, data.js, disable-selection.js, focusable.js, form-reset-mixin.js, keycode.js, labels.js, scroll-parent.js, tabbable.js, unique-id.js, widgets/draggable.js, widgets/droppable.js, widgets/resizable.js, widgets/selectable.js, widgets/sortable.js, widgets/accordion.js, widgets/autocomplete.js, widgets/button.js, widgets/checkboxradio.js, widgets/controlgroup.js, widgets/datepicker.js, widgets/dialog.js, widgets/menu.js, widgets/mouse.js, widgets/progressbar.js, widgets/selectmenu.js, widgets/slider.js, widgets/spinner.js, widgets/tabs.js, widgets/tooltip.js, effect.js, effects/effect-blind.js, effects/effect-bounce.js, effects/effect-clip.js, effects/effect-drop.js, effects/effect-explode.js, effects/effect-fade.js, effects/effect-fold.js, effects/effect-highlight.js, effects/effect-puff.js, effects/effect-pulsate.js, effects/effect-scale.js, effects/effect-shake.js, effects/effect-size.js, effects/effect-slide.js, effects/effect-transfer.js
 * Copyright jQuery Foundation and other contributors; Licensed MIT */
(function(a) { if (typeof define === "function" && define.amd) { define(["jquery"], a) } else { a(jQuery) } })(function(ax) {
    ax.ui = ax.ui || {};
    var F = ax.ui.version = "1.13.0";
    /*!
     * jQuery UI Widget 1.13.0
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */
    var P = 0;
    var av = Array.prototype.hasOwnProperty;
    var ay = Array.prototype.slice;
    ax.cleanData = (function(aK) { return function(aL) { var aN, aO, aM; for (aM = 0;
                (aO = aL[aM]) != null; aM++) { aN = ax._data(aO, "events"); if (aN && aN.remove) { ax(aO).triggerHandler("remove") } }
            aK(aL) } })(ax.cleanData);
    ax.widget = function(aK, aL, aS) { var aQ, aN, aR; var aM = {}; var aP = aK.split(".")[0];
        aK = aK.split(".")[1]; var aO = aP + "-" + aK; if (!aS) { aS = aL;
            aL = ax.Widget } if (Array.isArray(aS)) { aS = ax.extend.apply(null, [{}].concat(aS)) }
        ax.expr.pseudos[aO.toLowerCase()] = function(aT) { return !!ax.data(aT, aO) };
        ax[aP] = ax[aP] || {};
        aQ = ax[aP][aK];
        aN = ax[aP][aK] = function(aT, aU) { if (!this._createWidget) { return new aN(aT, aU) } if (arguments.length) { this._createWidget(aT, aU) } };
        ax.extend(aN, aQ, { version: aS.version, _proto: ax.extend({}, aS), _childConstructors: [] });
        aR = new aL();
        aR.options = ax.widget.extend({}, aR.options);
        ax.each(aS, function(aU, aT) { if (typeof aT !== "function") { aM[aU] = aT; return }
            aM[aU] = (function() {
                function aV() { return aL.prototype[aU].apply(this, arguments) }

                function aW(aX) { return aL.prototype[aU].apply(this, aX) } return function() { var aZ = this._super; var aX = this._superApply; var aY;
                    this._super = aV;
                    this._superApply = aW;
                    aY = aT.apply(this, arguments);
                    this._super = aZ;
                    this._superApply = aX; return aY } })() });
        aN.prototype = ax.widget.extend(aR, { widgetEventPrefix: aQ ? (aR.widgetEventPrefix || aK) : aK }, aM, { constructor: aN, namespace: aP, widgetName: aK, widgetFullName: aO }); if (aQ) { ax.each(aQ._childConstructors, function(aU, aV) { var aT = aV.prototype;
                ax.widget(aT.namespace + "." + aT.widgetName, aN, aV._proto) });
            delete aQ._childConstructors } else { aL._childConstructors.push(aN) }
        ax.widget.bridge(aK, aN); return aN };
    ax.widget.extend = function(aP) { var aL = ay.call(arguments, 1); var aO = 0; var aK = aL.length; var aM; var aN; for (; aO < aK; aO++) { for (aM in aL[aO]) { aN = aL[aO][aM]; if (av.call(aL[aO], aM) && aN !== undefined) { if (ax.isPlainObject(aN)) { aP[aM] = ax.isPlainObject(aP[aM]) ? ax.widget.extend({}, aP[aM], aN) : ax.widget.extend({}, aN) } else { aP[aM] = aN } } } } return aP };
    ax.widget.bridge = function(aL, aK) { var aM = aK.prototype.widgetFullName || aL;
        ax.fn[aL] = function(aP) { var aN = typeof aP === "string"; var aO = ay.call(arguments, 1); var aQ = this; if (aN) { if (!this.length && aP === "instance") { aQ = undefined } else { this.each(function() { var aS; var aR = ax.data(this, aM); if (aP === "instance") { aQ = aR; return false } if (!aR) { return ax.error("cannot call methods on " + aL + " prior to initialization; attempted to call method '" + aP + "'") } if (typeof aR[aP] !== "function" || aP.charAt(0) === "_") { return ax.error("no such method '" + aP + "' for " + aL + " widget instance") }
                        aS = aR[aP].apply(aR, aO); if (aS !== aR && aS !== undefined) { aQ = aS && aS.jquery ? aQ.pushStack(aS.get()) : aS; return false } }) } } else { if (aO.length) { aP = ax.widget.extend.apply(null, [aP].concat(aO)) }
                this.each(function() { var aR = ax.data(this, aM); if (aR) { aR.option(aP || {}); if (aR._init) { aR._init() } } else { ax.data(this, aM, new aK(aP, this)) } }) } return aQ } };
    ax.Widget = function() {};
    ax.Widget._childConstructors = [];
    ax.Widget.prototype = { widgetName: "widget", widgetEventPrefix: "", defaultElement: "<div>", options: { classes: {}, disabled: false, create: null }, _createWidget: function(aK, aL) { aL = ax(aL || this.defaultElement || this)[0];
            this.element = ax(aL);
            this.uuid = P++;
            this.eventNamespace = "." + this.widgetName + this.uuid;
            this.bindings = ax();
            this.hoverable = ax();
            this.focusable = ax();
            this.classesElementLookup = {}; if (aL !== this) { ax.data(aL, this.widgetFullName, this);
                this._on(true, this.element, { remove: function(aM) { if (aM.target === aL) { this.destroy() } } });
                this.document = ax(aL.style ? aL.ownerDocument : aL.document || aL);
                this.window = ax(this.document[0].defaultView || this.document[0].parentWindow) }
            this.options = ax.widget.extend({}, this.options, this._getCreateOptions(), aK);
            this._create(); if (this.options.disabled) { this._setOptionDisabled(this.options.disabled) }
            this._trigger("create", null, this._getCreateEventData());
            this._init() }, _getCreateOptions: function() { return {} }, _getCreateEventData: ax.noop, _create: ax.noop, _init: ax.noop, destroy: function() { var aK = this;
            this._destroy();
            ax.each(this.classesElementLookup, function(aL, aM) { aK._removeClass(aM, aL) });
            this.element.off(this.eventNamespace).removeData(this.widgetFullName);
            this.widget().off(this.eventNamespace).removeAttr("aria-disabled");
            this.bindings.off(this.eventNamespace) }, _destroy: ax.noop, widget: function() { return this.element }, option: function(aN, aO) { var aK = aN; var aP; var aM; var aL; if (arguments.length === 0) { return ax.widget.extend({}, this.options) } if (typeof aN === "string") { aK = {};
                aP = aN.split(".");
                aN = aP.shift(); if (aP.length) { aM = aK[aN] = ax.widget.extend({}, this.options[aN]); for (aL = 0; aL < aP.length - 1; aL++) { aM[aP[aL]] = aM[aP[aL]] || {};
                        aM = aM[aP[aL]] }
                    aN = aP.pop(); if (arguments.length === 1) { return aM[aN] === undefined ? null : aM[aN] }
                    aM[aN] = aO } else { if (arguments.length === 1) { return this.options[aN] === undefined ? null : this.options[aN] }
                    aK[aN] = aO } }
            this._setOptions(aK); return this }, _setOptions: function(aK) { var aL; for (aL in aK) { this._setOption(aL, aK[aL]) } return this }, _setOption: function(aK, aL) { if (aK === "classes") { this._setOptionClasses(aL) }
            this.options[aK] = aL; if (aK === "disabled") { this._setOptionDisabled(aL) } return this }, _setOptionClasses: function(aN) { var aK, aM, aL; for (aK in aN) { aL = this.classesElementLookup[aK]; if (aN[aK] === this.options.classes[aK] || !aL || !aL.length) { continue }
                aM = ax(aL.get());
                this._removeClass(aL, aK);
                aM.addClass(this._classes({ element: aM, keys: aK, classes: aN, add: true })) } }, _setOptionDisabled: function(aK) { this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!aK); if (aK) { this._removeClass(this.hoverable, null, "ui-state-hover");
                this._removeClass(this.focusable, null, "ui-state-focus") } }, enable: function() { return this._setOptions({ disabled: false }) }, disable: function() { return this._setOptions({ disabled: true }) }, _classes: function(aL) { var aM = []; var aN = this;
            aL = ax.extend({ element: this.element, classes: this.options.classes || {} }, aL);

            function aK() { aL.element.each(function(aQ, aR) { var aP = ax.map(aN.classesElementLookup, function(aS) { return aS }).some(function(aS) { return aS.is(aR) }); if (!aP) { aN._on(ax(aR), { remove: "_untrackClassesElement" }) } }) }

            function aO(aQ, aS) { var aR, aP; for (aP = 0; aP < aQ.length; aP++) { aR = aN.classesElementLookup[aQ[aP]] || ax(); if (aL.add) { aK();
                        aR = ax(ax.uniqueSort(aR.get().concat(aL.element.get()))) } else { aR = ax(aR.not(aL.element).get()) }
                    aN.classesElementLookup[aQ[aP]] = aR;
                    aM.push(aQ[aP]); if (aS && aL.classes[aQ[aP]]) { aM.push(aL.classes[aQ[aP]]) } } } if (aL.keys) { aO(aL.keys.match(/\S+/g) || [], true) } if (aL.extra) { aO(aL.extra.match(/\S+/g) || []) } return aM.join(" ") }, _untrackClassesElement: function(aL) { var aK = this;
            ax.each(aK.classesElementLookup, function(aM, aN) { if (ax.inArray(aL.target, aN) !== -1) { aK.classesElementLookup[aM] = ax(aN.not(aL.target).get()) } });
            this._off(ax(aL.target)) }, _removeClass: function(aL, aM, aK) { return this._toggleClass(aL, aM, aK, false) }, _addClass: function(aL, aM, aK) { return this._toggleClass(aL, aM, aK, true) }, _toggleClass: function(aN, aO, aK, aP) { aP = (typeof aP === "boolean") ? aP : aK; var aL = (typeof aN === "string" || aN === null),
                aM = { extra: aL ? aO : aK, keys: aL ? aN : aO, element: aL ? this.element : aN, add: aP };
            aM.element.toggleClass(this._classes(aM), aP); return this }, _on: function(aN, aM, aL) { var aO; var aK = this; if (typeof aN !== "boolean") { aL = aM;
                aM = aN;
                aN = false } if (!aL) { aL = aM;
                aM = this.element;
                aO = this.widget() } else { aM = aO = ax(aM);
                this.bindings = this.bindings.add(aM) }
            ax.each(aL, function(aU, aT) {
                function aR() { if (!aN && (aK.options.disabled === true || ax(this).hasClass("ui-state-disabled"))) { return } return (typeof aT === "string" ? aK[aT] : aT).apply(aK, arguments) } if (typeof aT !== "string") { aR.guid = aT.guid = aT.guid || aR.guid || ax.guid++ } var aS = aU.match(/^([\w:-]*)\s*(.*)$/); var aQ = aS[1] + aK.eventNamespace; var aP = aS[2]; if (aP) { aO.on(aQ, aP, aR) } else { aM.on(aQ, aR) } }) }, _off: function(aL, aK) { aK = (aK || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace;
            aL.off(aK);
            this.bindings = ax(this.bindings.not(aL).get());
            this.focusable = ax(this.focusable.not(aL).get());
            this.hoverable = ax(this.hoverable.not(aL).get()) }, _delay: function(aN, aM) {
            function aL() { return (typeof aN === "string" ? aK[aN] : aN).apply(aK, arguments) } var aK = this; return setTimeout(aL, aM || 0) }, _hoverable: function(aK) { this.hoverable = this.hoverable.add(aK);
            this._on(aK, { mouseenter: function(aL) { this._addClass(ax(aL.currentTarget), null, "ui-state-hover") }, mouseleave: function(aL) { this._removeClass(ax(aL.currentTarget), null, "ui-state-hover") } }) }, _focusable: function(aK) { this.focusable = this.focusable.add(aK);
            this._on(aK, { focusin: function(aL) { this._addClass(ax(aL.currentTarget), null, "ui-state-focus") }, focusout: function(aL) { this._removeClass(ax(aL.currentTarget), null, "ui-state-focus") } }) }, _trigger: function(aK, aL, aM) { var aP, aO; var aN = this.options[aK];
            aM = aM || {};
            aL = ax.Event(aL);
            aL.type = (aK === this.widgetEventPrefix ? aK : this.widgetEventPrefix + aK).toLowerCase();
            aL.target = this.element[0];
            aO = aL.originalEvent; if (aO) { for (aP in aO) { if (!(aP in aL)) { aL[aP] = aO[aP] } } }
            this.element.trigger(aL, aM); return !(typeof aN === "function" && aN.apply(this.element[0], [aL].concat(aM)) === false || aL.isDefaultPrevented()) } };
    ax.each({ show: "fadeIn", hide: "fadeOut" }, function(aL, aK) { ax.Widget.prototype["_" + aL] = function(aO, aN, aQ) { if (typeof aN === "string") { aN = { effect: aN } } var aP; var aM = !aN ? aL : aN === true || typeof aN === "number" ? aK : aN.effect || aK;
            aN = aN || {}; if (typeof aN === "number") { aN = { duration: aN } } else { if (aN === true) { aN = {} } }
            aP = !ax.isEmptyObject(aN);
            aN.complete = aQ; if (aN.delay) { aO.delay(aN.delay) } if (aP && ax.effects && ax.effects.effect[aM]) { aO[aL](aN) } else { if (aM !== aL && aO[aM]) { aO[aM](aN.duration, aN.easing, aQ) } else { aO.queue(function(aR) { ax(this)[aL](); if (aQ) { aQ.call(aO[0]) }
                        aR() }) } } } });
    var l = ax.widget;
    /*!
     * jQuery UI Position 1.13.0
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     * http://api.jqueryui.com/position/
     */
    (function() { var aS, aT = Math.max,
            aW = Math.abs,
            aN = /left|center|right/,
            aQ = /top|center|bottom/,
            aL = /[\+\-]\d+(\.[\d]+)?%?/,
            aU = /^\w+/,
            aM = /%$/,
            aP = ax.fn.position;

        function aV(aZ, aY, aX) { return [parseFloat(aZ[0]) * (aM.test(aZ[0]) ? aY / 100 : 1), parseFloat(aZ[1]) * (aM.test(aZ[1]) ? aX / 100 : 1)] }

        function aR(aX, aY) { return parseInt(ax.css(aX, aY), 10) || 0 }

        function aK(aX) { return aX != null && aX === aX.window }

        function aO(aY) { var aX = aY[0]; if (aX.nodeType === 9) { return { width: aY.width(), height: aY.height(), offset: { top: 0, left: 0 } } } if (aK(aX)) { return { width: aY.width(), height: aY.height(), offset: { top: aY.scrollTop(), left: aY.scrollLeft() } } } if (aX.preventDefault) { return { width: 0, height: 0, offset: { top: aX.pageY, left: aX.pageX } } } return { width: aY.outerWidth(), height: aY.outerHeight(), offset: aY.offset() } }
        ax.position = { scrollbarWidth: function() { if (aS !== undefined) { return aS } var aY, aX, a0 = ax("<div style='display:block;position:absolute;width:200px;height:200px;overflow:hidden;'><div style='height:300px;width:auto;'></div></div>"),
                    aZ = a0.children()[0];
                ax("body").append(a0);
                aY = aZ.offsetWidth;
                a0.css("overflow", "scroll");
                aX = aZ.offsetWidth; if (aY === aX) { aX = a0[0].clientWidth }
                a0.remove(); return (aS = aY - aX) }, getScrollInfo: function(a1) { var a0 = a1.isWindow || a1.isDocument ? "" : a1.element.css("overflow-x"),
                    aZ = a1.isWindow || a1.isDocument ? "" : a1.element.css("overflow-y"),
                    aY = a0 === "scroll" || (a0 === "auto" && a1.width < a1.element[0].scrollWidth),
                    aX = aZ === "scroll" || (aZ === "auto" && a1.height < a1.element[0].scrollHeight); return { width: aX ? ax.position.scrollbarWidth() : 0, height: aY ? ax.position.scrollbarWidth() : 0 } }, getWithinInfo: function(aY) { var a0 = ax(aY || window),
                    aZ = aK(a0[0]),
                    a1 = !!a0[0] && a0[0].nodeType === 9,
                    aX = !aZ && !a1; return { element: a0, isWindow: aZ, isDocument: a1, offset: aX ? ax(aY).offset() : { left: 0, top: 0 }, scrollLeft: a0.scrollLeft(), scrollTop: a0.scrollTop(), width: a0.outerWidth(), height: a0.outerHeight() } } };
        ax.fn.position = function(a7) { if (!a7 || !a7.of) { return aP.apply(this, arguments) }
            a7 = ax.extend({}, a7); var a8, a4, a2, a6, a1, aX, a3 = typeof a7.of === "string" ? ax(document).find(a7.of) : ax(a7.of),
                a0 = ax.position.getWithinInfo(a7.within),
                aY = ax.position.getScrollInfo(a0),
                a5 = (a7.collision || "flip").split(" "),
                aZ = {};
            aX = aO(a3); if (a3[0].preventDefault) { a7.at = "left top" }
            a4 = aX.width;
            a2 = aX.height;
            a6 = aX.offset;
            a1 = ax.extend({}, a6);
            ax.each(["my", "at"], function() { var bb = (a7[this] || "").split(" "),
                    ba, a9; if (bb.length === 1) { bb = aN.test(bb[0]) ? bb.concat(["center"]) : aQ.test(bb[0]) ? ["center"].concat(bb) : ["center", "center"] }
                bb[0] = aN.test(bb[0]) ? bb[0] : "center";
                bb[1] = aQ.test(bb[1]) ? bb[1] : "center";
                ba = aL.exec(bb[0]);
                a9 = aL.exec(bb[1]);
                aZ[this] = [ba ? ba[0] : 0, a9 ? a9[0] : 0];
                a7[this] = [aU.exec(bb[0])[0], aU.exec(bb[1])[0]] }); if (a5.length === 1) { a5[1] = a5[0] } if (a7.at[0] === "right") { a1.left += a4 } else { if (a7.at[0] === "center") { a1.left += a4 / 2 } } if (a7.at[1] === "bottom") { a1.top += a2 } else { if (a7.at[1] === "center") { a1.top += a2 / 2 } }
            a8 = aV(aZ.at, a4, a2);
            a1.left += a8[0];
            a1.top += a8[1]; return this.each(function() { var ba, bj, bc = ax(this),
                    be = bc.outerWidth(),
                    bb = bc.outerHeight(),
                    bd = aR(this, "marginLeft"),
                    a9 = aR(this, "marginTop"),
                    bi = be + bd + aR(this, "marginRight") + aY.width,
                    bh = bb + a9 + aR(this, "marginBottom") + aY.height,
                    bf = ax.extend({}, a1),
                    bg = aV(aZ.my, bc.outerWidth(), bc.outerHeight()); if (a7.my[0] === "right") { bf.left -= be } else { if (a7.my[0] === "center") { bf.left -= be / 2 } } if (a7.my[1] === "bottom") { bf.top -= bb } else { if (a7.my[1] === "center") { bf.top -= bb / 2 } }
                bf.left += bg[0];
                bf.top += bg[1];
                ba = { marginLeft: bd, marginTop: a9 };
                ax.each(["left", "top"], function(bl, bk) { if (ax.ui.position[a5[bl]]) { ax.ui.position[a5[bl]][bk](bf, { targetWidth: a4, targetHeight: a2, elemWidth: be, elemHeight: bb, collisionPosition: ba, collisionWidth: bi, collisionHeight: bh, offset: [a8[0] + bg[0], a8[1] + bg[1]], my: a7.my, at: a7.at, within: a0, elem: bc }) } }); if (a7.using) { bj = function(bn) { var bp = a6.left - bf.left,
                            bm = bp + a4 - be,
                            bo = a6.top - bf.top,
                            bl = bo + a2 - bb,
                            bk = { target: { element: a3, left: a6.left, top: a6.top, width: a4, height: a2 }, element: { element: bc, left: bf.left, top: bf.top, width: be, height: bb }, horizontal: bm < 0 ? "left" : bp > 0 ? "right" : "center", vertical: bl < 0 ? "top" : bo > 0 ? "bottom" : "middle" }; if (a4 < be && aW(bp + bm) < a4) { bk.horizontal = "center" } if (a2 < bb && aW(bo + bl) < a2) { bk.vertical = "middle" } if (aT(aW(bp), aW(bm)) > aT(aW(bo), aW(bl))) { bk.important = "horizontal" } else { bk.important = "vertical" }
                        a7.using.call(this, bn, bk) } }
                bc.offset(ax.extend(bf, { using: bj })) }) };
        ax.ui.position = { fit: { left: function(a1, a0) { var aZ = a0.within,
                        a3 = aZ.isWindow ? aZ.scrollLeft : aZ.offset.left,
                        a5 = aZ.width,
                        a2 = a1.left - a0.collisionPosition.marginLeft,
                        a4 = a3 - a2,
                        aY = a2 + a0.collisionWidth - a5 - a3,
                        aX; if (a0.collisionWidth > a5) { if (a4 > 0 && aY <= 0) { aX = a1.left + a4 + a0.collisionWidth - a5 - a3;
                            a1.left += a4 - aX } else { if (aY > 0 && a4 <= 0) { a1.left = a3 } else { if (a4 > aY) { a1.left = a3 + a5 - a0.collisionWidth } else { a1.left = a3 } } } } else { if (a4 > 0) { a1.left += a4 } else { if (aY > 0) { a1.left -= aY } else { a1.left = aT(a1.left - a2, a1.left) } } } }, top: function(a0, aZ) { var aY = aZ.within,
                        a4 = aY.isWindow ? aY.scrollTop : aY.offset.top,
                        a5 = aZ.within.height,
                        a2 = a0.top - aZ.collisionPosition.marginTop,
                        a3 = a4 - a2,
                        a1 = a2 + aZ.collisionHeight - a5 - a4,
                        aX; if (aZ.collisionHeight > a5) { if (a3 > 0 && a1 <= 0) { aX = a0.top + a3 + aZ.collisionHeight - a5 - a4;
                            a0.top += a3 - aX } else { if (a1 > 0 && a3 <= 0) { a0.top = a4 } else { if (a3 > a1) { a0.top = a4 + a5 - aZ.collisionHeight } else { a0.top = a4 } } } } else { if (a3 > 0) { a0.top += a3 } else { if (a1 > 0) { a0.top -= a1 } else { a0.top = aT(a0.top - a2, a0.top) } } } } }, flip: { left: function(a3, a2) { var a1 = a2.within,
                        a7 = a1.offset.left + a1.scrollLeft,
                        ba = a1.width,
                        aZ = a1.isWindow ? a1.scrollLeft : a1.offset.left,
                        a4 = a3.left - a2.collisionPosition.marginLeft,
                        a8 = a4 - aZ,
                        aY = a4 + a2.collisionWidth - ba - aZ,
                        a6 = a2.my[0] === "left" ? -a2.elemWidth : a2.my[0] === "right" ? a2.elemWidth : 0,
                        a9 = a2.at[0] === "left" ? a2.targetWidth : a2.at[0] === "right" ? -a2.targetWidth : 0,
                        a0 = -2 * a2.offset[0],
                        aX, a5; if (a8 < 0) { aX = a3.left + a6 + a9 + a0 + a2.collisionWidth - ba - a7; if (aX < 0 || aX < aW(a8)) { a3.left += a6 + a9 + a0 } } else { if (aY > 0) { a5 = a3.left - a2.collisionPosition.marginLeft + a6 + a9 + a0 - aZ; if (a5 > 0 || aW(a5) < aY) { a3.left += a6 + a9 + a0 } } } }, top: function(a2, a1) { var a0 = a1.within,
                        a9 = a0.offset.top + a0.scrollTop,
                        ba = a0.height,
                        aX = a0.isWindow ? a0.scrollTop : a0.offset.top,
                        a4 = a2.top - a1.collisionPosition.marginTop,
                        a6 = a4 - aX,
                        a3 = a4 + a1.collisionHeight - ba - aX,
                        a7 = a1.my[1] === "top",
                        a5 = a7 ? -a1.elemHeight : a1.my[1] === "bottom" ? a1.elemHeight : 0,
                        bb = a1.at[1] === "top" ? a1.targetHeight : a1.at[1] === "bottom" ? -a1.targetHeight : 0,
                        aZ = -2 * a1.offset[1],
                        a8, aY; if (a6 < 0) { aY = a2.top + a5 + bb + aZ + a1.collisionHeight - ba - a9; if (aY < 0 || aY < aW(a6)) { a2.top += a5 + bb + aZ } } else { if (a3 > 0) { a8 = a2.top - a1.collisionPosition.marginTop + a5 + bb + aZ - aX; if (a8 > 0 || aW(a8) < a3) { a2.top += a5 + bb + aZ } } } } }, flipfit: { left: function() { ax.ui.position.flip.left.apply(this, arguments);
                    ax.ui.position.fit.left.apply(this, arguments) }, top: function() { ax.ui.position.flip.top.apply(this, arguments);
                    ax.ui.position.fit.top.apply(this, arguments) } } } })();
    var ar = ax.ui.position;
    /*!
     * jQuery UI :data 1.13.0
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */
    var s = ax.extend(ax.expr.pseudos, { data: ax.expr.createPseudo ? ax.expr.createPseudo(function(aK) { return function(aL) { return !!ax.data(aL, aK) } }) : function(aM, aL, aK) { return !!ax.data(aM, aK[3]) } });
    /*!
     * jQuery UI Disable Selection 1.13.0
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */
    var o = ax.fn.extend({ disableSelection: (function() { var aK = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown"; return function() { return this.on(aK + ".ui-disableSelection", function(aL) { aL.preventDefault() }) } })(), enableSelection: function() { return this.off(".ui-disableSelection") } });
    /*!
     * jQuery UI Focusable 1.13.0
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */
    ax.ui.focusable = function(aN, aL) { var aQ, aO, aM, aP, aK, aR = aN.nodeName.toLowerCase(); if ("area" === aR) { aQ = aN.parentNode;
            aO = aQ.name; if (!aN.href || !aO || aQ.nodeName.toLowerCase() !== "map") { return false }
            aM = ax("img[usemap='#" + aO + "']"); return aM.length > 0 && aM.is(":visible") } if (/^(input|select|textarea|button|object)$/.test(aR)) { aP = !aN.disabled; if (aP) { aK = ax(aN).closest("fieldset")[0]; if (aK) { aP = !aK.disabled } } } else { if ("a" === aR) { aP = aN.href || aL } else { aP = aL } } return aP && ax(aN).is(":visible") && q(ax(aN)) };

    function q(aL) { var aK = aL.css("visibility"); while (aK === "inherit") { aL = aL.parent();
            aK = aL.css("visibility") } return aK === "visible" }
    ax.extend(ax.expr.pseudos, { focusable: function(aK) { return ax.ui.focusable(aK, ax.attr(aK, "tabindex") != null) } });
    var aG = ax.ui.focusable;
    var h = ax.fn._form = function() { return typeof this[0].form === "string" ? this.closest("form") : ax(this[0].form) };
    /*!
     * jQuery UI Form Reset Mixin 1.13.0
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */
    var V = ax.ui.formResetMixin = { _formResetHandler: function() { var aK = ax(this);
            setTimeout(function() { var aL = aK.data("ui-form-reset-instances");
                ax.each(aL, function() { this.refresh() }) }) }, _bindFormResetHandler: function() { this.form = this.element._form(); if (!this.form.length) { return } var aK = this.form.data("ui-form-reset-instances") || []; if (!aK.length) { this.form.on("reset.ui-form-reset", this._formResetHandler) }
            aK.push(this);
            this.form.data("ui-form-reset-instances", aK) }, _unbindFormResetHandler: function() { if (!this.form.length) { return } var aK = this.form.data("ui-form-reset-instances");
            aK.splice(ax.inArray(this, aK), 1); if (aK.length) { this.form.data("ui-form-reset-instances", aK) } else { this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset") } } };
    /*!
     * jQuery UI Keycode 1.13.0
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */
    var p = ax.ui.keyCode = { BACKSPACE: 8, COMMA: 188, DELETE: 46, DOWN: 40, END: 35, ENTER: 13, ESCAPE: 27, HOME: 36, LEFT: 37, PAGE_DOWN: 34, PAGE_UP: 33, PERIOD: 190, RIGHT: 39, SPACE: 32, TAB: 9, UP: 38 };
    /*!
     * jQuery UI Labels 1.13.0
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */
    var az = ax.fn.labels = function() { var aL, aK, aO, aN, aM; if (!this.length) { return this.pushStack([]) } if (this[0].labels && this[0].labels.length) { return this.pushStack(this[0].labels) }
        aN = this.eq(0).parents("label");
        aO = this.attr("id"); if (aO) { aL = this.eq(0).parents().last();
            aM = aL.add(aL.length ? aL.siblings() : this.siblings());
            aK = "label[for='" + ax.escapeSelector(aO) + "']";
            aN = aN.add(aM.find(aK).addBack(aK)) } return this.pushStack(aN) };
    /*!
     * jQuery UI Scroll Parent 1.13.0
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */
    var ah = ax.fn.scrollParent = function(aM) { var aL = this.css("position"),
            aK = aL === "absolute",
            aN = aM ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
            aO = this.parents().filter(function() { var aP = ax(this); if (aK && aP.css("position") === "static") { return false } return aN.test(aP.css("overflow") + aP.css("overflow-y") + aP.css("overflow-x")) }).eq(0); return aL === "fixed" || !aO.length ? ax(this[0].ownerDocument || document) : aO };
    /*!
     * jQuery UI Tabbable 1.13.0
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */
    var f = ax.extend(ax.expr.pseudos, { tabbable: function(aM) { var aL = ax.attr(aM, "tabindex"),
                aK = aL != null; return (!aK || aL >= 0) && ax.ui.focusable(aM, aK) } });
    /*!
     * jQuery UI Unique ID 1.13.0
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */
    var ai = ax.fn.extend({ uniqueId: (function() { var aK = 0; return function() { return this.each(function() { if (!this.id) { this.id = "ui-id-" + (++aK) } }) } })(), removeUniqueId: function() { return this.each(function() { if (/^ui-id-\d+$/.test(this.id)) { ax(this).removeAttr("id") } }) } });
    var T = ax.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
    /*!
     * jQuery UI Mouse 1.13.0
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */
    var aj = false;
    ax(document).on("mouseup", function() { aj = false });
    var a = ax.widget("ui.mouse", { version: "1.13.0", options: { cancel: "input, textarea, button, select, option", distance: 1, delay: 0 }, _mouseInit: function() { var aK = this;
            this.element.on("mousedown." + this.widgetName, function(aL) { return aK._mouseDown(aL) }).on("click." + this.widgetName, function(aL) { if (true === ax.data(aL.target, aK.widgetName + ".preventClickEvent")) { ax.removeData(aL.target, aK.widgetName + ".preventClickEvent");
                    aL.stopImmediatePropagation(); return false } });
            this.started = false }, _mouseDestroy: function() { this.element.off("." + this.widgetName); if (this._mouseMoveDelegate) { this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate) } }, _mouseDown: function(aM) { if (aj) { return }
            this._mouseMoved = false; if (this._mouseStarted) { this._mouseUp(aM) }
            this._mouseDownEvent = aM; var aL = this,
                aN = (aM.which === 1),
                aK = (typeof this.options.cancel === "string" && aM.target.nodeName ? ax(aM.target).closest(this.options.cancel).length : false); if (!aN || aK || !this._mouseCapture(aM)) { return true }
            this.mouseDelayMet = !this.options.delay; if (!this.mouseDelayMet) { this._mouseDelayTimer = setTimeout(function() { aL.mouseDelayMet = true }, this.options.delay) } if (this._mouseDistanceMet(aM) && this._mouseDelayMet(aM)) { this._mouseStarted = (this._mouseStart(aM) !== false); if (!this._mouseStarted) { aM.preventDefault(); return true } } if (true === ax.data(aM.target, this.widgetName + ".preventClickEvent")) { ax.removeData(aM.target, this.widgetName + ".preventClickEvent") }
            this._mouseMoveDelegate = function(aO) { return aL._mouseMove(aO) };
            this._mouseUpDelegate = function(aO) { return aL._mouseUp(aO) };
            this.document.on("mousemove." + this.widgetName, this._mouseMoveDelegate).on("mouseup." + this.widgetName, this._mouseUpDelegate);
            aM.preventDefault();
            aj = true; return true }, _mouseMove: function(aK) { if (this._mouseMoved) { if (ax.ui.ie && (!document.documentMode || document.documentMode < 9) && !aK.button) { return this._mouseUp(aK) } else { if (!aK.which) { if (aK.originalEvent.altKey || aK.originalEvent.ctrlKey || aK.originalEvent.metaKey || aK.originalEvent.shiftKey) { this.ignoreMissingWhich = true } else { if (!this.ignoreMissingWhich) { return this._mouseUp(aK) } } } } } if (aK.which || aK.button) { this._mouseMoved = true } if (this._mouseStarted) { this._mouseDrag(aK); return aK.preventDefault() } if (this._mouseDistanceMet(aK) && this._mouseDelayMet(aK)) { this._mouseStarted = (this._mouseStart(this._mouseDownEvent, aK) !== false); if (this._mouseStarted) { this._mouseDrag(aK) } else { this._mouseUp(aK) } } return !this._mouseStarted }, _mouseUp: function(aK) { this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate); if (this._mouseStarted) { this._mouseStarted = false; if (aK.target === this._mouseDownEvent.target) { ax.data(aK.target, this.widgetName + ".preventClickEvent", true) }
                this._mouseStop(aK) } if (this._mouseDelayTimer) { clearTimeout(this._mouseDelayTimer);
                delete this._mouseDelayTimer }
            this.ignoreMissingWhich = false;
            aj = false;
            aK.preventDefault() }, _mouseDistanceMet: function(aK) { return (Math.max(Math.abs(this._mouseDownEvent.pageX - aK.pageX), Math.abs(this._mouseDownEvent.pageY - aK.pageY)) >= this.options.distance) }, _mouseDelayMet: function() { return this.mouseDelayMet }, _mouseStart: function() {}, _mouseDrag: function() {}, _mouseStop: function() {}, _mouseCapture: function() { return true } });
    var M = ax.ui.plugin = { add: function(aL, aM, aO) { var aK, aN = ax.ui[aL].prototype; for (aK in aO) { aN.plugins[aK] = aN.plugins[aK] || [];
                aN.plugins[aK].push([aM, aO[aK]]) } }, call: function(aK, aN, aM, aL) { var aO, aP = aK.plugins[aN]; if (!aP) { return } if (!aL && (!aK.element[0].parentNode || aK.element[0].parentNode.nodeType === 11)) { return } for (aO = 0; aO < aP.length; aO++) { if (aK.options[aP[aO][0]]) { aP[aO][1].apply(aK.element, aM) } } } };
    var i = ax.ui.safeActiveElement = function(aK) { var aM; try { aM = aK.activeElement } catch (aL) { aM = aK.body } if (!aM) { aM = aK.body } if (!aM.nodeName) { aM = aK.body } return aM };
    var c = ax.ui.safeBlur = function(aK) { if (aK && aK.nodeName.toLowerCase() !== "body") { ax(aK).trigger("blur") } };
    /*!
     * jQuery UI Draggable 1.13.0
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */
    ax.widget("ui.draggable", ax.ui.mouse, { version: "1.13.0", widgetEventPrefix: "drag", options: { addClasses: true, appendTo: "parent", axis: false, connectToSortable: false, containment: false, cursor: "auto", cursorAt: false, grid: false, handle: false, helper: "original", iframeFix: false, opacity: false, refreshPositions: false, revert: false, revertDuration: 500, scope: "default", scroll: true, scrollSensitivity: 20, scrollSpeed: 20, snap: false, snapMode: "both", snapTolerance: 20, stack: false, zIndex: false, drag: null, start: null, stop: null }, _create: function() { if (this.options.helper === "original") { this._setPositionRelative() } if (this.options.addClasses) { this._addClass("ui-draggable") }
            this._setHandleClassName();
            this._mouseInit() }, _setOption: function(aK, aL) { this._super(aK, aL); if (aK === "handle") { this._removeHandleClassName();
                this._setHandleClassName() } }, _destroy: function() { if ((this.helper || this.element).is(".ui-draggable-dragging")) { this.destroyOnClear = true; return }
            this._removeHandleClassName();
            this._mouseDestroy() }, _mouseCapture: function(aK) { var aL = this.options; if (this.helper || aL.disabled || ax(aK.target).closest(".ui-resizable-handle").length > 0) { return false }
            this.handle = this._getHandle(aK); if (!this.handle) { return false }
            this._blurActiveElement(aK);
            this._blockFrames(aL.iframeFix === true ? "iframe" : aL.iframeFix); return true }, _blockFrames: function(aK) { this.iframeBlocks = this.document.find(aK).map(function() { var aL = ax(this); return ax("<div>").css("position", "absolute").appendTo(aL.parent()).outerWidth(aL.outerWidth()).outerHeight(aL.outerHeight()).offset(aL.offset())[0] }) }, _unblockFrames: function() { if (this.iframeBlocks) { this.iframeBlocks.remove();
                delete this.iframeBlocks } }, _blurActiveElement: function(aL) { var aK = ax.ui.safeActiveElement(this.document[0]),
                aM = ax(aL.target); if (aM.closest(aK).length) { return }
            ax.ui.safeBlur(aK) }, _mouseStart: function(aK) { var aL = this.options;
            this.helper = this._createHelper(aK);
            this._addClass(this.helper, "ui-draggable-dragging");
            this._cacheHelperProportions(); if (ax.ui.ddmanager) { ax.ui.ddmanager.current = this }
            this._cacheMargins();
            this.cssPosition = this.helper.css("position");
            this.scrollParent = this.helper.scrollParent(true);
            this.offsetParent = this.helper.offsetParent();
            this.hasFixedAncestor = this.helper.parents().filter(function() { return ax(this).css("position") === "fixed" }).length > 0;
            this.positionAbs = this.element.offset();
            this._refreshOffsets(aK);
            this.originalPosition = this.position = this._generatePosition(aK, false);
            this.originalPageX = aK.pageX;
            this.originalPageY = aK.pageY; if (aL.cursorAt) { this._adjustOffsetFromHelper(aL.cursorAt) }
            this._setContainment(); if (this._trigger("start", aK) === false) { this._clear(); return false }
            this._cacheHelperProportions(); if (ax.ui.ddmanager && !aL.dropBehaviour) { ax.ui.ddmanager.prepareOffsets(this, aK) }
            this._mouseDrag(aK, true); if (ax.ui.ddmanager) { ax.ui.ddmanager.dragStart(this, aK) } return true }, _refreshOffsets: function(aK) { this.offset = { top: this.positionAbs.top - this.margins.top, left: this.positionAbs.left - this.margins.left, scroll: false, parent: this._getParentOffset(), relative: this._getRelativeOffset() };
            this.offset.click = { left: aK.pageX - this.offset.left, top: aK.pageY - this.offset.top } }, _mouseDrag: function(aK, aM) { if (this.hasFixedAncestor) { this.offset.parent = this._getParentOffset() }
            this.position = this._generatePosition(aK, true);
            this.positionAbs = this._convertPositionTo("absolute"); if (!aM) { var aL = this._uiHash(); if (this._trigger("drag", aK, aL) === false) { this._mouseUp(new ax.Event("mouseup", aK)); return false }
                this.position = aL.position }
            this.helper[0].style.left = this.position.left + "px";
            this.helper[0].style.top = this.position.top + "px"; if (ax.ui.ddmanager) { ax.ui.ddmanager.drag(this, aK) } return false }, _mouseStop: function(aL) { var aK = this,
                aM = false; if (ax.ui.ddmanager && !this.options.dropBehaviour) { aM = ax.ui.ddmanager.drop(this, aL) } if (this.dropped) { aM = this.dropped;
                this.dropped = false } if ((this.options.revert === "invalid" && !aM) || (this.options.revert === "valid" && aM) || this.options.revert === true || (typeof this.options.revert === "function" && this.options.revert.call(this.element, aM))) { ax(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() { if (aK._trigger("stop", aL) !== false) { aK._clear() } }) } else { if (this._trigger("stop", aL) !== false) { this._clear() } } return false }, _mouseUp: function(aK) { this._unblockFrames(); if (ax.ui.ddmanager) { ax.ui.ddmanager.dragStop(this, aK) } if (this.handleElement.is(aK.target)) { this.element.trigger("focus") } return ax.ui.mouse.prototype._mouseUp.call(this, aK) }, cancel: function() { if (this.helper.is(".ui-draggable-dragging")) { this._mouseUp(new ax.Event("mouseup", { target: this.element[0] })) } else { this._clear() } return this }, _getHandle: function(aK) { return this.options.handle ? !!ax(aK.target).closest(this.element.find(this.options.handle)).length : true }, _setHandleClassName: function() { this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element;
            this._addClass(this.handleElement, "ui-draggable-handle") }, _removeHandleClassName: function() { this._removeClass(this.handleElement, "ui-draggable-handle") }, _createHelper: function(aL) { var aN = this.options,
                aM = typeof aN.helper === "function",
                aK = aM ? ax(aN.helper.apply(this.element[0], [aL])) : (aN.helper === "clone" ? this.element.clone().removeAttr("id") : this.element); if (!aK.parents("body").length) { aK.appendTo((aN.appendTo === "parent" ? this.element[0].parentNode : aN.appendTo)) } if (aM && aK[0] === this.element[0]) { this._setPositionRelative() } if (aK[0] !== this.element[0] && !(/(fixed|absolute)/).test(aK.css("position"))) { aK.css("position", "absolute") } return aK }, _setPositionRelative: function() { if (!(/^(?:r|a|f)/).test(this.element.css("position"))) { this.element[0].style.position = "relative" } }, _adjustOffsetFromHelper: function(aK) { if (typeof aK === "string") { aK = aK.split(" ") } if (Array.isArray(aK)) { aK = { left: +aK[0], top: +aK[1] || 0 } } if ("left" in aK) { this.offset.click.left = aK.left + this.margins.left } if ("right" in aK) { this.offset.click.left = this.helperProportions.width - aK.right + this.margins.left } if ("top" in aK) { this.offset.click.top = aK.top + this.margins.top } if ("bottom" in aK) { this.offset.click.top = this.helperProportions.height - aK.bottom + this.margins.top } }, _isRootNode: function(aK) { return (/(html|body)/i).test(aK.tagName) || aK === this.document[0] }, _getParentOffset: function() { var aL = this.offsetParent.offset(),
                aK = this.document[0]; if (this.cssPosition === "absolute" && this.scrollParent[0] !== aK && ax.contains(this.scrollParent[0], this.offsetParent[0])) { aL.left += this.scrollParent.scrollLeft();
                aL.top += this.scrollParent.scrollTop() } if (this._isRootNode(this.offsetParent[0])) { aL = { top: 0, left: 0 } } return { top: aL.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0), left: aL.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0) } }, _getRelativeOffset: function() { if (this.cssPosition !== "relative") { return { top: 0, left: 0 } } var aK = this.element.position(),
                aL = this._isRootNode(this.scrollParent[0]); return { top: aK.top - (parseInt(this.helper.css("top"), 10) || 0) + (!aL ? this.scrollParent.scrollTop() : 0), left: aK.left - (parseInt(this.helper.css("left"), 10) || 0) + (!aL ? this.scrollParent.scrollLeft() : 0) } }, _cacheMargins: function() { this.margins = { left: (parseInt(this.element.css("marginLeft"), 10) || 0), top: (parseInt(this.element.css("marginTop"), 10) || 0), right: (parseInt(this.element.css("marginRight"), 10) || 0), bottom: (parseInt(this.element.css("marginBottom"), 10) || 0) } }, _cacheHelperProportions: function() { this.helperProportions = { width: this.helper.outerWidth(), height: this.helper.outerHeight() } }, _setContainment: function() { var aL, aO, aM, aN = this.options,
                aK = this.document[0];
            this.relativeContainer = null; if (!aN.containment) { this.containment = null; return } if (aN.containment === "window") { this.containment = [ax(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, ax(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, ax(window).scrollLeft() + ax(window).width() - this.helperProportions.width - this.margins.left, ax(window).scrollTop() + (ax(window).height() || aK.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]; return } if (aN.containment === "document") { this.containment = [0, 0, ax(aK).width() - this.helperProportions.width - this.margins.left, (ax(aK).height() || aK.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]; return } if (aN.containment.constructor === Array) { this.containment = aN.containment; return } if (aN.containment === "parent") { aN.containment = this.helper[0].parentNode }
            aO = ax(aN.containment);
            aM = aO[0]; if (!aM) { return }
            aL = /(scroll|auto)/.test(aO.css("overflow"));
            this.containment = [(parseInt(aO.css("borderLeftWidth"), 10) || 0) + (parseInt(aO.css("paddingLeft"), 10) || 0), (parseInt(aO.css("borderTopWidth"), 10) || 0) + (parseInt(aO.css("paddingTop"), 10) || 0), (aL ? Math.max(aM.scrollWidth, aM.offsetWidth) : aM.offsetWidth) - (parseInt(aO.css("borderRightWidth"), 10) || 0) - (parseInt(aO.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (aL ? Math.max(aM.scrollHeight, aM.offsetHeight) : aM.offsetHeight) - (parseInt(aO.css("borderBottomWidth"), 10) || 0) - (parseInt(aO.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom];
            this.relativeContainer = aO }, _convertPositionTo: function(aL, aN) { if (!aN) { aN = this.position } var aK = aL === "absolute" ? 1 : -1,
                aM = this._isRootNode(this.scrollParent[0]); return { top: (aN.top + this.offset.relative.top * aK + this.offset.parent.top * aK - ((this.cssPosition === "fixed" ? -this.offset.scroll.top : (aM ? 0 : this.offset.scroll.top)) * aK)), left: (aN.left + this.offset.relative.left * aK + this.offset.parent.left * aK - ((this.cssPosition === "fixed" ? -this.offset.scroll.left : (aM ? 0 : this.offset.scroll.left)) * aK)) } }, _generatePosition: function(aL, aR) { var aK, aS, aT, aN, aM = this.options,
                aQ = this._isRootNode(this.scrollParent[0]),
                aP = aL.pageX,
                aO = aL.pageY; if (!aQ || !this.offset.scroll) { this.offset.scroll = { top: this.scrollParent.scrollTop(), left: this.scrollParent.scrollLeft() } } if (aR) { if (this.containment) { if (this.relativeContainer) { aS = this.relativeContainer.offset();
                        aK = [this.containment[0] + aS.left, this.containment[1] + aS.top, this.containment[2] + aS.left, this.containment[3] + aS.top] } else { aK = this.containment } if (aL.pageX - this.offset.click.left < aK[0]) { aP = aK[0] + this.offset.click.left } if (aL.pageY - this.offset.click.top < aK[1]) { aO = aK[1] + this.offset.click.top } if (aL.pageX - this.offset.click.left > aK[2]) { aP = aK[2] + this.offset.click.left } if (aL.pageY - this.offset.click.top > aK[3]) { aO = aK[3] + this.offset.click.top } } if (aM.grid) { aT = aM.grid[1] ? this.originalPageY + Math.round((aO - this.originalPageY) / aM.grid[1]) * aM.grid[1] : this.originalPageY;
                    aO = aK ? ((aT - this.offset.click.top >= aK[1] || aT - this.offset.click.top > aK[3]) ? aT : ((aT - this.offset.click.top >= aK[1]) ? aT - aM.grid[1] : aT + aM.grid[1])) : aT;
                    aN = aM.grid[0] ? this.originalPageX + Math.round((aP - this.originalPageX) / aM.grid[0]) * aM.grid[0] : this.originalPageX;
                    aP = aK ? ((aN - this.offset.click.left >= aK[0] || aN - this.offset.click.left > aK[2]) ? aN : ((aN - this.offset.click.left >= aK[0]) ? aN - aM.grid[0] : aN + aM.grid[0])) : aN } if (aM.axis === "y") { aP = this.originalPageX } if (aM.axis === "x") { aO = this.originalPageY } } return { top: (aO - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (this.cssPosition === "fixed" ? -this.offset.scroll.top : (aQ ? 0 : this.offset.scroll.top))), left: (aP - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (this.cssPosition === "fixed" ? -this.offset.scroll.left : (aQ ? 0 : this.offset.scroll.left))) } }, _clear: function() { this._removeClass(this.helper, "ui-draggable-dragging"); if (this.helper[0] !== this.element[0] && !this.cancelHelperRemoval) { this.helper.remove() }
            this.helper = null;
            this.cancelHelperRemoval = false; if (this.destroyOnClear) { this.destroy() } }, _trigger: function(aK, aL, aM) { aM = aM || this._uiHash();
            ax.ui.plugin.call(this, aK, [aL, aM, this], true); if (/^(drag|start|stop)/.test(aK)) { this.positionAbs = this._convertPositionTo("absolute");
                aM.offset = this.positionAbs } return ax.Widget.prototype._trigger.call(this, aK, aL, aM) }, plugins: {}, _uiHash: function() { return { helper: this.helper, position: this.position, originalPosition: this.originalPosition, offset: this.positionAbs } } });
    ax.ui.plugin.add("draggable", "connectToSortable", { start: function(aM, aN, aK) { var aL = ax.extend({}, aN, { item: aK.element });
            aK.sortables = [];
            ax(aK.options.connectToSortable).each(function() { var aO = ax(this).sortable("instance"); if (aO && !aO.options.disabled) { aK.sortables.push(aO);
                    aO.refreshPositions();
                    aO._trigger("activate", aM, aL) } }) }, stop: function(aM, aN, aK) { var aL = ax.extend({}, aN, { item: aK.element });
            aK.cancelHelperRemoval = false;
            ax.each(aK.sortables, function() { var aO = this; if (aO.isOver) { aO.isOver = 0;
                    aK.cancelHelperRemoval = true;
                    aO.cancelHelperRemoval = false;
                    aO._storedCSS = { position: aO.placeholder.css("position"), top: aO.placeholder.css("top"), left: aO.placeholder.css("left") };
                    aO._mouseStop(aM);
                    aO.options.helper = aO.options._helper } else { aO.cancelHelperRemoval = true;
                    aO._trigger("deactivate", aM, aL) } }) }, drag: function(aL, aM, aK) { ax.each(aK.sortables, function() { var aN = false,
                    aO = this;
                aO.positionAbs = aK.positionAbs;
                aO.helperProportions = aK.helperProportions;
                aO.offset.click = aK.offset.click; if (aO._intersectsWith(aO.containerCache)) { aN = true;
                    ax.each(aK.sortables, function() { this.positionAbs = aK.positionAbs;
                        this.helperProportions = aK.helperProportions;
                        this.offset.click = aK.offset.click; if (this !== aO && this._intersectsWith(this.containerCache) && ax.contains(aO.element[0], this.element[0])) { aN = false } return aN }) } if (aN) { if (!aO.isOver) { aO.isOver = 1;
                        aK._parent = aM.helper.parent();
                        aO.currentItem = aM.helper.appendTo(aO.element).data("ui-sortable-item", true);
                        aO.options._helper = aO.options.helper;
                        aO.options.helper = function() { return aM.helper[0] };
                        aL.target = aO.currentItem[0];
                        aO._mouseCapture(aL, true);
                        aO._mouseStart(aL, true, true);
                        aO.offset.click.top = aK.offset.click.top;
                        aO.offset.click.left = aK.offset.click.left;
                        aO.offset.parent.left -= aK.offset.parent.left - aO.offset.parent.left;
                        aO.offset.parent.top -= aK.offset.parent.top - aO.offset.parent.top;
                        aK._trigger("toSortable", aL);
                        aK.dropped = aO.element;
                        ax.each(aK.sortables, function() { this.refreshPositions() });
                        aK.currentItem = aK.element;
                        aO.fromOutside = aK } if (aO.currentItem) { aO._mouseDrag(aL);
                        aM.position = aO.position } } else { if (aO.isOver) { aO.isOver = 0;
                        aO.cancelHelperRemoval = true;
                        aO.options._revert = aO.options.revert;
                        aO.options.revert = false;
                        aO._trigger("out", aL, aO._uiHash(aO));
                        aO._mouseStop(aL, true);
                        aO.options.revert = aO.options._revert;
                        aO.options.helper = aO.options._helper; if (aO.placeholder) { aO.placeholder.remove() }
                        aM.helper.appendTo(aK._parent);
                        aK._refreshOffsets(aL);
                        aM.position = aK._generatePosition(aL, true);
                        aK._trigger("fromSortable", aL);
                        aK.dropped = false;
                        ax.each(aK.sortables, function() { this.refreshPositions() }) } } }) } });
    ax.ui.plugin.add("draggable", "cursor", { start: function(aM, aN, aK) { var aL = ax("body"),
                aO = aK.options; if (aL.css("cursor")) { aO._cursor = aL.css("cursor") }
            aL.css("cursor", aO.cursor) }, stop: function(aL, aM, aK) { var aN = aK.options; if (aN._cursor) { ax("body").css("cursor", aN._cursor) } } });
    ax.ui.plugin.add("draggable", "opacity", { start: function(aM, aN, aK) { var aL = ax(aN.helper),
                aO = aK.options; if (aL.css("opacity")) { aO._opacity = aL.css("opacity") }
            aL.css("opacity", aO.opacity) }, stop: function(aL, aM, aK) { var aN = aK.options; if (aN._opacity) { ax(aM.helper).css("opacity", aN._opacity) } } });
    ax.ui.plugin.add("draggable", "scroll", { start: function(aL, aM, aK) { if (!aK.scrollParentNotHidden) { aK.scrollParentNotHidden = aK.helper.scrollParent(false) } if (aK.scrollParentNotHidden[0] !== aK.document[0] && aK.scrollParentNotHidden[0].tagName !== "HTML") { aK.overflowOffset = aK.scrollParentNotHidden.offset() } }, drag: function(aN, aO, aM) { var aP = aM.options,
                aL = false,
                aQ = aM.scrollParentNotHidden[0],
                aK = aM.document[0]; if (aQ !== aK && aQ.tagName !== "HTML") { if (!aP.axis || aP.axis !== "x") { if ((aM.overflowOffset.top + aQ.offsetHeight) - aN.pageY < aP.scrollSensitivity) { aQ.scrollTop = aL = aQ.scrollTop + aP.scrollSpeed } else { if (aN.pageY - aM.overflowOffset.top < aP.scrollSensitivity) { aQ.scrollTop = aL = aQ.scrollTop - aP.scrollSpeed } } } if (!aP.axis || aP.axis !== "y") { if ((aM.overflowOffset.left + aQ.offsetWidth) - aN.pageX < aP.scrollSensitivity) { aQ.scrollLeft = aL = aQ.scrollLeft + aP.scrollSpeed } else { if (aN.pageX - aM.overflowOffset.left < aP.scrollSensitivity) { aQ.scrollLeft = aL = aQ.scrollLeft - aP.scrollSpeed } } } } else { if (!aP.axis || aP.axis !== "x") { if (aN.pageY - ax(aK).scrollTop() < aP.scrollSensitivity) { aL = ax(aK).scrollTop(ax(aK).scrollTop() - aP.scrollSpeed) } else { if (ax(window).height() - (aN.pageY - ax(aK).scrollTop()) < aP.scrollSensitivity) { aL = ax(aK).scrollTop(ax(aK).scrollTop() + aP.scrollSpeed) } } } if (!aP.axis || aP.axis !== "y") { if (aN.pageX - ax(aK).scrollLeft() < aP.scrollSensitivity) { aL = ax(aK).scrollLeft(ax(aK).scrollLeft() - aP.scrollSpeed) } else { if (ax(window).width() - (aN.pageX - ax(aK).scrollLeft()) < aP.scrollSensitivity) { aL = ax(aK).scrollLeft(ax(aK).scrollLeft() + aP.scrollSpeed) } } } } if (aL !== false && ax.ui.ddmanager && !aP.dropBehaviour) { ax.ui.ddmanager.prepareOffsets(aM, aN) } } });
    ax.ui.plugin.add("draggable", "snap", { start: function(aL, aM, aK) { var aN = aK.options;
            aK.snapElements = [];
            ax(aN.snap.constructor !== String ? (aN.snap.items || ":data(ui-draggable)") : aN.snap).each(function() { var aP = ax(this),
                    aO = aP.offset(); if (this !== aK.element[0]) { aK.snapElements.push({ item: this, width: aP.outerWidth(), height: aP.outerHeight(), top: aO.top, left: aO.left }) } }) }, drag: function(aW, aT, aN) { var aK, a1, aP, aQ, aV, aS, aR, a2, aX, aO, aU = aN.options,
                a0 = aU.snapTolerance,
                aZ = aT.offset.left,
                aY = aZ + aN.helperProportions.width,
                aM = aT.offset.top,
                aL = aM + aN.helperProportions.height; for (aX = aN.snapElements.length - 1; aX >= 0; aX--) { aV = aN.snapElements[aX].left - aN.margins.left;
                aS = aV + aN.snapElements[aX].width;
                aR = aN.snapElements[aX].top - aN.margins.top;
                a2 = aR + aN.snapElements[aX].height; if (aY < aV - a0 || aZ > aS + a0 || aL < aR - a0 || aM > a2 + a0 || !ax.contains(aN.snapElements[aX].item.ownerDocument, aN.snapElements[aX].item)) { if (aN.snapElements[aX].snapping) { if (aN.options.snap.release) { aN.options.snap.release.call(aN.element, aW, ax.extend(aN._uiHash(), { snapItem: aN.snapElements[aX].item })) } }
                    aN.snapElements[aX].snapping = false; continue } if (aU.snapMode !== "inner") { aK = Math.abs(aR - aL) <= a0;
                    a1 = Math.abs(a2 - aM) <= a0;
                    aP = Math.abs(aV - aY) <= a0;
                    aQ = Math.abs(aS - aZ) <= a0; if (aK) { aT.position.top = aN._convertPositionTo("relative", { top: aR - aN.helperProportions.height, left: 0 }).top } if (a1) { aT.position.top = aN._convertPositionTo("relative", { top: a2, left: 0 }).top } if (aP) { aT.position.left = aN._convertPositionTo("relative", { top: 0, left: aV - aN.helperProportions.width }).left } if (aQ) { aT.position.left = aN._convertPositionTo("relative", { top: 0, left: aS }).left } }
                aO = (aK || a1 || aP || aQ); if (aU.snapMode !== "outer") { aK = Math.abs(aR - aM) <= a0;
                    a1 = Math.abs(a2 - aL) <= a0;
                    aP = Math.abs(aV - aZ) <= a0;
                    aQ = Math.abs(aS - aY) <= a0; if (aK) { aT.position.top = aN._convertPositionTo("relative", { top: aR, left: 0 }).top } if (a1) { aT.position.top = aN._convertPositionTo("relative", { top: a2 - aN.helperProportions.height, left: 0 }).top } if (aP) { aT.position.left = aN._convertPositionTo("relative", { top: 0, left: aV }).left } if (aQ) { aT.position.left = aN._convertPositionTo("relative", { top: 0, left: aS - aN.helperProportions.width }).left } } if (!aN.snapElements[aX].snapping && (aK || a1 || aP || aQ || aO)) { if (aN.options.snap.snap) { aN.options.snap.snap.call(aN.element, aW, ax.extend(aN._uiHash(), { snapItem: aN.snapElements[aX].item })) } }
                aN.snapElements[aX].snapping = (aK || a1 || aP || aQ || aO) } } });
    ax.ui.plugin.add("draggable", "stack", { start: function(aM, aN, aK) { var aL, aP = aK.options,
                aO = ax.makeArray(ax(aP.stack)).sort(function(aR, aQ) { return (parseInt(ax(aR).css("zIndex"), 10) || 0) - (parseInt(ax(aQ).css("zIndex"), 10) || 0) }); if (!aO.length) { return }
            aL = parseInt(ax(aO[0]).css("zIndex"), 10) || 0;
            ax(aO).each(function(aQ) { ax(this).css("zIndex", aL + aQ) });
            this.css("zIndex", (aL + aO.length)) } });
    ax.ui.plugin.add("draggable", "zIndex", { start: function(aM, aN, aK) { var aL = ax(aN.helper),
                aO = aK.options; if (aL.css("zIndex")) { aO._zIndex = aL.css("zIndex") }
            aL.css("zIndex", aO.zIndex) }, stop: function(aL, aM, aK) { var aN = aK.options; if (aN._zIndex) { ax(aM.helper).css("zIndex", aN._zIndex) } } });
    var C = ax.ui.draggable;
    /*!
     * jQuery UI Droppable 1.13.0
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */
    ax.widget("ui.droppable", { version: "1.13.0", widgetEventPrefix: "drop", options: { accept: "*", addClasses: true, greedy: false, scope: "default", tolerance: "intersect", activate: null, deactivate: null, drop: null, out: null, over: null }, _create: function() { var aL, aM = this.options,
                aK = aM.accept;
            this.isover = false;
            this.isout = true;
            this.accept = typeof aK === "function" ? aK : function(aN) { return aN.is(aK) };
            this.proportions = function() { if (arguments.length) { aL = arguments[0] } else { return aL ? aL : aL = { width: this.element[0].offsetWidth, height: this.element[0].offsetHeight } } };
            this._addToManager(aM.scope); if (aM.addClasses) { this._addClass("ui-droppable") } }, _addToManager: function(aK) { ax.ui.ddmanager.droppables[aK] = ax.ui.ddmanager.droppables[aK] || [];
            ax.ui.ddmanager.droppables[aK].push(this) }, _splice: function(aK) { var aL = 0; for (; aL < aK.length; aL++) { if (aK[aL] === this) { aK.splice(aL, 1) } } }, _destroy: function() { var aK = ax.ui.ddmanager.droppables[this.options.scope];
            this._splice(aK) }, _setOption: function(aL, aM) { if (aL === "accept") { this.accept = typeof aM === "function" ? aM : function(aN) { return aN.is(aM) } } else { if (aL === "scope") { var aK = ax.ui.ddmanager.droppables[this.options.scope];
                    this._splice(aK);
                    this._addToManager(aM) } }
            this._super(aL, aM) }, _activate: function(aL) { var aK = ax.ui.ddmanager.current;
            this._addActiveClass(); if (aK) { this._trigger("activate", aL, this.ui(aK)) } }, _deactivate: function(aL) { var aK = ax.ui.ddmanager.current;
            this._removeActiveClass(); if (aK) { this._trigger("deactivate", aL, this.ui(aK)) } }, _over: function(aL) { var aK = ax.ui.ddmanager.current; if (!aK || (aK.currentItem || aK.element)[0] === this.element[0]) { return } if (this.accept.call(this.element[0], (aK.currentItem || aK.element))) { this._addHoverClass();
                this._trigger("over", aL, this.ui(aK)) } }, _out: function(aL) { var aK = ax.ui.ddmanager.current; if (!aK || (aK.currentItem || aK.element)[0] === this.element[0]) { return } if (this.accept.call(this.element[0], (aK.currentItem || aK.element))) { this._removeHoverClass();
                this._trigger("out", aL, this.ui(aK)) } }, _drop: function(aL, aM) { var aK = aM || ax.ui.ddmanager.current,
                aN = false; if (!aK || (aK.currentItem || aK.element)[0] === this.element[0]) { return false }
            this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function() { var aO = ax(this).droppable("instance"); if (aO.options.greedy && !aO.options.disabled && aO.options.scope === aK.options.scope && aO.accept.call(aO.element[0], (aK.currentItem || aK.element)) && ax.ui.intersect(aK, ax.extend(aO, { offset: aO.element.offset() }), aO.options.tolerance, aL)) { aN = true; return false } }); if (aN) { return false } if (this.accept.call(this.element[0], (aK.currentItem || aK.element))) { this._removeActiveClass();
                this._removeHoverClass();
                this._trigger("drop", aL, this.ui(aK)); return this.element } return false }, ui: function(aK) { return { draggable: (aK.currentItem || aK.element), helper: aK.helper, position: aK.position, offset: aK.positionAbs } }, _addHoverClass: function() { this._addClass("ui-droppable-hover") }, _removeHoverClass: function() { this._removeClass("ui-droppable-hover") }, _addActiveClass: function() { this._addClass("ui-droppable-active") }, _removeActiveClass: function() { this._removeClass("ui-droppable-active") } });
    ax.ui.intersect = (function() {
        function aK(aM, aL, aN) { return (aM >= aL) && (aM < (aL + aN)) } return function(aW, aQ, aU, aM) { if (!aQ.offset) { return false } var aO = (aW.positionAbs || aW.position.absolute).left + aW.margins.left,
                aT = (aW.positionAbs || aW.position.absolute).top + aW.margins.top,
                aN = aO + aW.helperProportions.width,
                aS = aT + aW.helperProportions.height,
                aP = aQ.offset.left,
                aV = aQ.offset.top,
                aL = aP + aQ.proportions().width,
                aR = aV + aQ.proportions().height; switch (aU) {
                case "fit":
                    return (aP <= aO && aN <= aL && aV <= aT && aS <= aR);
                case "intersect":
                    return (aP < aO + (aW.helperProportions.width / 2) && aN - (aW.helperProportions.width / 2) < aL && aV < aT + (aW.helperProportions.height / 2) && aS - (aW.helperProportions.height / 2) < aR);
                case "pointer":
                    return aK(aM.pageY, aV, aQ.proportions().height) && aK(aM.pageX, aP, aQ.proportions().width);
                case "touch":
                    return ((aT >= aV && aT <= aR) || (aS >= aV && aS <= aR) || (aT < aV && aS > aR)) && ((aO >= aP && aO <= aL) || (aN >= aP && aN <= aL) || (aO < aP && aN > aL));
                default:
                    return false } } })();
    ax.ui.ddmanager = { current: null, droppables: { "default": [] }, prepareOffsets: function(aN, aP) { var aM, aL, aK = ax.ui.ddmanager.droppables[aN.options.scope] || [],
                aO = aP ? aP.type : null,
                aQ = (aN.currentItem || aN.element).find(":data(ui-droppable)").addBack();
            droppablesLoop: for (aM = 0; aM < aK.length; aM++) { if (aK[aM].options.disabled || (aN && !aK[aM].accept.call(aK[aM].element[0], (aN.currentItem || aN.element)))) { continue } for (aL = 0; aL < aQ.length; aL++) { if (aQ[aL] === aK[aM].element[0]) { aK[aM].proportions().height = 0; continue droppablesLoop } }
                aK[aM].visible = aK[aM].element.css("display") !== "none"; if (!aK[aM].visible) { continue } if (aO === "mousedown") { aK[aM]._activate.call(aK[aM], aP) }
                aK[aM].offset = aK[aM].element.offset();
                aK[aM].proportions({ width: aK[aM].element[0].offsetWidth, height: aK[aM].element[0].offsetHeight }) } }, drop: function(aK, aL) { var aM = false;
            ax.each((ax.ui.ddmanager.droppables[aK.options.scope] || []).slice(), function() { if (!this.options) { return } if (!this.options.disabled && this.visible && ax.ui.intersect(aK, this, this.options.tolerance, aL)) { aM = this._drop.call(this, aL) || aM } if (!this.options.disabled && this.visible && this.accept.call(this.element[0], (aK.currentItem || aK.element))) { this.isout = true;
                    this.isover = false;
                    this._deactivate.call(this, aL) } }); return aM }, dragStart: function(aK, aL) { aK.element.parentsUntil("body").on("scroll.droppable", function() { if (!aK.options.refreshPositions) { ax.ui.ddmanager.prepareOffsets(aK, aL) } }) }, drag: function(aK, aL) { if (aK.options.refreshPositions) { ax.ui.ddmanager.prepareOffsets(aK, aL) }
            ax.each(ax.ui.ddmanager.droppables[aK.options.scope] || [], function() { if (this.options.disabled || this.greedyChild || !this.visible) { return } var aP, aN, aM, aO = ax.ui.intersect(aK, this, this.options.tolerance, aL),
                    aQ = !aO && this.isover ? "isout" : (aO && !this.isover ? "isover" : null); if (!aQ) { return } if (this.options.greedy) { aN = this.options.scope;
                    aM = this.element.parents(":data(ui-droppable)").filter(function() { return ax(this).droppable("instance").options.scope === aN }); if (aM.length) { aP = ax(aM[0]).droppable("instance");
                        aP.greedyChild = (aQ === "isover") } } if (aP && aQ === "isover") { aP.isover = false;
                    aP.isout = true;
                    aP._out.call(aP, aL) }
                this[aQ] = true;
                this[aQ === "isout" ? "isover" : "isout"] = false;
                this[aQ === "isover" ? "_over" : "_out"].call(this, aL); if (aP && aQ === "isout") { aP.isout = false;
                    aP.isover = true;
                    aP._over.call(aP, aL) } }) }, dragStop: function(aK, aL) { aK.element.parentsUntil("body").off("scroll.droppable"); if (!aK.options.refreshPositions) { ax.ui.ddmanager.prepareOffsets(aK, aL) } } };
    if (ax.uiBackCompat !== false) { ax.widget("ui.droppable", ax.ui.droppable, { options: { hoverClass: false, activeClass: false }, _addActiveClass: function() { this._super(); if (this.options.activeClass) { this.element.addClass(this.options.activeClass) } }, _removeActiveClass: function() { this._super(); if (this.options.activeClass) { this.element.removeClass(this.options.activeClass) } }, _addHoverClass: function() { this._super(); if (this.options.hoverClass) { this.element.addClass(this.options.hoverClass) } }, _removeHoverClass: function() { this._super(); if (this.options.hoverClass) { this.element.removeClass(this.options.hoverClass) } } }) }
    var ad = ax.ui.droppable;
    /*!
     * jQuery UI Resizable 1.13.0
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */
    ax.widget("ui.resizable", ax.ui.mouse, { version: "1.13.0", widgetEventPrefix: "resize", options: { alsoResize: false, animate: false, animateDuration: "slow", animateEasing: "swing", aspectRatio: false, autoHide: false, classes: { "ui-resizable-se": "ui-icon ui-icon-gripsmall-diagonal-se" }, containment: false, ghost: false, grid: false, handles: "e,s,se", helper: false, maxHeight: null, maxWidth: null, minHeight: 10, minWidth: 10, zIndex: 90, resize: null, start: null, stop: null }, _num: function(aK) { return parseFloat(aK) || 0 }, _isNumber: function(aK) { return !isNaN(parseFloat(aK)) }, _hasScroll: function(aN, aL) { if (ax(aN).css("overflow") === "hidden") { return false } var aK = (aL && aL === "left") ? "scrollLeft" : "scrollTop",
                aM = false; if (aN[aK] > 0) { return true } try { aN[aK] = 1;
                aM = (aN[aK] > 0);
                aN[aK] = 0 } catch (aO) {} return aM }, _create: function() { var aL, aM = this.options,
                aK = this;
            this._addClass("ui-resizable");
            ax.extend(this, { _aspectRatio: !!(aM.aspectRatio), aspectRatio: aM.aspectRatio, originalElement: this.element, _proportionallyResizeElements: [], _helper: aM.helper || aM.ghost || aM.animate ? aM.helper || "ui-resizable-helper" : null }); if (this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i)) { this.element.wrap(ax("<div class='ui-wrapper'></div>").css({ overflow: "hidden", position: this.element.css("position"), width: this.element.outerWidth(), height: this.element.outerHeight(), top: this.element.css("top"), left: this.element.css("left") }));
                this.element = this.element.parent().data("ui-resizable", this.element.resizable("instance"));
                this.elementIsWrapper = true;
                aL = { marginTop: this.originalElement.css("marginTop"), marginRight: this.originalElement.css("marginRight"), marginBottom: this.originalElement.css("marginBottom"), marginLeft: this.originalElement.css("marginLeft") };
                this.element.css(aL);
                this.originalElement.css("margin", 0);
                this.originalResizeStyle = this.originalElement.css("resize");
                this.originalElement.css("resize", "none");
                this._proportionallyResizeElements.push(this.originalElement.css({ position: "static", zoom: 1, display: "block" }));
                this.originalElement.css(aL);
                this._proportionallyResize() }
            this._setupHandles(); if (aM.autoHide) { ax(this.element).on("mouseenter", function() { if (aM.disabled) { return }
                    aK._removeClass("ui-resizable-autohide");
                    aK._handles.show() }).on("mouseleave", function() { if (aM.disabled) { return } if (!aK.resizing) { aK._addClass("ui-resizable-autohide");
                        aK._handles.hide() } }) }
            this._mouseInit() }, _destroy: function() { this._mouseDestroy();
            this._addedHandles.remove(); var aL, aK = function(aM) { ax(aM).removeData("resizable").removeData("ui-resizable").off(".resizable") }; if (this.elementIsWrapper) { aK(this.element);
                aL = this.element;
                this.originalElement.css({ position: aL.css("position"), width: aL.outerWidth(), height: aL.outerHeight(), top: aL.css("top"), left: aL.css("left") }).insertAfter(aL);
                aL.remove() }
            this.originalElement.css("resize", this.originalResizeStyle);
            aK(this.originalElement); return this }, _setOption: function(aK, aL) { this._super(aK, aL); switch (aK) {
                case "handles":
                    this._removeHandles();
                    this._setupHandles(); break;
                case "aspectRatio":
                    this._aspectRatio = !!aL; break;
                default:
                    break } }, _setupHandles: function() { var aP = this.options,
                aO, aL, aQ, aK, aM, aN = this;
            this.handles = aP.handles || (!ax(".ui-resizable-handle", this.element).length ? "e,s,se" : { n: ".ui-resizable-n", e: ".ui-resizable-e", s: ".ui-resizable-s", w: ".ui-resizable-w", se: ".ui-resizable-se", sw: ".ui-resizable-sw", ne: ".ui-resizable-ne", nw: ".ui-resizable-nw" });
            this._handles = ax();
            this._addedHandles = ax(); if (this.handles.constructor === String) { if (this.handles === "all") { this.handles = "n,e,s,w,se,sw,ne,nw" }
                aQ = this.handles.split(",");
                this.handles = {}; for (aL = 0; aL < aQ.length; aL++) { aO = String.prototype.trim.call(aQ[aL]);
                    aK = "ui-resizable-" + aO;
                    aM = ax("<div>");
                    this._addClass(aM, "ui-resizable-handle " + aK);
                    aM.css({ zIndex: aP.zIndex });
                    this.handles[aO] = ".ui-resizable-" + aO; if (!this.element.children(this.handles[aO]).length) { this.element.append(aM);
                        this._addedHandles = this._addedHandles.add(aM) } } }
            this._renderAxis = function(aV) { var aS, aT, aR, aU;
                aV = aV || this.element; for (aS in this.handles) { if (this.handles[aS].constructor === String) { this.handles[aS] = this.element.children(this.handles[aS]).first().show() } else { if (this.handles[aS].jquery || this.handles[aS].nodeType) { this.handles[aS] = ax(this.handles[aS]);
                            this._on(this.handles[aS], { mousedown: aN._mouseDown }) } } if (this.elementIsWrapper && this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i)) { aT = ax(this.handles[aS], this.element);
                        aU = /sw|ne|nw|se|n|s/.test(aS) ? aT.outerHeight() : aT.outerWidth();
                        aR = ["padding", /ne|nw|n/.test(aS) ? "Top" : /se|sw|s/.test(aS) ? "Bottom" : /^e$/.test(aS) ? "Right" : "Left"].join("");
                        aV.css(aR, aU);
                        this._proportionallyResize() }
                    this._handles = this._handles.add(this.handles[aS]) } };
            this._renderAxis(this.element);
            this._handles = this._handles.add(this.element.find(".ui-resizable-handle"));
            this._handles.disableSelection();
            this._handles.on("mouseover", function() { if (!aN.resizing) { if (this.className) { aM = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i) }
                    aN.axis = aM && aM[1] ? aM[1] : "se" } }); if (aP.autoHide) { this._handles.hide();
                this._addClass("ui-resizable-autohide") } }, _removeHandles: function() { this._addedHandles.remove() }, _mouseCapture: function(aM) { var aL, aN, aK = false; for (aL in this.handles) { aN = ax(this.handles[aL])[0]; if (aN === aM.target || ax.contains(aN, aM.target)) { aK = true } } return !this.options.disabled && aK }, _mouseStart: function(aL) { var aP, aM, aO, aN = this.options,
                aK = this.element;
            this.resizing = true;
            this._renderProxy();
            aP = this._num(this.helper.css("left"));
            aM = this._num(this.helper.css("top")); if (aN.containment) { aP += ax(aN.containment).scrollLeft() || 0;
                aM += ax(aN.containment).scrollTop() || 0 }
            this.offset = this.helper.offset();
            this.position = { left: aP, top: aM };
            this.size = this._helper ? { width: this.helper.width(), height: this.helper.height() } : { width: aK.width(), height: aK.height() };
            this.originalSize = this._helper ? { width: aK.outerWidth(), height: aK.outerHeight() } : { width: aK.width(), height: aK.height() };
            this.sizeDiff = { width: aK.outerWidth() - aK.width(), height: aK.outerHeight() - aK.height() };
            this.originalPosition = { left: aP, top: aM };
            this.originalMousePosition = { left: aL.pageX, top: aL.pageY };
            this.aspectRatio = (typeof aN.aspectRatio === "number") ? aN.aspectRatio : ((this.originalSize.width / this.originalSize.height) || 1);
            aO = ax(".ui-resizable-" + this.axis).css("cursor");
            ax("body").css("cursor", aO === "auto" ? this.axis + "-resize" : aO);
            this._addClass("ui-resizable-resizing");
            this._propagate("start", aL); return true }, _mouseDrag: function(aP) { var aQ, aO, aR = this.originalMousePosition,
                aL = this.axis,
                aM = (aP.pageX - aR.left) || 0,
                aK = (aP.pageY - aR.top) || 0,
                aN = this._change[aL];
            this._updatePrevProperties(); if (!aN) { return false }
            aQ = aN.apply(this, [aP, aM, aK]);
            this._updateVirtualBoundaries(aP.shiftKey); if (this._aspectRatio || aP.shiftKey) { aQ = this._updateRatio(aQ, aP) }
            aQ = this._respectSize(aQ, aP);
            this._updateCache(aQ);
            this._propagate("resize", aP);
            aO = this._applyChanges(); if (!this._helper && this._proportionallyResizeElements.length) { this._proportionallyResize() } if (!ax.isEmptyObject(aO)) { this._updatePrevProperties();
                this._trigger("resize", aP, this.ui());
                this._applyChanges() } return false }, _mouseStop: function(aN) { this.resizing = false; var aM, aK, aL, aQ, aT, aP, aS, aO = this.options,
                aR = this; if (this._helper) { aM = this._proportionallyResizeElements;
                aK = aM.length && (/textarea/i).test(aM[0].nodeName);
                aL = aK && this._hasScroll(aM[0], "left") ? 0 : aR.sizeDiff.height;
                aQ = aK ? 0 : aR.sizeDiff.width;
                aT = { width: (aR.helper.width() - aQ), height: (aR.helper.height() - aL) };
                aP = (parseFloat(aR.element.css("left")) + (aR.position.left - aR.originalPosition.left)) || null;
                aS = (parseFloat(aR.element.css("top")) + (aR.position.top - aR.originalPosition.top)) || null; if (!aO.animate) { this.element.css(ax.extend(aT, { top: aS, left: aP })) }
                aR.helper.height(aR.size.height);
                aR.helper.width(aR.size.width); if (this._helper && !aO.animate) { this._proportionallyResize() } }
            ax("body").css("cursor", "auto");
            this._removeClass("ui-resizable-resizing");
            this._propagate("stop", aN); if (this._helper) { this.helper.remove() } return false }, _updatePrevProperties: function() { this.prevPosition = { top: this.position.top, left: this.position.left };
            this.prevSize = { width: this.size.width, height: this.size.height } }, _applyChanges: function() { var aK = {}; if (this.position.top !== this.prevPosition.top) { aK.top = this.position.top + "px" } if (this.position.left !== this.prevPosition.left) { aK.left = this.position.left + "px" } if (this.size.width !== this.prevSize.width) { aK.width = this.size.width + "px" } if (this.size.height !== this.prevSize.height) { aK.height = this.size.height + "px" }
            this.helper.css(aK); return aK }, _updateVirtualBoundaries: function(aM) { var aO, aN, aL, aQ, aK, aP = this.options;
            aK = { minWidth: this._isNumber(aP.minWidth) ? aP.minWidth : 0, maxWidth: this._isNumber(aP.maxWidth) ? aP.maxWidth : Infinity, minHeight: this._isNumber(aP.minHeight) ? aP.minHeight : 0, maxHeight: this._isNumber(aP.maxHeight) ? aP.maxHeight : Infinity }; if (this._aspectRatio || aM) { aO = aK.minHeight * this.aspectRatio;
                aL = aK.minWidth / this.aspectRatio;
                aN = aK.maxHeight * this.aspectRatio;
                aQ = aK.maxWidth / this.aspectRatio; if (aO > aK.minWidth) { aK.minWidth = aO } if (aL > aK.minHeight) { aK.minHeight = aL } if (aN < aK.maxWidth) { aK.maxWidth = aN } if (aQ < aK.maxHeight) { aK.maxHeight = aQ } }
            this._vBoundaries = aK }, _updateCache: function(aK) { this.offset = this.helper.offset(); if (this._isNumber(aK.left)) { this.position.left = aK.left } if (this._isNumber(aK.top)) { this.position.top = aK.top } if (this._isNumber(aK.height)) { this.size.height = aK.height } if (this._isNumber(aK.width)) { this.size.width = aK.width } }, _updateRatio: function(aM) { var aN = this.position,
                aL = this.size,
                aK = this.axis; if (this._isNumber(aM.height)) { aM.width = (aM.height * this.aspectRatio) } else { if (this._isNumber(aM.width)) { aM.height = (aM.width / this.aspectRatio) } } if (aK === "sw") { aM.left = aN.left + (aL.width - aM.width);
                aM.top = null } if (aK === "nw") { aM.top = aN.top + (aL.height - aM.height);
                aM.left = aN.left + (aL.width - aM.width) } return aM }, _respectSize: function(aP) { var aM = this._vBoundaries,
                aS = this.axis,
                aU = this._isNumber(aP.width) && aM.maxWidth && (aM.maxWidth < aP.width),
                aQ = this._isNumber(aP.height) && aM.maxHeight && (aM.maxHeight < aP.height),
                aN = this._isNumber(aP.width) && aM.minWidth && (aM.minWidth > aP.width),
                aT = this._isNumber(aP.height) && aM.minHeight && (aM.minHeight > aP.height),
                aL = this.originalPosition.left + this.originalSize.width,
                aR = this.originalPosition.top + this.originalSize.height,
                aO = /sw|nw|w/.test(aS),
                aK = /nw|ne|n/.test(aS); if (aN) { aP.width = aM.minWidth } if (aT) { aP.height = aM.minHeight } if (aU) { aP.width = aM.maxWidth } if (aQ) { aP.height = aM.maxHeight } if (aN && aO) { aP.left = aL - aM.minWidth } if (aU && aO) { aP.left = aL - aM.maxWidth } if (aT && aK) { aP.top = aR - aM.minHeight } if (aQ && aK) { aP.top = aR - aM.maxHeight } if (!aP.width && !aP.height && !aP.left && aP.top) { aP.top = null } else { if (!aP.width && !aP.height && !aP.top && aP.left) { aP.left = null } } return aP }, _getPaddingPlusBorderDimensions: function(aM) { var aL = 0,
                aN = [],
                aO = [aM.css("borderTopWidth"), aM.css("borderRightWidth"), aM.css("borderBottomWidth"), aM.css("borderLeftWidth")],
                aK = [aM.css("paddingTop"), aM.css("paddingRight"), aM.css("paddingBottom"), aM.css("paddingLeft")]; for (; aL < 4; aL++) { aN[aL] = (parseFloat(aO[aL]) || 0);
                aN[aL] += (parseFloat(aK[aL]) || 0) } return { height: aN[0] + aN[2], width: aN[1] + aN[3] } }, _proportionallyResize: function() { if (!this._proportionallyResizeElements.length) { return } var aM, aL = 0,
                aK = this.helper || this.element; for (; aL < this._proportionallyResizeElements.length; aL++) { aM = this._proportionallyResizeElements[aL]; if (!this.outerDimensions) { this.outerDimensions = this._getPaddingPlusBorderDimensions(aM) }
                aM.css({ height: (aK.height() - this.outerDimensions.height) || 0, width: (aK.width() - this.outerDimensions.width) || 0 }) } }, _renderProxy: function() { var aK = this.element,
                aL = this.options;
            this.elementOffset = aK.offset(); if (this._helper) { this.helper = this.helper || ax("<div></div>").css({ overflow: "hidden" });
                this._addClass(this.helper, this._helper);
                this.helper.css({ width: this.element.outerWidth(), height: this.element.outerHeight(), position: "absolute", left: this.elementOffset.left + "px", top: this.elementOffset.top + "px", zIndex: ++aL.zIndex });
                this.helper.appendTo("body").disableSelection() } else { this.helper = this.element } }, _change: { e: function(aL, aK) { return { width: this.originalSize.width + aK } }, w: function(aM, aK) { var aL = this.originalSize,
                    aN = this.originalPosition; return { left: aN.left + aK, width: aL.width - aK } }, n: function(aN, aL, aK) { var aM = this.originalSize,
                    aO = this.originalPosition; return { top: aO.top + aK, height: aM.height - aK } }, s: function(aM, aL, aK) { return { height: this.originalSize.height + aK } }, se: function(aM, aL, aK) { return ax.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [aM, aL, aK])) }, sw: function(aM, aL, aK) { return ax.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [aM, aL, aK])) }, ne: function(aM, aL, aK) { return ax.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [aM, aL, aK])) }, nw: function(aM, aL, aK) { return ax.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [aM, aL, aK])) } }, _propagate: function(aL, aK) { ax.ui.plugin.call(this, aL, [aK, this.ui()]); if (aL !== "resize") { this._trigger(aL, aK, this.ui()) } }, plugins: {}, ui: function() { return { originalElement: this.originalElement, element: this.element, helper: this.helper, position: this.position, size: this.size, originalSize: this.originalSize, originalPosition: this.originalPosition } } });
    ax.ui.plugin.add("resizable", "animate", { stop: function(aN) { var aS = ax(this).resizable("instance"),
                aP = aS.options,
                aM = aS._proportionallyResizeElements,
                aK = aM.length && (/textarea/i).test(aM[0].nodeName),
                aL = aK && aS._hasScroll(aM[0], "left") ? 0 : aS.sizeDiff.height,
                aR = aK ? 0 : aS.sizeDiff.width,
                aO = { width: (aS.size.width - aR), height: (aS.size.height - aL) },
                aQ = (parseFloat(aS.element.css("left")) + (aS.position.left - aS.originalPosition.left)) || null,
                aT = (parseFloat(aS.element.css("top")) + (aS.position.top - aS.originalPosition.top)) || null;
            aS.element.animate(ax.extend(aO, aT && aQ ? { top: aT, left: aQ } : {}), { duration: aP.animateDuration, easing: aP.animateEasing, step: function() { var aU = { width: parseFloat(aS.element.css("width")), height: parseFloat(aS.element.css("height")), top: parseFloat(aS.element.css("top")), left: parseFloat(aS.element.css("left")) }; if (aM && aM.length) { ax(aM[0]).css({ width: aU.width, height: aU.height }) }
                    aS._updateCache(aU);
                    aS._propagate("resize", aN) } }) } });
    ax.ui.plugin.add("resizable", "containment", { start: function() { var aS, aM, aU, aK, aR, aN, aV, aT = ax(this).resizable("instance"),
                aQ = aT.options,
                aP = aT.element,
                aL = aQ.containment,
                aO = (aL instanceof ax) ? aL.get(0) : (/parent/.test(aL)) ? aP.parent().get(0) : aL; if (!aO) { return }
            aT.containerElement = ax(aO); if (/document/.test(aL) || aL === document) { aT.containerOffset = { left: 0, top: 0 };
                aT.containerPosition = { left: 0, top: 0 };
                aT.parentData = { element: ax(document), left: 0, top: 0, width: ax(document).width(), height: ax(document).height() || document.body.parentNode.scrollHeight } } else { aS = ax(aO);
                aM = [];
                ax(["Top", "Right", "Left", "Bottom"]).each(function(aX, aW) { aM[aX] = aT._num(aS.css("padding" + aW)) });
                aT.containerOffset = aS.offset();
                aT.containerPosition = aS.position();
                aT.containerSize = { height: (aS.innerHeight() - aM[3]), width: (aS.innerWidth() - aM[1]) };
                aU = aT.containerOffset;
                aK = aT.containerSize.height;
                aR = aT.containerSize.width;
                aN = (aT._hasScroll(aO, "left") ? aO.scrollWidth : aR);
                aV = (aT._hasScroll(aO) ? aO.scrollHeight : aK);
                aT.parentData = { element: aO, left: aU.left, top: aU.top, width: aN, height: aV } } }, resize: function(aL) { var aR, aW, aQ, aO, aS = ax(this).resizable("instance"),
                aN = aS.options,
                aU = aS.containerOffset,
                aT = aS.position,
                aV = aS._aspectRatio || aL.shiftKey,
                aK = { top: 0, left: 0 },
                aM = aS.containerElement,
                aP = true; if (aM[0] !== document && (/static/).test(aM.css("position"))) { aK = aU } if (aT.left < (aS._helper ? aU.left : 0)) { aS.size.width = aS.size.width + (aS._helper ? (aS.position.left - aU.left) : (aS.position.left - aK.left)); if (aV) { aS.size.height = aS.size.width / aS.aspectRatio;
                    aP = false }
                aS.position.left = aN.helper ? aU.left : 0 } if (aT.top < (aS._helper ? aU.top : 0)) { aS.size.height = aS.size.height + (aS._helper ? (aS.position.top - aU.top) : aS.position.top); if (aV) { aS.size.width = aS.size.height * aS.aspectRatio;
                    aP = false }
                aS.position.top = aS._helper ? aU.top : 0 }
            aQ = aS.containerElement.get(0) === aS.element.parent().get(0);
            aO = /relative|absolute/.test(aS.containerElement.css("position")); if (aQ && aO) { aS.offset.left = aS.parentData.left + aS.position.left;
                aS.offset.top = aS.parentData.top + aS.position.top } else { aS.offset.left = aS.element.offset().left;
                aS.offset.top = aS.element.offset().top }
            aR = Math.abs(aS.sizeDiff.width + (aS._helper ? aS.offset.left - aK.left : (aS.offset.left - aU.left)));
            aW = Math.abs(aS.sizeDiff.height + (aS._helper ? aS.offset.top - aK.top : (aS.offset.top - aU.top))); if (aR + aS.size.width >= aS.parentData.width) { aS.size.width = aS.parentData.width - aR; if (aV) { aS.size.height = aS.size.width / aS.aspectRatio;
                    aP = false } } if (aW + aS.size.height >= aS.parentData.height) { aS.size.height = aS.parentData.height - aW; if (aV) { aS.size.width = aS.size.height * aS.aspectRatio;
                    aP = false } } if (!aP) { aS.position.left = aS.prevPosition.left;
                aS.position.top = aS.prevPosition.top;
                aS.size.width = aS.prevSize.width;
                aS.size.height = aS.prevSize.height } }, stop: function() { var aP = ax(this).resizable("instance"),
                aL = aP.options,
                aQ = aP.containerOffset,
                aK = aP.containerPosition,
                aM = aP.containerElement,
                aN = ax(aP.helper),
                aS = aN.offset(),
                aR = aN.outerWidth() - aP.sizeDiff.width,
                aO = aN.outerHeight() - aP.sizeDiff.height; if (aP._helper && !aL.animate && (/relative/).test(aM.css("position"))) { ax(this).css({ left: aS.left - aK.left - aQ.left, width: aR, height: aO }) } if (aP._helper && !aL.animate && (/static/).test(aM.css("position"))) { ax(this).css({ left: aS.left - aK.left - aQ.left, width: aR, height: aO }) } } });
    ax.ui.plugin.add("resizable", "alsoResize", { start: function() { var aK = ax(this).resizable("instance"),
                aL = aK.options;
            ax(aL.alsoResize).each(function() { var aM = ax(this);
                aM.data("ui-resizable-alsoresize", { width: parseFloat(aM.width()), height: parseFloat(aM.height()), left: parseFloat(aM.css("left")), top: parseFloat(aM.css("top")) }) }) }, resize: function(aL, aN) { var aK = ax(this).resizable("instance"),
                aO = aK.options,
                aM = aK.originalSize,
                aQ = aK.originalPosition,
                aP = { height: (aK.size.height - aM.height) || 0, width: (aK.size.width - aM.width) || 0, top: (aK.position.top - aQ.top) || 0, left: (aK.position.left - aQ.left) || 0 };
            ax(aO.alsoResize).each(function() { var aT = ax(this),
                    aU = ax(this).data("ui-resizable-alsoresize"),
                    aS = {},
                    aR = aT.parents(aN.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                ax.each(aR, function(aV, aX) { var aW = (aU[aX] || 0) + (aP[aX] || 0); if (aW && aW >= 0) { aS[aX] = aW || null } });
                aT.css(aS) }) }, stop: function() { ax(this).removeData("ui-resizable-alsoresize") } });
    ax.ui.plugin.add("resizable", "ghost", { start: function() { var aL = ax(this).resizable("instance"),
                aK = aL.size;
            aL.ghost = aL.originalElement.clone();
            aL.ghost.css({ opacity: 0.25, display: "block", position: "relative", height: aK.height, width: aK.width, margin: 0, left: 0, top: 0 });
            aL._addClass(aL.ghost, "ui-resizable-ghost"); if (ax.uiBackCompat !== false && typeof aL.options.ghost === "string") { aL.ghost.addClass(this.options.ghost) }
            aL.ghost.appendTo(aL.helper) }, resize: function() { var aK = ax(this).resizable("instance"); if (aK.ghost) { aK.ghost.css({ position: "relative", height: aK.size.height, width: aK.size.width }) } }, stop: function() { var aK = ax(this).resizable("instance"); if (aK.ghost && aK.helper) { aK.helper.get(0).removeChild(aK.ghost.get(0)) } } });
    ax.ui.plugin.add("resizable", "grid", { resize: function() { var aN, aS = ax(this).resizable("instance"),
                aW = aS.options,
                aQ = aS.size,
                aR = aS.originalSize,
                aT = aS.originalPosition,
                a1 = aS.axis,
                aK = typeof aW.grid === "number" ? [aW.grid, aW.grid] : aW.grid,
                aZ = (aK[0] || 1),
                aY = (aK[1] || 1),
                aP = Math.round((aQ.width - aR.width) / aZ) * aZ,
                aO = Math.round((aQ.height - aR.height) / aY) * aY,
                aU = aR.width + aP,
                aX = aR.height + aO,
                aM = aW.maxWidth && (aW.maxWidth < aU),
                aV = aW.maxHeight && (aW.maxHeight < aX),
                a0 = aW.minWidth && (aW.minWidth > aU),
                aL = aW.minHeight && (aW.minHeight > aX);
            aW.grid = aK; if (a0) { aU += aZ } if (aL) { aX += aY } if (aM) { aU -= aZ } if (aV) { aX -= aY } if (/^(se|s|e)$/.test(a1)) { aS.size.width = aU;
                aS.size.height = aX } else { if (/^(ne)$/.test(a1)) { aS.size.width = aU;
                    aS.size.height = aX;
                    aS.position.top = aT.top - aO } else { if (/^(sw)$/.test(a1)) { aS.size.width = aU;
                        aS.size.height = aX;
                        aS.position.left = aT.left - aP } else { if (aX - aY <= 0 || aU - aZ <= 0) { aN = aS._getPaddingPlusBorderDimensions(this) } if (aX - aY > 0) { aS.size.height = aX;
                            aS.position.top = aT.top - aO } else { aX = aY - aN.height;
                            aS.size.height = aX;
                            aS.position.top = aT.top + aR.height - aX } if (aU - aZ > 0) { aS.size.width = aU;
                            aS.position.left = aT.left - aP } else { aU = aZ - aN.width;
                            aS.size.width = aU;
                            aS.position.left = aT.left + aR.width - aU } } } } } });
    var H = ax.ui.resizable;
    /*!
     * jQuery UI Selectable 1.13.0
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */
    var u = ax.widget("ui.selectable", ax.ui.mouse, { version: "1.13.0", options: { appendTo: "body", autoRefresh: true, distance: 0, filter: "*", tolerance: "touch", selected: null, selecting: null, start: null, stop: null, unselected: null, unselecting: null }, _create: function() { var aK = this;
            this._addClass("ui-selectable");
            this.dragged = false;
            this.refresh = function() { aK.elementPos = ax(aK.element[0]).offset();
                aK.selectees = ax(aK.options.filter, aK.element[0]);
                aK._addClass(aK.selectees, "ui-selectee");
                aK.selectees.each(function() { var aM = ax(this),
                        aL = aM.offset(),
                        aN = { left: aL.left - aK.elementPos.left, top: aL.top - aK.elementPos.top };
                    ax.data(this, "selectable-item", { element: this, $element: aM, left: aN.left, top: aN.top, right: aN.left + aM.outerWidth(), bottom: aN.top + aM.outerHeight(), startselected: false, selected: aM.hasClass("ui-selected"), selecting: aM.hasClass("ui-selecting"), unselecting: aM.hasClass("ui-unselecting") }) }) };
            this.refresh();
            this._mouseInit();
            this.helper = ax("<div>");
            this._addClass(this.helper, "ui-selectable-helper") }, _destroy: function() { this.selectees.removeData("selectable-item");
            this._mouseDestroy() }, _mouseStart: function(aM) { var aL = this,
                aK = this.options;
            this.opos = [aM.pageX, aM.pageY];
            this.elementPos = ax(this.element[0]).offset(); if (this.options.disabled) { return }
            this.selectees = ax(aK.filter, this.element[0]);
            this._trigger("start", aM);
            ax(aK.appendTo).append(this.helper);
            this.helper.css({ left: aM.pageX, top: aM.pageY, width: 0, height: 0 }); if (aK.autoRefresh) { this.refresh() }
            this.selectees.filter(".ui-selected").each(function() { var aN = ax.data(this, "selectable-item");
                aN.startselected = true; if (!aM.metaKey && !aM.ctrlKey) { aL._removeClass(aN.$element, "ui-selected");
                    aN.selected = false;
                    aL._addClass(aN.$element, "ui-unselecting");
                    aN.unselecting = true;
                    aL._trigger("unselecting", aM, { unselecting: aN.element }) } });
            ax(aM.target).parents().addBack().each(function() { var aN, aO = ax.data(this, "selectable-item"); if (aO) { aN = (!aM.metaKey && !aM.ctrlKey) || !aO.$element.hasClass("ui-selected");
                    aL._removeClass(aO.$element, aN ? "ui-unselecting" : "ui-selected")._addClass(aO.$element, aN ? "ui-selecting" : "ui-unselecting");
                    aO.unselecting = !aN;
                    aO.selecting = aN;
                    aO.selected = aN; if (aN) { aL._trigger("selecting", aM, { selecting: aO.element }) } else { aL._trigger("unselecting", aM, { unselecting: aO.element }) } return false } }) }, _mouseDrag: function(aR) { this.dragged = true; if (this.options.disabled) { return } var aO, aQ = this,
                aM = this.options,
                aL = this.opos[0],
                aP = this.opos[1],
                aK = aR.pageX,
                aN = aR.pageY; if (aL > aK) { aO = aK;
                aK = aL;
                aL = aO } if (aP > aN) { aO = aN;
                aN = aP;
                aP = aO }
            this.helper.css({ left: aL, top: aP, width: aK - aL, height: aN - aP });
            this.selectees.each(function() { var aS = ax.data(this, "selectable-item"),
                    aT = false,
                    aU = {}; if (!aS || aS.element === aQ.element[0]) { return }
                aU.left = aS.left + aQ.elementPos.left;
                aU.right = aS.right + aQ.elementPos.left;
                aU.top = aS.top + aQ.elementPos.top;
                aU.bottom = aS.bottom + aQ.elementPos.top; if (aM.tolerance === "touch") { aT = (!(aU.left > aK || aU.right < aL || aU.top > aN || aU.bottom < aP)) } else { if (aM.tolerance === "fit") { aT = (aU.left > aL && aU.right < aK && aU.top > aP && aU.bottom < aN) } } if (aT) { if (aS.selected) { aQ._removeClass(aS.$element, "ui-selected");
                        aS.selected = false } if (aS.unselecting) { aQ._removeClass(aS.$element, "ui-unselecting");
                        aS.unselecting = false } if (!aS.selecting) { aQ._addClass(aS.$element, "ui-selecting");
                        aS.selecting = true;
                        aQ._trigger("selecting", aR, { selecting: aS.element }) } } else { if (aS.selecting) { if ((aR.metaKey || aR.ctrlKey) && aS.startselected) { aQ._removeClass(aS.$element, "ui-selecting");
                            aS.selecting = false;
                            aQ._addClass(aS.$element, "ui-selected");
                            aS.selected = true } else { aQ._removeClass(aS.$element, "ui-selecting");
                            aS.selecting = false; if (aS.startselected) { aQ._addClass(aS.$element, "ui-unselecting");
                                aS.unselecting = true }
                            aQ._trigger("unselecting", aR, { unselecting: aS.element }) } } if (aS.selected) { if (!aR.metaKey && !aR.ctrlKey && !aS.startselected) { aQ._removeClass(aS.$element, "ui-selected");
                            aS.selected = false;
                            aQ._addClass(aS.$element, "ui-unselecting");
                            aS.unselecting = true;
                            aQ._trigger("unselecting", aR, { unselecting: aS.element }) } } } }); return false }, _mouseStop: function(aL) { var aK = this;
            this.dragged = false;
            ax(".ui-unselecting", this.element[0]).each(function() { var aM = ax.data(this, "selectable-item");
                aK._removeClass(aM.$element, "ui-unselecting");
                aM.unselecting = false;
                aM.startselected = false;
                aK._trigger("unselected", aL, { unselected: aM.element }) });
            ax(".ui-selecting", this.element[0]).each(function() { var aM = ax.data(this, "selectable-item");
                aK._removeClass(aM.$element, "ui-selecting")._addClass(aM.$element, "ui-selected");
                aM.selecting = false;
                aM.selected = true;
                aM.startselected = true;
                aK._trigger("selected", aL, { selected: aM.element }) });
            this._trigger("stop", aL);
            this.helper.remove(); return false } });
    /*!
     * jQuery UI Sortable 1.13.0
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */
    var aa = ax.widget("ui.sortable", ax.ui.mouse, { version: "1.13.0", widgetEventPrefix: "sort", ready: false, options: { appendTo: "parent", axis: false, connectWith: false, containment: false, cursor: "auto", cursorAt: false, dropOnEmpty: true, forcePlaceholderSize: false, forceHelperSize: false, grid: false, handle: false, helper: "original", items: "> *", opacity: false, placeholder: false, revert: false, scroll: true, scrollSensitivity: 20, scrollSpeed: 20, scope: "default", tolerance: "intersect", zIndex: 1000, activate: null, beforeStop: null, change: null, deactivate: null, out: null, over: null, receive: null, remove: null, sort: null, start: null, stop: null, update: null }, _isOverAxis: function(aL, aK, aM) { return (aL >= aK) && (aL < (aK + aM)) }, _isFloating: function(aK) { return (/left|right/).test(aK.css("float")) || (/inline|table-cell/).test(aK.css("display")) }, _create: function() { this.containerCache = {};
            this._addClass("ui-sortable");
            this.refresh();
            this.offset = this.element.offset();
            this._mouseInit();
            this._setHandleClassName();
            this.ready = true }, _setOption: function(aK, aL) { this._super(aK, aL); if (aK === "handle") { this._setHandleClassName() } }, _setHandleClassName: function() { var aK = this;
            this._removeClass(this.element.find(".ui-sortable-handle"), "ui-sortable-handle");
            ax.each(this.items, function() { aK._addClass(this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item, "ui-sortable-handle") }) }, _destroy: function() { this._mouseDestroy(); for (var aK = this.items.length - 1; aK >= 0; aK--) { this.items[aK].item.removeData(this.widgetName + "-item") } return this }, _mouseCapture: function(aM, aN) { var aK = null,
                aO = false,
                aL = this; if (this.reverting) { return false } if (this.options.disabled || this.options.type === "static") { return false }
            this._refreshItems(aM);
            ax(aM.target).parents().each(function() { if (ax.data(this, aL.widgetName + "-item") === aL) { aK = ax(this); return false } }); if (ax.data(aM.target, aL.widgetName + "-item") === aL) { aK = ax(aM.target) } if (!aK) { return false } if (this.options.handle && !aN) { ax(this.options.handle, aK).find("*").addBack().each(function() { if (this === aM.target) { aO = true } }); if (!aO) { return false } }
            this.currentItem = aK;
            this._removeCurrentsFromItems(); return true }, _mouseStart: function(aN, aO, aL) { var aM, aK, aP = this.options;
            this.currentContainer = this;
            this.refreshPositions();
            this.appendTo = ax(aP.appendTo !== "parent" ? aP.appendTo : this.currentItem.parent());
            this.helper = this._createHelper(aN);
            this._cacheHelperProportions();
            this._cacheMargins();
            this.offset = this.currentItem.offset();
            this.offset = { top: this.offset.top - this.margins.top, left: this.offset.left - this.margins.left };
            ax.extend(this.offset, { click: { left: aN.pageX - this.offset.left, top: aN.pageY - this.offset.top }, relative: this._getRelativeOffset() });
            this.helper.css("position", "absolute");
            this.cssPosition = this.helper.css("position"); if (aP.cursorAt) { this._adjustOffsetFromHelper(aP.cursorAt) }
            this.domPosition = { prev: this.currentItem.prev()[0], parent: this.currentItem.parent()[0] }; if (this.helper[0] !== this.currentItem[0]) { this.currentItem.hide() }
            this._createPlaceholder();
            this.scrollParent = this.placeholder.scrollParent();
            ax.extend(this.offset, { parent: this._getParentOffset() }); if (aP.containment) { this._setContainment() } if (aP.cursor && aP.cursor !== "auto") { aK = this.document.find("body");
                this.storedCursor = aK.css("cursor");
                aK.css("cursor", aP.cursor);
                this.storedStylesheet = ax("<style>*{ cursor: " + aP.cursor + " !important; }</style>").appendTo(aK) } if (aP.zIndex) { if (this.helper.css("zIndex")) { this._storedZIndex = this.helper.css("zIndex") }
                this.helper.css("zIndex", aP.zIndex) } if (aP.opacity) { if (this.helper.css("opacity")) { this._storedOpacity = this.helper.css("opacity") }
                this.helper.css("opacity", aP.opacity) } if (this.scrollParent[0] !== this.document[0] && this.scrollParent[0].tagName !== "HTML") { this.overflowOffset = this.scrollParent.offset() }
            this._trigger("start", aN, this._uiHash()); if (!this._preserveHelperProportions) { this._cacheHelperProportions() } if (!aL) { for (aM = this.containers.length - 1; aM >= 0; aM--) { this.containers[aM]._trigger("activate", aN, this._uiHash(this)) } } if (ax.ui.ddmanager) { ax.ui.ddmanager.current = this } if (ax.ui.ddmanager && !aP.dropBehaviour) { ax.ui.ddmanager.prepareOffsets(this, aN) }
            this.dragging = true;
            this._addClass(this.helper, "ui-sortable-helper"); if (!this.helper.parent().is(this.appendTo)) { this.helper.detach().appendTo(this.appendTo);
                this.offset.parent = this._getParentOffset() }
            this.position = this.originalPosition = this._generatePosition(aN);
            this.originalPageX = aN.pageX;
            this.originalPageY = aN.pageY;
            this.lastPositionAbs = this.positionAbs = this._convertPositionTo("absolute");
            this._mouseDrag(aN); return true }, _scroll: function(aL) { var aM = this.options,
                aK = false; if (this.scrollParent[0] !== this.document[0] && this.scrollParent[0].tagName !== "HTML") { if ((this.overflowOffset.top + this.scrollParent[0].offsetHeight) - aL.pageY < aM.scrollSensitivity) { this.scrollParent[0].scrollTop = aK = this.scrollParent[0].scrollTop + aM.scrollSpeed } else { if (aL.pageY - this.overflowOffset.top < aM.scrollSensitivity) { this.scrollParent[0].scrollTop = aK = this.scrollParent[0].scrollTop - aM.scrollSpeed } } if ((this.overflowOffset.left + this.scrollParent[0].offsetWidth) - aL.pageX < aM.scrollSensitivity) { this.scrollParent[0].scrollLeft = aK = this.scrollParent[0].scrollLeft + aM.scrollSpeed } else { if (aL.pageX - this.overflowOffset.left < aM.scrollSensitivity) { this.scrollParent[0].scrollLeft = aK = this.scrollParent[0].scrollLeft - aM.scrollSpeed } } } else { if (aL.pageY - this.document.scrollTop() < aM.scrollSensitivity) { aK = this.document.scrollTop(this.document.scrollTop() - aM.scrollSpeed) } else { if (this.window.height() - (aL.pageY - this.document.scrollTop()) < aM.scrollSensitivity) { aK = this.document.scrollTop(this.document.scrollTop() + aM.scrollSpeed) } } if (aL.pageX - this.document.scrollLeft() < aM.scrollSensitivity) { aK = this.document.scrollLeft(this.document.scrollLeft() - aM.scrollSpeed) } else { if (this.window.width() - (aL.pageX - this.document.scrollLeft()) < aM.scrollSensitivity) { aK = this.document.scrollLeft(this.document.scrollLeft() + aM.scrollSpeed) } } } return aK }, _mouseDrag: function(aN) { var aL, aM, aK, aP, aO = this.options;
            this.position = this._generatePosition(aN);
            this.positionAbs = this._convertPositionTo("absolute"); if (!this.options.axis || this.options.axis !== "y") { this.helper[0].style.left = this.position.left + "px" } if (!this.options.axis || this.options.axis !== "x") { this.helper[0].style.top = this.position.top + "px" }
            this._contactContainers(aN); if (this.innermostContainer !== null) { if (aO.scroll) { if (this._scroll(aN) !== false) { this._refreshItemPositions(true); if (ax.ui.ddmanager && !aO.dropBehaviour) { ax.ui.ddmanager.prepareOffsets(this, aN) } } }
                this.dragDirection = { vertical: this._getDragVerticalDirection(), horizontal: this._getDragHorizontalDirection() }; for (aL = this.items.length - 1; aL >= 0; aL--) { aM = this.items[aL];
                    aK = aM.item[0];
                    aP = this._intersectsWithPointer(aM); if (!aP) { continue } if (aM.instance !== this.currentContainer) { continue } if (aK !== this.currentItem[0] && this.placeholder[aP === 1 ? "next" : "prev"]()[0] !== aK && !ax.contains(this.placeholder[0], aK) && (this.options.type === "semi-dynamic" ? !ax.contains(this.element[0], aK) : true)) { this.direction = aP === 1 ? "down" : "up"; if (this.options.tolerance === "pointer" || this._intersectsWithSides(aM)) { this._rearrange(aN, aM) } else { break }
                        this._trigger("change", aN, this._uiHash()); break } } } if (ax.ui.ddmanager) { ax.ui.ddmanager.drag(this, aN) }
            this._trigger("sort", aN, this._uiHash());
            this.lastPositionAbs = this.positionAbs; return false }, _mouseStop: function(aM, aO) { if (!aM) { return } if (ax.ui.ddmanager && !this.options.dropBehaviour) { ax.ui.ddmanager.drop(this, aM) } if (this.options.revert) { var aL = this,
                    aP = this.placeholder.offset(),
                    aK = this.options.axis,
                    aN = {}; if (!aK || aK === "x") { aN.left = aP.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollLeft) } if (!aK || aK === "y") { aN.top = aP.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollTop) }
                this.reverting = true;
                ax(this.helper).animate(aN, parseInt(this.options.revert, 10) || 500, function() { aL._clear(aM) }) } else { this._clear(aM, aO) } return false }, cancel: function() { if (this.dragging) { this._mouseUp(new ax.Event("mouseup", { target: null })); if (this.options.helper === "original") { this.currentItem.css(this._storedCSS);
                    this._removeClass(this.currentItem, "ui-sortable-helper") } else { this.currentItem.show() } for (var aK = this.containers.length - 1; aK >= 0; aK--) { this.containers[aK]._trigger("deactivate", null, this._uiHash(this)); if (this.containers[aK].containerCache.over) { this.containers[aK]._trigger("out", null, this._uiHash(this));
                        this.containers[aK].containerCache.over = 0 } } } if (this.placeholder) { if (this.placeholder[0].parentNode) { this.placeholder[0].parentNode.removeChild(this.placeholder[0]) } if (this.options.helper !== "original" && this.helper && this.helper[0].parentNode) { this.helper.remove() }
                ax.extend(this, { helper: null, dragging: false, reverting: false, _noFinalSort: null }); if (this.domPosition.prev) { ax(this.domPosition.prev).after(this.currentItem) } else { ax(this.domPosition.parent).prepend(this.currentItem) } } return this }, serialize: function(aM) { var aK = this._getItemsAsjQuery(aM && aM.connected),
                aL = [];
            aM = aM || {};
            ax(aK).each(function() { var aN = (ax(aM.item || this).attr(aM.attribute || "id") || "").match(aM.expression || (/(.+)[\-=_](.+)/)); if (aN) { aL.push((aM.key || aN[1] + "[]") + "=" + (aM.key && aM.expression ? aN[1] : aN[2])) } }); if (!aL.length && aM.key) { aL.push(aM.key + "=") } return aL.join("&") }, toArray: function(aM) { var aK = this._getItemsAsjQuery(aM && aM.connected),
                aL = [];
            aM = aM || {};
            aK.each(function() { aL.push(ax(aM.item || this).attr(aM.attribute || "id") || "") }); return aL }, _intersectsWith: function(aV) { var aM = this.positionAbs.left,
                aL = aM + this.helperProportions.width,
                aT = this.positionAbs.top,
                aS = aT + this.helperProportions.height,
                aN = aV.left,
                aK = aN + aV.width,
                aW = aV.top,
                aR = aW + aV.height,
                aX = this.offset.click.top,
                aQ = this.offset.click.left,
                aP = (this.options.axis === "x") || ((aT + aX) > aW && (aT + aX) < aR),
                aU = (this.options.axis === "y") || ((aM + aQ) > aN && (aM + aQ) < aK),
                aO = aP && aU; if (this.options.tolerance === "pointer" || this.options.forcePointerForContainers || (this.options.tolerance !== "pointer" && this.helperProportions[this.floating ? "width" : "height"] > aV[this.floating ? "width" : "height"])) { return aO } else { return (aN < aM + (this.helperProportions.width / 2) && aL - (this.helperProportions.width / 2) < aK && aW < aT + (this.helperProportions.height / 2) && aS - (this.helperProportions.height / 2) < aR) } }, _intersectsWithPointer: function(aM) { var aL, aP, aN = (this.options.axis === "x") || this._isOverAxis(this.positionAbs.top + this.offset.click.top, aM.top, aM.height),
                aK = (this.options.axis === "y") || this._isOverAxis(this.positionAbs.left + this.offset.click.left, aM.left, aM.width),
                aO = aN && aK; if (!aO) { return false }
            aL = this.dragDirection.vertical;
            aP = this.dragDirection.horizontal; return this.floating ? ((aP === "right" || aL === "down") ? 2 : 1) : (aL && (aL === "down" ? 2 : 1)) }, _intersectsWithSides: function(aN) { var aL = this._isOverAxis(this.positionAbs.top + this.offset.click.top, aN.top + (aN.height / 2), aN.height),
                aM = this._isOverAxis(this.positionAbs.left + this.offset.click.left, aN.left + (aN.width / 2), aN.width),
                aK = this.dragDirection.vertical,
                aO = this.dragDirection.horizontal; if (this.floating && aO) { return ((aO === "right" && aM) || (aO === "left" && !aM)) } else { return aK && ((aK === "down" && aL) || (aK === "up" && !aL)) } }, _getDragVerticalDirection: function() { var aK = this.positionAbs.top - this.lastPositionAbs.top; return aK !== 0 && (aK > 0 ? "down" : "up") }, _getDragHorizontalDirection: function() { var aK = this.positionAbs.left - this.lastPositionAbs.left; return aK !== 0 && (aK > 0 ? "right" : "left") }, refresh: function(aK) { this._refreshItems(aK);
            this._setHandleClassName();
            this.refreshPositions(); return this }, _connectWith: function() { var aK = this.options; return aK.connectWith.constructor === String ? [aK.connectWith] : aK.connectWith }, _getItemsAsjQuery: function(aK) { var aM, aL, aR, aO, aP = [],
                aN = [],
                aQ = this._connectWith(); if (aQ && aK) { for (aM = aQ.length - 1; aM >= 0; aM--) { aR = ax(aQ[aM], this.document[0]); for (aL = aR.length - 1; aL >= 0; aL--) { aO = ax.data(aR[aL], this.widgetFullName); if (aO && aO !== this && !aO.options.disabled) { aN.push([typeof aO.options.items === "function" ? aO.options.items.call(aO.element) : ax(aO.options.items, aO.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), aO]) } } } }
            aN.push([typeof this.options.items === "function" ? this.options.items.call(this.element, null, { options: this.options, item: this.currentItem }) : ax(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]);

            function aS() { aP.push(this) } for (aM = aN.length - 1; aM >= 0; aM--) { aN[aM][0].each(aS) } return ax(aP) }, _removeCurrentsFromItems: function() { var aK = this.currentItem.find(":data(" + this.widgetName + "-item)");
            this.items = ax.grep(this.items, function(aM) { for (var aL = 0; aL < aK.length; aL++) { if (aK[aL] === aM.item[0]) { return false } } return true }) }, _refreshItems: function(aK) { this.items = [];
            this.containers = [this]; var aO, aM, aT, aP, aS, aL, aV, aU, aQ = this.items,
                aN = [
                    [typeof this.options.items === "function" ? this.options.items.call(this.element[0], aK, { item: this.currentItem }) : ax(this.options.items, this.element), this]
                ],
                aR = this._connectWith(); if (aR && this.ready) { for (aO = aR.length - 1; aO >= 0; aO--) { aT = ax(aR[aO], this.document[0]); for (aM = aT.length - 1; aM >= 0; aM--) { aP = ax.data(aT[aM], this.widgetFullName); if (aP && aP !== this && !aP.options.disabled) { aN.push([typeof aP.options.items === "function" ? aP.options.items.call(aP.element[0], aK, { item: this.currentItem }) : ax(aP.options.items, aP.element), aP]);
                            this.containers.push(aP) } } } } for (aO = aN.length - 1; aO >= 0; aO--) { aS = aN[aO][1];
                aL = aN[aO][0]; for (aM = 0, aU = aL.length; aM < aU; aM++) { aV = ax(aL[aM]);
                    aV.data(this.widgetName + "-item", aS);
                    aQ.push({ item: aV, instance: aS, width: 0, height: 0, left: 0, top: 0 }) } } }, _refreshItemPositions: function(aK) { var aM, aN, aL, aO; for (aM = this.items.length - 1; aM >= 0; aM--) { aN = this.items[aM]; if (this.currentContainer && aN.instance !== this.currentContainer && aN.item[0] !== this.currentItem[0]) { continue }
                aL = this.options.toleranceElement ? ax(this.options.toleranceElement, aN.item) : aN.item; if (!aK) { aN.width = aL.outerWidth();
                    aN.height = aL.outerHeight() }
                aO = aL.offset();
                aN.left = aO.left;
                aN.top = aO.top } }, refreshPositions: function(aK) { this.floating = this.items.length ? this.options.axis === "x" || this._isFloating(this.items[0].item) : false; if (this.innermostContainer !== null) { this._refreshItemPositions(aK) } var aL, aM; if (this.options.custom && this.options.custom.refreshContainers) { this.options.custom.refreshContainers.call(this) } else { for (aL = this.containers.length - 1; aL >= 0; aL--) { aM = this.containers[aL].element.offset();
                    this.containers[aL].containerCache.left = aM.left;
                    this.containers[aL].containerCache.top = aM.top;
                    this.containers[aL].containerCache.width = this.containers[aL].element.outerWidth();
                    this.containers[aL].containerCache.height = this.containers[aL].element.outerHeight() } } return this }, _createPlaceholder: function(aL) { aL = aL || this; var aK, aN, aM = aL.options; if (!aM.placeholder || aM.placeholder.constructor === String) { aK = aM.placeholder;
                aN = aL.currentItem[0].nodeName.toLowerCase();
                aM.placeholder = { element: function() { var aO = ax("<" + aN + ">", aL.document[0]);
                        aL._addClass(aO, "ui-sortable-placeholder", aK || aL.currentItem[0].className)._removeClass(aO, "ui-sortable-helper"); if (aN === "tbody") { aL._createTrPlaceholder(aL.currentItem.find("tr").eq(0), ax("<tr>", aL.document[0]).appendTo(aO)) } else { if (aN === "tr") { aL._createTrPlaceholder(aL.currentItem, aO) } else { if (aN === "img") { aO.attr("src", aL.currentItem.attr("src")) } } } if (!aK) { aO.css("visibility", "hidden") } return aO }, update: function(aO, aP) { if (aK && !aM.forcePlaceholderSize) { return } if (!aP.height() || (aM.forcePlaceholderSize && (aN === "tbody" || aN === "tr"))) { aP.height(aL.currentItem.innerHeight() - parseInt(aL.currentItem.css("paddingTop") || 0, 10) - parseInt(aL.currentItem.css("paddingBottom") || 0, 10)) } if (!aP.width()) { aP.width(aL.currentItem.innerWidth() - parseInt(aL.currentItem.css("paddingLeft") || 0, 10) - parseInt(aL.currentItem.css("paddingRight") || 0, 10)) } } } }
            aL.placeholder = ax(aM.placeholder.element.call(aL.element, aL.currentItem));
            aL.currentItem.after(aL.placeholder);
            aM.placeholder.update(aL, aL.placeholder) }, _createTrPlaceholder: function(aL, aK) { var aM = this;
            aL.children().each(function() { ax("<td>&#160;</td>", aM.document[0]).attr("colspan", ax(this).attr("colspan") || 1).appendTo(aK) }) }, _contactContainers: function(aK) { var aP, aN, aT, aQ, aR, aV, aW, aO, aS, aM, aL = null,
                aU = null; for (aP = this.containers.length - 1; aP >= 0; aP--) { if (ax.contains(this.currentItem[0], this.containers[aP].element[0])) { continue } if (this._intersectsWith(this.containers[aP].containerCache)) { if (aL && ax.contains(this.containers[aP].element[0], aL.element[0])) { continue }
                    aL = this.containers[aP];
                    aU = aP } else { if (this.containers[aP].containerCache.over) { this.containers[aP]._trigger("out", aK, this._uiHash(this));
                        this.containers[aP].containerCache.over = 0 } } }
            this.innermostContainer = aL; if (!aL) { return } if (this.containers.length === 1) { if (!this.containers[aU].containerCache.over) { this.containers[aU]._trigger("over", aK, this._uiHash(this));
                    this.containers[aU].containerCache.over = 1 } } else { aT = 10000;
                aQ = null;
                aS = aL.floating || this._isFloating(this.currentItem);
                aR = aS ? "left" : "top";
                aV = aS ? "width" : "height";
                aM = aS ? "pageX" : "pageY"; for (aN = this.items.length - 1; aN >= 0; aN--) { if (!ax.contains(this.containers[aU].element[0], this.items[aN].item[0])) { continue } if (this.items[aN].item[0] === this.currentItem[0]) { continue }
                    aW = this.items[aN].item.offset()[aR];
                    aO = false; if (aK[aM] - aW > this.items[aN][aV] / 2) { aO = true } if (Math.abs(aK[aM] - aW) < aT) { aT = Math.abs(aK[aM] - aW);
                        aQ = this.items[aN];
                        this.direction = aO ? "up" : "down" } } if (!aQ && !this.options.dropOnEmpty) { return } if (this.currentContainer === this.containers[aU]) { if (!this.currentContainer.containerCache.over) { this.containers[aU]._trigger("over", aK, this._uiHash());
                        this.currentContainer.containerCache.over = 1 } return } if (aQ) { this._rearrange(aK, aQ, null, true) } else { this._rearrange(aK, null, this.containers[aU].element, true) }
                this._trigger("change", aK, this._uiHash());
                this.containers[aU]._trigger("change", aK, this._uiHash(this));
                this.currentContainer = this.containers[aU];
                this.options.placeholder.update(this.currentContainer, this.placeholder);
                this.scrollParent = this.placeholder.scrollParent(); if (this.scrollParent[0] !== this.document[0] && this.scrollParent[0].tagName !== "HTML") { this.overflowOffset = this.scrollParent.offset() }
                this.containers[aU]._trigger("over", aK, this._uiHash(this));
                this.containers[aU].containerCache.over = 1 } }, _createHelper: function(aL) { var aM = this.options,
                aK = typeof aM.helper === "function" ? ax(aM.helper.apply(this.element[0], [aL, this.currentItem])) : (aM.helper === "clone" ? this.currentItem.clone() : this.currentItem); if (!aK.parents("body").length) { this.appendTo[0].appendChild(aK[0]) } if (aK[0] === this.currentItem[0]) { this._storedCSS = { width: this.currentItem[0].style.width, height: this.currentItem[0].style.height, position: this.currentItem.css("position"), top: this.currentItem.css("top"), left: this.currentItem.css("left") } } if (!aK[0].style.width || aM.forceHelperSize) { aK.width(this.currentItem.width()) } if (!aK[0].style.height || aM.forceHelperSize) { aK.height(this.currentItem.height()) } return aK }, _adjustOffsetFromHelper: function(aK) { if (typeof aK === "string") { aK = aK.split(" ") } if (Array.isArray(aK)) { aK = { left: +aK[0], top: +aK[1] || 0 } } if ("left" in aK) { this.offset.click.left = aK.left + this.margins.left } if ("right" in aK) { this.offset.click.left = this.helperProportions.width - aK.right + this.margins.left } if ("top" in aK) { this.offset.click.top = aK.top + this.margins.top } if ("bottom" in aK) { this.offset.click.top = this.helperProportions.height - aK.bottom + this.margins.top } }, _getParentOffset: function() { this.offsetParent = this.helper.offsetParent(); var aK = this.offsetParent.offset(); if (this.cssPosition === "absolute" && this.scrollParent[0] !== this.document[0] && ax.contains(this.scrollParent[0], this.offsetParent[0])) { aK.left += this.scrollParent.scrollLeft();
                aK.top += this.scrollParent.scrollTop() } if (this.offsetParent[0] === this.document[0].body || (this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() === "html" && ax.ui.ie)) { aK = { top: 0, left: 0 } } return { top: aK.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0), left: aK.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0) } }, _getRelativeOffset: function() { if (this.cssPosition === "relative") { var aK = this.currentItem.position(); return { top: aK.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(), left: aK.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft() } } else { return { top: 0, left: 0 } } }, _cacheMargins: function() { this.margins = { left: (parseInt(this.currentItem.css("marginLeft"), 10) || 0), top: (parseInt(this.currentItem.css("marginTop"), 10) || 0) } }, _cacheHelperProportions: function() { this.helperProportions = { width: this.helper.outerWidth(), height: this.helper.outerHeight() } }, _setContainment: function() { var aL, aN, aK, aM = this.options; if (aM.containment === "parent") { aM.containment = this.helper[0].parentNode } if (aM.containment === "document" || aM.containment === "window") { this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, aM.containment === "document" ? this.document.width() : this.window.width() - this.helperProportions.width - this.margins.left, (aM.containment === "document" ? (this.document.height() || document.body.parentNode.scrollHeight) : this.window.height() || this.document[0].body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top] } if (!(/^(document|window|parent)$/).test(aM.containment)) { aL = ax(aM.containment)[0];
                aN = ax(aM.containment).offset();
                aK = (ax(aL).css("overflow") !== "hidden");
                this.containment = [aN.left + (parseInt(ax(aL).css("borderLeftWidth"), 10) || 0) + (parseInt(ax(aL).css("paddingLeft"), 10) || 0) - this.margins.left, aN.top + (parseInt(ax(aL).css("borderTopWidth"), 10) || 0) + (parseInt(ax(aL).css("paddingTop"), 10) || 0) - this.margins.top, aN.left + (aK ? Math.max(aL.scrollWidth, aL.offsetWidth) : aL.offsetWidth) - (parseInt(ax(aL).css("borderLeftWidth"), 10) || 0) - (parseInt(ax(aL).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, aN.top + (aK ? Math.max(aL.scrollHeight, aL.offsetHeight) : aL.offsetHeight) - (parseInt(ax(aL).css("borderTopWidth"), 10) || 0) - (parseInt(ax(aL).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top] } }, _convertPositionTo: function(aM, aO) { if (!aO) { aO = this.position } var aL = aM === "absolute" ? 1 : -1,
                aK = this.cssPosition === "absolute" && !(this.scrollParent[0] !== this.document[0] && ax.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent,
                aN = (/(html|body)/i).test(aK[0].tagName); return { top: (aO.top + this.offset.relative.top * aL + this.offset.parent.top * aL - ((this.cssPosition === "fixed" ? -this.scrollParent.scrollTop() : (aN ? 0 : aK.scrollTop())) * aL)), left: (aO.left + this.offset.relative.left * aL + this.offset.parent.left * aL - ((this.cssPosition === "fixed" ? -this.scrollParent.scrollLeft() : aN ? 0 : aK.scrollLeft()) * aL)) } }, _generatePosition: function(aN) { var aP, aO, aQ = this.options,
                aM = aN.pageX,
                aL = aN.pageY,
                aK = this.cssPosition === "absolute" && !(this.scrollParent[0] !== this.document[0] && ax.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent,
                aR = (/(html|body)/i).test(aK[0].tagName); if (this.cssPosition === "relative" && !(this.scrollParent[0] !== this.document[0] && this.scrollParent[0] !== this.offsetParent[0])) { this.offset.relative = this._getRelativeOffset() } if (this.originalPosition) { if (this.containment) { if (aN.pageX - this.offset.click.left < this.containment[0]) { aM = this.containment[0] + this.offset.click.left } if (aN.pageY - this.offset.click.top < this.containment[1]) { aL = this.containment[1] + this.offset.click.top } if (aN.pageX - this.offset.click.left > this.containment[2]) { aM = this.containment[2] + this.offset.click.left } if (aN.pageY - this.offset.click.top > this.containment[3]) { aL = this.containment[3] + this.offset.click.top } } if (aQ.grid) { aP = this.originalPageY + Math.round((aL - this.originalPageY) / aQ.grid[1]) * aQ.grid[1];
                    aL = this.containment ? ((aP - this.offset.click.top >= this.containment[1] && aP - this.offset.click.top <= this.containment[3]) ? aP : ((aP - this.offset.click.top >= this.containment[1]) ? aP - aQ.grid[1] : aP + aQ.grid[1])) : aP;
                    aO = this.originalPageX + Math.round((aM - this.originalPageX) / aQ.grid[0]) * aQ.grid[0];
                    aM = this.containment ? ((aO - this.offset.click.left >= this.containment[0] && aO - this.offset.click.left <= this.containment[2]) ? aO : ((aO - this.offset.click.left >= this.containment[0]) ? aO - aQ.grid[0] : aO + aQ.grid[0])) : aO } } return { top: (aL - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ((this.cssPosition === "fixed" ? -this.scrollParent.scrollTop() : (aR ? 0 : aK.scrollTop())))), left: (aM - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ((this.cssPosition === "fixed" ? -this.scrollParent.scrollLeft() : aR ? 0 : aK.scrollLeft()))) } }, _rearrange: function(aO, aN, aL, aM) { if (aL) { aL[0].appendChild(this.placeholder[0]) } else { aN.item[0].parentNode.insertBefore(this.placeholder[0], (this.direction === "down" ? aN.item[0] : aN.item[0].nextSibling)) }
            this.counter = this.counter ? ++this.counter : 1; var aK = this.counter;
            this._delay(function() { if (aK === this.counter) { this.refreshPositions(!aM) } }) }, _clear: function(aL, aN) { this.reverting = false; var aK, aO = []; if (!this._noFinalSort && this.currentItem.parent().length) { this.placeholder.before(this.currentItem) }
            this._noFinalSort = null; if (this.helper[0] === this.currentItem[0]) { for (aK in this._storedCSS) { if (this._storedCSS[aK] === "auto" || this._storedCSS[aK] === "static") { this._storedCSS[aK] = "" } }
                this.currentItem.css(this._storedCSS);
                this._removeClass(this.currentItem, "ui-sortable-helper") } else { this.currentItem.show() } if (this.fromOutside && !aN) { aO.push(function(aP) { this._trigger("receive", aP, this._uiHash(this.fromOutside)) }) } if ((this.fromOutside || this.domPosition.prev !== this.currentItem.prev().not(".ui-sortable-helper")[0] || this.domPosition.parent !== this.currentItem.parent()[0]) && !aN) { aO.push(function(aP) { this._trigger("update", aP, this._uiHash()) }) } if (this !== this.currentContainer) { if (!aN) { aO.push(function(aP) { this._trigger("remove", aP, this._uiHash()) });
                    aO.push((function(aP) { return function(aQ) { aP._trigger("receive", aQ, this._uiHash(this)) } }).call(this, this.currentContainer));
                    aO.push((function(aP) { return function(aQ) { aP._trigger("update", aQ, this._uiHash(this)) } }).call(this, this.currentContainer)) } }

            function aM(aR, aP, aQ) { return function(aS) { aQ._trigger(aR, aS, aP._uiHash(aP)) } } for (aK = this.containers.length - 1; aK >= 0; aK--) { if (!aN) { aO.push(aM("deactivate", this, this.containers[aK])) } if (this.containers[aK].containerCache.over) { aO.push(aM("out", this, this.containers[aK]));
                    this.containers[aK].containerCache.over = 0 } } if (this.storedCursor) { this.document.find("body").css("cursor", this.storedCursor);
                this.storedStylesheet.remove() } if (this._storedOpacity) { this.helper.css("opacity", this._storedOpacity) } if (this._storedZIndex) { this.helper.css("zIndex", this._storedZIndex === "auto" ? "" : this._storedZIndex) }
            this.dragging = false; if (!aN) { this._trigger("beforeStop", aL, this._uiHash()) }
            this.placeholder[0].parentNode.removeChild(this.placeholder[0]); if (!this.cancelHelperRemoval) { if (this.helper[0] !== this.currentItem[0]) { this.helper.remove() }
                this.helper = null } if (!aN) { for (aK = 0; aK < aO.length; aK++) { aO[aK].call(this, aL) }
                this._trigger("stop", aL, this._uiHash()) }
            this.fromOutside = false; return !this.cancelHelperRemoval }, _trigger: function() { if (ax.Widget.prototype._trigger.apply(this, arguments) === false) { this.cancel() } }, _uiHash: function(aK) { var aL = aK || this; return { helper: aL.helper, placeholder: aL.placeholder || ax([]), position: aL.position, originalPosition: aL.originalPosition, offset: aL.positionAbs, item: aL.currentItem, sender: aK ? aK.element : null } } });
    /*!
     * jQuery UI Accordion 1.13.0
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */
    var d = ax.widget("ui.accordion", { version: "1.13.0", options: { active: 0, animate: {}, classes: { "ui-accordion-header": "ui-corner-top", "ui-accordion-header-collapsed": "ui-corner-all", "ui-accordion-content": "ui-corner-bottom" }, collapsible: false, event: "click", header: function(aK) { return aK.find("> li > :first-child").add(aK.find("> :not(li)").even()) }, heightStyle: "auto", icons: { activeHeader: "ui-icon-triangle-1-s", header: "ui-icon-triangle-1-e" }, activate: null, beforeActivate: null }, hideProps: { borderTopWidth: "hide", borderBottomWidth: "hide", paddingTop: "hide", paddingBottom: "hide", height: "hide" }, showProps: { borderTopWidth: "show", borderBottomWidth: "show", paddingTop: "show", paddingBottom: "show", height: "show" }, _create: function() { var aK = this.options;
            this.prevShow = this.prevHide = ax();
            this._addClass("ui-accordion", "ui-widget ui-helper-reset");
            this.element.attr("role", "tablist"); if (!aK.collapsible && (aK.active === false || aK.active == null)) { aK.active = 0 }
            this._processPanels(); if (aK.active < 0) { aK.active += this.headers.length }
            this._refresh() }, _getCreateEventData: function() { return { header: this.active, panel: !this.active.length ? ax() : this.active.next() } }, _createIcons: function() { var aM, aL, aK = this.options.icons; if (aK) { aM = ax("<span>");
                this._addClass(aM, "ui-accordion-header-icon", "ui-icon " + aK.header);
                aM.prependTo(this.headers);
                aL = this.active.children(".ui-accordion-header-icon");
                this._removeClass(aL, aK.header)._addClass(aL, null, aK.activeHeader)._addClass(this.headers, "ui-accordion-icons") } }, _destroyIcons: function() { this._removeClass(this.headers, "ui-accordion-icons");
            this.headers.children(".ui-accordion-header-icon").remove() }, _destroy: function() { var aK;
            this.element.removeAttr("role");
            this.headers.removeAttr("role aria-expanded aria-selected aria-controls tabIndex").removeUniqueId();
            this._destroyIcons();
            aK = this.headers.next().css("display", "").removeAttr("role aria-hidden aria-labelledby").removeUniqueId(); if (this.options.heightStyle !== "content") { aK.css("height", "") } }, _setOption: function(aK, aL) { if (aK === "active") { this._activate(aL); return } if (aK === "event") { if (this.options.event) { this._off(this.headers, this.options.event) }
                this._setupEvents(aL) }
            this._super(aK, aL); if (aK === "collapsible" && !aL && this.options.active === false) { this._activate(0) } if (aK === "icons") { this._destroyIcons(); if (aL) { this._createIcons() } } }, _setOptionDisabled: function(aK) { this._super(aK);
            this.element.attr("aria-disabled", aK);
            this._toggleClass(null, "ui-state-disabled", !!aK);
            this._toggleClass(this.headers.add(this.headers.next()), null, "ui-state-disabled", !!aK) }, _keydown: function(aN) { if (aN.altKey || aN.ctrlKey) { return } var aO = ax.ui.keyCode,
                aM = this.headers.length,
                aK = this.headers.index(aN.target),
                aL = false; switch (aN.keyCode) {
                case aO.RIGHT:
                case aO.DOWN:
                    aL = this.headers[(aK + 1) % aM]; break;
                case aO.LEFT:
                case aO.UP:
                    aL = this.headers[(aK - 1 + aM) % aM]; break;
                case aO.SPACE:
                case aO.ENTER:
                    this._eventHandler(aN); break;
                case aO.HOME:
                    aL = this.headers[0]; break;
                case aO.END:
                    aL = this.headers[aM - 1]; break } if (aL) { ax(aN.target).attr("tabIndex", -1);
                ax(aL).attr("tabIndex", 0);
                ax(aL).trigger("focus");
                aN.preventDefault() } }, _panelKeyDown: function(aK) { if (aK.keyCode === ax.ui.keyCode.UP && aK.ctrlKey) { ax(aK.currentTarget).prev().trigger("focus") } }, refresh: function() { var aK = this.options;
            this._processPanels(); if ((aK.active === false && aK.collapsible === true) || !this.headers.length) { aK.active = false;
                this.active = ax() } else { if (aK.active === false) { this._activate(0) } else { if (this.active.length && !ax.contains(this.element[0], this.active[0])) { if (this.headers.length === this.headers.find(".ui-state-disabled").length) { aK.active = false;
                            this.active = ax() } else { this._activate(Math.max(0, aK.active - 1)) } } else { aK.active = this.headers.index(this.active) } } }
            this._destroyIcons();
            this._refresh() }, _processPanels: function() { var aL = this.headers,
                aK = this.panels; if (typeof this.options.header === "function") { this.headers = this.options.header(this.element) } else { this.headers = this.element.find(this.options.header) }
            this._addClass(this.headers, "ui-accordion-header ui-accordion-header-collapsed", "ui-state-default");
            this.panels = this.headers.next().filter(":not(.ui-accordion-content-active)").hide();
            this._addClass(this.panels, "ui-accordion-content", "ui-helper-reset ui-widget-content"); if (aK) { this._off(aL.not(this.headers));
                this._off(aK.not(this.panels)) } }, _refresh: function() { var aN, aL = this.options,
                aK = aL.heightStyle,
                aM = this.element.parent();
            this.active = this._findActive(aL.active);
            this._addClass(this.active, "ui-accordion-header-active", "ui-state-active")._removeClass(this.active, "ui-accordion-header-collapsed");
            this._addClass(this.active.next(), "ui-accordion-content-active");
            this.active.next().show();
            this.headers.attr("role", "tab").each(function() { var aR = ax(this),
                    aQ = aR.uniqueId().attr("id"),
                    aO = aR.next(),
                    aP = aO.uniqueId().attr("id");
                aR.attr("aria-controls", aP);
                aO.attr("aria-labelledby", aQ) }).next().attr("role", "tabpanel");
            this.headers.not(this.active).attr({ "aria-selected": "false", "aria-expanded": "false", tabIndex: -1 }).next().attr({ "aria-hidden": "true" }).hide(); if (!this.active.length) { this.headers.eq(0).attr("tabIndex", 0) } else { this.active.attr({ "aria-selected": "true", "aria-expanded": "true", tabIndex: 0 }).next().attr({ "aria-hidden": "false" }) }
            this._createIcons();
            this._setupEvents(aL.event); if (aK === "fill") { aN = aM.height();
                this.element.siblings(":visible").each(function() { var aP = ax(this),
                        aO = aP.css("position"); if (aO === "absolute" || aO === "fixed") { return }
                    aN -= aP.outerHeight(true) });
                this.headers.each(function() { aN -= ax(this).outerHeight(true) });
                this.headers.next().each(function() { ax(this).height(Math.max(0, aN - ax(this).innerHeight() + ax(this).height())) }).css("overflow", "auto") } else { if (aK === "auto") { aN = 0;
                    this.headers.next().each(function() { var aO = ax(this).is(":visible"); if (!aO) { ax(this).show() }
                        aN = Math.max(aN, ax(this).css("height", "").height()); if (!aO) { ax(this).hide() } }).height(aN) } } }, _activate: function(aK) { var aL = this._findActive(aK)[0]; if (aL === this.active[0]) { return }
            aL = aL || this.active[0];
            this._eventHandler({ target: aL, currentTarget: aL, preventDefault: ax.noop }) }, _findActive: function(aK) { return typeof aK === "number" ? this.headers.eq(aK) : ax() }, _setupEvents: function(aL) { var aK = { keydown: "_keydown" }; if (aL) { ax.each(aL.split(" "), function(aN, aM) { aK[aM] = "_eventHandler" }) }
            this._off(this.headers.add(this.headers.next()));
            this._on(this.headers, aK);
            this._on(this.headers.next(), { keydown: "_panelKeyDown" });
            this._hoverable(this.headers);
            this._focusable(this.headers) }, _eventHandler: function(aL) { var aM, aN, aU = this.options,
                aP = this.active,
                aQ = ax(aL.currentTarget),
                aS = aQ[0] === aP[0],
                aO = aS && aU.collapsible,
                aK = aO ? ax() : aQ.next(),
                aR = aP.next(),
                aT = { oldHeader: aP, oldPanel: aR, newHeader: aO ? ax() : aQ, newPanel: aK };
            aL.preventDefault(); if ((aS && !aU.collapsible) || (this._trigger("beforeActivate", aL, aT) === false)) { return }
            aU.active = aO ? false : this.headers.index(aQ);
            this.active = aS ? ax() : aQ;
            this._toggle(aT);
            this._removeClass(aP, "ui-accordion-header-active", "ui-state-active"); if (aU.icons) { aM = aP.children(".ui-accordion-header-icon");
                this._removeClass(aM, null, aU.icons.activeHeader)._addClass(aM, null, aU.icons.header) } if (!aS) { this._removeClass(aQ, "ui-accordion-header-collapsed")._addClass(aQ, "ui-accordion-header-active", "ui-state-active"); if (aU.icons) { aN = aQ.children(".ui-accordion-header-icon");
                    this._removeClass(aN, null, aU.icons.header)._addClass(aN, null, aU.icons.activeHeader) }
                this._addClass(aQ.next(), "ui-accordion-content-active") } }, _toggle: function(aM) { var aK = aM.newPanel,
                aL = this.prevShow.length ? this.prevShow : aM.oldPanel;
            this.prevShow.add(this.prevHide).stop(true, true);
            this.prevShow = aK;
            this.prevHide = aL; if (this.options.animate) { this._animate(aK, aL, aM) } else { aL.hide();
                aK.show();
                this._toggleComplete(aM) }
            aL.attr({ "aria-hidden": "true" });
            aL.prev().attr({ "aria-selected": "false", "aria-expanded": "false" }); if (aK.length && aL.length) { aL.prev().attr({ tabIndex: -1, "aria-expanded": "false" }) } else { if (aK.length) { this.headers.filter(function() { return parseInt(ax(this).attr("tabIndex"), 10) === 0 }).attr("tabIndex", -1) } }
            aK.attr("aria-hidden", "false").prev().attr({ "aria-selected": "true", "aria-expanded": "true", tabIndex: 0 }) }, _animate: function(aK, aT, aP) { var aS, aR, aO, aQ = this,
                aU = 0,
                aN = aK.css("box-sizing"),
                aV = aK.length && (!aT.length || (aK.index() < aT.index())),
                aM = this.options.animate || {},
                aW = aV && aM.down || aM,
                aL = function() { aQ._toggleComplete(aP) }; if (typeof aW === "number") { aO = aW } if (typeof aW === "string") { aR = aW }
            aR = aR || aW.easing || aM.easing;
            aO = aO || aW.duration || aM.duration; if (!aT.length) { return aK.animate(this.showProps, aO, aR, aL) } if (!aK.length) { return aT.animate(this.hideProps, aO, aR, aL) }
            aS = aK.show().outerHeight();
            aT.animate(this.hideProps, { duration: aO, easing: aR, step: function(aX, aY) { aY.now = Math.round(aX) } });
            aK.hide().animate(this.showProps, { duration: aO, easing: aR, complete: aL, step: function(aX, aY) { aY.now = Math.round(aX); if (aY.prop !== "height") { if (aN === "content-box") { aU += aY.now } } else { if (aQ.options.heightStyle !== "content") { aY.now = Math.round(aS - aT.outerHeight() - aU);
                            aU = 0 } } } }) }, _toggleComplete: function(aM) { var aK = aM.oldPanel,
                aL = aK.prev();
            this._removeClass(aK, "ui-accordion-content-active");
            this._removeClass(aL, "ui-accordion-header-active")._addClass(aL, "ui-accordion-header-collapsed"); if (aK.length) { aK.parent()[0].className = aK.parent()[0].className }
            this._trigger("activate", null, aM) } });
    /*!
     * jQuery UI Menu 1.13.0
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */
    var r = ax.widget("ui.menu", { version: "1.13.0", defaultElement: "<ul>", delay: 300, options: { icons: { submenu: "ui-icon-caret-1-e" }, items: "> *", menus: "ul", position: { my: "left top", at: "right top" }, role: "menu", blur: null, focus: null, select: null }, _create: function() { this.activeMenu = this.element;
            this.mouseHandled = false;
            this.lastMousePosition = { x: null, y: null };
            this.element.uniqueId().attr({ role: this.options.role, tabIndex: 0 });
            this._addClass("ui-menu", "ui-widget ui-widget-content");
            this._on({ "mousedown .ui-menu-item": function(aK) { aK.preventDefault();
                    this._activateItem(aK) }, "click .ui-menu-item": function(aK) { var aM = ax(aK.target); var aL = ax(ax.ui.safeActiveElement(this.document[0])); if (!this.mouseHandled && aM.not(".ui-state-disabled").length) { this.select(aK); if (!aK.isPropagationStopped()) { this.mouseHandled = true } if (aM.has(".ui-menu").length) { this.expand(aK) } else { if (!this.element.is(":focus") && aL.closest(".ui-menu").length) { this.element.trigger("focus", [true]); if (this.active && this.active.parents(".ui-menu").length === 1) { clearTimeout(this.timer) } } } } }, "mouseenter .ui-menu-item": "_activateItem", "mousemove .ui-menu-item": "_activateItem", mouseleave: "collapseAll", "mouseleave .ui-menu": "collapseAll", focus: function(aM, aK) { var aL = this.active || this._menuItems().first(); if (!aK) { this.focus(aM, aL) } }, blur: function(aK) { this._delay(function() { var aL = !ax.contains(this.element[0], ax.ui.safeActiveElement(this.document[0])); if (aL) { this.collapseAll(aK) } }) }, keydown: "_keydown" });
            this.refresh();
            this._on(this.document, { click: function(aK) { if (this._closeOnDocumentClick(aK)) { this.collapseAll(aK, true) }
                    this.mouseHandled = false } }) }, _activateItem: function(aK) { if (this.previousFilter) { return } if (aK.clientX === this.lastMousePosition.x && aK.clientY === this.lastMousePosition.y) { return }
            this.lastMousePosition = { x: aK.clientX, y: aK.clientY }; var aL = ax(aK.target).closest(".ui-menu-item"),
                aM = ax(aK.currentTarget); if (aL[0] !== aM[0]) { return } if (aM.is(".ui-state-active")) { return }
            this._removeClass(aM.siblings().children(".ui-state-active"), null, "ui-state-active");
            this.focus(aK, aM) }, _destroy: function() { var aL = this.element.find(".ui-menu-item").removeAttr("role aria-disabled"),
                aK = aL.children(".ui-menu-item-wrapper").removeUniqueId().removeAttr("tabIndex role aria-haspopup");
            this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeAttr("role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex").removeUniqueId().show();
            aK.children().each(function() { var aM = ax(this); if (aM.data("ui-menu-submenu-caret")) { aM.remove() } }) }, _keydown: function(aO) { var aL, aN, aP, aM, aK = true; switch (aO.keyCode) {
                case ax.ui.keyCode.PAGE_UP:
                    this.previousPage(aO); break;
                case ax.ui.keyCode.PAGE_DOWN:
                    this.nextPage(aO); break;
                case ax.ui.keyCode.HOME:
                    this._move("first", "first", aO); break;
                case ax.ui.keyCode.END:
                    this._move("last", "last", aO); break;
                case ax.ui.keyCode.UP:
                    this.previous(aO); break;
                case ax.ui.keyCode.DOWN:
                    this.next(aO); break;
                case ax.ui.keyCode.LEFT:
                    this.collapse(aO); break;
                case ax.ui.keyCode.RIGHT:
                    if (this.active && !this.active.is(".ui-state-disabled")) { this.expand(aO) } break;
                case ax.ui.keyCode.ENTER:
                case ax.ui.keyCode.SPACE:
                    this._activate(aO); break;
                case ax.ui.keyCode.ESCAPE:
                    this.collapse(aO); break;
                default:
                    aK = false;
                    aN = this.previousFilter || "";
                    aM = false;
                    aP = aO.keyCode >= 96 && aO.keyCode <= 105 ? (aO.keyCode - 96).toString() : String.fromCharCode(aO.keyCode);
                    clearTimeout(this.filterTimer); if (aP === aN) { aM = true } else { aP = aN + aP }
                    aL = this._filterMenuItems(aP);
                    aL = aM && aL.index(this.active.next()) !== -1 ? this.active.nextAll(".ui-menu-item") : aL; if (!aL.length) { aP = String.fromCharCode(aO.keyCode);
                        aL = this._filterMenuItems(aP) } if (aL.length) { this.focus(aO, aL);
                        this.previousFilter = aP;
                        this.filterTimer = this._delay(function() { delete this.previousFilter }, 1000) } else { delete this.previousFilter } } if (aK) { aO.preventDefault() } }, _activate: function(aK) { if (this.active && !this.active.is(".ui-state-disabled")) { if (this.active.children("[aria-haspopup='true']").length) { this.expand(aK) } else { this.select(aK) } } }, refresh: function() { var aR, aM, aP, aN, aK, aQ = this,
                aO = this.options.icons.submenu,
                aL = this.element.find(this.options.menus);
            this._toggleClass("ui-menu-icons", null, !!this.element.find(".ui-icon").length);
            aP = aL.filter(":not(.ui-menu)").hide().attr({ role: this.options.role, "aria-hidden": "true", "aria-expanded": "false" }).each(function() { var aU = ax(this),
                    aS = aU.prev(),
                    aT = ax("<span>").data("ui-menu-submenu-caret", true);
                aQ._addClass(aT, "ui-menu-icon", "ui-icon " + aO);
                aS.attr("aria-haspopup", "true").prepend(aT);
                aU.attr("aria-labelledby", aS.attr("id")) });
            this._addClass(aP, "ui-menu", "ui-widget ui-widget-content ui-front");
            aR = aL.add(this.element);
            aM = aR.find(this.options.items);
            aM.not(".ui-menu-item").each(function() { var aS = ax(this); if (aQ._isDivider(aS)) { aQ._addClass(aS, "ui-menu-divider", "ui-widget-content") } });
            aN = aM.not(".ui-menu-item, .ui-menu-divider");
            aK = aN.children().not(".ui-menu").uniqueId().attr({ tabIndex: -1, role: this._itemRole() });
            this._addClass(aN, "ui-menu-item")._addClass(aK, "ui-menu-item-wrapper");
            aM.filter(".ui-state-disabled").attr("aria-disabled", "true"); if (this.active && !ax.contains(this.element[0], this.active[0])) { this.blur() } }, _itemRole: function() { return { menu: "menuitem", listbox: "option" }[this.options.role] }, _setOption: function(aL, aM) { if (aL === "icons") { var aK = this.element.find(".ui-menu-icon");
                this._removeClass(aK, null, this.options.icons.submenu)._addClass(aK, null, aM.submenu) }
            this._super(aL, aM) }, _setOptionDisabled: function(aK) { this._super(aK);
            this.element.attr("aria-disabled", String(aK));
            this._toggleClass(null, "ui-state-disabled", !!aK) }, focus: function(aM, aL) { var aO, aN, aK;
            this.blur(aM, aM && aM.type === "focus");
            this._scrollIntoView(aL);
            this.active = aL.first();
            aN = this.active.children(".ui-menu-item-wrapper");
            this._addClass(aN, null, "ui-state-active"); if (this.options.role) { this.element.attr("aria-activedescendant", aN.attr("id")) }
            aK = this.active.parent().closest(".ui-menu-item").children(".ui-menu-item-wrapper");
            this._addClass(aK, null, "ui-state-active"); if (aM && aM.type === "keydown") { this._close() } else { this.timer = this._delay(function() { this._close() }, this.delay) }
            aO = aL.children(".ui-menu"); if (aO.length && aM && (/^mouse/.test(aM.type))) { this._startOpening(aO) }
            this.activeMenu = aL.parent();
            this._trigger("focus", aM, { item: aL }) }, _scrollIntoView: function(aN) { var aQ, aM, aO, aK, aL, aP; if (this._hasScroll()) { aQ = parseFloat(ax.css(this.activeMenu[0], "borderTopWidth")) || 0;
                aM = parseFloat(ax.css(this.activeMenu[0], "paddingTop")) || 0;
                aO = aN.offset().top - this.activeMenu.offset().top - aQ - aM;
                aK = this.activeMenu.scrollTop();
                aL = this.activeMenu.height();
                aP = aN.outerHeight(); if (aO < 0) { this.activeMenu.scrollTop(aK + aO) } else { if (aO + aP > aL) { this.activeMenu.scrollTop(aK + aO - aL + aP) } } } }, blur: function(aL, aK) { if (!aK) { clearTimeout(this.timer) } if (!this.active) { return }
            this._removeClass(this.active.children(".ui-menu-item-wrapper"), null, "ui-state-active");
            this._trigger("blur", aL, { item: this.active });
            this.active = null }, _startOpening: function(aK) { clearTimeout(this.timer); if (aK.attr("aria-hidden") !== "true") { return }
            this.timer = this._delay(function() { this._close();
                this._open(aK) }, this.delay) }, _open: function(aL) { var aK = ax.extend({ of: this.active }, this.options.position);
            clearTimeout(this.timer);
            this.element.find(".ui-menu").not(aL.parents(".ui-menu")).hide().attr("aria-hidden", "true");
            aL.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(aK) }, collapseAll: function(aL, aK) { clearTimeout(this.timer);
            this.timer = this._delay(function() { var aM = aK ? this.element : ax(aL && aL.target).closest(this.element.find(".ui-menu")); if (!aM.length) { aM = this.element }
                this._close(aM);
                this.blur(aL);
                this._removeClass(aM.find(".ui-state-active"), null, "ui-state-active");
                this.activeMenu = aM }, aK ? 0 : this.delay) }, _close: function(aK) { if (!aK) { aK = this.active ? this.active.parent() : this.element }
            aK.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false") }, _closeOnDocumentClick: function(aK) { return !ax(aK.target).closest(".ui-menu").length }, _isDivider: function(aK) { return !/[^\-\u2014\u2013\s]/.test(aK.text()) }, collapse: function(aL) { var aK = this.active && this.active.parent().closest(".ui-menu-item", this.element); if (aK && aK.length) { this._close();
                this.focus(aL, aK) } }, expand: function(aL) { var aK = this.active && this._menuItems(this.active.children(".ui-menu")).first(); if (aK && aK.length) { this._open(aK.parent());
                this._delay(function() { this.focus(aL, aK) }) } }, next: function(aK) { this._move("next", "first", aK) }, previous: function(aK) { this._move("prev", "last", aK) }, isFirstItem: function() { return this.active && !this.active.prevAll(".ui-menu-item").length }, isLastItem: function() { return this.active && !this.active.nextAll(".ui-menu-item").length }, _menuItems: function(aK) { return (aK || this.element).find(this.options.items).filter(".ui-menu-item") }, _move: function(aN, aL, aM) { var aK; if (this.active) { if (aN === "first" || aN === "last") { aK = this.active[aN === "first" ? "prevAll" : "nextAll"](".ui-menu-item").last() } else { aK = this.active[aN + "All"](".ui-menu-item").first() } } if (!aK || !aK.length || !this.active) { aK = this._menuItems(this.activeMenu)[aL]() }
            this.focus(aM, aK) }, nextPage: function(aM) { var aL, aN, aK; if (!this.active) { this.next(aM); return } if (this.isLastItem()) { return } if (this._hasScroll()) { aN = this.active.offset().top;
                aK = this.element.innerHeight(); if (ax.fn.jquery.indexOf("3.2.") === 0) { aK += this.element[0].offsetHeight - this.element.outerHeight() }
                this.active.nextAll(".ui-menu-item").each(function() { aL = ax(this); return aL.offset().top - aN - aK < 0 });
                this.focus(aM, aL) } else { this.focus(aM, this._menuItems(this.activeMenu)[!this.active ? "first" : "last"]()) } }, previousPage: function(aM) { var aL, aN, aK; if (!this.active) { this.next(aM); return } if (this.isFirstItem()) { return } if (this._hasScroll()) { aN = this.active.offset().top;
                aK = this.element.innerHeight(); if (ax.fn.jquery.indexOf("3.2.") === 0) { aK += this.element[0].offsetHeight - this.element.outerHeight() }
                this.active.prevAll(".ui-menu-item").each(function() { aL = ax(this); return aL.offset().top - aN + aK > 0 });
                this.focus(aM, aL) } else { this.focus(aM, this._menuItems(this.activeMenu).first()) } }, _hasScroll: function() { return this.element.outerHeight() < this.element.prop("scrollHeight") }, select: function(aK) { this.active = this.active || ax(aK.target).closest(".ui-menu-item"); var aL = { item: this.active }; if (!this.active.has(".ui-menu").length) { this.collapseAll(aK, true) }
            this._trigger("select", aK, aL) }, _filterMenuItems: function(aM) { var aK = aM.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"),
                aL = new RegExp("^" + aK, "i"); return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function() { return aL.test(String.prototype.trim.call(ax(this).children(".ui-menu-item-wrapper").text())) }) } });
    /*!
     * jQuery UI Autocomplete 1.13.0
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */
    ax.widget("ui.autocomplete", { version: "1.13.0", defaultElement: "<input>", options: { appendTo: null, autoFocus: false, delay: 300, minLength: 1, position: { my: "left top", at: "left bottom", collision: "none" }, source: null, change: null, close: null, focus: null, open: null, response: null, search: null, select: null }, requestIndex: 0, pending: 0, _create: function() { var aM, aK, aN, aP = this.element[0].nodeName.toLowerCase(),
                aO = aP === "textarea",
                aL = aP === "input";
            this.isMultiLine = aO || !aL && this._isContentEditable(this.element);
            this.valueMethod = this.element[aO || aL ? "val" : "text"];
            this.isNewMenu = true;
            this._addClass("ui-autocomplete-input");
            this.element.attr("autocomplete", "off");
            this._on(this.element, { keydown: function(aQ) { if (this.element.prop("readOnly")) { aM = true;
                        aN = true;
                        aK = true; return }
                    aM = false;
                    aN = false;
                    aK = false; var aR = ax.ui.keyCode; switch (aQ.keyCode) {
                        case aR.PAGE_UP:
                            aM = true;
                            this._move("previousPage", aQ); break;
                        case aR.PAGE_DOWN:
                            aM = true;
                            this._move("nextPage", aQ); break;
                        case aR.UP:
                            aM = true;
                            this._keyEvent("previous", aQ); break;
                        case aR.DOWN:
                            aM = true;
                            this._keyEvent("next", aQ); break;
                        case aR.ENTER:
                            if (this.menu.active) { aM = true;
                                aQ.preventDefault();
                                this.menu.select(aQ) } break;
                        case aR.TAB:
                            if (this.menu.active) { this.menu.select(aQ) } break;
                        case aR.ESCAPE:
                            if (this.menu.element.is(":visible")) { if (!this.isMultiLine) { this._value(this.term) }
                                this.close(aQ);
                                aQ.preventDefault() } break;
                        default:
                            aK = true;
                            this._searchTimeout(aQ); break } }, keypress: function(aQ) { if (aM) { aM = false; if (!this.isMultiLine || this.menu.element.is(":visible")) { aQ.preventDefault() } return } if (aK) { return } var aR = ax.ui.keyCode; switch (aQ.keyCode) {
                        case aR.PAGE_UP:
                            this._move("previousPage", aQ); break;
                        case aR.PAGE_DOWN:
                            this._move("nextPage", aQ); break;
                        case aR.UP:
                            this._keyEvent("previous", aQ); break;
                        case aR.DOWN:
                            this._keyEvent("next", aQ); break } }, input: function(aQ) { if (aN) { aN = false;
                        aQ.preventDefault(); return }
                    this._searchTimeout(aQ) }, focus: function() { this.selectedItem = null;
                    this.previous = this._value() }, blur: function(aQ) { clearTimeout(this.searching);
                    this.close(aQ);
                    this._change(aQ) } });
            this._initSource();
            this.menu = ax("<ul>").appendTo(this._appendTo()).menu({ role: null }).hide().attr({ unselectable: "on" }).menu("instance");
            this._addClass(this.menu.element, "ui-autocomplete", "ui-front");
            this._on(this.menu.element, { mousedown: function(aQ) { aQ.preventDefault() }, menufocus: function(aS, aT) { var aQ, aR; if (this.isNewMenu) { this.isNewMenu = false; if (aS.originalEvent && /^mouse/.test(aS.originalEvent.type)) { this.menu.blur();
                            this.document.one("mousemove", function() { ax(aS.target).trigger(aS.originalEvent) }); return } }
                    aR = aT.item.data("ui-autocomplete-item"); if (false !== this._trigger("focus", aS, { item: aR })) { if (aS.originalEvent && /^key/.test(aS.originalEvent.type)) { this._value(aR.value) } }
                    aQ = aT.item.attr("aria-label") || aR.value; if (aQ && String.prototype.trim.call(aQ).length) { this.liveRegion.children().hide();
                        ax("<div>").text(aQ).appendTo(this.liveRegion) } }, menuselect: function(aS, aT) { var aR = aT.item.data("ui-autocomplete-item"),
                        aQ = this.previous; if (this.element[0] !== ax.ui.safeActiveElement(this.document[0])) { this.element.trigger("focus");
                        this.previous = aQ;
                        this._delay(function() { this.previous = aQ;
                            this.selectedItem = aR }) } if (false !== this._trigger("select", aS, { item: aR })) { this._value(aR.value) }
                    this.term = this._value();
                    this.close(aS);
                    this.selectedItem = aR } });
            this.liveRegion = ax("<div>", { role: "status", "aria-live": "assertive", "aria-relevant": "additions" }).appendTo(this.document[0].body);
            this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible");
            this._on(this.window, { beforeunload: function() { this.element.removeAttr("autocomplete") } }) }, _destroy: function() { clearTimeout(this.searching);
            this.element.removeAttr("autocomplete");
            this.menu.element.remove();
            this.liveRegion.remove() }, _setOption: function(aK, aL) { this._super(aK, aL); if (aK === "source") { this._initSource() } if (aK === "appendTo") { this.menu.element.appendTo(this._appendTo()) } if (aK === "disabled" && aL && this.xhr) { this.xhr.abort() } }, _isEventTargetInWidget: function(aK) { var aL = this.menu.element[0]; return aK.target === this.element[0] || aK.target === aL || ax.contains(aL, aK.target) }, _closeOnClickOutside: function(aK) { if (!this._isEventTargetInWidget(aK)) { this.close() } }, _appendTo: function() { var aK = this.options.appendTo; if (aK) { aK = aK.jquery || aK.nodeType ? ax(aK) : this.document.find(aK).eq(0) } if (!aK || !aK[0]) { aK = this.element.closest(".ui-front, dialog") } if (!aK.length) { aK = this.document[0].body } return aK }, _initSource: function() { var aM, aK, aL = this; if (Array.isArray(this.options.source)) { aM = this.options.source;
                this.source = function(aO, aN) { aN(ax.ui.autocomplete.filter(aM, aO.term)) } } else { if (typeof this.options.source === "string") { aK = this.options.source;
                    this.source = function(aO, aN) { if (aL.xhr) { aL.xhr.abort() }
                        aL.xhr = ax.ajax({ url: aK, data: aO, dataType: "json", success: function(aP) { aN(aP) }, error: function() { aN([]) } }) } } else { this.source = this.options.source } } }, _searchTimeout: function(aK) { clearTimeout(this.searching);
            this.searching = this._delay(function() { var aM = this.term === this._value(),
                    aL = this.menu.element.is(":visible"),
                    aN = aK.altKey || aK.ctrlKey || aK.metaKey || aK.shiftKey; if (!aM || (aM && !aL && !aN)) { this.selectedItem = null;
                    this.search(null, aK) } }, this.options.delay) }, search: function(aL, aK) { aL = aL != null ? aL : this._value();
            this.term = this._value(); if (aL.length < this.options.minLength) { return this.close(aK) } if (this._trigger("search", aK) === false) { return } return this._search(aL) }, _search: function(aK) { this.pending++;
            this._addClass("ui-autocomplete-loading");
            this.cancelSearch = false;
            this.source({ term: aK }, this._response()) }, _response: function() { var aK = ++this.requestIndex; return function(aL) { if (aK === this.requestIndex) { this.__response(aL) }
                this.pending--; if (!this.pending) { this._removeClass("ui-autocomplete-loading") } }.bind(this) }, __response: function(aK) { if (aK) { aK = this._normalize(aK) }
            this._trigger("response", null, { content: aK }); if (!this.options.disabled && aK && aK.length && !this.cancelSearch) { this._suggest(aK);
                this._trigger("open") } else { this._close() } }, close: function(aK) { this.cancelSearch = true;
            this._close(aK) }, _close: function(aK) { this._off(this.document, "mousedown"); if (this.menu.element.is(":visible")) { this.menu.element.hide();
                this.menu.blur();
                this.isNewMenu = true;
                this._trigger("close", aK) } }, _change: function(aK) { if (this.previous !== this._value()) { this._trigger("change", aK, { item: this.selectedItem }) } }, _normalize: function(aK) { if (aK.length && aK[0].label && aK[0].value) { return aK } return ax.map(aK, function(aL) { if (typeof aL === "string") { return { label: aL, value: aL } } return ax.extend({}, aL, { label: aL.label || aL.value, value: aL.value || aL.label }) }) }, _suggest: function(aK) { var aL = this.menu.element.empty();
            this._renderMenu(aL, aK);
            this.isNewMenu = true;
            this.menu.refresh();
            aL.show();
            this._resizeMenu();
            aL.position(ax.extend({ of: this.element }, this.options.position)); if (this.options.autoFocus) { this.menu.next() }
            this._on(this.document, { mousedown: "_closeOnClickOutside" }) }, _resizeMenu: function() { var aK = this.menu.element;
            aK.outerWidth(Math.max(aK.width("").outerWidth() + 1, this.element.outerWidth())) }, _renderMenu: function(aL, aK) { var aM = this;
            ax.each(aK, function(aN, aO) { aM._renderItemData(aL, aO) }) }, _renderItemData: function(aK, aL) { return this._renderItem(aK, aL).data("ui-autocomplete-item", aL) }, _renderItem: function(aK, aL) { return ax("<li>").append(ax("<div>").text(aL.label)).appendTo(aK) }, _move: function(aL, aK) { if (!this.menu.element.is(":visible")) { this.search(null, aK); return } if (this.menu.isFirstItem() && /^previous/.test(aL) || this.menu.isLastItem() && /^next/.test(aL)) { if (!this.isMultiLine) { this._value(this.term) }
                this.menu.blur(); return }
            this.menu[aL](aK) }, widget: function() { return this.menu.element }, _value: function() { return this.valueMethod.apply(this.element, arguments) }, _keyEvent: function(aL, aK) { if (!this.isMultiLine || this.menu.element.is(":visible")) { this._move(aL, aK);
                aK.preventDefault() } }, _isContentEditable: function(aL) { if (!aL.length) { return false } var aK = aL.prop("contentEditable"); if (aK === "inherit") { return this._isContentEditable(aL.parent()) } return aK === "true" } });
    ax.extend(ax.ui.autocomplete, { escapeRegex: function(aK) { return aK.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&") }, filter: function(aM, aK) { var aL = new RegExp(ax.ui.autocomplete.escapeRegex(aK), "i"); return ax.grep(aM, function(aN) { return aL.test(aN.label || aN.value || aN) }) } });
    ax.widget("ui.autocomplete", ax.ui.autocomplete, { options: { messages: { noResults: "No search results.", results: function(aK) { return aK + (aK > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate." } } }, __response: function(aL) { var aK;
            this._superApply(arguments); if (this.options.disabled || this.cancelSearch) { return } if (aL && aL.length) { aK = this.options.messages.results(aL.length) } else { aK = this.options.messages.noResults }
            this.liveRegion.children().hide();
            ax("<div>").text(aK).appendTo(this.liveRegion) } });
    var aB = ax.ui.autocomplete;
    /*!
     * jQuery UI Controlgroup 1.13.0
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */
    var g = /ui-corner-([a-z]){2,6}/g;
    var y = ax.widget("ui.controlgroup", { version: "1.13.0", defaultElement: "<div>", options: { direction: "horizontal", disabled: null, onlyVisible: true, items: { button: "input[type=button], input[type=submit], input[type=reset], button, a", controlgroupLabel: ".ui-controlgroup-label", checkboxradio: "input[type='checkbox'], input[type='radio']", selectmenu: "select", spinner: ".ui-spinner-input" } }, _create: function() { this._enhance() }, _enhance: function() { this.element.attr("role", "toolbar");
            this.refresh() }, _destroy: function() { this._callChildMethod("destroy");
            this.childWidgets.removeData("ui-controlgroup-data");
            this.element.removeAttr("role"); if (this.options.items.controlgroupLabel) { this.element.find(this.options.items.controlgroupLabel).find(".ui-controlgroup-label-contents").contents().unwrap() } }, _initWidgets: function() { var aL = this,
                aK = [];
            ax.each(this.options.items, function(aO, aM) { var aP; var aN = {}; if (!aM) { return } if (aO === "controlgroupLabel") { aP = aL.element.find(aM);
                    aP.each(function() { var aQ = ax(this); if (aQ.children(".ui-controlgroup-label-contents").length) { return }
                        aQ.contents().wrapAll("<span class='ui-controlgroup-label-contents'></span>") });
                    aL._addClass(aP, null, "ui-widget ui-widget-content ui-state-default");
                    aK = aK.concat(aP.get()); return } if (!ax.fn[aO]) { return } if (aL["_" + aO + "Options"]) { aN = aL["_" + aO + "Options"]("middle") } else { aN = { classes: {} } }
                aL.element.find(aM).each(function() { var aR = ax(this); var aQ = aR[aO]("instance"); var aS = ax.widget.extend({}, aN); if (aO === "button" && aR.parent(".ui-spinner").length) { return } if (!aQ) { aQ = aR[aO]()[aO]("instance") } if (aQ) { aS.classes = aL._resolveClassesValues(aS.classes, aQ) }
                    aR[aO](aS); var aT = aR[aO]("widget");
                    ax.data(aT[0], "ui-controlgroup-data", aQ ? aQ : aR[aO]("instance"));
                    aK.push(aT[0]) }) });
            this.childWidgets = ax(ax.uniqueSort(aK));
            this._addClass(this.childWidgets, "ui-controlgroup-item") }, _callChildMethod: function(aK) { this.childWidgets.each(function() { var aL = ax(this),
                    aM = aL.data("ui-controlgroup-data"); if (aM && aM[aK]) { aM[aK]() } }) }, _updateCornerClass: function(aM, aL) { var aK = "ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right ui-corner-all"; var aN = this._buildSimpleOptions(aL, "label").classes.label;
            this._removeClass(aM, null, aK);
            this._addClass(aM, null, aN) }, _buildSimpleOptions: function(aL, aM) { var aN = this.options.direction === "vertical"; var aK = { classes: {} };
            aK.classes[aM] = { middle: "", first: "ui-corner-" + (aN ? "top" : "left"), last: "ui-corner-" + (aN ? "bottom" : "right"), only: "ui-corner-all" }[aL]; return aK }, _spinnerOptions: function(aK) { var aL = this._buildSimpleOptions(aK, "ui-spinner");
            aL.classes["ui-spinner-up"] = "";
            aL.classes["ui-spinner-down"] = ""; return aL }, _buttonOptions: function(aK) { return this._buildSimpleOptions(aK, "ui-button") }, _checkboxradioOptions: function(aK) { return this._buildSimpleOptions(aK, "ui-checkboxradio-label") }, _selectmenuOptions: function(aK) { var aL = this.options.direction === "vertical"; return { width: aL ? "auto" : false, classes: { middle: { "ui-selectmenu-button-open": "", "ui-selectmenu-button-closed": "" }, first: { "ui-selectmenu-button-open": "ui-corner-" + (aL ? "top" : "tl"), "ui-selectmenu-button-closed": "ui-corner-" + (aL ? "top" : "left") }, last: { "ui-selectmenu-button-open": aL ? "" : "ui-corner-tr", "ui-selectmenu-button-closed": "ui-corner-" + (aL ? "bottom" : "right") }, only: { "ui-selectmenu-button-open": "ui-corner-top", "ui-selectmenu-button-closed": "ui-corner-all" } }[aK] } }, _resolveClassesValues: function(aM, aL) { var aK = {};
            ax.each(aM, function(aN) { var aO = aL.options.classes[aN] || "";
                aO = String.prototype.trim.call(aO.replace(g, ""));
                aK[aN] = (aO + " " + aM[aN]).replace(/\s+/g, " ") }); return aK }, _setOption: function(aK, aL) { if (aK === "direction") { this._removeClass("ui-controlgroup-" + this.options.direction) }
            this._super(aK, aL); if (aK === "disabled") { this._callChildMethod(aL ? "disable" : "enable"); return }
            this.refresh() }, refresh: function() { var aK, aL = this;
            this._addClass("ui-controlgroup ui-controlgroup-" + this.options.direction); if (this.options.direction === "horizontal") { this._addClass(null, "ui-helper-clearfix") }
            this._initWidgets();
            aK = this.childWidgets; if (this.options.onlyVisible) { aK = aK.filter(":visible") } if (aK.length) { ax.each(["first", "last"], function(aO, aP) { var aM = aK[aP]().data("ui-controlgroup-data"); if (aM && aL["_" + aM.widgetName + "Options"]) { var aN = aL["_" + aM.widgetName + "Options"](aK.length === 1 ? "only" : aP);
                        aN.classes = aL._resolveClassesValues(aN.classes, aM);
                        aM.element[aM.widgetName](aN) } else { aL._updateCornerClass(aK[aP](), aP) } });
                this._callChildMethod("refresh") } } });
    /*!
     * jQuery UI Checkboxradio 1.13.0
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */
    ax.widget("ui.checkboxradio", [ax.ui.formResetMixin, { version: "1.13.0", options: { disabled: null, label: null, icon: true, classes: { "ui-checkboxradio-label": "ui-corner-all", "ui-checkboxradio-icon": "ui-corner-all" } }, _getCreateOptions: function() { var aL, aN; var aM = this; var aK = this._super() || {};
            this._readType();
            aN = this.element.labels();
            this.label = ax(aN[aN.length - 1]); if (!this.label.length) { ax.error("No label found for checkboxradio widget") }
            this.originalLabel = "";
            this.label.contents().not(this.element[0]).each(function() { aM.originalLabel += this.nodeType === 3 ? ax(this).text() : this.outerHTML }); if (this.originalLabel) { aK.label = this.originalLabel }
            aL = this.element[0].disabled; if (aL != null) { aK.disabled = aL } return aK }, _create: function() { var aK = this.element[0].checked;
            this._bindFormResetHandler(); if (this.options.disabled == null) { this.options.disabled = this.element[0].disabled }
            this._setOption("disabled", this.options.disabled);
            this._addClass("ui-checkboxradio", "ui-helper-hidden-accessible");
            this._addClass(this.label, "ui-checkboxradio-label", "ui-button ui-widget"); if (this.type === "radio") { this._addClass(this.label, "ui-checkboxradio-radio-label") } if (this.options.label && this.options.label !== this.originalLabel) { this._updateLabel() } else { if (this.originalLabel) { this.options.label = this.originalLabel } }
            this._enhance(); if (aK) { this._addClass(this.label, "ui-checkboxradio-checked", "ui-state-active") }
            this._on({ change: "_toggleClasses", focus: function() { this._addClass(this.label, null, "ui-state-focus ui-visual-focus") }, blur: function() { this._removeClass(this.label, null, "ui-state-focus ui-visual-focus") } }) }, _readType: function() { var aK = this.element[0].nodeName.toLowerCase();
            this.type = this.element[0].type; if (aK !== "input" || !/radio|checkbox/.test(this.type)) { ax.error("Can't create checkboxradio on element.nodeName=" + aK + " and element.type=" + this.type) } }, _enhance: function() { this._updateIcon(this.element[0].checked) }, widget: function() { return this.label }, _getRadioGroup: function() { var aM; var aK = this.element[0].name; var aL = "input[name='" + ax.escapeSelector(aK) + "']"; if (!aK) { return ax([]) } if (this.form.length) { aM = ax(this.form[0].elements).filter(aL) } else { aM = ax(aL).filter(function() { return ax(this)._form().length === 0 }) } return aM.not(this.element) }, _toggleClasses: function() { var aK = this.element[0].checked;
            this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", aK); if (this.options.icon && this.type === "checkbox") { this._toggleClass(this.icon, null, "ui-icon-check ui-state-checked", aK)._toggleClass(this.icon, null, "ui-icon-blank", !aK) } if (this.type === "radio") { this._getRadioGroup().each(function() { var aL = ax(this).checkboxradio("instance"); if (aL) { aL._removeClass(aL.label, "ui-checkboxradio-checked", "ui-state-active") } }) } }, _destroy: function() { this._unbindFormResetHandler(); if (this.icon) { this.icon.remove();
                this.iconSpace.remove() } }, _setOption: function(aK, aL) { if (aK === "label" && !aL) { return }
            this._super(aK, aL); if (aK === "disabled") { this._toggleClass(this.label, null, "ui-state-disabled", aL);
                this.element[0].disabled = aL; return }
            this.refresh() }, _updateIcon: function(aL) { var aK = "ui-icon ui-icon-background "; if (this.options.icon) { if (!this.icon) { this.icon = ax("<span>");
                    this.iconSpace = ax("<span> </span>");
                    this._addClass(this.iconSpace, "ui-checkboxradio-icon-space") } if (this.type === "checkbox") { aK += aL ? "ui-icon-check ui-state-checked" : "ui-icon-blank";
                    this._removeClass(this.icon, null, aL ? "ui-icon-blank" : "ui-icon-check") } else { aK += "ui-icon-blank" }
                this._addClass(this.icon, "ui-checkboxradio-icon", aK); if (!aL) { this._removeClass(this.icon, null, "ui-icon-check ui-state-checked") }
                this.icon.prependTo(this.label).after(this.iconSpace) } else { if (this.icon !== undefined) { this.icon.remove();
                    this.iconSpace.remove();
                    delete this.icon } } }, _updateLabel: function() { var aK = this.label.contents().not(this.element[0]); if (this.icon) { aK = aK.not(this.icon[0]) } if (this.iconSpace) { aK = aK.not(this.iconSpace[0]) }
            aK.remove();
            this.label.append(this.options.label) }, refresh: function() { var aL = this.element[0].checked,
                aK = this.element[0].disabled;
            this._updateIcon(aL);
            this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", aL); if (this.options.label !== null) { this._updateLabel() } if (aK !== this.options.disabled) { this._setOptions({ disabled: aK }) } } }]);
    var aC = ax.ui.checkboxradio;
    /*!
     * jQuery UI Button 1.13.0
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */
    ax.widget("ui.button", { version: "1.13.0", defaultElement: "<button>", options: { classes: { "ui-button": "ui-corner-all" }, disabled: null, icon: null, iconPosition: "beginning", label: null, showLabel: true }, _getCreateOptions: function() { var aL, aK = this._super() || {};
            this.isInput = this.element.is("input");
            aL = this.element[0].disabled; if (aL != null) { aK.disabled = aL }
            this.originalLabel = this.isInput ? this.element.val() : this.element.html(); if (this.originalLabel) { aK.label = this.originalLabel } return aK }, _create: function() { if (!this.option.showLabel & !this.options.icon) { this.options.showLabel = true } if (this.options.disabled == null) { this.options.disabled = this.element[0].disabled || false }
            this.hasTitle = !!this.element.attr("title"); if (this.options.label && this.options.label !== this.originalLabel) { if (this.isInput) { this.element.val(this.options.label) } else { this.element.html(this.options.label) } }
            this._addClass("ui-button", "ui-widget");
            this._setOption("disabled", this.options.disabled);
            this._enhance(); if (this.element.is("a")) { this._on({ keyup: function(aK) { if (aK.keyCode === ax.ui.keyCode.SPACE) { aK.preventDefault(); if (this.element[0].click) { this.element[0].click() } else { this.element.trigger("click") } } } }) } }, _enhance: function() { if (!this.element.is("button")) { this.element.attr("role", "button") } if (this.options.icon) { this._updateIcon("icon", this.options.icon);
                this._updateTooltip() } }, _updateTooltip: function() { this.title = this.element.attr("title"); if (!this.options.showLabel && !this.title) { this.element.attr("title", this.options.label) } }, _updateIcon: function(aM, aO) { var aL = aM !== "iconPosition",
                aK = aL ? this.options.iconPosition : aO,
                aN = aK === "top" || aK === "bottom"; if (!this.icon) { this.icon = ax("<span>");
                this._addClass(this.icon, "ui-button-icon", "ui-icon"); if (!this.options.showLabel) { this._addClass("ui-button-icon-only") } } else { if (aL) { this._removeClass(this.icon, null, this.options.icon) } } if (aL) { this._addClass(this.icon, null, aO) }
            this._attachIcon(aK); if (aN) { this._addClass(this.icon, null, "ui-widget-icon-block"); if (this.iconSpace) { this.iconSpace.remove() } } else { if (!this.iconSpace) { this.iconSpace = ax("<span> </span>");
                    this._addClass(this.iconSpace, "ui-button-icon-space") }
                this._removeClass(this.icon, null, "ui-wiget-icon-block");
                this._attachIconSpace(aK) } }, _destroy: function() { this.element.removeAttr("role"); if (this.icon) { this.icon.remove() } if (this.iconSpace) { this.iconSpace.remove() } if (!this.hasTitle) { this.element.removeAttr("title") } }, _attachIconSpace: function(aK) { this.icon[/^(?:end|bottom)/.test(aK) ? "before" : "after"](this.iconSpace) }, _attachIcon: function(aK) { this.element[/^(?:end|bottom)/.test(aK) ? "append" : "prepend"](this.icon) }, _setOptions: function(aL) { var aM = aL.showLabel === undefined ? this.options.showLabel : aL.showLabel,
                aK = aL.icon === undefined ? this.options.icon : aL.icon; if (!aM && !aK) { aL.showLabel = true }
            this._super(aL) }, _setOption: function(aK, aL) { if (aK === "icon") { if (aL) { this._updateIcon(aK, aL) } else { if (this.icon) { this.icon.remove(); if (this.iconSpace) { this.iconSpace.remove() } } } } if (aK === "iconPosition") { this._updateIcon(aK, aL) } if (aK === "showLabel") { this._toggleClass("ui-button-icon-only", null, !aL);
                this._updateTooltip() } if (aK === "label") { if (this.isInput) { this.element.val(aL) } else { this.element.html(aL); if (this.icon) { this._attachIcon(this.options.iconPosition);
                        this._attachIconSpace(this.options.iconPosition) } } }
            this._super(aK, aL); if (aK === "disabled") { this._toggleClass(null, "ui-state-disabled", aL);
                this.element[0].disabled = aL; if (aL) { this.element.trigger("blur") } } }, refresh: function() { var aK = this.element.is("input, button") ? this.element[0].disabled : this.element.hasClass("ui-button-disabled"); if (aK !== this.options.disabled) { this._setOptions({ disabled: aK }) }
            this._updateTooltip() } });
    if (ax.uiBackCompat !== false) { ax.widget("ui.button", ax.ui.button, { options: { text: true, icons: { primary: null, secondary: null } }, _create: function() { if (this.options.showLabel && !this.options.text) { this.options.showLabel = this.options.text } if (!this.options.showLabel && this.options.text) { this.options.text = this.options.showLabel } if (!this.options.icon && (this.options.icons.primary || this.options.icons.secondary)) { if (this.options.icons.primary) { this.options.icon = this.options.icons.primary } else { this.options.icon = this.options.icons.secondary;
                        this.options.iconPosition = "end" } } else { if (this.options.icon) { this.options.icons.primary = this.options.icon } }
                this._super() }, _setOption: function(aK, aL) { if (aK === "text") { this._super("showLabel", aL); return } if (aK === "showLabel") { this.options.text = aL } if (aK === "icon") { this.options.icons.primary = aL } if (aK === "icons") { if (aL.primary) { this._super("icon", aL.primary);
                        this._super("iconPosition", "beginning") } else { if (aL.secondary) { this._super("icon", aL.secondary);
                            this._super("iconPosition", "end") } } }
                this._superApply(arguments) } });
        ax.fn.button = (function(aK) { return function(aN) { var aL = typeof aN === "string"; var aM = Array.prototype.slice.call(arguments, 1); var aO = this; if (aL) { if (!this.length && aN === "instance") { aO = undefined } else { this.each(function() { var aS; var aR = ax(this).attr("type"); var aQ = aR !== "checkbox" && aR !== "radio" ? "button" : "checkboxradio"; var aP = ax.data(this, "ui-" + aQ); if (aN === "instance") { aO = aP; return false } if (!aP) { return ax.error("cannot call methods on button prior to initialization; attempted to call method '" + aN + "'") } if (typeof aP[aN] !== "function" || aN.charAt(0) === "_") { return ax.error("no such method '" + aN + "' for button widget instance") }
                            aS = aP[aN].apply(aP, aM); if (aS !== aP && aS !== undefined) { aO = aS && aS.jquery ? aO.pushStack(aS.get()) : aS; return false } }) } } else { if (aM.length) { aN = ax.widget.extend.apply(null, [aN].concat(aM)) }
                    this.each(function() { var aR = ax(this).attr("type"); var aQ = aR !== "checkbox" && aR !== "radio" ? "button" : "checkboxradio"; var aP = ax.data(this, "ui-" + aQ); if (aP) { aP.option(aN || {}); if (aP._init) { aP._init() } } else { if (aQ === "button") { aK.call(ax(this), aN); return }
                            ax(this).checkboxradio(ax.extend({ icon: false }, aN)) } }) } return aO } })(ax.fn.button);
        ax.fn.buttonset = function() { if (!ax.ui.controlgroup) { ax.error("Controlgroup widget missing") } if (arguments[0] === "option" && arguments[1] === "items" && arguments[2]) { return this.controlgroup.apply(this, [arguments[0], "items.button", arguments[2]]) } if (arguments[0] === "option" && arguments[1] === "items") { return this.controlgroup.apply(this, [arguments[0], "items.button"]) } if (typeof arguments[0] === "object" && arguments[0].items) { arguments[0].items = { button: arguments[0].items } } return this.controlgroup.apply(this, arguments) } }
    var I = ax.ui.button;
    /*!
     * jQuery UI Datepicker 1.13.0
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */
    ax.extend(ax.ui, { datepicker: { version: "1.13.0" } });
    var aF;

    function ao(aL) { var aK, aM; while (aL.length && aL[0] !== document) { aK = aL.css("position"); if (aK === "absolute" || aK === "relative" || aK === "fixed") { aM = parseInt(aL.css("zIndex"), 10); if (!isNaN(aM) && aM !== 0) { return aM } }
            aL = aL.parent() } return 0 }

    function W() { this._curInst = null;
        this._keyEvent = false;
        this._disabledInputs = [];
        this._datepickerShowing = false;
        this._inDialog = false;
        this._mainDivId = "ui-datepicker-div";
        this._inlineClass = "ui-datepicker-inline";
        this._appendClass = "ui-datepicker-append";
        this._triggerClass = "ui-datepicker-trigger";
        this._dialogClass = "ui-datepicker-dialog";
        this._disableClass = "ui-datepicker-disabled";
        this._unselectableClass = "ui-datepicker-unselectable";
        this._currentClass = "ui-datepicker-current-day";
        this._dayOverClass = "ui-datepicker-days-cell-over";
        this.regional = [];
        this.regional[""] = { closeText: "Done", prevText: "Prev", nextText: "Next", currentText: "Today", monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], weekHeader: "Wk", dateFormat: "mm/dd/yy", firstDay: 0, isRTL: false, showMonthAfterYear: false, yearSuffix: "", selectMonthLabel: "Select month", selectYearLabel: "Select year" };
        this._defaults = { showOn: "focus", showAnim: "fadeIn", showOptions: {}, defaultDate: null, appendText: "", buttonText: "...", buttonImage: "", buttonImageOnly: false, hideIfNoPrevNext: false, navigationAsDateFormat: false, gotoCurrent: false, changeMonth: false, changeYear: false, yearRange: "c-10:c+10", showOtherMonths: false, selectOtherMonths: false, showWeek: false, calculateWeek: this.iso8601Week, shortYearCutoff: "+10", minDate: null, maxDate: null, duration: "fast", beforeShowDay: null, beforeShow: null, onSelect: null, onChangeMonthYear: null, onClose: null, onUpdateDatepicker: null, numberOfMonths: 1, showCurrentAtPos: 0, stepMonths: 1, stepBigMonths: 12, altField: "", altFormat: "", constrainInput: true, showButtonPanel: false, autoSize: false, disabled: false };
        ax.extend(this._defaults, this.regional[""]);
        this.regional.en = ax.extend(true, {}, this.regional[""]);
        this.regional["en-US"] = ax.extend(true, {}, this.regional.en);
        this.dpDiv = af(ax("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) }
    ax.extend(W.prototype, { markerClassName: "hasDatepicker", maxRows: 4, _widgetDatepicker: function() { return this.dpDiv }, setDefaults: function(aK) { L(this._defaults, aK || {}); return this }, _attachDatepicker: function(aN, aK) { var aO, aM, aL;
            aO = aN.nodeName.toLowerCase();
            aM = (aO === "div" || aO === "span"); if (!aN.id) { this.uuid += 1;
                aN.id = "dp" + this.uuid }
            aL = this._newInst(ax(aN), aM);
            aL.settings = ax.extend({}, aK || {}); if (aO === "input") { this._connectDatepicker(aN, aL) } else { if (aM) { this._inlineDatepicker(aN, aL) } } }, _newInst: function(aL, aK) { var aM = aL[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1"); return { id: aM, input: aL, selectedDay: 0, selectedMonth: 0, selectedYear: 0, drawMonth: 0, drawYear: 0, inline: aK, dpDiv: (!aK ? this.dpDiv : af(ax("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))) } }, _connectDatepicker: function(aM, aL) { var aK = ax(aM);
            aL.append = ax([]);
            aL.trigger = ax([]); if (aK.hasClass(this.markerClassName)) { return }
            this._attachments(aK, aL);
            aK.addClass(this.markerClassName).on("keydown", this._doKeyDown).on("keypress", this._doKeyPress).on("keyup", this._doKeyUp);
            this._autoSize(aL);
            ax.data(aM, "datepicker", aL); if (aL.settings.disabled) { this._disableDatepicker(aM) } }, _attachments: function(aM, aP) { var aL, aO, aK, aQ = this._get(aP, "appendText"),
                aN = this._get(aP, "isRTL"); if (aP.append) { aP.append.remove() } if (aQ) { aP.append = ax("<span>").addClass(this._appendClass).text(aQ);
                aM[aN ? "before" : "after"](aP.append) }
            aM.off("focus", this._showDatepicker); if (aP.trigger) { aP.trigger.remove() }
            aL = this._get(aP, "showOn"); if (aL === "focus" || aL === "both") { aM.on("focus", this._showDatepicker) } if (aL === "button" || aL === "both") { aO = this._get(aP, "buttonText");
                aK = this._get(aP, "buttonImage"); if (this._get(aP, "buttonImageOnly")) { aP.trigger = ax("<img>").addClass(this._triggerClass).attr({ src: aK, alt: aO, title: aO }) } else { aP.trigger = ax("<button type='button'>").addClass(this._triggerClass); if (aK) { aP.trigger.html(ax("<img>").attr({ src: aK, alt: aO, title: aO })) } else { aP.trigger.text(aO) } }
                aM[aN ? "before" : "after"](aP.trigger);
                aP.trigger.on("click", function() { if (ax.datepicker._datepickerShowing && ax.datepicker._lastInput === aM[0]) { ax.datepicker._hideDatepicker() } else { if (ax.datepicker._datepickerShowing && ax.datepicker._lastInput !== aM[0]) { ax.datepicker._hideDatepicker();
                            ax.datepicker._showDatepicker(aM[0]) } else { ax.datepicker._showDatepicker(aM[0]) } } return false }) } }, _autoSize: function(aQ) { if (this._get(aQ, "autoSize") && !aQ.inline) { var aN, aL, aM, aP, aO = new Date(2009, 12 - 1, 20),
                    aK = this._get(aQ, "dateFormat"); if (aK.match(/[DM]/)) { aN = function(aR) { aL = 0;
                        aM = 0; for (aP = 0; aP < aR.length; aP++) { if (aR[aP].length > aL) { aL = aR[aP].length;
                                aM = aP } } return aM };
                    aO.setMonth(aN(this._get(aQ, (aK.match(/MM/) ? "monthNames" : "monthNamesShort"))));
                    aO.setDate(aN(this._get(aQ, (aK.match(/DD/) ? "dayNames" : "dayNamesShort"))) + 20 - aO.getDay()) }
                aQ.input.attr("size", this._formatDate(aQ, aO).length) } }, _inlineDatepicker: function(aL, aK) { var aM = ax(aL); if (aM.hasClass(this.markerClassName)) { return }
            aM.addClass(this.markerClassName).append(aK.dpDiv);
            ax.data(aL, "datepicker", aK);
            this._setDate(aK, this._getDefaultDate(aK), true);
            this._updateDatepicker(aK);
            this._updateAlternate(aK); if (aK.settings.disabled) { this._disableDatepicker(aL) }
            aK.dpDiv.css("display", "block") }, _dialogDatepicker: function(aR, aL, aP, aM, aQ) { var aK, aU, aO, aT, aS, aN = this._dialogInst; if (!aN) { this.uuid += 1;
                aK = "dp" + this.uuid;
                this._dialogInput = ax("<input type='text' id='" + aK + "' style='position: absolute; top: -100px; width: 0px;'/>");
                this._dialogInput.on("keydown", this._doKeyDown);
                ax("body").append(this._dialogInput);
                aN = this._dialogInst = this._newInst(this._dialogInput, false);
                aN.settings = {};
                ax.data(this._dialogInput[0], "datepicker", aN) }
            L(aN.settings, aM || {});
            aL = (aL && aL.constructor === Date ? this._formatDate(aN, aL) : aL);
            this._dialogInput.val(aL);
            this._pos = (aQ ? (aQ.length ? aQ : [aQ.pageX, aQ.pageY]) : null); if (!this._pos) { aU = document.documentElement.clientWidth;
                aO = document.documentElement.clientHeight;
                aT = document.documentElement.scrollLeft || document.body.scrollLeft;
                aS = document.documentElement.scrollTop || document.body.scrollTop;
                this._pos = [(aU / 2) - 100 + aT, (aO / 2) - 150 + aS] }
            this._dialogInput.css("left", (this._pos[0] + 20) + "px").css("top", this._pos[1] + "px");
            aN.settings.onSelect = aP;
            this._inDialog = true;
            this.dpDiv.addClass(this._dialogClass);
            this._showDatepicker(this._dialogInput[0]); if (ax.blockUI) { ax.blockUI(this.dpDiv) }
            ax.data(this._dialogInput[0], "datepicker", aN); return this }, _destroyDatepicker: function(aM) { var aN, aK = ax(aM),
                aL = ax.data(aM, "datepicker"); if (!aK.hasClass(this.markerClassName)) { return }
            aN = aM.nodeName.toLowerCase();
            ax.removeData(aM, "datepicker"); if (aN === "input") { aL.append.remove();
                aL.trigger.remove();
                aK.removeClass(this.markerClassName).off("focus", this._showDatepicker).off("keydown", this._doKeyDown).off("keypress", this._doKeyPress).off("keyup", this._doKeyUp) } else { if (aN === "div" || aN === "span") { aK.removeClass(this.markerClassName).empty() } } if (aF === aL) { aF = null;
                this._curInst = null } }, _enableDatepicker: function(aN) { var aO, aM, aK = ax(aN),
                aL = ax.data(aN, "datepicker"); if (!aK.hasClass(this.markerClassName)) { return }
            aO = aN.nodeName.toLowerCase(); if (aO === "input") { aN.disabled = false;
                aL.trigger.filter("button").each(function() { this.disabled = false }).end().filter("img").css({ opacity: "1.0", cursor: "" }) } else { if (aO === "div" || aO === "span") { aM = aK.children("." + this._inlineClass);
                    aM.children().removeClass("ui-state-disabled");
                    aM.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", false) } }
            this._disabledInputs = ax.map(this._disabledInputs, function(aP) { return (aP === aN ? null : aP) }) }, _disableDatepicker: function(aN) { var aO, aM, aK = ax(aN),
                aL = ax.data(aN, "datepicker"); if (!aK.hasClass(this.markerClassName)) { return }
            aO = aN.nodeName.toLowerCase(); if (aO === "input") { aN.disabled = true;
                aL.trigger.filter("button").each(function() { this.disabled = true }).end().filter("img").css({ opacity: "0.5", cursor: "default" }) } else { if (aO === "div" || aO === "span") { aM = aK.children("." + this._inlineClass);
                    aM.children().addClass("ui-state-disabled");
                    aM.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", true) } }
            this._disabledInputs = ax.map(this._disabledInputs, function(aP) { return (aP === aN ? null : aP) });
            this._disabledInputs[this._disabledInputs.length] = aN }, _isDisabledDatepicker: function(aL) { if (!aL) { return false } for (var aK = 0; aK < this._disabledInputs.length; aK++) { if (this._disabledInputs[aK] === aL) { return true } } return false }, _getInst: function(aL) { try { return ax.data(aL, "datepicker") } catch (aK) { throw "Missing instance data for this datepicker" } }, _optionDatepicker: function(aQ, aL, aP) { var aM, aK, aO, aR, aN = this._getInst(aQ); if (arguments.length === 2 && typeof aL === "string") { return (aL === "defaults" ? ax.extend({}, ax.datepicker._defaults) : (aN ? (aL === "all" ? ax.extend({}, aN.settings) : this._get(aN, aL)) : null)) }
            aM = aL || {}; if (typeof aL === "string") { aM = {};
                aM[aL] = aP } if (aN) { if (this._curInst === aN) { this._hideDatepicker() }
                aK = this._getDateDatepicker(aQ, true);
                aO = this._getMinMaxDate(aN, "min");
                aR = this._getMinMaxDate(aN, "max");
                L(aN.settings, aM); if (aO !== null && aM.dateFormat !== undefined && aM.minDate === undefined) { aN.settings.minDate = this._formatDate(aN, aO) } if (aR !== null && aM.dateFormat !== undefined && aM.maxDate === undefined) { aN.settings.maxDate = this._formatDate(aN, aR) } if ("disabled" in aM) { if (aM.disabled) { this._disableDatepicker(aQ) } else { this._enableDatepicker(aQ) } }
                this._attachments(ax(aQ), aN);
                this._autoSize(aN);
                this._setDate(aN, aK);
                this._updateAlternate(aN);
                this._updateDatepicker(aN) } }, _changeDatepicker: function(aM, aK, aL) { this._optionDatepicker(aM, aK, aL) }, _refreshDatepicker: function(aL) { var aK = this._getInst(aL); if (aK) { this._updateDatepicker(aK) } }, _setDateDatepicker: function(aM, aK) { var aL = this._getInst(aM); if (aL) { this._setDate(aL, aK);
                this._updateDatepicker(aL);
                this._updateAlternate(aL) } }, _getDateDatepicker: function(aM, aK) { var aL = this._getInst(aM); if (aL && !aL.inline) { this._setDateFromField(aL, aK) } return (aL ? this._getDate(aL) : null) }, _doKeyDown: function(aN) { var aL, aK, aP, aO = ax.datepicker._getInst(aN.target),
                aQ = true,
                aM = aO.dpDiv.is(".ui-datepicker-rtl");
            aO._keyEvent = true; if (ax.datepicker._datepickerShowing) { switch (aN.keyCode) {
                    case 9:
                        ax.datepicker._hideDatepicker();
                        aQ = false; break;
                    case 13:
                        aP = ax("td." + ax.datepicker._dayOverClass + ":not(." + ax.datepicker._currentClass + ")", aO.dpDiv); if (aP[0]) { ax.datepicker._selectDay(aN.target, aO.selectedMonth, aO.selectedYear, aP[0]) }
                        aL = ax.datepicker._get(aO, "onSelect"); if (aL) { aK = ax.datepicker._formatDate(aO);
                            aL.apply((aO.input ? aO.input[0] : null), [aK, aO]) } else { ax.datepicker._hideDatepicker() } return false;
                    case 27:
                        ax.datepicker._hideDatepicker(); break;
                    case 33:
                        ax.datepicker._adjustDate(aN.target, (aN.ctrlKey ? -ax.datepicker._get(aO, "stepBigMonths") : -ax.datepicker._get(aO, "stepMonths")), "M"); break;
                    case 34:
                        ax.datepicker._adjustDate(aN.target, (aN.ctrlKey ? +ax.datepicker._get(aO, "stepBigMonths") : +ax.datepicker._get(aO, "stepMonths")), "M"); break;
                    case 35:
                        if (aN.ctrlKey || aN.metaKey) { ax.datepicker._clearDate(aN.target) }
                        aQ = aN.ctrlKey || aN.metaKey; break;
                    case 36:
                        if (aN.ctrlKey || aN.metaKey) { ax.datepicker._gotoToday(aN.target) }
                        aQ = aN.ctrlKey || aN.metaKey; break;
                    case 37:
                        if (aN.ctrlKey || aN.metaKey) { ax.datepicker._adjustDate(aN.target, (aM ? +1 : -1), "D") }
                        aQ = aN.ctrlKey || aN.metaKey; if (aN.originalEvent.altKey) { ax.datepicker._adjustDate(aN.target, (aN.ctrlKey ? -ax.datepicker._get(aO, "stepBigMonths") : -ax.datepicker._get(aO, "stepMonths")), "M") } break;
                    case 38:
                        if (aN.ctrlKey || aN.metaKey) { ax.datepicker._adjustDate(aN.target, -7, "D") }
                        aQ = aN.ctrlKey || aN.metaKey; break;
                    case 39:
                        if (aN.ctrlKey || aN.metaKey) { ax.datepicker._adjustDate(aN.target, (aM ? -1 : +1), "D") }
                        aQ = aN.ctrlKey || aN.metaKey; if (aN.originalEvent.altKey) { ax.datepicker._adjustDate(aN.target, (aN.ctrlKey ? +ax.datepicker._get(aO, "stepBigMonths") : +ax.datepicker._get(aO, "stepMonths")), "M") } break;
                    case 40:
                        if (aN.ctrlKey || aN.metaKey) { ax.datepicker._adjustDate(aN.target, +7, "D") }
                        aQ = aN.ctrlKey || aN.metaKey; break;
                    default:
                        aQ = false } } else { if (aN.keyCode === 36 && aN.ctrlKey) { ax.datepicker._showDatepicker(this) } else { aQ = false } } if (aQ) { aN.preventDefault();
                aN.stopPropagation() } }, _doKeyPress: function(aM) { var aL, aK, aN = ax.datepicker._getInst(aM.target); if (ax.datepicker._get(aN, "constrainInput")) { aL = ax.datepicker._possibleChars(ax.datepicker._get(aN, "dateFormat"));
                aK = String.fromCharCode(aM.charCode == null ? aM.keyCode : aM.charCode); return aM.ctrlKey || aM.metaKey || (aK < " " || !aL || aL.indexOf(aK) > -1) } }, _doKeyUp: function(aM) { var aK, aN = ax.datepicker._getInst(aM.target); if (aN.input.val() !== aN.lastVal) { try { aK = ax.datepicker.parseDate(ax.datepicker._get(aN, "dateFormat"), (aN.input ? aN.input.val() : null), ax.datepicker._getFormatConfig(aN)); if (aK) { ax.datepicker._setDateFromField(aN);
                        ax.datepicker._updateAlternate(aN);
                        ax.datepicker._updateDatepicker(aN) } } catch (aL) {} } return true }, _showDatepicker: function(aL) { aL = aL.target || aL; if (aL.nodeName.toLowerCase() !== "input") { aL = ax("input", aL.parentNode)[0] } if (ax.datepicker._isDisabledDatepicker(aL) || ax.datepicker._lastInput === aL) { return } var aN, aR, aM, aP, aQ, aK, aO;
            aN = ax.datepicker._getInst(aL); if (ax.datepicker._curInst && ax.datepicker._curInst !== aN) { ax.datepicker._curInst.dpDiv.stop(true, true); if (aN && ax.datepicker._datepickerShowing) { ax.datepicker._hideDatepicker(ax.datepicker._curInst.input[0]) } }
            aR = ax.datepicker._get(aN, "beforeShow");
            aM = aR ? aR.apply(aL, [aL, aN]) : {}; if (aM === false) { return }
            L(aN.settings, aM);
            aN.lastVal = null;
            ax.datepicker._lastInput = aL;
            ax.datepicker._setDateFromField(aN); if (ax.datepicker._inDialog) { aL.value = "" } if (!ax.datepicker._pos) { ax.datepicker._pos = ax.datepicker._findPos(aL);
                ax.datepicker._pos[1] += aL.offsetHeight }
            aP = false;
            ax(aL).parents().each(function() { aP |= ax(this).css("position") === "fixed"; return !aP });
            aQ = { left: ax.datepicker._pos[0], top: ax.datepicker._pos[1] };
            ax.datepicker._pos = null;
            aN.dpDiv.empty();
            aN.dpDiv.css({ position: "absolute", display: "block", top: "-1000px" });
            ax.datepicker._updateDatepicker(aN);
            aQ = ax.datepicker._checkOffset(aN, aQ, aP);
            aN.dpDiv.css({ position: (ax.datepicker._inDialog && ax.blockUI ? "static" : (aP ? "fixed" : "absolute")), display: "none", left: aQ.left + "px", top: aQ.top + "px" }); if (!aN.inline) { aK = ax.datepicker._get(aN, "showAnim");
                aO = ax.datepicker._get(aN, "duration");
                aN.dpDiv.css("z-index", ao(ax(aL)) + 1);
                ax.datepicker._datepickerShowing = true; if (ax.effects && ax.effects.effect[aK]) { aN.dpDiv.show(aK, ax.datepicker._get(aN, "showOptions"), aO) } else { aN.dpDiv[aK || "show"](aK ? aO : null) } if (ax.datepicker._shouldFocusInput(aN)) { aN.input.trigger("focus") }
                ax.datepicker._curInst = aN } }, _updateDatepicker: function(aN) { this.maxRows = 4;
            aF = aN;
            aN.dpDiv.empty().append(this._generateHTML(aN));
            this._attachHandlers(aN); var aQ, aK = this._getNumberOfMonths(aN),
                aP = aK[1],
                aM = 17,
                aL = aN.dpDiv.find("." + this._dayOverClass + " a"),
                aO = ax.datepicker._get(aN, "onUpdateDatepicker"); if (aL.length > 0) { R.apply(aL.get(0)) }
            aN.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""); if (aP > 1) { aN.dpDiv.addClass("ui-datepicker-multi-" + aP).css("width", (aM * aP) + "em") }
            aN.dpDiv[(aK[0] !== 1 || aK[1] !== 1 ? "add" : "remove") + "Class"]("ui-datepicker-multi");
            aN.dpDiv[(this._get(aN, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"); if (aN === ax.datepicker._curInst && ax.datepicker._datepickerShowing && ax.datepicker._shouldFocusInput(aN)) { aN.input.trigger("focus") } if (aN.yearshtml) { aQ = aN.yearshtml;
                setTimeout(function() { if (aQ === aN.yearshtml && aN.yearshtml) { aN.dpDiv.find("select.ui-datepicker-year").first().replaceWith(aN.yearshtml) }
                    aQ = aN.yearshtml = null }, 0) } if (aO) { aO.apply((aN.input ? aN.input[0] : null), [aN]) } }, _shouldFocusInput: function(aK) { return aK.input && aK.input.is(":visible") && !aK.input.is(":disabled") && !aK.input.is(":focus") }, _checkOffset: function(aP, aN, aM) { var aO = aP.dpDiv.outerWidth(),
                aS = aP.dpDiv.outerHeight(),
                aR = aP.input ? aP.input.outerWidth() : 0,
                aK = aP.input ? aP.input.outerHeight() : 0,
                aQ = document.documentElement.clientWidth + (aM ? 0 : ax(document).scrollLeft()),
                aL = document.documentElement.clientHeight + (aM ? 0 : ax(document).scrollTop());
            aN.left -= (this._get(aP, "isRTL") ? (aO - aR) : 0);
            aN.left -= (aM && aN.left === aP.input.offset().left) ? ax(document).scrollLeft() : 0;
            aN.top -= (aM && aN.top === (aP.input.offset().top + aK)) ? ax(document).scrollTop() : 0;
            aN.left -= Math.min(aN.left, (aN.left + aO > aQ && aQ > aO) ? Math.abs(aN.left + aO - aQ) : 0);
            aN.top -= Math.min(aN.top, (aN.top + aS > aL && aL > aS) ? Math.abs(aS + aK) : 0); return aN }, _findPos: function(aN) { var aK, aM = this._getInst(aN),
                aL = this._get(aM, "isRTL"); while (aN && (aN.type === "hidden" || aN.nodeType !== 1 || ax.expr.pseudos.hidden(aN))) { aN = aN[aL ? "previousSibling" : "nextSibling"] }
            aK = ax(aN).offset(); return [aK.left, aK.top] }, _hideDatepicker: function(aM) { var aL, aP, aO, aK, aN = this._curInst; if (!aN || (aM && aN !== ax.data(aM, "datepicker"))) { return } if (this._datepickerShowing) { aL = this._get(aN, "showAnim");
                aP = this._get(aN, "duration");
                aO = function() { ax.datepicker._tidyDialog(aN) }; if (ax.effects && (ax.effects.effect[aL] || ax.effects[aL])) { aN.dpDiv.hide(aL, ax.datepicker._get(aN, "showOptions"), aP, aO) } else { aN.dpDiv[(aL === "slideDown" ? "slideUp" : (aL === "fadeIn" ? "fadeOut" : "hide"))]((aL ? aP : null), aO) } if (!aL) { aO() }
                this._datepickerShowing = false;
                aK = this._get(aN, "onClose"); if (aK) { aK.apply((aN.input ? aN.input[0] : null), [(aN.input ? aN.input.val() : ""), aN]) }
                this._lastInput = null; if (this._inDialog) { this._dialogInput.css({ position: "absolute", left: "0", top: "-100px" }); if (ax.blockUI) { ax.unblockUI();
                        ax("body").append(this.dpDiv) } }
                this._inDialog = false } }, _tidyDialog: function(aK) { aK.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar") }, _checkExternalClick: function(aL) { if (!ax.datepicker._curInst) { return } var aK = ax(aL.target),
                aM = ax.datepicker._getInst(aK[0]); if (((aK[0].id !== ax.datepicker._mainDivId && aK.parents("#" + ax.datepicker._mainDivId).length === 0 && !aK.hasClass(ax.datepicker.markerClassName) && !aK.closest("." + ax.datepicker._triggerClass).length && ax.datepicker._datepickerShowing && !(ax.datepicker._inDialog && ax.blockUI))) || (aK.hasClass(ax.datepicker.markerClassName) && ax.datepicker._curInst !== aM)) { ax.datepicker._hideDatepicker() } }, _adjustDate: function(aO, aN, aM) { var aL = ax(aO),
                aK = this._getInst(aL[0]); if (this._isDisabledDatepicker(aL[0])) { return }
            this._adjustInstDate(aK, aN, aM);
            this._updateDatepicker(aK) }, _gotoToday: function(aN) { var aK, aM = ax(aN),
                aL = this._getInst(aM[0]); if (this._get(aL, "gotoCurrent") && aL.currentDay) { aL.selectedDay = aL.currentDay;
                aL.drawMonth = aL.selectedMonth = aL.currentMonth;
                aL.drawYear = aL.selectedYear = aL.currentYear } else { aK = new Date();
                aL.selectedDay = aK.getDate();
                aL.drawMonth = aL.selectedMonth = aK.getMonth();
                aL.drawYear = aL.selectedYear = aK.getFullYear() }
            this._notifyChange(aL);
            this._adjustDate(aM) }, _selectMonthYear: function(aO, aK, aN) { var aM = ax(aO),
                aL = this._getInst(aM[0]);
            aL["selected" + (aN === "M" ? "Month" : "Year")] = aL["draw" + (aN === "M" ? "Month" : "Year")] = parseInt(aK.options[aK.selectedIndex].value, 10);
            this._notifyChange(aL);
            this._adjustDate(aM) }, _selectDay: function(aP, aN, aK, aO) { var aL, aM = ax(aP); if (ax(aO).hasClass(this._unselectableClass) || this._isDisabledDatepicker(aM[0])) { return }
            aL = this._getInst(aM[0]);
            aL.selectedDay = aL.currentDay = parseInt(ax("a", aO).attr("data-date"));
            aL.selectedMonth = aL.currentMonth = aN;
            aL.selectedYear = aL.currentYear = aK;
            this._selectDate(aP, this._formatDate(aL, aL.currentDay, aL.currentMonth, aL.currentYear)) }, _clearDate: function(aL) { var aK = ax(aL);
            this._selectDate(aK, "") }, _selectDate: function(aO, aK) { var aL, aN = ax(aO),
                aM = this._getInst(aN[0]);
            aK = (aK != null ? aK : this._formatDate(aM)); if (aM.input) { aM.input.val(aK) }
            this._updateAlternate(aM);
            aL = this._get(aM, "onSelect"); if (aL) { aL.apply((aM.input ? aM.input[0] : null), [aK, aM]) } else { if (aM.input) { aM.input.trigger("change") } } if (aM.inline) { this._updateDatepicker(aM) } else { this._hideDatepicker();
                this._lastInput = aM.input[0]; if (typeof(aM.input[0]) !== "object") { aM.input.trigger("focus") }
                this._lastInput = null } }, _updateAlternate: function(aO) { var aN, aM, aK, aL = this._get(aO, "altField"); if (aL) { aN = this._get(aO, "altFormat") || this._get(aO, "dateFormat");
                aM = this._getDate(aO);
                aK = this.formatDate(aN, aM, this._getFormatConfig(aO));
                ax(document).find(aL).val(aK) } }, noWeekends: function(aL) { var aK = aL.getDay(); return [(aK > 0 && aK < 6), ""] }, iso8601Week: function(aK) { var aL, aM = new Date(aK.getTime());
            aM.setDate(aM.getDate() + 4 - (aM.getDay() || 7));
            aL = aM.getTime();
            aM.setMonth(0);
            aM.setDate(1); return Math.floor(Math.round((aL - aM) / 86400000) / 7) + 1 }, parseDate: function(a0, aV, a2) { if (a0 == null || aV == null) { throw "Invalid arguments" }
            aV = (typeof aV === "object" ? aV.toString() : aV + ""); if (aV === "") { return null } var aN, aX, aL, a1 = 0,
                aQ = (a2 ? a2.shortYearCutoff : null) || this._defaults.shortYearCutoff,
                aM = (typeof aQ !== "string" ? aQ : new Date().getFullYear() % 100 + parseInt(aQ, 10)),
                aT = (a2 ? a2.dayNamesShort : null) || this._defaults.dayNamesShort,
                a4 = (a2 ? a2.dayNames : null) || this._defaults.dayNames,
                aK = (a2 ? a2.monthNamesShort : null) || this._defaults.monthNamesShort,
                aO = (a2 ? a2.monthNames : null) || this._defaults.monthNames,
                aP = -1,
                a5 = -1,
                aZ = -1,
                aS = -1,
                aY = false,
                a3, aU = function(a7) { var a8 = (aN + 1 < a0.length && a0.charAt(aN + 1) === a7); if (a8) { aN++ } return a8 },
                a6 = function(a9) { var a7 = aU(a9),
                        ba = (a9 === "@" ? 14 : (a9 === "!" ? 20 : (a9 === "y" && a7 ? 4 : (a9 === "o" ? 3 : 2)))),
                        bc = (a9 === "y" ? ba : 1),
                        bb = new RegExp("^\\d{" + bc + "," + ba + "}"),
                        a8 = aV.substring(a1).match(bb); if (!a8) { throw "Missing number at position " + a1 }
                    a1 += a8[0].length; return parseInt(a8[0], 10) },
                aR = function(a8, a9, bb) { var a7 = -1,
                        ba = ax.map(aU(a8) ? bb : a9, function(bd, bc) { return [
                                [bc, bd]
                            ] }).sort(function(bd, bc) { return -(bd[1].length - bc[1].length) });
                    ax.each(ba, function(bd, be) { var bc = be[1]; if (aV.substr(a1, bc.length).toLowerCase() === bc.toLowerCase()) { a7 = be[0];
                            a1 += bc.length; return false } }); if (a7 !== -1) { return a7 + 1 } else { throw "Unknown name at position " + a1 } },
                aW = function() { if (aV.charAt(a1) !== a0.charAt(aN)) { throw "Unexpected literal at position " + a1 }
                    a1++ }; for (aN = 0; aN < a0.length; aN++) { if (aY) { if (a0.charAt(aN) === "'" && !aU("'")) { aY = false } else { aW() } } else { switch (a0.charAt(aN)) {
                        case "d":
                            aZ = a6("d"); break;
                        case "D":
                            aR("D", aT, a4); break;
                        case "o":
                            aS = a6("o"); break;
                        case "m":
                            a5 = a6("m"); break;
                        case "M":
                            a5 = aR("M", aK, aO); break;
                        case "y":
                            aP = a6("y"); break;
                        case "@":
                            a3 = new Date(a6("@"));
                            aP = a3.getFullYear();
                            a5 = a3.getMonth() + 1;
                            aZ = a3.getDate(); break;
                        case "!":
                            a3 = new Date((a6("!") - this._ticksTo1970) / 10000);
                            aP = a3.getFullYear();
                            a5 = a3.getMonth() + 1;
                            aZ = a3.getDate(); break;
                        case "'":
                            if (aU("'")) { aW() } else { aY = true } break;
                        default:
                            aW() } } } if (a1 < aV.length) { aL = aV.substr(a1); if (!/^\s+/.test(aL)) { throw "Extra/unparsed characters found in date: " + aL } } if (aP === -1) { aP = new Date().getFullYear() } else { if (aP < 100) { aP += new Date().getFullYear() - new Date().getFullYear() % 100 + (aP <= aM ? 0 : -100) } } if (aS > -1) { a5 = 1;
                aZ = aS;
                do { aX = this._getDaysInMonth(aP, a5 - 1); if (aZ <= aX) { break }
                    a5++;
                    aZ -= aX } while (true) }
            a3 = this._daylightSavingAdjust(new Date(aP, a5 - 1, aZ)); if (a3.getFullYear() !== aP || a3.getMonth() + 1 !== a5 || a3.getDate() !== aZ) { throw "Invalid date" } return a3 }, ATOM: "yy-mm-dd", COOKIE: "D, dd M yy", ISO_8601: "yy-mm-dd", RFC_822: "D, d M y", RFC_850: "DD, dd-M-y", RFC_1036: "D, d M y", RFC_1123: "D, d M yy", RFC_2822: "D, d M yy", RSS: "D, d M y", TICKS: "!", TIMESTAMP: "@", W3C: "yy-mm-dd", _ticksTo1970: (((1970 - 1) * 365 + Math.floor(1970 / 4) - Math.floor(1970 / 100) + Math.floor(1970 / 400)) * 24 * 60 * 60 * 10000000), formatDate: function(aT, aN, aO) { if (!aN) { return "" } var aV, aW = (aO ? aO.dayNamesShort : null) || this._defaults.dayNamesShort,
                aL = (aO ? aO.dayNames : null) || this._defaults.dayNames,
                aR = (aO ? aO.monthNamesShort : null) || this._defaults.monthNamesShort,
                aP = (aO ? aO.monthNames : null) || this._defaults.monthNames,
                aU = function(aX) { var aY = (aV + 1 < aT.length && aT.charAt(aV + 1) === aX); if (aY) { aV++ } return aY },
                aK = function(aZ, a0, aX) { var aY = "" + a0; if (aU(aZ)) { while (aY.length < aX) { aY = "0" + aY } } return aY },
                aQ = function(aX, aZ, aY, a0) { return (aU(aX) ? a0[aZ] : aY[aZ]) },
                aM = "",
                aS = false; if (aN) { for (aV = 0; aV < aT.length; aV++) { if (aS) { if (aT.charAt(aV) === "'" && !aU("'")) { aS = false } else { aM += aT.charAt(aV) } } else { switch (aT.charAt(aV)) {
                            case "d":
                                aM += aK("d", aN.getDate(), 2); break;
                            case "D":
                                aM += aQ("D", aN.getDay(), aW, aL); break;
                            case "o":
                                aM += aK("o", Math.round((new Date(aN.getFullYear(), aN.getMonth(), aN.getDate()).getTime() - new Date(aN.getFullYear(), 0, 0).getTime()) / 86400000), 3); break;
                            case "m":
                                aM += aK("m", aN.getMonth() + 1, 2); break;
                            case "M":
                                aM += aQ("M", aN.getMonth(), aR, aP); break;
                            case "y":
                                aM += (aU("y") ? aN.getFullYear() : (aN.getFullYear() % 100 < 10 ? "0" : "") + aN.getFullYear() % 100); break;
                            case "@":
                                aM += aN.getTime(); break;
                            case "!":
                                aM += aN.getTime() * 10000 + this._ticksTo1970; break;
                            case "'":
                                if (aU("'")) { aM += "'" } else { aS = true } break;
                            default:
                                aM += aT.charAt(aV) } } } } return aM }, _possibleChars: function(aO) { var aN, aM = "",
                aL = false,
                aK = function(aP) { var aQ = (aN + 1 < aO.length && aO.charAt(aN + 1) === aP); if (aQ) { aN++ } return aQ }; for (aN = 0; aN < aO.length; aN++) { if (aL) { if (aO.charAt(aN) === "'" && !aK("'")) { aL = false } else { aM += aO.charAt(aN) } } else { switch (aO.charAt(aN)) {
                        case "d":
                        case "m":
                        case "y":
                        case "@":
                            aM += "0123456789"; break;
                        case "D":
                        case "M":
                            return null;
                        case "'":
                            if (aK("'")) { aM += "'" } else { aL = true } break;
                        default:
                            aM += aO.charAt(aN) } } } return aM }, _get: function(aL, aK) { return aL.settings[aK] !== undefined ? aL.settings[aK] : this._defaults[aK] }, _setDateFromField: function(aP, aM) { if (aP.input.val() === aP.lastVal) { return } var aK = this._get(aP, "dateFormat"),
                aR = aP.lastVal = aP.input ? aP.input.val() : null,
                aQ = this._getDefaultDate(aP),
                aL = aQ,
                aN = this._getFormatConfig(aP); try { aL = this.parseDate(aK, aR, aN) || aQ } catch (aO) { aR = (aM ? "" : aR) }
            aP.selectedDay = aL.getDate();
            aP.drawMonth = aP.selectedMonth = aL.getMonth();
            aP.drawYear = aP.selectedYear = aL.getFullYear();
            aP.currentDay = (aR ? aL.getDate() : 0);
            aP.currentMonth = (aR ? aL.getMonth() : 0);
            aP.currentYear = (aR ? aL.getFullYear() : 0);
            this._adjustInstDate(aP) }, _getDefaultDate: function(aK) { return this._restrictMinMax(aK, this._determineDate(aK, this._get(aK, "defaultDate"), new Date())) }, _determineDate: function(aO, aL, aP) { var aN = function(aR) { var aQ = new Date();
                    aQ.setDate(aQ.getDate() + aR); return aQ },
                aM = function(aX) { try { return ax.datepicker.parseDate(ax.datepicker._get(aO, "dateFormat"), aX, ax.datepicker._getFormatConfig(aO)) } catch (aW) {} var aR = (aX.toLowerCase().match(/^c/) ? ax.datepicker._getDate(aO) : null) || new Date(),
                        aS = aR.getFullYear(),
                        aV = aR.getMonth(),
                        aQ = aR.getDate(),
                        aU = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,
                        aT = aU.exec(aX); while (aT) { switch (aT[2] || "d") {
                            case "d":
                            case "D":
                                aQ += parseInt(aT[1], 10); break;
                            case "w":
                            case "W":
                                aQ += parseInt(aT[1], 10) * 7; break;
                            case "m":
                            case "M":
                                aV += parseInt(aT[1], 10);
                                aQ = Math.min(aQ, ax.datepicker._getDaysInMonth(aS, aV)); break;
                            case "y":
                            case "Y":
                                aS += parseInt(aT[1], 10);
                                aQ = Math.min(aQ, ax.datepicker._getDaysInMonth(aS, aV)); break }
                        aT = aU.exec(aX) } return new Date(aS, aV, aQ) },
                aK = (aL == null || aL === "" ? aP : (typeof aL === "string" ? aM(aL) : (typeof aL === "number" ? (isNaN(aL) ? aP : aN(aL)) : new Date(aL.getTime()))));
            aK = (aK && aK.toString() === "Invalid Date" ? aP : aK); if (aK) { aK.setHours(0);
                aK.setMinutes(0);
                aK.setSeconds(0);
                aK.setMilliseconds(0) } return this._daylightSavingAdjust(aK) }, _daylightSavingAdjust: function(aK) { if (!aK) { return null }
            aK.setHours(aK.getHours() > 12 ? aK.getHours() + 2 : 0); return aK }, _setDate: function(aQ, aN, aP) { var aK = !aN,
                aM = aQ.selectedMonth,
                aO = aQ.selectedYear,
                aL = this._restrictMinMax(aQ, this._determineDate(aQ, aN, new Date()));
            aQ.selectedDay = aQ.currentDay = aL.getDate();
            aQ.drawMonth = aQ.selectedMonth = aQ.currentMonth = aL.getMonth();
            aQ.drawYear = aQ.selectedYear = aQ.currentYear = aL.getFullYear(); if ((aM !== aQ.selectedMonth || aO !== aQ.selectedYear) && !aP) { this._notifyChange(aQ) }
            this._adjustInstDate(aQ); if (aQ.input) { aQ.input.val(aK ? "" : this._formatDate(aQ)) } }, _getDate: function(aL) { var aK = (!aL.currentYear || (aL.input && aL.input.val() === "") ? null : this._daylightSavingAdjust(new Date(aL.currentYear, aL.currentMonth, aL.currentDay))); return aK }, _attachHandlers: function(aL) { var aK = this._get(aL, "stepMonths"),
                aM = "#" + aL.id.replace(/\\\\/g, "\\");
            aL.dpDiv.find("[data-handler]").map(function() { var aN = { prev: function() { ax.datepicker._adjustDate(aM, -aK, "M") }, next: function() { ax.datepicker._adjustDate(aM, +aK, "M") }, hide: function() { ax.datepicker._hideDatepicker() }, today: function() { ax.datepicker._gotoToday(aM) }, selectDay: function() { ax.datepicker._selectDay(aM, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this); return false }, selectMonth: function() { ax.datepicker._selectMonthYear(aM, this, "M"); return false }, selectYear: function() { ax.datepicker._selectMonthYear(aM, this, "Y"); return false } };
                ax(this).on(this.getAttribute("data-event"), aN[this.getAttribute("data-handler")]) }) }, _generateHTML: function(bq) { var a3, a2, bl, bd, aO, bu, bo, bh, bx, bb, bB, aV, aX, aW, aL, bt, aT, a6, bw, bj, bC, a5, ba, aU, aP, bm, bf, bi, bg, aS, a8, aY, bp, bs, aN, bv, bz, be, aZ, br = new Date(),
                a4 = this._daylightSavingAdjust(new Date(br.getFullYear(), br.getMonth(), br.getDate())),
                by = this._get(bq, "isRTL"),
                bA = this._get(bq, "showButtonPanel"),
                bk = this._get(bq, "hideIfNoPrevNext"),
                a9 = this._get(bq, "navigationAsDateFormat"),
                a0 = this._getNumberOfMonths(bq),
                aR = this._get(bq, "showCurrentAtPos"),
                bc = this._get(bq, "stepMonths"),
                a7 = (a0[0] !== 1 || a0[1] !== 1),
                aM = this._daylightSavingAdjust((!bq.currentDay ? new Date(9999, 9, 9) : new Date(bq.currentYear, bq.currentMonth, bq.currentDay))),
                aQ = this._getMinMaxDate(bq, "min"),
                a1 = this._getMinMaxDate(bq, "max"),
                aK = bq.drawMonth - aR,
                bn = bq.drawYear; if (aK < 0) { aK += 12;
                bn-- } if (a1) { a3 = this._daylightSavingAdjust(new Date(a1.getFullYear(), a1.getMonth() - (a0[0] * a0[1]) + 1, a1.getDate()));
                a3 = (aQ && a3 < aQ ? aQ : a3); while (this._daylightSavingAdjust(new Date(bn, aK, 1)) > a3) { aK--; if (aK < 0) { aK = 11;
                        bn-- } } }
            bq.drawMonth = aK;
            bq.drawYear = bn;
            a2 = this._get(bq, "prevText");
            a2 = (!a9 ? a2 : this.formatDate(a2, this._daylightSavingAdjust(new Date(bn, aK - bc, 1)), this._getFormatConfig(bq))); if (this._canAdjustMonth(bq, -1, bn, aK)) { bl = ax("<a>").attr({ "class": "ui-datepicker-prev ui-corner-all", "data-handler": "prev", "data-event": "click", title: a2 }).append(ax("<span>").addClass("ui-icon ui-icon-circle-triangle-" + (by ? "e" : "w")).text(a2))[0].outerHTML } else { if (bk) { bl = "" } else { bl = ax("<a>").attr({ "class": "ui-datepicker-prev ui-corner-all ui-state-disabled", title: a2 }).append(ax("<span>").addClass("ui-icon ui-icon-circle-triangle-" + (by ? "e" : "w")).text(a2))[0].outerHTML } }
            bd = this._get(bq, "nextText");
            bd = (!a9 ? bd : this.formatDate(bd, this._daylightSavingAdjust(new Date(bn, aK + bc, 1)), this._getFormatConfig(bq))); if (this._canAdjustMonth(bq, +1, bn, aK)) { aO = ax("<a>").attr({ "class": "ui-datepicker-next ui-corner-all", "data-handler": "next", "data-event": "click", title: bd }).append(ax("<span>").addClass("ui-icon ui-icon-circle-triangle-" + (by ? "w" : "e")).text(bd))[0].outerHTML } else { if (bk) { aO = "" } else { aO = ax("<a>").attr({ "class": "ui-datepicker-next ui-corner-all ui-state-disabled", title: bd }).append(ax("<span>").attr("class", "ui-icon ui-icon-circle-triangle-" + (by ? "w" : "e")).text(bd))[0].outerHTML } }
            bu = this._get(bq, "currentText");
            bo = (this._get(bq, "gotoCurrent") && bq.currentDay ? aM : a4);
            bu = (!a9 ? bu : this.formatDate(bu, bo, this._getFormatConfig(bq)));
            bh = ""; if (!bq.inline) { bh = ax("<button>").attr({ type: "button", "class": "ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all", "data-handler": "hide", "data-event": "click" }).text(this._get(bq, "closeText"))[0].outerHTML }
            bx = ""; if (bA) { bx = ax("<div class='ui-datepicker-buttonpane ui-widget-content'>").append(by ? bh : "").append(this._isInRange(bq, bo) ? ax("<button>").attr({ type: "button", "class": "ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all", "data-handler": "today", "data-event": "click" }).text(bu) : "").append(by ? "" : bh)[0].outerHTML }
            bb = parseInt(this._get(bq, "firstDay"), 10);
            bb = (isNaN(bb) ? 0 : bb);
            bB = this._get(bq, "showWeek");
            aV = this._get(bq, "dayNames");
            aX = this._get(bq, "dayNamesMin");
            aW = this._get(bq, "monthNames");
            aL = this._get(bq, "monthNamesShort");
            bt = this._get(bq, "beforeShowDay");
            aT = this._get(bq, "showOtherMonths");
            a6 = this._get(bq, "selectOtherMonths");
            bw = this._getDefaultDate(bq);
            bj = ""; for (a5 = 0; a5 < a0[0]; a5++) { ba = "";
                this.maxRows = 4; for (aU = 0; aU < a0[1]; aU++) { aP = this._daylightSavingAdjust(new Date(bn, aK, bq.selectedDay));
                    bm = " ui-corner-all";
                    bf = ""; if (a7) { bf += "<div class='ui-datepicker-group"; if (a0[1] > 1) { switch (aU) {
                                case 0:
                                    bf += " ui-datepicker-group-first";
                                    bm = " ui-corner-" + (by ? "right" : "left"); break;
                                case a0[1] - 1:
                                    bf += " ui-datepicker-group-last";
                                    bm = " ui-corner-" + (by ? "left" : "right"); break;
                                default:
                                    bf += " ui-datepicker-group-middle";
                                    bm = ""; break } }
                        bf += "'>" }
                    bf += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + bm + "'>" + (/all|left/.test(bm) && a5 === 0 ? (by ? aO : bl) : "") + (/all|right/.test(bm) && a5 === 0 ? (by ? bl : aO) : "") + this._generateMonthYearHeader(bq, aK, bn, aQ, a1, a5 > 0 || aU > 0, aW, aL) + "</div><table class='ui-datepicker-calendar'><thead><tr>";
                    bi = (bB ? "<th class='ui-datepicker-week-col'>" + this._get(bq, "weekHeader") + "</th>" : ""); for (bC = 0; bC < 7; bC++) { bg = (bC + bb) % 7;
                        bi += "<th scope='col'" + ((bC + bb + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + aV[bg] + "'>" + aX[bg] + "</span></th>" }
                    bf += bi + "</tr></thead><tbody>";
                    aS = this._getDaysInMonth(bn, aK); if (bn === bq.selectedYear && aK === bq.selectedMonth) { bq.selectedDay = Math.min(bq.selectedDay, aS) }
                    a8 = (this._getFirstDayOfMonth(bn, aK) - bb + 7) % 7;
                    aY = Math.ceil((a8 + aS) / 7);
                    bp = (a7 ? this.maxRows > aY ? this.maxRows : aY : aY);
                    this.maxRows = bp;
                    bs = this._daylightSavingAdjust(new Date(bn, aK, 1 - a8)); for (aN = 0; aN < bp; aN++) { bf += "<tr>";
                        bv = (!bB ? "" : "<td class='ui-datepicker-week-col'>" + this._get(bq, "calculateWeek")(bs) + "</td>"); for (bC = 0; bC < 7; bC++) { bz = (bt ? bt.apply((bq.input ? bq.input[0] : null), [bs]) : [true, ""]);
                            be = (bs.getMonth() !== aK);
                            aZ = (be && !a6) || !bz[0] || (aQ && bs < aQ) || (a1 && bs > a1);
                            bv += "<td class='" + ((bC + bb + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (be ? " ui-datepicker-other-month" : "") + ((bs.getTime() === aP.getTime() && aK === bq.selectedMonth && bq._keyEvent) || (bw.getTime() === bs.getTime() && bw.getTime() === aP.getTime()) ? " " + this._dayOverClass : "") + (aZ ? " " + this._unselectableClass + " ui-state-disabled" : "") + (be && !aT ? "" : " " + bz[1] + (bs.getTime() === aM.getTime() ? " " + this._currentClass : "") + (bs.getTime() === a4.getTime() ? " ui-datepicker-today" : "")) + "'" + ((!be || aT) && bz[2] ? " title='" + bz[2].replace(/'/g, "&#39;") + "'" : "") + (aZ ? "" : " data-handler='selectDay' data-event='click' data-month='" + bs.getMonth() + "' data-year='" + bs.getFullYear() + "'") + ">" + (be && !aT ? "&#xa0;" : (aZ ? "<span class='ui-state-default'>" + bs.getDate() + "</span>" : "<a class='ui-state-default" + (bs.getTime() === a4.getTime() ? " ui-state-highlight" : "") + (bs.getTime() === aM.getTime() ? " ui-state-active" : "") + (be ? " ui-priority-secondary" : "") + "' href='#' aria-current='" + (bs.getTime() === aM.getTime() ? "true" : "false") + "' data-date='" + bs.getDate() + "'>" + bs.getDate() + "</a>")) + "</td>";
                            bs.setDate(bs.getDate() + 1);
                            bs = this._daylightSavingAdjust(bs) }
                        bf += bv + "</tr>" }
                    aK++; if (aK > 11) { aK = 0;
                        bn++ }
                    bf += "</tbody></table>" + (a7 ? "</div>" + ((a0[0] > 0 && aU === a0[1] - 1) ? "<div class='ui-datepicker-row-break'></div>" : "") : "");
                    ba += bf }
                bj += ba }
            bj += bx;
            bq._keyEvent = false; return bj }, _generateMonthYearHeader: function(aP, aM, aX, aR, aV, aZ, aT, aK) { var a3, aL, a4, a1, aQ, a0, aW, aS, aN = this._get(aP, "changeMonth"),
                a5 = this._get(aP, "changeYear"),
                a6 = this._get(aP, "showMonthAfterYear"),
                aO = this._get(aP, "selectMonthLabel"),
                aY = this._get(aP, "selectYearLabel"),
                aU = "<div class='ui-datepicker-title'>",
                a2 = ""; if (aZ || !aN) { a2 += "<span class='ui-datepicker-month'>" + aT[aM] + "</span>" } else { a3 = (aR && aR.getFullYear() === aX);
                aL = (aV && aV.getFullYear() === aX);
                a2 += "<select class='ui-datepicker-month' aria-label='" + aO + "' data-handler='selectMonth' data-event='change'>"; for (a4 = 0; a4 < 12; a4++) { if ((!a3 || a4 >= aR.getMonth()) && (!aL || a4 <= aV.getMonth())) { a2 += "<option value='" + a4 + "'" + (a4 === aM ? " selected='selected'" : "") + ">" + aK[a4] + "</option>" } }
                a2 += "</select>" } if (!a6) { aU += a2 + (aZ || !(aN && a5) ? "&#xa0;" : "") } if (!aP.yearshtml) { aP.yearshtml = ""; if (aZ || !a5) { aU += "<span class='ui-datepicker-year'>" + aX + "</span>" } else { a1 = this._get(aP, "yearRange").split(":");
                    aQ = new Date().getFullYear();
                    a0 = function(a8) { var a7 = (a8.match(/c[+\-].*/) ? aX + parseInt(a8.substring(1), 10) : (a8.match(/[+\-].*/) ? aQ + parseInt(a8, 10) : parseInt(a8, 10))); return (isNaN(a7) ? aQ : a7) };
                    aW = a0(a1[0]);
                    aS = Math.max(aW, a0(a1[1] || ""));
                    aW = (aR ? Math.max(aW, aR.getFullYear()) : aW);
                    aS = (aV ? Math.min(aS, aV.getFullYear()) : aS);
                    aP.yearshtml += "<select class='ui-datepicker-year' aria-label='" + aY + "' data-handler='selectYear' data-event='change'>"; for (; aW <= aS; aW++) { aP.yearshtml += "<option value='" + aW + "'" + (aW === aX ? " selected='selected'" : "") + ">" + aW + "</option>" }
                    aP.yearshtml += "</select>";
                    aU += aP.yearshtml;
                    aP.yearshtml = null } }
            aU += this._get(aP, "yearSuffix"); if (a6) { aU += (aZ || !(aN && a5) ? "&#xa0;" : "") + a2 }
            aU += "</div>"; return aU }, _adjustInstDate: function(aN, aQ, aP) { var aM = aN.selectedYear + (aP === "Y" ? aQ : 0),
                aO = aN.selectedMonth + (aP === "M" ? aQ : 0),
                aK = Math.min(aN.selectedDay, this._getDaysInMonth(aM, aO)) + (aP === "D" ? aQ : 0),
                aL = this._restrictMinMax(aN, this._daylightSavingAdjust(new Date(aM, aO, aK)));
            aN.selectedDay = aL.getDate();
            aN.drawMonth = aN.selectedMonth = aL.getMonth();
            aN.drawYear = aN.selectedYear = aL.getFullYear(); if (aP === "M" || aP === "Y") { this._notifyChange(aN) } }, _restrictMinMax: function(aN, aL) { var aM = this._getMinMaxDate(aN, "min"),
                aO = this._getMinMaxDate(aN, "max"),
                aK = (aM && aL < aM ? aM : aL); return (aO && aK > aO ? aO : aK) }, _notifyChange: function(aL) { var aK = this._get(aL, "onChangeMonthYear"); if (aK) { aK.apply((aL.input ? aL.input[0] : null), [aL.selectedYear, aL.selectedMonth + 1, aL]) } }, _getNumberOfMonths: function(aL) { var aK = this._get(aL, "numberOfMonths"); return (aK == null ? [1, 1] : (typeof aK === "number" ? [1, aK] : aK)) }, _getMinMaxDate: function(aL, aK) { return this._determineDate(aL, this._get(aL, aK + "Date"), null) }, _getDaysInMonth: function(aK, aL) { return 32 - this._daylightSavingAdjust(new Date(aK, aL, 32)).getDate() }, _getFirstDayOfMonth: function(aK, aL) { return new Date(aK, aL, 1).getDay() }, _canAdjustMonth: function(aN, aP, aM, aO) { var aK = this._getNumberOfMonths(aN),
                aL = this._daylightSavingAdjust(new Date(aM, aO + (aP < 0 ? aP : aK[0] * aK[1]), 1)); if (aP < 0) { aL.setDate(this._getDaysInMonth(aL.getFullYear(), aL.getMonth())) } return this._isInRange(aN, aL) }, _isInRange: function(aO, aM) { var aL, aR, aN = this._getMinMaxDate(aO, "min"),
                aK = this._getMinMaxDate(aO, "max"),
                aS = null,
                aP = null,
                aQ = this._get(aO, "yearRange"); if (aQ) { aL = aQ.split(":");
                aR = new Date().getFullYear();
                aS = parseInt(aL[0], 10);
                aP = parseInt(aL[1], 10); if (aL[0].match(/[+\-].*/)) { aS += aR } if (aL[1].match(/[+\-].*/)) { aP += aR } } return ((!aN || aM.getTime() >= aN.getTime()) && (!aK || aM.getTime() <= aK.getTime()) && (!aS || aM.getFullYear() >= aS) && (!aP || aM.getFullYear() <= aP)) }, _getFormatConfig: function(aK) { var aL = this._get(aK, "shortYearCutoff");
            aL = (typeof aL !== "string" ? aL : new Date().getFullYear() % 100 + parseInt(aL, 10)); return { shortYearCutoff: aL, dayNamesShort: this._get(aK, "dayNamesShort"), dayNames: this._get(aK, "dayNames"), monthNamesShort: this._get(aK, "monthNamesShort"), monthNames: this._get(aK, "monthNames") } }, _formatDate: function(aN, aK, aO, aM) { if (!aK) { aN.currentDay = aN.selectedDay;
                aN.currentMonth = aN.selectedMonth;
                aN.currentYear = aN.selectedYear } var aL = (aK ? (typeof aK === "object" ? aK : this._daylightSavingAdjust(new Date(aM, aO, aK))) : this._daylightSavingAdjust(new Date(aN.currentYear, aN.currentMonth, aN.currentDay))); return this.formatDate(this._get(aN, "dateFormat"), aL, this._getFormatConfig(aN)) } });

    function af(aL) { var aK = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a"; return aL.on("mouseout", aK, function() { ax(this).removeClass("ui-state-hover"); if (this.className.indexOf("ui-datepicker-prev") !== -1) { ax(this).removeClass("ui-datepicker-prev-hover") } if (this.className.indexOf("ui-datepicker-next") !== -1) { ax(this).removeClass("ui-datepicker-next-hover") } }).on("mouseover", aK, R) }

    function R() { if (!ax.datepicker._isDisabledDatepicker(aF.inline ? aF.dpDiv.parent()[0] : aF.input[0])) { ax(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover");
            ax(this).addClass("ui-state-hover"); if (this.className.indexOf("ui-datepicker-prev") !== -1) { ax(this).addClass("ui-datepicker-prev-hover") } if (this.className.indexOf("ui-datepicker-next") !== -1) { ax(this).addClass("ui-datepicker-next-hover") } } }

    function L(aM, aL) { ax.extend(aM, aL); for (var aK in aL) { if (aL[aK] == null) { aM[aK] = aL[aK] } } return aM }
    ax.fn.datepicker = function(aL) { if (!this.length) { return this } if (!ax.datepicker.initialized) { ax(document).on("mousedown", ax.datepicker._checkExternalClick);
            ax.datepicker.initialized = true } if (ax("#" + ax.datepicker._mainDivId).length === 0) { ax("body").append(ax.datepicker.dpDiv) } var aK = Array.prototype.slice.call(arguments, 1); if (typeof aL === "string" && (aL === "isDisabled" || aL === "getDate" || aL === "widget")) { return ax.datepicker["_" + aL + "Datepicker"].apply(ax.datepicker, [this[0]].concat(aK)) } if (aL === "option" && arguments.length === 2 && typeof arguments[1] === "string") { return ax.datepicker["_" + aL + "Datepicker"].apply(ax.datepicker, [this[0]].concat(aK)) } return this.each(function() { if (typeof aL === "string") { ax.datepicker["_" + aL + "Datepicker"].apply(ax.datepicker, [this].concat(aK)) } else { ax.datepicker._attachDatepicker(this, aL) } }) };
    ax.datepicker = new W();
    ax.datepicker.initialized = false;
    ax.datepicker.uuid = new Date().getTime();
    ax.datepicker.version = "1.13.0";
    var j = ax.datepicker;
    /*!
     * jQuery UI Dialog 1.13.0
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */
    ax.widget("ui.dialog", { version: "1.13.0", options: { appendTo: "body", autoOpen: true, buttons: [], classes: { "ui-dialog": "ui-corner-all", "ui-dialog-titlebar": "ui-corner-all" }, closeOnEscape: true, closeText: "Close", draggable: true, hide: null, height: "auto", maxHeight: null, maxWidth: null, minHeight: 150, minWidth: 150, modal: false, position: { my: "center", at: "center", of: window, collision: "fit", using: function(aL) { var aK = ax(this).css(aL).offset().top; if (aK < 0) { ax(this).css("top", aL.top - aK) } } }, resizable: true, show: null, title: null, width: 300, beforeClose: null, close: null, drag: null, dragStart: null, dragStop: null, focus: null, open: null, resize: null, resizeStart: null, resizeStop: null }, sizeRelatedOptions: { buttons: true, height: true, maxHeight: true, maxWidth: true, minHeight: true, minWidth: true, width: true }, resizableRelatedOptions: { maxHeight: true, maxWidth: true, minHeight: true, minWidth: true }, _create: function() { this.originalCss = { display: this.element[0].style.display, width: this.element[0].style.width, minHeight: this.element[0].style.minHeight, maxHeight: this.element[0].style.maxHeight, height: this.element[0].style.height };
            this.originalPosition = { parent: this.element.parent(), index: this.element.parent().children().index(this.element) };
            this.originalTitle = this.element.attr("title"); if (this.options.title == null && this.originalTitle != null) { this.options.title = this.originalTitle } if (this.options.disabled) { this.options.disabled = false }
            this._createWrapper();
            this.element.show().removeAttr("title").appendTo(this.uiDialog);
            this._addClass("ui-dialog-content", "ui-widget-content");
            this._createTitlebar();
            this._createButtonPane(); if (this.options.draggable && ax.fn.draggable) { this._makeDraggable() } if (this.options.resizable && ax.fn.resizable) { this._makeResizable() }
            this._isOpen = false;
            this._trackFocus() }, _init: function() { if (this.options.autoOpen) { this.open() } }, _appendTo: function() { var aK = this.options.appendTo; if (aK && (aK.jquery || aK.nodeType)) { return ax(aK) } return this.document.find(aK || "body").eq(0) }, _destroy: function() { var aL, aK = this.originalPosition;
            this._untrackInstance();
            this._destroyOverlay();
            this.element.removeUniqueId().css(this.originalCss).detach();
            this.uiDialog.remove(); if (this.originalTitle) { this.element.attr("title", this.originalTitle) }
            aL = aK.parent.children().eq(aK.index); if (aL.length && aL[0] !== this.element[0]) { aL.before(this.element) } else { aK.parent.append(this.element) } }, widget: function() { return this.uiDialog }, disable: ax.noop, enable: ax.noop, close: function(aL) { var aK = this; if (!this._isOpen || this._trigger("beforeClose", aL) === false) { return }
            this._isOpen = false;
            this._focusedElement = null;
            this._destroyOverlay();
            this._untrackInstance(); if (!this.opener.filter(":focusable").trigger("focus").length) { ax.ui.safeBlur(ax.ui.safeActiveElement(this.document[0])) }
            this._hide(this.uiDialog, this.options.hide, function() { aK._trigger("close", aL) }) }, isOpen: function() { return this._isOpen }, moveToTop: function() { this._moveToTop() }, _moveToTop: function(aO, aK) { var aN = false,
                aM = this.uiDialog.siblings(".ui-front:visible").map(function() { return +ax(this).css("z-index") }).get(),
                aL = Math.max.apply(null, aM); if (aL >= +this.uiDialog.css("z-index")) { this.uiDialog.css("z-index", aL + 1);
                aN = true } if (aN && !aK) { this._trigger("focus", aO) } return aN }, open: function() { var aK = this; if (this._isOpen) { if (this._moveToTop()) { this._focusTabbable() } return }
            this._isOpen = true;
            this.opener = ax(ax.ui.safeActiveElement(this.document[0]));
            this._size();
            this._position();
            this._createOverlay();
            this._moveToTop(null, true); if (this.overlay) { this.overlay.css("z-index", this.uiDialog.css("z-index") - 1) }
            this._show(this.uiDialog, this.options.show, function() { aK._focusTabbable();
                aK._trigger("focus") });
            this._makeFocusTarget();
            this._trigger("open") }, _focusTabbable: function() { var aK = this._focusedElement; if (!aK) { aK = this.element.find("[autofocus]") } if (!aK.length) { aK = this.element.find(":tabbable") } if (!aK.length) { aK = this.uiDialogButtonPane.find(":tabbable") } if (!aK.length) { aK = this.uiDialogTitlebarClose.filter(":tabbable") } if (!aK.length) { aK = this.uiDialog }
            aK.eq(0).trigger("focus") }, _restoreTabbableFocus: function() { var aL = ax.ui.safeActiveElement(this.document[0]),
                aK = this.uiDialog[0] === aL || ax.contains(this.uiDialog[0], aL); if (!aK) { this._focusTabbable() } }, _keepFocus: function(aK) { aK.preventDefault();
            this._restoreTabbableFocus();
            this._delay(this._restoreTabbableFocus) }, _createWrapper: function() { this.uiDialog = ax("<div>").hide().attr({ tabIndex: -1, role: "dialog" }).appendTo(this._appendTo());
            this._addClass(this.uiDialog, "ui-dialog", "ui-widget ui-widget-content ui-front");
            this._on(this.uiDialog, { keydown: function(aM) { if (this.options.closeOnEscape && !aM.isDefaultPrevented() && aM.keyCode && aM.keyCode === ax.ui.keyCode.ESCAPE) { aM.preventDefault();
                        this.close(aM); return } if (aM.keyCode !== ax.ui.keyCode.TAB || aM.isDefaultPrevented()) { return } var aL = this.uiDialog.find(":tabbable"),
                        aN = aL.first(),
                        aK = aL.last(); if ((aM.target === aK[0] || aM.target === this.uiDialog[0]) && !aM.shiftKey) { this._delay(function() { aN.trigger("focus") });
                        aM.preventDefault() } else { if ((aM.target === aN[0] || aM.target === this.uiDialog[0]) && aM.shiftKey) { this._delay(function() { aK.trigger("focus") });
                            aM.preventDefault() } } }, mousedown: function(aK) { if (this._moveToTop(aK)) { this._focusTabbable() } } }); if (!this.element.find("[aria-describedby]").length) { this.uiDialog.attr({ "aria-describedby": this.element.uniqueId().attr("id") }) } }, _createTitlebar: function() { var aK;
            this.uiDialogTitlebar = ax("<div>");
            this._addClass(this.uiDialogTitlebar, "ui-dialog-titlebar", "ui-widget-header ui-helper-clearfix");
            this._on(this.uiDialogTitlebar, { mousedown: function(aL) { if (!ax(aL.target).closest(".ui-dialog-titlebar-close")) { this.uiDialog.trigger("focus") } } });
            this.uiDialogTitlebarClose = ax("<button type='button'></button>").button({ label: ax("<a>").text(this.options.closeText).html(), icon: "ui-icon-closethick", showLabel: false }).appendTo(this.uiDialogTitlebar);
            this._addClass(this.uiDialogTitlebarClose, "ui-dialog-titlebar-close");
            this._on(this.uiDialogTitlebarClose, { click: function(aL) { aL.preventDefault();
                    this.close(aL) } });
            aK = ax("<span>").uniqueId().prependTo(this.uiDialogTitlebar);
            this._addClass(aK, "ui-dialog-title");
            this._title(aK);
            this.uiDialogTitlebar.prependTo(this.uiDialog);
            this.uiDialog.attr({ "aria-labelledby": aK.attr("id") }) }, _title: function(aK) { if (this.options.title) { aK.text(this.options.title) } else { aK.html("&#160;") } }, _createButtonPane: function() { this.uiDialogButtonPane = ax("<div>");
            this._addClass(this.uiDialogButtonPane, "ui-dialog-buttonpane", "ui-widget-content ui-helper-clearfix");
            this.uiButtonSet = ax("<div>").appendTo(this.uiDialogButtonPane);
            this._addClass(this.uiButtonSet, "ui-dialog-buttonset");
            this._createButtons() }, _createButtons: function() { var aL = this,
                aK = this.options.buttons;
            this.uiDialogButtonPane.remove();
            this.uiButtonSet.empty(); if (ax.isEmptyObject(aK) || (Array.isArray(aK) && !aK.length)) { this._removeClass(this.uiDialog, "ui-dialog-buttons"); return }
            ax.each(aK, function(aM, aN) { var aO, aP;
                aN = typeof aN === "function" ? { click: aN, text: aM } : aN;
                aN = ax.extend({ type: "button" }, aN);
                aO = aN.click;
                aP = { icon: aN.icon, iconPosition: aN.iconPosition, showLabel: aN.showLabel, icons: aN.icons, text: aN.text };
                delete aN.click;
                delete aN.icon;
                delete aN.iconPosition;
                delete aN.showLabel;
                delete aN.icons; if (typeof aN.text === "boolean") { delete aN.text }
                ax("<button></button>", aN).button(aP).appendTo(aL.uiButtonSet).on("click", function() { aO.apply(aL.element[0], arguments) }) });
            this._addClass(this.uiDialog, "ui-dialog-buttons");
            this.uiDialogButtonPane.appendTo(this.uiDialog) }, _makeDraggable: function() { var aM = this,
                aL = this.options;

            function aK(aN) { return { position: aN.position, offset: aN.offset } }
            this.uiDialog.draggable({ cancel: ".ui-dialog-content, .ui-dialog-titlebar-close", handle: ".ui-dialog-titlebar", containment: "document", start: function(aN, aO) { aM._addClass(ax(this), "ui-dialog-dragging");
                    aM._blockFrames();
                    aM._trigger("dragStart", aN, aK(aO)) }, drag: function(aN, aO) { aM._trigger("drag", aN, aK(aO)) }, stop: function(aN, aO) { var aQ = aO.offset.left - aM.document.scrollLeft(),
                        aP = aO.offset.top - aM.document.scrollTop();
                    aL.position = { my: "left top", at: "left" + (aQ >= 0 ? "+" : "") + aQ + " top" + (aP >= 0 ? "+" : "") + aP, of: aM.window };
                    aM._removeClass(ax(this), "ui-dialog-dragging");
                    aM._unblockFrames();
                    aM._trigger("dragStop", aN, aK(aO)) } }) }, _makeResizable: function() { var aP = this,
                aN = this.options,
                aO = aN.resizable,
                aK = this.uiDialog.css("position"),
                aM = typeof aO === "string" ? aO : "n,e,s,w,se,sw,ne,nw";

            function aL(aQ) { return { originalPosition: aQ.originalPosition, originalSize: aQ.originalSize, position: aQ.position, size: aQ.size } }
            this.uiDialog.resizable({ cancel: ".ui-dialog-content", containment: "document", alsoResize: this.element, maxWidth: aN.maxWidth, maxHeight: aN.maxHeight, minWidth: aN.minWidth, minHeight: this._minHeight(), handles: aM, start: function(aQ, aR) { aP._addClass(ax(this), "ui-dialog-resizing");
                    aP._blockFrames();
                    aP._trigger("resizeStart", aQ, aL(aR)) }, resize: function(aQ, aR) { aP._trigger("resize", aQ, aL(aR)) }, stop: function(aQ, aR) { var aU = aP.uiDialog.offset(),
                        aT = aU.left - aP.document.scrollLeft(),
                        aS = aU.top - aP.document.scrollTop();
                    aN.height = aP.uiDialog.height();
                    aN.width = aP.uiDialog.width();
                    aN.position = { my: "left top", at: "left" + (aT >= 0 ? "+" : "") + aT + " top" + (aS >= 0 ? "+" : "") + aS, of: aP.window };
                    aP._removeClass(ax(this), "ui-dialog-resizing");
                    aP._unblockFrames();
                    aP._trigger("resizeStop", aQ, aL(aR)) } }).css("position", aK) }, _trackFocus: function() { this._on(this.widget(), { focusin: function(aK) { this._makeFocusTarget();
                    this._focusedElement = ax(aK.target) } }) }, _makeFocusTarget: function() { this._untrackInstance();
            this._trackingInstances().unshift(this) }, _untrackInstance: function() { var aL = this._trackingInstances(),
                aK = ax.inArray(this, aL); if (aK !== -1) { aL.splice(aK, 1) } }, _trackingInstances: function() { var aK = this.document.data("ui-dialog-instances"); if (!aK) { aK = [];
                this.document.data("ui-dialog-instances", aK) } return aK }, _minHeight: function() { var aK = this.options; return aK.height === "auto" ? aK.minHeight : Math.min(aK.minHeight, aK.height) }, _position: function() { var aK = this.uiDialog.is(":visible"); if (!aK) { this.uiDialog.show() }
            this.uiDialog.position(this.options.position); if (!aK) { this.uiDialog.hide() } }, _setOptions: function(aM) { var aN = this,
                aL = false,
                aK = {};
            ax.each(aM, function(aO, aP) { aN._setOption(aO, aP); if (aO in aN.sizeRelatedOptions) { aL = true } if (aO in aN.resizableRelatedOptions) { aK[aO] = aP } }); if (aL) { this._size();
                this._position() } if (this.uiDialog.is(":data(ui-resizable)")) { this.uiDialog.resizable("option", aK) } }, _setOption: function(aM, aN) { var aL, aO, aK = this.uiDialog; if (aM === "disabled") { return }
            this._super(aM, aN); if (aM === "appendTo") { this.uiDialog.appendTo(this._appendTo()) } if (aM === "buttons") { this._createButtons() } if (aM === "closeText") { this.uiDialogTitlebarClose.button({ label: ax("<a>").text("" + this.options.closeText).html() }) } if (aM === "draggable") { aL = aK.is(":data(ui-draggable)"); if (aL && !aN) { aK.draggable("destroy") } if (!aL && aN) { this._makeDraggable() } } if (aM === "position") { this._position() } if (aM === "resizable") { aO = aK.is(":data(ui-resizable)"); if (aO && !aN) { aK.resizable("destroy") } if (aO && typeof aN === "string") { aK.resizable("option", "handles", aN) } if (!aO && aN !== false) { this._makeResizable() } } if (aM === "title") { this._title(this.uiDialogTitlebar.find(".ui-dialog-title")) } }, _size: function() { var aK, aM, aN, aL = this.options;
            this.element.show().css({ width: "auto", minHeight: 0, maxHeight: "none", height: 0 }); if (aL.minWidth > aL.width) { aL.width = aL.minWidth }
            aK = this.uiDialog.css({ height: "auto", width: aL.width }).outerHeight();
            aM = Math.max(0, aL.minHeight - aK);
            aN = typeof aL.maxHeight === "number" ? Math.max(0, aL.maxHeight - aK) : "none"; if (aL.height === "auto") { this.element.css({ minHeight: aM, maxHeight: aN, height: "auto" }) } else { this.element.height(Math.max(0, aL.height - aK)) } if (this.uiDialog.is(":data(ui-resizable)")) { this.uiDialog.resizable("option", "minHeight", this._minHeight()) } }, _blockFrames: function() { this.iframeBlocks = this.document.find("iframe").map(function() { var aK = ax(this); return ax("<div>").css({ position: "absolute", width: aK.outerWidth(), height: aK.outerHeight() }).appendTo(aK.parent()).offset(aK.offset())[0] }) }, _unblockFrames: function() { if (this.iframeBlocks) { this.iframeBlocks.remove();
                delete this.iframeBlocks } }, _allowInteraction: function(aK) { if (ax(aK.target).closest(".ui-dialog").length) { return true } return !!ax(aK.target).closest(".ui-datepicker").length }, _createOverlay: function() { if (!this.options.modal) { return } var aK = ax.fn.jquery.substring(0, 4); var aL = true;
            this._delay(function() { aL = false }); if (!this.document.data("ui-dialog-overlays")) { this.document.on("focusin.ui-dialog", function(aN) { if (aL) { return } var aM = this._trackingInstances()[0]; if (!aM._allowInteraction(aN)) { aN.preventDefault();
                        aM._focusTabbable(); if (aK === "3.4." || aK === "3.5.") { aM._delay(aM._restoreTabbableFocus) } } }.bind(this)) }
            this.overlay = ax("<div>").appendTo(this._appendTo());
            this._addClass(this.overlay, null, "ui-widget-overlay ui-front");
            this._on(this.overlay, { mousedown: "_keepFocus" });
            this.document.data("ui-dialog-overlays", (this.document.data("ui-dialog-overlays") || 0) + 1) }, _destroyOverlay: function() { if (!this.options.modal) { return } if (this.overlay) { var aK = this.document.data("ui-dialog-overlays") - 1; if (!aK) { this.document.off("focusin.ui-dialog");
                    this.document.removeData("ui-dialog-overlays") } else { this.document.data("ui-dialog-overlays", aK) }
                this.overlay.remove();
                this.overlay = null } } });
    if (ax.uiBackCompat !== false) { ax.widget("ui.dialog", ax.ui.dialog, { options: { dialogClass: "" }, _createWrapper: function() { this._super();
                this.uiDialog.addClass(this.options.dialogClass) }, _setOption: function(aK, aL) { if (aK === "dialogClass") { this.uiDialog.removeClass(this.options.dialogClass).addClass(aL) }
                this._superApply(arguments) } }) }
    var ak = ax.ui.dialog;
    /*!
     * jQuery UI Progressbar 1.13.0
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */
    var ag = ax.widget("ui.progressbar", { version: "1.13.0", options: { classes: { "ui-progressbar": "ui-corner-all", "ui-progressbar-value": "ui-corner-left", "ui-progressbar-complete": "ui-corner-right" }, max: 100, value: 0, change: null, complete: null }, min: 0, _create: function() { this.oldValue = this.options.value = this._constrainedValue();
            this.element.attr({ role: "progressbar", "aria-valuemin": this.min });
            this._addClass("ui-progressbar", "ui-widget ui-widget-content");
            this.valueDiv = ax("<div>").appendTo(this.element);
            this._addClass(this.valueDiv, "ui-progressbar-value", "ui-widget-header");
            this._refreshValue() }, _destroy: function() { this.element.removeAttr("role aria-valuemin aria-valuemax aria-valuenow");
            this.valueDiv.remove() }, value: function(aK) { if (aK === undefined) { return this.options.value }
            this.options.value = this._constrainedValue(aK);
            this._refreshValue() }, _constrainedValue: function(aK) { if (aK === undefined) { aK = this.options.value }
            this.indeterminate = aK === false; if (typeof aK !== "number") { aK = 0 } return this.indeterminate ? false : Math.min(this.options.max, Math.max(this.min, aK)) }, _setOptions: function(aK) { var aL = aK.value;
            delete aK.value;
            this._super(aK);
            this.options.value = this._constrainedValue(aL);
            this._refreshValue() }, _setOption: function(aK, aL) { if (aK === "max") { aL = Math.max(this.min, aL) }
            this._super(aK, aL) }, _setOptionDisabled: function(aK) { this._super(aK);
            this.element.attr("aria-disabled", aK);
            this._toggleClass(null, "ui-state-disabled", !!aK) }, _percentage: function() { return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min) }, _refreshValue: function() { var aL = this.options.value,
                aK = this._percentage();
            this.valueDiv.toggle(this.indeterminate || aL > this.min).width(aK.toFixed(0) + "%");
            this._toggleClass(this.valueDiv, "ui-progressbar-complete", null, aL === this.options.max)._toggleClass("ui-progressbar-indeterminate", null, this.indeterminate); if (this.indeterminate) { this.element.removeAttr("aria-valuenow"); if (!this.overlayDiv) { this.overlayDiv = ax("<div>").appendTo(this.valueDiv);
                    this._addClass(this.overlayDiv, "ui-progressbar-overlay") } } else { this.element.attr({ "aria-valuemax": this.options.max, "aria-valuenow": aL }); if (this.overlayDiv) { this.overlayDiv.remove();
                    this.overlayDiv = null } } if (this.oldValue !== aL) { this.oldValue = aL;
                this._trigger("change") } if (aL === this.options.max) { this._trigger("complete") } } });
    /*!
     * jQuery UI Selectmenu 1.13.0
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */
    var e = ax.widget("ui.selectmenu", [ax.ui.formResetMixin, { version: "1.13.0", defaultElement: "<select>", options: { appendTo: null, classes: { "ui-selectmenu-button-open": "ui-corner-top", "ui-selectmenu-button-closed": "ui-corner-all" }, disabled: null, icons: { button: "ui-icon-triangle-1-s" }, position: { my: "left top", at: "left bottom", collision: "none" }, width: false, change: null, close: null, focus: null, open: null, select: null }, _create: function() { var aK = this.element.uniqueId().attr("id");
            this.ids = { element: aK, button: aK + "-button", menu: aK + "-menu" };
            this._drawButton();
            this._drawMenu();
            this._bindFormResetHandler();
            this._rendered = false;
            this.menuItems = ax() }, _drawButton: function() { var aK, aM = this,
                aL = this._parseOption(this.element.find("option:selected"), this.element[0].selectedIndex);
            this.labels = this.element.labels().attr("for", this.ids.button);
            this._on(this.labels, { click: function(aN) { this.button.trigger("focus");
                    aN.preventDefault() } });
            this.element.hide();
            this.button = ax("<span>", { tabindex: this.options.disabled ? -1 : 0, id: this.ids.button, role: "combobox", "aria-expanded": "false", "aria-autocomplete": "list", "aria-owns": this.ids.menu, "aria-haspopup": "true", title: this.element.attr("title") }).insertAfter(this.element);
            this._addClass(this.button, "ui-selectmenu-button ui-selectmenu-button-closed", "ui-button ui-widget");
            aK = ax("<span>").appendTo(this.button);
            this._addClass(aK, "ui-selectmenu-icon", "ui-icon " + this.options.icons.button);
            this.buttonItem = this._renderButtonItem(aL).appendTo(this.button); if (this.options.width !== false) { this._resizeButton() }
            this._on(this.button, this._buttonEvents);
            this.button.one("focusin", function() { if (!aM._rendered) { aM._refreshMenu() } }) }, _drawMenu: function() { var aK = this;
            this.menu = ax("<ul>", { "aria-hidden": "true", "aria-labelledby": this.ids.button, id: this.ids.menu });
            this.menuWrap = ax("<div>").append(this.menu);
            this._addClass(this.menuWrap, "ui-selectmenu-menu", "ui-front");
            this.menuWrap.appendTo(this._appendTo());
            this.menuInstance = this.menu.menu({ classes: { "ui-menu": "ui-corner-bottom" }, role: "listbox", select: function(aL, aM) { aL.preventDefault();
                    aK._setSelection();
                    aK._select(aM.item.data("ui-selectmenu-item"), aL) }, focus: function(aM, aN) { var aL = aN.item.data("ui-selectmenu-item"); if (aK.focusIndex != null && aL.index !== aK.focusIndex) { aK._trigger("focus", aM, { item: aL }); if (!aK.isOpen) { aK._select(aL, aM) } }
                    aK.focusIndex = aL.index;
                    aK.button.attr("aria-activedescendant", aK.menuItems.eq(aL.index).attr("id")) } }).menu("instance");
            this.menuInstance._off(this.menu, "mouseleave");
            this.menuInstance._closeOnDocumentClick = function() { return false };
            this.menuInstance._isDivider = function() { return false } }, refresh: function() { this._refreshMenu();
            this.buttonItem.replaceWith(this.buttonItem = this._renderButtonItem(this._getSelectedItem().data("ui-selectmenu-item") || {})); if (this.options.width === null) { this._resizeButton() } }, _refreshMenu: function() { var aL, aK = this.element.find("option");
            this.menu.empty();
            this._parseOptions(aK);
            this._renderMenu(this.menu, this.items);
            this.menuInstance.refresh();
            this.menuItems = this.menu.find("li").not(".ui-selectmenu-optgroup").find(".ui-menu-item-wrapper");
            this._rendered = true; if (!aK.length) { return }
            aL = this._getSelectedItem();
            this.menuInstance.focus(null, aL);
            this._setAria(aL.data("ui-selectmenu-item"));
            this._setOption("disabled", this.element.prop("disabled")) }, open: function(aK) { if (this.options.disabled) { return } if (!this._rendered) { this._refreshMenu() } else { this._removeClass(this.menu.find(".ui-state-active"), null, "ui-state-active");
                this.menuInstance.focus(null, this._getSelectedItem()) } if (!this.menuItems.length) { return }
            this.isOpen = true;
            this._toggleAttr();
            this._resizeMenu();
            this._position();
            this._on(this.document, this._documentClick);
            this._trigger("open", aK) }, _position: function() { this.menuWrap.position(ax.extend({ of: this.button }, this.options.position)) }, close: function(aK) { if (!this.isOpen) { return }
            this.isOpen = false;
            this._toggleAttr();
            this.range = null;
            this._off(this.document);
            this._trigger("close", aK) }, widget: function() { return this.button }, menuWidget: function() { return this.menu }, _renderButtonItem: function(aL) { var aK = ax("<span>");
            this._setText(aK, aL.label);
            this._addClass(aK, "ui-selectmenu-text"); return aK }, _renderMenu: function(aM, aL) { var aN = this,
                aK = "";
            ax.each(aL, function(aP, aQ) { var aO; if (aQ.optgroup !== aK) { aO = ax("<li>", { text: aQ.optgroup });
                    aN._addClass(aO, "ui-selectmenu-optgroup", "ui-menu-divider" + (aQ.element.parent("optgroup").prop("disabled") ? " ui-state-disabled" : ""));
                    aO.appendTo(aM);
                    aK = aQ.optgroup }
                aN._renderItemData(aM, aQ) }) }, _renderItemData: function(aK, aL) { return this._renderItem(aK, aL).data("ui-selectmenu-item", aL) }, _renderItem: function(aL, aM) { var aK = ax("<li>"),
                aN = ax("<div>", { title: aM.element.attr("title") }); if (aM.disabled) { this._addClass(aK, null, "ui-state-disabled") }
            this._setText(aN, aM.label); return aK.append(aN).appendTo(aL) }, _setText: function(aK, aL) { if (aL) { aK.text(aL) } else { aK.html("&#160;") } }, _move: function(aO, aN) { var aM, aL, aK = ".ui-menu-item"; if (this.isOpen) { aM = this.menuItems.eq(this.focusIndex).parent("li") } else { aM = this.menuItems.eq(this.element[0].selectedIndex).parent("li");
                aK += ":not(.ui-state-disabled)" } if (aO === "first" || aO === "last") { aL = aM[aO === "first" ? "prevAll" : "nextAll"](aK).eq(-1) } else { aL = aM[aO + "All"](aK).eq(0) } if (aL.length) { this.menuInstance.focus(aN, aL) } }, _getSelectedItem: function() { return this.menuItems.eq(this.element[0].selectedIndex).parent("li") }, _toggle: function(aK) { this[this.isOpen ? "close" : "open"](aK) }, _setSelection: function() { var aK; if (!this.range) { return } if (window.getSelection) { aK = window.getSelection();
                aK.removeAllRanges();
                aK.addRange(this.range) } else { this.range.select() }
            this.button.focus() }, _documentClick: { mousedown: function(aK) { if (!this.isOpen) { return } if (!ax(aK.target).closest(".ui-selectmenu-menu, #" + ax.escapeSelector(this.ids.button)).length) { this.close(aK) } } }, _buttonEvents: { mousedown: function() { var aK; if (window.getSelection) { aK = window.getSelection(); if (aK.rangeCount) { this.range = aK.getRangeAt(0) } } else { this.range = document.selection.createRange() } }, click: function(aK) { this._setSelection();
                this._toggle(aK) }, keydown: function(aL) { var aK = true; switch (aL.keyCode) {
                    case ax.ui.keyCode.TAB:
                    case ax.ui.keyCode.ESCAPE:
                        this.close(aL);
                        aK = false; break;
                    case ax.ui.keyCode.ENTER:
                        if (this.isOpen) { this._selectFocusedItem(aL) } break;
                    case ax.ui.keyCode.UP:
                        if (aL.altKey) { this._toggle(aL) } else { this._move("prev", aL) } break;
                    case ax.ui.keyCode.DOWN:
                        if (aL.altKey) { this._toggle(aL) } else { this._move("next", aL) } break;
                    case ax.ui.keyCode.SPACE:
                        if (this.isOpen) { this._selectFocusedItem(aL) } else { this._toggle(aL) } break;
                    case ax.ui.keyCode.LEFT:
                        this._move("prev", aL); break;
                    case ax.ui.keyCode.RIGHT:
                        this._move("next", aL); break;
                    case ax.ui.keyCode.HOME:
                    case ax.ui.keyCode.PAGE_UP:
                        this._move("first", aL); break;
                    case ax.ui.keyCode.END:
                    case ax.ui.keyCode.PAGE_DOWN:
                        this._move("last", aL); break;
                    default:
                        this.menu.trigger(aL);
                        aK = false } if (aK) { aL.preventDefault() } } }, _selectFocusedItem: function(aL) { var aK = this.menuItems.eq(this.focusIndex).parent("li"); if (!aK.hasClass("ui-state-disabled")) { this._select(aK.data("ui-selectmenu-item"), aL) } }, _select: function(aL, aK) { var aM = this.element[0].selectedIndex;
            this.element[0].selectedIndex = aL.index;
            this.buttonItem.replaceWith(this.buttonItem = this._renderButtonItem(aL));
            this._setAria(aL);
            this._trigger("select", aK, { item: aL }); if (aL.index !== aM) { this._trigger("change", aK, { item: aL }) }
            this.close(aK) }, _setAria: function(aK) { var aL = this.menuItems.eq(aK.index).attr("id");
            this.button.attr({ "aria-labelledby": aL, "aria-activedescendant": aL });
            this.menu.attr("aria-activedescendant", aL) }, _setOption: function(aK, aM) { if (aK === "icons") { var aL = this.button.find("span.ui-icon");
                this._removeClass(aL, null, this.options.icons.button)._addClass(aL, null, aM.button) }
            this._super(aK, aM); if (aK === "appendTo") { this.menuWrap.appendTo(this._appendTo()) } if (aK === "width") { this._resizeButton() } }, _setOptionDisabled: function(aK) { this._super(aK);
            this.menuInstance.option("disabled", aK);
            this.button.attr("aria-disabled", aK);
            this._toggleClass(this.button, null, "ui-state-disabled", aK);
            this.element.prop("disabled", aK); if (aK) { this.button.attr("tabindex", -1);
                this.close() } else { this.button.attr("tabindex", 0) } }, _appendTo: function() { var aK = this.options.appendTo; if (aK) { aK = aK.jquery || aK.nodeType ? ax(aK) : this.document.find(aK).eq(0) } if (!aK || !aK[0]) { aK = this.element.closest(".ui-front, dialog") } if (!aK.length) { aK = this.document[0].body } return aK }, _toggleAttr: function() { this.button.attr("aria-expanded", this.isOpen);
            this._removeClass(this.button, "ui-selectmenu-button-" + (this.isOpen ? "closed" : "open"))._addClass(this.button, "ui-selectmenu-button-" + (this.isOpen ? "open" : "closed"))._toggleClass(this.menuWrap, "ui-selectmenu-open", null, this.isOpen);
            this.menu.attr("aria-hidden", !this.isOpen) }, _resizeButton: function() { var aK = this.options.width; if (aK === false) { this.button.css("width", ""); return } if (aK === null) { aK = this.element.show().outerWidth();
                this.element.hide() }
            this.button.outerWidth(aK) }, _resizeMenu: function() { this.menu.outerWidth(Math.max(this.button.outerWidth(), this.menu.width("").outerWidth() + 1)) }, _getCreateOptions: function() { var aK = this._super();
            aK.disabled = this.element.prop("disabled"); return aK }, _parseOptions: function(aK) { var aL = this,
                aM = [];
            aK.each(function(aN, aO) { if (aO.hidden) { return }
                aM.push(aL._parseOption(ax(aO), aN)) });
            this.items = aM }, _parseOption: function(aM, aL) { var aK = aM.parent("optgroup"); return { element: aM, index: aL, value: aM.val(), label: aM.text(), optgroup: aK.attr("label") || "", disabled: aK.prop("disabled") || aM.prop("disabled") } }, _destroy: function() { this._unbindFormResetHandler();
            this.menuWrap.remove();
            this.button.remove();
            this.element.show();
            this.element.removeUniqueId();
            this.labels.attr("for", this.ids.element) } }]);
    /*!
     * jQuery UI Slider 1.13.0
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */
    var X = ax.widget("ui.slider", ax.ui.mouse, { version: "1.13.0", widgetEventPrefix: "slide", options: { animate: false, classes: { "ui-slider": "ui-corner-all", "ui-slider-handle": "ui-corner-all", "ui-slider-range": "ui-corner-all ui-widget-header" }, distance: 0, max: 100, min: 0, orientation: "horizontal", range: false, step: 1, value: 0, values: null, change: null, slide: null, start: null, stop: null }, numPages: 5, _create: function() { this._keySliding = false;
            this._mouseSliding = false;
            this._animateOff = true;
            this._handleIndex = null;
            this._detectOrientation();
            this._mouseInit();
            this._calculateNewMax();
            this._addClass("ui-slider ui-slider-" + this.orientation, "ui-widget ui-widget-content");
            this._refresh();
            this._animateOff = false }, _refresh: function() { this._createRange();
            this._createHandles();
            this._setupEvents();
            this._refreshValue() }, _createHandles: function() { var aN, aK, aL = this.options,
                aP = this.element.find(".ui-slider-handle"),
                aO = "<span tabindex='0'></span>",
                aM = [];
            aK = (aL.values && aL.values.length) || 1; if (aP.length > aK) { aP.slice(aK).remove();
                aP = aP.slice(0, aK) } for (aN = aP.length; aN < aK; aN++) { aM.push(aO) }
            this.handles = aP.add(ax(aM.join("")).appendTo(this.element));
            this._addClass(this.handles, "ui-slider-handle", "ui-state-default");
            this.handle = this.handles.eq(0);
            this.handles.each(function(aQ) { ax(this).data("ui-slider-handle-index", aQ).attr("tabIndex", 0) }) }, _createRange: function() { var aK = this.options; if (aK.range) { if (aK.range === true) { if (!aK.values) { aK.values = [this._valueMin(), this._valueMin()] } else { if (aK.values.length && aK.values.length !== 2) { aK.values = [aK.values[0], aK.values[0]] } else { if (Array.isArray(aK.values)) { aK.values = aK.values.slice(0) } } } } if (!this.range || !this.range.length) { this.range = ax("<div>").appendTo(this.element);
                    this._addClass(this.range, "ui-slider-range") } else { this._removeClass(this.range, "ui-slider-range-min ui-slider-range-max");
                    this.range.css({ left: "", bottom: "" }) } if (aK.range === "min" || aK.range === "max") { this._addClass(this.range, "ui-slider-range-" + aK.range) } } else { if (this.range) { this.range.remove() }
                this.range = null } }, _setupEvents: function() { this._off(this.handles);
            this._on(this.handles, this._handleEvents);
            this._hoverable(this.handles);
            this._focusable(this.handles) }, _destroy: function() { this.handles.remove(); if (this.range) { this.range.remove() }
            this._mouseDestroy() }, _mouseCapture: function(aM) { var aQ, aT, aL, aO, aS, aU, aP, aK, aR = this,
                aN = this.options; if (aN.disabled) { return false }
            this.elementSize = { width: this.element.outerWidth(), height: this.element.outerHeight() };
            this.elementOffset = this.element.offset();
            aQ = { x: aM.pageX, y: aM.pageY };
            aT = this._normValueFromMouse(aQ);
            aL = this._valueMax() - this._valueMin() + 1;
            this.handles.each(function(aV) { var aW = Math.abs(aT - aR.values(aV)); if ((aL > aW) || (aL === aW && (aV === aR._lastChangedValue || aR.values(aV) === aN.min))) { aL = aW;
                    aO = ax(this);
                    aS = aV } });
            aU = this._start(aM, aS); if (aU === false) { return false }
            this._mouseSliding = true;
            this._handleIndex = aS;
            this._addClass(aO, null, "ui-state-active");
            aO.trigger("focus");
            aP = aO.offset();
            aK = !ax(aM.target).parents().addBack().is(".ui-slider-handle");
            this._clickOffset = aK ? { left: 0, top: 0 } : { left: aM.pageX - aP.left - (aO.width() / 2), top: aM.pageY - aP.top - (aO.height() / 2) - (parseInt(aO.css("borderTopWidth"), 10) || 0) - (parseInt(aO.css("borderBottomWidth"), 10) || 0) + (parseInt(aO.css("marginTop"), 10) || 0) }; if (!this.handles.hasClass("ui-state-hover")) { this._slide(aM, aS, aT) }
            this._animateOff = true; return true }, _mouseStart: function() { return true }, _mouseDrag: function(aM) { var aK = { x: aM.pageX, y: aM.pageY },
                aL = this._normValueFromMouse(aK);
            this._slide(aM, this._handleIndex, aL); return false }, _mouseStop: function(aK) { this._removeClass(this.handles, null, "ui-state-active");
            this._mouseSliding = false;
            this._stop(aK, this._handleIndex);
            this._change(aK, this._handleIndex);
            this._handleIndex = null;
            this._clickOffset = null;
            this._animateOff = false; return false }, _detectOrientation: function() { this.orientation = (this.options.orientation === "vertical") ? "vertical" : "horizontal" }, _normValueFromMouse: function(aL) { var aK, aO, aN, aM, aP; if (this.orientation === "horizontal") { aK = this.elementSize.width;
                aO = aL.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0) } else { aK = this.elementSize.height;
                aO = aL.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0) }
            aN = (aO / aK); if (aN > 1) { aN = 1 } if (aN < 0) { aN = 0 } if (this.orientation === "vertical") { aN = 1 - aN }
            aM = this._valueMax() - this._valueMin();
            aP = this._valueMin() + aN * aM; return this._trimAlignValue(aP) }, _uiHash: function(aM, aN, aK) { var aL = { handle: this.handles[aM], handleIndex: aM, value: aN !== undefined ? aN : this.value() }; if (this._hasMultipleValues()) { aL.value = aN !== undefined ? aN : this.values(aM);
                aL.values = aK || this.values() } return aL }, _hasMultipleValues: function() { return this.options.values && this.options.values.length }, _start: function(aL, aK) { return this._trigger("start", aL, this._uiHash(aK)) }, _slide: function(aP, aN, aM) { var aQ, aK, aO = this.value(),
                aL = this.values(); if (this._hasMultipleValues()) { aK = this.values(aN ? 0 : 1);
                aO = this.values(aN); if (this.options.values.length === 2 && this.options.range === true) { aM = aN === 0 ? Math.min(aK, aM) : Math.max(aK, aM) }
                aL[aN] = aM } if (aM === aO) { return }
            aQ = this._trigger("slide", aP, this._uiHash(aN, aM, aL)); if (aQ === false) { return } if (this._hasMultipleValues()) { this.values(aN, aM) } else { this.value(aM) } }, _stop: function(aL, aK) { this._trigger("stop", aL, this._uiHash(aK)) }, _change: function(aL, aK) { if (!this._keySliding && !this._mouseSliding) { this._lastChangedValue = aK;
                this._trigger("change", aL, this._uiHash(aK)) } }, value: function(aK) { if (arguments.length) { this.options.value = this._trimAlignValue(aK);
                this._refreshValue();
                this._change(null, 0); return } return this._value() }, values: function(aL, aO) { var aN, aK, aM; if (arguments.length > 1) { this.options.values[aL] = this._trimAlignValue(aO);
                this._refreshValue();
                this._change(null, aL); return } if (arguments.length) { if (Array.isArray(arguments[0])) { aN = this.options.values;
                    aK = arguments[0]; for (aM = 0; aM < aN.length; aM += 1) { aN[aM] = this._trimAlignValue(aK[aM]);
                        this._change(null, aM) }
                    this._refreshValue() } else { if (this._hasMultipleValues()) { return this._values(aL) } else { return this.value() } } } else { return this._values() } }, _setOption: function(aL, aM) { var aK, aN = 0; if (aL === "range" && this.options.range === true) { if (aM === "min") { this.options.value = this._values(0);
                    this.options.values = null } else { if (aM === "max") { this.options.value = this._values(this.options.values.length - 1);
                        this.options.values = null } } } if (Array.isArray(this.options.values)) { aN = this.options.values.length }
            this._super(aL, aM); switch (aL) {
                case "orientation":
                    this._detectOrientation();
                    this._removeClass("ui-slider-horizontal ui-slider-vertical")._addClass("ui-slider-" + this.orientation);
                    this._refreshValue(); if (this.options.range) { this._refreshRange(aM) }
                    this.handles.css(aM === "horizontal" ? "bottom" : "left", ""); break;
                case "value":
                    this._animateOff = true;
                    this._refreshValue();
                    this._change(null, 0);
                    this._animateOff = false; break;
                case "values":
                    this._animateOff = true;
                    this._refreshValue(); for (aK = aN - 1; aK >= 0; aK--) { this._change(null, aK) }
                    this._animateOff = false; break;
                case "step":
                case "min":
                case "max":
                    this._animateOff = true;
                    this._calculateNewMax();
                    this._refreshValue();
                    this._animateOff = false; break;
                case "range":
                    this._animateOff = true;
                    this._refresh();
                    this._animateOff = false; break } }, _setOptionDisabled: function(aK) { this._super(aK);
            this._toggleClass(null, "ui-state-disabled", !!aK) }, _value: function() { var aK = this.options.value;
            aK = this._trimAlignValue(aK); return aK }, _values: function(aK) { var aN, aM, aL; if (arguments.length) { aN = this.options.values[aK];
                aN = this._trimAlignValue(aN); return aN } else { if (this._hasMultipleValues()) { aM = this.options.values.slice(); for (aL = 0; aL < aM.length; aL += 1) { aM[aL] = this._trimAlignValue(aM[aL]) } return aM } else { return [] } } }, _trimAlignValue: function(aN) { if (aN <= this._valueMin()) { return this._valueMin() } if (aN >= this._valueMax()) { return this._valueMax() } var aK = (this.options.step > 0) ? this.options.step : 1,
                aM = (aN - this._valueMin()) % aK,
                aL = aN - aM; if (Math.abs(aM) * 2 >= aK) { aL += (aM > 0) ? aK : (-aK) } return parseFloat(aL.toFixed(5)) }, _calculateNewMax: function() { var aK = this.options.max,
                aL = this._valueMin(),
                aM = this.options.step,
                aN = Math.round((aK - aL) / aM) * aM;
            aK = aN + aL; if (aK > this.options.max) { aK -= aM }
            this.max = parseFloat(aK.toFixed(this._precision())) }, _precision: function() { var aK = this._precisionOf(this.options.step); if (this.options.min !== null) { aK = Math.max(aK, this._precisionOf(this.options.min)) } return aK }, _precisionOf: function(aL) { var aM = aL.toString(),
                aK = aM.indexOf("."); return aK === -1 ? 0 : aM.length - aK - 1 }, _valueMin: function() { return this.options.min }, _valueMax: function() { return this.max }, _refreshRange: function(aK) { if (aK === "vertical") { this.range.css({ width: "", left: "" }) } if (aK === "horizontal") { this.range.css({ height: "", bottom: "" }) } }, _refreshValue: function() { var aP, aO, aS, aQ, aT, aN = this.options.range,
                aM = this.options,
                aR = this,
                aL = (!this._animateOff) ? aM.animate : false,
                aK = {}; if (this._hasMultipleValues()) { this.handles.each(function(aU) { aO = (aR.values(aU) - aR._valueMin()) / (aR._valueMax() - aR._valueMin()) * 100;
                    aK[aR.orientation === "horizontal" ? "left" : "bottom"] = aO + "%";
                    ax(this).stop(1, 1)[aL ? "animate" : "css"](aK, aM.animate); if (aR.options.range === true) { if (aR.orientation === "horizontal") { if (aU === 0) { aR.range.stop(1, 1)[aL ? "animate" : "css"]({ left: aO + "%" }, aM.animate) } if (aU === 1) { aR.range[aL ? "animate" : "css"]({ width: (aO - aP) + "%" }, { queue: false, duration: aM.animate }) } } else { if (aU === 0) { aR.range.stop(1, 1)[aL ? "animate" : "css"]({ bottom: (aO) + "%" }, aM.animate) } if (aU === 1) { aR.range[aL ? "animate" : "css"]({ height: (aO - aP) + "%" }, { queue: false, duration: aM.animate }) } } }
                    aP = aO }) } else { aS = this.value();
                aQ = this._valueMin();
                aT = this._valueMax();
                aO = (aT !== aQ) ? (aS - aQ) / (aT - aQ) * 100 : 0;
                aK[this.orientation === "horizontal" ? "left" : "bottom"] = aO + "%";
                this.handle.stop(1, 1)[aL ? "animate" : "css"](aK, aM.animate); if (aN === "min" && this.orientation === "horizontal") { this.range.stop(1, 1)[aL ? "animate" : "css"]({ width: aO + "%" }, aM.animate) } if (aN === "max" && this.orientation === "horizontal") { this.range.stop(1, 1)[aL ? "animate" : "css"]({ width: (100 - aO) + "%" }, aM.animate) } if (aN === "min" && this.orientation === "vertical") { this.range.stop(1, 1)[aL ? "animate" : "css"]({ height: aO + "%" }, aM.animate) } if (aN === "max" && this.orientation === "vertical") { this.range.stop(1, 1)[aL ? "animate" : "css"]({ height: (100 - aO) + "%" }, aM.animate) } } }, _handleEvents: { keydown: function(aO) { var aP, aM, aL, aN, aK = ax(aO.target).data("ui-slider-handle-index"); switch (aO.keyCode) {
                    case ax.ui.keyCode.HOME:
                    case ax.ui.keyCode.END:
                    case ax.ui.keyCode.PAGE_UP:
                    case ax.ui.keyCode.PAGE_DOWN:
                    case ax.ui.keyCode.UP:
                    case ax.ui.keyCode.RIGHT:
                    case ax.ui.keyCode.DOWN:
                    case ax.ui.keyCode.LEFT:
                        aO.preventDefault(); if (!this._keySliding) { this._keySliding = true;
                            this._addClass(ax(aO.target), null, "ui-state-active");
                            aP = this._start(aO, aK); if (aP === false) { return } } break }
                aN = this.options.step; if (this._hasMultipleValues()) { aM = aL = this.values(aK) } else { aM = aL = this.value() } switch (aO.keyCode) {
                    case ax.ui.keyCode.HOME:
                        aL = this._valueMin(); break;
                    case ax.ui.keyCode.END:
                        aL = this._valueMax(); break;
                    case ax.ui.keyCode.PAGE_UP:
                        aL = this._trimAlignValue(aM + ((this._valueMax() - this._valueMin()) / this.numPages)); break;
                    case ax.ui.keyCode.PAGE_DOWN:
                        aL = this._trimAlignValue(aM - ((this._valueMax() - this._valueMin()) / this.numPages)); break;
                    case ax.ui.keyCode.UP:
                    case ax.ui.keyCode.RIGHT:
                        if (aM === this._valueMax()) { return }
                        aL = this._trimAlignValue(aM + aN); break;
                    case ax.ui.keyCode.DOWN:
                    case ax.ui.keyCode.LEFT:
                        if (aM === this._valueMin()) { return }
                        aL = this._trimAlignValue(aM - aN); break }
                this._slide(aO, aK, aL) }, keyup: function(aL) { var aK = ax(aL.target).data("ui-slider-handle-index"); if (this._keySliding) { this._keySliding = false;
                    this._stop(aL, aK);
                    this._change(aL, aK);
                    this._removeClass(ax(aL.target), null, "ui-state-active") } } } });
    /*!
     * jQuery UI Spinner 1.13.0
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */
    function n(aK) { return function() { var aL = this.element.val();
            aK.apply(this, arguments);
            this._refresh(); if (aL !== this.element.val()) { this._trigger("change") } } }
    ax.widget("ui.spinner", { version: "1.13.0", defaultElement: "<input>", widgetEventPrefix: "spin", options: { classes: { "ui-spinner": "ui-corner-all", "ui-spinner-down": "ui-corner-br", "ui-spinner-up": "ui-corner-tr" }, culture: null, icons: { down: "ui-icon-triangle-1-s", up: "ui-icon-triangle-1-n" }, incremental: true, max: null, min: null, numberFormat: null, page: 10, step: 1, change: null, spin: null, start: null, stop: null }, _create: function() { this._setOption("max", this.options.max);
            this._setOption("min", this.options.min);
            this._setOption("step", this.options.step); if (this.value() !== "") { this._value(this.element.val(), true) }
            this._draw();
            this._on(this._events);
            this._refresh();
            this._on(this.window, { beforeunload: function() { this.element.removeAttr("autocomplete") } }) }, _getCreateOptions: function() { var aK = this._super(); var aL = this.element;
            ax.each(["min", "max", "step"], function(aM, aN) { var aO = aL.attr(aN); if (aO != null && aO.length) { aK[aN] = aO } }); return aK }, _events: { keydown: function(aK) { if (this._start(aK) && this._keydown(aK)) { aK.preventDefault() } }, keyup: "_stop", focus: function() { this.previous = this.element.val() }, blur: function(aK) { if (this.cancelBlur) { delete this.cancelBlur; return }
                this._stop();
                this._refresh(); if (this.previous !== this.element.val()) { this._trigger("change", aK) } }, mousewheel: function(aM, aN) { var aL = ax.ui.safeActiveElement(this.document[0]); var aK = this.element[0] === aL; if (!aK || !aN) { return } if (!this.spinning && !this._start(aM)) { return false }
                this._spin((aN > 0 ? 1 : -1) * this.options.step, aM);
                clearTimeout(this.mousewheelTimer);
                this.mousewheelTimer = this._delay(function() { if (this.spinning) { this._stop(aM) } }, 100);
                aM.preventDefault() }, "mousedown .ui-spinner-button": function(aL) { var aK;
                aK = this.element[0] === ax.ui.safeActiveElement(this.document[0]) ? this.previous : this.element.val();

                function aM() { var aN = this.element[0] === ax.ui.safeActiveElement(this.document[0]); if (!aN) { this.element.trigger("focus");
                        this.previous = aK;
                        this._delay(function() { this.previous = aK }) } }
                aL.preventDefault();
                aM.call(this);
                this.cancelBlur = true;
                this._delay(function() { delete this.cancelBlur;
                    aM.call(this) }); if (this._start(aL) === false) { return }
                this._repeat(null, ax(aL.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, aL) }, "mouseup .ui-spinner-button": "_stop", "mouseenter .ui-spinner-button": function(aK) { if (!ax(aK.currentTarget).hasClass("ui-state-active")) { return } if (this._start(aK) === false) { return false }
                this._repeat(null, ax(aK.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, aK) }, "mouseleave .ui-spinner-button": "_stop" }, _enhance: function() { this.uiSpinner = this.element.attr("autocomplete", "off").wrap("<span>").parent().append("<a></a><a></a>") }, _draw: function() { this._enhance();
            this._addClass(this.uiSpinner, "ui-spinner", "ui-widget ui-widget-content");
            this._addClass("ui-spinner-input");
            this.element.attr("role", "spinbutton");
            this.buttons = this.uiSpinner.children("a").attr("tabIndex", -1).attr("aria-hidden", true).button({ classes: { "ui-button": "" } });
            this._removeClass(this.buttons, "ui-corner-all");
            this._addClass(this.buttons.first(), "ui-spinner-button ui-spinner-up");
            this._addClass(this.buttons.last(), "ui-spinner-button ui-spinner-down");
            this.buttons.first().button({ icon: this.options.icons.up, showLabel: false });
            this.buttons.last().button({ icon: this.options.icons.down, showLabel: false }); if (this.buttons.height() > Math.ceil(this.uiSpinner.height() * 0.5) && this.uiSpinner.height() > 0) { this.uiSpinner.height(this.uiSpinner.height()) } }, _keydown: function(aL) { var aK = this.options,
                aM = ax.ui.keyCode; switch (aL.keyCode) {
                case aM.UP:
                    this._repeat(null, 1, aL); return true;
                case aM.DOWN:
                    this._repeat(null, -1, aL); return true;
                case aM.PAGE_UP:
                    this._repeat(null, aK.page, aL); return true;
                case aM.PAGE_DOWN:
                    this._repeat(null, -aK.page, aL); return true } return false }, _start: function(aK) { if (!this.spinning && this._trigger("start", aK) === false) { return false } if (!this.counter) { this.counter = 1 }
            this.spinning = true; return true }, _repeat: function(aL, aK, aM) { aL = aL || 500;
            clearTimeout(this.timer);
            this.timer = this._delay(function() { this._repeat(40, aK, aM) }, aL);
            this._spin(aK * this.options.step, aM) }, _spin: function(aL, aK) { var aM = this.value() || 0; if (!this.counter) { this.counter = 1 }
            aM = this._adjustValue(aM + aL * this._increment(this.counter)); if (!this.spinning || this._trigger("spin", aK, { value: aM }) !== false) { this._value(aM);
                this.counter++ } }, _increment: function(aK) { var aL = this.options.incremental; if (aL) { return typeof aL === "function" ? aL(aK) : Math.floor(aK * aK * aK / 50000 - aK * aK / 500 + 17 * aK / 200 + 1) } return 1 }, _precision: function() { var aK = this._precisionOf(this.options.step); if (this.options.min !== null) { aK = Math.max(aK, this._precisionOf(this.options.min)) } return aK }, _precisionOf: function(aL) { var aM = aL.toString(),
                aK = aM.indexOf("."); return aK === -1 ? 0 : aM.length - aK - 1 }, _adjustValue: function(aM) { var aL, aN, aK = this.options;
            aL = aK.min !== null ? aK.min : 0;
            aN = aM - aL;
            aN = Math.round(aN / aK.step) * aK.step;
            aM = aL + aN;
            aM = parseFloat(aM.toFixed(this._precision())); if (aK.max !== null && aM > aK.max) { return aK.max } if (aK.min !== null && aM < aK.min) { return aK.min } return aM }, _stop: function(aK) { if (!this.spinning) { return }
            clearTimeout(this.timer);
            clearTimeout(this.mousewheelTimer);
            this.counter = 0;
            this.spinning = false;
            this._trigger("stop", aK) }, _setOption: function(aK, aM) { var aN, aO, aL; if (aK === "culture" || aK === "numberFormat") { aN = this._parse(this.element.val());
                this.options[aK] = aM;
                this.element.val(this._format(aN)); return } if (aK === "max" || aK === "min" || aK === "step") { if (typeof aM === "string") { aM = this._parse(aM) } } if (aK === "icons") { aO = this.buttons.first().find(".ui-icon");
                this._removeClass(aO, null, this.options.icons.up);
                this._addClass(aO, null, aM.up);
                aL = this.buttons.last().find(".ui-icon");
                this._removeClass(aL, null, this.options.icons.down);
                this._addClass(aL, null, aM.down) }
            this._super(aK, aM) }, _setOptionDisabled: function(aK) { this._super(aK);
            this._toggleClass(this.uiSpinner, null, "ui-state-disabled", !!aK);
            this.element.prop("disabled", !!aK);
            this.buttons.button(aK ? "disable" : "enable") }, _setOptions: n(function(aK) { this._super(aK) }), _parse: function(aK) { if (typeof aK === "string" && aK !== "") { aK = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(aK, 10, this.options.culture) : +aK } return aK === "" || isNaN(aK) ? null : aK }, _format: function(aK) { if (aK === "") { return "" } return window.Globalize && this.options.numberFormat ? Globalize.format(aK, this.options.numberFormat, this.options.culture) : aK }, _refresh: function() { this.element.attr({ "aria-valuemin": this.options.min, "aria-valuemax": this.options.max, "aria-valuenow": this._parse(this.element.val()) }) }, isValid: function() { var aK = this.value(); if (aK === null) { return false } return aK === this._adjustValue(aK) }, _value: function(aM, aK) { var aL; if (aM !== "") { aL = this._parse(aM); if (aL !== null) { if (!aK) { aL = this._adjustValue(aL) }
                    aM = this._format(aL) } }
            this.element.val(aM);
            this._refresh() }, _destroy: function() { this.element.prop("disabled", false).removeAttr("autocomplete role aria-valuemin aria-valuemax aria-valuenow");
            this.uiSpinner.replaceWith(this.element) }, stepUp: n(function(aK) { this._stepUp(aK) }), _stepUp: function(aK) { if (this._start()) { this._spin((aK || 1) * this.options.step);
                this._stop() } }, stepDown: n(function(aK) { this._stepDown(aK) }), _stepDown: function(aK) { if (this._start()) { this._spin((aK || 1) * -this.options.step);
                this._stop() } }, pageUp: n(function(aK) { this._stepUp((aK || 1) * this.options.page) }), pageDown: n(function(aK) { this._stepDown((aK || 1) * this.options.page) }), value: function(aK) { if (!arguments.length) { return this._parse(this.element.val()) }
            n(this._value).call(this, aK) }, widget: function() { return this.uiSpinner } });
    if (ax.uiBackCompat !== false) { ax.widget("ui.spinner", ax.ui.spinner, { _enhance: function() { this.uiSpinner = this.element.attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml()) }, _uiSpinnerHtml: function() { return "<span>" }, _buttonHtml: function() { return "<a></a><a></a>" } }) }
    var ap = ax.ui.spinner;
    /*!
     * jQuery UI Tabs 1.13.0
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */
    ax.widget("ui.tabs", { version: "1.13.0", delay: 300, options: { active: null, classes: { "ui-tabs": "ui-corner-all", "ui-tabs-nav": "ui-corner-all", "ui-tabs-panel": "ui-corner-bottom", "ui-tabs-tab": "ui-corner-top" }, collapsible: false, event: "click", heightStyle: "content", hide: null, show: null, activate: null, beforeActivate: null, beforeLoad: null, load: null }, _isLocal: (function() { var aK = /#.*$/; return function(aM) { var aO, aN;
                aO = aM.href.replace(aK, "");
                aN = location.href.replace(aK, ""); try { aO = decodeURIComponent(aO) } catch (aL) {} try { aN = decodeURIComponent(aN) } catch (aL) {} return aM.hash.length > 1 && aO === aN } })(), _create: function() { var aL = this,
                aK = this.options;
            this.running = false;
            this._addClass("ui-tabs", "ui-widget ui-widget-content");
            this._toggleClass("ui-tabs-collapsible", null, aK.collapsible);
            this._processTabs();
            aK.active = this._initialActive(); if (Array.isArray(aK.disabled)) { aK.disabled = ax.uniqueSort(aK.disabled.concat(ax.map(this.tabs.filter(".ui-state-disabled"), function(aM) { return aL.tabs.index(aM) }))).sort() } if (this.options.active !== false && this.anchors.length) { this.active = this._findActive(aK.active) } else { this.active = ax() }
            this._refresh(); if (this.active.length) { this.load(aK.active) } }, _initialActive: function() { var aL = this.options.active,
                aK = this.options.collapsible,
                aM = location.hash.substring(1); if (aL === null) { if (aM) { this.tabs.each(function(aN, aO) { if (ax(aO).attr("aria-controls") === aM) { aL = aN; return false } }) } if (aL === null) { aL = this.tabs.index(this.tabs.filter(".ui-tabs-active")) } if (aL === null || aL === -1) { aL = this.tabs.length ? 0 : false } } if (aL !== false) { aL = this.tabs.index(this.tabs.eq(aL)); if (aL === -1) { aL = aK ? false : 0 } } if (!aK && aL === false && this.anchors.length) { aL = 0 } return aL }, _getCreateEventData: function() { return { tab: this.active, panel: !this.active.length ? ax() : this._getPanelForTab(this.active) } }, _tabKeydown: function(aM) { var aL = ax(ax.ui.safeActiveElement(this.document[0])).closest("li"),
                aK = this.tabs.index(aL),
                aN = true; if (this._handlePageNav(aM)) { return } switch (aM.keyCode) {
                case ax.ui.keyCode.RIGHT:
                case ax.ui.keyCode.DOWN:
                    aK++; break;
                case ax.ui.keyCode.UP:
                case ax.ui.keyCode.LEFT:
                    aN = false;
                    aK--; break;
                case ax.ui.keyCode.END:
                    aK = this.anchors.length - 1; break;
                case ax.ui.keyCode.HOME:
                    aK = 0; break;
                case ax.ui.keyCode.SPACE:
                    aM.preventDefault();
                    clearTimeout(this.activating);
                    this._activate(aK); return;
                case ax.ui.keyCode.ENTER:
                    aM.preventDefault();
                    clearTimeout(this.activating);
                    this._activate(aK === this.options.active ? false : aK); return;
                default:
                    return }
            aM.preventDefault();
            clearTimeout(this.activating);
            aK = this._focusNextTab(aK, aN); if (!aM.ctrlKey && !aM.metaKey) { aL.attr("aria-selected", "false");
                this.tabs.eq(aK).attr("aria-selected", "true");
                this.activating = this._delay(function() { this.option("active", aK) }, this.delay) } }, _panelKeydown: function(aK) { if (this._handlePageNav(aK)) { return } if (aK.ctrlKey && aK.keyCode === ax.ui.keyCode.UP) { aK.preventDefault();
                this.active.trigger("focus") } }, _handlePageNav: function(aK) { if (aK.altKey && aK.keyCode === ax.ui.keyCode.PAGE_UP) { this._activate(this._focusNextTab(this.options.active - 1, false)); return true } if (aK.altKey && aK.keyCode === ax.ui.keyCode.PAGE_DOWN) { this._activate(this._focusNextTab(this.options.active + 1, true)); return true } }, _findNextTab: function(aL, aM) { var aK = this.tabs.length - 1;

            function aN() { if (aL > aK) { aL = 0 } if (aL < 0) { aL = aK } return aL } while (ax.inArray(aN(), this.options.disabled) !== -1) { aL = aM ? aL + 1 : aL - 1 } return aL }, _focusNextTab: function(aK, aL) { aK = this._findNextTab(aK, aL);
            this.tabs.eq(aK).trigger("focus"); return aK }, _setOption: function(aK, aL) { if (aK === "active") { this._activate(aL); return }
            this._super(aK, aL); if (aK === "collapsible") { this._toggleClass("ui-tabs-collapsible", null, aL); if (!aL && this.options.active === false) { this._activate(0) } } if (aK === "event") { this._setupEvents(aL) } if (aK === "heightStyle") { this._setupHeightStyle(aL) } }, _sanitizeSelector: function(aK) { return aK ? aK.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : "" }, refresh: function() { var aL = this.options,
                aK = this.tablist.children(":has(a[href])");
            aL.disabled = ax.map(aK.filter(".ui-state-disabled"), function(aM) { return aK.index(aM) });
            this._processTabs(); if (aL.active === false || !this.anchors.length) { aL.active = false;
                this.active = ax() } else { if (this.active.length && !ax.contains(this.tablist[0], this.active[0])) { if (this.tabs.length === aL.disabled.length) { aL.active = false;
                        this.active = ax() } else { this._activate(this._findNextTab(Math.max(0, aL.active - 1), false)) } } else { aL.active = this.tabs.index(this.active) } }
            this._refresh() }, _refresh: function() { this._setOptionDisabled(this.options.disabled);
            this._setupEvents(this.options.event);
            this._setupHeightStyle(this.options.heightStyle);
            this.tabs.not(this.active).attr({ "aria-selected": "false", "aria-expanded": "false", tabIndex: -1 });
            this.panels.not(this._getPanelForTab(this.active)).hide().attr({ "aria-hidden": "true" }); if (!this.active.length) { this.tabs.eq(0).attr("tabIndex", 0) } else { this.active.attr({ "aria-selected": "true", "aria-expanded": "true", tabIndex: 0 });
                this._addClass(this.active, "ui-tabs-active", "ui-state-active");
                this._getPanelForTab(this.active).show().attr({ "aria-hidden": "false" }) } }, _processTabs: function() { var aM = this,
                aN = this.tabs,
                aL = this.anchors,
                aK = this.panels;
            this.tablist = this._getList().attr("role", "tablist");
            this._addClass(this.tablist, "ui-tabs-nav", "ui-helper-reset ui-helper-clearfix ui-widget-header");
            this.tablist.on("mousedown" + this.eventNamespace, "> li", function(aO) { if (ax(this).is(".ui-state-disabled")) { aO.preventDefault() } }).on("focus" + this.eventNamespace, ".ui-tabs-anchor", function() { if (ax(this).closest("li").is(".ui-state-disabled")) { this.blur() } });
            this.tabs = this.tablist.find("> li:has(a[href])").attr({ role: "tab", tabIndex: -1 });
            this._addClass(this.tabs, "ui-tabs-tab", "ui-state-default");
            this.anchors = this.tabs.map(function() { return ax("a", this)[0] }).attr({ tabIndex: -1 });
            this._addClass(this.anchors, "ui-tabs-anchor");
            this.panels = ax();
            this.anchors.each(function(aT, aR) { var aO, aP, aS, aQ = ax(aR).uniqueId().attr("id"),
                    aU = ax(aR).closest("li"),
                    aV = aU.attr("aria-controls"); if (aM._isLocal(aR)) { aO = aR.hash;
                    aS = aO.substring(1);
                    aP = aM.element.find(aM._sanitizeSelector(aO)) } else { aS = aU.attr("aria-controls") || ax({}).uniqueId()[0].id;
                    aO = "#" + aS;
                    aP = aM.element.find(aO); if (!aP.length) { aP = aM._createPanel(aS);
                        aP.insertAfter(aM.panels[aT - 1] || aM.tablist) }
                    aP.attr("aria-live", "polite") } if (aP.length) { aM.panels = aM.panels.add(aP) } if (aV) { aU.data("ui-tabs-aria-controls", aV) }
                aU.attr({ "aria-controls": aS, "aria-labelledby": aQ });
                aP.attr("aria-labelledby", aQ) });
            this.panels.attr("role", "tabpanel");
            this._addClass(this.panels, "ui-tabs-panel", "ui-widget-content"); if (aN) { this._off(aN.not(this.tabs));
                this._off(aL.not(this.anchors));
                this._off(aK.not(this.panels)) } }, _getList: function() { return this.tablist || this.element.find("ol, ul").eq(0) }, _createPanel: function(aK) { return ax("<div>").attr("id", aK).data("ui-tabs-destroy", true) }, _setOptionDisabled: function(aN) { var aM, aK, aL; if (Array.isArray(aN)) { if (!aN.length) { aN = false } else { if (aN.length === this.anchors.length) { aN = true } } } for (aL = 0;
                (aK = this.tabs[aL]); aL++) { aM = ax(aK); if (aN === true || ax.inArray(aL, aN) !== -1) { aM.attr("aria-disabled", "true");
                    this._addClass(aM, null, "ui-state-disabled") } else { aM.removeAttr("aria-disabled");
                    this._removeClass(aM, null, "ui-state-disabled") } }
            this.options.disabled = aN;
            this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, aN === true) }, _setupEvents: function(aL) { var aK = {}; if (aL) { ax.each(aL.split(" "), function(aN, aM) { aK[aM] = "_eventHandler" }) }
            this._off(this.anchors.add(this.tabs).add(this.panels));
            this._on(true, this.anchors, { click: function(aM) { aM.preventDefault() } });
            this._on(this.anchors, aK);
            this._on(this.tabs, { keydown: "_tabKeydown" });
            this._on(this.panels, { keydown: "_panelKeydown" });
            this._focusable(this.tabs);
            this._hoverable(this.tabs) }, _setupHeightStyle: function(aK) { var aM, aL = this.element.parent(); if (aK === "fill") { aM = aL.height();
                aM -= this.element.outerHeight() - this.element.height();
                this.element.siblings(":visible").each(function() { var aO = ax(this),
                        aN = aO.css("position"); if (aN === "absolute" || aN === "fixed") { return }
                    aM -= aO.outerHeight(true) });
                this.element.children().not(this.panels).each(function() { aM -= ax(this).outerHeight(true) });
                this.panels.each(function() { ax(this).height(Math.max(0, aM - ax(this).innerHeight() + ax(this).height())) }).css("overflow", "auto") } else { if (aK === "auto") { aM = 0;
                    this.panels.each(function() { aM = Math.max(aM, ax(this).height("").height()) }).height(aM) } } }, _eventHandler: function(aK) { var aT = this.options,
                aO = this.active,
                aP = ax(aK.currentTarget),
                aN = aP.closest("li"),
                aR = aN[0] === aO[0],
                aL = aR && aT.collapsible,
                aM = aL ? ax() : this._getPanelForTab(aN),
                aQ = !aO.length ? ax() : this._getPanelForTab(aO),
                aS = { oldTab: aO, oldPanel: aQ, newTab: aL ? ax() : aN, newPanel: aM };
            aK.preventDefault(); if (aN.hasClass("ui-state-disabled") || aN.hasClass("ui-tabs-loading") || this.running || (aR && !aT.collapsible) || (this._trigger("beforeActivate", aK, aS) === false)) { return }
            aT.active = aL ? false : this.tabs.index(aN);
            this.active = aR ? ax() : aN; if (this.xhr) { this.xhr.abort() } if (!aQ.length && !aM.length) { ax.error("jQuery UI Tabs: Mismatching fragment identifier.") } if (aM.length) { this.load(this.tabs.index(aN), aK) }
            this._toggle(aK, aS) }, _toggle: function(aQ, aP) { var aO = this,
                aK = aP.newPanel,
                aN = aP.oldPanel;
            this.running = true;

            function aM() { aO.running = false;
                aO._trigger("activate", aQ, aP) }

            function aL() { aO._addClass(aP.newTab.closest("li"), "ui-tabs-active", "ui-state-active"); if (aK.length && aO.options.show) { aO._show(aK, aO.options.show, aM) } else { aK.show();
                    aM() } } if (aN.length && this.options.hide) { this._hide(aN, this.options.hide, function() { aO._removeClass(aP.oldTab.closest("li"), "ui-tabs-active", "ui-state-active");
                    aL() }) } else { this._removeClass(aP.oldTab.closest("li"), "ui-tabs-active", "ui-state-active");
                aN.hide();
                aL() }
            aN.attr("aria-hidden", "true");
            aP.oldTab.attr({ "aria-selected": "false", "aria-expanded": "false" }); if (aK.length && aN.length) { aP.oldTab.attr("tabIndex", -1) } else { if (aK.length) { this.tabs.filter(function() { return ax(this).attr("tabIndex") === 0 }).attr("tabIndex", -1) } }
            aK.attr("aria-hidden", "false");
            aP.newTab.attr({ "aria-selected": "true", "aria-expanded": "true", tabIndex: 0 }) }, _activate: function(aL) { var aK, aM = this._findActive(aL); if (aM[0] === this.active[0]) { return } if (!aM.length) { aM = this.active }
            aK = aM.find(".ui-tabs-anchor")[0];
            this._eventHandler({ target: aK, currentTarget: aK, preventDefault: ax.noop }) }, _findActive: function(aK) { return aK === false ? ax() : this.tabs.eq(aK) }, _getIndex: function(aK) { if (typeof aK === "string") { aK = this.anchors.index(this.anchors.filter("[href$='" + ax.escapeSelector(aK) + "']")) } return aK }, _destroy: function() { if (this.xhr) { this.xhr.abort() }
            this.tablist.removeAttr("role").off(this.eventNamespace);
            this.anchors.removeAttr("role tabIndex").removeUniqueId();
            this.tabs.add(this.panels).each(function() { if (ax.data(this, "ui-tabs-destroy")) { ax(this).remove() } else { ax(this).removeAttr("role tabIndex aria-live aria-busy aria-selected aria-labelledby aria-hidden aria-expanded") } });
            this.tabs.each(function() { var aK = ax(this),
                    aL = aK.data("ui-tabs-aria-controls"); if (aL) { aK.attr("aria-controls", aL).removeData("ui-tabs-aria-controls") } else { aK.removeAttr("aria-controls") } });
            this.panels.show(); if (this.options.heightStyle !== "content") { this.panels.css("height", "") } }, enable: function(aK) { var aL = this.options.disabled; if (aL === false) { return } if (aK === undefined) { aL = false } else { aK = this._getIndex(aK); if (Array.isArray(aL)) { aL = ax.map(aL, function(aM) { return aM !== aK ? aM : null }) } else { aL = ax.map(this.tabs, function(aM, aN) { return aN !== aK ? aN : null }) } }
            this._setOptionDisabled(aL) }, disable: function(aK) { var aL = this.options.disabled; if (aL === true) { return } if (aK === undefined) { aL = true } else { aK = this._getIndex(aK); if (ax.inArray(aK, aL) !== -1) { return } if (Array.isArray(aL)) { aL = ax.merge([aK], aL).sort() } else { aL = [aK] } }
            this._setOptionDisabled(aL) }, load: function(aN, aR) { aN = this._getIndex(aN); var aQ = this,
                aO = this.tabs.eq(aN),
                aM = aO.find(".ui-tabs-anchor"),
                aL = this._getPanelForTab(aO),
                aP = { tab: aO, panel: aL },
                aK = function(aT, aS) { if (aS === "abort") { aQ.panels.stop(false, true) }
                    aQ._removeClass(aO, "ui-tabs-loading");
                    aL.removeAttr("aria-busy"); if (aT === aQ.xhr) { delete aQ.xhr } }; if (this._isLocal(aM[0])) { return }
            this.xhr = ax.ajax(this._ajaxSettings(aM, aR, aP)); if (this.xhr && this.xhr.statusText !== "canceled") { this._addClass(aO, "ui-tabs-loading");
                aL.attr("aria-busy", "true");
                this.xhr.done(function(aT, aS, aU) { setTimeout(function() { aL.html(aT);
                        aQ._trigger("load", aR, aP);
                        aK(aU, aS) }, 1) }).fail(function(aT, aS) { setTimeout(function() { aK(aT, aS) }, 1) }) } }, _ajaxSettings: function(aK, aN, aM) { var aL = this; return { url: aK.attr("href").replace(/#.*$/, ""), beforeSend: function(aP, aO) { return aL._trigger("beforeLoad", aN, ax.extend({ jqXHR: aP, ajaxSettings: aO }, aM)) } } }, _getPanelForTab: function(aK) { var aL = ax(aK).attr("aria-controls"); return this.element.find(this._sanitizeSelector("#" + aL)) } });
    if (ax.uiBackCompat !== false) { ax.widget("ui.tabs", ax.ui.tabs, { _processTabs: function() { this._superApply(arguments);
                this._addClass(this.tabs, "ui-tab") } }) }
    var Y = ax.ui.tabs;
    /*!
     * jQuery UI Tooltip 1.13.0
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */
    ax.widget("ui.tooltip", { version: "1.13.0", options: { classes: { "ui-tooltip": "ui-corner-all ui-widget-shadow" }, content: function() { var aK = ax(this).attr("title"); return ax("<a>").text(aK).html() }, hide: true, items: "[title]:not([disabled])", position: { my: "left top+15", at: "left bottom", collision: "flipfit flip" }, show: true, track: false, close: null, open: null }, _addDescribedBy: function(aL, aM) { var aK = (aL.attr("aria-describedby") || "").split(/\s+/);
            aK.push(aM);
            aL.data("ui-tooltip-id", aM).attr("aria-describedby", String.prototype.trim.call(aK.join(" "))) }, _removeDescribedBy: function(aM) { var aN = aM.data("ui-tooltip-id"),
                aL = (aM.attr("aria-describedby") || "").split(/\s+/),
                aK = ax.inArray(aN, aL); if (aK !== -1) { aL.splice(aK, 1) }
            aM.removeData("ui-tooltip-id");
            aL = String.prototype.trim.call(aL.join(" ")); if (aL) { aM.attr("aria-describedby", aL) } else { aM.removeAttr("aria-describedby") } }, _create: function() { this._on({ mouseover: "open", focusin: "open" });
            this.tooltips = {};
            this.parents = {};
            this.liveRegion = ax("<div>").attr({ role: "log", "aria-live": "assertive", "aria-relevant": "additions" }).appendTo(this.document[0].body);
            this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible");
            this.disabledTitles = ax([]) }, _setOption: function(aK, aM) { var aL = this;
            this._super(aK, aM); if (aK === "content") { ax.each(this.tooltips, function(aO, aN) { aL._updateContent(aN.element) }) } }, _setOptionDisabled: function(aK) { this[aK ? "_disable" : "_enable"]() }, _disable: function() { var aK = this;
            ax.each(this.tooltips, function(aN, aM) { var aL = ax.Event("blur");
                aL.target = aL.currentTarget = aM.element[0];
                aK.close(aL, true) });
            this.disabledTitles = this.disabledTitles.add(this.element.find(this.options.items).addBack().filter(function() { var aL = ax(this); if (aL.is("[title]")) { return aL.data("ui-tooltip-title", aL.attr("title")).removeAttr("title") } })) }, _enable: function() { this.disabledTitles.each(function() { var aK = ax(this); if (aK.data("ui-tooltip-title")) { aK.attr("title", aK.data("ui-tooltip-title")) } });
            this.disabledTitles = ax([]) }, open: function(aL) { var aK = this,
                aM = ax(aL ? aL.target : this.element).closest(this.options.items); if (!aM.length || aM.data("ui-tooltip-id")) { return } if (aM.attr("title")) { aM.data("ui-tooltip-title", aM.attr("title")) }
            aM.data("ui-tooltip-open", true); if (aL && aL.type === "mouseover") { aM.parents().each(function() { var aO = ax(this),
                        aN; if (aO.data("ui-tooltip-open")) { aN = ax.Event("blur");
                        aN.target = aN.currentTarget = this;
                        aK.close(aN, true) } if (aO.attr("title")) { aO.uniqueId();
                        aK.parents[this.id] = { element: this, title: aO.attr("title") };
                        aO.attr("title", "") } }) }
            this._registerCloseHandlers(aL, aM);
            this._updateContent(aM, aL) }, _updateContent: function(aP, aO) { var aN, aK = this.options.content,
                aM = this,
                aL = aO ? aO.type : null; if (typeof aK === "string" || aK.nodeType || aK.jquery) { return this._open(aO, aP, aK) }
            aN = aK.call(aP[0], function(aQ) { aM._delay(function() { if (!aP.data("ui-tooltip-open")) { return } if (aO) { aO.type = aL }
                    this._open(aO, aP, aQ) }) }); if (aN) { this._open(aO, aP, aN) } }, _open: function(aL, aO, aP) { var aK, aS, aR, aM, aQ = ax.extend({}, this.options.position); if (!aP) { return }
            aK = this._find(aO); if (aK) { aK.tooltip.find(".ui-tooltip-content").html(aP); return } if (aO.is("[title]")) { if (aL && aL.type === "mouseover") { aO.attr("title", "") } else { aO.removeAttr("title") } }
            aK = this._tooltip(aO);
            aS = aK.tooltip;
            this._addDescribedBy(aO, aS.attr("id"));
            aS.find(".ui-tooltip-content").html(aP);
            this.liveRegion.children().hide();
            aM = ax("<div>").html(aS.find(".ui-tooltip-content").html());
            aM.removeAttr("name").find("[name]").removeAttr("name");
            aM.removeAttr("id").find("[id]").removeAttr("id");
            aM.appendTo(this.liveRegion);

            function aN(aT) { aQ.of = aT; if (aS.is(":hidden")) { return }
                aS.position(aQ) } if (this.options.track && aL && /^mouse/.test(aL.type)) { this._on(this.document, { mousemove: aN });
                aN(aL) } else { aS.position(ax.extend({ of: aO }, this.options.position)) }
            aS.hide();
            this._show(aS, this.options.show); if (this.options.track && this.options.show && this.options.show.delay) { aR = this.delayedShow = setInterval(function() { if (aS.is(":visible")) { aN(aQ.of);
                        clearInterval(aR) } }, 13) }
            this._trigger("open", aL, { tooltip: aS }) }, _registerCloseHandlers: function(aL, aM) { var aK = { keyup: function(aN) { if (aN.keyCode === ax.ui.keyCode.ESCAPE) { var aO = ax.Event(aN);
                        aO.currentTarget = aM[0];
                        this.close(aO, true) } } }; if (aM[0] !== this.element[0]) { aK.remove = function() { this._removeTooltip(this._find(aM).tooltip) } } if (!aL || aL.type === "mouseover") { aK.mouseleave = "close" } if (!aL || aL.type === "focusin") { aK.focusout = "close" }
            this._on(true, aM, aK) }, close: function(aL) { var aN, aK = this,
                aO = ax(aL ? aL.currentTarget : this.element),
                aM = this._find(aO); if (!aM) { aO.removeData("ui-tooltip-open"); return }
            aN = aM.tooltip; if (aM.closing) { return }
            clearInterval(this.delayedShow); if (aO.data("ui-tooltip-title") && !aO.attr("title")) { aO.attr("title", aO.data("ui-tooltip-title")) }
            this._removeDescribedBy(aO);
            aM.hiding = true;
            aN.stop(true);
            this._hide(aN, this.options.hide, function() { aK._removeTooltip(ax(this)) });
            aO.removeData("ui-tooltip-open");
            this._off(aO, "mouseleave focusout keyup"); if (aO[0] !== this.element[0]) { this._off(aO, "remove") }
            this._off(this.document, "mousemove"); if (aL && aL.type === "mouseleave") { ax.each(this.parents, function(aQ, aP) { ax(aP.element).attr("title", aP.title);
                    delete aK.parents[aQ] }) }
            aM.closing = true;
            this._trigger("close", aL, { tooltip: aN }); if (!aM.hiding) { aM.closing = false } }, _tooltip: function(aK) { var aM = ax("<div>").attr("role", "tooltip"),
                aL = ax("<div>").appendTo(aM),
                aN = aM.uniqueId().attr("id");
            this._addClass(aL, "ui-tooltip-content");
            this._addClass(aM, "ui-tooltip", "ui-widget ui-widget-content");
            aM.appendTo(this._appendTo(aK)); return this.tooltips[aN] = { element: aK, tooltip: aM } }, _find: function(aK) { var aL = aK.data("ui-tooltip-id"); return aL ? this.tooltips[aL] : null }, _removeTooltip: function(aK) { clearInterval(this.delayedShow);
            aK.remove();
            delete this.tooltips[aK.attr("id")] }, _appendTo: function(aL) { var aK = aL.closest(".ui-front, dialog"); if (!aK.length) { aK = this.document[0].body } return aK }, _destroy: function() { var aK = this;
            ax.each(this.tooltips, function(aO, aN) { var aM = ax.Event("blur"),
                    aL = aN.element;
                aM.target = aM.currentTarget = aL[0];
                aK.close(aM, true);
                ax("#" + aO).remove(); if (aL.data("ui-tooltip-title")) { if (!aL.attr("title")) { aL.attr("title", aL.data("ui-tooltip-title")) }
                    aL.removeData("ui-tooltip-title") } });
            this.liveRegion.remove() } });
    if (ax.uiBackCompat !== false) { ax.widget("ui.tooltip", ax.ui.tooltip, { options: { tooltipClass: null }, _tooltip: function() { var aK = this._superApply(arguments); if (this.options.tooltipClass) { aK.tooltip.addClass(this.options.tooltipClass) } return aK } }) }
    var J = ax.ui.tooltip;
    var b = ax;
    /*!
     * jQuery Color Animations v2.2.0
     * https://github.com/jquery/jquery-color
     *
     * Copyright OpenJS Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     * Date: Sun May 10 09:02:36 2020 +0200
     */
    var Q = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",
        aw = {},
        al = aw.toString,
        z = /^([\-+])=\s*(\d+\.?\d*)/,
        ae = [{ re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/, parse: function(aK) { return [aK[1], aK[2], aK[3], aK[4]] } }, { re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/, parse: function(aK) { return [aK[1] * 2.55, aK[2] * 2.55, aK[3] * 2.55, aK[4]] } }, { re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})?/, parse: function(aK) { return [parseInt(aK[1], 16), parseInt(aK[2], 16), parseInt(aK[3], 16), aK[4] ? (parseInt(aK[4], 16) / 255).toFixed(2) : 1] } }, { re: /#([a-f0-9])([a-f0-9])([a-f0-9])([a-f0-9])?/, parse: function(aK) { return [parseInt(aK[1] + aK[1], 16), parseInt(aK[2] + aK[2], 16), parseInt(aK[3] + aK[3], 16), aK[4] ? (parseInt(aK[4] + aK[4], 16) / 255).toFixed(2) : 1] } }, { re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/, space: "hsla", parse: function(aK) { return [aK[1], aK[2] / 100, aK[3] / 100, aK[4]] } }],
        t = b.Color = function(aL, aM, aK, aN) { return new b.Color.fn.parse(aL, aM, aK, aN) },
        A = { rgba: { props: { red: { idx: 0, type: "byte" }, green: { idx: 1, type: "byte" }, blue: { idx: 2, type: "byte" } } }, hsla: { props: { hue: { idx: 0, type: "degrees" }, saturation: { idx: 1, type: "percent" }, lightness: { idx: 2, type: "percent" } } } },
        m = { "byte": { floor: true, max: 255 }, percent: { max: 1 }, degrees: { mod: 360, floor: true } },
        aD = t.support = {},
        ab = b("<p>")[0],
        au, aH = b.each;
    ab.style.cssText = "background-color:rgba(1,1,1,.5)";
    aD.rgba = ab.style.backgroundColor.indexOf("rgba") > -1;
    aH(A, function(aK, aL) { aL.cache = "_" + aK;
        aL.props.alpha = { idx: 3, type: "percent", def: 1 } });
    b.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(aL, aK) { aw["[object " + aK + "]"] = aK.toLowerCase() });

    function v(aK) { if (aK == null) { return aK + "" } return typeof aK === "object" ? aw[al.call(aK)] || "object" : typeof aK }

    function aA(aL, aN, aM) { var aK = m[aN.type] || {}; if (aL == null) { return (aM || !aN.def) ? null : aN.def }
        aL = aK.floor ? ~~aL : parseFloat(aL); if (isNaN(aL)) { return aN.def } if (aK.mod) { return (aL + aK.mod) % aK.mod } return Math.min(aK.max, Math.max(0, aL)) }

    function D(aK) { var aM = t(),
            aL = aM._rgba = [];
        aK = aK.toLowerCase();
        aH(ae, function(aR, aS) { var aP, aQ = aS.re.exec(aK),
                aO = aQ && aS.parse(aQ),
                aN = aS.space || "rgba"; if (aO) { aP = aM[aN](aO);
                aM[A[aN].cache] = aP[A[aN].cache];
                aL = aM._rgba = aP._rgba; return false } }); if (aL.length) { if (aL.join() === "0,0,0,0") { b.extend(aL, au.transparent) } return aM } return au[aK] }
    t.fn = b.extend(t.prototype, { parse: function(aQ, aO, aK, aP) { if (aQ === undefined) { this._rgba = [null, null, null, null]; return this } if (aQ.jquery || aQ.nodeType) { aQ = b(aQ).css(aO);
                aO = undefined } var aN = this,
                aM = v(aQ),
                aL = this._rgba = []; if (aO !== undefined) { aQ = [aQ, aO, aK, aP];
                aM = "array" } if (aM === "string") { return this.parse(D(aQ) || au._default) } if (aM === "array") { aH(A.rgba.props, function(aR, aS) { aL[aS.idx] = aA(aQ[aS.idx], aS) }); return this } if (aM === "object") { if (aQ instanceof t) { aH(A, function(aR, aS) { if (aQ[aS.cache]) { aN[aS.cache] = aQ[aS.cache].slice() } }) } else { aH(A, function(aS, aT) { var aR = aT.cache;
                        aH(aT.props, function(aU, aV) { if (!aN[aR] && aT.to) { if (aU === "alpha" || aQ[aU] == null) { return }
                                aN[aR] = aT.to(aN._rgba) }
                            aN[aR][aV.idx] = aA(aQ[aU], aV, true) }); if (aN[aR] && b.inArray(null, aN[aR].slice(0, 3)) < 0) { if (aN[aR][3] == null) { aN[aR][3] = 1 } if (aT.from) { aN._rgba = aT.from(aN[aR]) } } }) } return this } }, is: function(aM) { var aK = t(aM),
                aN = true,
                aL = this;
            aH(A, function(aO, aQ) { var aR, aP = aK[aQ.cache]; if (aP) { aR = aL[aQ.cache] || aQ.to && aQ.to(aL._rgba) || [];
                    aH(aQ.props, function(aS, aT) { if (aP[aT.idx] != null) { aN = (aP[aT.idx] === aR[aT.idx]); return aN } }) } return aN }); return aN }, _space: function() { var aK = [],
                aL = this;
            aH(A, function(aM, aN) { if (aL[aN.cache]) { aK.push(aM) } }); return aK.pop() }, transition: function(aL, aR) { var aM = t(aL),
                aN = aM._space(),
                aO = A[aN],
                aP = this.alpha() === 0 ? t("transparent") : this,
                aQ = aP[aO.cache] || aO.to(aP._rgba),
                aK = aQ.slice();
            aM = aM[aO.cache];
            aH(aO.props, function(aW, aX) { var aU = aX.idx,
                    aT = aQ[aU],
                    aS = aM[aU],
                    aV = m[aX.type] || {}; if (aS === null) { return } if (aT === null) { aK[aU] = aS } else { if (aV.mod) { if (aS - aT > aV.mod / 2) { aT += aV.mod } else { if (aT - aS > aV.mod / 2) { aT -= aV.mod } } }
                    aK[aU] = aA((aS - aT) * aR + aT, aX) } }); return this[aN](aK) }, blend: function(aN) { if (this._rgba[3] === 1) { return this } var aM = this._rgba.slice(),
                aL = aM.pop(),
                aK = t(aN)._rgba; return t(b.map(aM, function(aO, aP) { return (1 - aL) * aK[aP] + aL * aO })) }, toRgbaString: function() { var aL = "rgba(",
                aK = b.map(this._rgba, function(aM, aN) { if (aM != null) { return aM } return aN > 2 ? 1 : 0 }); if (aK[3] === 1) { aK.pop();
                aL = "rgb(" } return aL + aK.join() + ")" }, toHslaString: function() { var aL = "hsla(",
                aK = b.map(this.hsla(), function(aM, aN) { if (aM == null) { aM = aN > 2 ? 1 : 0 } if (aN && aN < 3) { aM = Math.round(aM * 100) + "%" } return aM }); if (aK[3] === 1) { aK.pop();
                aL = "hsl(" } return aL + aK.join() + ")" }, toHexString: function(aK) { var aL = this._rgba.slice(),
                aM = aL.pop(); if (aK) { aL.push(~~(aM * 255)) } return "#" + b.map(aL, function(aN) { aN = (aN || 0).toString(16); return aN.length === 1 ? "0" + aN : aN }).join("") }, toString: function() { return this._rgba[3] === 0 ? "transparent" : this.toRgbaString() } });
    t.fn.parse.prototype = t.fn;

    function k(aM, aL, aK) { aK = (aK + 1) % 1; if (aK * 6 < 1) { return aM + (aL - aM) * aK * 6 } if (aK * 2 < 1) { return aL } if (aK * 3 < 2) { return aM + (aL - aM) * ((2 / 3) - aK) * 6 } return aM }
    A.hsla.to = function(aM) { if (aM[0] == null || aM[1] == null || aM[2] == null) { return [null, null, null, aM[3]] } var aK = aM[0] / 255,
            aP = aM[1] / 255,
            aQ = aM[2] / 255,
            aS = aM[3],
            aR = Math.max(aK, aP, aQ),
            aN = Math.min(aK, aP, aQ),
            aT = aR - aN,
            aU = aR + aN,
            aL = aU * 0.5,
            aO, aV; if (aN === aR) { aO = 0 } else { if (aK === aR) { aO = (60 * (aP - aQ) / aT) + 360 } else { if (aP === aR) { aO = (60 * (aQ - aK) / aT) + 120 } else { aO = (60 * (aK - aP) / aT) + 240 } } } if (aT === 0) { aV = 0 } else { if (aL <= 0.5) { aV = aT / aU } else { aV = aT / (2 - aU) } } return [Math.round(aO) % 360, aV, aL, aS == null ? 1 : aS] };
    A.hsla.from = function(aO) { if (aO[0] == null || aO[1] == null || aO[2] == null) { return [null, null, null, aO[3]] } var aN = aO[0] / 360,
            aM = aO[1],
            aL = aO[2],
            aK = aO[3],
            aP = aL <= 0.5 ? aL * (1 + aM) : aL + aM - aL * aM,
            aQ = 2 * aL - aP; return [Math.round(k(aQ, aP, aN + (1 / 3)) * 255), Math.round(k(aQ, aP, aN) * 255), Math.round(k(aQ, aP, aN - (1 / 3)) * 255), aK] };
    aH(A, function(aL, aN) { var aM = aN.props,
            aK = aN.cache,
            aP = aN.to,
            aO = aN.from;
        t.fn[aL] = function(aU) { if (aP && !this[aK]) { this[aK] = aP(this._rgba) } if (aU === undefined) { return this[aK].slice() } var aR, aT = v(aU),
                aQ = (aT === "array" || aT === "object") ? aU : arguments,
                aS = this[aK].slice();
            aH(aM, function(aV, aX) { var aW = aQ[aT === "object" ? aV : aX.idx]; if (aW == null) { aW = aS[aX.idx] }
                aS[aX.idx] = aA(aW, aX) }); if (aO) { aR = t(aO(aS));
                aR[aK] = aS; return aR } else { return t(aS) } };
        aH(aM, function(aQ, aR) { if (t.fn[aQ]) { return }
            t.fn[aQ] = function(aV) { var aT, aX, aS, aU, aW = v(aV); if (aQ === "alpha") { aU = this._hsla ? "hsla" : "rgba" } else { aU = aL }
                aT = this[aU]();
                aX = aT[aR.idx]; if (aW === "undefined") { return aX } if (aW === "function") { aV = aV.call(this, aX);
                    aW = v(aV) } if (aV == null && aR.empty) { return this } if (aW === "string") { aS = z.exec(aV); if (aS) { aV = aX + parseFloat(aS[2]) * (aS[1] === "+" ? 1 : -1) } }
                aT[aR.idx] = aV; return this[aU](aT) } }) });
    t.hook = function(aL) { var aK = aL.split(" ");
        aH(aK, function(aN, aM) { b.cssHooks[aM] = { set: function(aR, aS) { var aP, aQ, aO = ""; if (aS !== "transparent" && (v(aS) !== "string" || (aP = D(aS)))) { aS = t(aP || aS); if (!aD.rgba && aS._rgba[3] !== 1) { aQ = aM === "backgroundColor" ? aR.parentNode : aR; while ((aO === "" || aO === "transparent") && aQ && aQ.style) { try { aO = b.css(aQ, "backgroundColor");
                                    aQ = aQ.parentNode } catch (aT) {} }
                            aS = aS.blend(aO && aO !== "transparent" ? aO : "_default") }
                        aS = aS.toRgbaString() } try { aR.style[aM] = aS } catch (aT) {} } };
            b.fx.step[aM] = function(aO) { if (!aO.colorInit) { aO.start = t(aO.elem, aM);
                    aO.end = t(aO.end);
                    aO.colorInit = true }
                b.cssHooks[aM].set(aO.elem, aO.start.transition(aO.end, aO.pos)) } }) };
    t.hook(Q);
    b.cssHooks.borderColor = { expand: function(aL) { var aK = {};
            aH(["Top", "Right", "Bottom", "Left"], function(aN, aM) { aK["border" + aM + "Color"] = aL }); return aK } };
    au = b.Color.names = { aqua: "#00ffff", black: "#000000", blue: "#0000ff", fuchsia: "#ff00ff", gray: "#808080", green: "#008000", lime: "#00ff00", maroon: "#800000", navy: "#000080", olive: "#808000", purple: "#800080", red: "#ff0000", silver: "#c0c0c0", teal: "#008080", white: "#ffffff", yellow: "#ffff00", transparent: [null, null, null, 0], _default: "#ffffff" };
    /*!
     * jQuery UI Effects 1.13.0
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */
    var w = "ui-effects-",
        am = "ui-effects-style",
        aE = "ui-effects-animated";
    ax.effects = { effect: {} };
    (function() { var aL = ["add", "remove", "toggle"],
            aN = { border: 1, borderBottom: 1, borderColor: 1, borderLeft: 1, borderRight: 1, borderTop: 1, borderWidth: 1, margin: 1, padding: 1 };
        ax.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function(aP, aQ) { ax.fx.step[aQ] = function(aR) { if (aR.end !== "none" && !aR.setAttr || aR.pos === 1 && !aR.setAttr) { b.style(aR.elem, aQ, aR.end);
                    aR.setAttr = true } } });

        function aM(aP) { return aP.replace(/-([\da-z])/gi, function(aQ, aR) { return aR.toUpperCase() }) }

        function aO(aT) { var aQ, aP, aR = aT.ownerDocument.defaultView ? aT.ownerDocument.defaultView.getComputedStyle(aT, null) : aT.currentStyle,
                aS = {}; if (aR && aR.length && aR[0] && aR[aR[0]]) { aP = aR.length; while (aP--) { aQ = aR[aP]; if (typeof aR[aQ] === "string") { aS[aM(aQ)] = aR[aQ] } } } else { for (aQ in aR) { if (typeof aR[aQ] === "string") { aS[aQ] = aR[aQ] } } } return aS }

        function aK(aP, aR) { var aT = {},
                aQ, aS; for (aQ in aR) { aS = aR[aQ]; if (aP[aQ] !== aS) { if (!aN[aQ]) { if (ax.fx.step[aQ] || !isNaN(parseFloat(aS))) { aT[aQ] = aS } } } } return aT } if (!ax.fn.addBack) { ax.fn.addBack = function(aP) { return this.add(aP == null ? this.prevObject : this.prevObject.filter(aP)) } }
        ax.effects.animateClass = function(aP, aQ, aT, aS) { var aR = ax.speed(aQ, aT, aS); return this.queue(function() { var aW = ax(this),
                    aU = aW.attr("class") || "",
                    aV, aX = aR.children ? aW.find("*").addBack() : aW;
                aX = aX.map(function() { var aY = ax(this); return { el: aY, start: aO(this) } });
                aV = function() { ax.each(aL, function(aY, aZ) { if (aP[aZ]) { aW[aZ + "Class"](aP[aZ]) } }) };
                aV();
                aX = aX.map(function() { this.end = aO(this.el[0]);
                    this.diff = aK(this.start, this.end); return this });
                aW.attr("class", aU);
                aX = aX.map(function() { var a0 = this,
                        aY = ax.Deferred(),
                        aZ = ax.extend({}, aR, { queue: false, complete: function() { aY.resolve(a0) } });
                    this.el.animate(this.diff, aZ); return aY.promise() });
                ax.when.apply(ax, aX.get()).done(function() { aV();
                    ax.each(arguments, function() { var aY = this.el;
                        ax.each(this.diff, function(aZ) { aY.css(aZ, "") }) });
                    aR.complete.call(aW[0]) }) }) };
        ax.fn.extend({ addClass: (function(aP) { return function(aR, aQ, aT, aS) { return aQ ? ax.effects.animateClass.call(this, { add: aR }, aQ, aT, aS) : aP.apply(this, arguments) } })(ax.fn.addClass), removeClass: (function(aP) { return function(aR, aQ, aT, aS) { return arguments.length > 1 ? ax.effects.animateClass.call(this, { remove: aR }, aQ, aT, aS) : aP.apply(this, arguments) } })(ax.fn.removeClass), toggleClass: (function(aP) { return function(aS, aR, aQ, aU, aT) { if (typeof aR === "boolean" || aR === undefined) { if (!aQ) { return aP.apply(this, arguments) } else { return ax.effects.animateClass.call(this, (aR ? { add: aS } : { remove: aS }), aQ, aU, aT) } } else { return ax.effects.animateClass.call(this, { toggle: aS }, aR, aQ, aU) } } })(ax.fn.toggleClass), switchClass: function(aP, aR, aQ, aT, aS) { return ax.effects.animateClass.call(this, { add: aR, remove: aP }, aQ, aT, aS) } }) })();
    (function() { if (ax.expr && ax.expr.pseudos && ax.expr.pseudos.animated) { ax.expr.pseudos.animated = (function(aN) { return function(aO) { return !!ax(aO).data(aE) || aN(aO) } })(ax.expr.pseudos.animated) } if (ax.uiBackCompat !== false) { ax.extend(ax.effects, { save: function(aO, aQ) { var aN = 0,
                        aP = aQ.length; for (; aN < aP; aN++) { if (aQ[aN] !== null) { aO.data(w + aQ[aN], aO[0].style[aQ[aN]]) } } }, restore: function(aO, aR) { var aQ, aN = 0,
                        aP = aR.length; for (; aN < aP; aN++) { if (aR[aN] !== null) { aQ = aO.data(w + aR[aN]);
                            aO.css(aR[aN], aQ) } } }, setMode: function(aN, aO) { if (aO === "toggle") { aO = aN.is(":hidden") ? "show" : "hide" } return aO }, createWrapper: function(aO) { if (aO.parent().is(".ui-effects-wrapper")) { return aO.parent() } var aP = { width: aO.outerWidth(true), height: aO.outerHeight(true), "float": aO.css("float") },
                        aS = ax("<div></div>").addClass("ui-effects-wrapper").css({ fontSize: "100%", background: "transparent", border: "none", margin: 0, padding: 0 }),
                        aN = { width: aO.width(), height: aO.height() },
                        aR = document.activeElement; try { aR.id } catch (aQ) { aR = document.body }
                    aO.wrap(aS); if (aO[0] === aR || ax.contains(aO[0], aR)) { ax(aR).trigger("focus") }
                    aS = aO.parent(); if (aO.css("position") === "static") { aS.css({ position: "relative" });
                        aO.css({ position: "relative" }) } else { ax.extend(aP, { position: aO.css("position"), zIndex: aO.css("z-index") });
                        ax.each(["top", "left", "bottom", "right"], function(aT, aU) { aP[aU] = aO.css(aU); if (isNaN(parseInt(aP[aU], 10))) { aP[aU] = "auto" } });
                        aO.css({ position: "relative", top: 0, left: 0, right: "auto", bottom: "auto" }) }
                    aO.css(aN); return aS.css(aP).show() }, removeWrapper: function(aN) { var aO = document.activeElement; if (aN.parent().is(".ui-effects-wrapper")) { aN.parent().replaceWith(aN); if (aN[0] === aO || ax.contains(aN[0], aO)) { ax(aO).trigger("focus") } } return aN } }) }
        ax.extend(ax.effects, { version: "1.13.0", define: function(aN, aP, aO) { if (!aO) { aO = aP;
                    aP = "effect" }
                ax.effects.effect[aN] = aO;
                ax.effects.effect[aN].mode = aP; return aO }, scaledDimensions: function(aO, aP, aQ) { if (aP === 0) { return { height: 0, width: 0, outerHeight: 0, outerWidth: 0 } } var aN = aQ !== "horizontal" ? ((aP || 100) / 100) : 1,
                    aR = aQ !== "vertical" ? ((aP || 100) / 100) : 1; return { height: aO.height() * aR, width: aO.width() * aN, outerHeight: aO.outerHeight() * aR, outerWidth: aO.outerWidth() * aN } }, clipToBox: function(aN) { return { width: aN.clip.right - aN.clip.left, height: aN.clip.bottom - aN.clip.top, left: aN.clip.left, top: aN.clip.top } }, unshift: function(aO, aQ, aP) { var aN = aO.queue(); if (aQ > 1) { aN.splice.apply(aN, [1, 0].concat(aN.splice(aQ, aP))) }
                aO.dequeue() }, saveStyle: function(aN) { aN.data(am, aN[0].style.cssText) }, restoreStyle: function(aN) { aN[0].style.cssText = aN.data(am) || "";
                aN.removeData(am) }, mode: function(aN, aP) { var aO = aN.is(":hidden"); if (aP === "toggle") { aP = aO ? "show" : "hide" } if (aO ? aP === "hide" : aP === "show") { aP = "none" } return aP }, getBaseline: function(aO, aP) { var aQ, aN; switch (aO[0]) {
                    case "top":
                        aQ = 0; break;
                    case "middle":
                        aQ = 0.5; break;
                    case "bottom":
                        aQ = 1; break;
                    default:
                        aQ = aO[0] / aP.height } switch (aO[1]) {
                    case "left":
                        aN = 0; break;
                    case "center":
                        aN = 0.5; break;
                    case "right":
                        aN = 1; break;
                    default:
                        aN = aO[1] / aP.width } return { x: aN, y: aQ } }, createPlaceholder: function(aO) { var aQ, aP = aO.css("position"),
                    aN = aO.position();
                aO.css({ marginTop: aO.css("marginTop"), marginBottom: aO.css("marginBottom"), marginLeft: aO.css("marginLeft"), marginRight: aO.css("marginRight") }).outerWidth(aO.outerWidth()).outerHeight(aO.outerHeight()); if (/^(static|relative)/.test(aP)) { aP = "absolute";
                    aQ = ax("<" + aO[0].nodeName + ">").insertAfter(aO).css({ display: /^(inline|ruby)/.test(aO.css("display")) ? "inline-block" : "block", visibility: "hidden", marginTop: aO.css("marginTop"), marginBottom: aO.css("marginBottom"), marginLeft: aO.css("marginLeft"), marginRight: aO.css("marginRight"), "float": aO.css("float") }).outerWidth(aO.outerWidth()).outerHeight(aO.outerHeight()).addClass("ui-effects-placeholder");
                    aO.data(w + "placeholder", aQ) }
                aO.css({ position: aP, left: aN.left, top: aN.top }); return aQ }, removePlaceholder: function(aN) { var aP = w + "placeholder",
                    aO = aN.data(aP); if (aO) { aO.remove();
                    aN.removeData(aP) } }, cleanUp: function(aN) { ax.effects.restoreStyle(aN);
                ax.effects.removePlaceholder(aN) }, setTransition: function(aO, aQ, aN, aP) { aP = aP || {};
                ax.each(aQ, function(aS, aR) { var aT = aO.cssUnit(aR); if (aT[0] > 0) { aP[aR] = aT[0] * aN + aT[1] } }); return aP } });

        function aL(aO, aN, aP, aQ) { if (ax.isPlainObject(aO)) { aN = aO;
                aO = aO.effect }
            aO = { effect: aO }; if (aN == null) { aN = {} } if (typeof aN === "function") { aQ = aN;
                aP = null;
                aN = {} } if (typeof aN === "number" || ax.fx.speeds[aN]) { aQ = aP;
                aP = aN;
                aN = {} } if (typeof aP === "function") { aQ = aP;
                aP = null } if (aN) { ax.extend(aO, aN) }
            aP = aP || aN.duration;
            aO.duration = ax.fx.off ? 0 : typeof aP === "number" ? aP : aP in ax.fx.speeds ? ax.fx.speeds[aP] : ax.fx.speeds._default;
            aO.complete = aQ || aN.complete; return aO }

        function aM(aN) { if (!aN || typeof aN === "number" || ax.fx.speeds[aN]) { return true } if (typeof aN === "string" && !ax.effects.effect[aN]) { return true } if (typeof aN === "function") { return true } if (typeof aN === "object" && !aN.effect) { return true } return false }
        ax.fn.extend({ effect: function() { var aV = aL.apply(this, arguments),
                    aU = ax.effects.effect[aV.effect],
                    aR = aU.mode,
                    aT = aV.queue,
                    aQ = aT || "fx",
                    aN = aV.complete,
                    aS = aV.mode,
                    aO = [],
                    aW = function(aZ) { var aY = ax(this),
                            aX = ax.effects.mode(aY, aS) || aR;
                        aY.data(aE, true);
                        aO.push(aX); if (aR && (aX === "show" || (aX === aR && aX === "hide"))) { aY.show() } if (!aR || aX !== "none") { ax.effects.saveStyle(aY) } if (typeof aZ === "function") { aZ() } }; if (ax.fx.off || !aU) { if (aS) { return this[aS](aV.duration, aN) } else { return this.each(function() { if (aN) { aN.call(this) } }) } }

                function aP(aZ) { var a0 = ax(this);

                    function aY() { a0.removeData(aE);
                        ax.effects.cleanUp(a0); if (aV.mode === "hide") { a0.hide() }
                        aX() }

                    function aX() { if (typeof aN === "function") { aN.call(a0[0]) } if (typeof aZ === "function") { aZ() } }
                    aV.mode = aO.shift(); if (ax.uiBackCompat !== false && !aR) { if (a0.is(":hidden") ? aS === "hide" : aS === "show") { a0[aS]();
                            aX() } else { aU.call(a0[0], aV, aX) } } else { if (aV.mode === "none") { a0[aS]();
                            aX() } else { aU.call(a0[0], aV, aY) } } } return aT === false ? this.each(aW).each(aP) : this.queue(aQ, aW).queue(aQ, aP) }, show: (function(aN) { return function(aP) { if (aM(aP)) { return aN.apply(this, arguments) } else { var aO = aL.apply(this, arguments);
                        aO.mode = "show"; return this.effect.call(this, aO) } } })(ax.fn.show), hide: (function(aN) { return function(aP) { if (aM(aP)) { return aN.apply(this, arguments) } else { var aO = aL.apply(this, arguments);
                        aO.mode = "hide"; return this.effect.call(this, aO) } } })(ax.fn.hide), toggle: (function(aN) { return function(aP) { if (aM(aP) || typeof aP === "boolean") { return aN.apply(this, arguments) } else { var aO = aL.apply(this, arguments);
                        aO.mode = "toggle"; return this.effect.call(this, aO) } } })(ax.fn.toggle), cssUnit: function(aN) { var aO = this.css(aN),
                    aP = [];
                ax.each(["em", "px", "%", "pt"], function(aQ, aR) { if (aO.indexOf(aR) > 0) { aP = [parseFloat(aO), aR] } }); return aP }, cssClip: function(aN) { if (aN) { return this.css("clip", "rect(" + aN.top + "px " + aN.right + "px " + aN.bottom + "px " + aN.left + "px)") } return aK(this.css("clip"), this) }, transfer: function(aY, aQ) { var aS = ax(this),
                    aU = ax(aY.to),
                    aX = aU.css("position") === "fixed",
                    aT = ax("body"),
                    aV = aX ? aT.scrollTop() : 0,
                    aW = aX ? aT.scrollLeft() : 0,
                    aN = aU.offset(),
                    aP = { top: aN.top - aV, left: aN.left - aW, height: aU.innerHeight(), width: aU.innerWidth() },
                    aR = aS.offset(),
                    aO = ax("<div class='ui-effects-transfer'></div>");
                aO.appendTo("body").addClass(aY.className).css({ top: aR.top - aV, left: aR.left - aW, height: aS.innerHeight(), width: aS.innerWidth(), position: aX ? "fixed" : "absolute" }).animate(aP, aY.duration, aY.easing, function() { aO.remove(); if (typeof aQ === "function") { aQ() } }) } });

        function aK(aS, aP) { var aR = aP.outerWidth(),
                aQ = aP.outerHeight(),
                aO = /^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/,
                aN = aO.exec(aS) || ["", 0, aR, aQ, 0]; return { top: parseFloat(aN[1]) || 0, right: aN[2] === "auto" ? aR : parseFloat(aN[2]), bottom: aN[3] === "auto" ? aQ : parseFloat(aN[3]), left: parseFloat(aN[4]) || 0 } }
        ax.fx.step.clip = function(aN) { if (!aN.clipInit) { aN.start = ax(aN.elem).cssClip(); if (typeof aN.end === "string") { aN.end = aK(aN.end, aN.elem) }
                aN.clipInit = true }
            ax(aN.elem).cssClip({ top: aN.pos * (aN.end.top - aN.start.top) + aN.start.top, right: aN.pos * (aN.end.right - aN.start.right) + aN.start.right, bottom: aN.pos * (aN.end.bottom - aN.start.bottom) + aN.start.bottom, left: aN.pos * (aN.end.left - aN.start.left) + aN.start.left }) } })();
    (function() { var aK = {};
        ax.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(aM, aL) { aK[aL] = function(aN) { return Math.pow(aN, aM + 2) } });
        ax.extend(aK, { Sine: function(aL) { return 1 - Math.cos(aL * Math.PI / 2) }, Circ: function(aL) { return 1 - Math.sqrt(1 - aL * aL) }, Elastic: function(aL) { return aL === 0 || aL === 1 ? aL : -Math.pow(2, 8 * (aL - 1)) * Math.sin(((aL - 1) * 80 - 7.5) * Math.PI / 15) }, Back: function(aL) { return aL * aL * (3 * aL - 2) }, Bounce: function(aN) { var aL, aM = 4; while (aN < ((aL = Math.pow(2, --aM)) - 1) / 11) {} return 1 / Math.pow(4, 3 - aM) - 7.5625 * Math.pow((aL * 3 - 2) / 22 - aN, 2) } });
        ax.each(aK, function(aM, aL) { ax.easing["easeIn" + aM] = aL;
            ax.easing["easeOut" + aM] = function(aN) { return 1 - aL(1 - aN) };
            ax.easing["easeInOut" + aM] = function(aN) { return aN < 0.5 ? aL(aN * 2) / 2 : 1 - aL(aN * -2 + 2) / 2 } }) })();
    var N = ax.effects;
    /*!
     * jQuery UI Effects Blind 1.13.0
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */
    var K = ax.effects.define("blind", "hide", function(aM, aK) { var aP = { up: ["bottom", "top"], vertical: ["bottom", "top"], down: ["top", "bottom"], left: ["right", "left"], horizontal: ["right", "left"], right: ["left", "right"] },
            aN = ax(this),
            aO = aM.direction || "up",
            aR = aN.cssClip(),
            aL = { clip: ax.extend({}, aR) },
            aQ = ax.effects.createPlaceholder(aN);
        aL.clip[aP[aO][0]] = aL.clip[aP[aO][1]]; if (aM.mode === "show") { aN.cssClip(aL.clip); if (aQ) { aQ.css(ax.effects.clipToBox(aL)) }
            aL.clip = aR } if (aQ) { aQ.animate(ax.effects.clipToBox(aL), aM.duration, aM.easing) }
        aN.animate(aL, { queue: false, duration: aM.duration, easing: aM.easing, complete: aK }) });
    /*!
     * jQuery UI Effects Bounce 1.13.0
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */
    var E = ax.effects.define("bounce", function(aL, aS) { var aO, aW, aZ, aK = ax(this),
            aR = aL.mode,
            aQ = aR === "hide",
            a0 = aR === "show",
            a1 = aL.direction || "up",
            aM = aL.distance,
            aP = aL.times || 5,
            a2 = aP * 2 + (a0 || aQ ? 1 : 0),
            aY = aL.duration / a2,
            aU = aL.easing,
            aN = (a1 === "up" || a1 === "down") ? "top" : "left",
            aT = (a1 === "up" || a1 === "left"),
            aX = 0,
            aV = aK.queue().length;
        ax.effects.createPlaceholder(aK);
        aZ = aK.css(aN); if (!aM) { aM = aK[aN === "top" ? "outerHeight" : "outerWidth"]() / 3 } if (a0) { aW = { opacity: 1 };
            aW[aN] = aZ;
            aK.css("opacity", 0).css(aN, aT ? -aM * 2 : aM * 2).animate(aW, aY, aU) } if (aQ) { aM = aM / Math.pow(2, aP - 1) }
        aW = {};
        aW[aN] = aZ; for (; aX < aP; aX++) { aO = {};
            aO[aN] = (aT ? "-=" : "+=") + aM;
            aK.animate(aO, aY, aU).animate(aW, aY, aU);
            aM = aQ ? aM * 2 : aM / 2 } if (aQ) { aO = { opacity: 0 };
            aO[aN] = (aT ? "-=" : "+=") + aM;
            aK.animate(aO, aY, aU) }
        aK.queue(aS);
        ax.effects.unshift(aK, aV, a2 + 1) });
    /*!
     * jQuery UI Effects Clip 1.13.0
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */
    var an = ax.effects.define("clip", "hide", function(aS, aO) { var aL, aM = {},
            aP = ax(this),
            aR = aS.direction || "vertical",
            aQ = aR === "both",
            aK = aQ || aR === "horizontal",
            aN = aQ || aR === "vertical";
        aL = aP.cssClip();
        aM.clip = { top: aN ? (aL.bottom - aL.top) / 2 : aL.top, right: aK ? (aL.right - aL.left) / 2 : aL.right, bottom: aN ? (aL.bottom - aL.top) / 2 : aL.bottom, left: aK ? (aL.right - aL.left) / 2 : aL.left };
        ax.effects.createPlaceholder(aP); if (aS.mode === "show") { aP.cssClip(aM.clip);
            aM.clip = aL }
        aP.animate(aM, { queue: false, duration: aS.duration, easing: aS.easing, complete: aO }) });
    /*!
     * jQuery UI Effects Drop 1.13.0
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */
    var ac = ax.effects.define("drop", "hide", function(aU, aN) { var aK, aO = ax(this),
            aQ = aU.mode,
            aS = aQ === "show",
            aR = aU.direction || "left",
            aL = (aR === "up" || aR === "down") ? "top" : "left",
            aT = (aR === "up" || aR === "left") ? "-=" : "+=",
            aP = (aT === "+=") ? "-=" : "+=",
            aM = { opacity: 0 };
        ax.effects.createPlaceholder(aO);
        aK = aU.distance || aO[aL === "top" ? "outerHeight" : "outerWidth"](true) / 2;
        aM[aL] = aT + aK; if (aS) { aO.css(aM);
            aM[aL] = aP + aK;
            aM.opacity = 1 }
        aO.animate(aM, { queue: false, duration: aU.duration, easing: aU.easing, complete: aN }) });
    /*!
     * jQuery UI Effects Explode 1.13.0
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */
    var aI = ax.effects.define("explode", "hide", function(aL, aX) { var a0, aZ, aN, aV, aU, aS, aR = aL.pieces ? Math.round(Math.sqrt(aL.pieces)) : 3,
            aM = aR,
            aK = ax(this),
            aT = aL.mode,
            a1 = aT === "show",
            aP = aK.show().css("visibility", "hidden").offset(),
            aY = Math.ceil(aK.outerWidth() / aM),
            aW = Math.ceil(aK.outerHeight() / aR),
            aQ = [];

        function a2() { aQ.push(this); if (aQ.length === aR * aM) { aO() } } for (a0 = 0; a0 < aR; a0++) { aV = aP.top + a0 * aW;
            aS = a0 - (aR - 1) / 2; for (aZ = 0; aZ < aM; aZ++) { aN = aP.left + aZ * aY;
                aU = aZ - (aM - 1) / 2;
                aK.clone().appendTo("body").wrap("<div></div>").css({ position: "absolute", visibility: "visible", left: -aZ * aY, top: -a0 * aW }).parent().addClass("ui-effects-explode").css({ position: "absolute", overflow: "hidden", width: aY, height: aW, left: aN + (a1 ? aU * aY : 0), top: aV + (a1 ? aS * aW : 0), opacity: a1 ? 0 : 1 }).animate({ left: aN + (a1 ? 0 : aU * aY), top: aV + (a1 ? 0 : aS * aW), opacity: a1 ? 1 : 0 }, aL.duration || 500, aL.easing, a2) } }

        function aO() { aK.css({ visibility: "visible" });
            ax(aQ).remove();
            aX() } });
    /*!
     * jQuery UI Effects Fade 1.13.0
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */
    var aJ = ax.effects.define("fade", "toggle", function(aM, aL) { var aK = aM.mode === "show";
        ax(this).css("opacity", aK ? 0 : 1).animate({ opacity: aK ? 1 : 0 }, { queue: false, duration: aM.duration, easing: aM.easing, complete: aL }) });
    /*!
     * jQuery UI Effects Fold 1.13.0
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */
    var x = ax.effects.define("fold", "hide", function(a0, aP) { var aQ = ax(this),
            aR = a0.mode,
            aX = aR === "show",
            aS = aR === "hide",
            aZ = a0.size || 15,
            aT = /([0-9]+)%/.exec(aZ),
            aY = !!a0.horizFirst,
            aN = aY ? ["right", "bottom"] : ["bottom", "right"],
            aO = a0.duration / 2,
            aW = ax.effects.createPlaceholder(aQ),
            aL = aQ.cssClip(),
            aV = { clip: ax.extend({}, aL) },
            aU = { clip: ax.extend({}, aL) },
            aK = [aL[aN[0]], aL[aN[1]]],
            aM = aQ.queue().length; if (aT) { aZ = parseInt(aT[1], 10) / 100 * aK[aS ? 0 : 1] }
        aV.clip[aN[0]] = aZ;
        aU.clip[aN[0]] = aZ;
        aU.clip[aN[1]] = 0; if (aX) { aQ.cssClip(aU.clip); if (aW) { aW.css(ax.effects.clipToBox(aU)) }
            aU.clip = aL }
        aQ.queue(function(a1) { if (aW) { aW.animate(ax.effects.clipToBox(aV), aO, a0.easing).animate(ax.effects.clipToBox(aU), aO, a0.easing) }
            a1() }).animate(aV, aO, a0.easing).animate(aU, aO, a0.easing).queue(aP);
        ax.effects.unshift(aQ, aM, 4) });
    /*!
     * jQuery UI Effects Highlight 1.13.0
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */
    var O = ax.effects.define("highlight", "show", function(aL, aK) { var aM = ax(this),
            aN = { backgroundColor: aM.css("backgroundColor") }; if (aL.mode === "hide") { aN.opacity = 0 }
        ax.effects.saveStyle(aM);
        aM.css({ backgroundImage: "none", backgroundColor: aL.color || "#ffff99" }).animate(aN, { queue: false, duration: aL.duration, easing: aL.easing, complete: aK }) });
    /*!
     * jQuery UI Effects Size 1.13.0
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */
    var Z = ax.effects.define("size", function(aN, aT) { var aR, aS, aX, aK = ax(this),
            aP = ["fontSize"],
            aY = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
            aM = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],
            aQ = aN.mode,
            aW = aQ !== "effect",
            a1 = aN.scale || "both",
            aZ = aN.origin || ["middle", "center"],
            a0 = aK.css("position"),
            aO = aK.position(),
            aU = ax.effects.scaledDimensions(aK),
            aV = aN.from || aU,
            aL = aN.to || ax.effects.scaledDimensions(aK, 0);
        ax.effects.createPlaceholder(aK); if (aQ === "show") { aX = aV;
            aV = aL;
            aL = aX }
        aS = { from: { y: aV.height / aU.height, x: aV.width / aU.width }, to: { y: aL.height / aU.height, x: aL.width / aU.width } }; if (a1 === "box" || a1 === "both") { if (aS.from.y !== aS.to.y) { aV = ax.effects.setTransition(aK, aY, aS.from.y, aV);
                aL = ax.effects.setTransition(aK, aY, aS.to.y, aL) } if (aS.from.x !== aS.to.x) { aV = ax.effects.setTransition(aK, aM, aS.from.x, aV);
                aL = ax.effects.setTransition(aK, aM, aS.to.x, aL) } } if (a1 === "content" || a1 === "both") { if (aS.from.y !== aS.to.y) { aV = ax.effects.setTransition(aK, aP, aS.from.y, aV);
                aL = ax.effects.setTransition(aK, aP, aS.to.y, aL) } } if (aZ) { aR = ax.effects.getBaseline(aZ, aU);
            aV.top = (aU.outerHeight - aV.outerHeight) * aR.y + aO.top;
            aV.left = (aU.outerWidth - aV.outerWidth) * aR.x + aO.left;
            aL.top = (aU.outerHeight - aL.outerHeight) * aR.y + aO.top;
            aL.left = (aU.outerWidth - aL.outerWidth) * aR.x + aO.left }
        delete aV.outerHeight;
        delete aV.outerWidth;
        aK.css(aV); if (a1 === "content" || a1 === "both") { aY = aY.concat(["marginTop", "marginBottom"]).concat(aP);
            aM = aM.concat(["marginLeft", "marginRight"]);
            aK.find("*[width]").each(function() { var a5 = ax(this),
                    a2 = ax.effects.scaledDimensions(a5),
                    a4 = { height: a2.height * aS.from.y, width: a2.width * aS.from.x, outerHeight: a2.outerHeight * aS.from.y, outerWidth: a2.outerWidth * aS.from.x },
                    a3 = { height: a2.height * aS.to.y, width: a2.width * aS.to.x, outerHeight: a2.height * aS.to.y, outerWidth: a2.width * aS.to.x }; if (aS.from.y !== aS.to.y) { a4 = ax.effects.setTransition(a5, aY, aS.from.y, a4);
                    a3 = ax.effects.setTransition(a5, aY, aS.to.y, a3) } if (aS.from.x !== aS.to.x) { a4 = ax.effects.setTransition(a5, aM, aS.from.x, a4);
                    a3 = ax.effects.setTransition(a5, aM, aS.to.x, a3) } if (aW) { ax.effects.saveStyle(a5) }
                a5.css(a4);
                a5.animate(a3, aN.duration, aN.easing, function() { if (aW) { ax.effects.restoreStyle(a5) } }) }) }
        aK.animate(aL, { queue: false, duration: aN.duration, easing: aN.easing, complete: function() { var a2 = aK.offset(); if (aL.opacity === 0) { aK.css("opacity", aV.opacity) } if (!aW) { aK.css("position", a0 === "static" ? "relative" : a0).offset(a2);
                    ax.effects.saveStyle(aK) }
                aT() } }) });
    /*!
     * jQuery UI Effects Scale 1.13.0
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */
    var U = ax.effects.define("scale", function(aL, aK) { var aM = ax(this),
            aP = aL.mode,
            aN = parseInt(aL.percent, 10) || (parseInt(aL.percent, 10) === 0 ? 0 : (aP !== "effect" ? 0 : 100)),
            aO = ax.extend(true, { from: ax.effects.scaledDimensions(aM), to: ax.effects.scaledDimensions(aM, aN, aL.direction || "both"), origin: aL.origin || ["middle", "center"] }, aL); if (aL.fade) { aO.from.opacity = 1;
            aO.to.opacity = 0 }
        ax.effects.effect.size.call(this, aO, aK) });
    /*!
     * jQuery UI Effects Puff 1.13.0
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */
    var G = ax.effects.define("puff", "hide", function(aL, aK) { var aM = ax.extend(true, {}, aL, { fade: true, percent: parseInt(aL.percent, 10) || 150 });
        ax.effects.effect.scale.call(this, aM, aK) });
    /*!
     * jQuery UI Effects Pulsate 1.13.0
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */
    var B = ax.effects.define("pulsate", "show", function(aV, aM) { var aO = ax(this),
            aP = aV.mode,
            aT = aP === "show",
            aQ = aP === "hide",
            aU = aT || aQ,
            aR = ((aV.times || 5) * 2) + (aU ? 1 : 0),
            aL = aV.duration / aR,
            aS = 0,
            aN = 1,
            aK = aO.queue().length; if (aT || !aO.is(":visible")) { aO.css("opacity", 0).show();
            aS = 1 } for (; aN < aR; aN++) { aO.animate({ opacity: aS }, aL, aV.easing);
            aS = 1 - aS }
        aO.animate({ opacity: aS }, aL, aV.easing);
        aO.queue(aM);
        ax.effects.unshift(aO, aK, aR + 1) });
    /*!
     * jQuery UI Effects Shake 1.13.0
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */
    var at = ax.effects.define("shake", function(aY, aR) { var aS = 1,
            aT = ax(this),
            aV = aY.direction || "left",
            aK = aY.distance || 20,
            aL = aY.times || 3,
            aW = aL * 2 + 1,
            aP = Math.round(aY.duration / aW),
            aO = (aV === "up" || aV === "down") ? "top" : "left",
            aM = (aV === "up" || aV === "left"),
            aQ = {},
            aX = {},
            aU = {},
            aN = aT.queue().length;
        ax.effects.createPlaceholder(aT);
        aQ[aO] = (aM ? "-=" : "+=") + aK;
        aX[aO] = (aM ? "+=" : "-=") + aK * 2;
        aU[aO] = (aM ? "-=" : "+=") + aK * 2;
        aT.animate(aQ, aP, aY.easing); for (; aS < aL; aS++) { aT.animate(aX, aP, aY.easing).animate(aU, aP, aY.easing) }
        aT.animate(aX, aP, aY.easing).animate(aQ, aP / 2, aY.easing).queue(aR);
        ax.effects.unshift(aT, aN, aW + 1) });
    /*!
     * jQuery UI Effects Slide 1.13.0
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */
    var aq = ax.effects.define("slide", "show", function(aV, aR) { var aO, aL, aS = ax(this),
            aM = { up: ["bottom", "top"], down: ["top", "bottom"], left: ["right", "left"], right: ["left", "right"] },
            aT = aV.mode,
            aU = aV.direction || "left",
            aP = (aU === "up" || aU === "down") ? "top" : "left",
            aN = (aU === "up" || aU === "left"),
            aK = aV.distance || aS[aP === "top" ? "outerHeight" : "outerWidth"](true),
            aQ = {};
        ax.effects.createPlaceholder(aS);
        aO = aS.cssClip();
        aL = aS.position()[aP];
        aQ[aP] = (aN ? -1 : 1) * aK + aL;
        aQ.clip = aS.cssClip();
        aQ.clip[aM[aU][1]] = aQ.clip[aM[aU][0]]; if (aT === "show") { aS.cssClip(aQ.clip);
            aS.css(aP, aQ[aP]);
            aQ.clip = aO;
            aQ[aP] = aL }
        aS.animate(aQ, { queue: false, duration: aV.duration, easing: aV.easing, complete: aR }) });
    /*!
     * jQuery UI Effects Transfer 1.13.0
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */
    var N;
    if (ax.uiBackCompat !== false) { N = ax.effects.define("transfer", function(aL, aK) { ax(this).transfer(aL, aK) }) }
    var S = N
});
/*! jQuery Timepicker Addon - v1.6.3 - 2016-04-20
 * http://trentrichardson.com/examples/timepicker
 * Copyright (c) 2016 Trent Richardson; Licensed MIT */
(function(a) { if (typeof define === "function" && define.amd) { define(["jquery", "jquery-ui"], a) } else { a(jQuery) } }(function($) { $.ui.timepicker = $.ui.timepicker || {}; if ($.ui.timepicker.version) { return }
    $.extend($.ui, { timepicker: { version: "1.6.3" } }); var Timepicker = function() { this.regional = [];
        this.regional[""] = { currentText: "Now", closeText: "Done", amNames: ["AM", "A"], pmNames: ["PM", "P"], timeFormat: "HH:mm", timeSuffix: "", timeOnlyTitle: "Choose Time", timeText: "Time", hourText: "Hour", minuteText: "Minute", secondText: "Second", millisecText: "Millisecond", microsecText: "Microsecond", timezoneText: "Time Zone", isRTL: false };
        this._defaults = { showButtonPanel: true, timeOnly: false, timeOnlyShowDate: false, showHour: null, showMinute: null, showSecond: null, showMillisec: null, showMicrosec: null, showTimezone: null, showTime: true, stepHour: 1, stepMinute: 1, stepSecond: 1, stepMillisec: 1, stepMicrosec: 1, hour: 0, minute: 0, second: 0, millisec: 0, microsec: 0, timezone: null, hourMin: 0, minuteMin: 0, secondMin: 0, millisecMin: 0, microsecMin: 0, hourMax: 23, minuteMax: 59, secondMax: 59, millisecMax: 999, microsecMax: 999, minDateTime: null, maxDateTime: null, maxTime: null, minTime: null, onSelect: null, hourGrid: 0, minuteGrid: 0, secondGrid: 0, millisecGrid: 0, microsecGrid: 0, alwaysSetTime: true, separator: " ", altFieldTimeOnly: true, altTimeFormat: null, altSeparator: null, altTimeSuffix: null, altRedirectFocus: true, pickerTimeFormat: null, pickerTimeSuffix: null, showTimepicker: true, timezoneList: null, addSliderAccess: false, sliderAccessArgs: null, controlType: "slider", oneLine: false, defaultValue: null, parse: "strict", afterInject: null };
        $.extend(this._defaults, this.regional[""]) };
    $.extend(Timepicker.prototype, { $input: null, $altInput: null, $timeObj: null, inst: null, hour_slider: null, minute_slider: null, second_slider: null, millisec_slider: null, microsec_slider: null, timezone_select: null, maxTime: null, minTime: null, hour: 0, minute: 0, second: 0, millisec: 0, microsec: 0, timezone: null, hourMinOriginal: null, minuteMinOriginal: null, secondMinOriginal: null, millisecMinOriginal: null, microsecMinOriginal: null, hourMaxOriginal: null, minuteMaxOriginal: null, secondMaxOriginal: null, millisecMaxOriginal: null, microsecMaxOriginal: null, ampm: "", formattedDate: "", formattedTime: "", formattedDateTime: "", timezoneList: null, units: ["hour", "minute", "second", "millisec", "microsec"], support: {}, control: null, setDefaults: function(settings) { extendRemove(this._defaults, settings || {}); return this }, _newInst: function($input, opts) { var tp_inst = new Timepicker(),
                inlineSettings = {},
                fns = {},
                overrides, i; for (var attrName in this._defaults) { if (this._defaults.hasOwnProperty(attrName)) { var attrValue = $input.attr("time:" + attrName); if (attrValue) { try { inlineSettings[attrName] = eval(attrValue) } catch (err) { inlineSettings[attrName] = attrValue } } } }
            overrides = { beforeShow: function(input, dp_inst) { if (typeof tp_inst._defaults.evnts.beforeShow === "function") { return tp_inst._defaults.evnts.beforeShow.call($input[0], input, dp_inst, tp_inst) } }, onChangeMonthYear: function(year, month, dp_inst) { if (typeof tp_inst._defaults.evnts.onChangeMonthYear === "function") { tp_inst._defaults.evnts.onChangeMonthYear.call($input[0], year, month, dp_inst, tp_inst) } }, onClose: function(dateText, dp_inst) { if (tp_inst.timeDefined === true && $input.val() !== "") { tp_inst._updateDateTime(dp_inst) } if (typeof tp_inst._defaults.evnts.onClose === "function") { tp_inst._defaults.evnts.onClose.call($input[0], dateText, dp_inst, tp_inst) } } }; for (i in overrides) { if (overrides.hasOwnProperty(i)) { fns[i] = opts[i] || this._defaults[i] || null } }
            tp_inst._defaults = $.extend({}, this._defaults, inlineSettings, opts, overrides, { evnts: fns, timepicker: tp_inst });
            tp_inst.amNames = $.map(tp_inst._defaults.amNames, function(val) { return val.toUpperCase() });
            tp_inst.pmNames = $.map(tp_inst._defaults.pmNames, function(val) { return val.toUpperCase() });
            tp_inst.support = detectSupport(tp_inst._defaults.timeFormat + (tp_inst._defaults.pickerTimeFormat ? tp_inst._defaults.pickerTimeFormat : "") + (tp_inst._defaults.altTimeFormat ? tp_inst._defaults.altTimeFormat : "")); if (typeof(tp_inst._defaults.controlType) === "string") { if (tp_inst._defaults.controlType === "slider" && typeof($.ui.slider) === "undefined") { tp_inst._defaults.controlType = "select" }
                tp_inst.control = tp_inst._controls[tp_inst._defaults.controlType] } else { tp_inst.control = tp_inst._defaults.controlType } var timezoneList = [-720, -660, -600, -570, -540, -480, -420, -360, -300, -270, -240, -210, -180, -120, -60, 0, 60, 120, 180, 210, 240, 270, 300, 330, 345, 360, 390, 420, 480, 525, 540, 570, 600, 630, 660, 690, 720, 765, 780, 840]; if (tp_inst._defaults.timezoneList !== null) { timezoneList = tp_inst._defaults.timezoneList } var tzl = timezoneList.length,
                tzi = 0,
                tzv = null; if (tzl > 0 && typeof timezoneList[0] !== "object") { for (; tzi < tzl; tzi++) { tzv = timezoneList[tzi];
                    timezoneList[tzi] = { value: tzv, label: $.timepicker.timezoneOffsetString(tzv, tp_inst.support.iso8601) } } }
            tp_inst._defaults.timezoneList = timezoneList;
            tp_inst.timezone = tp_inst._defaults.timezone !== null ? $.timepicker.timezoneOffsetNumber(tp_inst._defaults.timezone) : ((new Date()).getTimezoneOffset() * -1);
            tp_inst.hour = tp_inst._defaults.hour < tp_inst._defaults.hourMin ? tp_inst._defaults.hourMin : tp_inst._defaults.hour > tp_inst._defaults.hourMax ? tp_inst._defaults.hourMax : tp_inst._defaults.hour;
            tp_inst.minute = tp_inst._defaults.minute < tp_inst._defaults.minuteMin ? tp_inst._defaults.minuteMin : tp_inst._defaults.minute > tp_inst._defaults.minuteMax ? tp_inst._defaults.minuteMax : tp_inst._defaults.minute;
            tp_inst.second = tp_inst._defaults.second < tp_inst._defaults.secondMin ? tp_inst._defaults.secondMin : tp_inst._defaults.second > tp_inst._defaults.secondMax ? tp_inst._defaults.secondMax : tp_inst._defaults.second;
            tp_inst.millisec = tp_inst._defaults.millisec < tp_inst._defaults.millisecMin ? tp_inst._defaults.millisecMin : tp_inst._defaults.millisec > tp_inst._defaults.millisecMax ? tp_inst._defaults.millisecMax : tp_inst._defaults.millisec;
            tp_inst.microsec = tp_inst._defaults.microsec < tp_inst._defaults.microsecMin ? tp_inst._defaults.microsecMin : tp_inst._defaults.microsec > tp_inst._defaults.microsecMax ? tp_inst._defaults.microsecMax : tp_inst._defaults.microsec;
            tp_inst.ampm = "";
            tp_inst.$input = $input; if (tp_inst._defaults.altField) { tp_inst.$altInput = $(tp_inst._defaults.altField); if (tp_inst._defaults.altRedirectFocus === true) { tp_inst.$altInput.css({ cursor: "pointer" }).on("focus", function() { $input.trigger("focus") }) } } if (tp_inst._defaults.minDate === 0 || tp_inst._defaults.minDateTime === 0) { tp_inst._defaults.minDate = new Date() } if (tp_inst._defaults.maxDate === 0 || tp_inst._defaults.maxDateTime === 0) { tp_inst._defaults.maxDate = new Date() } if (tp_inst._defaults.minDate !== undefined && tp_inst._defaults.minDate instanceof Date) { tp_inst._defaults.minDateTime = new Date(tp_inst._defaults.minDate.getTime()) } if (tp_inst._defaults.minDateTime !== undefined && tp_inst._defaults.minDateTime instanceof Date) { tp_inst._defaults.minDate = new Date(tp_inst._defaults.minDateTime.getTime()) } if (tp_inst._defaults.maxDate !== undefined && tp_inst._defaults.maxDate instanceof Date) { tp_inst._defaults.maxDateTime = new Date(tp_inst._defaults.maxDate.getTime()) } if (tp_inst._defaults.maxDateTime !== undefined && tp_inst._defaults.maxDateTime instanceof Date) { tp_inst._defaults.maxDate = new Date(tp_inst._defaults.maxDateTime.getTime()) }
            tp_inst.$input.on("focus", function() { tp_inst._onFocus() }); return tp_inst }, _addTimePicker: function(dp_inst) { var currDT = PrimeFaces.trim((this.$altInput && this._defaults.altFieldTimeOnly) ? this.$input.val() + " " + this.$altInput.val() : this.$input.val());
            this.timeDefined = this._parseTime(currDT);
            this._limitMinMaxDateTime(dp_inst, false);
            this._injectTimePicker();
            this._afterInject() }, _parseTime: function(timeString, withDate) { if (!this.inst) { this.inst = $.datepicker._getInst(this.$input[0]) } if (withDate || !this._defaults.timeOnly) { var dp_dateFormat = $.datepicker._get(this.inst, "dateFormat"); try { var parseRes = parseDateTimeInternal(dp_dateFormat, this._defaults.timeFormat, timeString, $.datepicker._getFormatConfig(this.inst), this._defaults); if (!parseRes.timeObj) { return false }
                    $.extend(this, parseRes.timeObj) } catch (err) { $.timepicker.log("Error parsing the date/time string: " + err + "\ndate/time string = " + timeString + "\ntimeFormat = " + this._defaults.timeFormat + "\ndateFormat = " + dp_dateFormat); return false } return true } else { var timeObj = $.datepicker.parseTime(this._defaults.timeFormat, timeString, this._defaults); if (!timeObj) { return false }
                $.extend(this, timeObj); return true } }, _afterInject: function() { var o = this.inst.settings; if (typeof o.afterInject === "function") { o.afterInject.call(this) } }, _injectTimePicker: function() { var $dp = this.inst.dpDiv,
                o = this.inst.settings,
                tp_inst = this,
                litem = "",
                uitem = "",
                show = null,
                max = {},
                gridSize = {},
                size = null,
                i = 0,
                l = 0; if ($dp.find("div.ui-timepicker-div").length === 0 && o.showTimepicker) { var noDisplay = " ui_tpicker_unit_hide",
                    html = '<div class="ui-timepicker-div' + (o.isRTL ? " ui-timepicker-rtl" : "") + (o.oneLine && o.controlType === "select" ? " ui-timepicker-oneLine" : "") + '"><dl><dt class="ui_tpicker_time_label' + ((o.showTime) ? "" : noDisplay) + '">' + o.timeText + '</dt><dd class="ui_tpicker_time ' + ((o.showTime) ? "" : noDisplay) + '"><input class="ui_tpicker_time_input" ' + (o.timeInput ? "" : "disabled") + "></input></dd>"; for (i = 0, l = this.units.length; i < l; i++) { litem = this.units[i];
                    uitem = litem.substr(0, 1).toUpperCase() + litem.substr(1);
                    show = o["show" + uitem] !== null ? o["show" + uitem] : this.support[litem];
                    max[litem] = parseInt((o[litem + "Max"] - ((o[litem + "Max"] - o[litem + "Min"]) % o["step" + uitem])), 10);
                    gridSize[litem] = 0;
                    html += '<dt class="ui_tpicker_' + litem + "_label" + (show ? "" : noDisplay) + '">' + o[litem + "Text"] + '</dt><dd class="ui_tpicker_' + litem + (show ? "" : noDisplay) + '"><div class="ui_tpicker_' + litem + "_slider" + (show ? "" : noDisplay) + '"></div>'; if (show && o[litem + "Grid"] > 0) { html += '<div style="padding-left: 1px"><table class="ui-tpicker-grid-label"><tr>'; if (litem === "hour") { for (var h = o[litem + "Min"]; h <= max[litem]; h += parseInt(o[litem + "Grid"], 10)) { gridSize[litem]++; var tmph = $.datepicker.formatTime(this.support.ampm ? "hht" : "HH", { hour: h }, o);
                                html += '<td data-for="' + litem + '">' + tmph + "</td>" } } else { for (var m = o[litem + "Min"]; m <= max[litem]; m += parseInt(o[litem + "Grid"], 10)) { gridSize[litem]++;
                                html += '<td data-for="' + litem + '">' + ((m < 10) ? "0" : "") + m + "</td>" } }
                        html += "</tr></table></div>" }
                    html += "</dd>" } var showTz = o.showTimezone !== null ? o.showTimezone : this.support.timezone;
                html += '<dt class="ui_tpicker_timezone_label' + (showTz ? "" : noDisplay) + '">' + o.timezoneText + "</dt>";
                html += '<dd class="ui_tpicker_timezone' + (showTz ? "" : noDisplay) + '"></dd>';
                html += "</dl></div>"; var $tp = $(html); if (o.timeOnly === true) { $tp.prepend('<div class="ui-widget-header ui-helper-clearfix ui-corner-all"><div class="ui-datepicker-title">' + PrimeFaces.escapeHTML(o.timeOnlyTitle) + "</div></div>");
                    $dp.find(".ui-datepicker-header, .ui-datepicker-calendar").hide() } for (i = 0, l = tp_inst.units.length; i < l; i++) { litem = tp_inst.units[i];
                    uitem = litem.substr(0, 1).toUpperCase() + litem.substr(1);
                    show = o["show" + uitem] !== null ? o["show" + uitem] : this.support[litem];
                    tp_inst[litem + "_slider"] = tp_inst.control.create(tp_inst, $tp.find(".ui_tpicker_" + litem + "_slider"), litem, tp_inst[litem], o[litem + "Min"], max[litem], o["step" + uitem]); if (show && o[litem + "Grid"] > 0) { size = 100 * gridSize[litem] * o[litem + "Grid"] / (max[litem] - o[litem + "Min"]);
                        $tp.find(".ui_tpicker_" + litem + " table").css({ width: size + "%", marginLeft: o.isRTL ? "0" : ((size / (-2 * gridSize[litem])) + "%"), marginRight: o.isRTL ? ((size / (-2 * gridSize[litem])) + "%") : "0px", borderCollapse: "collapse" }).find("td").on("click", function(e) { var $t = $(this),
                                h = $t.html(),
                                n = parseInt(h.replace(/[^0-9]/g), 10),
                                ap = h.replace(/[^apm]/ig),
                                f = $t.data("for"); if (f === "hour") { if (ap.indexOf("p") !== -1 && n < 12) { n += 12 } else { if (ap.indexOf("a") !== -1 && n === 12) { n = 0 } } }
                            tp_inst.control.value(tp_inst, tp_inst[f + "_slider"], litem, n);
                            tp_inst._onTimeChange();
                            tp_inst._onSelectHandler() }).css({ cursor: "pointer", width: (100 / gridSize[litem]) + "%", textAlign: "center", overflow: "hidden" }) } }
                this.timezone_select = $tp.find(".ui_tpicker_timezone").append("<select></select>").find("select");
                $.fn.append.apply(this.timezone_select, $.map(o.timezoneList, function(val, idx) { return $("<option></option>").val(typeof val === "object" ? val.value : val).text(typeof val === "object" ? val.label : val) })); if (typeof(this.timezone) !== "undefined" && this.timezone !== null && this.timezone !== "") { var local_timezone = (new Date(this.inst.selectedYear, this.inst.selectedMonth, this.inst.selectedDay, 12)).getTimezoneOffset() * -1; if (local_timezone === this.timezone) { selectLocalTimezone(tp_inst) } else { this.timezone_select.val(this.timezone) } } else { if (typeof(this.hour) !== "undefined" && this.hour !== null && this.hour !== "") { this.timezone_select.val(o.timezone) } else { selectLocalTimezone(tp_inst) } }
                this.timezone_select.on("change", function() { tp_inst._onTimeChange();
                    tp_inst._onSelectHandler();
                    tp_inst._afterInject() }); var $buttonPanel = $dp.find(".ui-datepicker-buttonpane"); if ($buttonPanel.length) { $buttonPanel.before($tp) } else { $dp.append($tp) }
                this.$timeObj = $tp.find(".ui_tpicker_time_input");
                this.$timeObj.on("change", function() { var timeFormat = tp_inst.inst.settings.timeFormat; var parsedTime = $.datepicker.parseTime(timeFormat, this.value); var update = new Date(); if (parsedTime) { update.setHours(parsedTime.hour);
                        update.setMinutes(parsedTime.minute);
                        update.setSeconds(parsedTime.second);
                        $.datepicker._setTime(tp_inst.inst, update) } else { this.value = tp_inst.formattedTime;
                        this.trigger("blur") } }); if (this.inst !== null) { var timeDefined = this.timeDefined;
                    this._onTimeChange();
                    this.timeDefined = timeDefined } if (this._defaults.addSliderAccess) { var sliderAccessArgs = this._defaults.sliderAccessArgs,
                        rtl = this._defaults.isRTL;
                    sliderAccessArgs.isRTL = rtl;
                    setTimeout(function() { if ($tp.find(".ui-slider-access").length === 0) { $tp.find(".ui-slider:visible").sliderAccess(sliderAccessArgs); var sliderAccessWidth = $tp.find(".ui-slider-access:eq(0)").outerWidth(true); if (sliderAccessWidth) { $tp.find("table:visible").each(function() { var $g = $(this),
                                        oldWidth = $g.outerWidth(),
                                        oldMarginLeft = $g.css(rtl ? "marginRight" : "marginLeft").toString().replace("%", ""),
                                        newWidth = oldWidth - sliderAccessWidth,
                                        newMarginLeft = ((oldMarginLeft * newWidth) / oldWidth) + "%",
                                        css = { width: newWidth + "px", marginRight: "0px", marginLeft: "0px" };
                                    css[rtl ? "marginRight" : "marginLeft"] = newMarginLeft;
                                    $g.css(css) }) } } }, 10) }
                tp_inst._limitMinMaxDateTime(this.inst, true) } }, _limitMinMaxDateTime: function(dp_inst, adjustSliders) { var o = this._defaults,
                dp_date = new Date(dp_inst.selectedYear, dp_inst.selectedMonth, dp_inst.selectedDay); if (!this._defaults.showTimepicker) { return } if ($.datepicker._get(dp_inst, "minDateTime") !== null && $.datepicker._get(dp_inst, "minDateTime") !== undefined && dp_date) { var minDateTime = $.datepicker._get(dp_inst, "minDateTime"),
                    minDateTimeDate = new Date(minDateTime.getFullYear(), minDateTime.getMonth(), minDateTime.getDate(), 0, 0, 0, 0); if (this.hourMinOriginal === null || this.minuteMinOriginal === null || this.secondMinOriginal === null || this.millisecMinOriginal === null || this.microsecMinOriginal === null) { this.hourMinOriginal = o.hourMin;
                    this.minuteMinOriginal = o.minuteMin;
                    this.secondMinOriginal = o.secondMin;
                    this.millisecMinOriginal = o.millisecMin;
                    this.microsecMinOriginal = o.microsecMin } if (dp_inst.settings.timeOnly || minDateTimeDate.getTime() === dp_date.getTime()) { this._defaults.hourMin = minDateTime.getHours(); if (this.hour <= this._defaults.hourMin) { this.hour = this._defaults.hourMin;
                        this._defaults.minuteMin = minDateTime.getMinutes(); if (this.minute <= this._defaults.minuteMin) { this.minute = this._defaults.minuteMin;
                            this._defaults.secondMin = minDateTime.getSeconds(); if (this.second <= this._defaults.secondMin) { this.second = this._defaults.secondMin;
                                this._defaults.millisecMin = minDateTime.getMilliseconds(); if (this.millisec <= this._defaults.millisecMin) { this.millisec = this._defaults.millisecMin;
                                    this._defaults.microsecMin = minDateTime.getMicroseconds() } else { if (this.microsec < this._defaults.microsecMin) { this.microsec = this._defaults.microsecMin }
                                    this._defaults.microsecMin = this.microsecMinOriginal } } else { this._defaults.millisecMin = this.millisecMinOriginal;
                                this._defaults.microsecMin = this.microsecMinOriginal } } else { this._defaults.secondMin = this.secondMinOriginal;
                            this._defaults.millisecMin = this.millisecMinOriginal;
                            this._defaults.microsecMin = this.microsecMinOriginal } } else { this._defaults.minuteMin = this.minuteMinOriginal;
                        this._defaults.secondMin = this.secondMinOriginal;
                        this._defaults.millisecMin = this.millisecMinOriginal;
                        this._defaults.microsecMin = this.microsecMinOriginal } } else { this._defaults.hourMin = this.hourMinOriginal;
                    this._defaults.minuteMin = this.minuteMinOriginal;
                    this._defaults.secondMin = this.secondMinOriginal;
                    this._defaults.millisecMin = this.millisecMinOriginal;
                    this._defaults.microsecMin = this.microsecMinOriginal } } if ($.datepicker._get(dp_inst, "maxDateTime") !== null && $.datepicker._get(dp_inst, "maxDateTime") !== undefined && dp_date) { var maxDateTime = $.datepicker._get(dp_inst, "maxDateTime"),
                    maxDateTimeDate = new Date(maxDateTime.getFullYear(), maxDateTime.getMonth(), maxDateTime.getDate(), 0, 0, 0, 0); if (this.hourMaxOriginal === null || this.minuteMaxOriginal === null || this.secondMaxOriginal === null || this.millisecMaxOriginal === null) { this.hourMaxOriginal = o.hourMax;
                    this.minuteMaxOriginal = o.minuteMax;
                    this.secondMaxOriginal = o.secondMax;
                    this.millisecMaxOriginal = o.millisecMax;
                    this.microsecMaxOriginal = o.microsecMax } if (dp_inst.settings.timeOnly || maxDateTimeDate.getTime() === dp_date.getTime()) { this._defaults.hourMax = maxDateTime.getHours(); if (this.hour >= this._defaults.hourMax) { this.hour = this._defaults.hourMax;
                        this._defaults.minuteMax = maxDateTime.getMinutes(); if (this.minute >= this._defaults.minuteMax) { this.minute = this._defaults.minuteMax;
                            this._defaults.secondMax = maxDateTime.getSeconds(); if (this.second >= this._defaults.secondMax) { this.second = this._defaults.secondMax;
                                this._defaults.millisecMax = maxDateTime.getMilliseconds(); if (this.millisec >= this._defaults.millisecMax) { this.millisec = this._defaults.millisecMax;
                                    this._defaults.microsecMax = maxDateTime.getMicroseconds() } else { if (this.microsec > this._defaults.microsecMax) { this.microsec = this._defaults.microsecMax }
                                    this._defaults.microsecMax = this.microsecMaxOriginal } } else { this._defaults.millisecMax = this.millisecMaxOriginal;
                                this._defaults.microsecMax = this.microsecMaxOriginal } } else { this._defaults.secondMax = this.secondMaxOriginal;
                            this._defaults.millisecMax = this.millisecMaxOriginal;
                            this._defaults.microsecMax = this.microsecMaxOriginal } } else { this._defaults.minuteMax = this.minuteMaxOriginal;
                        this._defaults.secondMax = this.secondMaxOriginal;
                        this._defaults.millisecMax = this.millisecMaxOriginal;
                        this._defaults.microsecMax = this.microsecMaxOriginal } } else { this._defaults.hourMax = this.hourMaxOriginal;
                    this._defaults.minuteMax = this.minuteMaxOriginal;
                    this._defaults.secondMax = this.secondMaxOriginal;
                    this._defaults.millisecMax = this.millisecMaxOriginal;
                    this._defaults.microsecMax = this.microsecMaxOriginal } } if (dp_inst.settings.minTime !== null) { var tempMinTime = new Date("01/01/1970 " + dp_inst.settings.minTime); if (this.hour < tempMinTime.getHours()) { this.hour = this._defaults.hourMin = tempMinTime.getHours();
                    this.minute = this._defaults.minuteMin = tempMinTime.getMinutes() } else { if (this.hour === tempMinTime.getHours() && this.minute < tempMinTime.getMinutes()) { this.minute = this._defaults.minuteMin = tempMinTime.getMinutes() } else { if (this._defaults.hourMin < tempMinTime.getHours()) { this._defaults.hourMin = tempMinTime.getHours();
                            this._defaults.minuteMin = tempMinTime.getMinutes() } else { if (this._defaults.hourMin === tempMinTime.getHours() === this.hour && this._defaults.minuteMin < tempMinTime.getMinutes()) { this._defaults.minuteMin = tempMinTime.getMinutes() } else { this._defaults.minuteMin = 0 } } } } } if (dp_inst.settings.maxTime !== null) { var tempMaxTime = new Date("01/01/1970 " + dp_inst.settings.maxTime); if (this.hour > tempMaxTime.getHours()) { this.hour = this._defaults.hourMax = tempMaxTime.getHours();
                    this.minute = this._defaults.minuteMax = tempMaxTime.getMinutes() } else { if (this.hour === tempMaxTime.getHours() && this.minute > tempMaxTime.getMinutes()) { this.minute = this._defaults.minuteMax = tempMaxTime.getMinutes() } else { if (this._defaults.hourMax > tempMaxTime.getHours()) { this._defaults.hourMax = tempMaxTime.getHours();
                            this._defaults.minuteMax = tempMaxTime.getMinutes() } else { if (this._defaults.hourMax === tempMaxTime.getHours() === this.hour && this._defaults.minuteMax > tempMaxTime.getMinutes()) { this._defaults.minuteMax = tempMaxTime.getMinutes() } else { this._defaults.minuteMax = 59 } } } } } if (adjustSliders !== undefined && adjustSliders === true) { var hourMax = parseInt((this._defaults.hourMax - ((this._defaults.hourMax - this._defaults.hourMin) % this._defaults.stepHour)), 10),
                    minMax = parseInt((this._defaults.minuteMax - ((this._defaults.minuteMax - this._defaults.minuteMin) % this._defaults.stepMinute)), 10),
                    secMax = parseInt((this._defaults.secondMax - ((this._defaults.secondMax - this._defaults.secondMin) % this._defaults.stepSecond)), 10),
                    millisecMax = parseInt((this._defaults.millisecMax - ((this._defaults.millisecMax - this._defaults.millisecMin) % this._defaults.stepMillisec)), 10),
                    microsecMax = parseInt((this._defaults.microsecMax - ((this._defaults.microsecMax - this._defaults.microsecMin) % this._defaults.stepMicrosec)), 10); if (this.hour_slider) { this.control.options(this, this.hour_slider, "hour", { min: this._defaults.hourMin, max: hourMax, step: this._defaults.stepHour });
                    this.control.value(this, this.hour_slider, "hour", this.hour - (this.hour % this._defaults.stepHour)) } if (this.minute_slider) { this.control.options(this, this.minute_slider, "minute", { min: this._defaults.minuteMin, max: minMax, step: this._defaults.stepMinute });
                    this.control.value(this, this.minute_slider, "minute", this.minute - (this.minute % this._defaults.stepMinute)) } if (this.second_slider) { this.control.options(this, this.second_slider, "second", { min: this._defaults.secondMin, max: secMax, step: this._defaults.stepSecond });
                    this.control.value(this, this.second_slider, "second", this.second - (this.second % this._defaults.stepSecond)) } if (this.millisec_slider) { this.control.options(this, this.millisec_slider, "millisec", { min: this._defaults.millisecMin, max: millisecMax, step: this._defaults.stepMillisec });
                    this.control.value(this, this.millisec_slider, "millisec", this.millisec - (this.millisec % this._defaults.stepMillisec)) } if (this.microsec_slider) { this.control.options(this, this.microsec_slider, "microsec", { min: this._defaults.microsecMin, max: microsecMax, step: this._defaults.stepMicrosec });
                    this.control.value(this, this.microsec_slider, "microsec", this.microsec - (this.microsec % this._defaults.stepMicrosec)) } } }, _onTimeChange: function() { if (!this._defaults.showTimepicker) { return } var hour = (this.hour_slider) ? this.control.value(this, this.hour_slider, "hour") : false,
                minute = (this.minute_slider) ? this.control.value(this, this.minute_slider, "minute") : false,
                second = (this.second_slider) ? this.control.value(this, this.second_slider, "second") : false,
                millisec = (this.millisec_slider) ? this.control.value(this, this.millisec_slider, "millisec") : false,
                microsec = (this.microsec_slider) ? this.control.value(this, this.microsec_slider, "microsec") : false,
                timezone = (this.timezone_select) ? this.timezone_select.val() : false,
                o = this._defaults,
                pickerTimeFormat = o.pickerTimeFormat || o.timeFormat,
                pickerTimeSuffix = o.pickerTimeSuffix || o.timeSuffix; if (typeof(hour) === "object") { hour = false } if (typeof(minute) === "object") { minute = false } if (typeof(second) === "object") { second = false } if (typeof(millisec) === "object") { millisec = false } if (typeof(microsec) === "object") { microsec = false } if (typeof(timezone) === "object") { timezone = false } if (hour !== false) { hour = parseInt(hour, 10) } if (minute !== false) { minute = parseInt(minute, 10) } if (second !== false) { second = parseInt(second, 10) } if (millisec !== false) { millisec = parseInt(millisec, 10) } if (microsec !== false) { microsec = parseInt(microsec, 10) } if (timezone !== false) { timezone = timezone.toString() } var ampm = o[hour < 12 ? "amNames" : "pmNames"][0]; var hasChanged = (hour !== parseInt(this.hour, 10) || minute !== parseInt(this.minute, 10) || second !== parseInt(this.second, 10) || millisec !== parseInt(this.millisec, 10) || microsec !== parseInt(this.microsec, 10) || (this.ampm.length > 0 && (hour < 12) !== ($.inArray(this.ampm.toUpperCase(), this.amNames) !== -1)) || (this.timezone !== null && timezone !== this.timezone.toString())); if (hasChanged) { if (hour !== false) { this.hour = hour } if (minute !== false) { this.minute = minute } if (second !== false) { this.second = second } if (millisec !== false) { this.millisec = millisec } if (microsec !== false) { this.microsec = microsec } if (timezone !== false) { this.timezone = timezone } if (!this.inst) { this.inst = $.datepicker._getInst(this.$input[0]) }
                this._limitMinMaxDateTime(this.inst, true) } if (this.support.ampm) { this.ampm = ampm }
            this.formattedTime = $.datepicker.formatTime(o.timeFormat, this, o); if (this.$timeObj) { if (pickerTimeFormat === o.timeFormat) { this.$timeObj.val(this.formattedTime + pickerTimeSuffix) } else { this.$timeObj.val($.datepicker.formatTime(pickerTimeFormat, this, o) + pickerTimeSuffix) } if (this.$timeObj[0].setSelectionRange) { var sPos = this.$timeObj[0].selectionStart; var ePos = this.$timeObj[0].selectionEnd } }
            this.timeDefined = true; if (hasChanged) { this._updateDateTime() } }, _onSelectHandler: function() { var onSelect = this._defaults.onSelect || this.inst.settings.onSelect; var inputEl = this.$input ? this.$input[0] : null; if (onSelect && inputEl) { onSelect.apply(inputEl, [this.formattedDateTime, this]) } }, _updateDateTime: function(dp_inst) { dp_inst = this.inst || dp_inst; var dtTmp = (dp_inst.currentYear > 0 ? new Date(dp_inst.currentYear, dp_inst.currentMonth, dp_inst.currentDay) : new Date(dp_inst.selectedYear, dp_inst.selectedMonth, dp_inst.selectedDay)),
                dt = $.datepicker._daylightSavingAdjust(dtTmp),
                dateFmt = $.datepicker._get(dp_inst, "dateFormat"),
                formatCfg = $.datepicker._getFormatConfig(dp_inst),
                timeAvailable = dt !== null && this.timeDefined;
            this.formattedDate = $.datepicker.formatDate(dateFmt, (dt === null ? new Date() : dt), formatCfg); var formattedDateTime = this.formattedDate; if (dp_inst.lastVal === "") { dp_inst.currentYear = dp_inst.selectedYear;
                dp_inst.currentMonth = dp_inst.selectedMonth;
                dp_inst.currentDay = dp_inst.selectedDay } if (this._defaults.timeOnly === true && this._defaults.timeOnlyShowDate === false) { formattedDateTime = this.formattedTime } else { if ((this._defaults.timeOnly !== true && (this._defaults.alwaysSetTime || timeAvailable)) || (this._defaults.timeOnly === true && this._defaults.timeOnlyShowDate === true)) { formattedDateTime += this._defaults.separator + this.formattedTime + this._defaults.timeSuffix } }
            this.formattedDateTime = formattedDateTime; if (!this._defaults.showTimepicker) { this.$input.val(this.formattedDate) } else { if (this.$altInput && this._defaults.timeOnly === false && this._defaults.altFieldTimeOnly === true) { this.$altInput.val(this.formattedTime);
                    this.$input.val(this.formattedDate) } else { if (this.$altInput) { this.$input.val(formattedDateTime); var altFormattedDateTime = "",
                            altSeparator = this._defaults.altSeparator !== null ? this._defaults.altSeparator : this._defaults.separator,
                            altTimeSuffix = this._defaults.altTimeSuffix !== null ? this._defaults.altTimeSuffix : this._defaults.timeSuffix; if (!this._defaults.timeOnly) { if (this._defaults.altFormat) { altFormattedDateTime = $.datepicker.formatDate(this._defaults.altFormat, (dt === null ? new Date() : dt), formatCfg) } else { altFormattedDateTime = this.formattedDate } if (altFormattedDateTime) { altFormattedDateTime += altSeparator } } if (this._defaults.altTimeFormat !== null) { altFormattedDateTime += $.datepicker.formatTime(this._defaults.altTimeFormat, this, this._defaults) + altTimeSuffix } else { altFormattedDateTime += this.formattedTime + altTimeSuffix }
                        this.$altInput.val(altFormattedDateTime) } else { this.$input.val(formattedDateTime) } } }
            this.$input.trigger("change") }, _onFocus: function() { if (!this.$input.val() && this._defaults.defaultValue) { this.$input.val(this._defaults.defaultValue); var inst = $.datepicker._getInst(this.$input.get(0)),
                    tp_inst = $.datepicker._get(inst, "timepicker"); if (tp_inst) { if (tp_inst._defaults.timeOnly && (inst.input.val() !== inst.lastVal)) { try { $.datepicker._updateDatepicker(inst) } catch (err) { $.timepicker.log(err) } } } } }, _controls: { slider: { create: function(tp_inst, obj, unit, val, min, max, step) { var rtl = tp_inst._defaults.isRTL; return obj.prop("slide", null).slider({ orientation: "horizontal", value: rtl ? val * -1 : val, min: rtl ? max * -1 : min, max: rtl ? min * -1 : max, step: step, slide: function(event, ui) { tp_inst.control.value(tp_inst, $(this), unit, rtl ? ui.value * -1 : ui.value);
                            tp_inst._onTimeChange() }, stop: function(event, ui) { tp_inst._onSelectHandler() } }) }, options: function(tp_inst, obj, unit, opts, val) { if (tp_inst._defaults.isRTL) { if (typeof(opts) === "string") { if (opts === "min" || opts === "max") { if (val !== undefined) { return obj.slider(opts, val * -1) } return Math.abs(obj.slider(opts)) } return obj.slider(opts) } var min = opts.min,
                            max = opts.max;
                        opts.min = opts.max = null; if (min !== undefined) { opts.max = min * -1 } if (max !== undefined) { opts.min = max * -1 } return obj.slider(opts) } if (typeof(opts) === "string" && val !== undefined) { return obj.slider(opts, val) } return obj.slider(opts) }, value: function(tp_inst, obj, unit, val) { if (tp_inst._defaults.isRTL) { if (val !== undefined) { return obj.slider("value", val * -1) } return Math.abs(obj.slider("value")) } if (val !== undefined) { return obj.slider("value", val) } return obj.slider("value") } }, select: { create: function(tp_inst, obj, unit, val, min, max, step) { var sel = '<select class="ui-timepicker-select ui-state-default ui-corner-all" data-unit="' + unit + '" data-min="' + min + '" data-max="' + max + '" data-step="' + step + '">',
                        format = tp_inst._defaults.pickerTimeFormat || tp_inst._defaults.timeFormat; for (var i = min; i <= max; i += step) { sel += '<option value="' + i + '"' + (i === val ? " selected" : "") + ">"; if (unit === "hour") { sel += $.datepicker.formatTime(PrimeFaces.trim(format.replace(/[^ht ]/ig, "")), { hour: i }, tp_inst._defaults) } else { if (unit === "millisec" || unit === "microsec" || i >= 10) { sel += i } else { sel += "0" + i.toString() } }
                        sel += "</option>" }
                    sel += "</select>";
                    obj.children("select").remove();
                    $(sel).appendTo(obj).on("change", function(e) { tp_inst._onTimeChange();
                        tp_inst._onSelectHandler();
                        tp_inst._afterInject() }); return obj }, options: function(tp_inst, obj, unit, opts, val) { var o = {},
                        $t = obj.children("select"); if (typeof(opts) === "string") { if (val === undefined) { return $t.data(opts) }
                        o[opts] = val } else { o = opts } return tp_inst.control.create(tp_inst, obj, $t.data("unit"), $t.val(), o.min >= 0 ? o.min : $t.data("min"), o.max || $t.data("max"), o.step || $t.data("step")) }, value: function(tp_inst, obj, unit, val) { var $t = obj.children("select"); if (val !== undefined) { return $t.val(val) } return $t.val() } } } });
    $.fn.extend({ timepicker: function(o) { o = o || {}; var tmp_args = Array.prototype.slice.call(arguments); if (typeof o === "object") { tmp_args[0] = $.extend(o, { timeOnly: true }) } return $(this).each(function() { $.fn.datetimepicker.apply($(this), tmp_args) }) }, datetimepicker: function(o) { o = o || {}; var tmp_args = arguments; if (typeof(o) === "string") { if (o === "getDate" || (o === "option" && tmp_args.length === 2 && typeof(tmp_args[1]) === "string")) { return $.fn.datepicker.apply($(this[0]), tmp_args) } else { return this.each(function() { var $t = $(this);
                        $t.datepicker.apply($t, tmp_args) }) } } else { return this.each(function() { var $t = $(this);
                    $t.datepicker($.timepicker._newInst($t, o)._defaults) }) } } });
    $.datepicker.parseDateTime = function(dateFormat, timeFormat, dateTimeString, dateSettings, timeSettings) { var parseRes = parseDateTimeInternal(dateFormat, timeFormat, dateTimeString, dateSettings, timeSettings); if (parseRes.timeObj) { var t = parseRes.timeObj;
            parseRes.date.setHours(t.hour, t.minute, t.second, t.millisec);
            parseRes.date.setMicroseconds(t.microsec) } return parseRes.date };
    $.datepicker.parseTime = function(timeFormat, timeString, options) { var o = extendRemove(extendRemove({}, $.timepicker._defaults), options || {}),
            iso8601 = (timeFormat.replace(/\'.*?\'/g, "").indexOf("Z") !== -1); var strictParse = function(f, s, o) { var getPatternAmpm = function(amNames, pmNames) { var markers = []; if (amNames) { $.merge(markers, amNames) } if (pmNames) { $.merge(markers, pmNames) }
                markers = $.map(markers, function(val) { return val.replace(/[.*+?|()\[\]{}\\]/g, "\\$&") }); return "(" + markers.join("|") + ")?" }; var getFormatPositions = function(timeFormat) { var finds = timeFormat.toLowerCase().match(/(h{1,2}|m{1,2}|s{1,2}|l{1}|c{1}|t{1,2}|z|'.*?')/g),
                    orders = { h: -1, m: -1, s: -1, l: -1, c: -1, t: -1, z: -1 }; if (finds) { for (var i = 0; i < finds.length; i++) { if (orders[finds[i].toString().charAt(0)] === -1) { orders[finds[i].toString().charAt(0)] = i + 1 } } } return orders }; var regstr = "^" + f.toString().replace(/([hH]{1,2}|mm?|ss?|[tT]{1,2}|[zZ]|[lc]|'.*?')/g, function(match) { var ml = match.length; switch (match.charAt(0).toLowerCase()) {
                        case "h":
                            return ml === 1 ? "(\\d?\\d)" : "(\\d{" + ml + "})";
                        case "m":
                            return ml === 1 ? "(\\d?\\d)" : "(\\d{" + ml + "})";
                        case "s":
                            return ml === 1 ? "(\\d?\\d)" : "(\\d{" + ml + "})";
                        case "l":
                            return "(\\d?\\d?\\d)";
                        case "c":
                            return "(\\d?\\d?\\d)";
                        case "z":
                            return "(z|[-+]\\d\\d:?\\d\\d|\\S+)?";
                        case "t":
                            return getPatternAmpm(o.amNames, o.pmNames);
                        default:
                            return "(" + match.replace(/\'/g, "").replace(/(\.|\$|\^|\\|\/|\(|\)|\[|\]|\?|\+|\*)/g, function(m) { return "\\" + m }) + ")?" } }).replace(/\s/g, "\\s?") + o.timeSuffix + "$",
                order = getFormatPositions(f),
                ampm = "",
                treg;
            treg = s.match(new RegExp(regstr, "i")); var resTime = { hour: 0, minute: 0, second: 0, millisec: 0, microsec: 0 }; if (treg) { if (order.t !== -1) { if (treg[order.t] === undefined || treg[order.t].length === 0) { ampm = "";
                        resTime.ampm = "" } else { ampm = $.inArray(treg[order.t].toUpperCase(), $.map(o.amNames, function(x, i) { return x.toUpperCase() })) !== -1 ? "AM" : "PM";
                        resTime.ampm = o[ampm === "AM" ? "amNames" : "pmNames"][0] } } if (order.h !== -1) { if (ampm === "AM" && treg[order.h] === "12") { resTime.hour = 0 } else { if (ampm === "PM" && treg[order.h] !== "12") { resTime.hour = parseInt(treg[order.h], 10) + 12 } else { resTime.hour = Number(treg[order.h]) } } } if (order.m !== -1) { resTime.minute = Number(treg[order.m]) } if (order.s !== -1) { resTime.second = Number(treg[order.s]) } if (order.l !== -1) { resTime.millisec = Number(treg[order.l]) } if (order.c !== -1) { resTime.microsec = Number(treg[order.c]) } if (order.z !== -1 && treg[order.z] !== undefined) { resTime.timezone = $.timepicker.timezoneOffsetNumber(treg[order.z]) } return resTime } return false }; var looseParse = function(f, s, o) { try { var d = new Date("2012-01-01 " + s); if (isNaN(d.getTime())) { d = new Date("2012-01-01T" + s); if (isNaN(d.getTime())) { d = new Date("01/01/2012 " + s); if (isNaN(d.getTime())) { throw "Unable to parse time with native Date: " + s } } } return { hour: d.getHours(), minute: d.getMinutes(), second: d.getSeconds(), millisec: d.getMilliseconds(), microsec: d.getMicroseconds(), timezone: d.getTimezoneOffset() * -1 } } catch (err) { try { return strictParse(f, s, o) } catch (err2) { $.timepicker.log("Unable to parse \ntimeString: " + s + "\ntimeFormat: " + f) } } return false }; if (typeof o.parse === "function") { return o.parse(timeFormat, timeString, o) } if (o.parse === "loose") { return looseParse(timeFormat, timeString, o) } return strictParse(timeFormat, timeString, o) };
    $.datepicker.formatTime = function(format, time, options) { options = options || {};
        options = $.extend({}, $.timepicker._defaults, options);
        time = $.extend({ hour: 0, minute: 0, second: 0, millisec: 0, microsec: 0, timezone: null }, time); var tmptime = format,
            ampmName = options.amNames[0],
            hour = parseInt(time.hour, 10); if (hour > 11) { ampmName = options.pmNames[0] }
        tmptime = tmptime.replace(/(?:HH?|hh?|mm?|ss?|[tT]{1,2}|[zZ]|[lc]|'.*?')/g, function(match) { switch (match) {
                case "HH":
                    return ("0" + hour).slice(-2);
                case "H":
                    return hour;
                case "hh":
                    return ("0" + convert24to12(hour)).slice(-2);
                case "h":
                    return convert24to12(hour);
                case "mm":
                    return ("0" + time.minute).slice(-2);
                case "m":
                    return time.minute;
                case "ss":
                    return ("0" + time.second).slice(-2);
                case "s":
                    return time.second;
                case "l":
                    return ("00" + time.millisec).slice(-3);
                case "c":
                    return ("00" + time.microsec).slice(-3);
                case "z":
                    return $.timepicker.timezoneOffsetString(time.timezone === null ? options.timezone : time.timezone, false);
                case "Z":
                    return $.timepicker.timezoneOffsetString(time.timezone === null ? options.timezone : time.timezone, true);
                case "T":
                    return ampmName.charAt(0).toUpperCase();
                case "TT":
                    return ampmName.toUpperCase();
                case "t":
                    return ampmName.charAt(0).toLowerCase();
                case "tt":
                    return ampmName.toLowerCase();
                default:
                    return match.replace(/'/g, "") } }); return tmptime };
    $.datepicker._base_selectDate = $.datepicker._selectDate;
    $.datepicker._selectDate = function(id, dateStr) { var inst = this._getInst($(id)[0]),
            tp_inst = this._get(inst, "timepicker"),
            was_inline; if (tp_inst && inst.settings.showTimepicker) { tp_inst._limitMinMaxDateTime(inst, true);
            was_inline = inst.inline;
            inst.inline = inst.stay_open = true;
            this._base_selectDate(id, dateStr);
            inst.inline = was_inline;
            inst.stay_open = false;
            this._notifyChange(inst);
            this._updateDatepicker(inst) } else { this._base_selectDate(id, dateStr) } };
    $.datepicker._base_updateDatepicker = $.datepicker._updateDatepicker;
    $.datepicker._updateDatepicker = function(inst) { var input = inst.input[0]; if ($.datepicker._curInst && $.datepicker._curInst !== inst && $.datepicker._datepickerShowing && $.datepicker._lastInput !== input) { return } if (typeof(inst.stay_open) !== "boolean" || inst.stay_open === false) { this._base_updateDatepicker(inst); var tp_inst = this._get(inst, "timepicker"); if (tp_inst) { tp_inst._addTimePicker(inst) } } };
    $.datepicker._base_doKeyPress = $.datepicker._doKeyPress;
    $.datepicker._doKeyPress = function(event) { var inst = $.datepicker._getInst(event.target),
            tp_inst = $.datepicker._get(inst, "timepicker"); if (tp_inst) { if ($.datepicker._get(inst, "constrainInput")) { var ampm = tp_inst.support.ampm,
                    tz = tp_inst._defaults.showTimezone !== null ? tp_inst._defaults.showTimezone : tp_inst.support.timezone,
                    dateChars = $.datepicker._possibleChars($.datepicker._get(inst, "dateFormat")),
                    datetimeChars = tp_inst._defaults.timeFormat.toString().replace(/[hms]/g, "").replace(/TT/g, ampm ? "APM" : "").replace(/Tt/g, ampm ? "AaPpMm" : "").replace(/tT/g, ampm ? "AaPpMm" : "").replace(/T/g, ampm ? "AP" : "").replace(/tt/g, ampm ? "apm" : "").replace(/t/g, ampm ? "ap" : "") + " " + tp_inst._defaults.separator + tp_inst._defaults.timeSuffix + (tz ? tp_inst._defaults.timezoneList.join("") : "") + (tp_inst._defaults.amNames.join("")) + (tp_inst._defaults.pmNames.join("")) + dateChars,
                    chr = String.fromCharCode(event.charCode === undefined ? event.keyCode : event.charCode); return event.ctrlKey || (chr < " " || !dateChars || datetimeChars.indexOf(chr) > -1) } } return $.datepicker._base_doKeyPress(event) };
    $.datepicker._base_updateAlternate = $.datepicker._updateAlternate;
    $.datepicker._updateAlternate = function(inst) { var tp_inst = this._get(inst, "timepicker"); if (tp_inst) { var altField = tp_inst._defaults.altField; if (altField) { var altFormat = tp_inst._defaults.altFormat || tp_inst._defaults.dateFormat,
                    date = this._getDate(inst),
                    formatCfg = $.datepicker._getFormatConfig(inst),
                    altFormattedDateTime = "",
                    altSeparator = tp_inst._defaults.altSeparator ? tp_inst._defaults.altSeparator : tp_inst._defaults.separator,
                    altTimeSuffix = tp_inst._defaults.altTimeSuffix ? tp_inst._defaults.altTimeSuffix : tp_inst._defaults.timeSuffix,
                    altTimeFormat = tp_inst._defaults.altTimeFormat !== null ? tp_inst._defaults.altTimeFormat : tp_inst._defaults.timeFormat;
                altFormattedDateTime += $.datepicker.formatTime(altTimeFormat, tp_inst, tp_inst._defaults) + altTimeSuffix; if (!tp_inst._defaults.timeOnly && !tp_inst._defaults.altFieldTimeOnly && date !== null) { if (tp_inst._defaults.altFormat) { altFormattedDateTime = $.datepicker.formatDate(tp_inst._defaults.altFormat, date, formatCfg) + altSeparator + altFormattedDateTime } else { altFormattedDateTime = tp_inst.formattedDate + altSeparator + altFormattedDateTime } }
                $(altField).val(inst.input.val() ? altFormattedDateTime : "") } } else { $.datepicker._base_updateAlternate(inst) } };
    $.datepicker._base_doKeyUp = $.datepicker._doKeyUp;
    $.datepicker._doKeyUp = function(event) { var inst = $.datepicker._getInst(event.target),
            tp_inst = $.datepicker._get(inst, "timepicker"); if (tp_inst) { if (tp_inst._defaults.timeOnly && (inst.input.val() !== inst.lastVal)) { try { $.datepicker._updateDatepicker(inst) } catch (err) { $.timepicker.log(err) } } } return $.datepicker._base_doKeyUp(event) };
    $.datepicker._base_gotoToday = $.datepicker._gotoToday;
    $.datepicker._gotoToday = function(id) { var inst = this._getInst($(id)[0]);
        this._base_gotoToday(id); var tp_inst = this._get(inst, "timepicker"); if (!tp_inst) { return } var tzoffset = $.timepicker.timezoneOffsetNumber(tp_inst.timezone); var now = new Date();
        now.setMinutes(now.getMinutes() + now.getTimezoneOffset() + parseInt(tzoffset, 10));
        this._setTime(inst, now);
        this._setDate(inst, now);
        tp_inst._onSelectHandler() };
    $.datepicker._disableTimepickerDatepicker = function(target) { var inst = this._getInst(target); if (!inst) { return } var tp_inst = this._get(inst, "timepicker");
        $(target).datepicker("getDate"); if (tp_inst) { inst.settings.showTimepicker = false;
            tp_inst._defaults.showTimepicker = false;
            tp_inst._updateDateTime(inst) } };
    $.datepicker._enableTimepickerDatepicker = function(target) { var inst = this._getInst(target); if (!inst) { return } var tp_inst = this._get(inst, "timepicker");
        $(target).datepicker("getDate"); if (tp_inst) { inst.settings.showTimepicker = true;
            tp_inst._defaults.showTimepicker = true;
            tp_inst._addTimePicker(inst);
            tp_inst._updateDateTime(inst) } };
    $.datepicker._setTime = function(inst, date) { var tp_inst = this._get(inst, "timepicker"); if (tp_inst) { var defaults = tp_inst._defaults;
            tp_inst.hour = date ? date.getHours() : defaults.hour;
            tp_inst.minute = date ? date.getMinutes() : defaults.minute;
            tp_inst.second = date ? date.getSeconds() : defaults.second;
            tp_inst.millisec = date ? date.getMilliseconds() : defaults.millisec;
            tp_inst.microsec = date ? date.getMicroseconds() : defaults.microsec;
            tp_inst._limitMinMaxDateTime(inst, true);
            tp_inst._onTimeChange();
            tp_inst._updateDateTime(inst) } };
    $.datepicker._setTimeDatepicker = function(target, date, withDate) { var inst = this._getInst(target); if (!inst) { return } var tp_inst = this._get(inst, "timepicker"); if (tp_inst) { this._setDateFromField(inst); var tp_date; if (date) { if (typeof date === "string") { tp_inst._parseTime(date, withDate);
                    tp_date = new Date();
                    tp_date.setHours(tp_inst.hour, tp_inst.minute, tp_inst.second, tp_inst.millisec);
                    tp_date.setMicroseconds(tp_inst.microsec) } else { tp_date = new Date(date.getTime());
                    tp_date.setMicroseconds(date.getMicroseconds()) } if (tp_date.toString() === "Invalid Date") { tp_date = undefined }
                this._setTime(inst, tp_date) } } };
    $.datepicker._base_setDateDatepicker = $.datepicker._setDateDatepicker;
    $.datepicker._setDateDatepicker = function(target, _date) { var inst = this._getInst(target); var date = _date; if (!inst) { return } if (typeof(_date) === "string") { date = new Date(_date); if (!date.getTime()) { this._base_setDateDatepicker.apply(this, arguments);
                date = $(target).datepicker("getDate") } } var tp_inst = this._get(inst, "timepicker"); var tp_date; if (date instanceof Date) { tp_date = new Date(date.getTime());
            tp_date.setMicroseconds(date.getMicroseconds()) } else { tp_date = date } if (tp_inst && tp_date) { if (!tp_inst.support.timezone && tp_inst._defaults.timezone === null) { tp_inst.timezone = tp_date.getTimezoneOffset() * -1 }
            date = $.timepicker.timezoneAdjust(date, $.timepicker.timezoneOffsetString(-date.getTimezoneOffset()), tp_inst.timezone);
            tp_date = $.timepicker.timezoneAdjust(tp_date, $.timepicker.timezoneOffsetString(-tp_date.getTimezoneOffset()), tp_inst.timezone) }
        this._updateDatepicker(inst);
        this._base_setDateDatepicker.apply(this, arguments);
        this._setTimeDatepicker(target, tp_date, true) };
    $.datepicker._base_getDateDatepicker = $.datepicker._getDateDatepicker;
    $.datepicker._getDateDatepicker = function(target, noDefault) { var inst = this._getInst(target); if (!inst) { return } var tp_inst = this._get(inst, "timepicker"); if (tp_inst) { if (inst.lastVal === undefined) { this._setDateFromField(inst, noDefault) } var date = this._getDate(inst); var currDT = null; if (tp_inst.$altInput && tp_inst._defaults.altFieldTimeOnly) { currDT = tp_inst.$input.val() + " " + tp_inst.$altInput.val() } else { if (tp_inst.$input.get(0).tagName !== "INPUT" && tp_inst.$altInput) { currDT = tp_inst.$altInput.val() } else { currDT = tp_inst.$input.val() } } if (date && tp_inst._parseTime(currDT, !inst.settings.timeOnly)) { date.setHours(tp_inst.hour, tp_inst.minute, tp_inst.second, tp_inst.millisec);
                date.setMicroseconds(tp_inst.microsec); if (tp_inst.timezone != null) { if (!tp_inst.support.timezone && tp_inst._defaults.timezone === null) { tp_inst.timezone = date.getTimezoneOffset() * -1 }
                    date = $.timepicker.timezoneAdjust(date, tp_inst.timezone, $.timepicker.timezoneOffsetString(-date.getTimezoneOffset())) } } return date } return this._base_getDateDatepicker(target, noDefault) };
    $.datepicker._base_parseDate = $.datepicker.parseDate;
    $.datepicker.parseDate = function(format, value, settings) { var date; try { date = this._base_parseDate(format, value, settings) } catch (err) { if (err.indexOf(":") >= 0) { date = this._base_parseDate(format, value.substring(0, value.length - (err.length - err.indexOf(":") - 2)), settings);
                $.timepicker.log("Error parsing the date string: " + err + "\ndate string = " + value + "\ndate format = " + format) } else { throw err } } return date };
    $.datepicker._base_formatDate = $.datepicker._formatDate;
    $.datepicker._formatDate = function(inst, day, month, year) { var tp_inst = this._get(inst, "timepicker"); if (tp_inst) { tp_inst._updateDateTime(inst); return tp_inst.$input.val() } return this._base_formatDate(inst) };
    $.datepicker._base_optionDatepicker = $.datepicker._optionDatepicker;
    $.datepicker._optionDatepicker = function(target, name, value) { var inst = this._getInst(target),
            name_clone; if (!inst) { return null } var tp_inst = this._get(inst, "timepicker"); if (tp_inst) { var min = null,
                max = null,
                onselect = null,
                overrides = tp_inst._defaults.evnts,
                fns = {},
                prop, ret, oldVal, $target; if (typeof name === "string") { if (name === "minDate" || name === "minDateTime") { min = value } else { if (name === "maxDate" || name === "maxDateTime") { max = value } else { if (name === "onSelect") { onselect = value } else { if (overrides.hasOwnProperty(name)) { if (typeof(value) === "undefined") { return overrides[name] }
                                fns[name] = value;
                                name_clone = {} } } } } } else { if (typeof name === "object") { if (name.minDate) { min = name.minDate } else { if (name.minDateTime) { min = name.minDateTime } else { if (name.maxDate) { max = name.maxDate } else { if (name.maxDateTime) { max = name.maxDateTime } } } } for (prop in overrides) { if (overrides.hasOwnProperty(prop) && name[prop]) { fns[prop] = name[prop] } } } } for (prop in fns) { if (fns.hasOwnProperty(prop)) { overrides[prop] = fns[prop]; if (!name_clone) { name_clone = $.extend({}, name) }
                    delete name_clone[prop] } } if (name_clone && isEmptyObject(name_clone)) { return } if (min) { if (min === 0) { min = new Date() } else { min = new Date(min) }
                tp_inst._defaults.minDate = min;
                tp_inst._defaults.minDateTime = min } else { if (max) { if (max === 0) { max = new Date() } else { max = new Date(max) }
                    tp_inst._defaults.maxDate = max;
                    tp_inst._defaults.maxDateTime = max } else { if (onselect) { tp_inst._defaults.onSelect = onselect } } } if (min || max) { $target = $(target);
                oldVal = $target.datetimepicker("getDate");
                ret = this._base_optionDatepicker.call($.datepicker, target, name_clone || name, value);
                $target.datetimepicker("setDate", oldVal); return ret } } if (value === undefined) { return this._base_optionDatepicker.call($.datepicker, target, name) } return this._base_optionDatepicker.call($.datepicker, target, name_clone || name, value) }; var isEmptyObject = function(obj) { var prop; for (prop in obj) { if (obj.hasOwnProperty(prop)) { return false } } return true }; var extendRemove = function(target, props) { $.extend(target, props); for (var name in props) { if (props[name] === null || props[name] === undefined) { target[name] = props[name] } } return target }; var detectSupport = function(timeFormat) { var tf = timeFormat.replace(/'.*?'/g, "").toLowerCase(),
            isIn = function(f, t) { return f.indexOf(t) !== -1 ? true : false }; return { hour: isIn(tf, "h"), minute: isIn(tf, "m"), second: isIn(tf, "s"), millisec: isIn(tf, "l"), microsec: isIn(tf, "c"), timezone: isIn(tf, "z"), ampm: isIn(tf, "t") && isIn(timeFormat, "h"), iso8601: isIn(timeFormat, "Z") } }; var convert24to12 = function(hour) { hour %= 12; if (hour === 0) { hour = 12 } return String(hour) }; var computeEffectiveSetting = function(settings, property) { return settings && settings[property] ? settings[property] : $.timepicker._defaults[property] }; var splitDateTime = function(dateTimeString, timeSettings) { var separator = computeEffectiveSetting(timeSettings, "separator"),
            format = computeEffectiveSetting(timeSettings, "timeFormat"),
            timeParts = format.split(separator),
            timePartsLen = timeParts.length,
            allParts = dateTimeString.split(separator),
            allPartsLen = allParts.length; if (allPartsLen > 1) { return { dateString: allParts.splice(0, allPartsLen - timePartsLen).join(separator), timeString: allParts.splice(0, timePartsLen).join(separator) } } return { dateString: dateTimeString, timeString: "" } }; var parseDateTimeInternal = function(dateFormat, timeFormat, dateTimeString, dateSettings, timeSettings) { var date, parts, parsedTime;
        parts = splitDateTime(dateTimeString, timeSettings);
        date = $.datepicker._base_parseDate(dateFormat, parts.dateString, dateSettings); if (parts.timeString === "") { return { date: date } }
        parsedTime = $.datepicker.parseTime(timeFormat, parts.timeString, timeSettings); if (!parsedTime) { throw "Wrong time format" } return { date: date, timeObj: parsedTime } }; var selectLocalTimezone = function(tp_inst, date) { if (tp_inst && tp_inst.timezone_select) { var now = date || new Date();
            tp_inst.timezone_select.val(-now.getTimezoneOffset()) } };
    $.timepicker = new Timepicker();
    $.timepicker.timezoneOffsetString = function(tzMinutes, iso8601) { if (isNaN(tzMinutes) || tzMinutes > 840 || tzMinutes < -720) { return tzMinutes } var off = tzMinutes,
            minutes = off % 60,
            hours = (off - minutes) / 60,
            iso = iso8601 ? ":" : "",
            tz = (off >= 0 ? "+" : "-") + ("0" + Math.abs(hours)).slice(-2) + iso + ("0" + Math.abs(minutes)).slice(-2); if (tz === "+00:00") { return "Z" } return tz };
    $.timepicker.timezoneOffsetNumber = function(tzString) { var normalized = tzString.toString().replace(":", ""); if (normalized.toUpperCase() === "Z") { return 0 } if (!/^(\-|\+)\d{4}$/.test(normalized)) { return parseInt(tzString, 10) } return ((normalized.substr(0, 1) === "-" ? -1 : 1) * ((parseInt(normalized.substr(1, 2), 10) * 60) + parseInt(normalized.substr(3, 2), 10))) };
    $.timepicker.timezoneAdjust = function(date, fromTimezone, toTimezone) { var fromTz = $.timepicker.timezoneOffsetNumber(fromTimezone); var toTz = $.timepicker.timezoneOffsetNumber(toTimezone); if (!isNaN(toTz)) { date.setMinutes(date.getMinutes() + (-fromTz) - (-toTz)) } return date };
    $.timepicker.timeRange = function(startTime, endTime, options) { return $.timepicker.handleRange("timepicker", startTime, endTime, options) };
    $.timepicker.datetimeRange = function(startTime, endTime, options) { $.timepicker.handleRange("datetimepicker", startTime, endTime, options) };
    $.timepicker.dateRange = function(startTime, endTime, options) { $.timepicker.handleRange("datepicker", startTime, endTime, options) };
    $.timepicker.handleRange = function(method, startTime, endTime, options) { options = $.extend({}, { minInterval: 0, maxInterval: 0, start: {}, end: {} }, options); var timeOnly = false; if (method === "timepicker") { timeOnly = true;
            method = "datetimepicker" }

        function checkDates(changed, other) { var startdt = startTime[method]("getDate"),
                enddt = endTime[method]("getDate"),
                changeddt = changed[method]("getDate"); if (startdt !== null) { var minDate = new Date(startdt.getTime()),
                    maxDate = new Date(startdt.getTime());
                minDate.setMilliseconds(minDate.getMilliseconds() + options.minInterval);
                maxDate.setMilliseconds(maxDate.getMilliseconds() + options.maxInterval); if (options.minInterval > 0 && minDate > enddt) { endTime[method]("setDate", minDate) } else { if (options.maxInterval > 0 && maxDate < enddt) { endTime[method]("setDate", maxDate) } else { if (startdt > enddt) { other[method]("setDate", changeddt) } } } } }

        function selected(changed, other, option) { if (!changed.val()) { return } var date = changed[method].call(changed, "getDate"); if (date !== null && options.minInterval > 0) { if (option === "minDate") { date.setMilliseconds(date.getMilliseconds() + options.minInterval) } if (option === "maxDate") { date.setMilliseconds(date.getMilliseconds() - options.minInterval) } } if (date.getTime) { other[method].call(other, "option", option, date) } }
        $.fn[method].call(startTime, $.extend({ timeOnly: timeOnly, onClose: function(dateText, inst) { checkDates($(this), endTime) }, onSelect: function(selectedDateTime) { selected($(this), endTime, "minDate") } }, options, options.start));
        $.fn[method].call(endTime, $.extend({ timeOnly: timeOnly, onClose: function(dateText, inst) { checkDates($(this), startTime) }, onSelect: function(selectedDateTime) { selected($(this), startTime, "maxDate") } }, options, options.end));
        checkDates(startTime, endTime);
        selected(startTime, endTime, "minDate");
        selected(endTime, startTime, "maxDate"); return $([startTime.get(0), endTime.get(0)]) };
    $.timepicker.log = function() { if (window.console && window.console.log && window.console.log.apply) { window.console.log.apply(window.console, Array.prototype.slice.call(arguments)) } };
    $.timepicker._util = { _extendRemove: extendRemove, _isEmptyObject: isEmptyObject, _convert24to12: convert24to12, _detectSupport: detectSupport, _selectLocalTimezone: selectLocalTimezone, _computeEffectiveSetting: computeEffectiveSetting, _splitDateTime: splitDateTime, _parseDateTimeInternal: parseDateTimeInternal }; if (!Date.prototype.getMicroseconds) { Date.prototype.microseconds = 0;
        Date.prototype.getMicroseconds = function() { return this.microseconds };
        Date.prototype.setMicroseconds = function(m) { this.setMilliseconds(this.getMilliseconds() + Math.floor(m / 1000));
            this.microseconds = m % 1000; return this } }
    $.timepicker.version = "1.6.3" }));
$(function() { var a = { primaryStyles: ["fontFamily", "fontSize", "fontWeight", "fontVariant", "fontStyle", "paddingLeft", "paddingTop", "paddingBottom", "paddingRight", "marginLeft", "marginTop", "marginBottom", "marginRight", "borderLeftColor", "borderTopColor", "borderBottomColor", "borderRightColor", "borderLeftStyle", "borderTopStyle", "borderBottomStyle", "borderRightStyle", "borderLeftWidth", "borderTopWidth", "borderBottomWidth", "borderRightWidth", "line-height", "outline"], specificStyle: { "word-wrap": "break-word", "overflow-x": "hidden", "overflow-y": "auto" }, simulator: $('<div id="textarea_simulator"></div>').css({ position: "absolute", top: "0px", left: "0px", visibility: "hidden" }).appendTo(document.body), toHtml: function(b) { return PrimeFaces.escapeHTML(b).replace(/\n/g, "<br>").split(" ").join('<span style="white-space:prev-wrap">&nbsp;</span>') }, getCaretPosition: function() { var c = a,
                n = this,
                g = n[0],
                d = n.offset(); if ($.browser.msie && document.selection && document.selection.createRange) { g.focus(); var h = document.selection.createRange();
                $("#hskeywords").val(g.scrollTop); return { left: h.boundingLeft - d.left, top: parseInt(h.boundingTop) - d.top + g.scrollTop + document.documentElement.scrollTop + parseInt(n.getComputedStyle("fontSize")) } }
            c.simulator.empty();
            $.each(c.primaryStyles, function(p, q) { n.cloneStyle(c.simulator, q) });
            c.simulator.css($.extend({ width: n.width() + "px", height: n.height() + "px" }, c.specificStyle)); var l = n.val(),
                e = n.getCursorPosition(); var f = l.substring(0, e),
                m = l.substring(e); var j = $('<span class="before"></span>').html(c.toHtml(f)),
                o = $('<span class="focus"></span>'),
                b = $('<span class="after"></span>').html(c.toHtml(m));
            c.simulator.append(j).append(o).append(b); var i = o.offset(),
                k = c.simulator.offset(); return { top: i.top - k.top - g.scrollTop + ($.browser.mozilla ? 0 : parseInt(n.getComputedStyle("fontSize"))), left: o[0].offsetLeft - c.simulator[0].offsetLeft - g.scrollLeft } } };
    $.fn.extend({ getComputedStyle: function(c) { if (this.length == 0) { return } var d = this[0]; var b = this.css(c);
            b = b || ($.browser.msie ? d.currentStyle[c] : document.defaultView.getComputedStyle(d, null)[c]); return b }, cloneStyle: function(c, b) { var d = this.getComputedStyle(b); if (!!d) { $(c).css(b, d) } }, cloneAllStyle: function(e, d) { var c = this[0]; for (var b in c.style) { var f = c.style[b];
                typeof f == "string" || typeof f == "number" ? this.cloneStyle(e, b) : NaN } }, getCursorPosition: function() { var e = this[0],
                b = 0; if ("selectionStart" in e) { b = e.selectionStart } else { if ("selection" in document) { var c = document.selection.createRange(); if (parseInt($.browser.version) > 6) { e.focus(); var g = document.selection.createRange().text.length;
                        c.moveStart("character", -e.value.length);
                        b = c.text.length - g } else { var h = document.body.createTextRange();
                        h.moveToElementText(e); for (; h.compareEndPoints("StartToStart", c) < 0; b++) { h.moveStart("character", 1) } for (var d = 0; d <= b; d++) { if (e.value.charAt(d) == "\n") { b++ } } var f = e.value.split("\n").length - 1;
                        b -= f; return b } } } return b }, getCaretPosition: a.getCaretPosition }) });
/*!
	autosize 4.0.2
	license: MIT
	http://www.jacklmoore.com/autosize
*/
(function(c, a) { if (typeof define === "function" && define.amd) { define(["module", "exports"], a) } else { if (typeof exports !== "undefined") { a(module, exports) } else { var b = { exports: {} };
            a(b, b.exports);
            c.autosize = b.exports } } })(this, function(b, d) { var a = typeof Map === "function" ? new Map() : function() { var n = []; var k = []; return { has: function m(p) { return n.indexOf(p) > -1 }, get: function l(p) { return k[n.indexOf(p)] }, set: function o(p, q) { if (n.indexOf(p) === -1) { n.push(p);
                    k.push(q) } }, _delete: function e(q) { var p = n.indexOf(q); if (p > -1) { n.splice(p, 1);
                    k.splice(p, 1) } } } }(); var h = function h(e) { return new Event(e, { bubbles: true }) }; try { new Event("test") } catch (f) { h = function h(k) { var e = document.createEvent("Event");
            e.initEvent(k, true, false); return e } }

    function j(n) { if (!n || !n.nodeName || n.nodeName !== "TEXTAREA" || a.has(n)) { return } var e = null; var r = null; var k = null;

        function t() { var u = window.getComputedStyle(n, null); if (u.resize === "vertical") { n.style.resize = "none" } else { if (u.resize === "both") { n.style.resize = "horizontal" } } if (u.boxSizing === "content-box") { e = -(parseFloat(u.paddingTop) + parseFloat(u.paddingBottom)) } else { e = parseFloat(u.borderTopWidth) + parseFloat(u.borderBottomWidth) } if (isNaN(e)) { e = 0 }
            m() }

        function p(v) { var u = n.style.width;
            n.style.width = "0px";
            n.offsetWidth;
            n.style.width = u;
            n.style.overflowY = v }

        function s(v) { var u = []; while (v && v.parentNode && v.parentNode instanceof Element) { if (v.parentNode.scrollTop) { u.push({ node: v.parentNode, scrollTop: v.parentNode.scrollTop }) }
                v = v.parentNode } return u }

        function l() { if (n.scrollHeight === 0) { return } var v = s(n); var u = document.documentElement && document.documentElement.scrollTop;
            n.style.height = "";
            n.style.height = n.scrollHeight + e + "px";
            r = n.clientWidth;
            v.forEach(function(w) { w.node.scrollTop = w.scrollTop }); if (u) { document.documentElement.scrollTop = u } }

        function m() { l(); var y = Math.round(parseFloat(n.style.height)); var w = window.getComputedStyle(n, null); var x = w.boxSizing === "content-box" ? Math.round(parseFloat(w.height)) : n.offsetHeight; if (x < y) { if (w.overflowY === "hidden") { p("scroll");
                    l();
                    x = w.boxSizing === "content-box" ? Math.round(parseFloat(window.getComputedStyle(n, null).height)) : n.offsetHeight } } else { if (w.overflowY !== "hidden") { p("hidden");
                    l();
                    x = w.boxSizing === "content-box" ? Math.round(parseFloat(window.getComputedStyle(n, null).height)) : n.offsetHeight } } if (k !== x) { k = x; var u = h("autosize:resized"); try { n.dispatchEvent(u) } catch (v) {} } } var o = function o() { if (n.clientWidth !== r) { m() } }; var q = function(u) { window.removeEventListener("resize", o, false);
            n.removeEventListener("input", m, false);
            n.removeEventListener("keyup", m, false);
            n.removeEventListener("autosize:destroy", q, false);
            n.removeEventListener("autosize:update", m, false);
            Object.keys(u).forEach(function(v) { n.style[v] = u[v] });
            a._delete(n) }.bind(n, { height: n.style.height, resize: n.style.resize, overflowY: n.style.overflowY, overflowX: n.style.overflowX, wordWrap: n.style.wordWrap });
        n.addEventListener("autosize:destroy", q, false); if ("onpropertychange" in n && "oninput" in n) { n.addEventListener("keyup", m, false) }
        window.addEventListener("resize", o, false);
        n.addEventListener("input", m, false);
        n.addEventListener("autosize:update", m, false);
        n.style.overflowX = "hidden";
        n.style.wordWrap = "break-word";
        a.set(n, { destroy: q, update: m });
        t() }

    function g(k) { var e = a.get(k); if (e) { e.destroy() } }

    function c(k) { var e = a.get(k); if (e) { e.update() } } var i = null; if (typeof window === "undefined" || typeof window.getComputedStyle !== "function") { i = function i(e) { return e };
        i.destroy = function(e) { return e };
        i.update = function(e) { return e } } else { i = function i(k, e) { if (k) { Array.prototype.forEach.call(k.length ? k : [k], function(l) { return j(l, e) }) } return k };
        i.destroy = function(e) { if (e) { Array.prototype.forEach.call(e.length ? e : [e], g) } return e };
        i.update = function(e) { if (e) { Array.prototype.forEach.call(e.length ? e : [e], c) } return e } }
    b.exports = i });
/*!
 * jQuery Mousewheel 3.1.13
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 */
(function(a) { if (typeof define === "function" && define.amd) { define(["jquery"], a) } else { if (typeof exports === "object") { module.exports = a } else { a(jQuery) } } }(function(c) { var d = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
        k = ("onwheel" in document || document.documentMode >= 9) ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
        h = Array.prototype.slice,
        j, b; if (c.event.fixHooks) { for (var e = d.length; e;) { c.event.fixHooks[d[--e]] = c.event.mouseHooks } } var f = c.event.special.mousewheel = { version: "3.1.12", setup: function() { if (this.addEventListener) { for (var m = k.length; m;) { this.addEventListener(k[--m], l, false) } } else { this.onmousewheel = l }
            c.data(this, "mousewheel-line-height", f.getLineHeight(this));
            c.data(this, "mousewheel-page-height", f.getPageHeight(this)) }, teardown: function() { if (this.removeEventListener) { for (var m = k.length; m;) { this.removeEventListener(k[--m], l, false) } } else { this.onmousewheel = null }
            c.removeData(this, "mousewheel-line-height");
            c.removeData(this, "mousewheel-page-height") }, getLineHeight: function(m) { var i = c(m),
                n = i["offsetParent" in c.fn ? "offsetParent" : "parent"](); if (!n.length) { n = c("body") } return parseInt(n.css("fontSize"), 10) || parseInt(i.css("fontSize"), 10) || 16 }, getPageHeight: function(i) { return c(i).height() }, settings: { adjustOldDeltas: true, normalizeOffset: true } };
    c.fn.extend({ mousewheel: function(i) { return i ? this.on("mousewheel", i) : this.trigger("mousewheel") }, unmousewheel: function(i) { return this.off("mousewheel", i) } });

    function l(i) { var o = i || window.event,
            u = h.call(arguments, 1),
            w = 0,
            q = 0,
            p = 0,
            t = 0,
            s = 0,
            r = 0;
        i = c.event.fix(o);
        i.type = "mousewheel"; if ("detail" in o) { p = o.detail * -1 } if ("wheelDelta" in o) { p = o.wheelDelta } if ("wheelDeltaY" in o) { p = o.wheelDeltaY } if ("wheelDeltaX" in o) { q = o.wheelDeltaX * -1 } if ("axis" in o && o.axis === o.HORIZONTAL_AXIS) { q = p * -1;
            p = 0 }
        w = p === 0 ? q : p; if ("deltaY" in o) { p = o.deltaY * -1;
            w = p } if ("deltaX" in o) { q = o.deltaX; if (p === 0) { w = q * -1 } } if (p === 0 && q === 0) { return } if (o.deltaMode === 1) { var v = c.data(this, "mousewheel-line-height");
            w *= v;
            p *= v;
            q *= v } else { if (o.deltaMode === 2) { var n = c.data(this, "mousewheel-page-height");
                w *= n;
                p *= n;
                q *= n } }
        t = Math.max(Math.abs(p), Math.abs(q)); if (!b || t < b) { b = t; if (a(o, t)) { b /= 40 } } if (a(o, t)) { w /= 40;
            q /= 40;
            p /= 40 }
        w = Math[w >= 1 ? "floor" : "ceil"](w / b);
        q = Math[q >= 1 ? "floor" : "ceil"](q / b);
        p = Math[p >= 1 ? "floor" : "ceil"](p / b); if (f.settings.normalizeOffset && this.getBoundingClientRect) { var m = this.getBoundingClientRect();
            s = i.clientX - m.left;
            r = i.clientY - m.top }
        i.deltaX = q;
        i.deltaY = p;
        i.deltaFactor = b;
        i.offsetX = s;
        i.offsetY = r;
        i.deltaMode = 0;
        u.unshift(i, w, q, p); if (j) { clearTimeout(j) }
        j = setTimeout(g, 200); return (c.event.dispatch || c.event.handle).apply(this, u) }

    function g() { b = null }

    function a(m, i) { return f.settings.adjustOldDeltas && m.type === "mousewheel" && i % 120 === 0 } }));
(function(c) { var l = "undefined"; var d, g, q, f, b; var n, i, m, p;

    function j(s, v) { var u = typeof s[v]; return u === "function" || (!!(u == "object" && s[v])) || u == "unknown" }

    function k(s, t) { return typeof(s[t]) != l }

    function e(s, t) { return !!(typeof(s[t]) == "object" && s[t]) }

    function h(s) { if (window.console && window.console.log) { window.console.log("TextInputs module for Rangy not supported in your browser. Reason: " + s) } }

    function o(t, u, s) { if (u < 0) { u += t.value.length } if (typeof s == l) { s = u } if (s < 0) { s += t.value.length } return { start: u, end: s } }

    function a(t, u, s) { return { start: u, end: s, length: s - u, text: t.value.slice(u, s) } }

    function r() { return e(document, "body") ? document.body : document.getElementsByTagName("body")[0] }
    c(document).ready(function() { var t = document.createElement("textarea");
        r().appendChild(t); if (k(t, "selectionStart") && k(t, "selectionEnd")) { d = function(w) { var x = w.selectionStart,
                    v = w.selectionEnd; return a(w, x, v) };
            g = function(x, v, w) { var y = o(x, v, w);
                x.selectionStart = y.start;
                x.selectionEnd = y.end };
            p = function(w, v) { if (v) { w.selectionEnd = w.selectionStart } else { w.selectionStart = w.selectionEnd } } } else { if (j(t, "createTextRange") && e(document, "selection") && j(document.selection, "createRange")) { d = function(z) { var C = 0,
                        x = 0,
                        B, w, v, A; var y = document.selection.createRange(); if (y && y.parentElement() == z) { v = z.value.length;
                        B = z.value.replace(/\r\n/g, "\n");
                        w = z.createTextRange();
                        w.moveToBookmark(y.getBookmark());
                        A = z.createTextRange();
                        A.collapse(false); if (w.compareEndPoints("StartToEnd", A) > -1) { C = x = v } else { C = -w.moveStart("character", -v);
                            C += B.slice(0, C).split("\n").length - 1; if (w.compareEndPoints("EndToEnd", A) > -1) { x = v } else { x = -w.moveEnd("character", -v);
                                x += B.slice(0, x).split("\n").length - 1 } } } return a(z, C, x) }; var u = function(v, w) { return w - (v.value.slice(0, w).split("\r\n").length - 1) };
                g = function(z, v, y) { var A = o(z, v, y); var x = z.createTextRange(); var w = u(z, A.start);
                    x.collapse(true); if (A.start == A.end) { x.move("character", w) } else { x.moveEnd("character", u(z, A.end));
                        x.moveStart("character", w) }
                    x.select() };
                p = function(x, w) { var v = document.selection.createRange();
                    v.collapse(w);
                    v.select() } } else { r().removeChild(t);
                h("No means of finding text input caret position"); return } }
        r().removeChild(t);
        f = function(w, z, v, x) { var y; if (z != v) { y = w.value;
                w.value = y.slice(0, z) + y.slice(v) } if (x) { g(w, z, z) } };
        q = function(v) { var w = d(v);
            f(v, w.start, w.end, true) };
        m = function(v) { var w = d(v),
                x; if (w.start != w.end) { x = v.value;
                v.value = x.slice(0, w.start) + x.slice(w.end) }
            g(v, w.start, w.start); return w.text };
        b = function(w, z, v, x) { var y = w.value,
                A;
            w.value = y.slice(0, v) + z + y.slice(v); if (x) { A = v + z.length;
                g(w, A, A) } };
        n = function(v, y) { var w = d(v),
                x = v.value;
            v.value = x.slice(0, w.start) + y + x.slice(w.end); var z = w.start + y.length;
            g(v, z, z) };
        i = function(v, y, B) { var x = d(v),
                A = v.value;
            v.value = A.slice(0, x.start) + y + x.text + B + A.slice(x.end); var z = x.start + y.length; var w = z + x.length;
            g(v, z, w) };

        function s(v, w) { return function() { var z = this.jquery ? this[0] : this; var A = z.nodeName.toLowerCase(); if (z.nodeType == 1 && (A == "textarea" || (A == "input" && z.type == "text"))) { var y = [z].concat(Array.prototype.slice.call(arguments)); var x = v.apply(this, y); if (!w) { return x } } if (w) { return this } } }
        c.fn.extend({ getSelection: s(d, false), setSelection: s(g, true), collapseSelection: s(p, true), deleteSelectedText: s(q, true), deleteText: s(f, true), extractSelectedText: s(m, false), insertText: s(b, true), replaceSelectedText: s(n, true), surroundSelectedText: s(i, true) }) }) })(jQuery);
/*!
 * jQuery UI Touch Punch 1.0.8 as modified by RWAP Software
 * based on original touchpunch v0.2.3 which has not been updated since 2014
 *
 * Updates by RWAP Software to take account of various suggested changes on the original code issues
 *
 * Original: https://github.com/furf/jquery-ui-touch-punch
 * Copyright 2011â€“2014, Dave Furfero
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * Fork: https://github.com/RWAP/jquery-ui-touch-punch
 *
 * Depends:
 * jquery.ui.widget.js
 * jquery.ui.mouse.js
 */
(function(a) { if (typeof define === "function" && define.amd) { define(["jquery", "jquery.ui"], a) } else { a(jQuery) } }(function(c) { c.support.mspointer = window.navigator.msPointerEnabled;
    c.support.touch = ("ontouchstart" in document || "ontouchstart" in window || window.TouchEvent || (window.DocumentTouch && document instanceof DocumentTouch) || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0); if ((!c.support.touch && !c.support.mspointer) || !c.ui.mouse) { return } var e = c.ui.mouse.prototype,
        g = e._mouseInit,
        d = e._mouseDestroy,
        b;

    function a(h) { return { x: h.originalEvent.changedTouches[0].pageX, y: h.originalEvent.changedTouches[0].pageY } }

    function f(i, j) { if (i.originalEvent.touches.length > 1) { return } if (i.cancelable) { i.preventDefault() } var k = i.originalEvent.changedTouches[0],
            h = document.createEvent("MouseEvents");
        h.initMouseEvent(j, true, true, window, 1, k.screenX, k.screenY, k.clientX, k.clientY, false, false, false, false, 0, null);
        i.target.dispatchEvent(h) }
    e._touchStart = function(i) { var h = this;
        this._startedMove = i.timeStamp;
        h._startPos = a(i); if (b || !h._mouseCapture(i.originalEvent.changedTouches[0])) { return }
        b = true;
        h._touchMoved = false;
        f(i, "mouseover");
        f(i, "mousemove");
        f(i, "mousedown") };
    e._touchMove = function(h) { if (!b) { return }
        this._touchMoved = true;
        f(h, "mousemove") };
    e._touchEnd = function(j) { if (!b) { return }
        f(j, "mouseup");
        f(j, "mouseout"); var h = j.timeStamp - this._startedMove; if (!this._touchMoved || h < 500) { f(j, "click") } else { var i = a(j); if ((Math.abs(i.x - this._startPos.x) < 10) && (Math.abs(i.y - this._startPos.y) < 10)) { if (!this._touchMoved || j.originalEvent.changedTouches[0].touchType === "stylus") { f(j, "click") } } }
        this._touchMoved = false;
        b = false };
    e._mouseInit = function() { var h = this; if (c.support.mspointer) { h.element[0].style.msTouchAction = "none" }
        h.element.on({ touchstart: c.proxy(h, "_touchStart"), touchmove: c.proxy(h, "_touchMove"), touchend: c.proxy(h, "_touchEnd") });
        g.call(h) };
    e._mouseDestroy = function() { var h = this;
        h.element.off({ touchstart: c.proxy(h, "_touchStart"), touchmove: c.proxy(h, "_touchMove"), touchend: c.proxy(h, "_touchEnd") });
        d.call(h) } }));
(function() { var a = $.datepicker._gotoToday;
    $.datepicker._gotoToday = function(d) { var c = $(d),
            b = this._getInst(c[0]);
        a.call(this, d);
        this._selectDate(d, this._formatDate(b, b.selectedDay, b.drawMonth, b.drawYear)) };
    $.datepicker._attachHandlers = function(c) { var b = this._get(c, "stepMonths"),
            d = "#" + c.id.replace(/\\\\/g, "\\");
        c.dpDiv.find("[data-handler]").map(function() { var e = { prev: function() { $.datepicker._adjustDate(d, -b, "M");
                    $.datepicker._updateDatePickerPosition(c) }, next: function() { $.datepicker._adjustDate(d, +b, "M");
                    $.datepicker._updateDatePickerPosition(c) }, hide: function() { $.datepicker._hideDatepicker() }, today: function() { $.datepicker._gotoToday(d);
                    $.datepicker._updateDatePickerPosition(c) }, selectDay: function() { $.datepicker._selectDay(d, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this);
                    $.datepicker._updateDatePickerPosition(c); return false }, selectMonth: function() { $.datepicker._selectMonthYear(d, this, "M");
                    $.datepicker._updateDatePickerPosition(c); return false }, selectYear: function() { $.datepicker._selectMonthYear(d, this, "Y");
                    $.datepicker._updateDatePickerPosition(c); return false } };
            $(this).on(this.getAttribute("data-event"), e[this.getAttribute("data-handler")]) }) };
    $.datepicker._updateDatePickerPosition = function(d) { if (d.inline) { return } var b = d.input[0]; if (!$.datepicker._pos) { $.datepicker._pos = $.datepicker._findPos(b);
            $.datepicker._pos[1] += b.offsetHeight } var f = { left: $.datepicker._pos[0], top: $.datepicker._pos[1] };
        $.datepicker._pos = null; var e = false;
        $(b).parents().each(function() { e |= $(this).css("position") === "fixed"; return !e }); var c = $.datepicker._checkOffset(d, f, e);
        d.dpDiv.css({ top: c.top + "px" }) };
    $.datepicker._generateMonthYearHeader = function(f, d, n, h, l, o, j, b) { var s, c, t, q, g, p, m, i, e = this._get(f, "changeMonth"),
            u = this._get(f, "changeYear"),
            v = this._get(f, "showMonthAfterYear"),
            k = "<div class='ui-datepicker-title'>",
            r = ""; if (o || !e) { r += "<span class='ui-datepicker-month' aria-label='select month'>" + j[d] + "</span>" } else { s = (h && h.getFullYear() === n);
            c = (l && l.getFullYear() === n);
            r += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change' aria-label='select month'>"; for (t = 0; t < 12; t++) { if ((!s || t >= h.getMonth()) && (!c || t <= l.getMonth())) { r += "<option value='" + t + "'" + (t === d ? " selected='selected'" : "") + ">" + b[t] + "</option>" } }
            r += "</select>" } if (!v) { k += r + (o || !(e && u) ? "&#xa0;" : "") } if (!f.yearshtml) { f.yearshtml = ""; if (o || !u) { k += "<span class='ui-datepicker-year' aria-label='select year'>" + n + "</span>" } else { q = this._get(f, "yearRange").split(":");
                g = new Date().getFullYear();
                p = function(x) { var w = (x.match(/c[+\-].*/) ? n + parseInt(x.substring(1), 10) : (x.match(/[+\-].*/) ? g + parseInt(x, 10) : parseInt(x, 10))); return (isNaN(w) ? g : w) };
                m = p(q[0]);
                i = Math.max(m, p(q[1] || ""));
                m = (h ? Math.max(m, h.getFullYear()) : m);
                i = (l ? Math.min(i, l.getFullYear()) : i);
                f.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change' aria-label='select year'>"; for (; m <= i; m++) { f.yearshtml += "<option value='" + m + "'" + (m === n ? " selected='selected'" : "") + ">" + m + "</option>" }
                f.yearshtml += "</select>";
                k += f.yearshtml;
                f.yearshtml = null } }
        k += this._get(f, "yearSuffix"); if (v) { k += (o || !(e && u) ? "&#xa0;" : "") + r }
        k += "</div>"; return k };
    $.datepicker._updateDatepicker = function(c) { var b = c.input[0]; if ($.datepicker._curInst && $.datepicker._curInst !== c && $.datepicker._datepickerShowing && $.datepicker._lastInput !== b) { return } if (typeof(c.stay_open) !== "boolean" || c.stay_open === false) { var d = this;
            setTimeout(function() { d._base_updateDatepicker(c); var e = d._get(c, "timepicker"); if (e) { e._addTimePicker(c) }
                d._updateDatePickerPosition(c) }, 0) } };
    $.datepicker._base_disableDatepicker = $.datepicker._disableDatepicker;
    $.datepicker._disableDatepicker = function(b) { setTimeout(function() { $.datepicker._base_disableDatepicker(b) }, 0) } })();
(function() { $.fn.extend({ focus: (function(a) { return function(b, c) { return typeof b === "number" ? this.each(function() { var d = this;
                    setTimeout(function() { $(d).trigger("focus"); if (c) { c.call(d) } }, b) }) : a.apply(this, arguments) } })($.fn.focus), disableSelection: (function() { var a = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown"; return function() { return this.on(a + ".ui-disableSelection", function(b) { b.preventDefault() }) } })(), enableSelection: function() { return this.off(".ui-disableSelection") }, zIndex: function(d) { if (d !== undefined) { return this.css("zIndex", String(d)) } if (this.length) { var b = $(this[0]),
                    a, c; while (b.length && b[0] !== document) { a = b.css("position"); if (a === "absolute" || a === "relative" || a === "fixed") { c = parseInt(b.css("zIndex"), 10); if (!isNaN(c) && c !== 0) { return c } }
                    b = b.parent() } } return 0 } }) })();
$.widget("ui.sortable", $.ui.sortable, { _setHandleClassName: function() { this._removeClass(this.element.find(".ui-sortable-handle"), "ui-sortable-handle");
        $.each(this.items, function() {
            (this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item).addClass("ui-sortable-handle") }) } });
(function() { $.extend(Object.getPrototypeOf($.timepicker), { _updateDateTime: function(h) { h = this.inst || h; var e = (h.currentYear > 0 ? new Date(h.currentYear, h.currentMonth, h.currentDay) : new Date(h.selectedYear, h.selectedMonth, h.selectedDay)),
                b = $.datepicker._daylightSavingAdjust(e),
                i = $.datepicker._get(h, "dateFormat"),
                c = $.datepicker._getFormatConfig(h),
                g = b !== null && this.timeDefined;
            this.formattedDate = $.datepicker.formatDate(i, (b === null ? new Date() : b), c); var a = this.formattedDate; var j = h.lastVal; if (j === "") { h.currentYear = h.selectedYear;
                h.currentMonth = h.selectedMonth;
                h.currentDay = h.selectedDay } if (this._defaults.timeOnly === true && this._defaults.timeOnlyShowDate === false) { a = this.formattedTime } else { if ((this._defaults.timeOnly !== true && (this._defaults.alwaysSetTime || g)) || (this._defaults.timeOnly === true && this._defaults.timeOnlyShowDate === true)) { a += this._defaults.separator + this.formattedTime + this._defaults.timeSuffix } }
            this.formattedDateTime = a; if (!this._defaults.showTimepicker) { this.$input.val(this.formattedDate) } else { if (this.$altInput && this._defaults.timeOnly === false && this._defaults.altFieldTimeOnly === true) { this.$altInput.val(this.formattedTime);
                    this.$input.val(this.formattedDate) } else { if (this.$altInput) { this.$input.val(a); var f = "",
                            k = this._defaults.altSeparator !== null ? this._defaults.altSeparator : this._defaults.separator,
                            d = this._defaults.altTimeSuffix !== null ? this._defaults.altTimeSuffix : this._defaults.timeSuffix; if (!this._defaults.timeOnly) { if (this._defaults.altFormat) { f = $.datepicker.formatDate(this._defaults.altFormat, (b === null ? new Date() : b), c) } else { f = this.formattedDate } if (f) { f += k } } if (this._defaults.altTimeFormat !== null) { f += $.datepicker.formatTime(this._defaults.altTimeFormat, this, this._defaults) + d } else { f += this.formattedTime + d }
                        this.$altInput.val(f) } else { this.$input.val(a) } } } if (j != a) { this.$input.trigger("change") } }, _addTimePicker: function(b) { var a = PrimeFaces.trim((this.$altInput && this._defaults.altFieldTimeOnly) ? this.$input.val() + " " + this.$altInput.val() : (b.inline ? this.$input.next().val() : this.$input.val()));
            this.timeDefined = this._parseTime(a);
            this._limitMinMaxDateTime(b, false);
            this._injectTimePicker();
            this._afterInject() }, _controls: { slider: { create: function(b, g, e, h, c, a, d) { var f = b._defaults.isRTL; return g.prop("slide", null).slider({ orientation: "horizontal", value: f ? h * -1 : h, min: f ? a * -1 : c, max: f ? c * -1 : a, step: d, slide: function(i, j) { b.control.value(b, $(this), e, f ? j.value * -1 : j.value);
                            b._onTimeChange() }, stop: function(i, j) { b._onSelectHandler() } }) }, options: function(b, f, e, d, g) { if (b._defaults.isRTL) { if (typeof(d) === "string") { if (d === "min" || d === "max") { if (g !== undefined) { return f.slider(d, g * -1) } return Math.abs(f.slider(d)) } return f.slider(d) } var c = d.min,
                            a = d.max;
                        d.min = d.max = null; if (c !== undefined) { d.max = c * -1 } if (a !== undefined) { d.min = a * -1 } return f.slider(d) } if (typeof(d) === "string" && g !== undefined) { return f.slider(d, g) } return f.slider(d) }, value: function(a, c, b, d) { if (a._defaults.isRTL) { if (d !== undefined) { return c.slider("value", d * -1) } return Math.abs(c.slider("value")) } if (d !== undefined) { return c.slider("value", d) } return c.slider("value") } }, select: { create: function(g, f, k, b, d, h, c) { var a = '<select class="ui-timepicker-select ui-state-default ui-corner-all" data-unit="' + k + '" data-min="' + d + '" data-max="' + h + '" data-step="' + c + '" aria-label="select ' + k + '">',
                        j = g._defaults.pickerTimeFormat || g._defaults.timeFormat; for (var e = d; e <= h; e += c) { a += '<option value="' + e + '"' + (e === b ? " selected" : "") + ">"; if (k === "hour") { a += $.datepicker.formatTime(PrimeFaces.trim(j.replace(/[^ht ]/ig, "")), { hour: e }, g._defaults) } else { if (k === "millisec" || k === "microsec" || e >= 10) { a += e } else { a += "0" + e.toString() } }
                        a += "</option>" }
                    a += "</select>";
                    f.children("select").remove();
                    $(a).appendTo(f).on("change", function(i) { g._onTimeChange();
                        g._onSelectHandler();
                        g._afterInject() }); return f }, options: function(a, d, c, b, f) { var e = {},
                        g = d.children("select"); if (typeof(b) === "string") { if (f === undefined) { return g.data(b) }
                        e[b] = f } else { e = b } return a.control.create(a, d, g.data("unit"), g.val(), e.min >= 0 ? e.min : g.data("min"), e.max || g.data("max"), e.step || g.data("step")) }, value: function(a, c, b, d) { var e = c.children("select"); if (d !== undefined) { return e.val(d) } return e.val() } } } }) })();