async  function dininghalls(){
    const request = await fetch('api/dining');
    const data = request.json();
    console.log(data);
    const diningdata = data.data;
    const target = document.querySelector('.tbody');
    /*
    diningdata.forEach((item) => {
        const hallID = item.hall_id;
        const hallname = item.hall_name;
        const halllocation = item.hall_address;
        return `
            <tr>
                <th>${hallID}</th>
                <td>${hallname}</td>
                <td>${halllocation}</td>
            </tr>
            `;
    })*/
}
async function windowActions(){
    dininghalls();
}
window.onload=windowActions;