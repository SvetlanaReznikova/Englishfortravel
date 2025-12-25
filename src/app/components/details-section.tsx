import { Monitor, Wifi, Calendar, Clock } from 'lucide-react';

export function DetailsSection() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#1a1f2e]/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Requirements */}
          <div className="bg-gradient-to-br from-[#1a1f2e] to-[#2d3548] border border-white/10 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-[#14b8a6]/10 rounded-lg">
                <Monitor className="w-6 h-6 text-[#14b8a6]" />
              </div>
              <h3 className="text-2xl">Что потребуется</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Monitor className="w-5 h-5 text-[#14b8a6] mt-1 flex-shrink-0" />
                <span className="text-gray-300">Стационарный компьютер или ноутбук с наушниками и микрофоном</span>
              </li>
              <li className="flex items-start gap-3">
                <Wifi className="w-5 h-5 text-[#14b8a6] mt-1 flex-shrink-0" />
                <span className="text-gray-300">Стабильный интернет и Zoom</span>
              </li>
            </ul>
          </div>

          {/* Schedule */}
          <div className="bg-gradient-to-br from-[#1a1f2e] to-[#2d3548] border border-white/10 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-[#f59e0b]/10 rounded-lg">
                <Calendar className="w-6 h-6 text-[#f59e0b]" />
              </div>
              <h3 className="text-2xl">Расписание</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#f59e0b] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Четверг, 15:00 (МСК)</p>
                  <p className="text-sm text-gray-500">группа 4–5 класс</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#f59e0b] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Пятница, 15:30 (МСК)</p>
                  <p className="text-sm text-gray-500">группа 6–8 класс</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
