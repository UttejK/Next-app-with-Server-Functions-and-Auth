export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-6xl mx-auto bg-white min-h-svh flex flex-col border-x">
      {children}
    </div>
  );
}
