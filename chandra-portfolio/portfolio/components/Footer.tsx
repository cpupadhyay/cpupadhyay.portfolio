import Link from "next/link";
import { profile } from "@/content/profile";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto grid max-w-shell gap-8 px-5 py-12 sm:grid-cols-[1fr_auto] sm:items-end">
        <div>
          <p className="font-serif text-3xl italic text-ink">Chandra Prakash Upadhyay</p>
          <p className="mt-2 text-sm text-muted">
            {profile.headline} · {profile.location}
          </p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium">
          <a className="focus-ring rounded text-muted hover:text-ink" href={profile.lychee} target="_blank" rel="noreferrer">Lychee AI ↗</a>
          <a className="focus-ring rounded text-muted hover:text-ink" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <a className="focus-ring rounded text-muted hover:text-ink" href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a>
          <a className="focus-ring rounded text-muted hover:text-ink" href={`mailto:${profile.email}`}>Email</a>
          <Link className="focus-ring rounded text-muted hover:text-ink" href="/resume">Resume</Link>
        </div>
      </div>
      <div className="mx-auto max-w-shell border-t border-line px-5 py-5 text-[12px] text-muted">
        © {new Date().getFullYear()} Chandra Prakash Upadhyay. Designed and built with Next.js.
      </div>
    </footer>
  );
}
