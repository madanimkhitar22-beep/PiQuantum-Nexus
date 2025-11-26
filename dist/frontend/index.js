"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const client_1 = __importDefault(require("react-dom/client"));
const App = () => ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h1", { children: "PiQuantum-Nexus" }), (0, jsx_runtime_1.jsx)("p", { children: "Quantum-secure decentralized intelligence layer for the Pi Network" })] }));
const root = client_1.default.createRoot(document.getElementById('root'));
root.render((0, jsx_runtime_1.jsx)(App, {}));
exports.default = App;
//# sourceMappingURL=index.js.map