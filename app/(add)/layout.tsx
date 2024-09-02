import NewHeader from "./_components/newHeader";

export default function AddLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main>
            <NewHeader/>
            {children}
        </main>
    );
}