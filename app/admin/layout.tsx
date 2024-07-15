"use client";

//import "jsvectormap/dist/jsvectormap.css";
//import "flatpickr/dist/flatpickr.min.css";
import "@/styles/admin.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      suppressHydrationWarning={true}
      className="dark:bg-boxdark-2 dark:text-bodydark"
    >
      {children}
    </div>
  );
}
