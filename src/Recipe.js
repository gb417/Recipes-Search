import React from 'react';
import style from './css/recipe.module.css';

//const Recipe=({key,label,calories,image,url})=>{
const Recipe=({k,r})=>{
    return(
        <div className={style.recipe} key={k}>
            <h1>{r.label}</h1>
            <ol>
                {r.ingredientLines.map(ingredient =>(
                    <li key={r.label+ingredient+Math.random()}>{ingredient}</li>
                ))}
            </ol>
            <p>Calories : {Math.round(r.calories)} kcal</p>
            <p><a href={r.url}>Access to the recipe</a></p>
            <img className={style.image} src={r.image} alt={r.label} />
        </div>
    );
};

export default Recipe;
