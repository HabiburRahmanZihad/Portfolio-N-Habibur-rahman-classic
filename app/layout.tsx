import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import Footer from "./components/Footer/Footer";
import KeyboardNavigation from "./components/keyboardNavigation/KeyboardNavigation";
import CustomCursor from "./components/shared/CustomCursor";
import { Toaster } from "react-hot-toast";
import ChatBotController from "./config/ChatBotController";
const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Habibur Rahman Zihad",
  description: "Portfolio of Habibur Rahman Zihad - MERN Stack Developer",
  icons: {
    icon: "/logo.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="scroll-p-20 scroll-smooth"
      suppressHydrationWarning
    >
      <body
        suppressHydrationWarning
        className={`${hankenGrotesk.className} antialiased min-h-screen flex flex-col cursor-none selection:bg-blue-500/30 selection:text-white`}
      >
        <div className="noise-overlay" />
        <CustomCursor />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <ChatBotController />
          <KeyboardNavigation />
          <main className="grow max-w-[720px] w-full mt-14 mx-auto px-3 sm:px-0">
            {children}
          </main>
          <Toaster />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
