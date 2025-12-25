import { Plane, Hotel, Utensils, Map, AlertCircle, Globe, MessageCircle, Trophy } from 'lucide-react';

export function ProgramSection() {
  const modules = [
    {
      icon: Plane,
      title: 'Аэропорт без стресса',
      description: 'Регистрация, паспортный контроль, вопросы на таможне — всё на английском.',
      result: 'Уверенность уже в первые часы за границей.',
      color: 'text-[#14b8a6]',
      bgColor: 'bg-[#14b8a6]/10'
    },
    {
      icon: Hotel,
      title: 'В отеле: заселение и помощь',
      description: 'Как попросить сменить номер, вызвать уборку или спросить про Wi-Fi.',
      result: 'Практика вежливых фраз и повседневной лексики.',
      color: 'text-[#f59e0b]',
      bgColor: 'bg-[#f59e0b]/10'
    },
    {
      icon: Utensils,
      title: 'Кафе и рестораны',
      description: 'Заказ еды, вопросы про аллергены, счёт и чаевые.',
      result: 'Развитие гастрономического словаря и уверенности в общении.',
      color: 'text-[#f97316]',
      bgColor: 'bg-[#f97316]/10'
    },
    {
      icon: Map,
      title: 'На улице: ориентирование и просьбы',
      description: 'Как спросить дорогу, вызвать такси или найти аптеку.',
      result: 'Понимание устной речи и произношения в реальных ситуациях.',
      color: 'text-[#06b6d4]',
      bgColor: 'bg-[#06b6d4]/10'
    },
    {
      icon: AlertCircle,
      title: 'Экстренные случаи',
      description: 'Потеря вещей, болезнь, помощь полиции — всё это на английском.',
      result: 'Важные фразы, которые могут спасти отпуск.',
      color: 'text-[#ef4444]',
      bgColor: 'bg-[#ef4444]/10'
    },
    {
      icon: Globe,
      title: 'Туризм и развлечения',
      description: 'Покупка билетов, экскурсии, общение с гидами, музеи и парки.',
      result: 'Погружение в культурный контекст через язык.',
      color: 'text-[#8b5cf6]',
      bgColor: 'bg-[#8b5cf6]/10'
    },
    {
      icon: MessageCircle,
      title: 'Дружба в путешествиях',
      description: 'Как познакомиться с другими детьми или подростками за границей.',
      result: 'Игровая практика диалогов и неформального общения.',
      color: 'text-[#14b8a6]',
      bgColor: 'bg-[#14b8a6]/10'
    },
    {
      icon: Trophy,
      title: 'Дипломный проект: «Мой идеальный отпуск»',
      description: 'Ребёнок планирует воображаемое путешествие и представляет его на английском.',
      result: 'Развитие связной речи и творческого самовыражения.',
      color: 'text-[#f59e0b]',
      bgColor: 'bg-[#f59e0b]/10'
    }
  ];

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#1a1f2e]/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#f59e0b]/10 border border-[#f59e0b]/30 rounded-full mb-4">
            <span className="text-[#f59e0b]">📚 Программа курса</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4">
            Что изучаем
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Каждый модуль — это практическая ситуация из реальной жизни путешественника
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {modules.map((module, index) => {
            const Icon = module.icon;
            return (
              <div
                key={index}
                className={`${module.bgColor} border border-white/10 rounded-xl p-6 hover:scale-105 transition-all duration-300`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`${module.bgColor} p-3 rounded-lg`}>
                    <Icon className={`w-6 h-6 ${module.color}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl mb-2">{module.title}</h3>
                  </div>
                </div>
                <p className="text-gray-400 mb-3">{module.description}</p>
                <div className="flex items-start gap-2">
                  <span className={`${module.color} mt-1`}>👉</span>
                  <p className={`${module.color} text-sm`}>{module.result}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
