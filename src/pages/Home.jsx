import Container from "../components/Container"
import Navbar from "../components/home/Navbar"
import Footer from "../components/home/Footer"
import "../components/animations/FadeIn.css"
import { useState, useEffect } from "react"

export default function Home() {
    const [step, setStep] = useState(0)
    useEffect(() => {
        const interval = setInterval(() => {
            if (step === 3) {
                setStep(0)
            } else {
                setStep(step => step + 1)
            }
        }, 5000)
        return () => clearInterval(interval)

    })
    const reads = [
        {
            name: "The 10 Best Movies of 2021 (So Far)",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl quis aliquam ultricies, nisl"
        },
        {
            name: "The 10 Best Movies of 2022 (So Far)",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl quis aliquam ultricies, nisl"
        },
        {
            name: "The 10 Best Movies of 2023 (So Far)",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl quis aliquam ultricies, nisl"
        }
    ]
    const images = ["url(/placeholder.png)", "url(/Logo.png)", "url(/placeholder.png)", "url(/Logo.png)"]
    return (
        <Container>
            <div className="w-full h-full flex flex-col">
                <Navbar />
                <div className="w-full h-full flex flex-col items-center justify-center" style={{ backgroundImage: images[step] }}>
                    <div className="w-5/6 h-full flex flex-col items-start justify-center gap-y-5">
                        <h1 className="text-[#53B161] text-5xl fadeIn">Community Chronicle</h1>
                        <h2 className="w-1/2 text-xl fadeInDelay">Student Run News Organization. Filled with thousands of meaningful and unique articles for your everyday knowledge, enjoyment, and ease!</h2>
                    </div>
                </div>
            </div>
            <div className="mt-5 w-full flex flex-row justify-center pb-10">
                <div className="w-5/6 flex flex-row justify-between flex-wrap">
                    {
                        reads.map(read => (
                            <div className="w-[30%] flex flex-col items-start justify-start gap-y-3 rounded-md p-5 shadow-2xl">
                                <h3 className="text-2xl">{read.name}</h3>
                                <p>{read.description}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
            <Footer />
        </Container>
    )
}