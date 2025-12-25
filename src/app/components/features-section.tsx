import { Sparkles, Star, Check } from 'lucide-react';

export function FeaturesSection() {
  const features = [
    'Акцент на практическую, живую речь, а не на грамматику ради грамматики',
    'Все ситуации — из реальной жизни путешественника',
    'Интерактивные задания: ролевые игры, аудиоситуации, мини-квесты',
    'Ребёнок выходит на уровень A2–B1 (Pre-Intermediate) за курс'
  ];

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#f59e0b]/10 border border-[#f59e0b]/30 rounded-full mb-4">
            <Sparkles className="w-5 h-5 text-[#f59e0b]" />
            <span className="text-[#f59e0b]">Почему мы</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4">
            Почему этот курс особенный?
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#1a1f2e] to-[#2d3548] border border-white/10 rounded-xl p-6 hover:scale-105 transition-all duration-300 hover:border-[#14b8a6]/50"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#14b8a6]/20 flex items-center justify-center">
                  <Check className="w-5 h-5 text-[#14b8a6]" />
                </div>
                <p className="text-gray-300 flex-1">{feature}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative star elements */}
        <div className="flex justify-center gap-2 mt-12">
          <Star className="w-6 h-6 text-[#f59e0b] fill-[#f59e0b]" />
          <Star className="w-6 h-6 text-[#14b8a6] fill-[#14b8a6]" />
          <Star className="w-6 h-6 text-[#f97316] fill-[#f97316]" />
        </div>
      </div>
    </section>
  );
}
