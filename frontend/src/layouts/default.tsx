import { Navbar } from "@/components/layout/navbar.tsx";
import { useMediaQueryPersonnalise } from "@/context/mediaQueryContext.tsx";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isDesktopOrLaptop } = useMediaQueryPersonnalise();

  return (
    <div className="relative flex flex-col h-screen">
      <Navbar />
      <main className="container mx-auto max-w-7xl flex-grow">
        {children}
      </main>
      <footer className="w-full flex items-center justify-center py-3 bg-violet-50 dark:bg-gray-900 pt-12 pb-12">
        <span className="flex items-center row-auto gap-1 text-current">
          <span className={isDesktopOrLaptop ? "text-default-600" : "text-xs"}>
            {new Date().getFullYear()}
          </span>
          <span className={isDesktopOrLaptop ? "text-default-600" : "text-xs"}>
            {" "}
            - Crée par Aurélie Moustardier, tout droits réservés.
          </span>
        </span>
      </footer>
    </div>
  );
}
