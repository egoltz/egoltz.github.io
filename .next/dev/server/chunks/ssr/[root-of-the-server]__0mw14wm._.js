module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/buffer [external] (buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("buffer", () => require("buffer"));

module.exports = mod;
}),
"[project]/Code/Web/egoltz.github.io/lib/projects.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getAllProjects",
    ()=>getAllProjects,
    "getAllTags",
    ()=>getAllTags,
    "getProjectBySlug",
    ()=>getProjectBySlug,
    "getProjectContent",
    ()=>getProjectContent
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs [external] (fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Web$2f$egoltz$2e$github$2e$io$2f$node_modules$2f$gray$2d$matter$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/Web/egoltz.github.io/node_modules/gray-matter/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Web$2f$egoltz$2e$github$2e$io$2f$node_modules$2f$image$2d$size$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/Web/egoltz.github.io/node_modules/image-size/dist/index.mjs [app-rsc] (ecmascript)");
;
;
;
;
const PROJECTS_DIR = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), 'content', 'projects');
function getThumbnailDimensions(thumbnailPath) {
    try {
        const absPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), 'public', thumbnailPath);
        const buffer = __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].readFileSync(absPath);
        const { width, height } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Web$2f$egoltz$2e$github$2e$io$2f$node_modules$2f$image$2d$size$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(buffer);
        return {
            width: width ?? 0,
            height: height ?? 0
        };
    } catch  {
        return {
            width: 0,
            height: 0
        };
    }
}
function readProjectFiles() {
    const files = __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].readdirSync(PROJECTS_DIR).filter((f)=>f.endsWith('.mdx') || f.endsWith('.md'));
    return files.map((filename)=>{
        const slug = filename.replace(/\.mdx?$/, '');
        const raw = __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].readFileSync(__TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(PROJECTS_DIR, filename), 'utf-8');
        const { data } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Web$2f$egoltz$2e$github$2e$io$2f$node_modules$2f$gray$2d$matter$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(raw);
        const thumbnail = data.thumbnail ?? '';
        const { width: thumbnailWidth, height: thumbnailHeight } = getThumbnailDimensions(thumbnail);
        return {
            title: data.title ?? '',
            description: data.description ?? '',
            thumbnail,
            thumbnailWidth,
            thumbnailHeight,
            tags: data.tags ?? [],
            tools: data.tools ?? [],
            date: data.date ?? '',
            featured: data.featured ?? false,
            slug
        };
    });
}
function getAllProjects() {
    return readProjectFiles().sort((a, b)=>{
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
}
function getProjectBySlug(slug) {
    return getAllProjects().find((p)=>p.slug === slug);
}
function getProjectContent(slug) {
    const filename = [
        `${slug}.mdx`,
        `${slug}.md`
    ].find((f)=>__TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].existsSync(__TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(PROJECTS_DIR, f)));
    if (!filename) return undefined;
    const raw = __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].readFileSync(__TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(PROJECTS_DIR, filename), 'utf-8');
    const { data, content } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Web$2f$egoltz$2e$github$2e$io$2f$node_modules$2f$gray$2d$matter$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(raw);
    const thumbnail = data.thumbnail ?? '';
    const { width: thumbnailWidth, height: thumbnailHeight } = getThumbnailDimensions(thumbnail);
    const frontmatter = {
        title: data.title ?? '',
        description: data.description ?? '',
        thumbnail,
        thumbnailWidth,
        thumbnailHeight,
        tags: data.tags ?? [],
        tools: data.tools ?? [],
        date: data.date ?? '',
        featured: data.featured ?? false,
        slug
    };
    return {
        frontmatter,
        source: content
    };
}
function getAllTags() {
    const projects = getAllProjects();
    const tagSet = new Set();
    for (const p of projects){
        for (const tag of p.tags)tagSet.add(tag);
    }
    return Array.from(tagSet).sort();
}
}),
"[project]/Code/Web/egoltz.github.io/components/ProjectList.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Web$2f$egoltz$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/Web/egoltz.github.io/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Web$2f$egoltz$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/Code/Web/egoltz.github.io/components/ProjectList.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Code/Web/egoltz.github.io/components/ProjectList.tsx <module evaluation>", "default");
}),
"[project]/Code/Web/egoltz.github.io/components/ProjectList.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Web$2f$egoltz$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/Web/egoltz.github.io/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Web$2f$egoltz$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/Code/Web/egoltz.github.io/components/ProjectList.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Code/Web/egoltz.github.io/components/ProjectList.tsx", "default");
}),
"[project]/Code/Web/egoltz.github.io/components/ProjectList.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Web$2f$egoltz$2e$github$2e$io$2f$components$2f$ProjectList$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/Code/Web/egoltz.github.io/components/ProjectList.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Web$2f$egoltz$2e$github$2e$io$2f$components$2f$ProjectList$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/Code/Web/egoltz.github.io/components/ProjectList.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Web$2f$egoltz$2e$github$2e$io$2f$components$2f$ProjectList$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/Code/Web/egoltz.github.io/app/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Web$2f$egoltz$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/Web/egoltz.github.io/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Web$2f$egoltz$2e$github$2e$io$2f$lib$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/Web/egoltz.github.io/lib/projects.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Web$2f$egoltz$2e$github$2e$io$2f$components$2f$ProjectList$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/Web/egoltz.github.io/components/ProjectList.tsx [app-rsc] (ecmascript)");
;
;
;
function Home() {
    const projects = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Web$2f$egoltz$2e$github$2e$io$2f$lib$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAllProjects"])();
    const tags = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Web$2f$egoltz$2e$github$2e$io$2f$lib$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAllTags"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Web$2f$egoltz$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-[900px] mx-auto px-6 md:px-8 py-12",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Web$2f$egoltz$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Web$2f$egoltz$2e$github$2e$io$2f$components$2f$ProjectList$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
            projects: projects,
            tags: tags
        }, void 0, false, {
            fileName: "[project]/Code/Web/egoltz.github.io/app/page.tsx",
            lineNumber: 10,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Code/Web/egoltz.github.io/app/page.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
}),
"[project]/Code/Web/egoltz.github.io/app/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Code/Web/egoltz.github.io/app/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0mw14wm._.js.map