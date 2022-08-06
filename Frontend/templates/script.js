//script to upload image for the submit form
const img = document.querySelector('#photo');
const file = document.querySelector('#file');
file.addEventListener('change',
function(){
    const choosedFile = this.files[0];

    if(choosedFile){
        const reader = new FileReader();

        reader.addEventListener('load',
        function(){
            img.setAttribute('src',reader.result);
        });

        reader.readAsDataURL(choosedFile);
    }
});

//Script to bring pop up page when submit button is clicked
document.getElementById('button').addEventListener('click',
function(){
    document.querySelector('#modal').style.display = 'flex';
});

//script to close the page with cancel button
document.querySelector('#cancel').addEventListener('click', 
function(){
    document.querySelector('#modal').style.display = 'none';
});