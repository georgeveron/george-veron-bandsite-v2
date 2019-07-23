// SHOWS PAGE ---------------


const url = `https://project-1-api.herokuapp.com/showdates/?api_key=5e6b47e2-bb7a-4456-9cee-2a8c79027476`;

function getData() {
    axios
        .get(url)
        .then(response => {
            let showdates = response.data;
            console.log(showdates);
            (showdates.map(item => createShows(item)))
        })
        .catch(error => {
            console.log(error);
    });
}

getData();



// function postData (comment, serverData) {
//     axios
//         .post(url, comment)
//         .then(result => {
//             console.log(result);
//             serverData();
//         })
//         .catch(error => {
//             console.log(error);
//         })
// }

// postData({
//     name: "George",
//     comment: "Hello"
// });



let showsPageList = document.querySelector('.shows-times-date');


function createShows(input) {

    let newShows = document.createElement('div');
        newShows.className = '.tour';
        newShows.innerHTML = `<div>
                                <p class="tour-date__title">DATE</p>
                                <p class="tour-date__date">${input.date}</p>
                            </div>
                            <div>
                                <p class="tour-venue__title">VENUE</p>
                                <P class="tour-venue__name">${input.place}</P>
                            </div>
                            <div>
                                <P class="tour-location__title">LOCATION</P>
                                <P class="tour-location__city">${input.location}</P>
                            </div>
                            <button class="buy-tickets">BUY TICKES</button> `;
                            showsPageList.appendChild(newShows);

}