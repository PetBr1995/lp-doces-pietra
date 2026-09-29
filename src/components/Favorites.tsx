// Confeitos espalhados no fundo: posições fixas para não mudar entre servidor e navegador
const sprinkles = [
  { x: 6, y: 30, r: 20, c: "#ff4d6d" },
  { x: 14, y: 70, r: -35, c: "#4dd4ff" },
  { x: 22, y: 22, r: 60, c: "#ffc83d" },
  { x: 31, y: 55, r: -10, c: "#7cd66b" },
  { x: 40, y: 18, r: 45, c: "#c86bff" },
  { x: 60, y: 24, r: -50, c: "#ffc83d" },
  { x: 68, y: 62, r: 15, c: "#ff4d6d" },
  { x: 77, y: 20, r: -25, c: "#4dd4ff" },
  { x: 86, y: 50, r: 70, c: "#7cd66b" },
  { x: 94, y: 26, r: -40, c: "#c86bff" },
];

export default function Favorites() {
  return (
    <section id="cardapio" className="relative -mt-[8px] overflow-hidden bg-[#fff4e6] pb-24 pt-20 text-center md:-mt-[13px] md:pt-24">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {sprinkles.map((s, i) => (
          <span
            key={i}
            className="absolute h-1.5 w-4 rounded-full"
            style={{ left: `${s.x}%`, top: `${s.y}%`, background: s.c, transform: `rotate(${s.r}deg)` }}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-2xl px-6">
        <h2 className="font-display text-3xl font-medium text-[#c42a6c] sm:text-4xl">Encontre seu favorito</h2>
        <p className="mt-4 text-sm text-[#5b3a55] sm:text-base">
          Brigadeiros, bolos, cupcakes e docinhos feitos à mão para deixar sua festa ainda mais doce.
        </p>
      </div>
    </section>
  );
}
