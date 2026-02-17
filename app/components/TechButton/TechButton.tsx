import React from "react";

interface TechProps {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  name: string;
  href: string;
}

const TechButton: React.FC<TechProps> = ({ icon: Icon, name, href }) => {
  return (
    <a
      target="_blank"
      href={href}
      className="inline-flex items-center border-neutral-300 dark:border-neutral-700 dark:text-neutral-100 text-neutral-900 text-sm font-bold border py-0.5 px-2 rounded-md bg-neutral-100 dark:bg-neutral-900 gap-2 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors shadow-sm"
    >
      <Icon className="w-4 h-4" /> {name}
    </a>
  );
};

export default TechButton;
