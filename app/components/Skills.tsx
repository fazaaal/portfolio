export default function Skills({ skills }) {
  // const Skill = [
  //   { id: 1, value: 100, skill: 'React' },
  //   { id: 1, value: 20, skill: 'Node.js' },
  //   { id: 1, value: 35, skill: 'Laravel' },
  //   { id: 1, value: 95, skill: 'Tailwind CSS' },
  //   { id: 1, value: 95, skill: 'Tailwind' },
  // ];

  return (
    <div>
      {skills.length === 0 ? (
        ''
      ) : (
        <div className="text-center items-center text-2xl mx-1" id="skills">
          <h1 className="font-medium text-slate-700 pb-3">Skills</h1>
          <div className="justify-between items-center py-2 rounded-lg  text-xs md:text-base text-center grid sm:grid-flow-row grid-cols-4 sm:grid-cols-5 gap-4">
            {skills.map((SkillItem, index) => (
              <div
                key={index}
                data={SkillItem}
                className="items-center text-center flex flex-col"
              >
                <div
                  className="radial-progress text-[#70B3B9] transition-all bg-[#F6F6F1] grid grid-cols-1"
                  style={{ '--value': SkillItem.percent }}
                >
                  {SkillItem.percent}
                </div>
                {SkillItem.title}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
