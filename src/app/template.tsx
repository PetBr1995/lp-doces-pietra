// template.tsx é remontado a cada navegação: dá um fade suave na troca de página
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="animate-page-in">{children}</div>;
}
