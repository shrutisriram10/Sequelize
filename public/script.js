async  function dininghalls(){
    const request = await fetch('api/macros')
    const data = request.json()

    const diningdata = data;
    const target = document.querySelector('#target');
    diningdata.forEach((item) => {
        const mealID = item.mealID;
        const calories = item.calories;
        const carbs = item.carbs;
        const sodium = item.sodium;
        const protein = item.protein;
        const fat = item.fat;
        const chlorestrol = item.chlorestrol;
        return `
            <tr>
                <th>${MealID}</th>
                <td>${Name}</td>
                <td>${Calories}</td>
                <td>${Carbs}</td>
                <td>${Sodium}</td>
                <td>${Protein}</td>
                <td>${Fat}</td>
                <td>${Chloesterol}</td>
            </tr>
            `;
    })
}