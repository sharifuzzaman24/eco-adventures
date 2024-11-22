import Experiences from "../components/Experiences";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AdventurePage from "../components/AdventurePage";
import useDocumentTitle from "../useDocumentTitle";

const Home = () => {
    useDocumentTitle();
    return (
        <>
            <header>
                <Navbar></Navbar>
            </header>
            <main className="bg-green-50">
                <section className="w-11/12 mx-auto pt-24">
                    <Hero></Hero>
                </section>
                <section className="w-11/12 mx-auto">
                    <Experiences></Experiences>
                </section>
                <section className="w-11/12 mx-auto pb-20">
                    <AdventurePage></AdventurePage>
                </section>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </>
    );
};

export default Home;