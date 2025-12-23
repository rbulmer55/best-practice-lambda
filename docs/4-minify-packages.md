# 4 — Minify Packages

Why it matters

- Smaller deployment packages reduce cold-start times and lower deployment bandwidth.

Recommendations

- Exclude development-only files from bundles and use tree-shaking where possible.
- Use bundlers (esbuild/webpack) configured for serverless targets; enable minification and externalize large native modules.
- Vendor only necessary runtime dependencies.

Examples

- Check this repo's build steps (see `build.js` and `package.json` scripts) and adapt bundler config for production builds.
