async function windowActions() {
  const total_calories = [];
  const total_serving = [];
  const total_chol = [];
  const total_sodium = [];
  const total_carbs = [];
  const total_protein = [];
  const total_fat = [];

  //Requesting dining and macros data
  const diningRequest = await fetch('/api/dining');
  const hallData = await diningRequest.json();
  const tableBody = document.querySelector('tbody');
  const macrosRequest = await fetch('api/macros');
  const macrosData = await macrosRequest.json();

  hallData.data.forEach((hall) => {
    const tableLine = document.createElement('tr');
    tableLine.innerHTML = `
    <th>${hall.hall_id}</th>
    <td>${hall.hall_name}</td>
    <td>${hall.hall_address}</td>`;
    tableBody.append(tableLine);
  });

  const chart = new CanvasJS.Chart('chartContainer', {
    animationEnabled: true,
    title: {
      text: 'Meals and Macros'
    },
    toolTip: {
      shared: true
    },
    legend: {
      cursor: 'pointer',
      itemclick: toggleDataSeries
    },
    data: [
      {
        type: 'stackedBar',
        name: 'Calories',
        showInLegend: 'true',
        dataPoints: total_calories
      },
      {
        type: 'stackedBar',
        name: 'Serving Size',
        showInLegend: 'true',
        dataPoints: total_serving
      },
      {
        type: 'stackedBar',
        name: 'Cholesterol',
        showInLegend: 'true',
        dataPoints: total_chol
      },
      {
        type: 'stackedBar',
        name: 'Sodium',
        showInLegend: 'true',
        dataPoints: total_sodium
      },
      {
        type: 'stackedBar',
        name: 'Carbs',
        showInLegend: 'true',
        dataPoints: total_carbs
      },
      {
        type: 'stackedBar',
        name: 'Protein',
        showInLegend: 'true',
        dataPoints: total_protein
      },
      {
        type: 'stackedBar',
        name: 'Fat',
        showInLegend: 'true',
        dataPoints: total_fat
      }
    ]
  });
  macrosData.forEach((meal) => {
    total_calories.push({label: meal.meal_name, y: meal.calories});
    total_serving.push({label: meal.meal_name, y: meal.serving_size});
    total_chol.push({label: meal.meal_name, y: meal.cholesterol});
    total_sodium.push({label: meal.meal_name, y: meal.sodium});
    total_carbs.push({label: meal.meal_name, y: meal.carbs});
    total_protein.push({label: meal.meal_name, y: meal.protein});
    total_fat.push({label: meal.meal_name, y: meal.fat});
  });
  chart.render();

  function toggleDataSeries(e) {
    if (typeof e.dataSeries.visible === 'undefined' || e.dataSeries.visible) {
      e.dataSeries.visible = false;
    } else {
      e.dataSeries.visible = true;
    }
    chart.render();
  }
}

window.onload = windowActions();