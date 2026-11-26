import { skillGroups } from "../../data/skills";
import Section, { Row } from "../layout/Section";

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="space-y-5">
        {skillGroups.map((group) => (
          <Row key={group.name} label={group.name}>
            <p>{group.skills.join(", ")}</p>
          </Row>
        ))}
      </div>
    </Section>
  );
}
