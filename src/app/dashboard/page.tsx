export default function Page({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h1>Diário</h1>
      {children}
    </div>
  );
}
