import { createNavigation } from "next-intl/navigation";
import { routing } from "./routing";

// Locale-aware helpers for future work. The converted pages use plain <a> links (full page loads), because the
// approved page behaviour (lib/behaviour) runs once per page load, exactly as in the v4.10.2 build.
export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing);
