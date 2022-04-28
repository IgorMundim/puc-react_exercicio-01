import { Background } from "../../components/Background"
import { Header } from "../../components/header/Header"
import { Banner } from "../../components/banners/Banner"
import { Footer } from "../../components/footer/Footer"
import { MovieCarouselItem } from "../../components/collections/MovieCarouselItem"

export const Home = () => (
    <>
    <Background />
    <div className="wrapper">
    <Header />
    <Banner />
    <MovieCarouselItem />
    <MovieCarouselItem />
   <Footer />
    </div>
    </>
)