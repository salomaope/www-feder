(() => {
var exports = {};
exports.id = 931;
exports.ids = [931];
exports.modules = {

/***/ 8038:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react");

/***/ }),

/***/ 8704:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react-dom/server-rendering-stub");

/***/ }),

/***/ 7897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react-server-dom-webpack/client");

/***/ }),

/***/ 5868:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/app-render");

/***/ }),

/***/ 1844:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/get-segment-param");

/***/ }),

/***/ 6624:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/future/helpers/interception-routes");

/***/ }),

/***/ 5281:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/future/route-modules/route-module");

/***/ }),

/***/ 7085:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context");

/***/ }),

/***/ 199:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/hash");

/***/ }),

/***/ 9569:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/hooks-client-context");

/***/ }),

/***/ 893:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix");

/***/ }),

/***/ 7887:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/handle-smooth-scroll");

/***/ }),

/***/ 8735:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot");

/***/ }),

/***/ 8231:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path");

/***/ }),

/***/ 4614:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix");

/***/ }),

/***/ 3750:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash");

/***/ }),

/***/ 9618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/server-inserted-html");

/***/ }),

/***/ 9488:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GlobalError: () => (/* reexport default from dynamic */ next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2___default.a),
/* harmony export */   __next_app__: () => (/* binding */ __next_app__),
/* harmony export */   originalPathname: () => (/* binding */ originalPathname),
/* harmony export */   pages: () => (/* binding */ pages),
/* harmony export */   routeModule: () => (/* binding */ routeModule),
/* harmony export */   tree: () => (/* binding */ tree)
/* harmony export */ });
/* harmony import */ var next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7262);
/* harmony import */ var next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9513);
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1823);
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2502);
/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__) if(["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
// @ts-ignore this need to be imported from next/dist to be external


const AppPageRouteModule = next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__.AppPageRouteModule;
// We inject the tree and pages here so that we can use them in the route
// module.
const tree = {
        children: [
        '',
        {
        children: ['__PAGE__', {}, {
          page: [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 2838)), "/home/project/app/page.tsx"],
          
        }]
      },
        {
        'layout': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 1921)), "/home/project/app/layout.tsx"],
'not-found': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 5493, 23)), "next/dist/client/components/not-found-error"],
        
      }
      ]
      }.children;
const pages = ["/home/project/app/page.tsx"];

// @ts-expect-error - replaced by webpack/turbopack loader

const __next_app_require__ = __webpack_require__
const __next_app_load_chunk__ = () => Promise.resolve()
const originalPathname = "/page";
const __next_app__ = {
    require: __next_app_require__,
    loadChunk: __next_app_load_chunk__
};

// Create and export the route module that will be consumed.
const routeModule = new AppPageRouteModule({
    definition: {
        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__/* .RouteKind */ .x.APP_PAGE,
        page: "/page",
        pathname: "/",
        // The following aren't used in production.
        bundlePath: "",
        filename: "",
        appPaths: []
    },
    userland: {
        loaderTree: tree
    }
});

//# sourceMappingURL=app-page.js.map

/***/ }),

/***/ 8462:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6514, 23))

/***/ }),

/***/ 7730:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 4793))

/***/ }),

/***/ 9026:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 2987, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 831, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6926, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 4282, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6505, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 1232, 23))

/***/ }),

/***/ 6514:
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/next/dist/build/webpack/loaders/next-swc-loader.js):\nNonErrorEmittedError: (Emitted value instead of an instance of Error) \n  ! Plugin is not supported with current @swc/core. Plugin transform will be skipped.\n\n  x NEXT_RSC_ERR_CLIENT_METADATA_EXPORT: metadata\n    ,-[/home/project/app/layout.tsx:4:1]\n  4 | import { ThemeProvider } from 'next-themes'\n  5 | import './globals.css'\n  6 | \n  7 | export const metadata: Metadata = {\n    :              ^^^^^^^^\n  8 |   title: 'Federal Associados - Você conectado',\n  9 |   description: 'Reduza sua conta de internet móvel em até 60% com nossos planos exclusivos. Obtenha até 300GB de internet, e com apps que não consomem sua franquia.',\n 10 |   keywords: 'internet móvel, planos de celular, economia, Federal Associados',\n    `----\n\n    at new WebpackError (/home/project/node_modules/next/dist/compiled/webpack/bundle5.js:28:493185)\n    at new NonErrorEmittedError (/home/project/node_modules/next/dist/compiled/webpack/bundle5.js:28:391785)\n    at processResult (/home/project/node_modules/next/dist/compiled/webpack/bundle5.js:28:398533)\n    at eval (/home/project/node_modules/next/dist/compiled/webpack/bundle5.js:28:400319)\n    at eval (/home/project/node_modules/next/dist/compiled/loader-runner/LoaderRunner.js:1:8720)\n    at eval (/home/project/node_modules/next/dist/compiled/loader-runner/LoaderRunner.js:1:5903)\n    at r.callback (/home/project/node_modules/next/dist/compiled/loader-runner/LoaderRunner.js:1:4114)\n    at eval (/home/project/node_modules/next/dist/build/webpack/loaders/next-swc-loader.js:176:9)");

/***/ }),

/***/ 4793:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home)
});

;// CONCATENATED MODULE: external "next/dist/compiled/react/jsx-runtime"
const jsx_runtime_namespaceObject = require("next/dist/compiled/react/jsx-runtime");
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/phone.js
var phone = __webpack_require__(4571);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/menu.js
var menu = __webpack_require__(7382);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/x.js
var x = __webpack_require__(6206);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
;// CONCATENATED MODULE: ./app/components/Header.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 




function Header() {
    const [isMenuOpen, setIsMenuOpen] = (0,react_.useState)(false);
    return /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("header", {
        className: "fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-lg",
        children: /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("div", {
                    className: "flex justify-between items-center py-4",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("div", {
                            className: "flex items-center space-x-3",
                            children: [
                                /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("img", {
                                    src: "https://federalassociadoscadastro.com/wp-content/uploads/2024/01/Logo-com-fundo-transparente.png",
                                    alt: "Federal Associados",
                                    className: "h-12 w-auto"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("h1", {
                                            className: "text-xl font-bold text-gray-900",
                                            children: "Federal Associados"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("p", {
                                            className: "text-sm text-gray-600",
                                            children: "Voc\xea conectado"
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("nav", {
                            className: "hidden md:flex items-center space-x-8",
                            children: [
                                /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("a", {
                                    href: "#planos",
                                    className: "text-gray-700 hover:text-blue-600 transition-colors",
                                    children: "Planos"
                                }),
                                /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("a", {
                                    href: "#beneficios",
                                    className: "text-gray-700 hover:text-blue-600 transition-colors",
                                    children: "Benef\xedcios"
                                }),
                                /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("a", {
                                    href: "#faq",
                                    className: "text-gray-700 hover:text-blue-600 transition-colors",
                                    children: "FAQ"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("a", {
                                    href: "tel:21999293221",
                                    className: "flex items-center space-x-2 btn-primary",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(phone/* default */.Z, {
                                            className: "w-4 h-4"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("span", {
                                            children: "(21) 99929-3221"
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("button", {
                            className: "md:hidden p-2",
                            onClick: ()=>setIsMenuOpen(!isMenuOpen),
                            children: isMenuOpen ? /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(x/* default */.Z, {
                                className: "w-6 h-6"
                            }) : /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(menu/* default */.Z, {
                                className: "w-6 h-6"
                            })
                        })
                    ]
                }),
                isMenuOpen && /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("div", {
                    className: "md:hidden py-4 border-t",
                    children: /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("nav", {
                        className: "flex flex-col space-y-4",
                        children: [
                            /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("a", {
                                href: "#planos",
                                className: "text-gray-700 hover:text-blue-600 transition-colors",
                                children: "Planos"
                            }),
                            /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("a", {
                                href: "#beneficios",
                                className: "text-gray-700 hover:text-blue-600 transition-colors",
                                children: "Benef\xedcios"
                            }),
                            /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("a", {
                                href: "#faq",
                                className: "text-gray-700 hover:text-blue-600 transition-colors",
                                children: "FAQ"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("a", {
                                href: "tel:21999293221",
                                className: "flex items-center justify-center space-x-2 btn-primary w-full",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(phone/* default */.Z, {
                                        className: "w-4 h-4"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("span", {
                                        children: "(21) 99929-3221"
                                    })
                                ]
                            })
                        ]
                    })
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/smartphone.js
var smartphone = __webpack_require__(8674);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/wifi.js
var wifi = __webpack_require__(4172);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/trending-down.js
var trending_down = __webpack_require__(1817);
;// CONCATENATED MODULE: ./app/components/Hero.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 



function Hero() {
    const handleCTAClick = ()=>{
        window.open("https://bit.ly/contatofederalassociados", "_blank");
    };
    return /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("section", {
        className: "pt-24 pb-16 gradient-bg text-white overflow-hidden",
        children: /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("div", {
                className: "grid lg:grid-cols-2 gap-12 items-center",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("div", {
                        className: "animate-fade-in",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("h1", {
                                className: "text-4xl md:text-6xl font-bold leading-tight mb-6",
                                children: [
                                    "Reduza sua conta de",
                                    /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("span", {
                                        className: "block text-yellow-300",
                                        children: "internet m\xf3vel"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("span", {
                                        className: "block",
                                        children: "em at\xe9 60%"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("p", {
                                className: "text-xl md:text-2xl mb-8 text-white/90",
                                children: "Obtenha at\xe9 300GB de internet, com apps que n\xe3o consomem sua franquia"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("div", {
                                className: "flex flex-col sm:flex-row gap-4 mb-12",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("button", {
                                        onClick: handleCTAClick,
                                        className: "btn-secondary text-lg px-8 py-4",
                                        children: "QUERO ECONOMIZAR AGORA MESMO"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("button", {
                                        onClick: ()=>window.open("https://bit.ly/DetalhesCampanhaFederal", "_blank"),
                                        className: "bg-white/20 hover:bg-white/30 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 backdrop-blur-sm",
                                        children: "Falar com um Especialista"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("div", {
                                className: "grid grid-cols-3 gap-6 text-center",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("div", {
                                        className: "animate-slide-up",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("div", {
                                                className: "bg-white/20 rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center backdrop-blur-sm",
                                                children: /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(trending_down/* default */.Z, {
                                                    className: "w-8 h-8"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("p", {
                                                className: "text-sm font-semibold",
                                                children: "At\xe9 60% de economia"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("div", {
                                        className: "animate-slide-up",
                                        style: {
                                            animationDelay: "0.2s"
                                        },
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("div", {
                                                className: "bg-white/20 rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center backdrop-blur-sm",
                                                children: /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(wifi/* default */.Z, {
                                                    className: "w-8 h-8"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("p", {
                                                className: "text-sm font-semibold",
                                                children: "At\xe9 300GB"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("div", {
                                        className: "animate-slide-up",
                                        style: {
                                            animationDelay: "0.4s"
                                        },
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("div", {
                                                className: "bg-white/20 rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center backdrop-blur-sm",
                                                children: /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(smartphone/* default */.Z, {
                                                    className: "w-8 h-8"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("p", {
                                                className: "text-sm font-semibold",
                                                children: "Apps ilimitados"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("div", {
                        className: "relative animate-fade-in",
                        children: [
                            /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("div", {
                                className: "relative z-10",
                                children: /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("img", {
                                    src: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=600",
                                    alt: "Pessoa usando smartphone",
                                    className: "rounded-2xl shadow-2xl w-full max-w-md mx-auto"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("div", {
                                className: "absolute -top-4 -right-4 w-72 h-72 bg-yellow-300/20 rounded-full blur-3xl"
                            }),
                            /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("div", {
                                className: "absolute -bottom-4 -left-4 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl"
                            })
                        ]
                    })
                ]
            })
        })
    });
}

// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/check.js
var check = __webpack_require__(1264);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/star.js
var star = __webpack_require__(7932);
;// CONCATENATED MODULE: ./app/components/Plans.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 



function Plans() {
    const [activeTab, setActiveTab] = (0,react_.useState)("individual");
    const plans = {
        individual: [
            {
                name: "Plano B\xe1sico",
                price: "R$ 29,90",
                originalPrice: "R$ 49,90",
                data: "50GB",
                features: [
                    "WhatsApp, Instagram e Facebook ilimitados",
                    "Liga\xe7\xf5es ilimitadas",
                    "SMS ilimitado",
                    "Suporte 24h"
                ],
                popular: false
            },
            {
                name: "Plano Premium",
                price: "R$ 49,90",
                originalPrice: "R$ 89,90",
                data: "150GB",
                features: [
                    "Todos os apps sociais ilimitados",
                    "YouTube e Netflix sem consumir franquia",
                    "Liga\xe7\xf5es ilimitadas",
                    "SMS ilimitado",
                    "Suporte priorit\xe1rio 24h",
                    "Portabilidade gratuita"
                ],
                popular: true
            },
            {
                name: "Plano Ultra",
                price: "R$ 79,90",
                originalPrice: "R$ 149,90",
                data: "300GB",
                features: [
                    "Internet ultra-r\xe1pida",
                    "Todos os apps ilimitados",
                    "Streaming sem limite",
                    "Liga\xe7\xf5es internacionais",
                    "SMS ilimitado",
                    "Suporte VIP 24h",
                    "Portabilidade gratuita",
                    "Desconto em fam\xedlia"
                ],
                popular: false
            }
        ],
        family: [
            {
                name: "Fam\xedlia Conectada",
                price: "R$ 89,90",
                originalPrice: "R$ 159,90",
                data: "200GB compartilhados",
                features: [
                    "4 linhas inclu\xeddas",
                    "Apps sociais ilimitados",
                    "Controle parental",
                    "Liga\xe7\xf5es ilimitadas",
                    "SMS ilimitado para todos",
                    "Suporte familiar 24h"
                ],
                popular: false
            },
            {
                name: "Fam\xedlia Premium",
                price: "R$ 149,90",
                originalPrice: "R$ 249,90",
                data: "500GB compartilhados",
                features: [
                    "6 linhas inclu\xeddas",
                    "Todos os apps ilimitados",
                    "Streaming premium",
                    "Controle parental avan\xe7ado",
                    "Liga\xe7\xf5es internacionais",
                    "SMS ilimitado para todos",
                    "Suporte VIP familiar",
                    "Backup em nuvem"
                ],
                popular: true
            }
        ]
    };
    const handlePlanSelect = ()=>{
        window.open("https://bit.ly/contatofederalassociados", "_blank");
    };
    return /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("section", {
        id: "planos",
        className: "py-20 bg-gray-50",
        children: /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("div", {
                    className: "text-center mb-16",
                    children: [
                        /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("h2", {
                            className: "text-4xl md:text-5xl font-bold text-gray-900 mb-6",
                            children: "Escolha seu plano ideal"
                        }),
                        /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("p", {
                            className: "text-xl text-gray-600 max-w-3xl mx-auto",
                            children: "Planos pensados para voc\xea economizar sem abrir m\xe3o da qualidade"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("div", {
                    className: "flex justify-center mb-12",
                    children: /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("div", {
                        className: "bg-white rounded-lg p-1 shadow-lg",
                        children: [
                            /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("button", {
                                onClick: ()=>setActiveTab("individual"),
                                className: `px-8 py-3 rounded-md font-semibold transition-all duration-300 ${activeTab === "individual" ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg" : "text-gray-600 hover:text-gray-900"}`,
                                children: "Planos Individuais"
                            }),
                            /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("button", {
                                onClick: ()=>setActiveTab("family"),
                                className: `px-8 py-3 rounded-md font-semibold transition-all duration-300 ${activeTab === "family" ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg" : "text-gray-600 hover:text-gray-900"}`,
                                children: "Planos Fam\xedlia"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("div", {
                    className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8",
                    children: plans[activeTab].map((plan, index)=>/*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("div", {
                            className: `relative card hover:scale-105 transition-all duration-300 ${plan.popular ? "ring-2 ring-purple-500 shadow-2xl" : ""}`,
                            children: [
                                plan.popular && /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("div", {
                                    className: "absolute -top-4 left-1/2 transform -translate-x-1/2",
                                    children: /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("div", {
                                        className: "bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-1",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(star/* default */.Z, {
                                                className: "w-4 h-4"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("span", {
                                                children: "Mais Popular"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("div", {
                                    className: "text-center mb-6",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("h3", {
                                            className: "text-2xl font-bold text-gray-900 mb-2",
                                            children: plan.name
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("div", {
                                            className: "mb-4",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("span", {
                                                    className: "text-4xl font-bold text-purple-600",
                                                    children: plan.price
                                                }),
                                                /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("span", {
                                                    className: "text-gray-500 ml-2",
                                                    children: "/m\xeas"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("div", {
                                            className: "text-sm text-gray-500 line-through mb-2",
                                            children: [
                                                "De ",
                                                plan.originalPrice
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("div", {
                                            className: "text-lg font-semibold text-blue-600 mb-4",
                                            children: plan.data
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("ul", {
                                    className: "space-y-3 mb-8",
                                    children: plan.features.map((feature, featureIndex)=>/*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("li", {
                                            className: "flex items-start space-x-3",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(check/* default */.Z, {
                                                    className: "w-5 h-5 text-green-500 mt-0.5 flex-shrink-0"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("span", {
                                                    className: "text-gray-700",
                                                    children: feature
                                                })
                                            ]
                                        }, featureIndex))
                                }),
                                /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("button", {
                                    onClick: handlePlanSelect,
                                    className: `w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${plan.popular ? "btn-secondary" : "bg-gray-900 hover:bg-gray-800 text-white"}`,
                                    children: "Escolher Plano"
                                })
                            ]
                        }, plan.name))
                }),
                /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("div", {
                    className: "text-center mt-12",
                    children: [
                        /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("p", {
                            className: "text-gray-600 mb-4",
                            children: "N\xe3o encontrou o plano ideal? Fale conosco!"
                        }),
                        /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("button", {
                            onClick: ()=>window.open("https://bit.ly/DetalhesCampanhaFederal", "_blank"),
                            className: "btn-primary",
                            children: "Falar com Especialista"
                        })
                    ]
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/shield.js
var shield = __webpack_require__(4901);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/zap.js
var zap = __webpack_require__(6494);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/users.js
var users = __webpack_require__(1672);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/headphones.js
var headphones = __webpack_require__(1516);
;// CONCATENATED MODULE: ./app/components/Benefits.tsx







function Benefits() {
    const benefits = [
        {
            icon: trending_down/* default */.Z,
            title: "Economia Real",
            description: "Reduza sua conta em at\xe9 60% comparado \xe0s operadoras tradicionais"
        },
        {
            icon: zap/* default */.Z,
            title: "Internet Ultra R\xe1pida",
            description: "Conex\xe3o 4G/5G de alta velocidade para todas as suas necessidades"
        },
        {
            icon: smartphone/* default */.Z,
            title: "Apps Ilimitados",
            description: "WhatsApp, Instagram, Facebook e muito mais sem consumir sua franquia"
        },
        {
            icon: shield/* default */.Z,
            title: "Sem Pegadinhas",
            description: "Transpar\xeancia total, sem taxas ocultas ou surpresas na conta"
        },
        {
            icon: users/* default */.Z,
            title: "Portabilidade Gratuita",
            description: "Mantenha seu n\xfamero atual sem custos adicionais"
        },
        {
            icon: headphones/* default */.Z,
            title: "Suporte 24h",
            description: "Atendimento especializado dispon\xedvel todos os dias, a qualquer hora"
        }
    ];
    return /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("section", {
        id: "beneficios",
        className: "py-20 bg-white",
        children: /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("div", {
                    className: "text-center mb-16",
                    children: [
                        /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("h2", {
                            className: "text-4xl md:text-5xl font-bold text-gray-900 mb-6",
                            children: "Por que escolher a Federal Associados?"
                        }),
                        /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("p", {
                            className: "text-xl text-gray-600 max-w-3xl mx-auto",
                            children: "Oferecemos muito mais que internet m\xf3vel. Oferecemos uma experi\xeancia completa."
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("div", {
                    className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8",
                    children: benefits.map((benefit, index)=>/*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("div", {
                            className: "card text-center hover:scale-105 transition-all duration-300 group",
                            children: [
                                /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("div", {
                                    className: "bg-gradient-to-r from-blue-500 to-purple-600 rounded-full p-4 w-16 h-16 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300",
                                    children: /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(benefit.icon, {
                                        className: "w-8 h-8 text-white"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("h3", {
                                    className: "text-xl font-bold text-gray-900 mb-4",
                                    children: benefit.title
                                }),
                                /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("p", {
                                    className: "text-gray-600 leading-relaxed",
                                    children: benefit.description
                                })
                            ]
                        }, benefit.title))
                }),
                /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("div", {
                    className: "mt-16 text-center",
                    children: /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("div", {
                        className: "bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12",
                        children: [
                            /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("h3", {
                                className: "text-3xl font-bold text-gray-900 mb-4",
                                children: "Mais de 50.000 clientes satisfeitos"
                            }),
                            /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("p", {
                                className: "text-xl text-gray-600 mb-8",
                                children: "Junte-se a milhares de pessoas que j\xe1 economizam com nossos planos"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("div", {
                                className: "grid grid-cols-1 md:grid-cols-3 gap-8",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("div", {
                                        className: "text-center",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("div", {
                                                className: "text-4xl font-bold text-purple-600 mb-2",
                                                children: "98%"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("div", {
                                                className: "text-gray-600",
                                                children: "Satisfa\xe7\xe3o dos clientes"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("div", {
                                        className: "text-center",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("div", {
                                                className: "text-4xl font-bold text-purple-600 mb-2",
                                                children: "24h"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("div", {
                                                className: "text-gray-600",
                                                children: "Suporte dispon\xedvel"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("div", {
                                        className: "text-center",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("div", {
                                                className: "text-4xl font-bold text-purple-600 mb-2",
                                                children: "60%"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("div", {
                                                className: "text-gray-600",
                                                children: "Economia m\xe9dia"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/chevron-down.js
var chevron_down = __webpack_require__(9458);
;// CONCATENATED MODULE: ./app/components/FAQ.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 


function FAQ() {
    const [openItem, setOpenItem] = (0,react_.useState)(0);
    const faqs = [
        {
            question: "Como funciona a portabilidade do meu n\xfamero?",
            answer: "A portabilidade \xe9 totalmente gratuita e simples. Nossa equipe cuida de todo o processo para voc\xea. Basta nos fornecer alguns dados e em at\xe9 3 dias \xfateis seu n\xfamero estar\xe1 funcionando com nossos planos, sem interrup\xe7\xe3o do servi\xe7o."
        },
        {
            question: "Quais apps n\xe3o consomem minha franquia de dados?",
            answer: "Dependendo do seu plano, apps como WhatsApp, Instagram, Facebook, Twitter, YouTube, Netflix, Spotify e muitos outros n\xe3o consomem sua franquia. Consulte os detalhes espec\xedficos de cada plano para ver a lista completa."
        },
        {
            question: "Posso cancelar meu plano a qualquer momento?",
            answer: "Sim! N\xe3o temos fidelidade obrigat\xf3ria. Voc\xea pode cancelar seu plano a qualquer momento sem multas ou taxas de cancelamento. Acreditamos que voc\xea deve ficar conosco porque est\xe1 satisfeito, n\xe3o por obriga\xe7\xe3o."
        },
        {
            question: "Como \xe9 a cobertura da rede?",
            answer: "Utilizamos a infraestrutura das principais operadoras do pa\xeds, garantindo excelente cobertura 4G/5G em todo territ\xf3rio nacional. Voc\xea ter\xe1 a mesma qualidade de sinal que est\xe1 acostumado, mas pagando muito menos."
        },
        {
            question: "Quanto tempo leva para ativar meu plano?",
            answer: "Para novos n\xfameros, a ativa\xe7\xe3o \xe9 imediata ap\xf3s a confirma\xe7\xe3o do pagamento. Para portabilidade, o processo leva at\xe9 3 dias \xfateis. Durante todo o per\xedodo, voc\xea recebe atualiza\xe7\xf5es sobre o andamento."
        },
        {
            question: "Posso mudar de plano depois?",
            answer: "Claro! Voc\xea pode fazer upgrade ou downgrade do seu plano a qualquer momento. As mudan\xe7as s\xe3o processadas no pr\xf3ximo ciclo de cobran\xe7a, sem taxas adicionais."
        },
        {
            question: "Como funciona o suporte ao cliente?",
            answer: "Oferecemos suporte 24 horas por dia, 7 dias por semana atrav\xe9s de WhatsApp, telefone e chat online. Nossa equipe \xe9 especializada e est\xe1 sempre pronta para ajudar com qualquer d\xfavida ou problema."
        },
        {
            question: "H\xe1 taxa de ades\xe3o ou custos ocultos?",
            answer: "N\xe3o! O pre\xe7o que voc\xea v\xea \xe9 exatamente o que voc\xea paga. N\xe3o cobramos taxa de ades\xe3o, ativa\xe7\xe3o ou qualquer custo oculto. Total transpar\xeancia em todos os nossos planos."
        }
    ];
    return /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("section", {
        id: "faq",
        className: "py-20 bg-gray-50",
        children: /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("div", {
            className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("div", {
                    className: "text-center mb-16",
                    children: [
                        /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("h2", {
                            className: "text-4xl md:text-5xl font-bold text-gray-900 mb-6",
                            children: "Perguntas Frequentes"
                        }),
                        /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("p", {
                            className: "text-xl text-gray-600",
                            children: "Tire suas d\xfavidas sobre nossos planos e servi\xe7os"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("div", {
                    className: "space-y-4",
                    children: faqs.map((faq, index)=>/*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("div", {
                            className: "bg-white rounded-lg shadow-md overflow-hidden",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("button", {
                                    className: "w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200",
                                    onClick: ()=>setOpenItem(openItem === index ? null : index),
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("span", {
                                            className: "font-semibold text-gray-900 pr-4",
                                            children: faq.question
                                        }),
                                        /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(chevron_down/* default */.Z, {
                                            className: `w-5 h-5 text-gray-500 transition-transform duration-200 flex-shrink-0 ${openItem === index ? "transform rotate-180" : ""}`
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("div", {
                                    className: `overflow-hidden transition-all duration-300 ${openItem === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`,
                                    children: /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("div", {
                                        className: "px-6 pb-4",
                                        children: /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("p", {
                                            className: "text-gray-600 leading-relaxed",
                                            children: faq.answer
                                        })
                                    })
                                })
                            ]
                        }, index))
                }),
                /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("div", {
                    className: "text-center mt-12",
                    children: [
                        /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("p", {
                            className: "text-gray-600 mb-6",
                            children: "N\xe3o encontrou a resposta que procurava?"
                        }),
                        /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("button", {
                            onClick: ()=>window.open("https://bit.ly/contatofederalassociados", "_blank"),
                            className: "btn-primary",
                            children: "Fale Conosco"
                        })
                    ]
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/mail.js
var mail = __webpack_require__(9490);
;// CONCATENATED MODULE: ./app/components/Footer.tsx



function Footer() {
    return /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("footer", {
        className: "gradient-bg text-white",
        children: /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("div", {
                    className: "grid md:grid-cols-2 lg:grid-cols-4 gap-8",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("div", {
                            className: "lg:col-span-2",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("div", {
                                    className: "flex items-center space-x-3 mb-6",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("img", {
                                            src: "https://federalassociadoscadastro.com/wp-content/uploads/2024/01/Logo-com-fundo-transparente.png",
                                            alt: "Federal Associados",
                                            className: "h-12 w-auto"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("h3", {
                                                    className: "text-2xl font-bold",
                                                    children: "Federal Associados"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("p", {
                                                    className: "text-white/80",
                                                    children: "Voc\xea conectado"
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("p", {
                                    className: "text-white/90 mb-6 max-w-md",
                                    children: "Conectamos voc\xea ao que importa, oferecendo os melhores planos de internet m\xf3vel com economia real e qualidade garantida."
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("div", {
                                    className: "flex space-x-4",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("a", {
                                            href: "tel:21999293221",
                                            className: "bg-white/20 hover:bg-white/30 p-3 rounded-full transition-colors backdrop-blur-sm",
                                            children: /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(phone/* default */.Z, {
                                                className: "w-5 h-5"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("a", {
                                            href: "mailto:contato@federalassociados.com",
                                            className: "bg-white/20 hover:bg-white/30 p-3 rounded-full transition-colors backdrop-blur-sm",
                                            children: /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(mail/* default */.Z, {
                                                className: "w-5 h-5"
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("h4", {
                                    className: "text-lg font-semibold mb-6",
                                    children: "Planos"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("ul", {
                                    className: "space-y-3 text-white/80",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("a", {
                                                href: "#planos",
                                                className: "hover:text-white transition-colors",
                                                children: "Planos Individuais"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("a", {
                                                href: "#planos",
                                                className: "hover:text-white transition-colors",
                                                children: "Planos Fam\xedlia"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("a", {
                                                href: "#planos",
                                                className: "hover:text-white transition-colors",
                                                children: "Planos Empresariais"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("a", {
                                                href: "#",
                                                className: "hover:text-white transition-colors",
                                                children: "Portabilidade"
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("h4", {
                                    className: "text-lg font-semibold mb-6",
                                    children: "Suporte"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("ul", {
                                    className: "space-y-3 text-white/80",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("a", {
                                                href: "#faq",
                                                className: "hover:text-white transition-colors",
                                                children: "FAQ"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("a", {
                                                href: "#",
                                                className: "hover:text-white transition-colors",
                                                children: "Central de Ajuda"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("a", {
                                                href: "#",
                                                className: "hover:text-white transition-colors",
                                                children: "Pol\xedtica de Privacidade"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("a", {
                                                href: "#",
                                                className: "hover:text-white transition-colors",
                                                children: "Termos de Uso"
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("div", {
                    className: "border-t border-white/20 mt-12 pt-8",
                    children: /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("div", {
                        className: "flex flex-col md:flex-row justify-between items-center",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("div", {
                                className: "flex items-center space-x-2 mb-4 md:mb-0",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(phone/* default */.Z, {
                                        className: "w-5 h-5"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("a", {
                                        href: "tel:21999293221",
                                        className: "text-xl font-semibold hover:text-yellow-300 transition-colors",
                                        children: "(21) 99929-3221"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("p", {
                                className: "text-white/60 text-sm",
                                children: "\xa9 2024 Federal Associados. Todos os direitos reservados."
                            })
                        ]
                    })
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./app/page.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 






function Home() {
    return /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("main", {
        className: "min-h-screen",
        children: [
            /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(Header, {}),
            /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(Hero, {}),
            /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(Plans, {}),
            /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(Benefits, {}),
            /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(FAQ, {}),
            /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(Footer, {})
        ]
    });
}


/***/ }),

/***/ 1921:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   metadata: () => (/* binding */ e0)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/home/project/app/layout.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = proxy["metadata"];


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 2838:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/home/project/app/page.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [738], () => (__webpack_exec__(9488)));
module.exports = __webpack_exports__;

})();