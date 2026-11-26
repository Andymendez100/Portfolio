import { skillGroups } from "../../data/skills";
import Section, { Row } from "../layout/Section";

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="space-y-6">
        {skillGroups.map((group) => (
          <Row key={group.name} label={group.name}>
            <ul className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <li key={skill} className="rounded-md border border-rule bg-panel px-2.5 py-1 text-sm text-fg">
                  {skill}
                </li>
              ))}
            </ul>
          </Row>
        ))}
      </div>
    </Section>
  );
}
