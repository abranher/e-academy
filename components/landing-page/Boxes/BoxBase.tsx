export default function BoxBase({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="overflow-hidden bg-white pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px] flex justify-center items-center">
      <section className="px-6 py-20 w-full max-w-[1536px]">{children}</section>
    </section>
  );
}
