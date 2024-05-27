
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      {children}
      <h1>feature of product, Every product have this feature</h1>{" "}
    </div>
  );
}
