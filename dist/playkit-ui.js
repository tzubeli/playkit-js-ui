(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("playkit-js"));
	else if(typeof define === 'function' && define.amd)
		define(["playkit-js"], factory);
	else if(typeof exports === 'object')
		exports["PlaykitJsUi"] = factory(require("playkit-js"));
	else
		root["PlaykitJsUi"] = factory(root["Playkit"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_49__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 29);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

!function() {
    'use strict';
    function VNode() {}
    function h(nodeName, attributes) {
        var lastSimple, child, simple, i, children = EMPTY_CHILDREN;
        for (i = arguments.length; i-- > 2; ) stack.push(arguments[i]);
        if (attributes && null != attributes.children) {
            if (!stack.length) stack.push(attributes.children);
            delete attributes.children;
        }
        while (stack.length) if ((child = stack.pop()) && void 0 !== child.pop) for (i = child.length; i--; ) stack.push(child[i]); else {
            if (child === !0 || child === !1) child = null;
            if (simple = 'function' != typeof nodeName) if (null == child) child = ''; else if ('number' == typeof child) child = String(child); else if ('string' != typeof child) simple = !1;
            if (simple && lastSimple) children[children.length - 1] += child; else if (children === EMPTY_CHILDREN) children = [ child ]; else children.push(child);
            lastSimple = simple;
        }
        var p = new VNode();
        p.nodeName = nodeName;
        p.children = children;
        p.attributes = null == attributes ? void 0 : attributes;
        p.key = null == attributes ? void 0 : attributes.key;
        if (void 0 !== options.vnode) options.vnode(p);
        return p;
    }
    function extend(obj, props) {
        for (var i in props) obj[i] = props[i];
        return obj;
    }
    function cloneElement(vnode, props) {
        return h(vnode.nodeName, extend(extend({}, vnode.attributes), props), arguments.length > 2 ? [].slice.call(arguments, 2) : vnode.children);
    }
    function enqueueRender(component) {
        if (!component.__d && (component.__d = !0) && 1 == items.push(component)) (options.debounceRendering || setTimeout)(rerender);
    }
    function rerender() {
        var p, list = items;
        items = [];
        while (p = list.pop()) if (p.__d) renderComponent(p);
    }
    function isSameNodeType(node, vnode, hydrating) {
        if ('string' == typeof vnode || 'number' == typeof vnode) return void 0 !== node.splitText;
        if ('string' == typeof vnode.nodeName) return !node._componentConstructor && isNamedNode(node, vnode.nodeName); else return hydrating || node._componentConstructor === vnode.nodeName;
    }
    function isNamedNode(node, nodeName) {
        return node.__n === nodeName || node.nodeName.toLowerCase() === nodeName.toLowerCase();
    }
    function getNodeProps(vnode) {
        var props = extend({}, vnode.attributes);
        props.children = vnode.children;
        var defaultProps = vnode.nodeName.defaultProps;
        if (void 0 !== defaultProps) for (var i in defaultProps) if (void 0 === props[i]) props[i] = defaultProps[i];
        return props;
    }
    function createNode(nodeName, isSvg) {
        var node = isSvg ? document.createElementNS('http://www.w3.org/2000/svg', nodeName) : document.createElement(nodeName);
        node.__n = nodeName;
        return node;
    }
    function removeNode(node) {
        if (node.parentNode) node.parentNode.removeChild(node);
    }
    function setAccessor(node, name, old, value, isSvg) {
        if ('className' === name) name = 'class';
        if ('key' === name) ; else if ('ref' === name) {
            if (old) old(null);
            if (value) value(node);
        } else if ('class' === name && !isSvg) node.className = value || ''; else if ('style' === name) {
            if (!value || 'string' == typeof value || 'string' == typeof old) node.style.cssText = value || '';
            if (value && 'object' == typeof value) {
                if ('string' != typeof old) for (var i in old) if (!(i in value)) node.style[i] = '';
                for (var i in value) node.style[i] = 'number' == typeof value[i] && IS_NON_DIMENSIONAL.test(i) === !1 ? value[i] + 'px' : value[i];
            }
        } else if ('dangerouslySetInnerHTML' === name) {
            if (value) node.innerHTML = value.__html || '';
        } else if ('o' == name[0] && 'n' == name[1]) {
            var useCapture = name !== (name = name.replace(/Capture$/, ''));
            name = name.toLowerCase().substring(2);
            if (value) {
                if (!old) node.addEventListener(name, eventProxy, useCapture);
            } else node.removeEventListener(name, eventProxy, useCapture);
            (node.__l || (node.__l = {}))[name] = value;
        } else if ('list' !== name && 'type' !== name && !isSvg && name in node) {
            setProperty(node, name, null == value ? '' : value);
            if (null == value || value === !1) node.removeAttribute(name);
        } else {
            var ns = isSvg && name !== (name = name.replace(/^xlink\:?/, ''));
            if (null == value || value === !1) if (ns) node.removeAttributeNS('http://www.w3.org/1999/xlink', name.toLowerCase()); else node.removeAttribute(name); else if ('function' != typeof value) if (ns) node.setAttributeNS('http://www.w3.org/1999/xlink', name.toLowerCase(), value); else node.setAttribute(name, value);
        }
    }
    function setProperty(node, name, value) {
        try {
            node[name] = value;
        } catch (e) {}
    }
    function eventProxy(e) {
        return this.__l[e.type](options.event && options.event(e) || e);
    }
    function flushMounts() {
        var c;
        while (c = mounts.pop()) {
            if (options.afterMount) options.afterMount(c);
            if (c.componentDidMount) c.componentDidMount();
        }
    }
    function diff(dom, vnode, context, mountAll, parent, componentRoot) {
        if (!diffLevel++) {
            isSvgMode = null != parent && void 0 !== parent.ownerSVGElement;
            hydrating = null != dom && !('__preactattr_' in dom);
        }
        var ret = idiff(dom, vnode, context, mountAll, componentRoot);
        if (parent && ret.parentNode !== parent) parent.appendChild(ret);
        if (!--diffLevel) {
            hydrating = !1;
            if (!componentRoot) flushMounts();
        }
        return ret;
    }
    function idiff(dom, vnode, context, mountAll, componentRoot) {
        var out = dom, prevSvgMode = isSvgMode;
        if (null == vnode) vnode = '';
        if ('string' == typeof vnode) {
            if (dom && void 0 !== dom.splitText && dom.parentNode && (!dom._component || componentRoot)) {
                if (dom.nodeValue != vnode) dom.nodeValue = vnode;
            } else {
                out = document.createTextNode(vnode);
                if (dom) {
                    if (dom.parentNode) dom.parentNode.replaceChild(out, dom);
                    recollectNodeTree(dom, !0);
                }
            }
            out.__preactattr_ = !0;
            return out;
        }
        if ('function' == typeof vnode.nodeName) return buildComponentFromVNode(dom, vnode, context, mountAll);
        isSvgMode = 'svg' === vnode.nodeName ? !0 : 'foreignObject' === vnode.nodeName ? !1 : isSvgMode;
        if (!dom || !isNamedNode(dom, String(vnode.nodeName))) {
            out = createNode(String(vnode.nodeName), isSvgMode);
            if (dom) {
                while (dom.firstChild) out.appendChild(dom.firstChild);
                if (dom.parentNode) dom.parentNode.replaceChild(out, dom);
                recollectNodeTree(dom, !0);
            }
        }
        var fc = out.firstChild, props = out.__preactattr_ || (out.__preactattr_ = {}), vchildren = vnode.children;
        if (!hydrating && vchildren && 1 === vchildren.length && 'string' == typeof vchildren[0] && null != fc && void 0 !== fc.splitText && null == fc.nextSibling) {
            if (fc.nodeValue != vchildren[0]) fc.nodeValue = vchildren[0];
        } else if (vchildren && vchildren.length || null != fc) innerDiffNode(out, vchildren, context, mountAll, hydrating || null != props.dangerouslySetInnerHTML);
        diffAttributes(out, vnode.attributes, props);
        isSvgMode = prevSvgMode;
        return out;
    }
    function innerDiffNode(dom, vchildren, context, mountAll, isHydrating) {
        var j, c, vchild, child, originalChildren = dom.childNodes, children = [], keyed = {}, keyedLen = 0, min = 0, len = originalChildren.length, childrenLen = 0, vlen = vchildren ? vchildren.length : 0;
        if (0 !== len) for (var i = 0; i < len; i++) {
            var _child = originalChildren[i], props = _child.__preactattr_, key = vlen && props ? _child._component ? _child._component.__k : props.key : null;
            if (null != key) {
                keyedLen++;
                keyed[key] = _child;
            } else if (props || (void 0 !== _child.splitText ? isHydrating ? _child.nodeValue.trim() : !0 : isHydrating)) children[childrenLen++] = _child;
        }
        if (0 !== vlen) for (var i = 0; i < vlen; i++) {
            vchild = vchildren[i];
            child = null;
            var key = vchild.key;
            if (null != key) {
                if (keyedLen && void 0 !== keyed[key]) {
                    child = keyed[key];
                    keyed[key] = void 0;
                    keyedLen--;
                }
            } else if (!child && min < childrenLen) for (j = min; j < childrenLen; j++) if (void 0 !== children[j] && isSameNodeType(c = children[j], vchild, isHydrating)) {
                child = c;
                children[j] = void 0;
                if (j === childrenLen - 1) childrenLen--;
                if (j === min) min++;
                break;
            }
            child = idiff(child, vchild, context, mountAll);
            if (child && child !== dom) if (i >= len) dom.appendChild(child); else if (child !== originalChildren[i]) if (child === originalChildren[i + 1]) removeNode(originalChildren[i]); else dom.insertBefore(child, originalChildren[i] || null);
        }
        if (keyedLen) for (var i in keyed) if (void 0 !== keyed[i]) recollectNodeTree(keyed[i], !1);
        while (min <= childrenLen) if (void 0 !== (child = children[childrenLen--])) recollectNodeTree(child, !1);
    }
    function recollectNodeTree(node, unmountOnly) {
        var component = node._component;
        if (component) unmountComponent(component); else {
            if (null != node.__preactattr_ && node.__preactattr_.ref) node.__preactattr_.ref(null);
            if (unmountOnly === !1 || null == node.__preactattr_) removeNode(node);
            removeChildren(node);
        }
    }
    function removeChildren(node) {
        node = node.lastChild;
        while (node) {
            var next = node.previousSibling;
            recollectNodeTree(node, !0);
            node = next;
        }
    }
    function diffAttributes(dom, attrs, old) {
        var name;
        for (name in old) if ((!attrs || null == attrs[name]) && null != old[name]) setAccessor(dom, name, old[name], old[name] = void 0, isSvgMode);
        for (name in attrs) if (!('children' === name || 'innerHTML' === name || name in old && attrs[name] === ('value' === name || 'checked' === name ? dom[name] : old[name]))) setAccessor(dom, name, old[name], old[name] = attrs[name], isSvgMode);
    }
    function collectComponent(component) {
        var name = component.constructor.name;
        (components[name] || (components[name] = [])).push(component);
    }
    function createComponent(Ctor, props, context) {
        var inst, list = components[Ctor.name];
        if (Ctor.prototype && Ctor.prototype.render) {
            inst = new Ctor(props, context);
            Component.call(inst, props, context);
        } else {
            inst = new Component(props, context);
            inst.constructor = Ctor;
            inst.render = doRender;
        }
        if (list) for (var i = list.length; i--; ) if (list[i].constructor === Ctor) {
            inst.__b = list[i].__b;
            list.splice(i, 1);
            break;
        }
        return inst;
    }
    function doRender(props, state, context) {
        return this.constructor(props, context);
    }
    function setComponentProps(component, props, opts, context, mountAll) {
        if (!component.__x) {
            component.__x = !0;
            if (component.__r = props.ref) delete props.ref;
            if (component.__k = props.key) delete props.key;
            if (!component.base || mountAll) {
                if (component.componentWillMount) component.componentWillMount();
            } else if (component.componentWillReceiveProps) component.componentWillReceiveProps(props, context);
            if (context && context !== component.context) {
                if (!component.__c) component.__c = component.context;
                component.context = context;
            }
            if (!component.__p) component.__p = component.props;
            component.props = props;
            component.__x = !1;
            if (0 !== opts) if (1 === opts || options.syncComponentUpdates !== !1 || !component.base) renderComponent(component, 1, mountAll); else enqueueRender(component);
            if (component.__r) component.__r(component);
        }
    }
    function renderComponent(component, opts, mountAll, isChild) {
        if (!component.__x) {
            var rendered, inst, cbase, props = component.props, state = component.state, context = component.context, previousProps = component.__p || props, previousState = component.__s || state, previousContext = component.__c || context, isUpdate = component.base, nextBase = component.__b, initialBase = isUpdate || nextBase, initialChildComponent = component._component, skip = !1;
            if (isUpdate) {
                component.props = previousProps;
                component.state = previousState;
                component.context = previousContext;
                if (2 !== opts && component.shouldComponentUpdate && component.shouldComponentUpdate(props, state, context) === !1) skip = !0; else if (component.componentWillUpdate) component.componentWillUpdate(props, state, context);
                component.props = props;
                component.state = state;
                component.context = context;
            }
            component.__p = component.__s = component.__c = component.__b = null;
            component.__d = !1;
            if (!skip) {
                rendered = component.render(props, state, context);
                if (component.getChildContext) context = extend(extend({}, context), component.getChildContext());
                var toUnmount, base, childComponent = rendered && rendered.nodeName;
                if ('function' == typeof childComponent) {
                    var childProps = getNodeProps(rendered);
                    inst = initialChildComponent;
                    if (inst && inst.constructor === childComponent && childProps.key == inst.__k) setComponentProps(inst, childProps, 1, context, !1); else {
                        toUnmount = inst;
                        component._component = inst = createComponent(childComponent, childProps, context);
                        inst.__b = inst.__b || nextBase;
                        inst.__u = component;
                        setComponentProps(inst, childProps, 0, context, !1);
                        renderComponent(inst, 1, mountAll, !0);
                    }
                    base = inst.base;
                } else {
                    cbase = initialBase;
                    toUnmount = initialChildComponent;
                    if (toUnmount) cbase = component._component = null;
                    if (initialBase || 1 === opts) {
                        if (cbase) cbase._component = null;
                        base = diff(cbase, rendered, context, mountAll || !isUpdate, initialBase && initialBase.parentNode, !0);
                    }
                }
                if (initialBase && base !== initialBase && inst !== initialChildComponent) {
                    var baseParent = initialBase.parentNode;
                    if (baseParent && base !== baseParent) {
                        baseParent.replaceChild(base, initialBase);
                        if (!toUnmount) {
                            initialBase._component = null;
                            recollectNodeTree(initialBase, !1);
                        }
                    }
                }
                if (toUnmount) unmountComponent(toUnmount);
                component.base = base;
                if (base && !isChild) {
                    var componentRef = component, t = component;
                    while (t = t.__u) (componentRef = t).base = base;
                    base._component = componentRef;
                    base._componentConstructor = componentRef.constructor;
                }
            }
            if (!isUpdate || mountAll) mounts.unshift(component); else if (!skip) {
                flushMounts();
                if (component.componentDidUpdate) component.componentDidUpdate(previousProps, previousState, previousContext);
                if (options.afterUpdate) options.afterUpdate(component);
            }
            if (null != component.__h) while (component.__h.length) component.__h.pop().call(component);
            if (!diffLevel && !isChild) flushMounts();
        }
    }
    function buildComponentFromVNode(dom, vnode, context, mountAll) {
        var c = dom && dom._component, originalComponent = c, oldDom = dom, isDirectOwner = c && dom._componentConstructor === vnode.nodeName, isOwner = isDirectOwner, props = getNodeProps(vnode);
        while (c && !isOwner && (c = c.__u)) isOwner = c.constructor === vnode.nodeName;
        if (c && isOwner && (!mountAll || c._component)) {
            setComponentProps(c, props, 3, context, mountAll);
            dom = c.base;
        } else {
            if (originalComponent && !isDirectOwner) {
                unmountComponent(originalComponent);
                dom = oldDom = null;
            }
            c = createComponent(vnode.nodeName, props, context);
            if (dom && !c.__b) {
                c.__b = dom;
                oldDom = null;
            }
            setComponentProps(c, props, 1, context, mountAll);
            dom = c.base;
            if (oldDom && dom !== oldDom) {
                oldDom._component = null;
                recollectNodeTree(oldDom, !1);
            }
        }
        return dom;
    }
    function unmountComponent(component) {
        if (options.beforeUnmount) options.beforeUnmount(component);
        var base = component.base;
        component.__x = !0;
        if (component.componentWillUnmount) component.componentWillUnmount();
        component.base = null;
        var inner = component._component;
        if (inner) unmountComponent(inner); else if (base) {
            if (base.__preactattr_ && base.__preactattr_.ref) base.__preactattr_.ref(null);
            component.__b = base;
            removeNode(base);
            collectComponent(component);
            removeChildren(base);
        }
        if (component.__r) component.__r(null);
    }
    function Component(props, context) {
        this.__d = !0;
        this.context = context;
        this.props = props;
        this.state = this.state || {};
    }
    function render(vnode, parent, merge) {
        return diff(merge, vnode, {}, !1, parent, !1);
    }
    var options = {};
    var stack = [];
    var EMPTY_CHILDREN = [];
    var IS_NON_DIMENSIONAL = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i;
    var items = [];
    var mounts = [];
    var diffLevel = 0;
    var isSvgMode = !1;
    var hydrating = !1;
    var components = {};
    extend(Component.prototype, {
        setState: function(state, callback) {
            var s = this.state;
            if (!this.__s) this.__s = extend({}, s);
            extend(s, 'function' == typeof state ? state(s, this.props) : state);
            if (callback) (this.__h = this.__h || []).push(callback);
            enqueueRender(this);
        },
        forceUpdate: function(callback) {
            if (callback) (this.__h = this.__h || []).push(callback);
            renderComponent(this, 2);
        },
        render: function() {}
    });
    var preact = {
        h: h,
        createElement: h,
        cloneElement: cloneElement,
        Component: Component,
        render: render,
        rerender: rerender,
        options: options
    };
    if (true) module.exports = preact; else self.preact = preact;
}();
//# sourceMappingURL=preact.js.map

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
	 true ? module.exports = factory(__webpack_require__(0), __webpack_require__(6)) :
	typeof define === 'function' && define.amd ? define(['preact', 'redux'], factory) :
	(global.preactRedux = factory(global.preact,global.Redux));
}(this, (function (preact,redux) {

var Children = {
	only: function only(children) {
		return children && children[0] || null;
	}
};

function proptype() {}
proptype.isRequired = proptype;

var PropTypes = {
	element: proptype,
	func: proptype,
	shape: function shape() {
		return proptype;
	},
	instanceOf: function instanceOf() {
		return proptype;
	}
};

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
};





var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};









var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var get = function get(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent === null) {
      return undefined;
    } else {
      return get(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};









var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};



var set = function set(object, property, value, receiver) {
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent !== null) {
      set(parent, property, value, receiver);
    }
  } else if ("value" in desc && desc.writable) {
    desc.value = value;
  } else {
    var setter = desc.set;

    if (setter !== undefined) {
      setter.call(receiver, value);
    }
  }

  return value;
};

// encapsulates the subscription logic for connecting a component to the redux store, as
// well as nesting subscriptions of descendant components, so that we can ensure the
// ancestor components re-render before descendants

var CLEARED = null;
var nullListeners = {
  notify: function notify() {}
};

function createListenerCollection() {
  // the current/next pattern is copied from redux's createStore code.
  // TODO: refactor+expose that code to be reusable here?
  var current = [];
  var next = [];

  return {
    clear: function clear() {
      next = CLEARED;
      current = CLEARED;
    },
    notify: function notify() {
      var listeners = current = next;
      for (var i = 0; i < listeners.length; i++) {
        listeners[i]();
      }
    },
    subscribe: function subscribe(listener) {
      var isSubscribed = true;
      if (next === current) next = current.slice();
      next.push(listener);

      return function unsubscribe() {
        if (!isSubscribed || current === CLEARED) return;
        isSubscribed = false;

        if (next === current) next = current.slice();
        next.splice(next.indexOf(listener), 1);
      };
    }
  };
}

var Subscription = function () {
  function Subscription(store, parentSub) {
    classCallCheck(this, Subscription);

    this.store = store;
    this.parentSub = parentSub;
    this.unsubscribe = null;
    this.listeners = nullListeners;
  }

  Subscription.prototype.addNestedSub = function addNestedSub(listener) {
    this.trySubscribe();
    return this.listeners.subscribe(listener);
  };

  Subscription.prototype.notifyNestedSubs = function notifyNestedSubs() {
    this.listeners.notify();
  };

  Subscription.prototype.isSubscribed = function isSubscribed() {
    return Boolean(this.unsubscribe);
  };

  Subscription.prototype.trySubscribe = function trySubscribe() {
    if (!this.unsubscribe) {
      // this.onStateChange is set by connectAdvanced.initSubscription()
      this.unsubscribe = this.parentSub ? this.parentSub.addNestedSub(this.onStateChange) : this.store.subscribe(this.onStateChange);

      this.listeners = createListenerCollection();
    }
  };

  Subscription.prototype.tryUnsubscribe = function tryUnsubscribe() {
    if (this.unsubscribe) {
      this.unsubscribe();
      this.unsubscribe = null;
      this.listeners.clear();
      this.listeners = nullListeners;
    }
  };

  return Subscription;
}();

var storeShape = PropTypes.shape({
  subscribe: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired,
  getState: PropTypes.func.isRequired
});

/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */
  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
    /* eslint-disable no-empty */
  } catch (e) {}
  /* eslint-enable no-empty */
}

var didWarnAboutReceivingStore = false;
function warnAboutReceivingStore() {
  if (didWarnAboutReceivingStore) {
    return;
  }
  didWarnAboutReceivingStore = true;

  warning('<Provider> does not support changing `store` on the fly. ' + 'It is most likely that you see this error because you updated to ' + 'Redux 2.x and React Redux 2.x which no longer hot reload reducers ' + 'automatically. See https://github.com/reactjs/react-redux/releases/' + 'tag/v2.0.0 for the migration instructions.');
}

var Provider = function (_Component) {
  inherits(Provider, _Component);

  Provider.prototype.getChildContext = function getChildContext() {
    return { store: this.store, storeSubscription: null };
  };

  function Provider(props, context) {
    classCallCheck(this, Provider);

    var _this = possibleConstructorReturn(this, _Component.call(this, props, context));

    _this.store = props.store;
    return _this;
  }

  Provider.prototype.render = function render() {
    return Children.only(this.props.children);
  };

  return Provider;
}(preact.Component);

{
  Provider.prototype.componentWillReceiveProps = function (nextProps) {
    var store = this.store;
    var nextStore = nextProps.store;


    if (store !== nextStore) {
      warnAboutReceivingStore();
    }
  };
}

Provider.childContextTypes = {
  store: storeShape.isRequired,
  storeSubscription: PropTypes.instanceOf(Subscription)
};
Provider.displayName = 'Provider';

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
    childContextTypes: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    mixins: true,
    propTypes: true,
    type: true
};

var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    arguments: true,
    arity: true
};

var isGetOwnPropertySymbolsAvailable = typeof Object.getOwnPropertySymbols === 'function';

var index = function hoistNonReactStatics(targetComponent, sourceComponent, customStatics) {
    if (typeof sourceComponent !== 'string') {
        // don't hoist over string (html) components
        var keys = Object.getOwnPropertyNames(sourceComponent);

        /* istanbul ignore else */
        if (isGetOwnPropertySymbolsAvailable) {
            keys = keys.concat(Object.getOwnPropertySymbols(sourceComponent));
        }

        for (var i = 0; i < keys.length; ++i) {
            if (!REACT_STATICS[keys[i]] && !KNOWN_STATICS[keys[i]] && (!customStatics || !customStatics[keys[i]])) {
                try {
                    targetComponent[keys[i]] = sourceComponent[keys[i]];
                } catch (error) {}
            }
        }
    }

    return targetComponent;
};

var invariant = function () {}

var hotReloadingVersion = 0;
function connectAdvanced(
/*
  selectorFactory is a func that is responsible for returning the selector function used to
  compute new props from state, props, and dispatch. For example:
     export default connectAdvanced((dispatch, options) => (state, props) => ({
      thing: state.things[props.thingId],
      saveThing: fields => dispatch(actionCreators.saveThing(props.thingId, fields)),
    }))(YourComponent)
   Access to dispatch is provided to the factory so selectorFactories can bind actionCreators
  outside of their selector as an optimization. Options passed to connectAdvanced are passed to
  the selectorFactory, along with displayName and WrappedComponent, as the second argument.
   Note that selectorFactory is responsible for all caching/memoization of inbound and outbound
  props. Do not use connectAdvanced directly without memoizing results between calls to your
  selector, otherwise the Connect component will re-render on every state or props change.
*/
selectorFactory) {
  var _contextTypes, _childContextTypes;

  var _ref = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  var _ref$getDisplayName = _ref.getDisplayName;
  var getDisplayName = _ref$getDisplayName === undefined ? function (name) {
    return 'ConnectAdvanced(' + name + ')';
  } : _ref$getDisplayName;
  var _ref$methodName = _ref.methodName;
  var methodName = _ref$methodName === undefined ? 'connectAdvanced' : _ref$methodName;
  var _ref$renderCountProp = _ref.renderCountProp;
  var renderCountProp = _ref$renderCountProp === undefined ? undefined : _ref$renderCountProp;
  var _ref$shouldHandleStat = _ref.shouldHandleStateChanges;
  var shouldHandleStateChanges = _ref$shouldHandleStat === undefined ? true : _ref$shouldHandleStat;
  var _ref$storeKey = _ref.storeKey;
  var storeKey = _ref$storeKey === undefined ? 'store' : _ref$storeKey;
  var _ref$withRef = _ref.withRef;
  var withRef = _ref$withRef === undefined ? false : _ref$withRef;
  var connectOptions = objectWithoutProperties(_ref, ['getDisplayName', 'methodName', 'renderCountProp', 'shouldHandleStateChanges', 'storeKey', 'withRef']);

  var subscriptionKey = storeKey + 'Subscription';
  var version = hotReloadingVersion++;

  var contextTypes = (_contextTypes = {}, _contextTypes[storeKey] = storeShape, _contextTypes[subscriptionKey] = PropTypes.instanceOf(Subscription), _contextTypes);
  var childContextTypes = (_childContextTypes = {}, _childContextTypes[subscriptionKey] = PropTypes.instanceOf(Subscription), _childContextTypes);

  return function wrapWithConnect(WrappedComponent) {
    invariant(typeof WrappedComponent == 'function', 'You must pass a component to the function returned by ' + ('connect. Instead received ' + WrappedComponent));

    var wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';

    var displayName = getDisplayName(wrappedComponentName);

    var selectorFactoryOptions = _extends({}, connectOptions, {
      getDisplayName: getDisplayName,
      methodName: methodName,
      renderCountProp: renderCountProp,
      shouldHandleStateChanges: shouldHandleStateChanges,
      storeKey: storeKey,
      withRef: withRef,
      displayName: displayName,
      wrappedComponentName: wrappedComponentName,
      WrappedComponent: WrappedComponent
    });

    var Connect = function (_Component) {
      inherits(Connect, _Component);

      function Connect(props, context) {
        classCallCheck(this, Connect);

        var _this = possibleConstructorReturn(this, _Component.call(this, props, context));

        _this.version = version;
        _this.state = {};
        _this.renderCount = 0;
        _this.store = _this.props[storeKey] || _this.context[storeKey];
        _this.parentSub = props[subscriptionKey] || context[subscriptionKey];

        _this.setWrappedInstance = _this.setWrappedInstance.bind(_this);

        invariant(_this.store, 'Could not find "' + storeKey + '" in either the context or ' + ('props of "' + displayName + '". ') + 'Either wrap the root component in a <Provider>, ' + ('or explicitly pass "' + storeKey + '" as a prop to "' + displayName + '".'));

        // make sure `getState` is properly bound in order to avoid breaking
        // custom store implementations that rely on the store's context
        _this.getState = _this.store.getState.bind(_this.store);

        _this.initSelector();
        _this.initSubscription();
        return _this;
      }

      Connect.prototype.getChildContext = function getChildContext() {
        var _ref2;

        return _ref2 = {}, _ref2[subscriptionKey] = this.subscription || this.parentSub, _ref2;
      };

      Connect.prototype.componentDidMount = function componentDidMount() {
        if (!shouldHandleStateChanges) return;

        // componentWillMount fires during server side rendering, but componentDidMount and
        // componentWillUnmount do not. Because of this, trySubscribe happens during ...didMount.
        // Otherwise, unsubscription would never take place during SSR, causing a memory leak.
        // To handle the case where a child component may have triggered a state change by
        // dispatching an action in its componentWillMount, we have to re-run the select and maybe
        // re-render.
        this.subscription.trySubscribe();
        this.selector.run(this.props);
        if (this.selector.shouldComponentUpdate) this.forceUpdate();
      };

      Connect.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        this.selector.run(nextProps);
      };

      Connect.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
        return this.selector.shouldComponentUpdate;
      };

      Connect.prototype.componentWillUnmount = function componentWillUnmount() {
        if (this.subscription) this.subscription.tryUnsubscribe();
        // these are just to guard against extra memory leakage if a parent element doesn't
        // dereference this instance properly, such as an async callback that never finishes
        this.subscription = null;
        this.store = null;
        this.parentSub = null;
        this.selector.run = function () {};
      };

      Connect.prototype.getWrappedInstance = function getWrappedInstance() {
        invariant(withRef, 'To access the wrapped instance, you need to specify ' + ('{ withRef: true } in the options argument of the ' + methodName + '() call.'));
        return this.wrappedInstance;
      };

      Connect.prototype.setWrappedInstance = function setWrappedInstance(ref) {
        this.wrappedInstance = ref;
      };

      Connect.prototype.initSelector = function initSelector() {
        var dispatch = this.store.dispatch;
        var getState = this.getState;

        var sourceSelector = selectorFactory(dispatch, selectorFactoryOptions);

        // wrap the selector in an object that tracks its results between runs
        var selector = this.selector = {
          shouldComponentUpdate: true,
          props: sourceSelector(getState(), this.props),
          run: function runComponentSelector(props) {
            try {
              var nextProps = sourceSelector(getState(), props);
              if (selector.error || nextProps !== selector.props) {
                selector.shouldComponentUpdate = true;
                selector.props = nextProps;
                selector.error = null;
              }
            } catch (error) {
              selector.shouldComponentUpdate = true;
              selector.error = error;
            }
          }
        };
      };

      Connect.prototype.initSubscription = function initSubscription() {
        var _this2 = this;

        if (shouldHandleStateChanges) {
          (function () {
            var subscription = _this2.subscription = new Subscription(_this2.store, _this2.parentSub);
            var dummyState = {};

            subscription.onStateChange = function onStateChange() {
              this.selector.run(this.props);

              if (!this.selector.shouldComponentUpdate) {
                subscription.notifyNestedSubs();
              } else {
                this.componentDidUpdate = function componentDidUpdate() {
                  this.componentDidUpdate = undefined;
                  subscription.notifyNestedSubs();
                };

                this.setState(dummyState);
              }
            }.bind(_this2);
          })();
        }
      };

      Connect.prototype.isSubscribed = function isSubscribed() {
        return Boolean(this.subscription) && this.subscription.isSubscribed();
      };

      Connect.prototype.addExtraProps = function addExtraProps(props) {
        if (!withRef && !renderCountProp) return props;
        // make a shallow copy so that fields added don't leak to the original selector.
        // this is especially important for 'ref' since that's a reference back to the component
        // instance. a singleton memoized selector would then be holding a reference to the
        // instance, preventing the instance from being garbage collected, and that would be bad
        var withExtras = _extends({}, props);
        if (withRef) withExtras.ref = this.setWrappedInstance;
        if (renderCountProp) withExtras[renderCountProp] = this.renderCount++;
        return withExtras;
      };

      Connect.prototype.render = function render() {
        var selector = this.selector;
        selector.shouldComponentUpdate = false;

        if (selector.error) {
          throw selector.error;
        } else {
          return preact.h(WrappedComponent, this.addExtraProps(selector.props));
        }
      };

      return Connect;
    }(preact.Component);

    Connect.WrappedComponent = WrappedComponent;
    Connect.displayName = displayName;
    Connect.childContextTypes = childContextTypes;
    Connect.contextTypes = contextTypes;


    {
      Connect.prototype.componentWillUpdate = function componentWillUpdate() {
        // We are hot reloading!
        if (this.version !== version) {
          this.version = version;
          this.initSelector();

          if (this.subscription) this.subscription.tryUnsubscribe();
          this.initSubscription();
          if (shouldHandleStateChanges) this.subscription.trySubscribe();
        }
      };
    }

    return index(Connect, WrappedComponent);
  };
}

var hasOwn = Object.prototype.hasOwnProperty;

function shallowEqual(a, b) {
  if (a === b) return true;

  var countA = 0;
  var countB = 0;

  for (var key in a) {
    if (hasOwn.call(a, key) && a[key] !== b[key]) return false;
    countA++;
  }

  for (var _key in b) {
    if (hasOwn.call(b, _key)) countB++;
  }

  return countA === countB;
}

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetPrototype = Object.getPrototypeOf;

/**
 * Gets the `[[Prototype]]` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {null|Object} Returns the `[[Prototype]]`.
 */
function getPrototype(value) {
  return nativeGetPrototype(Object(value));
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object';
}

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = Function.prototype.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object,
 *  else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) || objectToString.call(value) != objectTag || isHostObject(value)) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
}

function verifyPlainObject(value, displayName, methodName) {
  if (!isPlainObject(value)) {
    warning(methodName + '() in ' + displayName + ' must return a plain object. Instead received ' + value + '.');
  }
}

function wrapMapToPropsConstant(getConstant) {
  return function initConstantSelector(dispatch, options) {
    var constant = getConstant(dispatch, options);

    function constantSelector() {
      return constant;
    }
    constantSelector.dependsOnOwnProps = false;
    return constantSelector;
  };
}

// dependsOnOwnProps is used by createMapToPropsProxy to determine whether to pass props as args
// to the mapToProps function being wrapped. It is also used by makePurePropsSelector to determine
// whether mapToProps needs to be invoked when props have changed.
// 
// A length of one signals that mapToProps does not depend on props from the parent component.
// A length of zero is assumed to mean mapToProps is getting args via arguments or ...args and
// therefore not reporting its length accurately..
function getDependsOnOwnProps(mapToProps) {
  return mapToProps.dependsOnOwnProps !== null && mapToProps.dependsOnOwnProps !== undefined ? Boolean(mapToProps.dependsOnOwnProps) : mapToProps.length !== 1;
}

// Used by whenMapStateToPropsIsFunction and whenMapDispatchToPropsIsFunction,
// this function wraps mapToProps in a proxy function which does several things:
// 
//  * Detects whether the mapToProps function being called depends on props, which
//    is used by selectorFactory to decide if it should reinvoke on props changes.
//    
//  * On first call, handles mapToProps if returns another function, and treats that
//    new function as the true mapToProps for subsequent calls.
//    
//  * On first call, verifies the first result is a plain object, in order to warn
//    the developer that their mapToProps function is not returning a valid result.
//    
function wrapMapToPropsFunc(mapToProps, methodName) {
  return function initProxySelector(dispatch, _ref) {
    var displayName = _ref.displayName;

    var proxy = function mapToPropsProxy(stateOrDispatch, ownProps) {
      return proxy.dependsOnOwnProps ? proxy.mapToProps(stateOrDispatch, ownProps) : proxy.mapToProps(stateOrDispatch);
    };

    proxy.dependsOnOwnProps = getDependsOnOwnProps(mapToProps);

    proxy.mapToProps = function detectFactoryAndVerify(stateOrDispatch, ownProps) {
      proxy.mapToProps = mapToProps;
      var props = proxy(stateOrDispatch, ownProps);

      if (typeof props === 'function') {
        proxy.mapToProps = props;
        proxy.dependsOnOwnProps = getDependsOnOwnProps(props);
        props = proxy(stateOrDispatch, ownProps);
      }

      verifyPlainObject(props, displayName, methodName);

      return props;
    };

    return proxy;
  };
}

function whenMapDispatchToPropsIsFunction(mapDispatchToProps) {
  return typeof mapDispatchToProps === 'function' ? wrapMapToPropsFunc(mapDispatchToProps, 'mapDispatchToProps') : undefined;
}

function whenMapDispatchToPropsIsMissing(mapDispatchToProps) {
  return !mapDispatchToProps ? wrapMapToPropsConstant(function (dispatch) {
    return { dispatch: dispatch };
  }) : undefined;
}

function whenMapDispatchToPropsIsObject(mapDispatchToProps) {
  return mapDispatchToProps && (typeof mapDispatchToProps === 'undefined' ? 'undefined' : _typeof(mapDispatchToProps)) === 'object' ? wrapMapToPropsConstant(function (dispatch) {
    return redux.bindActionCreators(mapDispatchToProps, dispatch);
  }) : undefined;
}

var defaultMapDispatchToPropsFactories = [whenMapDispatchToPropsIsFunction, whenMapDispatchToPropsIsMissing, whenMapDispatchToPropsIsObject];

function whenMapStateToPropsIsFunction(mapStateToProps) {
  return typeof mapStateToProps === 'function' ? wrapMapToPropsFunc(mapStateToProps, 'mapStateToProps') : undefined;
}

function whenMapStateToPropsIsMissing(mapStateToProps) {
  return !mapStateToProps ? wrapMapToPropsConstant(function () {
    return {};
  }) : undefined;
}

var defaultMapStateToPropsFactories = [whenMapStateToPropsIsFunction, whenMapStateToPropsIsMissing];

function defaultMergeProps(stateProps, dispatchProps, ownProps) {
  return _extends({}, ownProps, stateProps, dispatchProps);
}

function wrapMergePropsFunc(mergeProps) {
  return function initMergePropsProxy(dispatch, _ref) {
    var displayName = _ref.displayName;
    var pure = _ref.pure;
    var areMergedPropsEqual = _ref.areMergedPropsEqual;

    var hasRunOnce = false;
    var mergedProps = void 0;

    return function mergePropsProxy(stateProps, dispatchProps, ownProps) {
      var nextMergedProps = mergeProps(stateProps, dispatchProps, ownProps);

      if (hasRunOnce) {
        if (!pure || !areMergedPropsEqual(nextMergedProps, mergedProps)) mergedProps = nextMergedProps;
      } else {
        hasRunOnce = true;
        mergedProps = nextMergedProps;

        verifyPlainObject(mergedProps, displayName, 'mergeProps');
      }

      return mergedProps;
    };
  };
}

function whenMergePropsIsFunction(mergeProps) {
  return typeof mergeProps === 'function' ? wrapMergePropsFunc(mergeProps) : undefined;
}

function whenMergePropsIsOmitted(mergeProps) {
  return !mergeProps ? function () {
    return defaultMergeProps;
  } : undefined;
}

var defaultMergePropsFactories = [whenMergePropsIsFunction, whenMergePropsIsOmitted];

function verify(selector, methodName, displayName) {
  if (!selector) {
    throw new Error('Unexpected value for ' + methodName + ' in ' + displayName + '.');
  } else if (methodName === 'mapStateToProps' || methodName === 'mapDispatchToProps') {
    if (!selector.hasOwnProperty('dependsOnOwnProps')) {
      warning('The selector for ' + methodName + ' of ' + displayName + ' did not specify a value for dependsOnOwnProps.');
    }
  }
}

function verifySubselectors(mapStateToProps, mapDispatchToProps, mergeProps, displayName) {
  verify(mapStateToProps, 'mapStateToProps', displayName);
  verify(mapDispatchToProps, 'mapDispatchToProps', displayName);
  verify(mergeProps, 'mergeProps', displayName);
}

function impureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch) {
  return function impureFinalPropsSelector(state, ownProps) {
    return mergeProps(mapStateToProps(state, ownProps), mapDispatchToProps(dispatch, ownProps), ownProps);
  };
}

function pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, _ref) {
  var areStatesEqual = _ref.areStatesEqual;
  var areOwnPropsEqual = _ref.areOwnPropsEqual;
  var areStatePropsEqual = _ref.areStatePropsEqual;

  var hasRunAtLeastOnce = false;
  var state = void 0;
  var ownProps = void 0;
  var stateProps = void 0;
  var dispatchProps = void 0;
  var mergedProps = void 0;

  function handleFirstCall(firstState, firstOwnProps) {
    state = firstState;
    ownProps = firstOwnProps;
    stateProps = mapStateToProps(state, ownProps);
    dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    hasRunAtLeastOnce = true;
    return mergedProps;
  }

  function handleNewPropsAndNewState() {
    stateProps = mapStateToProps(state, ownProps);

    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);

    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleNewProps() {
    if (mapStateToProps.dependsOnOwnProps) stateProps = mapStateToProps(state, ownProps);

    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);

    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleNewState() {
    var nextStateProps = mapStateToProps(state, ownProps);
    var statePropsChanged = !areStatePropsEqual(nextStateProps, stateProps);
    stateProps = nextStateProps;

    if (statePropsChanged) mergedProps = mergeProps(stateProps, dispatchProps, ownProps);

    return mergedProps;
  }

  function handleSubsequentCalls(nextState, nextOwnProps) {
    var propsChanged = !areOwnPropsEqual(nextOwnProps, ownProps);
    var stateChanged = !areStatesEqual(nextState, state);
    state = nextState;
    ownProps = nextOwnProps;

    if (propsChanged && stateChanged) return handleNewPropsAndNewState();
    if (propsChanged) return handleNewProps();
    if (stateChanged) return handleNewState();
    return mergedProps;
  }

  return function pureFinalPropsSelector(nextState, nextOwnProps) {
    return hasRunAtLeastOnce ? handleSubsequentCalls(nextState, nextOwnProps) : handleFirstCall(nextState, nextOwnProps);
  };
}

// TODO: Add more comments

// If pure is true, the selector returned by selectorFactory will memoize its results,
// allowing connectAdvanced's shouldComponentUpdate to return false if final
// props have not changed. If false, the selector will always return a new
// object and shouldComponentUpdate will always return true.

function finalPropsSelectorFactory(dispatch, _ref2) {
  var initMapStateToProps = _ref2.initMapStateToProps;
  var initMapDispatchToProps = _ref2.initMapDispatchToProps;
  var initMergeProps = _ref2.initMergeProps;
  var options = objectWithoutProperties(_ref2, ['initMapStateToProps', 'initMapDispatchToProps', 'initMergeProps']);

  var mapStateToProps = initMapStateToProps(dispatch, options);
  var mapDispatchToProps = initMapDispatchToProps(dispatch, options);
  var mergeProps = initMergeProps(dispatch, options);

  {
    verifySubselectors(mapStateToProps, mapDispatchToProps, mergeProps, options.displayName);
  }

  var selectorFactory = options.pure ? pureFinalPropsSelectorFactory : impureFinalPropsSelectorFactory;

  return selectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, options);
}

/*
  connect is a facade over connectAdvanced. It turns its args into a compatible
  selectorFactory, which has the signature:

    (dispatch, options) => (nextState, nextOwnProps) => nextFinalProps
  
  connect passes its args to connectAdvanced as options, which will in turn pass them to
  selectorFactory each time a Connect component instance is instantiated or hot reloaded.

  selectorFactory returns a final props selector from its mapStateToProps,
  mapStateToPropsFactories, mapDispatchToProps, mapDispatchToPropsFactories, mergeProps,
  mergePropsFactories, and pure args.

  The resulting final props selector is called by the Connect component instance whenever
  it receives new props or store state.
 */

function match(arg, factories, name) {
  for (var i = factories.length - 1; i >= 0; i--) {
    var result = factories[i](arg);
    if (result) return result;
  }

  return function (dispatch, options) {
    throw new Error('Invalid value of type ' + (typeof arg === 'undefined' ? 'undefined' : _typeof(arg)) + ' for ' + name + ' argument when connecting component ' + options.wrappedComponentName + '.');
  };
}

function strictEqual(a, b) {
  return a === b;
}

// createConnect with default args builds the 'official' connect behavior. Calling it with
// different options opens up some testing and extensibility scenarios
function createConnect() {
  var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  var _ref$connectHOC = _ref.connectHOC;
  var connectHOC = _ref$connectHOC === undefined ? connectAdvanced : _ref$connectHOC;
  var _ref$mapStateToPropsF = _ref.mapStateToPropsFactories;
  var mapStateToPropsFactories = _ref$mapStateToPropsF === undefined ? defaultMapStateToPropsFactories : _ref$mapStateToPropsF;
  var _ref$mapDispatchToPro = _ref.mapDispatchToPropsFactories;
  var mapDispatchToPropsFactories = _ref$mapDispatchToPro === undefined ? defaultMapDispatchToPropsFactories : _ref$mapDispatchToPro;
  var _ref$mergePropsFactor = _ref.mergePropsFactories;
  var mergePropsFactories = _ref$mergePropsFactor === undefined ? defaultMergePropsFactories : _ref$mergePropsFactor;
  var _ref$selectorFactory = _ref.selectorFactory;
  var selectorFactory = _ref$selectorFactory === undefined ? finalPropsSelectorFactory : _ref$selectorFactory;

  return function connect(mapStateToProps, mapDispatchToProps, mergeProps) {
    var _ref2 = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];

    var _ref2$pure = _ref2.pure;
    var pure = _ref2$pure === undefined ? true : _ref2$pure;
    var _ref2$areStatesEqual = _ref2.areStatesEqual;
    var areStatesEqual = _ref2$areStatesEqual === undefined ? strictEqual : _ref2$areStatesEqual;
    var _ref2$areOwnPropsEqua = _ref2.areOwnPropsEqual;
    var areOwnPropsEqual = _ref2$areOwnPropsEqua === undefined ? shallowEqual : _ref2$areOwnPropsEqua;
    var _ref2$areStatePropsEq = _ref2.areStatePropsEqual;
    var areStatePropsEqual = _ref2$areStatePropsEq === undefined ? shallowEqual : _ref2$areStatePropsEq;
    var _ref2$areMergedPropsE = _ref2.areMergedPropsEqual;
    var areMergedPropsEqual = _ref2$areMergedPropsE === undefined ? shallowEqual : _ref2$areMergedPropsE;
    var extraOptions = objectWithoutProperties(_ref2, ['pure', 'areStatesEqual', 'areOwnPropsEqual', 'areStatePropsEqual', 'areMergedPropsEqual']);

    var initMapStateToProps = match(mapStateToProps, mapStateToPropsFactories, 'mapStateToProps');
    var initMapDispatchToProps = match(mapDispatchToProps, mapDispatchToPropsFactories, 'mapDispatchToProps');
    var initMergeProps = match(mergeProps, mergePropsFactories, 'mergeProps');

    return connectHOC(selectorFactory, _extends({
      // used in error messages
      methodName: 'connect',

      // used to compute Connect's displayName from the wrapped component's displayName.
      getDisplayName: function getDisplayName(name) {
        return 'Connect(' + name + ')';
      },

      // if mapStateToProps is falsy, the Connect component doesn't subscribe to store state changes
      shouldHandleStateChanges: Boolean(mapStateToProps),

      // passed through to selectorFactory
      initMapStateToProps: initMapStateToProps,
      initMapDispatchToProps: initMapDispatchToProps,
      initMergeProps: initMergeProps,
      pure: pure,
      areStatesEqual: areStatesEqual,
      areOwnPropsEqual: areOwnPropsEqual,
      areStatePropsEqual: areStatePropsEqual,
      areMergedPropsEqual: areMergedPropsEqual

    }, extraOptions));
  };
}

var connect$1 = createConnect();



var lib$1 = {
	Provider: Provider,
	connect: connect$1,
	connectAdvanced: connectAdvanced
};

return lib$1;

})));
//# sourceMappingURL=preact-redux.js.map


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _preact = __webpack_require__(0);

var _playkitJs = __webpack_require__(49);

var _playkitJs2 = _interopRequireDefault(_playkitJs);

var _logger = __webpack_require__(50);

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BaseComponent = function (_Component) {
  _inherits(BaseComponent, _Component);

  function BaseComponent() {
    var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { config: {} };

    _classCallCheck(this, BaseComponent);

    var _this = _possibleConstructorReturn(this, (BaseComponent.__proto__ || Object.getPrototypeOf(BaseComponent)).call(this));

    _this.name = obj.name;
    _this.player = obj.player;
    _this.config = obj.config;
    _this.logger = _logger2.default.getLogger('UI ' + _this.name);
    _this.logger.debug('Initialized');
    return _this;
  }

  _createClass(BaseComponent, [{
    key: 'getConfig',
    value: function getConfig(attr) {
      if (attr) {
        return this.config[attr];
      }
      return this.config;
    }
  }, {
    key: 'defaultConfig',
    get: function get() {
      return {};
    }
  }]);

  return BaseComponent;
}(_preact.Component);

exports.default = BaseComponent;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.bindActions = bindActions;

var _redux = __webpack_require__(6);

function bindActions(actions) {
	return function (dispatch) {
		return _extends({}, (0, _redux.bindActionCreators)(actions, dispatch));
	};
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _preact = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Icon = function (_Component) {
  _inherits(Icon, _Component);

  function Icon() {
    _classCallCheck(this, Icon);

    return _possibleConstructorReturn(this, (Icon.__proto__ || Object.getPrototypeOf(Icon)).apply(this, arguments));
  }

  _createClass(Icon, [{
    key: 'render',
    value: function render(props) {
      switch (props.type) {
        case 'maximize':
          return (0, _preact.h)(
            'svg',
            { className: 'icon icon-maximize', viewBox: '0 0 1024 1024' },
            (0, _preact.h)('path', { d: 'M800 269.255v114.745c0 17.673 14.327 32 32 32s32-14.327 32-32v-192c0-17.673-14.327-32-32-32h-192c-17.673 0-32 14.327-32 32s14.327 32 32 32h114.745l-137.373 137.373c-12.497 12.497-12.497 32.758 0 45.255s32.758 12.497 45.255 0l137.373-137.373z' }),
            (0, _preact.h)('path', { d: 'M224 754.745v-114.745c0-17.673-14.327-32-32-32s-32 14.327-32 32v192c0 17.673 14.327 32 32 32h192c17.673 0 32-14.327 32-32s-14.327-32-32-32h-114.745l137.373-137.373c12.497-12.497 12.497-32.758 0-45.255s-32.758-12.497-45.255 0l-137.373 137.373z' })
          );
        case 'minimize':
          return (0, _preact.h)(
            'svg',
            { className: 'icon icon-minimize', viewBox: '0 0 1024 1024' },
            (0, _preact.h)('path', { d: 'M672 306.745v-114.745c0-17.673-14.327-32-32-32s-32 14.327-32 32v192c0 17.673 14.327 32 32 32h192c17.673 0 32-14.327 32-32s-14.327-32-32-32h-114.745l137.373-137.373c12.497-12.497 12.497-32.758 0-45.255s-32.758-12.497-45.255 0l-137.373 137.373z' }),
            (0, _preact.h)('path', { d: 'M352 717.255v114.745c0 17.673 14.327 32 32 32s32-14.327 32-32v-192c0-17.673-14.327-32-32-32h-192c-17.673 0-32 14.327-32 32s14.327 32 32 32h114.745l-137.373 137.373c-12.497 12.497-12.497 32.758 0 45.255s32.758 12.497 45.255 0l137.373-137.373z' })
          );

        case 'play':
          return (0, _preact.h)(
            'svg',
            { className: 'icon icon-play', viewBox: '0 0 1024 1024' },
            (0, _preact.h)('path', { d: 'M796.806 461.202c44.919 28.075 44.739 73.706 0 101.668l-459.472 287.171c-44.919 28.075-81.334 7.915-81.334-45.305v-585.4c0-53.096 36.595-73.266 81.334-45.305l459.472 287.171z' })
          );

        case 'pause':
          return (0, _preact.h)(
            'svg',
            { className: 'icon icon-pause', viewBox: '0 0 1024 1024' },
            (0, _preact.h)('path', { d: 'M256 287.843c0-35.259 28.407-63.843 64-63.843 35.346 0 64 28.564 64 63.843v448.314c0 35.259-28.407 63.843-64 63.843-35.346 0-64-28.564-64-63.843v-448.314zM640 287.843c0-35.259 28.407-63.843 64-63.843 35.346 0 64 28.564 64 63.843v448.314c0 35.259-28.407 63.843-64 63.843-35.346 0-64-28.564-64-63.843v-448.314z' })
          );

        case 'volume-base':
          return (0, _preact.h)(
            'svg',
            { className: 'icon volume-base', viewBox: '0 0 1024 1024' },
            (0, _preact.h)('path', { d: 'M224 352l234.504-156.336c29.545-19.697 53.496-7.194 53.496 28.053v576.566c0 35.19-24.059 47.677-53.496 28.053l-234.504-156.336h-127.906c-17.725 0-32.094-14.581-32.094-31.853v-256.295c0-17.592 14.012-31.853 32.094-31.853h127.906zM288 637.748l160 106.667v-464.83l-160 106.667v251.496zM128 416v192h96v-192h-96z' })
          );

        case 'volume-waves':
          return (0, _preact.h)(
            'svg',
            { className: 'icon volume-waves', viewBox: '0 0 1024 1024' },
            (0, _preact.h)('path', { d: 'M802.017 837.177c82.359-86.627 129.183-201.774 129.183-324.26 0-123.976-47.976-240.409-132.127-327.329-12.293-12.697-32.552-13.025-45.249-0.732s-13.025 32.552-0.732 45.249c72.692 75.084 114.109 175.597 114.109 282.812 0 105.928-40.422 205.331-111.566 280.162-12.177 12.808-11.666 33.063 1.143 45.24s33.063 11.666 45.24-1.143z' }),
            (0, _preact.h)('path', { d: 'M667.436 743.221c67.761-60.884 107.273-147.888 107.273-241.233 0-87.318-34.552-169.203-94.836-229.446-12.501-12.493-32.762-12.486-45.255 0.015s-12.486 32.762 0.015 45.255c48.375 48.342 76.075 113.989 76.075 184.176 0 75.021-31.679 144.776-86.048 193.627-13.146 11.812-14.227 32.044-2.416 45.19s32.044 14.227 45.19 2.416z' })
          );

        case 'volume-mute':
          return (0, _preact.h)(
            'svg',
            { className: 'icon volume-mute', viewBox: '0 0 1024 1024' },
            (0, _preact.h)('path', { d: 'M768 466.745l-67.986-67.986c-12.213-12.213-32.654-12.393-45.151 0.104-12.584 12.584-12.543 32.711-0.104 45.151l67.986 67.986-67.986 67.986c-12.213 12.213-12.393 32.654 0.104 45.151 12.584 12.584 32.711 12.543 45.151 0.104l67.986-67.986 67.986 67.986c12.213 12.213 32.654 12.393 45.151-0.104 12.584-12.584 12.543-32.711 0.104-45.151l-67.986-67.986 67.986-67.986c12.213-12.213 12.393-32.654-0.104-45.151-12.584-12.584-32.711-12.543-45.151-0.104l-67.986 67.986z' })
          );

        case 'close':
          return (0, _preact.h)(
            'svg',
            { className: 'icon icon-close', viewBox: '0 0 1024 1024' },
            (0, _preact.h)('path', { d: 'M573.162 512l214.269-214.269c16.772-16.772 16.688-44.071-0.202-60.96-17.007-17.007-44.182-16.98-60.96-0.202l-214.269 214.269-214.269-214.269c-16.772-16.772-44.071-16.688-60.96 0.202-17.007 17.007-16.98 44.182-0.202 60.96l214.269 214.269-214.269 214.269c-16.772 16.772-16.688 44.071 0.202 60.96 17.007 17.007 44.182 16.98 60.96 0.202l214.269-214.269 214.269 214.269c16.772 16.772 44.071 16.688 60.96-0.202 17.007-17.007 16.98-44.182 0.202-60.96l-214.269-214.269z' })
          );

        case 'share':
          return (0, _preact.h)(
            'svg',
            { className: 'icon icon-share', viewBox: '0 0 1024 1024' },
            (0, _preact.h)('path', { d: 'M318.641 446.219l236.155-142.257c-0.086-1.754-0.129-3.52-0.129-5.295 0-58.91 47.756-106.667 106.667-106.667s106.667 47.756 106.667 106.667c0 58.91-47.756 106.667-106.667 106.667-33.894 0-64.095-15.808-83.633-40.454l-236.467 142.445c-0.132-3.064-0.394-6.095-0.779-9.087l7.271-12.835-0.117 53.333-7.183-12.743c0.399-3.046 0.67-6.131 0.806-9.252l236.467 142.383c19.538-24.648 49.741-40.457 83.636-40.457 58.91 0 106.667 47.756 106.667 106.667s-47.756 106.667-106.667 106.667c-58.91 0-106.667-47.756-106.667-106.667 0-1.775 0.043-3.539 0.129-5.293l-236.19-142.216c-19.528 24.867-49.868 40.841-83.939 40.841-58.91 0-106.667-47.756-106.667-106.667s47.756-106.667 106.667-106.667c34.091 0 64.447 15.993 83.974 40.886zM234.667 554.667c23.564 0 42.667-19.103 42.667-42.667s-19.103-42.667-42.667-42.667c-23.564 0-42.667 19.103-42.667 42.667s19.103 42.667 42.667 42.667zM661.333 341.333c23.564 0 42.667-19.103 42.667-42.667s-19.103-42.667-42.667-42.667c-23.564 0-42.667 19.103-42.667 42.667s19.103 42.667 42.667 42.667zM661.333 768c23.564 0 42.667-19.103 42.667-42.667s-19.103-42.667-42.667-42.667c-23.564 0-42.667 19.103-42.667 42.667s19.103 42.667 42.667 42.667z' })
          );

        case 'settings':
          return (0, _preact.h)(
            'svg',
            { className: 'icon icon-share', viewBox: '0 0 1024 1024' },
            (0, _preact.h)('path', { d: 'M829.945 549.126c2.784-24.116 2.784-48.445 0.269-70.702-1.182-6.772-7.090-11.696-13.674-11.641-33.039 0.582-62.975-19.389-75.126-50.118s-3.971-65.772 20.504-87.92c4.293-3.894 4.818-10.455 1.003-15.228-14.831-18.927-31.796-36.079-50.521-51.087-4.614-3.687-11.301-3.148-16.127 2.145-15.732 16.059-37.322 25.023-59.382 24.831-9.828 0.044-19.574-1.802-29.307-5.686-30.997-13.082-50.429-44.232-48.535-78.046 0.365-5.803-3.87-10.878-9.583-11.551-23.919-2.769-48.074-2.831-71.958-0.192-5.836 0.654-10.191 5.68-10.009 11.47 1.121 33.146-18.329 63.547-49.925 76.834-8.987 3.423-18.538 5.129-27.498 5.028-22.472 0.224-44.067-8.707-60.526-25.487-2.197-2.386-5.29-3.748-8.24-3.758-2.663 0.016-5.248 0.905-7.105 2.334-19.136 15.052-36.496 32.233-51.558 50.977-3.729 4.732-3.187 11.536 1.058 15.449 24.89 22.573 32.935 58.34 19.426 90.928-14.22 29.886-44.875 48.43-77.941 47.151-5.576-0.215-10.363 3.934-11.003 10.013-2.916 24.025-2.916 48.315-0.231 70.764 1.178 6.84 7.155 11.808 14.518 11.713l2.428 0.007c31.565 0.659 59.701 20.063 71.6 49.499 12.239 30.769 4.278 65.898-20.252 88.586-4.217 3.829-4.736 10.275-0.976 14.991 14.777 18.932 31.665 36.115 50.227 51.128 4.694 3.762 11.505 3.223 16.349-2.081 15.725-16.101 37.337-25.092 59.378-24.895 9.894-0.057 19.705 1.819 29.5 5.78 30.753 13.169 50.063 44.084 48.378 77.965-0.373 5.795 3.857 10.867 9.602 11.539 23.908 2.78 48.053 2.842 71.923 0.192 5.851-0.659 10.215-5.702 10.027-11.562-1.088-33.118 18.371-63.473 49.584-76.583 9.014-3.552 18.622-5.354 27.841-5.307 22.555-0.225 44.218 8.804 60.434 25.505 2.224 2.395 5.343 3.76 8.371 3.769 2.474-0.012 4.874-0.847 6.896-2.43 19.227-14.971 36.653-32.121 51.726-50.848 3.737-4.743 3.194-11.563-0.941-15.379-24.391-21.907-32.789-56.564-21.134-87.207s40.964-50.957 73.904-51.116h5.704c5.586-0.028 10.269-4.227 10.905-9.777zM893.526 556.438c-4.321 37.715-36.171 66.271-74.323 66.464h-5.711c-6.33 0.031-11.99 3.953-14.24 9.87s-0.629 12.609 4.385 17.116c29.020 26.748 32.567 71.325 7.936 102.582-18.378 22.837-39.342 43.468-62.397 61.42-13.128 10.284-29.303 15.909-46.22 15.991-21.004-0.056-41.043-8.825-54.839-23.692-3.514-3.616-8.356-5.634-13.867-5.583-1.555-0.007-3.097 0.282-3.877 0.581-6.088 2.559-9.967 8.609-9.749 15.235 1.257 39.227-27.828 72.841-66.88 77.241-28.725 3.189-57.719 3.114-86.45-0.227-39.585-4.631-68.615-39.444-66.083-78.749 0.331-6.679-3.529-12.859-9.057-15.234-1.449-0.585-2.998-0.881-5.025-0.873-5.074-0.045-9.947 1.982-12.693 4.763-26.775 29.494-71.875 33.067-103.071 8.066-22.458-18.164-42.771-38.831-60.335-61.337-24.602-30.847-21.012-75.5 7.982-101.818 4.881-4.515 6.479-11.568 4.088-17.58-2.239-5.538-7.562-9.209-12.866-9.327-39.748 0.506-72.828-26.991-79.581-66.425-3.538-29.147-3.538-58.616-0.060-87.234 4.085-39.084 37.791-68.296 77.064-66.784 7.502 0.29 14.456-3.916 17.001-9.164 2.519-6.098 0.94-13.122-4.133-17.724-29.022-26.738-32.57-71.311-7.956-102.538 18.292-22.765 39.115-43.375 62.322-61.626 13.199-10.169 29.368-15.731 46.323-15.833 21.063 0.065 41.146 8.908 54.704 23.656 3.559 3.623 8.44 5.642 14.175 5.592 1.605 0.017 3.199-0.268 3.668-0.426 6.11-2.574 9.998-8.651 9.771-15.356-1.228-39.209 27.864-72.786 66.897-77.161 28.715-3.173 57.697-3.098 86.456 0.231 39.539 4.653 68.54 39.409 66.051 78.92-0.369 6.596 3.446 12.713 8.931 15.035 1.507 0.6 3.114 0.905 5.156 0.898 5.087 0.044 9.973-1.985 12.671-4.704 26.66-29.444 71.625-33.068 102.694-8.244 22.604 18.117 43.043 38.781 60.715 61.337 24.728 30.927 21.142 75.751-8.215 102.378-4.724 4.275-6.301 11.031-3.958 16.955s8.114 9.775 14.774 9.659c38.18-0.325 70.992 27.018 77.822 66.463 3.343 28.966 3.343 58.22 0 87.185zM511.951 597.037c47.144-0.118 85.24-38.367 85.169-85.511 0-34.617-20.872-65.819-52.867-79.034s-68.802-5.836-93.231 18.69c-24.429 24.527-31.66 61.363-18.317 93.305s44.628 52.688 79.245 52.55zM512.158 661.036c-60.477 0.242-115.178-36.032-138.507-91.881s-10.686-120.254 32.026-163.138c42.712-42.884 107.066-55.785 163.008-32.679s92.434 77.661 92.434 138.139c0.124 82.417-66.545 149.353-148.962 149.559z' })
          );

        case 'check':
          return (0, _preact.h)(
            'svg',
            { className: 'icon check-icon', viewBox: '0 0 1024 1024' },
            (0, _preact.h)('path', { d: 'M342.481 563.894c-12.577-12.416-32.838-12.285-45.254 0.292s-12.285 32.838 0.292 45.254l118.857 117.333c13.275 13.105 34.901 12.123 46.933-2.131l297.143-352c11.4-13.505 9.694-33.694-3.811-45.094s-33.694-9.694-45.094 3.811l-274.828 325.566-94.238-93.030z' })
          );
        case 'language':
          return (0, _preact.h)(
            'svg',
            { className: 'icon language-icon', viewBox: '0 0 1024 1024' },
            (0, _preact.h)('path', { d: 'M625.773 808.031c29.752-39.944 63.443-97.069 83.311-168.977 41.798-3.715 74.872-8.022 98.271-11.57-32.456 82.71-98.638 148.558-181.582 180.547zM216.562 627.283c23.516 3.506 56.799 7.797 98.279 11.528 19.868 72.017 53.601 129.224 83.378 169.219-83.002-32.014-149.226-97.945-181.657-180.747zM400.147 215.201c-29.835 40.32-64.161 98.037-84.572 169.695-42.123 3.731-75.423 8.072-98.938 11.629 32.698-83.353 99.656-149.61 183.51-181.323zM807.438 396.725c-23.641-3.523-57.158-7.847-98.947-11.587-20.402-71.766-54.778-129.567-84.639-169.937 83.912 31.73 150.912 98.070 183.585 181.523zM720.095 436.644c48.952 4.817 84.472 10.209 102.995 13.331 3.99 20.068 6.127 40.796 6.127 62.024 0 21.262-2.137 42.031-6.152 62.141-18.248 3.172-53.376 8.615-102.753 13.448 3.84-23.908 6.069-49.102 6.069-75.59 0-26.296-2.304-51.431-6.286-75.356zM537.043 597.206v-170.396c48.576 0.551 92.653 2.646 131.178 5.426 5.050 25.119 8.072 51.74 8.072 79.763 0 28.216-2.913 54.87-7.789 79.939-38.283 2.713-82.343 4.742-131.462 5.267zM486.957 195.859v180.856c-43.175 0.442-82.443 1.995-117.429 4.149 31.939-95.382 89.99-161.656 112.237-184.612 1.72-0.159 3.464-0.259 5.192-0.392zM542.286 196.26c22.297 22.906 80.456 89.080 112.345 184.771-35.261-2.229-74.646-3.848-117.587-4.307v-180.864c1.745 0.142 3.506 0.234 5.242 0.401zM347.706 512c0-28.074 3.047-54.762 8.156-79.955 38.191-2.696 82.134-4.708 131.094-5.234v170.387c-48.71-0.551-92.895-2.655-131.495-5.443-4.858-25.018-7.755-51.606-7.755-79.755zM194.783 512c0-21.262 2.137-42.031 6.144-62.125 18.282-3.181 53.501-8.64 103.012-13.482-4.007 24-6.319 49.219-6.319 75.606 0 26.396 2.221 51.506 6.027 75.339-48.826-4.808-84.246-10.184-102.737-13.306-3.99-20.068-6.127-40.804-6.127-62.033zM481.338 827.706c-22.389-22.314-81.016-87.469-112.662-184.779 35.437 2.262 75.047 3.898 118.28 4.366v180.839c-1.87-0.142-3.757-0.25-5.618-0.426zM542.653 827.706c-1.862 0.175-3.74 0.284-5.61 0.426v-180.839c43.509-0.442 83.044-2.012 118.222-4.199-31.672 97.244-90.265 162.349-112.612 184.612zM512 128c-211.734 0-384 172.257-384 384 0 211.734 172.266 384 384 384s384-172.266 384-384c0-211.743-172.266-384-384-384z' })
          );

        default:
          break;
      }
    }
  }]);

  return Icon;
}(_preact.Component);

exports.default = Icon;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

function n(n){return n&&"object"==typeof n&&"default"in n?n.default:n}function t(n){return null!==n&&void 0!==n}function r(n,t){var o=e({},n);for(var i in t)t.hasOwnProperty(i)&&(o[i]=n[i]&&t[i]&&"object"==typeof n[i]&&"object"==typeof t[i]?r(n[i],t[i]):n[i]||t[i]);return o}function e(n,t){for(var r in t)t.hasOwnProperty(r)&&(n[r]=t[r]);return n}function o(n){if(n=n||{},"string"==typeof n&&(n=n.split(",")),"join"in n){for(var t={},r=0;r<n.length;r++){var e=n[r].trim();e&&(t[e.split(".").pop()]=e)}return t}return n}function i(n,t){return v=t||h,n&&n.replace(/\{\{([\w.-]+)\}\}/g,u)}function u(n,t){for(var r=t.split("."),e=v,o=0;o<r.length;o++)if(null==(e=e[r[o]]))return"";return"string"==typeof e&&e.match(/\{\{/)&&(e=i(e,v)),e}function c(n,r,e,o,u,c){r&&(n=r+"."+n);var a=e&&f(e,n);return(u||0===u)&&a&&"object"==typeof a&&(a=a.splice?a[u]||a[0]:0===u&&t(a.none)?a.none:1===u&&t(a.one||a.singular)?a.one||a.singular:a.some||a.many||a.plural||a.other||a),a&&i(a,o)||c||null}function a(n,t,r){var i={};t=t||{},n=o(n);for(var u in n)if(n.hasOwnProperty(u)&&n[u]){var a=n[u];r||"string"!=typeof a?a.nodeName===g&&(a=e({fallback:a.children&&a.children[0]},a.attributes),i[u]=c(a.id,t.scope,t.dictionary,a.fields,a.plural,a.fallback)):i[u]=c(a,t.scope,t.dictionary)}return i}var l=__webpack_require__(0),f=n(__webpack_require__(45)),p=/[?&#]intl=show/,s=function(n){function t(){n.apply(this,arguments)}return n&&(t.__proto__=n),t.prototype=Object.create(n&&n.prototype),t.prototype.constructor=t,t.prototype.getChildContext=function(){var n=this.props,t=n.scope,o=n.definition,i=n.mark,u=e({},this.context.intl||{});return t&&(u.scope=t),o&&(u.dictionary=r(u.dictionary||{},o)),(i||"undefined"!=typeof location&&String(location).match(p))&&(u.mark=!0),{intl:u}},t.prototype.render=function(n){var t=n.children;return t&&t[0]||null},t}(l.Component),d=function(){for(var n=[],t=arguments.length;t--;)n[t]=arguments[t];if(n.length>1){return y(n[0],n[1])}var r=n[0];return function(n){return y(n,r)}},y=function(n,t){return function(r){return l.h(s,t||{},l.h(n,r))}},h={},v,g=function(n,t){var r=n.id,e=n.children,o=n.plural,i=n.fields,u=t.intl,a=e&&e[0],p=c(r,u&&u.scope,u&&u.dictionary,i,o,a);if(u&&u.mark){var s="dictionary"+(u&&u.scope?"."+u.scope:"")+"."+r;return l.h("mark",{style:"background: "+(p?f(u,s)?"rgba(119,231,117,.5)":"rgba(229,226,41,.5)":"rgba(228,147,51,.5)"),title:r},p)}return p},b=function(n,t){var r=n.children,e=t.intl,o=r&&r[0];return o&&l.cloneElement(o,a(o.attributes,e,!0))},m=function(n){return function(t){return function(r,e){var o="function"==typeof n?n(r):n,i=a(o,e.intl);return l.h(t,assign({},r,i))}}};d.intl=d,d.IntlProvider=s,d.Text=g,d.Localizer=b,d.withText=m,module.exports=d;
//# sourceMappingURL=preact-i18n.js.map

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__createStore__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__combineReducers__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bindActionCreators__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__applyMiddleware__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__compose__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_warning__ = __webpack_require__(8);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "createStore", function() { return __WEBPACK_IMPORTED_MODULE_0__createStore__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "combineReducers", function() { return __WEBPACK_IMPORTED_MODULE_1__combineReducers__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "bindActionCreators", function() { return __WEBPACK_IMPORTED_MODULE_2__bindActionCreators__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "applyMiddleware", function() { return __WEBPACK_IMPORTED_MODULE_3__applyMiddleware__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return __WEBPACK_IMPORTED_MODULE_4__compose__["a"]; });







/*
* This is a dummy function to check if the function name has been altered by minification.
* If the function has been minified and NODE_ENV !== 'production', warn the user.
*/
function isCrushed() {}

if (process.env.NODE_ENV !== 'production' && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
  __WEBPACK_IMPORTED_MODULE_5__utils_warning__["a" /* default */]('You are currently using minified code outside of NODE_ENV === \'production\'. ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) ' + 'to ensure you have the correct code for your production build.');
}


/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(12)))

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var types = exports.types = {
  ADD_PLAYER_CLASS: 'shell/ADD_PLAYER_CLASS',
  REMOVE_PLAYER_CLASS: 'shell/REMOVE_PLAYER_CLASS',
  UPDATE_IS_MOBILE: 'shell/UPDATE_IS_MOBILE'
};

var initialState = exports.initialState = {
  playerClasses: []
};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case types.ADD_PLAYER_CLASS:
      if (state.playerClasses.includes(action.className)) return state;
      return _extends({}, state, {
        playerClasses: [].concat(_toConsumableArray(state.playerClasses), [action.className])
      });

    case types.REMOVE_PLAYER_CLASS:
      return _extends({}, state, {
        playerClasses: state.playerClasses.filter(function (c) {
          return c !== action.className;
        })
      });

    case types.UPDATE_IS_MOBILE:
      return _extends({}, state, {
        isMobile: action.isMobile
      });

    default:
      return state;
  }
};

var actions = exports.actions = {
  addPlayerClass: function addPlayerClass(className) {
    return { type: types.ADD_PLAYER_CLASS, className: className };
  },
  removePlayerClass: function removePlayerClass(className) {
    return { type: types.REMOVE_PLAYER_CLASS, className: className };
  },
  updateIsMobile: function updateIsMobile(isMobile) {
    return { type: types.UPDATE_IS_MOBILE, isMobile: isMobile };
  }
};

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = warning;
/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */
  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
    /* eslint-disable no-empty */
  } catch (e) {}
  /* eslint-enable no-empty */
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var types = exports.types = {
  TOGGLE_PLAY: 'play-pause/TOGGLE_PLAY'
};

var initialState = exports.initialState = {
  isPlaying: false
};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case types.TOGGLE_PLAY:
      return _extends({}, state, {
        isPlaying: action.isPlaying
      });

    default:
      return state;
  }
};

var actions = exports.actions = {
  toggleIsPlaying: function toggleIsPlaying(isPlaying) {
    return { type: types.TOGGLE_PLAY, isPlaying: isPlaying };
  }
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var types = exports.types = {
  TOGGLE_SHARE_OVERLAY: 'share/TOGGLE_SHARE_OVERLAY'
};

var initialState = exports.initialState = {
  overlayOpen: false
};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case types.TOGGLE_SHARE_OVERLAY:
      return _extends({}, state, {
        overlayOpen: action.show
      });

    default:
      return state;
  }
};

var actions = exports.actions = {
  toggleShareOverlay: function toggleShareOverlay(show) {
    return { type: types.TOGGLE_SHARE_OVERLAY, show: show };
  }
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var types = exports.types = {
  TOGGLE_CVAA_OVERLAY: 'cvaa/TOGGLE_CVAA_OVERLAY',
  UPDATE_CAPTIONS_STYLE: 'cvaa/UPDATE_CAPTIONS_STYLE'
};

var initialState = exports.initialState = {
  overlayOpen: false,
  style: 'default'
};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case types.TOGGLE_CVAA_OVERLAY:
      return _extends({}, state, {
        overlayOpen: action.show
      });

    case types.UPDATE_CAPTIONS_STYLE:
      return _extends({}, state, {
        style: action.style
      });

    default:
      return state;
  }
};

var actions = exports.actions = {
  toggleCVAAOverlay: function toggleCVAAOverlay(show) {
    return { type: types.TOGGLE_CVAA_OVERLAY, show: show };
  },
  updateCaptionsStyle: function updateCaptionsStyle(style) {
    return { type: types.UPDATE_CAPTIONS_STYLE, style: style };
  }
};

/***/ }),
/* 12 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActionTypes; });
/* harmony export (immutable) */ __webpack_exports__["b"] = createStore;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_es_isPlainObject__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_symbol_observable__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_symbol_observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_symbol_observable__);



/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var ActionTypes = {
  INIT: '@@redux/INIT'

  /**
   * Creates a Redux store that holds the state tree.
   * The only way to change the data in the store is to call `dispatch()` on it.
   *
   * There should only be a single store in your app. To specify how different
   * parts of the state tree respond to actions, you may combine several reducers
   * into a single reducer function by using `combineReducers`.
   *
   * @param {Function} reducer A function that returns the next state tree, given
   * the current state tree and the action to handle.
   *
   * @param {any} [preloadedState] The initial state. You may optionally specify it
   * to hydrate the state from the server in universal apps, or to restore a
   * previously serialized user session.
   * If you use `combineReducers` to produce the root reducer function, this must be
   * an object with the same shape as `combineReducers` keys.
   *
   * @param {Function} [enhancer] The store enhancer. You may optionally specify it
   * to enhance the store with third-party capabilities such as middleware,
   * time travel, persistence, etc. The only store enhancer that ships with Redux
   * is `applyMiddleware()`.
   *
   * @returns {Store} A Redux store that lets you read the state, dispatch actions
   * and subscribe to changes.
   */
};function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('Expected the enhancer to be a function.');
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error('Expected the reducer to be a function.');
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }

  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */
  function getState() {
    return currentState;
  }

  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */
  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Expected listener to be a function.');
    }

    var isSubscribed = true;

    ensureCanMutateNextListeners();
    nextListeners.push(listener);

    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      isSubscribed = false;

      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
    };
  }

  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */
  function dispatch(action) {
    if (!__WEBPACK_IMPORTED_MODULE_0_lodash_es_isPlainObject__["a" /* default */](action)) {
      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
    }

    if (typeof action.type === 'undefined') {
      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
    }

    if (isDispatching) {
      throw new Error('Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;
    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }

    return action;
  }

  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */
  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error('Expected the nextReducer to be a function.');
    }

    currentReducer = nextReducer;
    dispatch({ type: ActionTypes.INIT });
  }

  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */
  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if (typeof observer !== 'object') {
          throw new TypeError('Expected the observer to be an object.');
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return { unsubscribe: unsubscribe };
      }
    }, _ref[__WEBPACK_IMPORTED_MODULE_1_symbol_observable___default.a] = function () {
      return this;
    }, _ref;
  }

  // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.
  dispatch({ type: ActionTypes.INIT });

  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[__WEBPACK_IMPORTED_MODULE_1_symbol_observable___default.a] = observable, _ref2;
}

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseGetTag_js__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getPrototype_js__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__isObjectLike_js__ = __webpack_require__(37);




/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!__WEBPACK_IMPORTED_MODULE_2__isObjectLike_js__["a" /* default */](value) || __WEBPACK_IMPORTED_MODULE_0__baseGetTag_js__["a" /* default */](value) != objectTag) {
    return false;
  }
  var proto = __WEBPACK_IMPORTED_MODULE_1__getPrototype_js__["a" /* default */](value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

/* harmony default export */ __webpack_exports__["a"] = (isPlainObject);


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__root_js__ = __webpack_require__(31);


/** Built-in value references. */
var Symbol = __WEBPACK_IMPORTED_MODULE_0__root_js__["a" /* default */].Symbol;

/* harmony default export */ __webpack_exports__["a"] = (Symbol);


/***/ }),
/* 16 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = compose;
/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */

function compose() {
  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(undefined, arguments));
    };
  });
}

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var types = exports.types = {
  UPDATE_PLAYER_STATE: 'engine/UPDATE_PLAYER_STATE',
  UPDATE_IS_PLAYING: 'engine/UPDATE_IS_PLAYING',
  UPDATE_CURRENT_TIME: 'engine/UPDATE_CURRENT_TIME',
  UPDATE_DURATION: 'engine/UPDATE_DURATION',
  UPDATE_VOLUME: 'engine/UPDATE_VOLUME',
  UPDATE_MUTED: 'engine/UPDATE_MUTED',
  UPDATE_METADATA_LOADING_STATUS: 'engine/UPDATE_METADATA_LOADING_STATUS',
  UPDATE_AUDIO_TRACKS: 'engine/UPDATE_AUDIO_TRACKS',
  UPDATE_VIDEO_TRACKS: 'engine/UPDATE_VIDEO_TRACKS',
  UPDATE_TEXT_TRACKS: 'engine/UPDATE_TEXT_TRACKS'
};

var initialState = exports.initialState = {
  isPlaying: false,
  metadataLoaded: false,
  playerState: {
    previousState: '',
    currentState: ''
  },
  currentTime: 0,
  duration: 0,
  volume: 1,
  muted: false,
  videoTracks: [],
  audioTracks: [],
  textTracks: []
};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case types.UPDATE_PLAYER_STATE:
      return _extends({}, state, {
        playerState: action.playerState
      });

    case types.UPDATE_IS_PLAYING:
      return _extends({}, state, {
        isPlaying: action.isPlaying
      });

    case types.UPDATE_CURRENT_TIME:
      return _extends({}, state, {
        currentTime: action.currentTime
      });

    case types.UPDATE_DURATION:
      return _extends({}, state, {
        duration: action.duration
      });

    case types.UPDATE_VOLUME:
      return _extends({}, state, {
        volume: action.volume
      });

    case types.UPDATE_MUTED:
      return _extends({}, state, {
        muted: action.muted
      });

    case types.UPDATE_METADATA_LOADING_STATUS:
      return _extends({}, state, {
        metadataLoaded: action.metadataLoaded
      });

    case types.UPDATE_AUDIO_TRACKS:
      return _extends({}, state, {
        audioTracks: action.tracks
      });

    case types.UPDATE_VIDEO_TRACKS:
      return _extends({}, state, {
        videoTracks: action.tracks
      });

    case types.UPDATE_TEXT_TRACKS:
      return _extends({}, state, {
        textTracks: action.tracks
      });

    default:
      return state;
  }
};

var actions = exports.actions = {
  updatePlayerState: function updatePlayerState(prevoiusState, currentState) {
    return { type: types.UPDATE_PLAYER_STATE, playerState: { prevoiusState: prevoiusState, currentState: currentState } };
  },
  updateIsPlaying: function updateIsPlaying(isPlaying) {
    return { type: types.UPDATE_IS_PLAYING, isPlaying: isPlaying };
  },
  updateCurrentTime: function updateCurrentTime(currentTime) {
    return { type: types.UPDATE_CURRENT_TIME, currentTime: currentTime };
  },
  updateDuration: function updateDuration(duration) {
    return { type: types.UPDATE_DURATION, duration: duration };
  },
  updateVolume: function updateVolume(volume) {
    return { type: types.UPDATE_VOLUME, volume: volume };
  },
  updateMuted: function updateMuted(muted) {
    return { type: types.UPDATE_MUTED, muted: muted };
  },
  updateMetadataLoadingStatus: function updateMetadataLoadingStatus(metadataLoaded) {
    return { type: types.UPDATE_METADATA_LOADING_STATUS, metadataLoaded: metadataLoaded };
  },
  updateAudioTracks: function updateAudioTracks(tracks) {
    return { type: types.UPDATE_AUDIO_TRACKS, tracks: tracks };
  },
  updateVideoTracks: function updateVideoTracks(tracks) {
    return { type: types.UPDATE_VIDEO_TRACKS, tracks: tracks };
  },
  updateTextTracks: function updateTextTracks(tracks) {
    return { type: types.UPDATE_TEXT_TRACKS, tracks: tracks };
  }
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var types = exports.types = {
  UPDATE_SEEKBAR_DRAGGING_STATUS: 'seekbar/UPDATE_SEEKBAR_DRAGGING_STATUS',
  UPDATE_CURRENT_TIME: 'seekbar/UPDATE_CURRENT_TIME',
  UPDATE_DURATION: 'seekbar/UPDATE_DURATION'
};

var initialState = exports.initialState = {
  currentTime: 0,
  duration: 0,
  draggingActive: false
};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case types.UPDATE_SEEKBAR_DRAGGING_STATUS:
      return _extends({}, state, {
        draggingActive: action.draggingActive
      });

    case types.UPDATE_CURRENT_TIME:
      return _extends({}, state, {
        currentTime: action.currentTime
      });

    case types.UPDATE_DURATION:
      return _extends({}, state, {
        duration: action.duration
      });

    default:
      return state;
  }
};

var actions = exports.actions = {
  updateSeekbarDraggingStatus: function updateSeekbarDraggingStatus(draggingActive) {
    return { type: types.UPDATE_SEEKBAR_DRAGGING_STATUS, draggingActive: draggingActive };
  },
  updateDuration: function updateDuration(duration) {
    return { type: types.UPDATE_DURATION, duration: duration };
  },
  updateCurrentTime: function updateCurrentTime(currentTime) {
    return { type: types.UPDATE_CURRENT_TIME, currentTime: currentTime };
  }
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var types = exports.types = {
  UPDATE_VOLUME: 'volume/UPDATE_VOLUME',
  UPDATE_VOLUME_DRAGGING_STATUS: 'volume/UPDATE_VOLUME_DRAGGING_STATUS',
  UPDATE_MUTED: 'volume/UPDATE_MUTED'
};

var initialState = exports.initialState = {
  draggingActive: false,
  volume: 1,
  muted: false
};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case types.UPDATE_VOLUME:
      return _extends({}, state, {
        volume: action.volume
      });

    case types.UPDATE_VOLUME_DRAGGING_STATUS:
      return _extends({}, state, {
        draggingActive: action.draggingActive
      });

    case types.UPDATE_MUTED:
      return _extends({}, state, {
        muted: action.muted
      });

    default:
      return state;
  }
};

var actions = exports.actions = {
  updateVolume: function updateVolume(volume) {
    return { type: types.UPDATE_VOLUME, volume: volume };
  },
  updateVolumeDraggingStatus: function updateVolumeDraggingStatus(draggingActive) {
    return { type: types.UPDATE_VOLUME_DRAGGING_STATUS, draggingActive: draggingActive };
  },
  updateMuted: function updateMuted(muted) {
    return { type: types.UPDATE_MUTED, muted: muted };
  }
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var types = exports.types = {
  UPDATE_FULLSCREEN: 'fullscreen/UPDATE_FULLSCREEN'
};

var initialState = exports.initialState = {
  fullscreen: false
};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case types.UPDATE_FULLSCREEN:
      return _extends({}, state, {
        fullscreen: action.fullscreen
      });
    default:
      return state;
  }
};

var actions = exports.actions = {
  updateFullscreen: function updateFullscreen(fullscreen) {
    return { type: types.UPDATE_FULLSCREEN, fullscreen: fullscreen };
  }
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var types = exports.types = {
  UPDATE_LOADING_SPINNER_STATE: 'loading/UPDATE_LOADING_SPINNER_STATE'
};

var initialState = exports.initialState = {
  showLoadingSpinner: false
};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case types.UPDATE_LOADING_SPINNER_STATE:
      return _extends({}, state, {
        show: action.show
      });

    default:
      return state;
  }
};

var actions = exports.actions = {
  updateLoadingSpinnerState: function updateLoadingSpinnerState(show) {
    return { type: types.UPDATE_LOADING_SPINNER_STATE, show: show };
  }
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var types = exports.types = {
  UPDATE_QUALITY: 'settings/UPDATE_QUALITY',
  UPDATE_SPEED: 'settings/UPDATE_SPEED'
};

var initialState = exports.initialState = {
  quality: 1,
  speed: 2
};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case types.UPDATE_QUALITY:
      return _extends({}, state, {
        quality: action.quality
      });

    case types.UPDATE_SPEED:
      return _extends({}, state, {
        speed: action.speed
      });

    default:
      return state;
  }
};

var actions = exports.actions = {
  updateQuality: function updateQuality(quality) {
    return { type: types.UPDATE_QUALITY, quality: quality };
  },
  updateSpeed: function updateSpeed(speed) {
    return { type: types.UPDATE_SPEED, speed: speed };
  }
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function toHHMMSS(input) {
  var sec_num = parseInt(input, 10);
  var hours = Math.floor(sec_num / 3600);
  var minutes = Math.floor((sec_num - hours * 3600) / 60);
  var seconds = sec_num - hours * 3600 - minutes * 60;

  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  return minutes + ":" + seconds;
}

exports.toHHMMSS = toHHMMSS;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _preact = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SmartContainer = function (_Component) {
  _inherits(SmartContainer, _Component);

  function SmartContainer() {
    _classCallCheck(this, SmartContainer);

    return _possibleConstructorReturn(this, (SmartContainer.__proto__ || Object.getPrototypeOf(SmartContainer)).apply(this, arguments));
  }

  _createClass(SmartContainer, [{
    key: 'render',
    value: function render(props) {
      return (0, _preact.h)(
        'div',
        { className: 'smart-container top left' },
        props.children
      );
    }
  }]);

  return SmartContainer;
}(_preact.Component);

exports.default = SmartContainer;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _preact = __webpack_require__(0);

var _dropdownMenu = __webpack_require__(27);

var _dropdownMenu2 = _interopRequireDefault(_dropdownMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SmartContainer = function (_Component) {
  _inherits(SmartContainer, _Component);

  function SmartContainer() {
    _classCallCheck(this, SmartContainer);

    return _possibleConstructorReturn(this, (SmartContainer.__proto__ || Object.getPrototypeOf(SmartContainer)).apply(this, arguments));
  }

  _createClass(SmartContainer, [{
    key: 'render',
    value: function render(props) {
      return (0, _preact.h)(
        'div',
        { className: 'smart-container-item select-menu-item' },
        (0, _preact.h)(
          'label',
          { htmlFor: 'quality' },
          props.label
        ),
        (0, _preact.h)(_dropdownMenu2.default, { onSelect: function onSelect(o) {
            return props.onSelect(o);
          }, options: props.options })
      );
    }
  }]);

  return SmartContainer;
}(_preact.Component);

exports.default = SmartContainer;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _preact = __webpack_require__(0);

var _icon = __webpack_require__(4);

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DropDownMenu = function (_Component) {
  _inherits(DropDownMenu, _Component);

  function DropDownMenu() {
    _classCallCheck(this, DropDownMenu);

    return _possibleConstructorReturn(this, (DropDownMenu.__proto__ || Object.getPrototypeOf(DropDownMenu)).apply(this, arguments));
  }

  _createClass(DropDownMenu, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.setState({ dropMenuActive: false });
    }
  }, {
    key: 'isSelected',
    value: function isSelected(o) {
      return o.active;
    }
  }, {
    key: 'onSelect',
    value: function onSelect(o) {
      this.props.onSelect(o.value);
      this.setState({ dropMenuActive: false });
    }
  }, {
    key: 'getActiveOptionLabel',
    value: function getActiveOptionLabel() {
      var activeOptions = this.props.options.filter(function (t) {
        return t.active;
      });
      return activeOptions.length > 0 ? activeOptions[0].label : this.props.options[0].label;
    }
  }, {
    key: 'render',
    value: function render(props) {
      var _this2 = this;

      return (0, _preact.h)(
        'div',
        { className: 'dropdown top left' },
        (0, _preact.h)(
          'div',
          { className: 'dropdown-button', onClick: function onClick() {
              return _this2.setState({ dropMenuActive: !_this2.state.dropMenuActive });
            } },
          this.getActiveOptionLabel()
        ),
        !this.state.dropMenuActive ? '' : (0, _preact.h)(
          'div',
          { className: 'dropdown-menu' },
          props.options.map(function (o) {
            return (0, _preact.h)(
              'div',
              { className: _this2.isSelected(o) ? 'dropdown-menu-item active' : 'dropdown-menu-item', onClick: function onClick() {
                  return _this2.onSelect(o);
                } },
              (0, _preact.h)(
                'span',
                null,
                o.label
              ),
              _this2.isSelected(o) ? (0, _preact.h)(_icon2.default, { type: 'check' }) : ''
            );
          })
        )
      );
    }
  }]);

  return DropDownMenu;
}(_preact.Component);

exports.default = DropDownMenu;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _preact = __webpack_require__(0);

var _preactI18n = __webpack_require__(5);

var _preactRedux = __webpack_require__(1);

var _bindActions = __webpack_require__(3);

var _shell = __webpack_require__(7);

var _icon = __webpack_require__(4);

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Overlay = (_dec = (0, _preactRedux.connect)(null, (0, _bindActions.bindActions)(_shell.actions)), _dec(_class = function (_Component) {
  _inherits(Overlay, _Component);

  function Overlay() {
    _classCallCheck(this, Overlay);

    return _possibleConstructorReturn(this, (Overlay.__proto__ || Object.getPrototypeOf(Overlay)).apply(this, arguments));
  }

  _createClass(Overlay, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.props.removePlayerClass('overlay-active');
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.props.addPlayerClass('overlay-active');
    }
  }, {
    key: 'render',
    value: function render(props) {
      var overlayClass = 'overlay';
      if (props.type) overlayClass += ' ' + props.type + '-overlay';
      if (props.open) overlayClass += ' active';

      return (0, _preact.h)(
        'div',
        { className: overlayClass, role: 'dialog' },
        (0, _preact.h)(
          _preactI18n.Localizer,
          null,
          (0, _preact.h)(
            'a',
            { onClick: function onClick() {
                return props.onClose();
              }, 'aria-label': (0, _preact.h)(_preactI18n.Text, { id: 'core.close' }), className: 'close-overlay' },
            (0, _preact.h)(_icon2.default, { type: 'close' })
          )
        ),
        props.children
      );
    }
  }]);

  return Overlay;
}(_preact.Component)) || _class);
exports.default = Overlay;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _preact = __webpack_require__(0);

var _preactRedux = __webpack_require__(1);

var _preactI18n = __webpack_require__(5);

var _redux = __webpack_require__(6);

var _store = __webpack_require__(46);

var _store2 = _interopRequireDefault(_store);

var _fr = __webpack_require__(47);

var _fr2 = _interopRequireDefault(_fr);

var _engineConnector = __webpack_require__(48);

var _engineConnector2 = _interopRequireDefault(_engineConnector);

var _shell = __webpack_require__(52);

var _shell2 = _interopRequireDefault(_shell);

var _overlayPlay = __webpack_require__(54);

var _overlayPlay2 = _interopRequireDefault(_overlayPlay);

var _loading = __webpack_require__(55);

var _loading2 = _interopRequireDefault(_loading);

var _playPause = __webpack_require__(56);

var _playPause2 = _interopRequireDefault(_playPause);

var _seekbar = __webpack_require__(57);

var _seekbar2 = _interopRequireDefault(_seekbar);

var _volume = __webpack_require__(58);

var _volume2 = _interopRequireDefault(_volume);

var _share = __webpack_require__(59);

var _share2 = _interopRequireDefault(_share);

var _settings = __webpack_require__(60);

var _settings2 = _interopRequireDefault(_settings);

var _language = __webpack_require__(61);

var _language2 = _interopRequireDefault(_language);

var _fullscreen = __webpack_require__(62);

var _fullscreen2 = _interopRequireDefault(_fullscreen);

var _timeDisplay = __webpack_require__(63);

var _timeDisplay2 = _interopRequireDefault(_timeDisplay);

var _topBar = __webpack_require__(64);

var _topBar2 = _interopRequireDefault(_topBar);

var _bottomBar = __webpack_require__(65);

var _bottomBar2 = _interopRequireDefault(_bottomBar);

var _shareOverlay = __webpack_require__(66);

var _shareOverlay2 = _interopRequireDefault(_shareOverlay);

var _cvaaOverlay = __webpack_require__(67);

var _cvaaOverlay2 = _interopRequireDefault(_cvaaOverlay);

var _keyboard = __webpack_require__(68);

var _keyboard2 = _interopRequireDefault(_keyboard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UIManager = function () {
  function UIManager(player, config) {
    _classCallCheck(this, UIManager);

    this.player = player;
    this.config = config;
    this.config.ui = {
      "translations": {
        "controls": {
          "language": "שפה"
        }
      },
      "components": {
        "Loading": {
          "enabled": true
        },
        "OverlayPlay": {
          "enabled": true
        }
      }
    };
  }

  _createClass(UIManager, [{
    key: 'buildCustomUI',
    value: function buildCustomUI(template) {
      this._buildUI(template);
    }
  }, {
    key: 'buildDefaultUI',
    value: function buildDefaultUI() {
      var store = (0, _redux.createStore)(_store2.default, window.devToolsExtension && window.devToolsExtension({ name: 'playkit #' + this.config.target, instanceId: this.config.target }));

      var template = (0, _preact.h)(
        _preactRedux.Provider,
        { store: store },
        (0, _preact.h)(
          _preactI18n.IntlProvider,
          { definition: _fr2.default },
          (0, _preact.h)(
            _shell2.default,
            null,
            (0, _preact.h)('div', { className: 'player-holder' }),
            (0, _preact.h)(_engineConnector2.default, { player: this.player }),
            (0, _preact.h)(_keyboard2.default, { player: this.player }),
            (0, _preact.h)(_loading2.default, { player: this.player }),
            (0, _preact.h)(
              'div',
              { className: 'player-gui' },
              (0, _preact.h)(_overlayPlay2.default, { player: this.player }),
              (0, _preact.h)(
                _topBar2.default,
                null,
                (0, _preact.h)(
                  'div',
                  { className: 'left-controls' },
                  (0, _preact.h)(
                    'div',
                    { className: 'video-playing-title' },
                    'L21 Earth Time Lapse View from Space, ISS'
                  )
                ),
                (0, _preact.h)(
                  'div',
                  { className: 'right-controls' },
                  (0, _preact.h)(_share2.default, { player: this.player })
                )
              ),
              (0, _preact.h)(
                _bottomBar2.default,
                null,
                (0, _preact.h)(_seekbar2.default, { showFramePreview: true, showTimeBubble: true, player: this.player }),
                (0, _preact.h)(
                  'div',
                  { className: 'left-controls' },
                  (0, _preact.h)(_playPause2.default, { player: this.player }),
                  (0, _preact.h)(_timeDisplay2.default, { format: 'current / total', player: this.player })
                ),
                (0, _preact.h)(
                  'div',
                  { className: 'right-controls' },
                  (0, _preact.h)(_volume2.default, { player: this.player }),
                  (0, _preact.h)(_language2.default, { player: this.player }),
                  (0, _preact.h)(_settings2.default, { player: this.player }),
                  (0, _preact.h)(_fullscreen2.default, { player: this.player })
                )
              ),
              (0, _preact.h)(_shareOverlay2.default, null),
              (0, _preact.h)(_cvaaOverlay2.default, null)
            )
          )
        )
      );
      this._buildUI(template);
    }
  }, {
    key: '_buildUI',
    value: function _buildUI(template) {
      if (!this.player) return;

      var playerWrapper = document.createElement('div');
      document.body.appendChild(playerWrapper);
      (0, _preact.render)(template, playerWrapper);

      var playerElement = document.getElementsByTagName('video')[this.config.target === 'root' ? 0 : 1];
      // let playerElement = document.getElementById(this.config.target); // the right way
      playerElement.removeAttribute('style');
      playerWrapper.getElementsByClassName('player-holder')[0].appendChild(playerElement);
    }
  }, {
    key: 'release',
    value: function release() {}
  }]);

  return UIManager;
}();

exports.default = UIManager;

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Symbol_js__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getRawTag_js__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__objectToString_js__ = __webpack_require__(34);




/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */] ? __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */].toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? __WEBPACK_IMPORTED_MODULE_1__getRawTag_js__["a" /* default */](value)
    : __WEBPACK_IMPORTED_MODULE_2__objectToString_js__["a" /* default */](value);
}

/* harmony default export */ __webpack_exports__["a"] = (baseGetTag);


/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__freeGlobal_js__ = __webpack_require__(32);


/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = __WEBPACK_IMPORTED_MODULE_0__freeGlobal_js__["a" /* default */] || freeSelf || Function('return this')();

/* harmony default export */ __webpack_exports__["a"] = (root);


/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/* harmony default export */ __webpack_exports__["a"] = (freeGlobal);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(16)))

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Symbol_js__ = __webpack_require__(15);


/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */] ? __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */].toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

/* harmony default export */ __webpack_exports__["a"] = (getRawTag);


/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

/* harmony default export */ __webpack_exports__["a"] = (objectToString);


/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__overArg_js__ = __webpack_require__(36);


/** Built-in value references. */
var getPrototype = __WEBPACK_IMPORTED_MODULE_0__overArg_js__["a" /* default */](Object.getPrototypeOf, Object);

/* harmony default export */ __webpack_exports__["a"] = (getPrototype);


/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/* harmony default export */ __webpack_exports__["a"] = (overArg);


/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/* harmony default export */ __webpack_exports__["a"] = (isObjectLike);


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(39);


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ponyfill = __webpack_require__(41);

var _ponyfill2 = _interopRequireDefault(_ponyfill);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var root; /* global window */


if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (true) {
  root = module;
} else {
  root = Function('return this')();
}

var result = (0, _ponyfill2['default'])(root);
exports['default'] = result;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(16), __webpack_require__(40)(module)))

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports['default'] = symbolObservablePonyfill;
function symbolObservablePonyfill(root) {
	var result;
	var _Symbol = root.Symbol;

	if (typeof _Symbol === 'function') {
		if (_Symbol.observable) {
			result = _Symbol.observable;
		} else {
			result = _Symbol('observable');
			_Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
};

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (immutable) */ __webpack_exports__["a"] = combineReducers;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__createStore__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_es_isPlainObject__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_warning__ = __webpack_require__(8);




function getUndefinedStateErrorMessage(key, action) {
  var actionType = action && action.type;
  var actionName = actionType && '"' + actionType.toString() + '"' || 'an action';

  return 'Given action ' + actionName + ', reducer "' + key + '" returned undefined. ' + 'To ignore an action, you must explicitly return the previous state. ' + 'If you want this reducer to hold no value, you can return null instead of undefined.';
}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === __WEBPACK_IMPORTED_MODULE_0__createStore__["a" /* ActionTypes */].INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!__WEBPACK_IMPORTED_MODULE_1_lodash_es_isPlainObject__["a" /* default */](inputState)) {
    return 'The ' + argumentName + ' has unexpected type of "' + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });

  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });

  if (unexpectedKeys.length > 0) {
    return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
  }
}

function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, { type: __WEBPACK_IMPORTED_MODULE_0__createStore__["a" /* ActionTypes */].INIT });

    if (typeof initialState === 'undefined') {
      throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined. If you don\'t want to set a value for this reducer, ' + 'you can use null instead of undefined.');
    }

    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
    if (typeof reducer(undefined, { type: type }) === 'undefined') {
      throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + __WEBPACK_IMPORTED_MODULE_0__createStore__["a" /* ActionTypes */].INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined, but can be null.');
    }
  });
}

/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */
function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};
  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if (process.env.NODE_ENV !== 'production') {
      if (typeof reducers[key] === 'undefined') {
        __WEBPACK_IMPORTED_MODULE_2__utils_warning__["a" /* default */]('No reducer provided for key "' + key + '"');
      }
    }

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }
  var finalReducerKeys = Object.keys(finalReducers);

  var unexpectedKeyCache = void 0;
  if (process.env.NODE_ENV !== 'production') {
    unexpectedKeyCache = {};
  }

  var shapeAssertionError = void 0;
  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }

  return function combination() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments[1];

    if (shapeAssertionError) {
      throw shapeAssertionError;
    }

    if (process.env.NODE_ENV !== 'production') {
      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);
      if (warningMessage) {
        __WEBPACK_IMPORTED_MODULE_2__utils_warning__["a" /* default */](warningMessage);
      }
    }

    var hasChanged = false;
    var nextState = {};
    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);
      if (typeof nextStateForKey === 'undefined') {
        var errorMessage = getUndefinedStateErrorMessage(_key, action);
        throw new Error(errorMessage);
      }
      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }
    return hasChanged ? nextState : state;
  };
}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(12)))

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = bindActionCreators;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_warning__ = __webpack_require__(8);


function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(undefined, arguments));
  };
}

/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass a single function as the first argument,
 * and get a function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */
function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if (typeof actionCreators !== 'object' || actionCreators === null) {
    throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
  }

  var keys = Object.keys(actionCreators);
  var boundActionCreators = {};
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var actionCreator = actionCreators[key];
    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    } else {
      __WEBPACK_IMPORTED_MODULE_0__utils_warning__["a" /* default */]('bindActionCreators expected a function actionCreator for key \'' + key + '\', instead received type \'' + typeof actionCreator + '\'.');
    }
  }
  return boundActionCreators;
}

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = applyMiddleware;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__compose__ = __webpack_require__(17);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */
function applyMiddleware() {
  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function (reducer, preloadedState, enhancer) {
      var store = createStore(reducer, preloadedState, enhancer);
      var _dispatch = store.dispatch;
      var chain = [];

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch(action) {
          return _dispatch(action);
        }
      };
      chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = __WEBPACK_IMPORTED_MODULE_0__compose__["a" /* default */].apply(undefined, chain)(store.dispatch);

      return _extends({}, store, {
        dispatch: _dispatch
      });
    };
  };
}

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

!function(e,n){ true?module.exports=n():"function"==typeof define&&define.amd?define(n):e.dlv=n()}(this,function(){function e(e,n,t,o){for(o=0,n=n.split?n.split("."):n;e&&o<n.length;)e=e[n[o++]];return void 0===e?t:e}return e});

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(6);

var _engine = __webpack_require__(18);

var _engine2 = _interopRequireDefault(_engine);

var _shell = __webpack_require__(7);

var _shell2 = _interopRequireDefault(_shell);

var _playPause = __webpack_require__(9);

var _playPause2 = _interopRequireDefault(_playPause);

var _seekbar = __webpack_require__(19);

var _seekbar2 = _interopRequireDefault(_seekbar);

var _volume = __webpack_require__(20);

var _volume2 = _interopRequireDefault(_volume);

var _fullscreen = __webpack_require__(21);

var _fullscreen2 = _interopRequireDefault(_fullscreen);

var _loading = __webpack_require__(22);

var _loading2 = _interopRequireDefault(_loading);

var _share = __webpack_require__(10);

var _share2 = _interopRequireDefault(_share);

var _cvaa = __webpack_require__(11);

var _cvaa2 = _interopRequireDefault(_cvaa);

var _settings = __webpack_require__(23);

var _settings2 = _interopRequireDefault(_settings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reducer = (0, _redux.combineReducers)({
  engine: _engine2.default,
  shell: _shell2.default,
  seekbar: _seekbar2.default,
  volume: _volume2.default,
  fullscreen: _fullscreen2.default,
  loading: _loading2.default,
  playPause: _playPause2.default,
  share: _share2.default,
  cvaa: _cvaa2.default,
  settings: _settings2.default
});
exports.default = reducer;

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = {
	"core": {
		"disable": "Disable",
		"auto": "Auto",
		"close": "Close"
	},
	"controls": {
		"play": "Play",
		"pause": "Pause",
		"share": "Share",
		"language": "Language",
		"settings": "Settings",
		"fullscreen": "Fullscreen"
	},
	"settings": {
		"quality": "Quality",
		"speed": "Speed"
	},
	"language": {
		"audio": "Audio",
		"captions": "Captions",
		"advanced_captions_settings": "Advanced captions settings"
	},
	"share": {
		"share_title": "Share",
		"link_options": "Link options"
	}
};

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _preact = __webpack_require__(0);

var _preactRedux = __webpack_require__(1);

var _bindActions = __webpack_require__(3);

var _engine = __webpack_require__(18);

var _engine2 = _interopRequireDefault(_engine);

var _base = __webpack_require__(2);

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EngineConnector = (_dec = (0, _preactRedux.connect)(_engine2.default, (0, _bindActions.bindActions)(_engine.actions)), _dec(_class = function (_BaseComponent) {
  _inherits(EngineConnector, _BaseComponent);

  function EngineConnector(obj) {
    _classCallCheck(this, EngineConnector);

    return _possibleConstructorReturn(this, (EngineConnector.__proto__ || Object.getPrototypeOf(EngineConnector)).call(this, { name: 'EngineConnector', player: obj.player }));
  }

  _createClass(EngineConnector, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var TrackType = this.player.Track;

      this.player.addEventListener(this.player.Event.PLAYER_STATE_CHANGED, function (e) {
        _this2.props.updatePlayerState(e.payload.oldState.type, e.payload.newState.type);
      });

      this.player.addEventListener(this.player.Event.TIME_UPDATE, function () {
        _this2.props.updateCurrentTime(_this2.player.currentTime);
      });

      this.player.addEventListener(this.player.Event.LOADED_METADATA, function () {
        _this2.props.updateDuration(_this2.player.duration);
        _this2.props.updateMetadataLoadingStatus(true);
      });

      this.player.addEventListener(this.player.Event.VOLUME_CHANGE, function () {
        _this2.props.updateVolume(_this2.player.volume);
      });

      this.player.addEventListener(this.player.Event.PLAY, function () {
        _this2.props.updateIsPlaying(true);
      });

      this.player.addEventListener(this.player.Event.PAUSE, function () {
        _this2.props.updateIsPlaying(false);
      });

      this.player.addEventListener(this.player.Event.TRACKS_CHANGED, function () {
        var audioTracks = _this2.player.getTracks(TrackType.AUDIO);
        var videoTracks = _this2.player.getTracks(TrackType.VIDEO);
        var textTracks = _this2.player.getTracks(TrackType.TEXT);

        _this2.props.updateAudioTracks(audioTracks);
        _this2.props.updateVideoTracks(videoTracks);
        _this2.props.updateTextTracks(textTracks);
      });

      this.player.addEventListener(this.player.Event.TEXT_TRACK_CHANGED, function () {
        var tracks = _this2.player.getTracks(TrackType.TEXT);
        _this2.props.updateTextTracks(tracks);
      });

      this.player.addEventListener(this.player.Event.AUDIO_TRACK_CHANGED, function () {
        var tracks = _this2.player.getTracks(TrackType.AUDIO);
        _this2.props.updateAudioTracks(tracks);
      });

      this.player.addEventListener(this.player.Event.VIDEO_TRACK_CHANGED, function () {
        var tracks = _this2.player.getTracks(TrackType.VIDEO);
        _this2.props.updateVideoTracks(tracks);
      });
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate() {
      return false;
    }
  }, {
    key: 'render',
    value: function render() {
      return (0, _preact.h)('span', null);
    }
  }]);

  return EngineConnector;
}(_base2.default)) || _class);
exports.default = EngineConnector;

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_49__;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LOG_LEVEL = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jsLogger = __webpack_require__(51);

var JsLogger = _interopRequireWildcard(_jsLogger);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LOG_LEVEL = {
  "DEBUG": JsLogger.DEBUG,
  "INFO": JsLogger.INFO,
  "TIME": JsLogger.TIME,
  "WARN": JsLogger.WARN,
  "ERROR": JsLogger.ERROR,
  "OFF": JsLogger.OFF
};

var LoggerFactory = function () {
  function LoggerFactory(options) {
    _classCallCheck(this, LoggerFactory);

    JsLogger.useDefaults(options || {});
  }

  _createClass(LoggerFactory, [{
    key: "getLogger",
    value: function getLogger(name) {
      if (!name) {
        return JsLogger;
      }
      return JsLogger.get(name);
    }
  }]);

  return LoggerFactory;
}();

var lf = new LoggerFactory({ defaultLevel: JsLogger.DEBUG });

exports.default = lf;
exports.LOG_LEVEL = LOG_LEVEL;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * js-logger - http://github.com/jonnyreeves/js-logger
 * Jonny Reeves, http://jonnyreeves.co.uk/
 * js-logger may be freely distributed under the MIT license.
 */
(function (global) {
	"use strict";

	// Top level module for the global, static logger instance.
	var Logger = { };

	// For those that are at home that are keeping score.
	Logger.VERSION = "1.3.0";

	// Function which handles all incoming log messages.
	var logHandler;

	// Map of ContextualLogger instances by name; used by Logger.get() to return the same named instance.
	var contextualLoggersByNameMap = {};

	// Polyfill for ES5's Function.bind.
	var bind = function(scope, func) {
		return function() {
			return func.apply(scope, arguments);
		};
	};

	// Super exciting object merger-matron 9000 adding another 100 bytes to your download.
	var merge = function () {
		var args = arguments, target = args[0], key, i;
		for (i = 1; i < args.length; i++) {
			for (key in args[i]) {
				if (!(key in target) && args[i].hasOwnProperty(key)) {
					target[key] = args[i][key];
				}
			}
		}
		return target;
	};

	// Helper to define a logging level object; helps with optimisation.
	var defineLogLevel = function(value, name) {
		return { value: value, name: name };
	};

	// Predefined logging levels.
	Logger.DEBUG = defineLogLevel(1, 'DEBUG');
	Logger.INFO = defineLogLevel(2, 'INFO');
	Logger.TIME = defineLogLevel(3, 'TIME');
	Logger.WARN = defineLogLevel(4, 'WARN');
	Logger.ERROR = defineLogLevel(8, 'ERROR');
	Logger.OFF = defineLogLevel(99, 'OFF');

	// Inner class which performs the bulk of the work; ContextualLogger instances can be configured independently
	// of each other.
	var ContextualLogger = function(defaultContext) {
		this.context = defaultContext;
		this.setLevel(defaultContext.filterLevel);
		this.log = this.info;  // Convenience alias.
	};

	ContextualLogger.prototype = {
		// Changes the current logging level for the logging instance.
		setLevel: function (newLevel) {
			// Ensure the supplied Level object looks valid.
			if (newLevel && "value" in newLevel) {
				this.context.filterLevel = newLevel;
			}
		},

		// Is the logger configured to output messages at the supplied level?
		enabledFor: function (lvl) {
			var filterLevel = this.context.filterLevel;
			return lvl.value >= filterLevel.value;
		},

		debug: function () {
			this.invoke(Logger.DEBUG, arguments);
		},

		info: function () {
			this.invoke(Logger.INFO, arguments);
		},

		warn: function () {
			this.invoke(Logger.WARN, arguments);
		},

		error: function () {
			this.invoke(Logger.ERROR, arguments);
		},

		time: function (label) {
			if (typeof label === 'string' && label.length > 0) {
				this.invoke(Logger.TIME, [ label, 'start' ]);
			}
		},

		timeEnd: function (label) {
			if (typeof label === 'string' && label.length > 0) {
				this.invoke(Logger.TIME, [ label, 'end' ]);
			}
		},

		// Invokes the logger callback if it's not being filtered.
		invoke: function (level, msgArgs) {
			if (logHandler && this.enabledFor(level)) {
				logHandler(msgArgs, merge({ level: level }, this.context));
			}
		}
	};

	// Protected instance which all calls to the to level `Logger` module will be routed through.
	var globalLogger = new ContextualLogger({ filterLevel: Logger.OFF });

	// Configure the global Logger instance.
	(function() {
		// Shortcut for optimisers.
		var L = Logger;

		L.enabledFor = bind(globalLogger, globalLogger.enabledFor);
		L.debug = bind(globalLogger, globalLogger.debug);
		L.time = bind(globalLogger, globalLogger.time);
		L.timeEnd = bind(globalLogger, globalLogger.timeEnd);
		L.info = bind(globalLogger, globalLogger.info);
		L.warn = bind(globalLogger, globalLogger.warn);
		L.error = bind(globalLogger, globalLogger.error);

		// Don't forget the convenience alias!
		L.log = L.info;
	}());

	// Set the global logging handler.  The supplied function should expect two arguments, the first being an arguments
	// object with the supplied log messages and the second being a context object which contains a hash of stateful
	// parameters which the logging function can consume.
	Logger.setHandler = function (func) {
		logHandler = func;
	};

	// Sets the global logging filter level which applies to *all* previously registered, and future Logger instances.
	// (note that named loggers (retrieved via `Logger.get`) can be configured independently if required).
	Logger.setLevel = function(level) {
		// Set the globalLogger's level.
		globalLogger.setLevel(level);

		// Apply this level to all registered contextual loggers.
		for (var key in contextualLoggersByNameMap) {
			if (contextualLoggersByNameMap.hasOwnProperty(key)) {
				contextualLoggersByNameMap[key].setLevel(level);
			}
		}
	};

	// Retrieve a ContextualLogger instance.  Note that named loggers automatically inherit the global logger's level,
	// default context and log handler.
	Logger.get = function (name) {
		// All logger instances are cached so they can be configured ahead of use.
		return contextualLoggersByNameMap[name] ||
			(contextualLoggersByNameMap[name] = new ContextualLogger(merge({ name: name }, globalLogger.context)));
	};

	// CreateDefaultHandler returns a handler function which can be passed to `Logger.setHandler()` which will
	// write to the window's console object (if present); the optional options object can be used to customise the
	// formatter used to format each log message.
	Logger.createDefaultHandler = function (options) {
		options = options || {};

		options.formatter = options.formatter || function defaultMessageFormatter(messages, context) {
			// Prepend the logger's name to the log message for easy identification.
			if (context.name) {
				messages.unshift("[" + context.name + "]");
			}
		};

		// Map of timestamps by timer labels used to track `#time` and `#timeEnd()` invocations in environments
		// that don't offer a native console method.
		var timerStartTimeByLabelMap = {};

		// Support for IE8+ (and other, slightly more sane environments)
		var invokeConsoleMethod = function (hdlr, messages) {
			Function.prototype.apply.call(hdlr, console, messages);
		};

		// Check for the presence of a logger.
		if (typeof console === "undefined") {
			return function () { /* no console */ };
		}

		return function(messages, context) {
			// Convert arguments object to Array.
			messages = Array.prototype.slice.call(messages);

			var hdlr = console.log;
			var timerLabel;

			if (context.level === Logger.TIME) {
				timerLabel = (context.name ? '[' + context.name + '] ' : '') + messages[0];

				if (messages[1] === 'start') {
					if (console.time) {
						console.time(timerLabel);
					}
					else {
						timerStartTimeByLabelMap[timerLabel] = new Date().getTime();
					}
				}
				else {
					if (console.timeEnd) {
						console.timeEnd(timerLabel);
					}
					else {
						invokeConsoleMethod(hdlr, [ timerLabel + ': ' +
							(new Date().getTime() - timerStartTimeByLabelMap[timerLabel]) + 'ms' ]);
					}
				}
			}
			else {
				// Delegate through to custom warn/error loggers if present on the console.
				if (context.level === Logger.WARN && console.warn) {
					hdlr = console.warn;
				} else if (context.level === Logger.ERROR && console.error) {
					hdlr = console.error;
				} else if (context.level === Logger.INFO && console.info) {
					hdlr = console.info;
				}

				options.formatter(messages, context);
				invokeConsoleMethod(hdlr, messages);
			}
		};
	};

	// Configure and example a Default implementation which writes to the `window.console` (if present).  The
	// `options` hash can be used to configure the default logLevel and provide a custom message formatter.
	Logger.useDefaults = function(options) {
		Logger.setLevel(options && options.defaultLevel || Logger.DEBUG);
		Logger.setHandler(Logger.createDefaultHandler(options));
	};

	// Export to popular environments boilerplate.
	if (true) {
		!(__WEBPACK_AMD_DEFINE_FACTORY__ = (Logger),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}
	else if (typeof module !== 'undefined' && module.exports) {
		module.exports = Logger;
	}
	else {
		Logger._prevLogger = global.Logger;

		Logger.noConflict = function () {
			global.Logger = Logger._prevLogger;
			return Logger;
		};

		global.Logger = Logger;
	}
}(this));


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _preact = __webpack_require__(0);

var _base = __webpack_require__(2);

var _base2 = _interopRequireDefault(_base);

var _preactRedux = __webpack_require__(1);

var _bindActions = __webpack_require__(3);

var _shell = __webpack_require__(7);

var _isMobile = __webpack_require__(53);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    metadataLoaded: state.engine.metadataLoaded,
    currentState: state.engine.playerState.currentState,
    playerClasses: state.shell.playerClasses,
    isMobile: state.shell.isMobile
  };
};

var Shell = (_dec = (0, _preactRedux.connect)(mapStateToProps, (0, _bindActions.bindActions)(_shell.actions)), _dec(_class = function (_BaseComponent) {
  _inherits(Shell, _BaseComponent);

  function Shell() {
    _classCallCheck(this, Shell);

    return _possibleConstructorReturn(this, (Shell.__proto__ || Object.getPrototypeOf(Shell)).call(this, { name: 'Shell' }));
  }

  _createClass(Shell, [{
    key: 'onMouseOver',
    value: function onMouseOver() {
      this.props.addPlayerClass('hover');
    }
  }, {
    key: 'onMouseLeave',
    value: function onMouseLeave() {
      this.props.removePlayerClass('hover');
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.updateIsMobile((0, _isMobile.isMobile)());
    }
  }, {
    key: 'render',
    value: function render(props) {
      var _this2 = this;

      var playerClasses = 'player skin-default';
      playerClasses += ' ' + props.playerClasses.join(' ');

      if (this.props.metadataLoaded) playerClasses += ' metadata-loaded';
      if (this.props.metadataLoaded) playerClasses += ' state-' + this.props.currentState;

      return (0, _preact.h)(
        'div',
        { className: playerClasses, onMouseOver: function onMouseOver() {
            return _this2.onMouseOver();
          }, onMouseLeave: function onMouseLeave() {
            return _this2.onMouseLeave();
          } },
        props.children
      );
    }
  }]);

  return Shell;
}(_base2.default)) || _class);
exports.default = Shell;

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function isMobile() {
  return typeof window.orientation !== "undefined" || navigator.userAgent.indexOf("IEMobile") !== -1;
}

exports.isMobile = isMobile;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _preact = __webpack_require__(0);

var _preactRedux = __webpack_require__(1);

var _bindActions = __webpack_require__(3);

var _playPause = __webpack_require__(9);

var _base = __webpack_require__(2);

var _base2 = _interopRequireDefault(_base);

var _icon = __webpack_require__(4);

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    isPlaying: state.engine.isPlaying
  };
};

var OverlayPlay = (_dec = (0, _preactRedux.connect)(mapStateToProps, (0, _bindActions.bindActions)(_playPause.actions)), _dec(_class = function (_BaseComponent) {
  _inherits(OverlayPlay, _BaseComponent);

  function OverlayPlay(obj) {
    _classCallCheck(this, OverlayPlay);

    return _possibleConstructorReturn(this, (OverlayPlay.__proto__ || Object.getPrototypeOf(OverlayPlay)).call(this, { name: 'OverlayPlay', player: obj.player }));
  }

  _createClass(OverlayPlay, [{
    key: 'togglePlayPause',
    value: function togglePlayPause() {
      var _this2 = this;

      this.logger.debug('Toggle play');
      this.setState({ animation: true });
      setTimeout(function () {
        _this2.setState({ animation: false });
      }, 400);
      if (this.player.paused) {
        this.player.play();
      } else {
        this.player.pause();
      }
    }
  }, {
    key: 'render',
    value: function render(props) {
      var _this3 = this;

      return (0, _preact.h)(
        'div',
        { className: 'overlay-play ' + (this.state.animation ? 'in' : ''), onClick: function onClick() {
            return _this3.togglePlayPause();
          } },
        props.isPlaying ? (0, _preact.h)(_icon2.default, { type: 'play' }) : (0, _preact.h)(_icon2.default, { type: 'pause' })
      );
    }
  }]);

  return OverlayPlay;
}(_base2.default)) || _class);
exports.default = OverlayPlay;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _preact = __webpack_require__(0);

var _preactRedux = __webpack_require__(1);

var _bindActions = __webpack_require__(3);

var _loading = __webpack_require__(22);

var _base = __webpack_require__(2);

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    show: state.loading.show
  };
};

var Loading = (_dec = (0, _preactRedux.connect)(mapStateToProps, (0, _bindActions.bindActions)(_loading.actions)), _dec(_class = function (_BaseComponent) {
  _inherits(Loading, _BaseComponent);

  function Loading(obj) {
    _classCallCheck(this, Loading);

    return _possibleConstructorReturn(this, (Loading.__proto__ || Object.getPrototypeOf(Loading)).call(this, { name: 'Loading', player: obj.player }));
  }

  _createClass(Loading, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.player.addEventListener(this.player.Event.PLAYER_STATE_CHANGED, function (e) {
        if (e.payload.newState.type === 'idle' || e.payload.newState.type === 'playing' || e.payload.newState.type === 'paused') {
          _this2.props.updateLoadingSpinnerState(false);
        } else {
          _this2.props.updateLoadingSpinnerState(true);
        }
      });
    }
  }, {
    key: 'render',
    value: function render(props) {
      return (0, _preact.h)(
        'div',
        { className: props.show ? 'loading-backdrop show' : 'loading-backdrop' },
        (0, _preact.h)(
          'div',
          { className: 'spinner-container' },
          (0, _preact.h)(
            'div',
            { className: 'spinner' },
            [].concat(_toConsumableArray(Array(8))).map(function () {
              return (0, _preact.h)('span', null);
            })
          )
        )
      );
    }
  }]);

  return Loading;
}(_base2.default)) || _class);
exports.default = Loading;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _preact = __webpack_require__(0);

var _preactI18n = __webpack_require__(5);

var _preactRedux = __webpack_require__(1);

var _bindActions = __webpack_require__(3);

var _playPause = __webpack_require__(9);

var _base = __webpack_require__(2);

var _base2 = _interopRequireDefault(_base);

var _icon = __webpack_require__(4);

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    isPlaying: state.engine.isPlaying
  };
};

var PlayPauseControl = (_dec = (0, _preactRedux.connect)(mapStateToProps, (0, _bindActions.bindActions)(_playPause.actions)), _dec(_class = function (_BaseComponent) {
  _inherits(PlayPauseControl, _BaseComponent);

  function PlayPauseControl(obj) {
    _classCallCheck(this, PlayPauseControl);

    return _possibleConstructorReturn(this, (PlayPauseControl.__proto__ || Object.getPrototypeOf(PlayPauseControl)).call(this, { name: 'PlayPause', player: obj.player }));
  }

  _createClass(PlayPauseControl, [{
    key: 'togglePlayPause',
    value: function togglePlayPause() {
      this.logger.debug('Toggle play');
      if (this.player.paused) {
        this.player.play();
      } else {
        this.player.pause();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var controlButtonClass = this.props.isPlaying ? 'control-button is-playing' : 'control-button';

      return (0, _preact.h)(
        'div',
        { className: 'control-button-container control-play-pause' },
        (0, _preact.h)(
          _preactI18n.Localizer,
          null,
          (0, _preact.h)(
            'button',
            { 'aria-label': (0, _preact.h)(_preactI18n.Text, { id: this.props.isPlaying ? 'controls.pause' : 'controls.play' }), className: controlButtonClass, onClick: function onClick() {
                return _this2.togglePlayPause();
              } },
            (0, _preact.h)(_icon2.default, { type: 'play' }),
            (0, _preact.h)(_icon2.default, { type: 'pause' })
          )
        )
      );
    }
  }]);

  return PlayPauseControl;
}(_base2.default)) || _class);
exports.default = PlayPauseControl;

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _preact = __webpack_require__(0);

var _preactRedux = __webpack_require__(1);

var _bindActions = __webpack_require__(3);

var _seekbar = __webpack_require__(19);

var _base = __webpack_require__(2);

var _base2 = _interopRequireDefault(_base);

var _timeFormat = __webpack_require__(24);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    virtualProgress: state.seekbar.virtualTime,
    currentTime: state.seekbar.currentTime,
    duration: state.engine.duration,
    isDraggingActive: state.seekbar.draggingActive
  };
};

var SeekBarControl = (_dec = (0, _preactRedux.connect)(mapStateToProps, (0, _bindActions.bindActions)(_seekbar.actions)), _dec(_class = function (_BaseComponent) {
  _inherits(SeekBarControl, _BaseComponent);

  function SeekBarControl(obj) {
    _classCallCheck(this, SeekBarControl);

    var _this = _possibleConstructorReturn(this, (SeekBarControl.__proto__ || Object.getPrototypeOf(SeekBarControl)).call(this, { name: 'SeekBar', player: obj.player }));

    _this.onSeekbarMouseDown = function (e) {
      _this.props.updateSeekbarDraggingStatus(true);
      if (_this.props.isDraggingActive) {
        var time = _this.getTime(e);
        _this.updateSeekBarProgress(time, _this.player.duration);
      }
    };

    _this.onSeekbarMouseUp = function (e) {
      var time = _this.getTime(e);
      _this.player.currentTime = time;
      _this.updateSeekBarProgress(time, _this.player.duration);
      _this.props.updateSeekbarDraggingStatus(false);
      _this.logger.debug('Seek to ' + time + 's');
    };

    _this.onSeekbarMouseMove = function (e) {
      var time = _this.getTime(e);
      _this.updateSeekBarProgress(time, _this.player.duration, true);

      if (_this.props.isDraggingActive) {
        _this.updateSeekBarProgress(time, _this.player.duration);
      }
    };

    return _this;
  }

  _createClass(SeekBarControl, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this._playerElement = document.getElementsByClassName('player')[0];
      this._seekBarElement = document.getElementsByClassName('seek-bar')[0];

      this.setState({ virtualTime: 0 });

      this.player.addEventListener(this.player.Event.TIME_UPDATE, function () {
        _this2.props.updateCurrentTime(_this2.player.currentTime);
      });
    }
  }, {
    key: 'updateSeekBarProgress',
    value: function updateSeekBarProgress(currentTime, duration) {
      var virtual = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      if (virtual) {
        this.setState({ virtualTime: currentTime });
      } else {
        this.props.updateCurrentTime(currentTime);
      }
    }
  }, {
    key: 'getTime',
    value: function getTime(e) {
      var time = this.player.duration * ((e.clientX - this._seekBarElement.offsetLeft - this._playerElement.offsetLeft) / this._seekBarElement.clientWidth);
      time = parseFloat(time.toFixed(2));
      if (time < 0) return 0;
      if (time > this.player.duration) return this.player.duration;
      return time;
    }
  }, {
    key: 'getThumbSpriteOffset',
    value: function getThumbSpriteOffset() {
      return -(Math.ceil(100 * this.state.virtualTime / this.player.duration) * 160) + 'px 0px';
    }
  }, {
    key: 'render',
    value: function render(props) {
      var _this3 = this;

      var virtualProgressWidth = this.state.virtualTime / props.duration * 100 + '%';
      var progressWidth = props.currentTime / props.duration * 100 + '%';
      var framePreviewStyle = 'background-image: url(http://cfvod.kaltura.com/p/1914121/sp/191412100/thumbnail/entry_id/1_umer46fd/version/100001/width/160/vid_slices/100); ';
      framePreviewStyle += 'background-position: ' + this.getThumbSpriteOffset();

      return (0, _preact.h)(
        'div',
        { className: 'seek-bar', role: 'slider',
          'aria-label': 'Seek slider', 'aria-valuemin': '0', 'aria-valuemax': Math.round(this.player.duration), 'aria-valuenow': Math.round(this.player.currentTime),
          'aria-valuetext': (0, _timeFormat.toHHMMSS)(this.player.currentTime) + ' of ' + (0, _timeFormat.toHHMMSS)(this.player.duration),
          onMouseMove: function onMouseMove(e) {
            return _this3.onSeekbarMouseMove(e);
          }, onMouseDown: function onMouseDown(e) {
            return _this3.onSeekbarMouseDown(e);
          }, onMouseUp: function onMouseUp(e) {
            return _this3.onSeekbarMouseUp(e);
          } },
        (0, _preact.h)(
          'div',
          { className: 'progress-bar' },
          (0, _preact.h)(
            'div',
            { className: 'progress', style: { width: progressWidth } },
            (0, _preact.h)('a', { className: 'scrubber' })
          ),
          (0, _preact.h)(
            'div',
            { className: 'virtual-progress', style: { width: virtualProgressWidth } },
            props.showFramePreview ? (0, _preact.h)(
              'div',
              { className: 'frame-preview' },
              (0, _preact.h)('div', { className: 'frame-preview-img', style: framePreviewStyle })
            ) : '',
            this.props.showTimeBubble ? (0, _preact.h)(
              'div',
              { className: 'time-preview' },
              (0, _timeFormat.toHHMMSS)(this.state.virtualTime)
            ) : ''
          ),
          (0, _preact.h)('div', { className: 'buffered', style: 'width: 60%;' })
        )
      );
    }
  }]);

  return SeekBarControl;
}(_base2.default)) || _class);
exports.default = SeekBarControl;

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _preact = __webpack_require__(0);

var _preactRedux = __webpack_require__(1);

var _bindActions = __webpack_require__(3);

var _volume = __webpack_require__(20);

var _base = __webpack_require__(2);

var _base2 = _interopRequireDefault(_base);

var _icon = __webpack_require__(4);

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    isDraggingActive: state.volume.isDraggingActive,
    volume: state.volume.volume,
    muted: state.volume.muted,
    isMobile: state.shell.isMobile
  };
};

var VolumeControl = (_dec = (0, _preactRedux.connect)(mapStateToProps, (0, _bindActions.bindActions)(_volume.actions)), _dec(_class = function (_BaseComponent) {
  _inherits(VolumeControl, _BaseComponent);

  function VolumeControl(obj) {
    _classCallCheck(this, VolumeControl);

    return _possibleConstructorReturn(this, (VolumeControl.__proto__ || Object.getPrototypeOf(VolumeControl)).call(this, { name: 'Volume', player: obj.player }));
  }

  _createClass(VolumeControl, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this._volumeControlElement = document.getElementsByClassName('volume-control')[0];
      this._volumeProgressBarElement = this._volumeControlElement.getElementsByClassName('bar')[0];

      this.player.addEventListener(this.player.Event.LOADED_METADATA, function () {
        _this2.props.updateVolume(_this2.player.volume);
      });

      this.player.addEventListener(this.player.Event.VOLUME_CHANGE, function () {
        _this2.props.updateVolume(_this2.player.volume);
      });
    }
  }, {
    key: 'getVolumeProgessHeight',
    value: function getVolumeProgessHeight() {
      return this.props.muted ? '0%' : Math.round(this.props.volume * 100) + '%';
    }
  }, {
    key: 'onVolumeProgressBarMouseDown',
    value: function onVolumeProgressBarMouseDown() {
      this.props.updateVolumeDraggingStatus(true);
    }
  }, {
    key: 'onVolumeProgressBarClick',
    value: function onVolumeProgressBarClick(e) {
      this.changeVolume(e);
    }
  }, {
    key: 'onVolumeControlButtonClick',
    value: function onVolumeControlButtonClick() {
      this.logger.debug('Toggle mute. ' + this.player.muted + ' => ' + !this.player.muted);
      this.props.updateMuted(!this.props.muted);
      this.player.muted = !this.player.muted;
    }
  }, {
    key: 'changeVolume',
    value: function changeVolume(e) {
      var barHeight = this._volumeProgressBarElement.clientHeight;
      var topY = this.getCoords(this._volumeProgressBarElement).top;
      var clickY = e.clientY;
      var volume = 1 - (clickY - topY) / barHeight;
      volume = parseFloat(volume.toFixed(2));
      this.logger.debug('Change volume from ' + this.player.volume + ' => ' + volume);
      this.player.volume = volume;
      if (this.props.muted) {
        this.player.muted = false;
        this.props.updateMuted(false);
      }
    }
  }, {
    key: 'getCoords',
    value: function getCoords(el) {
      var box = el.getBoundingClientRect();

      return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var controlButtonClass = 'control-button-container volume-control';
      if (this.props.isDraggingActive) controlButtonClass += ' dragging-active';
      if (this.props.muted || this.props.volume === 0) controlButtonClass += ' is-muted';

      return (0, _preact.h)(
        'div',
        { className: controlButtonClass },
        (0, _preact.h)(
          'button',
          { className: 'control-button', onClick: function onClick() {
              return _this3.onVolumeControlButtonClick();
            }, 'aria-label': 'Volume' },
          (0, _preact.h)(_icon2.default, { type: 'volume-base' }),
          (0, _preact.h)(_icon2.default, { type: 'volume-waves' }),
          (0, _preact.h)(_icon2.default, { type: 'volume-mute' })
        ),
        (0, _preact.h)(
          'div',
          { className: 'volume-control-bar', role: 'slider',
            'aria-valuemin': '0', 'aria-valuemaz': '100', 'aria-valuenow': this.player.volume * 100,
            'aria-valuetext': this.player.volume * 100 + '% volume ' + (this.player.muted ? 'muted' : '') },
          (0, _preact.h)(
            'div',
            { className: 'bar', onMouseDown: function onMouseDown() {
                return _this3.onVolumeProgressBarMouseDown();
              }, onClick: function onClick(e) {
                return _this3.onVolumeProgressBarClick(e);
              } },
            (0, _preact.h)('div', { className: 'progress', style: { height: this.getVolumeProgessHeight() } })
          )
        )
      );
    }
  }]);

  return VolumeControl;
}(_base2.default)) || _class);
exports.default = VolumeControl;

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _preact = __webpack_require__(0);

var _preactRedux = __webpack_require__(1);

var _bindActions = __webpack_require__(3);

var _share = __webpack_require__(10);

var _base = __webpack_require__(2);

var _base2 = _interopRequireDefault(_base);

var _icon = __webpack_require__(4);

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    overlayOpen: state.share.overlayOpen
  };
};

var ShareControl = (_dec = (0, _preactRedux.connect)(mapStateToProps, (0, _bindActions.bindActions)(_share.actions)), _dec(_class = function (_BaseComponent) {
  _inherits(ShareControl, _BaseComponent);

  function ShareControl(obj) {
    _classCallCheck(this, ShareControl);

    return _possibleConstructorReturn(this, (ShareControl.__proto__ || Object.getPrototypeOf(ShareControl)).call(this, { name: 'Share', player: obj.player }));
  }

  _createClass(ShareControl, [{
    key: 'render',
    value: function render(props) {
      return (0, _preact.h)(
        'div',
        { className: 'control-button-container control-share' },
        (0, _preact.h)(
          'button',
          { className: 'control-button control-button-rounded', onClick: function onClick() {
              return props.toggleShareOverlay(!props.overlayOpen);
            }, 'aria-label': 'Share' },
          (0, _preact.h)(_icon2.default, { type: 'share' })
        )
      );
    }
  }]);

  return ShareControl;
}(_base2.default)) || _class);
exports.default = ShareControl;

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _preact = __webpack_require__(0);

var _preactI18n = __webpack_require__(5);

var _preactRedux = __webpack_require__(1);

var _bindActions = __webpack_require__(3);

var _settings = __webpack_require__(23);

var _base = __webpack_require__(2);

var _base2 = _interopRequireDefault(_base);

var _smartContainer = __webpack_require__(25);

var _smartContainer2 = _interopRequireDefault(_smartContainer);

var _smartContainerItem = __webpack_require__(26);

var _smartContainerItem2 = _interopRequireDefault(_smartContainerItem);

var _icon = __webpack_require__(4);

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    videoTracks: state.engine.videoTracks
  };
};

var SettingsControl = (_dec = (0, _preactRedux.connect)(mapStateToProps, (0, _bindActions.bindActions)(_settings.actions)), _dec(_class = function (_BaseComponent) {
  _inherits(SettingsControl, _BaseComponent);

  function SettingsControl(obj) {
    _classCallCheck(this, SettingsControl);

    return _possibleConstructorReturn(this, (SettingsControl.__proto__ || Object.getPrototypeOf(SettingsControl)).call(this, { name: 'Settings', player: obj.player }));
  }

  _createClass(SettingsControl, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setState({ smartContainerOpen: false });
    }
  }, {
    key: 'onControlButtonClick',
    value: function onControlButtonClick() {
      this.setState({ smartContainerOpen: !this.state.smartContainerOpen });
    }
  }, {
    key: 'onSpeedChange',
    value: function onSpeedChange(o) {
      this.props.updateSpeed(o.value);
    }
  }, {
    key: 'onQualityChange',
    value: function onQualityChange(videoTrack) {
      this.player.selectTrack(videoTrack);
    }
  }, {
    key: 'render',
    value: function render(props) {
      var _this2 = this;

      var speedOptions = [{ value: 1, label: 'Auto (360)', active: true }, { value: 2, label: '240' }, { value: 3, label: '144' }];
      var qualityOptions = props.videoTracks.map(function (t) {
        return { label: t.label || t.language || t.bandwidth, active: t.active, value: t };
      });
      return (0, _preact.h)(
        'div',
        { className: 'control-button-container control-settings' },
        (0, _preact.h)(
          _preactI18n.Localizer,
          null,
          (0, _preact.h)(
            'button',
            { 'aria-label': (0, _preact.h)(_preactI18n.Text, { id: 'controls.settings' }), className: this.state.smartContainerOpen ? 'control-button active' : 'control-button', onClick: function onClick() {
                return _this2.onControlButtonClick();
              } },
            (0, _preact.h)(_icon2.default, { type: 'settings' })
          )
        ),
        !this.state.smartContainerOpen ? '' : (0, _preact.h)(
          _smartContainer2.default,
          null,
          props.videoTracks.length <= 0 ? '' : (0, _preact.h)(
            _preactI18n.Localizer,
            null,
            (0, _preact.h)(_smartContainerItem2.default, { label: (0, _preact.h)(_preactI18n.Text, { id: 'settings.quality' }), options: qualityOptions, onSelect: function onSelect(o) {
                return _this2.onQualityChange(o);
              } })
          ),
          (0, _preact.h)(
            _preactI18n.Localizer,
            null,
            (0, _preact.h)(_smartContainerItem2.default, { label: (0, _preact.h)(_preactI18n.Text, { id: 'settings.speed' }), options: speedOptions, onSelect: function onSelect(o) {
                return _this2.onSpeedChange(o);
              } })
          )
        )
      );
    }
  }]);

  return SettingsControl;
}(_base2.default)) || _class);
exports.default = SettingsControl;

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _preact = __webpack_require__(0);

var _preactI18n = __webpack_require__(5);

var _preactRedux = __webpack_require__(1);

var _bindActions = __webpack_require__(3);

var _cvaa = __webpack_require__(11);

var _base = __webpack_require__(2);

var _base2 = _interopRequireDefault(_base);

var _smartContainer = __webpack_require__(25);

var _smartContainer2 = _interopRequireDefault(_smartContainer);

var _smartContainerItem = __webpack_require__(26);

var _smartContainerItem2 = _interopRequireDefault(_smartContainerItem);

var _icon = __webpack_require__(4);

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    audioTracks: state.engine.audioTracks,
    textTracks: state.engine.textTracks,
    overlayOpen: state.cvaa.overlayOpen
  };
};

var LanguageControl = (_dec = (0, _preactRedux.connect)(mapStateToProps, (0, _bindActions.bindActions)(_cvaa.actions)), _dec(_class = function (_BaseComponent) {
  _inherits(LanguageControl, _BaseComponent);

  function LanguageControl(obj) {
    _classCallCheck(this, LanguageControl);

    return _possibleConstructorReturn(this, (LanguageControl.__proto__ || Object.getPrototypeOf(LanguageControl)).call(this, { name: 'LanguageControl', player: obj.player }));
  }

  _createClass(LanguageControl, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setState({ smartContainerOpen: false });
    }
  }, {
    key: 'onControlButtonClick',
    value: function onControlButtonClick() {
      this.setState({ smartContainerOpen: !this.state.smartContainerOpen });
    }
  }, {
    key: 'onAudioChange',
    value: function onAudioChange(audioTrack) {
      this.player.selectTrack(audioTrack);
    }
  }, {
    key: 'onCaptionsChange',
    value: function onCaptionsChange(textTrack) {
      this.player.selectTrack(textTrack);
    }
  }, {
    key: 'render',
    value: function render(props) {
      var _this2 = this;

      var audioOptions = props.audioTracks.map(function (t) {
        return { label: t.label || t.language, active: t.active, value: t };
      });
      var textOptions = props.textTracks.filter(function (t) {
        return t.kind === 'subtitles';
      }).map(function (t) {
        return { label: t.label || t.language, active: t.active, value: t };
      });

      return props.audioTracks.length === 0 && props.audioTracks.length === 0 ? false : (0, _preact.h)(
        'div',
        { className: 'control-button-container control-language' },
        (0, _preact.h)(
          _preactI18n.Localizer,
          null,
          (0, _preact.h)(
            'button',
            { 'aria-label': (0, _preact.h)(_preactI18n.Text, { id: 'controls.language' }), className: this.state.smartContainerOpen ? 'control-button active' : 'control-button', onClick: function onClick() {
                return _this2.onControlButtonClick();
              } },
            (0, _preact.h)(_icon2.default, { type: 'language' })
          )
        ),
        !this.state.smartContainerOpen ? '' : (0, _preact.h)(
          _smartContainer2.default,
          null,
          props.audioTracks.length <= 0 ? '' : (0, _preact.h)(
            _preactI18n.Localizer,
            null,
            (0, _preact.h)(_smartContainerItem2.default, { label: (0, _preact.h)(_preactI18n.Text, { id: 'language.audio' }), options: audioOptions, onSelect: function onSelect(audioTrack) {
                return _this2.onAudioChange(audioTrack);
              } })
          ),
          props.textTracks.length <= 0 ? '' : (0, _preact.h)(
            _preactI18n.Localizer,
            null,
            (0, _preact.h)(_smartContainerItem2.default, { label: (0, _preact.h)(_preactI18n.Text, { id: 'language.captions' }), options: textOptions, onSelect: function onSelect(textTrack) {
                return _this2.onCaptionsChange(textTrack);
              } })
          ),
          props.textTracks.length <= 0 ? '' : (0, _preact.h)(
            'div',
            { className: 'smart-container-item' },
            (0, _preact.h)(
              'a',
              { onClick: function onClick() {
                  return props.toggleCVAAOverlay(!props.overlayOpen);
                } },
              (0, _preact.h)(
                _preactI18n.Text,
                { id: 'language.advanced_captions_settings' },
                'Advanced captions settings'
              )
            )
          )
        )
      );
    }
  }]);

  return LanguageControl;
}(_base2.default)) || _class);
exports.default = LanguageControl;

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _preact = __webpack_require__(0);

var _preactI18n = __webpack_require__(5);

var _preactRedux = __webpack_require__(1);

var _bindActions = __webpack_require__(3);

var _fullscreen = __webpack_require__(21);

var _base = __webpack_require__(2);

var _base2 = _interopRequireDefault(_base);

var _icon = __webpack_require__(4);

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    fullscreen: state.fullscreen.fullscreen
  };
};

var FullscreenControl = (_dec = (0, _preactRedux.connect)(mapStateToProps, (0, _bindActions.bindActions)(_fullscreen.actions)), _dec(_class = function (_BaseComponent) {
  _inherits(FullscreenControl, _BaseComponent);

  function FullscreenControl() {
    _classCallCheck(this, FullscreenControl);

    return _possibleConstructorReturn(this, (FullscreenControl.__proto__ || Object.getPrototypeOf(FullscreenControl)).call(this, { name: 'Fullscreen' }));
  }

  _createClass(FullscreenControl, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this._playerElement = document.getElementsByClassName('player')[0];

      document.addEventListener('webkitfullscreenchange', function () {
        _this2.props.updateFullscreen(document.webkitIsFullScreen);
      });
    }
  }, {
    key: 'enterFullscreen',
    value: function enterFullscreen() {
      this._playerElement.webkitRequestFullscreen();
    }
  }, {
    key: 'exitFullscreen',
    value: function exitFullscreen() {
      document.webkitCancelFullScreen();
    }
  }, {
    key: 'toggleFullscreen',
    value: function toggleFullscreen() {
      this.logger.debug('Toggle fullscreen');
      this.props.fullscreen ? this.exitFullscreen() : this.enterFullscreen();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return (0, _preact.h)(
        'div',
        { className: 'control-button-container control-fullscreen' },
        (0, _preact.h)(
          _preactI18n.Localizer,
          null,
          (0, _preact.h)(
            'button',
            { 'aria-label': (0, _preact.h)(_preactI18n.Text, { id: 'controls.fullscreen' }), className: this.props.fullscreen ? 'control-button is-fullscreen' : 'control-button', onClick: function onClick() {
                return _this3.toggleFullscreen();
              } },
            (0, _preact.h)(_icon2.default, { type: 'maximize' }),
            (0, _preact.h)(_icon2.default, { type: 'minimize' })
          )
        )
      );
    }
  }]);

  return FullscreenControl;
}(_base2.default)) || _class);
exports.default = FullscreenControl;

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _preact = __webpack_require__(0);

var _preactRedux = __webpack_require__(1);

var _base = __webpack_require__(2);

var _base2 = _interopRequireDefault(_base);

var _timeFormat = __webpack_require__(24);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    currentTime: state.seekbar.currentTime,
    duration: state.engine.duration
  };
};

var TimeDisplay = (_dec = (0, _preactRedux.connect)(mapStateToProps), _dec(_class = function (_BaseComponent) {
  _inherits(TimeDisplay, _BaseComponent);

  function TimeDisplay(obj) {
    _classCallCheck(this, TimeDisplay);

    return _possibleConstructorReturn(this, (TimeDisplay.__proto__ || Object.getPrototypeOf(TimeDisplay)).call(this, { name: 'TimeDisplay', player: obj.player, config: obj.config }));
  }

  _createClass(TimeDisplay, [{
    key: 'getTimeDisplay',
    value: function getTimeDisplay() {
      var result = this.props.format ? this.props.format : 'current / total',
          current = (0, _timeFormat.toHHMMSS)(this.props.currentTime),
          total = (0, _timeFormat.toHHMMSS)(this.props.duration),
          left = (0, _timeFormat.toHHMMSS)(this.props.duration - this.props.currentTime);

      result = result.replace(/current/g, current);
      result = result.replace(/total/g, total);
      result = result.replace(/left/g, left);

      return result;
    }
  }, {
    key: 'render',
    value: function render() {
      return (0, _preact.h)(
        'div',
        { className: 'time-display' },
        (0, _preact.h)(
          'span',
          null,
          this.getTimeDisplay()
        )
      );
    }
  }]);

  return TimeDisplay;
}(_base2.default)) || _class);
exports.default = TimeDisplay;

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _preact = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TopBar = function (_Component) {
  _inherits(TopBar, _Component);

  function TopBar() {
    _classCallCheck(this, TopBar);

    return _possibleConstructorReturn(this, (TopBar.__proto__ || Object.getPrototypeOf(TopBar)).apply(this, arguments));
  }

  _createClass(TopBar, [{
    key: 'render',
    value: function render(props) {
      return (0, _preact.h)(
        'div',
        { className: 'top-bar' },
        props.children
      );
    }
  }]);

  return TopBar;
}(_preact.Component);

exports.default = TopBar;

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _preact = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BottomBar = function (_Component) {
  _inherits(BottomBar, _Component);

  function BottomBar() {
    _classCallCheck(this, BottomBar);

    return _possibleConstructorReturn(this, (BottomBar.__proto__ || Object.getPrototypeOf(BottomBar)).apply(this, arguments));
  }

  _createClass(BottomBar, [{
    key: 'render',
    value: function render(props) {
      return (0, _preact.h)(
        'div',
        { className: 'bottom-bar' },
        props.children
      );
    }
  }]);

  return BottomBar;
}(_preact.Component);

exports.default = BottomBar;

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _preact = __webpack_require__(0);

var _preactI18n = __webpack_require__(5);

var _preactRedux = __webpack_require__(1);

var _bindActions = __webpack_require__(3);

var _share = __webpack_require__(10);

var _base = __webpack_require__(2);

var _base2 = _interopRequireDefault(_base);

var _overlay = __webpack_require__(28);

var _overlay2 = _interopRequireDefault(_overlay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    open: state.share.overlayOpen
  };
};

var ShareOverlay = (_dec = (0, _preactRedux.connect)(mapStateToProps, (0, _bindActions.bindActions)(_share.actions)), _dec(_class = function (_BaseComponent) {
  _inherits(ShareOverlay, _BaseComponent);

  function ShareOverlay() {
    _classCallCheck(this, ShareOverlay);

    return _possibleConstructorReturn(this, (ShareOverlay.__proto__ || Object.getPrototypeOf(ShareOverlay)).call(this, { name: 'ShareOverlay' }));
  }

  _createClass(ShareOverlay, [{
    key: 'render',
    value: function render(props) {
      return !props.open ? '' : (0, _preact.h)(
        _overlay2.default,
        { open: props.open, onClose: function onClose() {
            return props.toggleShareOverlay(false);
          }, type: 'share' },
        (0, _preact.h)(
          'div',
          { className: 'title' },
          (0, _preact.h)(_preactI18n.Text, { id: 'share.share_title' })
        ),
        (0, _preact.h)(
          'div',
          { className: 'share-icons' },
          (0, _preact.h)(
            'a',
            { className: 'share-btn facebook-share-btn' },
            (0, _preact.h)(
              'svg',
              { style: 'width:32px;height:32px', viewBox: '0 0 1024 1024' },
              (0, _preact.h)('path', { fill: '#fff', d: 'M432 405.333h-80v106.667h80v320h133.333v-320h97.12l9.547-106.667h-106.667v-44.453c0-25.467 5.12-35.547 29.733-35.547h76.933v-133.333h-101.547c-95.893 0-138.453 42.213-138.453 123.067v90.267z' })
            )
          ),
          (0, _preact.h)(
            'a',
            { className: 'share-btn twitter-share-btn' },
            (0, _preact.h)(
              'svg',
              { style: 'width:32px;height:32px', viewBox: '0 0 1024 1024' },
              (0, _preact.h)('path', { fill: '#fff', d: 'M832 316.614c-23.547 10.29-48.853 17.221-75.413 20.345 27.12-15.987 47.947-41.319 57.733-71.508-25.36 14.806-53.467 25.568-83.387 31.37-23.92-25.122-58.080-40.82-95.84-40.82-84.773 0-147.067 77.861-127.92 158.687-109.093-5.381-205.84-56.833-270.613-135.035-34.4 58.094-17.84 134.090 40.613 172.574-21.493-0.683-41.76-6.484-59.44-16.171-1.44 59.879 42.16 115.898 105.307 128.368-18.48 4.935-38.72 6.090-59.307 2.205 16.693 51.347 65.173 88.702 122.667 89.752-55.2 42.605-124.747 61.637-194.4 53.552 58.107 36.673 127.147 58.067 201.28 58.067 243.787 0 381.52-202.684 373.2-384.473 25.653-18.244 47.92-41.004 65.52-66.914v0z' })
            )
          ),
          (0, _preact.h)(
            'a',
            { className: 'share-btn google-plus-share-btn' },
            (0, _preact.h)(
              'svg',
              { style: 'width:32px;height:32px', viewBox: '0 0 1024 1024' },
              (0, _preact.h)('path', { fill: '#fff', d: 'M352 556.8h127.040c-5.12 32.928-38.4 96.64-127.040 96.64-76.48 0-138.88-63.328-138.88-141.44 0-78.080 62.4-141.44 138.88-141.44 43.52 0 72.64 18.56 89.28 34.56l60.8-58.56c-39.040-36.48-89.6-58.56-150.080-58.56-123.84 0-224 100.16-224 224s100.16 224 224 224c129.28 0 215.072-90.88 215.072-218.88 0-14.72-1.632-25.92-3.552-37.12h-211.52v76.8zM800 544v96h-64v-96h-96v-64h96v-96h64v96h96v64h-96z' })
            )
          ),
          (0, _preact.h)(
            'a',
            { className: 'share-btn linkedin-share-btn' },
            (0, _preact.h)(
              'svg',
              { style: 'width:32px;height:32px', viewBox: '0 0 1024 1024' },
              (0, _preact.h)('path', { fill: '#fff', d: 'M324.8 290.087c0 36.506-29.6 66.087-66.133 66.087s-66.133-29.581-66.133-66.087c0-36.48 29.6-66.087 66.133-66.087s66.133 29.607 66.133 66.087zM325.333 409.043h-133.333v422.957h133.333v-422.957zM538.187 409.043h-132.48v422.957h132.507v-222.026c0-123.45 160.773-133.549 160.773 0v222.026h133.013v-267.811c0-208.306-237.92-200.719-293.813-98.179v-56.967z' })
            )
          ),
          (0, _preact.h)(
            'a',
            { className: 'share-btn email-share-btn' },
            (0, _preact.h)(
              'svg',
              { style: 'width:32px;height:32px', viewBox: '0 0 1024 1024' },
              (0, _preact.h)('path', { fill: '#fff', d: 'M256 768c-35.346 0-64-28.654-64-64v-352c0-35.346 28.654-64 64-64h512c35.346 0 64 28.654 64 64v352c0 35.346-28.654 64-64 64h-512zM512 467.488l147.52-115.488h-295.040l147.52 115.488zM748.48 352l-211.2 179.2c-0.713 1.308-1.572 2.532-2.56 3.648-12.707 12.158-32.733 12.158-45.44 0-0.988-1.116-1.847-2.34-2.56-3.648l-211.2-179.2h-19.52v352h512v-352h-19.52z' })
            )
          ),
          (0, _preact.h)(
            'a',
            { className: 'share-btn embed-share-btn' },
            (0, _preact.h)(
              'svg',
              { style: 'width:32px;height:32px', viewBox: '0 0 1024 1024' },
              (0, _preact.h)('path', { fill: '#fff', d: 'M377.989 579.335c12.669 12.904 12.669 33.777 0 46.68-12.733 12.969-33.427 12.969-46.16 0l-104.727-106.667c-12.669-12.904-12.669-33.777 0-46.68l104.727-106.667c12.733-12.969 33.427-12.969 46.16 0 12.669 12.904 12.669 33.777 0 46.68l-81.812 83.327 81.812 83.327zM646.011 412.68c-12.669-12.904-12.669-33.777 0-46.68 12.733-12.969 33.427-12.969 46.16 0l104.727 106.667c12.669 12.904 12.669 33.777 0 46.68l-104.727 106.667c-12.733 12.969-33.427 12.969-46.16 0-12.669-12.904-12.669-33.777 0-46.68l81.812-83.327-81.812-83.327zM572.293 250.6c17.455 4.445 28.025 22.388 23.686 40.066l-104.727 426.669c-4.349 17.719-22.048 28.535-39.545 24.079-17.455-4.445-28.025-22.388-23.686-40.066l104.727-426.669c4.349-17.719 22.048-28.535 39.545-24.079z' })
            )
          )
        ),
        (0, _preact.h)(
          'div',
          null,
          (0, _preact.h)(
            'div',
            { className: 'form-group has-icon', style: 'width: 300px;' },
            (0, _preact.h)('input', { type: 'text', placeholder: 'Share URL', className: 'form-control', value: 'https://cdnapisec.kaltura.com/index.php?assetId=123456', readOnly: true }),
            (0, _preact.h)(
              'svg',
              { className: 'icon', style: 'width:32px;height:32px;', viewBox: '0 0 1024 1024' },
              (0, _preact.h)('path', { d: 'M355.028 445.537c12.497 12.497 12.497 32.758 0 45.255s-32.758 12.497-45.255 0l-24.141-24.141c-49.92-49.92-49.832-130.999 0.094-180.925 49.984-49.984 130.995-50.025 180.955-0.064l113.266 113.266c49.964 49.964 49.935 130.955-0.064 180.955-12.497 12.497-32.758 12.497-45.255 0s-12.497-32.758 0-45.255c25.013-25.013 25.027-65.482 0.064-90.445l-113.266-113.266c-24.957-24.957-65.445-24.936-90.445 0.064-24.955 24.955-24.998 65.511-0.094 90.416l24.141 24.141zM668.972 578.463c-12.497-12.497-12.497-32.758 0-45.255s32.758-12.497 45.255 0l24.141 24.141c49.92 49.92 49.832 130.999-0.094 180.925-49.984 49.984-130.995 50.025-180.955 0.064l-113.266-113.266c-49.964-49.964-49.935-130.955 0.064-180.955 12.497-12.497 32.758-12.497 45.255 0s12.497 32.758 0 45.255c-25.013 25.013-25.027 65.482-0.064 90.445l113.266 113.266c24.957 24.957 65.445 24.936 90.445-0.064 24.955-24.955 24.998-65.511 0.094-90.416l-24.141-24.141z' })
            )
          )
        ),
        (0, _preact.h)(
          'a',
          null,
          (0, _preact.h)(_preactI18n.Text, { id: 'share.link_options' })
        )
      );
    }
  }]);

  return ShareOverlay;
}(_base2.default)) || _class);
exports.default = ShareOverlay;

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _dec, _class;

var _preact = __webpack_require__(0);

var _preactRedux = __webpack_require__(1);

var _bindActions = __webpack_require__(3);

var _cvaa = __webpack_require__(11);

var _shell = __webpack_require__(7);

var _base = __webpack_require__(2);

var _base2 = _interopRequireDefault(_base);

var _overlay = __webpack_require__(28);

var _overlay2 = _interopRequireDefault(_overlay);

var _dropdownMenu = __webpack_require__(27);

var _dropdownMenu2 = _interopRequireDefault(_dropdownMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    open: state.cvaa.overlayOpen,
    style: state.cvaa.style
  };
};

var CVAAOverlay = (_dec = (0, _preactRedux.connect)(mapStateToProps, (0, _bindActions.bindActions)(_extends({}, _cvaa.actions, _shell.actions))), _dec(_class = function (_BaseComponent) {
  _inherits(CVAAOverlay, _BaseComponent);

  function CVAAOverlay() {
    _classCallCheck(this, CVAAOverlay);

    return _possibleConstructorReturn(this, (CVAAOverlay.__proto__ || Object.getPrototypeOf(CVAAOverlay)).call(this, { name: 'CVAAOverlay' }));
  }

  _createClass(CVAAOverlay, [{
    key: 'changeCaptionsStyle',
    value: function changeCaptionsStyle(style) {
      this.props.removePlayerClass('captions-' + this.props.style);
      this.props.addPlayerClass('captions-' + style);
      this.props.updateCaptionsStyle(style);
      this.props.toggleCVAAOverlay(false);
    }
  }, {
    key: 'render',
    value: function render(props) {
      var _this2 = this;

      var speedOptions = [{ value: 1, label: 'Auto (360)', active: true }, { value: 2, label: '240' }, { value: 3, label: '144' }];
      return !props.open ? '' : (0, _preact.h)(
        _overlay2.default,
        { open: props.open, onClose: function onClose() {
            return props.toggleCVAAOverlay(false);
          }, type: 'cvaa' },
        (0, _preact.h)(
          'div',
          { className: 'title' },
          'Advanced captions settings'
        ),
        (0, _preact.h)(
          'div',
          null,
          (0, _preact.h)(
            'div',
            { className: 'sample', onClick: function onClick() {
                return _this2.changeCaptionsStyle('default');
              } },
            'Sample'
          ),
          (0, _preact.h)(
            'div',
            { className: 'sample black-bg', onClick: function onClick() {
                return _this2.changeCaptionsStyle('black-bg');
              } },
            'Sample'
          ),
          (0, _preact.h)(
            'div',
            { className: 'sample yellow-text', onClick: function onClick() {
                return _this2.changeCaptionsStyle('yellow-text');
              } },
            'Sample'
          )
        ),
        (0, _preact.h)(
          'a',
          { className: 'button-save-cvaa' },
          'Set custom caption'
        )
      );
    }
  }]);

  return CVAAOverlay;
}(_base2.default)) || _class);
exports.default = CVAAOverlay;

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base = __webpack_require__(2);

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var KeyboardControl = function (_BaseComponent) {
  _inherits(KeyboardControl, _BaseComponent);

  // _playerElement: HTMLElement;

  function KeyboardControl(obj) {
    _classCallCheck(this, KeyboardControl);

    // this._playerElement = document.getElementsByClassName('player')[0];

    var _this = _possibleConstructorReturn(this, (KeyboardControl.__proto__ || Object.getPrototypeOf(KeyboardControl)).call(this, { name: 'Keyboard', player: obj.player }));

    document.body.onkeydown = function (e) {
      var time = void 0,
          newVolume = void 0;
      switch (e.which) {
        case 32:
          // space
          _this.logger.debug("Keydown space");
          _this.player.paused ? _this.player.play() : _this.player.pause();
          break;

        case 38:
          // up
          _this.logger.debug("Keydown up");
          newVolume = Math.round(_this.player.volume * 100) + 5;
          _this.logger.debug('Changing volume. ' + _this.player.volume + ' => ' + newVolume);
          if (_this.player.muted) {
            _this.player.muted = false;
          }
          _this.player.volume = newVolume / 100;
          break;

        case 40:
          // down
          _this.logger.debug("Keydown down");
          newVolume = Math.round(_this.player.volume * 100) - 5;
          if (newVolume < 5) {
            _this.player.muted = true;
            return;
          }
          _this.logger.debug('Changing volume. ' + _this.player.volume + ' => ' + newVolume);
          _this.player.volume = newVolume / 100;
          break;

        case 37:
          // left
          _this.logger.debug("Keydown left");
          time = _this.player.currentTime - 5 > 0 ? _this.player.currentTime - 5 : 0;
          _this.player.currentTime = time;
          break;

        case 39:
          // right
          _this.logger.debug("Keydown right");
          time = _this.player.currentTime + 5 > _this.player.duration ? _this.player.duration : _this.player.currentTime + 5;
          _this.player.currentTime = time;
          break;

        default:
          return;
      }
    };

    _this.disableKeyboardCommandsOnControls();
    return _this;
  }

  _createClass(KeyboardControl, [{
    key: 'disableKeyboardCommandsOnControls',
    value: function disableKeyboardCommandsOnControls() {
      var controlButtonsElements = Array.from(document.getElementsByClassName('control-button'));
      controlButtonsElements.forEach(function (element) {
        element.onkeydown = function (e) {
          return e.preventDefault();
        };
      });
    }
  }]);

  return KeyboardControl;
}(_base2.default);

exports.default = KeyboardControl;

/***/ })
/******/ ]);
});
//# sourceMappingURL=playkit-ui.js.map