import { QueryClient } from "@tanstack/react-query";
import { createRouter, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { routeTree } from "@/routeTree.gen";

// Match routes without running loaders or rendering: loaders may need a server or
// network the test run lacks, and jsdom never loads the stylesheets React waits on.
describe("App routing", () => {
  it("matches a page for / instead of falling back to not found", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });

    const matches = router.matchRoutes("/");

    expect(matches.at(-1)?.routeId).not.toBe(rootRouteId);
  });
});

describe("Site navigation", () => {
  it("matches a real page for every section and sub-page in the menu", async () => {
    const { SECTIONS } = await import("@/content/sections");
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });
    for (const s of SECTIONS) {
      expect(router.matchRoutes(`/${s.slug}`).at(-1)?.routeId).toBe("/$section/");
      for (const p of s.pages) {
        expect(router.matchRoutes(`/${s.slug}/${p.slug}`).at(-1)?.routeId).toBe("/$section/$page");
      }
    }
  });
});
