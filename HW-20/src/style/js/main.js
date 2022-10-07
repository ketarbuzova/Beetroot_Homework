//const navOpener = () => {
    //const btnNavOpener = document.querySelector( selectors: '.js-nav-opener');
    //const btnNavHolder = document.querySelector( selectors: '.js-nav-holder');

   // btnNavOpener.addEventListener ( type: 'click', listener: (event :Event ) => {
     //   event.target.classList.toggle( token: 'active');
       // navHolder.classList.toggle( token: 'active');
   // })
//}

//$(document).ready(function(){
   // $('.navOpener').click(function(){
       // $(this).toggleClass('active');
   // });
// });

const navOpener = () => {
    const btnNavOpener = document.querySelector('.js-nav-opener');
    const btnNavHolder = document.querySelector('.js-nav-holder');

    btnNavOpener.addEventListener ('click', myFunc = () => {
        btnNavOpener.classList.toggle('active');
        btnNavHolder.classList.toggle('active');
    })
}

navOpener ();


