function MyRecipesComponents({label,image,calories,ingredients, mealType, dietLabel}){
    return(
        <div>
            <div className="container">
            <h2>{label}</h2>
            </div>

            <div className="container">
            <h2>{mealType}</h2>
            </div>

            <div className="container">               
            <img src={image} alt="recipe"/>
            </div>  

            <div className="label">

            <div className="container">
            <p>{calories.toFixed()} calories</p>
            </div>

            <div className="container">
            <p>{dietLabel}</p>
            </div>

            </div>

            <ul className="container list">
            {ingredients.map((ingredient, index) => (
                <li key={index}>
                <img src="https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/64/000000/external-check-multimedia-kiranshastry-gradient-kiranshastry.png" className="icon" alt="icon"/>
                {ingredient}
                </li>
            ))}
            </ul>
            
        </div>
    )
}
export default MyRecipesComponents;