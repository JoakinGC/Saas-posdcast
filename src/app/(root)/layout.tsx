export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
        <main>
            <p className="text-white-1">Left Sidebar</p>
            {children}
            <p className="text-white-1">Rigth Sdebar</p>
        </main>
    </div>
  );
}
