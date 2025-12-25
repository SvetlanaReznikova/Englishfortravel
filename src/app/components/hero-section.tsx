import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';

interface HeroSectionProps {
  onEnrollClick: () => void;
}

export function HeroSection({ onEnrollClick }: HeroSectionProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1619467416348-6a782839e95f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBhZHZlbnR1cmUlMjB3b3JsZHxlbnwxfHx8fDE3NjY2NDgxNDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Travel Adventure"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e1a]/90 via-[#0a0e1a]/85 to-[#0a0e1a]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="inline-block px-4 py-2 bg-[#14b8a6]/10 border border-[#14b8a6]/30 rounded-full mb-6">
          <span className="bg-gradient-to-r from-[#14b8a6] to-[#f59e0b] bg-clip-text text-transparent">
            ✨ Набор открыт!
          </span>
        </div>
        
        <h1 className="text-4xl sm:text-5xl lg:text-7xl mb-6 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
          Курс «Английский для путешествий»
        </h1>
        
        <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          Мечтаете свободно общаться за границей — от заказа кофе до поиска утраченного чемодана?
        </p>
        
        <p className="text-base sm:text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
          Этот курс научит вашего ребёнка реальному разговорному английскому, который пригодится в отпуске, поездках и будущих путешествиях!
        </p>

        <Button
          onClick={onEnrollClick}
          className="bg-gradient-to-r from-[#14b8a6] to-[#0d9488] hover:from-[#0d9488] hover:to-[#0f766e] text-white px-8 py-6 text-lg rounded-lg shadow-lg shadow-[#14b8a6]/20 transition-all duration-300 hover:shadow-xl hover:shadow-[#14b8a6]/30 hover:scale-105"
        >
          Записаться на курс
        </Button>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0e1a] to-transparent z-10"></div>
    </section>
  );
}
