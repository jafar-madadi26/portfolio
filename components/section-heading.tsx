interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description: string;
  align?: "left" | "center";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div className={centered ? "text-center" : undefined}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="section-title">{title}</h2>
      <p className={`section-copy ${centered ? "mx-auto" : ""}`}>{description}</p>
    </div>
  );
}
