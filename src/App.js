import React from 'react';
//import logo from './css/logo.svg';
//import './css/App.css';
import './css/CustomApp.css';
import Recipe from "./Recipe";

const App = () => {
    const APP_ID = '';
    const APP_KEY = '';
    const API_req = 'https://api.edamam.com/search?q=';
    const API_identification = '&app_id=' + APP_ID + '&app_key=' + APP_KEY;

    const [recipes, setRecipes] = React.useState([]);
    const [search, setSearch] = React.useState('');
    const [query, setQuery] = React.useState('chicken');

    React.useEffect(() => {
        getRecipes();
    }, [query]);

    const getRecipes = async () => {
        if (query.trim()!==''){
            const response = await fetch(API_req + encodeURI(query.trim()) + API_identification);
            const data = await response.json();
            setRecipes(data.hits);
        }
    };

    const updateSearch = e => {
        setSearch(e.target.value);
    };

    const getSearch = e => {
        e.preventDefault();
        setQuery(search);
        //setSearch('');//reset à 0 la recherche (le champ)
    };

    //<header className="App-header">
    //    <img src={logo} className="App-logo" alt="logo"/>
    //</header>
    return (
        <div className="App">
            <form onSubmit={getSearch} className="search-form" action="#">
                <input onChange={updateSearch} value={search} className="search-bar" type="text"/>
                <button className="search-button" type="submit">
                    Search
                </button>
            </form>
            <div className="recipes">
                {recipes.map(recipe => (
                    <Recipe key={recipe.recipe.uri} r={recipe.recipe}/>
                ))}</div>
        </div>
    );
};

export default App;
