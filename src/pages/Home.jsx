import Container from "../components/Container"
import Navbar from "../components/home/Navbar"
import Footer from "../components/home/Footer"
import "../components/animations/FadeIn.css"

export default function Home() {
    return (
        <Container>
            <div className="w-full h-full flex flex-col">
                <Navbar />
                <div className="w-full h-full flex flex-col items-center justify-center">
                    <div className="w-5/6 h-full flex flex-col items-start justify-center gap-y-5">
                        <h1 className="text-[#53B161] text-5xl fadeIn">Community Chronicle</h1>
                        <h2 className="w-1/2 text-xl fadeInDelay">Student Run News Organization. Filled with thousands of meaningful and unique articles for your everyday knowledge, enjoyment, and ease!</h2>
                    </div>
                </div>
            </div>
            <Footer />
        </Container>
    )
}