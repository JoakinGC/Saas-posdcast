import LeftSideBar from "@/components/LeftSidebar";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
        <main>
            <LeftSideBar />
            {children}
            <p className="text-white-1">Rigth Sdebar</p>
        </main>
    </div>
  );
}
