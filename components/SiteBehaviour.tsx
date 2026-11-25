"use client";

import { useEffect } from "react";
import { initSH } from "@/lib/behaviour/sh";
import { initSite } from "@/lib/behaviour/site";
import { initOffer } from "@/lib/behaviour/offer";
import { initExperience } from "@/lib/behaviour/experience";
import { initContact, type ContactOptions } from "@/lib/behaviour/contact";
import { initIntro } from "@/lib/behaviour/intro";

const PAGE_SCRIPTS: Record<string, (o?: ContactOptions) => void> = {
  offer: initOffer,
  experience: initExperience,
  contact: initContact,
  intro: initIntro,
};

/** Runs the approved v4.10.2 page behaviour once per page load (menus, back links, filters, film dialog, form checks).
 *  Progressive enhancement only: every page works without it. Renders nothing. */
export default function SiteBehaviour({ scripts, contact }: { scripts: string[]; contact?: ContactOptions }) {
  useEffect(() => {
    const w = window as Window & { __shStarted?: boolean };
    if (w.__shStarted) return; // React may run effects twice in development
    w.__shStarted = true;
    initSH();
    initSite();
    for (const s of scripts) PAGE_SCRIPTS[s]?.(contact);
  }, [scripts, contact]);
  return null;
}
