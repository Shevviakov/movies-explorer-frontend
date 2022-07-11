import React from "react";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoviesCard from "../MoviesCard/MoviesCard";
import SearchForm from "../SearchForm/SearchForm";

import img1 from '../../images/movies/1.jpg'
import img2 from '../../images/movies/2.jpg'
import img3 from '../../images/movies/3.jpg'
import img4 from '../../images/movies/4.jpg'
import img5 from '../../images/movies/5.jpg'
import img6 from '../../images/movies/6.jpg'
import img7 from '../../images/movies/7.jpg'
import img8 from '../../images/movies/8.jpg'
import img9 from '../../images/movies/9.jpg'
import img10 from '../../images/movies/10.jpg'
import img11 from '../../images/movies/11.jpg'
import img12 from '../../images/movies/12.jpg'
import LoadMore from "../LoadMore/LoadMore";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function Movies(props) {
    return (
        <>
            <Header />
            <main className="movies">
                <SearchForm />
                <MoviesCardList>
                    <MoviesCard title="33 слова о дизайне" img={img1} duration={107} isLiked></MoviesCard>
                    <MoviesCard title="Киноальманах «100 лет дизайна»" img={img2} duration={63} ></MoviesCard>
                    <MoviesCard title="В погоне за Бенкси" img={img3} duration={102} ></MoviesCard>
                    <MoviesCard title="Баския: Взрыв реальности" img={img4} duration={81} ></MoviesCard>
                    <MoviesCard title="Бег это свобода" img={img5} duration={104} ></MoviesCard>

                    <MoviesCard title="Книготорговцы" img={img6} duration={97} isLiked></MoviesCard>
                    <MoviesCard title="Когда я думаю о Германии ночью" img={img7} duration={116} ></MoviesCard>
                    <MoviesCard title="Gimme Danger: История Игги и The Stooges" img={img8} duration={119} ></MoviesCard>

                    <MoviesCard title="Дженис: Маленькая девочка грустит" img={img9} duration={102} isLiked></MoviesCard>
                    <MoviesCard title="Соберись перед прыжком" img={img10} duration={70} isLiked></MoviesCard>
                    <MoviesCard title="Пи Джей Харви: A dog called money" img={img11} duration={64} ></MoviesCard>
                    <MoviesCard title="По волнам: Искусство звука в кино" img={img12} duration={67} ></MoviesCard>

                </MoviesCardList>
                <LoadMore />
            </main>
            <Footer />
        </>
    )
}