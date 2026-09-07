import type { APIRoute, GetStaticPaths } from "astro";

export const prerender = true;

const sources = import.meta.glob<string>("../../../components/ui/*.tsx", {
  query: "?raw",
  import: "default",
  eager: true,
});

const byName = new Map<string, string>();
for (const [path, code] of Object.entries(sources)) {
  const file = path.split("/").pop() ?? "";
  if (file.endsWith(".tsx")) byName.set(file.slice(0, -4), code);
}

/** One-line setup notes for SHIUI-only CSS helpers, detected per file. */
const HELPERS: Array<[string, string]> = [
  ["ink-wipe", ".ink-wipe = hover fill wipe (needs ::after rules)"],
  ["link-brush", ".link-brush = animated underline (background-size trick)"],
  ["animate-marquee", ".animate-marquee = 22s ticker loop keyframes"],
  ["enso-spin", ".enso-spin = 1.6s brush-draw spinner keyframes"],
  ["stamp-in", ".stamp-in = stamp-press entrance keyframes"],
  ["ink-range", ".ink-range = 2px ink slider + vermilion thumb"],
  ["vertical-rl", ".vertical-rl = writing-mode: vertical-rl"],
];

const TOKENS = `SHIUI setup (Tailwind v4) — tokens: --color-paper #e5e3dc, --color-sumi #2a2926, --color-shu #e14d2a (+ --color-paper-deep #d9d6cc, --color-shu-deep #b93a1e). Fonts: "Shippori Mincho B1" (display), "Zen Kaku Gothic New" (body), "IBM Plex Mono" (mono). Corners: sharp (border-radius 0) except .rounded-full sun/seals. Zero shadows by design.`;

function withHeader(name: string, code: string): string {
  const used: Array<string> = [];
  for (const [cls, note] of HELPERS) if (code.includes(cls)) used.push(note);
  const extra = used.length ? `\n * Helpers used here: ${used.join("; ")} (see SHIUI global.css).` : "";
  return `/**\n * ${name} — SHIUI Hinomaru ink kit. Self-contained: only "react" is imported.\n * ${TOKENS}${extra}\n */\n${code}`;
}

export const getStaticPaths = (() => {
  return [...byName.keys()].map((name) => ({ params: { name } }));
}) satisfies GetStaticPaths;

export const GET: APIRoute = ({ params }) => {
  const code = byName.get(params.name ?? "");
  if (!code) return new Response("Not found", { status: 404 });
  return new Response(withHeader(params.name ?? "Component", code), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
