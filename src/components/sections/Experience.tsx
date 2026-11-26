import { experience, earlierExperience } from "../../data/experience";
import Section, { Row } from "../layout/Section";

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      {experience.map((entry) => (
        <div key={entry.company} className="space-y-5">
          <Row>
            <h3 className="text-xl font-semibold text-ink">{entry.company}</h3>
          </Row>
          {entry.roles.map((role) => (
            <Row key={role.title} label={role.period}>
              <p className="font-medium text-ink">{role.title}</p>
              <p className="mt-1">{role.summary}</p>
            </Row>
          ))}
        </div>
      ))}

      <div className="space-y-5">
        <Row>
          <h3 className="text-xl font-semibold text-ink">Earlier experience</h3>
        </Row>
        {earlierExperience.map((role) => (
          <Row key={role.company}>
            <p className="font-medium text-ink">
              {role.title}, {role.company}
            </p>
            <p className="mt-1">{role.summary}</p>
          </Row>
        ))}
      </div>
    </Section>
  );
}
