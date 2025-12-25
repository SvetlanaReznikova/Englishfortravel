import { Users } from 'lucide-react';

export function TargetAudience() {
  const groups = [
    {
      title: 'Первая группа',
      grade: '4–5 класс',
      color: 'from-[#14b8a6] to-[#0d9488]',
      bgColor: 'bg-[#14b8a6]/10',
      borderColor: 'border-[#14b8a6]/30'
    },
    {
      title: 'Вторая группа',
      grade: '6–8 класс',
      color: 'from-[#f59e0b] to-[#d97706]',
      bgColor: 'bg-[#f59e0b]/10',
      borderColor: 'border-[#f59e0b]/30'
    }
  ];

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#14b8a6]/10 border border-[#14b8a6]/30 rounded-full mb-4">
            <Users className="w-5 h-5 text-[#14b8a6]" />
            <span className="text-[#14b8a6]">Для кого курс</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4">
            Возрастные группы
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {groups.map((group) => (
            <div
              key={group.title}
              className={`${group.bgColor} ${group.borderColor} border-2 rounded-2xl p-8 hover:scale-105 transition-all duration-300 cursor-pointer`}
            >
              <div className={`inline-block px-4 py-2 bg-gradient-to-r ${group.color} text-white rounded-lg mb-4`}>
                {group.title}
              </div>
              <h3 className="text-2xl sm:text-3xl mb-2">{group.grade}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
