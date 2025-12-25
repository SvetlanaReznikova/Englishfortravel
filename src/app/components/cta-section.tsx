import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

interface CTASectionProps {
  onEnrollClick: () => void;
}

export function CTASection({ onEnrollClick }: CTASectionProps) {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#1a1f2e] via-[#0a0e1a] to-[#0a0e1a]">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-gradient-to-br from-[#14b8a6]/10 via-[#f59e0b]/5 to-[#f97316]/10 border border-[#14b8a6]/30 rounded-3xl p-8 sm:p-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Готовы начать путешествие в мир английского?
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Запишитесь сейчас — и следующее путешествие станет первым, где ваш ребёнок заговорит по-английски без страха!
          </p>

          <Button
            onClick={onEnrollClick}
            className="bg-gradient-to-r from-[#14b8a6] to-[#0d9488] hover:from-[#0d9488] hover:to-[#0f766e] text-white px-10 py-7 text-lg rounded-xl shadow-2xl shadow-[#14b8a6]/30 transition-all duration-300 hover:shadow-[#14b8a6]/50 hover:scale-110 group"
          >
            Записаться на курс
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>

          <p className="text-sm text-gray-500 mt-6">
            Присоединяйтесь к небольшим группам до 6 человек
          </p>
        </div>
      </div>
    </section>
  );
}
