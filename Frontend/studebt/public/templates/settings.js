    //declearing html elements

    const imgDiv = document.querySelector('.profile-pic-div');
    const img = document.querySelector('#photo');
    const file = document.querySelector('#file');
    const uploadBtn = document.querySelector('#uploadBtn');

    //if user hover on img div

    imgDiv.addEventListener('mouseenter', function(){
      uploadBtn.style.display= "block";
    });

        //if user hover out from  img div

        imgDiv.addEventListener('mousestay', function(){
      uploadBtn.style.display= "none";
    });

    //let work on image to upload

    file.addEventListener('change', function(){
      //refers to file
      const choosedFile =this.files[0];

      if (choosedFile){
        const reader = new FileReader();
        //filereader is predefined function of js

        reader.addEventListener('load',function(){
          img.setAttribute('src', reader.
          result);
        });
        reader.readAsDataURL(choosedFile);
      }
      });
    