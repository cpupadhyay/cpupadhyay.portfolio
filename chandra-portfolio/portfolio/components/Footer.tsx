import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-shell flex-col items-start justify-between gap-4 px-5 py-10 sm:flex-row sm:items-center">
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} Chandra Prakash Upadhyay · Bengaluru, India
        </p>
        <div className="flex gap-5 text-sm font-medium">
          <a className="focus-ring rounded text-muted hover:text-ink" href="https://www.linkedin.com/in/cpupadhyay" target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="focus-ring rounded text-muted hover:text-ink" href="https://github.com/cpupadhyay" target="_blank" rel="noreferrer">GitHub</a>
          <a className="focus-ring rounded text-muted hover:text-ink" href="mailto:chandraprakashupadhyay2001@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  );
}
