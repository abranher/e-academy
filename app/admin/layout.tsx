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
      className="dark:bg-boxdark-2 dark:text-bodydark"
    >
      {children}
    </div>
  );
}
