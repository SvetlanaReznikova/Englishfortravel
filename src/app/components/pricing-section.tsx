import { CreditCard, Check } from 'lucide-react';

export function PricingSection() {
  const options = [
    {
      title: 'Полный курс',
      price: '12 000 ₽',
      description: '10 уроков',
      features: ['Все модули программы', 'Дипломный проект', 'Сертификат по окончании'],
      highlight: true
    },
    {
      title: 'Абонемент',
      price: '1 300 ₽',
      description: 'за урок',
      features: ['Гибкий формат', 'Попробуйте перед покупкой', 'Оплата по мере прохождения'],
      highlight: false
    }
  ];

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#14b8a6]/10 border border-[#14b8a6]/30 rounded-full mb-4">
            <CreditCard className="w-5 h-5 text-[#14b8a6]" />
            <span className="text-[#14b8a6]">Стоимость</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4">
            Тарифы
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {options.map((option, index) => (
            <div
              key={index}
              className={`${
                option.highlight
                  ? 'bg-gradient-to-br from-[#14b8a6]/20 to-[#0d9488]/10 border-[#14b8a6]/50'
                  : 'bg-[#1a1f2e] border-white/10'
              } border-2 rounded-2xl p-8 hover:scale-105 transition-all duration-300 relative`}
            >
              {option.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-[#14b8a6] to-[#0d9488] text-white rounded-full text-sm">
                  Рекомендуем
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl mb-2">{option.title}</h3>
                <div className="text-4xl sm:text-5xl bg-gradient-to-r from-[#14b8a6] to-[#f59e0b] bg-clip-text text-transparent mb-2">
                  {option.price}
                </div>
                <p className="text-gray-400">{option.description}</p>
              </div>

              <ul className="space-y-3">
                {option.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#14b8a6] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-[#f59e0b]/10 border border-[#f59e0b]/30 rounded-xl px-6 py-4">
            <p className="text-[#f59e0b]">
              📢 <span className="text-white">Набор открыт!</span> Группы маленькие — максимум <span className="text-white">6 детей</span>, чтобы каждый получил внимание.
            </p>
            <p className="text-[#f97316] mt-2">
              Места ограничены!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
