import TechBadge from "./TechBadge";

interface ProjectCardProps {
  title: string;
  href: string;
  description: string;
  technologies: string[];
  imageSrc?: string;
  imageAlt?: string;
}

export default function ProjectCard({
  title,
  href,
  description,
  technologies,
  imageSrc,
  imageAlt,
}: ProjectCardProps) {
  return (
    <li className="mb-12">
      <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
        <div className="z-10 sm:order-2 sm:col-span-6">
          <h3>
            <a
              className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-lg"
              href={href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${title} (opens in a new tab)`}
            >
              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
              <span>{title}</span>
            </a>
          </h3>
          <p className="mt-2 text-base leading-normal">{description}</p>
          <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
            {technologies.map((tech) => (
              <TechBadge key={tech} name={tech} />
            ))}
          </ul>
        </div>
        <div className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1">
          {imageSrc ? (
            <img
              src={imageSrc}
              alt={imageAlt || title}
              className="aspect-video rounded object-cover"
            />
          ) : (
            <div className="aspect-video bg-slate-800 rounded" />
          )}
        </div>
      </div>
    </li>
  );
}
