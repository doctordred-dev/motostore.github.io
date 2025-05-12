import ModalImage from "./components/Modal/ModalImage";
import ModalText from "./components/Modal/ModalText";
import './App.css'

import Header from "./components/Header/index.jsx";
import Footer from "./components/Footer/index.jsx";
import AppRoutes from "./AppRoutes.jsx";
import {useSelector} from "react-redux";
import ErrorBoundary from "./utils/ErrorBoundary.jsx";
import ScrollToTop from "./utils/ScrollToTop";

function App() {
    const firstModalStatus = useSelector(state => state.modalStatus.firstValue)
    const secondModalStatus = useSelector(state => state.modalStatus.secondValue)

    const favoritesMoto = useSelector(state => state.motorcycles.favoritesMoto)
    const likedMoto = useSelector(state => state.motorcycles.likedMoto)
    const selectedMotorcycle = useSelector(state => state.motorcycles.selectedMotorcycle)

    return (
        <>
            <ErrorBoundary>
                <Header
                        favoriteCounter={favoritesMoto.length}
                        likeCounter={likedMoto.length}/>
                <main>

                    {selectedMotorcycle && firstModalStatus && (
                        <ModalImage
                            isOpen={firstModalStatus}
                            imgURL={selectedMotorcycle.imageUrl}
                        />
                    )}

                    {selectedMotorcycle && secondModalStatus && (
                        <ModalText isOpen={secondModalStatus}/>
                    )}

                    <ScrollToTop />
                    <AppRoutes/>

                </main>
                <Footer/>
            </ErrorBoundary>
        </>
    )
}

export default App
