import React from "react";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoviesCard from "../MoviesCard/MoviesCard";
import SearchForm from "../SearchForm/SearchForm";

import img1 from '../../images/movies/1.jpg'
import img2 from '../../images/movies/2.jpg'
import img3 from '../../images/movies/3.jpg'
import LoadMore from "../LoadMore/LoadMore";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function SavedMovies(props) {
    return (
        <>
            <Header />
            <main className="saved-movies">
                <SearchForm />
                <MoviesCardList>
                    <MoviesCard title="33 слова о дизайне" img={img1} duration={107} isLiked></MoviesCard>
                    <MoviesCard title="Киноальманах «100 лет дизайна»" img={img2} duration={63} ></MoviesCard>
                    <MoviesCard title="В погоне за Бенкси" img={img3} duration={102} ></MoviesCard>
                </MoviesCardList>
                <LoadMore />
            </main>
            <Footer />
        </>
    )
}