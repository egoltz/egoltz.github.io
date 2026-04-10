(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Code/Web/egoltz.github.io/components/TagFilterBar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TagFilterBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Web$2f$egoltz$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/Web/egoltz.github.io/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
function TagFilterBar({ tags, activeTag, onTagChange }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Web$2f$egoltz$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-wrap gap-2",
        role: "group",
        "aria-label": "Filter projects by tag",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Web$2f$egoltz$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>onTagChange(null),
                className: `px-3 py-1 rounded-full text-sm font-inter transition-colors ${activeTag === null ? 'bg-black text-white' : 'bg-[#F0F0F0] text-black hover:bg-[#E0E0E0]'}`,
                "aria-pressed": activeTag === null,
                children: "All"
            }, void 0, false, {
                fileName: "[project]/Code/Web/egoltz.github.io/components/TagFilterBar.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            tags.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Web$2f$egoltz$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>onTagChange(tag),
                    className: `px-3 py-1 rounded-full text-sm font-inter transition-colors ${activeTag === tag ? 'bg-black text-white' : 'bg-[#F0F0F0] text-black hover:bg-[#E0E0E0]'}`,
                    "aria-pressed": activeTag === tag,
                    children: tag
                }, tag, false, {
                    fileName: "[project]/Code/Web/egoltz.github.io/components/TagFilterBar.tsx",
                    lineNumber: 25,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/Code/Web/egoltz.github.io/components/TagFilterBar.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
_c = TagFilterBar;
var _c;
__turbopack_context__.k.register(_c, "TagFilterBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Code/Web/egoltz.github.io/components/ProjectCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Web$2f$egoltz$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/Web/egoltz.github.io/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Web$2f$egoltz$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/Web/egoltz.github.io/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Web$2f$egoltz$2e$github$2e$io$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/Web/egoltz.github.io/node_modules/next/image.js [app-client] (ecmascript)");
;
;
;
function ProjectCard({ project }) {
    const { title, description, thumbnail, tags, tools, slug } = project;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Web$2f$egoltz$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Web$2f$egoltz$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        className: "flex gap-4 items-start",
        href: `/projects/${project.slug}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Web$2f$egoltz$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Web$2f$egoltz$2e$github$2e$io$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: project.thumbnail,
                loading: "lazy",
                alt: project.title,
                className: "p-2 flex-none",
                width: 200,
                height: 200
            }, void 0, false, {
                fileName: "[project]/Code/Web/egoltz.github.io/components/ProjectCard.tsx",
                lineNumber: 17,
                columnNumber: 11
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Web$2f$egoltz$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "justify-items-start p-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Web$2f$egoltz$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "font-roboto font-600 text-base text-black group-hover:underline duration-150",
                        children: project.title
                    }, void 0, false, {
                        fileName: "[project]/Code/Web/egoltz.github.io/components/ProjectCard.tsx",
                        lineNumber: 26,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Web$2f$egoltz$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-inter text-sm text-black leading-relaxed line-clamp-2",
                        children: project.description
                    }, void 0, false, {
                        fileName: "[project]/Code/Web/egoltz.github.io/components/ProjectCard.tsx",
                        lineNumber: 30,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Code/Web/egoltz.github.io/components/ProjectCard.tsx",
                lineNumber: 25,
                columnNumber: 11
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Code/Web/egoltz.github.io/components/ProjectCard.tsx",
        lineNumber: 13,
        columnNumber: 9
    }, this);
}
_c = ProjectCard;
var _c;
__turbopack_context__.k.register(_c, "ProjectCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Code/Web/egoltz.github.io/components/ProjectList.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Web$2f$egoltz$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/Web/egoltz.github.io/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Web$2f$egoltz$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/Web/egoltz.github.io/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Web$2f$egoltz$2e$github$2e$io$2f$components$2f$TagFilterBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/Web/egoltz.github.io/components/TagFilterBar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Web$2f$egoltz$2e$github$2e$io$2f$components$2f$ProjectCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/Web/egoltz.github.io/components/ProjectCard.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function ProjectList({ projects, tags }) {
    _s();
    const [activeTag, setActiveTag] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Web$2f$egoltz$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const filtered = activeTag === null ? projects : projects.filter((p)=>p.tags.includes(activeTag));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Web$2f$egoltz$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Web$2f$egoltz$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Web$2f$egoltz$2e$github$2e$io$2f$components$2f$TagFilterBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                tags: tags,
                activeTag: activeTag,
                onTagChange: setActiveTag
            }, void 0, false, {
                fileName: "[project]/Code/Web/egoltz.github.io/components/ProjectList.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            filtered.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Web$2f$egoltz$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "font-inter text-sm text-[#555555]",
                children: "No projects found for this tag."
            }, void 0, false, {
                fileName: "[project]/Code/Web/egoltz.github.io/components/ProjectList.tsx",
                lineNumber: 24,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Web$2f$egoltz$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-6",
                children: filtered.map((project)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Web$2f$egoltz$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$Web$2f$egoltz$2e$github$2e$io$2f$components$2f$ProjectCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        project: project
                    }, project.slug, false, {
                        fileName: "[project]/Code/Web/egoltz.github.io/components/ProjectList.tsx",
                        lineNumber: 28,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Code/Web/egoltz.github.io/components/ProjectList.tsx",
                lineNumber: 26,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Code/Web/egoltz.github.io/components/ProjectList.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_s(ProjectList, "FlpB6r3AEewy+uvHNnaC2ja7j3o=");
_c = ProjectList;
var _c;
__turbopack_context__.k.register(_c, "ProjectList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Code_Web_egoltz_github_io_components_0v_75j3._.js.map