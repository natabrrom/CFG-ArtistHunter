

    function myFunction() {
        const email = document.getElementById("JoinInput").value;
    
            console.log('Test');
        if (email.includes('@'))
        {
          alert("Thank you for joining our community!");
        } else {
          alert("Please enter a valid email.");
        }
      }



      
      function write() {
        const message = document.getElementById("CommentInput");
        message.innerText = "This is the inserted message";
      }






const field = document.querySelector('input');
const backUp = field.getAttribute('placeholder')
const submit = document.querySelector('#message')
// const comments = document.querySelector('#comment-box')
const comments = document.getElementById('comment-box');

// array to store the comments
const comments_arr = [];

// to generate html list based on comments array
const display_comments = () => {
  let list = '<ul>';
   comments_arr.forEach(comment => {
    list += `<li>${comment}</li>`;
  })
  list += '</ul>';
  comments.innerHTML = list;
}


submit.onclick = function(event){
    event.preventDefault();
    const content = field.value;
    if(content.length > 0){ // if there is content
      // add the comment to the array
      comments_arr.push(content);
      // re-genrate the comment html list
      display_comments();
      // reset the textArea content 
      field.value = '';
    }
}