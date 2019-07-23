// let commentsArray = [
//     {
//     name: 'Micheal Lyons', 
//     date: '12/18/2018', 
//     comment: 'They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.'
//     },
//     {
//     name: 'Gary Wong', 
//     date: '12/12/2018', 
//     comment: 'Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!'
//     },
//     {
//     name: 'Theodore Duncan', 
//     date: '11/15/2018', 
//     comment: 'How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!'
//     }
// ];

// console.log(commentsArray);

let mainCommentSection = document.querySelector('.user-comments-section');

// createComments()

function createComments(input) {

    // for(i=0; i<input.length; i++) {

        let newName = document.createElement('div');
        newName.className = 'oldUser-comment__container';
        newName.innerHTML = `<div class="olUsrImg">
                            <img class="oldUser-comment__image" src="../BandSite-Package-Sprint-2/4.0 - Assets/Images/frankie-cordoba-R8rScXT9dnA-unsplash.jpg" alt="">
                            </div>
                            <div class="oldUser-comment__info">
                                <div class="oldUser-comment__info-holder">
                                    <div class="user-comment__name">${input.name}</div>
                                    <div class="user-comment__date">${input.date}</div>
                                </div>
                                <p class="oldUser-comment__submission">${input.comment}</p>
                            </div> `;
        mainCommentSection.prepend(newName);

    // }

}

let submitButton = document.querySelector('.comments-section');
    submitButton.addEventListener('submit', displayName);

function displayName(event) {
    event.preventDefault();

    let userName = event.target.firstname.value;
    let userComment = event.target.subject.value;


    comments = {
        name: userName,
        comment: userComment
    }

    postData(comments, getData);


    mainCommentSection.innerHTML = ""



};

// AXIOS WEB API SECTION // 

const url = `https://project-1-api.herokuapp.com/comments/?api_key=5e6b47e2-bb7a-4456-9cee-2a8c79027476`;

function getData() {
    axios
        .get(url)
        .then(response => {
            let comment = response.data;
            console.log(comment);
            (comment.map(item => createComments(item)))
        })
        .catch(error => {
            console.log(error);
    });
}

getData();



function postData (comment, serverData) {
    axios
        .post(url, comment)
        .then(result => {
            console.log(result);
            serverData();
        })
        .catch(error => {
            console.log(error);
        })
}

// postData({
//     name: "George",
//     comment: "Hello"
// });








