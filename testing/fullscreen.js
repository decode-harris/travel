// function [ fullscreenPhotoView ]
fullscreenPhotoView = () => {

    // gallery [ photos ] element selector
    let photos = document.querySelectorAll('.photos');

    // loop iterator
    let i;

    // declare a currentPhotos variable
    let currentPhotos;

    // photos loop
    for (i = 0; i < photos.length; i++) {
        
        // assign photo id reference   
        photos[0].setAttribute('id', '01');
        photos[1].setAttribute('id', '02');
        photos[2].setAttribute('id', '03');
        photos[3].setAttribute('id', '04');
        photos[4].setAttribute('id', '05');
        photos[5].setAttribute('id', '06');
        photos[6].setAttribute('id', '07');

        currentPhotos = photos[i];

        // test
        console.log('photo ' + photos[i].id + ' clicked');

    }

    // test
    console.log(currentPhotos);

    const gallery = document.querySelector('.gallery');

    

    
    console.log(photos);

    // [ photos ] forEach
    photos.forEach(element => {

        /*
            rules

            1. get id of clicked photo
            2. get image source of current photo / id
            3. attach said image source to fullscreen element
            4. attach an event listener to current image
            5. on exit, transition back to gallery view

        */

        // [ photos ] onclick event
        element.addEventListener('click', ()=> {

            // change fullscreen style to flex [ was none ]
            fullscreen.style.display = 'flex';

            // init [ createGalleryImage ] function
            createGalleryImage();

            if(element.id == '01') {
                
                // ams sloterdijk
                fullscreenImage.src = 'https://i.ibb.co/HrXPMTX/IMG20200131115227.jpg';
                
                // ams sloterdijk
                // <img src="https://i.ibb.co/HrXPMTX/IMG20200131115227.jpg" alt="IMG20200131115227" border="0"></img>
            
                // test
                console.log('element 01');
            }
            if(element.id == '02') {
                
                fullscreenImage.src = 'https://i.ibb.co/gzWLHxs/IMG20200201143953.jpg';

                // <img src="https://i.ibb.co/gzWLHxs/IMG20200201143953.jpg" alt="IMG20200201143953" border="0"></img>

                // test
                console.log('element 02');
            }
            if(element.id == '03') {
                
                fullscreenImage.src = 'https://i.ibb.co/PNFxpgf/IMG20200129111201.jpg';

                // <img src="https://i.ibb.co/PNFxpgf/IMG20200129111201.jpg" alt="IMG20200129111201" border="0"></img>

                // test
                console.log('element 03');
            }
            if(element.id == '04') {
                
                fullscreenImage.src = 'https://i.ibb.co/Xs7QmgJ/IMG20200129102421.jpg';

                // <img src="https://i.ibb.co/Xs7QmgJ/IMG20200129102421.jpg" alt="IMG20200129102421" border="0"></img>

                // test
                console.log('element 04');
            }
            if(element.id == '05') {
                
                fullscreenImage.src = 'https://i.ibb.co/VtWMvjp/IMG20200202120106.jpg';

                // <img src="https://i.ibb.co/VtWMvjp/IMG20200202120106.jpg" alt="IMG20200202120106" border="0"></img>

                // test
                console.log('element 05');
            }
            if(element.id == '06') {
                
                fullscreenImage.src = 'https://i.ibb.co/427mLjj/IMG20200201142543.jpg';

                // <img src="https://i.ibb.co/427mLjj/IMG20200201142543.jpg" alt="IMG20200201142543" border="0"></img>

                // test
                console.log('element 06');
            }
            if(element.id == '07') {
                
                fullscreenImage.src = 'https://i.ibb.co/NjHjmPZ/IMG20200201140604.jpg';

                // ams palace
                // <img src="https://i.ibb.co/NjHjmPZ/IMG20200201140604.jpg" alt="IMG20200201140604" border="0"></img>


                // test
                console.log('element 07');
            }
            
            // append fullscreen image to fullscreen component
            fullscreen.appendChild(fullscreenImage)

            
            // attach fullscreen element to gallery element
            gallery.appendChild(fullscreen);

            // test
            console.log('photos for each event');


            
        }); // [ photos ] onclick event end

    }); // [ photos ] forEach end
    

} // [ fullscreenPhotoView ] function end

fullscreenPhotoView();



// fullscreen container selector [ modal props ]
let fullscreen = document.querySelector('.fullscreen');

// fullscreenImage variable
let fullscreenImage = document.createElement('img');

// function [ createGalleryImage ]
createGalleryImage = () => {
    
    // assign class & ID to [ fullscreenImage ]
    fullscreenImage.setAttribute('class', 'fullscreenImage');
    fullscreenImage.setAttribute('id', 'category_number');

    // append fullscreenImage to fullscreen container
    fullscreen.appendChild(fullscreenImage)

    // // validate if image has been created
    // if (fullscreenImage.id == 'category_number') {
        
        
    //     // test
    //     console.log('image is already in use');
    // }
    // else {

        
    // }

    // test
    console.log('full screen image test ' + fullscreenImage);

}










// let photos = document.querySelectorAll('.photos');

// photos.forEach(photos => {
    
//     photos.addEventListener('click', ()=> {

//     });
// });





// let gallery = document.querySelector('.gallery');

// gallery.addEventListener('click', (event)=> {

//     if (event.target.tagName != 'DIV') {

//         // test
//         console.log('return');

//         return
//     }

//     else {
//         // let clicktarget = event.target;
//         // clicktarget.toggleAttribute('class', 'fullscreen');

//         fullscreen.style.display = 'flex';
//         gallery.appendChild(fullscreen);

//         // test
//         console.log('full screen class applied');

//     }
    

// });


// let fullscreen = document.querySelector('.fullscreen');
// // default props [ hidden element ]
// fullscreen.style.display = 'none';
// // clicktarget close event
// fullscreen.addEventListener('click', ()=> {

//     fullscreen.style.display = 'none';

//     // test
//     console.log('full screen closed');
// });
// // let i;

// // for (i = 0; i < photos.length; i++) {

// //     // test
// //     console.log(photos[i]);
    
// // }


// // fullscreenPhotoFunction
// fullscreenPhotoFunction = () => {

//     /*
//         rules
//         1. select all photo elements
//         2. add event listener to all photo elements
//         3. event will enable widescreen class on photo element
//         4. widescreen class will overlay the gallery view
//     */

// }