import { Navbar } from "@/containers";
import "./globals.css";
import { Montserrat } from "next/font/google";
import RecoilRootWrapper from "@/utils/RecoilRootWrapper";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} relative min-h-screen bg-gradient-to-b from-gray-600 to-black`}
      >
        <RecoilRootWrapper>
          <>
            <Navbar />
            {children}
          </>
        </RecoilRootWrapper>
      </body>
    </html>
  );
}