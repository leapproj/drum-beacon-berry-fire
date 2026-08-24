import { i as createServerFn } from "./ssr2.mjs";
import { t as createSsrRpc } from "./createSsrRpc-B2Izd0c7.mjs";
import { a as tenantMiddleware } from "./operator-auth-D61No1_2.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin-DtCq0-PI.js
var getAdminDashboard = createServerFn({ method: "GET" }).middleware([tenantMiddleware]).validator((festivalId) => festivalId).handler(createSsrRpc("36a0d6f1c97d92068a5f4a7080d0ecfcee4f0333332d0828686298ef670d6062"));
var getAdminEvents = createServerFn({ method: "GET" }).middleware([tenantMiddleware]).validator((festivalId) => festivalId).handler(createSsrRpc("89c667860190ab9e078fba9ecc07c735b083d184c7f027159e4a0ab8ee558081"));
var getAdminEvent = createServerFn({ method: "GET" }).middleware([tenantMiddleware]).validator((input) => input).handler(createSsrRpc("d919283e97b08ae2904d583331c2be5fd79b8991914da95f90d9ef0f09ef7724"));
var createEvent = createServerFn({ method: "POST" }).middleware([tenantMiddleware]).validator((input) => input).handler(createSsrRpc("b4ce1fbd16f82c5c4b044165a383e5bc5285fb42582c21653e04f51d3b745d1d"));
var getParticipants = createServerFn({ method: "GET" }).middleware([tenantMiddleware]).validator((festivalId) => festivalId).handler(createSsrRpc("f98eaaf09331fd6c01cec7372f63aefc3bbe6dfda0a8a0766afb7703de5b924c"));
var getVenues = createServerFn({ method: "GET" }).middleware([tenantMiddleware]).validator((festivalId) => festivalId).handler(createSsrRpc("6f86fc25271364c56d9fb7cc50784c558ce373e6f2fcfc9da62ca10fb5dfda13"));
var createVenue = createServerFn({ method: "POST" }).middleware([tenantMiddleware]).validator((input) => input).handler(createSsrRpc("e59abb385defdb5a8ed7212d1bf75862648c87b859933a1b76a8976476ee43ce"));
createServerFn({ method: "GET" }).middleware([tenantMiddleware]).validator((festivalId) => festivalId).handler(createSsrRpc("3c9206b2f45f5b3163272bbf3c5a99453ee8ea7c1a1f6e1bb68a2c81a382c6df"));
createServerFn({ method: "POST" }).middleware([tenantMiddleware]).validator((input) => input).handler(createSsrRpc("b929b98f53bb86079e8c636d7aa0d98255d05f1709a02703b13bad0fae94ee58"));
var getGateKeys = createServerFn({ method: "GET" }).middleware([tenantMiddleware]).validator((festivalId) => festivalId).handler(createSsrRpc("716332d8c6b9133a02e587543ecc3b64781f0e21505401c698968d3c5c023a1d"));
var createGateKey = createServerFn({ method: "POST" }).middleware([tenantMiddleware]).validator((input) => input).handler(createSsrRpc("8b1f7fa1d6b571f6cffb5884a0797b543e884be0167bf7cc90c1f2ebec99a9b0"));
var getAdminAnalytics = createServerFn({ method: "GET" }).middleware([tenantMiddleware]).validator((festivalId) => festivalId).handler(createSsrRpc("fb3773e36b6524a7f120e2fe74dca618058c01c08490ae7ff6d5597048db4fe5"));
createServerFn({ method: "GET" }).middleware([tenantMiddleware]).handler(createSsrRpc("06a1a2af5eb43270da989d07290f1fc39c627e71490cf81ea43fe539a97031c2"));
var getStaff = createServerFn({ method: "GET" }).middleware([tenantMiddleware]).validator((festivalId) => festivalId).handler(createSsrRpc("f9913ca0b9875998308b1f56877e7245361020d16a6d0d10b14f55ba584c5711"));
var addStaff = createServerFn({ method: "POST" }).middleware([tenantMiddleware]).validator((input) => input).handler(createSsrRpc("8d9edc443551f98e947b4cabf0d4e2178e83dafe1fece7513c8f6a786ccbf02a"));
var getGateCheckins = createServerFn({ method: "GET" }).middleware([tenantMiddleware]).validator((festivalId) => festivalId).handler(createSsrRpc("5cb79f55f7b5be2e94755d6e0131695a92e403956400f4bcbb82e8d4116bf1e8"));
//#endregion
export { getAdminAnalytics as a, getAdminEvents as c, getParticipants as d, getStaff as f, createVenue as i, getGateCheckins as l, createEvent as n, getAdminDashboard as o, getVenues as p, createGateKey as r, getAdminEvent as s, addStaff as t, getGateKeys as u };
