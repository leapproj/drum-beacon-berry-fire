import { i as createServerFn } from "./ssr2.mjs";
import { t as createSsrRpc } from "./createSsrRpc-B2Izd0c7.mjs";
import { i as sspMiddleware } from "./operator-auth-D61No1_2.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ssp-Cscgt5eR.js
var getSspOverview = createServerFn({ method: "GET" }).middleware([sspMiddleware]).handler(createSsrRpc("0cb38cb4613649ce0145b4654c86371a5c018907a8952aacc32a6fac0ded2289"));
var createFestivalTenant = createServerFn({ method: "POST" }).middleware([sspMiddleware]).validator((input) => input).handler(createSsrRpc("5c358a927533004cc3a723e5e17e8ce1779c55f5dcc55ce5d219ed1da4fe4477"));
var updateFestivalStatus = createServerFn({ method: "POST" }).middleware([sspMiddleware]).validator((input) => input).handler(createSsrRpc("2e85a117ad835b49b9f185830d89cd95329a06beff2dfd34680509d2dfa9a81b"));
//#endregion
export { getSspOverview as n, updateFestivalStatus as r, createFestivalTenant as t };
