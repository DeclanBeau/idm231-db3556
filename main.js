//main question is how can i condense these 11 functions into one/do i need to, or can i carry on as is with this?
//to do: form, sounds, write text, image, help screen (simple html with an advance button when the website is loaded, additionally a back button to go back to help screen)
//for sounds: make sure the sound that is playing stops before the new sound starts
//rename repo Beauchamp_Declan_14627848-IDM231
//2 links: site link, gitHub repo link

const date = document.querySelector('form');
const seperateDate = birthday.value.split('-');
const exit = document.getElementById('exit');
function selectAires(){
    const sign = document.getElementById('Aires');
    if (sign){
        sign.addEventListener('click', function() {
          const infoText = document.getElementById('infoText');
          const carHeading = document.getElementById('carHeading');
          const pageHeading = document.getElementById('pageHeading');
          const carImage = document.getElementById('carImage');
          const label = document.getElementById('label');
          infoText.style.color = '#050505';
          carHeading.style.color = '#050505';
          pageHeading.style.color = '#050505';
          label.style.color = '#050505';
          infoText.style.display = 'block';
          carImage.style.display = 'block';
          carImage.src = 'images/brat.webp';
          infoText.textContent = 'You selected the Subaru BRAT';
          carHeading.textContent = 'Subaru BRAT';
          exit.style.display = 'flex';
          document.body.style.background = '#DB4646';
        }, false);
    }    
}

function selectTaurus(){
  const sign = document.getElementById('Taurus');  if (sign){
      sign.addEventListener('click', function() {
        const infoText = document.getElementById('infoText');
        const carHeading = document.getElementById('carHeading');
        const pageHeading = document.getElementById('pageHeading');
        const label = document.getElementById('label');
        const carImage = document.getElementById('carImage');
        infoText.style.color = '#050505';
        carHeading.style.color = '#050505';
        pageHeading.style.color = '#050505';
        label.style.color = '#050505';
        infoText.style.display = 'block';
        carImage.style.display =  'flex';
        carImage.src = 'images/mg.webp';
        infoText.textContent = 'You selected the MGB';
        carHeading.textContent = 'MGB';
        exit.style.display = 'flex';
        document.body.style.background = '#008C47';
      }, false);
  }    
}

function selectGemini(){
  const sign = document.getElementById('Gemini');
  if (sign){
      sign.addEventListener('click', function() {
        const infoText = document.getElementById('infoText');
        const carHeading = document.getElementById('carHeading');
        const pageHeading = document.getElementById('pageHeading');
        const carImage = document.getElementById('carImage');
        const label = document.getElementById('label');
        infoText.style.color = '#050505';
        carHeading.style.color = '#050505';
        pageHeading.style.color = '#050505';
        label.style.color = '#050505';
        infoText.style.display = 'block';
        carImage.style.display = 'block';
        carImage.src = 'images/fiat.webp';
        infoText.textContent = 'You selected the Fiat 124 Spider You selected the Fiat 124 Spider You selected the Fiat 124 Spider You selected the Fiat 124 Spider';
        carHeading.textContent = 'Fiat 124 Spider';
        exit.style.display = 'flex';
        document.body.style.background = '#F6E684';
      }, false);
  }    
}

function selectCancer(){
  const sign = document.getElementById('Cancer');
  if (sign){
      sign.addEventListener('click', function() {
        const infoText = document.getElementById('infoText');
        const carHeading = document.getElementById('carHeading');
        const pageHeading = document.getElementById('pageHeading');
        const carImage = document.getElementById('carImage');
        const label = document.getElementById('label');
        infoText.style.color = '#050505';
        carHeading.style.color = '#050505';
        pageHeading.style.color = '#050505';
        label.style.color = '#050505';
        infoText.style.display = 'block';
        carImage.style.display = 'block';
        carImage.src = 'images/porche.webp';
        infoText.textContent = 'You selected the Porche 911';
        carHeading.textContent = 'Porche 911';
        exit.style.display = 'flex';
        document.body.style.background = '#FFFFF0';
      }, false);
  }    
}

function selectLeo(){
  const sign = document.getElementById('Leo');
  if (sign){
      sign.addEventListener('click', function() {
        const infoText = document.getElementById('infoText');
        const carHeading = document.getElementById('carHeading');
        const pageHeading = document.getElementById('pageHeading');
        const carImage = document.getElementById('carImage');
        const label = document.getElementById('label');
        infoText.style.color = '#050505';
        carHeading.style.color = '#050505';
        pageHeading.style.color = '#050505';
        label.style.color = '#050505';
        infoText.style.display = 'block';
        carImage.style.display = 'block';
        carImage.src = 'images/roadrunner.webp'
        infoText.textContent = 'You selected the Plymouth Roadrunner';
        carHeading.textContent = 'Plymouth Roadrunner';
        exit.style.display = 'flex';
        document.body.style.background = '#DAA157';
      }, false);
  }    
}

function selectVirgo(){
  const sign = document.getElementById('Virgo');
  if (sign){
      sign.addEventListener('click', function() {
        const infoText = document.getElementById('infoText');
        const carHeading = document.getElementById('carHeading');
        const pageHeading = document.getElementById('pageHeading');
        const label = document.getElementById('label');
        infoText.style.color = '#050505';
        carHeading.style.color = '#050505';
        pageHeading.style.color = '#050505';
        label.style.color = '#050505';
        infoText.style.display = 'block';
        infoText.textContent = 'You selected the Honda Civic';
        carHeading.textContent = 'Honda Civic';
        exit.style.display = 'flex';
        document.body.style.background = '#CF8FA9';
              }
      , false);
  }    
}

function selectLibra(){
  const sign = document.getElementById('Libra');
  if (sign){
      sign.addEventListener('click', function() {
          const infoText = document.getElementById('infoText');
          const carHeading = document.getElementById('carHeading');
          const pageHeading = document.getElementById('pageHeading');
          const label = document.getElementById('label');
          infoText.style.color = '#050505';
          carHeading.style.color = '#050505';
          pageHeading.style.color = '#050505';
          label.style.color = '#050505';
          infoText.style.display = 'block';
          infoText.textContent = 'You selected the Ford Mustang';
          carHeading.textContent = 'Ford Mustang';
          exit.style.display = 'flex';
          document.body.style.background = '#30A5C2';
              
      }, false);
  }    

}

function selectScorpio(){
  const sign = document.getElementById('Scorpio')
  if (sign){

      sign.addEventListener('click', function() {
          const infoText = document.getElementById('infoText');
          const carHeading = document.getElementById('carHeading');
          const pageHeading = document.getElementById('pageHeading');
          const label = document.getElementById('label');
          infoText.style.display = 'block';
          infoText.style.color = '#EFEFEF';
          carHeading.style.color = '#EFEFEF';
          pageHeading.style.color = '#EFEFEF';
          label.style.color = '#EFEFEF';
          infoText.textContent = 'You selected the BMW E30 M3';
          carHeading.textContent = 'BMW E30 M3';
          exit.style.display = 'flex';
          document.body.style.background = '#242424';
                 
              }
       ,false);
  }    

}

function selectSagit(){
  const sign = document.getElementById('Sagittarius');
  if (sign){
      sign.addEventListener('click', function() {
          const infoText = document.getElementById('infoText');
          const carHeading = document.getElementById('carHeading');
          const pageHeading = document.getElementById('pageHeading');
          const label = document.getElementById('label');
          infoText.style.display = 'block';
          infoText.style.color = '#EFEFEF';
          carHeading.style.color = '#EFEFEF';
          pageHeading.style.color = '#EFEFEF';
          label.style.color = '#EFEFEF';
          infoText.textContent = 'You selected the Nissan Skyline';
          carHeading.textContent = 'Nissan Skyline';
          exit.style.display = 'flex';
          document.body.style.background = '#501D87';
                 
              }
       ,false);
  }    
}

function selectCapri(){
  const sign = document.getElementById('Capricorn');
  if (sign){
      sign.addEventListener('click', function() {
          const infoText = document.getElementById('infoText');
          const carHeading = document.getElementById('carHeading');
          const pageHeading = document.getElementById('pageHeading');
          const label = document.getElementById('label');
          infoText.style.color = '#050505';
          carHeading.style.color = '#050505';
          pageHeading.style.color = '#050505';
          label.style.color = '#050505';
          infoText.style.display = 'block';
          infoText.textContent = 'You selected the Subaru Impreza';
          carHeading.textContent = 'Subaru Impreza';
          exit.style.display = 'flex';
          document.body.style.background = '#8D94A6';
              
      }, false);
  }    
}

function selectAqua(){
  const sign = document.getElementById('Aquarius');
  if (sign){
      sign.addEventListener('click', function() {
          const infoText = document.getElementById('infoText');
          const carHeading = document.getElementById('carHeading');
          const pageHeading = document.getElementById('pageHeading');
          const label = document.getElementById('label');
          infoText.style.color = '#050505';
          carHeading.style.color = '#050505';
          pageHeading.style.color = '#050505';
          label.style.color = '#050505';
          infoText.style.display = 'block';
          infoText.textContent = 'You selected the Ford GT';
          carHeading.textContent = 'Ford GT';
          exit.style.display = 'flex';
          document.body.style.background = '#A8D5E6';
              
      }, false);
  }    
}

function exitButton(event){
  exit.addEventListener('click', function()  {
   const infoText = document.getElementById('infoText');
   const carHeading = document.getElementById('carHeading');
   infoText.style.display = 'none';
   carImage.style.display = 'none';
   infoText.textContent = ' ';
   carHeading.textContent = 'Select a car for more information.'
   exit.style.display = 'none';
   document.body.style.background = '#EFEFEF';
  }), false;
}

function handleSubmit (event){
  event.preventDefault();
  
}

function seperateMonth (month){
  month = Number(seperateDate[1]);

  return month;
}

function seperateDay (day){
  day = Number(seperateDate[2]);
  
  return day;
}

function getZodiac(month, day) {
  if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
    return 'Capricorn';
  } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
    return 'Sagittarius';
  } else if ((month === 10 && day >= 24) || (month === 11 && day <= 21)) {
    return 'Scorpio';
  } else if ((month === 9 && day >= 23) || (month === 10 && day <= 23)) {
    return 'Libra';
  } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
    return 'Virgo';
  } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
    return 'Leo';
  } else if ((month === 6 && day >= 22) || (month === 7 && day <= 22)) {
    return 'Cancer';
  } else if ((month === 5 && day >= 21) || (month === 6 && day <= 21)) {
    return 'Gemini';
  } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
    return 'Taurus';
  } else if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
    return 'Aries';
  } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
    return 'Pisces';
  } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
    return 'Aquarius';
  } else return null;
}

selectAires();
selectTaurus();
selectGemini();
selectCancer();
selectLeo();
selectVirgo();
selectLibra();
selectScorpio();
selectSagit();
selectCapri();
selectAqua();

//should condense these down into one function, somehow, no big deal though since it works properly?

date.addEventListener('submit', function() {
  handleSubmit(event);
  console.log (birthday.value);
  seperateMonth();
  seperateDay();
  getZodiac();
  console.log(seperateMonth());
  console.log(seperateDay());
  console.log(getZodiac());
}), false;

exitButton();

