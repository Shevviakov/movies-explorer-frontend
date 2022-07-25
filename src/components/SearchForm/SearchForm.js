import React from "react";
import Button from "../Button/Button";
import FilterCheckBox from "../FilterCheckBox/FilterCheckBox";

import './SearchForm.css'

export default function SearchForm(props) {
    const [pending, setPending] = React.useState(false)
    const [errorMsg, setErrorMsg] = React.useState("")
    const [state, setState] = React.useState(props.state || {
        filmTitle: "",
        shortFilms: false,
    })

    function handleChange(e) {
        const { name, type, checked, value } = e.target
        const newState = { ...state, [name]: (type === 'checkbox' ? checked : value) }
        setState(newState)
        if (type === 'checkbox') {
            setPending(true)
            props.onSearchFilms(newState)
                .finally(() => {
                    setPending(false)
                })
        }
    }

    function onSearch(e) {
        e.preventDefault()
        if (!props.saved && !state.filmTitle) {
            setErrorMsg("Нужно ввести ключевое слово")
            return
        }
        setErrorMsg("")
        setPending(true)
        props.onSearchFilms(state)
            .finally(() => {
                setPending(false)
            })
    }

    return (
        <form className="searchform" onSubmit={onSearch} noValidate>
            <label className="searchform__input-container">
                <input
                    className="searchform__input"
                    placeholder="Фильм"
                    id="filmTitle"
                    name="filmTitle"
                    value={state.filmTitle}
                    onChange={handleChange}
                ></input>
                <Button className="searchform__input-submit" type="submit" disabled={pending}>Поиск</Button>
            </label>
            <span className={`searchform__error ${errorMsg ? "searchform__error_active" : ""}`}>{errorMsg || "placeholder"}</span>
            <FilterCheckBox title="Короткометражки" id="shortFilms" name="shortFilms" onChange={handleChange} checked={state.shortFilms} />
        </form>
    )
}