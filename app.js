let navTabs = {
    About: '<h3> Tiana made history as the first African-American princess in the Disney Princess franchise. Tiana is also the first and only Disney Princess from the city of New orleans! with dreams of opening a restaurant of her own. In a desperate attempt to achieve her goal, Tiana shares a kiss with a prince that had been magically transformed into a frog by an evil voodoo witch doctor. In doing so, however, Tiana also falls victim to the curse, setting off an adventure in the bayou to find a cure.</h3>',
    Movie:'<h3> Set in New Orleans during the 1920s, the film tells the story of a hardworking waitress named Tiana who dreams of opening her own restaurant. After kissing a prince who has been turned into a frog by an evil witch doctor, Tiana becomes a frog herself and must find a way to turn back into a human before it is too late.</h3>'
    
}


const uploadInfo = (tabName) => {
    if(tabName==="About")
    {
    let mainBox = document.querySelector('.mainContainer')
    mainBox.innerHTML=navTabs.About

    let Title = document.querySelector('.currentTitle')
    Title.innerHTML="About"
}
   
else if(tabName==="Movie")
{let mainBox = document.querySelector('.mainContainer')
console.log("movie");
mainBox.innerHTML=navTabs.Movie

let Title = document.querySelector('.currentTitle') 
Title.innerHTML="Movie"
}

}

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}