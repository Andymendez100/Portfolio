import { experience } from "../../data/experience";
import SectionHeading from "../ui/SectionHeading";
import TimelineItem from "../ui/TimelineItem";

export default function Experience() {
  return (
    <div>
      <SectionHeading
        eyebrow="Experience"
        heading="Career Journey"
        description="10+ years building production systems, from defense software to AI platforms."
      />

      <div className="space-y-4">
        {experience.map((entry, index) => (
          <TimelineItem
            key={`${entry.company}-${entry.title}`}
            entry={entry}
            index={index}
            isCurrent={index === 0}
          />
        ))}
      </div>
    </div>
  );
}
