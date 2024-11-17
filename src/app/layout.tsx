import type { Metadata } from "next";
import "./globals.css";
import StoreProvider from "./StoreProvider";

export const metadata: Metadata = {
  title: "Task Board",
  description: "Task Board App using Next.js 15",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
};

export default RootLayout;
