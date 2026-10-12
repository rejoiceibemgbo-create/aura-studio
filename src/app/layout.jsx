import './globals.css';

export const metadata = {
  title: 'Aura Studio — Creative Design Agency',
  description: 'Aura Studio is a London-based creative agency specializing in branding, UI/UX design, and web design.',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased selection:bg-amber-400 selection:text-zinc-950 flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}
