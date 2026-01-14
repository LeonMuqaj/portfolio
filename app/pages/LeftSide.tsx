import GitHubIcon from "../components/GitHubIcon";
import LinkedInIcon from "../components/LinkedInIcon";
import InstagramIcon from "../components/InstagramIcon";
import NavLink from "../components/NavLink";

export default function LeftSide() {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24 pl-0 md:pl-6">
      <div>
        <h1 className="text-6xl font-bold tracking-tight text-slate-200">
          <a href="/">Leon Muqaj</a>
        </h1>
        <h2 className="mt-3 text-xl font-medium tracking-tight text-slate-200 sm:text-2xl">
          Front End Engineer
        </h2>

        <p className="mt-4 max-w-xs text-lg leading-normal text-slate-400">
          I build accessible, pixel-perfect digital experiences for the web.
        </p>
        <nav className="nav hidden lg:block" aria-label="In-page jump links">
          <ul className="mt-16 w-max space-y-4">
            <NavLink href="#about" label="About" />
            <NavLink href="#experience" label="Experience" />
            <NavLink href="#projects" label="Projects" />
          </ul>
        </nav>
      </div>

      <ul className="mt-8 flex items-center" aria-label="Social media">
        <li className="mr-5 shrink-0 text-xs">
          <a
            className="block text-slate-400 hover:text-slate-200 transition-colors"
            href="https://github.com/LeonMuqaj"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub (opens in a new tab)"
            title="GitHub"
          >
            <span className="sr-only">GitHub</span>
            <GitHubIcon className="h-6 w-6" />
          </a>
        </li>
        <li className="mr-5 shrink-0 text-xs">
          <a
            className="block text-slate-400 hover:text-slate-200 transition-colors"
            href="https://www.linkedin.com/in/leon-muqaj-a11b2b363/"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn (opens in a new tab)"
            title="LinkedIn"
          >
            <span className="sr-only">LinkedIn</span>
            <LinkedInIcon className="h-6 w-6" />
          </a>
        </li>
        <li className="mr-5 shrink-0 text-xs">
          <a
            className="block text-slate-400 hover:text-slate-200 transition-colors"
            href="https://www.instagram.com/leon.muqaj"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Instagram (opens in a new tab)"
            title="Instagram"
          >
            <span className="sr-only">Instagram</span>
            <InstagramIcon className="h-6 w-6" />
          </a>
        </li>
      </ul>
    </header>
  );
}
