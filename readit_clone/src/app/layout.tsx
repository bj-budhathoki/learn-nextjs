import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { Navbar } from "@/components/ui";

export const metadata = {
  title: "readit-clone",
  description: "A Reddit clone built with Next.js and TypeScript.",
};
const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(
        "bg-white text-slate-900 antialiased light",
        inter.className
      )}
    >
      <body className="min-h-screen pt-12 antialiased bg-slate-50">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
