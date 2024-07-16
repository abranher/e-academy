"use client";

import "@/styles/admin.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      suppressHydrationWarning
    >
      {children}
    </div>
  );
}
