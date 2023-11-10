export default function Skills() {
  const Skill = [
    { id: 1, value: 100, skill: 'React' },
    { id: 1, value: 20, skill: 'Node.js' },
    { id: 1, value: 35, skill: 'Laravel' },
    { id: 1, value: 95, skill: 'Tailwind CSS' },
    { id: 1, value: 95, skill: 'Tailwind' },
  ];
  return (
    <div className="text-center items-center text-2xl mx-1">
      <h1 className="font-medium text-slate-700">Skills</h1>
      <div
        className="justify-center items-center py-2 rounded-lg  text-base text-center grid sm:grid-cols-6 grid-cols-4 gap-4"
        id="skills"
      >
        {Skill.map((SkillItem) => (
          <div key={SkillItem.id}>
            <div
              className="radial-progress text-[#70B3B9] transition-all bg-[#F6F6F1] grid grid-cols-1"
              style={{ '--value': SkillItem.value }}
            >
              {SkillItem.value}
            </div>
            {SkillItem.skill}
          </div>
        ))}
      </div>
    </div>
  );
}
