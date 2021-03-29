async  function dininghalls(){
    const request = await fetch('api/dining');
    const data = await request.json();
    console.log(data);
    const diningdata = data.data;
    const target = document.querySelector('tbody');
    
    diningdata.forEach((item) => {
        const hallID = item.hall_id;
        const hallname = item.hall_name;
        const halllocation = item.hall_address;
        const tablerow = document.createElement('tr');
        tablerow.innerHTML = `
                <th>${hallID}</th>
                <td>${hallname}</td>
                <td>${halllocation}</td>
            `;
        target.append(tablerow);
    })
}
async function windowActions(){
    dininghalls();
}
window.onload=windowActions;