export default function NewDetailLayout({
  modal,
  children,
}: Readonly<{
  modal: React.ReactNode;
  children: React.ReactNode;
}>) {
  return (
    <>
      {modal}
      {children}
    </>
  );
}
