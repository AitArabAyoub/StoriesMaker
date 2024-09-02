import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./_components/theme-provider";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stories Maker",
  description: "StoryMaker is an innovative platform designed for storytellers of all kinds. Whether you're a seasoned writer or a beginner with a story to tell, StoryMaker provides a vibrant community and a creative space to craft, share, and discover stories.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <head>
          <link rel="shortcut icon" href="/lightlogo.svg" type="image/x-icon" />
        </head>
        <body className={inter.className}>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              {children}
              <Toaster/>
            </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
