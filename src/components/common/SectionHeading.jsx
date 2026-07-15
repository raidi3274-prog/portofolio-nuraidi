function SectionHeading({ eyebrow, title, lead }) {
  return (
    <header className="section-heading">
      {eyebrow ? <p className="section__eyebrow">{eyebrow}</p> : null}
      <h2 className="section__title">{title}</h2>
      {lead ? <p className="section__lead">{lead}</p> : null}
    </header>
  );
}

export default SectionHeading;
