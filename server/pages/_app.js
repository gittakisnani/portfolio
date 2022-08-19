"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 8418:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__(7197);
// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__(6466);
;// CONCATENATED MODULE: ./components/ScrollButton.tsx




const ScrollButton = ()=>{
    const scrollBtnRef = (0,external_react_.useRef)(null);
    const handleScrollToTop = ()=>{
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };
    (0,external_react_.useEffect)(()=>{
        const handleScroll = ()=>{
            const { pageYOffset , scrollY  } = window;
            pageYOffset > 200 || scrollY > 200 ? scrollBtnRef.current?.classList.remove("hide") : scrollBtnRef.current?.classList.add("hide");
        };
        document.addEventListener("scroll", handleScroll);
        // remove event on unmount to prevent a memory leak
        ()=>document.removeEventListener("scroll", handleScroll);
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx("button", {
        title: "Scroll to top",
        ref: scrollBtnRef,
        onClick: handleScrollToTop,
        className: "scroll",
        children: /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
            icon: free_solid_svg_icons_.faAngleUp
        })
    });
};
/* harmony default export */ const components_ScrollButton = (ScrollButton);

;// CONCATENATED MODULE: ./pages/_app.tsx



function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_ScrollButton, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        ]
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 6466:
/***/ ((module) => {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ 7197:
/***/ ((module) => {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(8418));
module.exports = __webpack_exports__;

})();