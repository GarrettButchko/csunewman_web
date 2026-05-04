'use client';

interface HeaderProps {
  onNavigate: (view: string) => void;
  activeView: string;
}

export default function Header({ onNavigate, activeView }: HeaderProps) {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'events', label: 'Upcoming Events' },
    { id: 'resources', label: 'Resources' },
    { id: 'about', label: 'About Us' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="flex items-center justify-between gap-4 bg-button px-5 py-4 sm:px-6">
        <div className="flex items-center gap-4 text-cream">
          <div className="flex h-14 w-14 items-center justify-center text-xl font-semibold">
            <img
                src="/logo.png"
                alt="Viking Catholic Logo"
                className="h-full w-full object-contain p-0"
            />
          </div>
          <div>
            <h1 className="font-larken text-2xl leading-none text-cream sm:text-3xl">Viking Catholic</h1>
            <p className="font-larken mt-1 text-[0.65rem] tracking-[0.18em] text-cream/75 uppercase sm:text-xs">
              Cleveland State University Newman
            </p>
          </div>
        </div>

        <nav className="hidden items-center gap-8 text-[0.72rem] tracking-[0.18em] text-cream/85 uppercase md:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`transition-colors ${
                activeView === item.id
                  ? 'border-b border-cream pb-1 font-semibold text-cream'
                  : 'text-cream/70 hover:text-cream'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
