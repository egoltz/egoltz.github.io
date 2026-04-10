module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/node:path [external] (node:path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:path", () => require("node:path"));

module.exports = mod;
}),
"[externals]/node:path [external] (node:path, cjs) <export default as minpath>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "minpath",
    ()=>__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:path [external] (node:path, cjs)");
}),
"[externals]/node:process [external] (node:process, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:process", () => require("node:process"));

module.exports = mod;
}),
"[externals]/node:process [external] (node:process, cjs) <export default as minproc>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "minproc",
    ()=>__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$process__$5b$external$5d$__$28$node$3a$process$2c$__cjs$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$process__$5b$external$5d$__$28$node$3a$process$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:process [external] (node:process, cjs)");
}),
"[externals]/node:url [external] (node:url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:url", () => require("node:url"));

module.exports = mod;
}),
"[externals]/node:url [external] (node:url, cjs) <export fileURLToPath as urlToPath>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "urlToPath",
    ()=>__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$url__$5b$external$5d$__$28$node$3a$url$2c$__cjs$29$__["fileURLToPath"]
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$url__$5b$external$5d$__$28$node$3a$url$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:url [external] (node:url, cjs)");
}),
"[externals]/tty [external] (tty, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tty", () => require("tty"));

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
"[project]/Code/Web/egoltz.github.io/app/projects/[slug]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectPage,
    "generateMetadata",
    ()=>generateMetadata,
    "generateStaticParams",
    ()=>generateStaticParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Web$2f$egoltz$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/Web/egoltz.github.io/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Web$2f$egoltz$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Code/Web/egoltz.github.io/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Web$2f$egoltz$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/Web/egoltz.github.io/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Web$2f$egoltz$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/Web/egoltz.github.io/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Web$2f$egoltz$2e$github$2e$io$2f$node_modules$2f40$mdx$2d$js$2f$mdx$2f$lib$2f$evaluate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/Web/egoltz.github.io/node_modules/@mdx-js/mdx/lib/evaluate.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Web$2f$egoltz$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/Web/egoltz.github.io/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Web$2f$egoltz$2e$github$2e$io$2f$node_modules$2f$rehype$2d$highlight$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/Web/egoltz.github.io/node_modules/rehype-highlight/lib/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Web$2f$egoltz$2e$github$2e$io$2f$lib$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/Web/egoltz.github.io/lib/projects.ts [app-rsc] (ecmascript)");
const __TURBOPACK__import$2e$meta__ = {
    get url () {
        return `file://${__turbopack_context__.P("Code/Web/egoltz.github.io/app/projects/[slug]/page.tsx")}`;
    },
    get turbopackHot () {
        return __turbopack_context__.m.hot;
    }
};
;
;
;
;
;
;
;
async function generateStaticParams() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Web$2f$egoltz$2e$github$2e$io$2f$lib$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAllProjects"])().map((p)=>({
            slug: p.slug
        }));
}
async function generateMetadata({ params }) {
    const { slug } = await params;
    const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Web$2f$egoltz$2e$github$2e$io$2f$lib$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProjectContent"])(slug);
    if (!result) return {};
    return {
        title: result.frontmatter.title,
        description: result.frontmatter.description
    };
}
function formatDate(dateStr) {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', {
        month: 'long',
        year: 'numeric',
        timeZone: 'UTC'
    });
}
async function ProjectPage({ params }) {
    const { slug } = await params;
    const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Web$2f$egoltz$2e$github$2e$io$2f$lib$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProjectContent"])(slug);
    if (!result) (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Web$2f$egoltz$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    const { frontmatter, source } = result;
    const { default: MDXContent } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Web$2f$egoltz$2e$github$2e$io$2f$node_modules$2f40$mdx$2d$js$2f$mdx$2f$lib$2f$evaluate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["evaluate"])(source, {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Web$2f$egoltz$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
        baseUrl: __TURBOPACK__import$2e$meta__.url,
        rehypePlugins: [
            __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Web$2f$egoltz$2e$github$2e$io$2f$node_modules$2f$rehype$2d$highlight$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]
        ]
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Web$2f$egoltz$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-[900px] mx-auto px-6 md:px-8 py-10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Web$2f$egoltz$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Web$2f$egoltz$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                href: "/",
                className: "inline-flex items-center gap-1 font-inter text-sm text-[#555555] hover:text-black transition-colors mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Web$2f$egoltz$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        "aria-hidden": "true",
                        children: "←"
                    }, void 0, false, {
                        fileName: "[project]/Code/Web/egoltz.github.io/app/projects/[slug]/page.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this),
                    " Projects"
                ]
            }, void 0, true, {
                fileName: "[project]/Code/Web/egoltz.github.io/app/projects/[slug]/page.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Web$2f$egoltz$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "font-roboto font-bold text-3xl text-black mb-4 leading-tight",
                children: frontmatter.title
            }, void 0, false, {
                fileName: "[project]/Code/Web/egoltz.github.io/app/projects/[slug]/page.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this),
            (frontmatter.tags.length > 0 || frontmatter.tools.length > 0) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Web$2f$egoltz$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap gap-2 mb-3",
                children: [
                    frontmatter.tags.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Web$2f$egoltz$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "px-3 py-1 rounded-full text-xs font-inter bg-[#F0F0F0] text-black",
                            children: tag
                        }, tag, false, {
                            fileName: "[project]/Code/Web/egoltz.github.io/app/projects/[slug]/page.tsx",
                            lineNumber: 79,
                            columnNumber: 13
                        }, this)),
                    frontmatter.tools.map((tool)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Web$2f$egoltz$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "px-3 py-1 rounded-full text-xs font-inter bg-[#F0F0F0] text-[#555555]",
                            children: tool
                        }, tool, false, {
                            fileName: "[project]/Code/Web/egoltz.github.io/app/projects/[slug]/page.tsx",
                            lineNumber: 87,
                            columnNumber: 13
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/Code/Web/egoltz.github.io/app/projects/[slug]/page.tsx",
                lineNumber: 77,
                columnNumber: 9
            }, this),
            frontmatter.date && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Web$2f$egoltz$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "font-inter text-sm text-[#555555] mb-6",
                children: formatDate(frontmatter.date)
            }, void 0, false, {
                fileName: "[project]/Code/Web/egoltz.github.io/app/projects/[slug]/page.tsx",
                lineNumber: 99,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Web$2f$egoltz$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                className: "border-t border-[#E5E5E5] mb-8"
            }, void 0, false, {
                fileName: "[project]/Code/Web/egoltz.github.io/app/projects/[slug]/page.tsx",
                lineNumber: 105,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Web$2f$egoltz$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mdx-prose",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Web$2f$egoltz$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(MDXContent, {}, void 0, false, {
                    fileName: "[project]/Code/Web/egoltz.github.io/app/projects/[slug]/page.tsx",
                    lineNumber: 109,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Code/Web/egoltz.github.io/app/projects/[slug]/page.tsx",
                lineNumber: 108,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Code/Web/egoltz.github.io/app/projects/[slug]/page.tsx",
        lineNumber: 47,
        columnNumber: 5
    }, this);
}
}),
"[project]/Code/Web/egoltz.github.io/app/projects/[slug]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Code/Web/egoltz.github.io/app/projects/[slug]/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0fk37kf._.js.map