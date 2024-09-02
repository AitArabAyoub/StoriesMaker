import Footer from "./_components/footer";
import Header from "./_components/header";

export default function LandingLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main>
            <Header/>
            {children}
            <Footer/>
        </main>
    );
}