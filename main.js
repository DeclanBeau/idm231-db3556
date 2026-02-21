const sagit = document.getElementById('Sagittarius')
const capricorn = document.getElementById('Capricorn');
const aqua = document.getElementById('Aquarius');

function selectAires(){
    const sign = document.getElementById('Aires');
    const exit = document.getElementById('exit');
    if (sign){
        sign.addEventListener('mouseover', function() {
            this.style.cursor = 'pointer';
        }, false);
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
          infoText.textContent = 'You selected the Subaru BRAT';
          carHeading.textContent = 'Subaru BRAT';
          exit.style.display = 'flex';
          document.body.style.background = '#DB4646';
        }, false);
    }    
    if (exit){
       exit.addEventListener('mouseover', function() {
         this.style.cursor = 'pointer';
       }, false);

       exit.addEventListener('click', function()  {
        const infoText = document.getElementById('infoText');
        const carHeading = document.getElementById('carHeading');
        infoText.style.display = 'none';
        infoText.textContent = ' ';
        carHeading.textContent = 'Select a car for more information.'
        exit.style.display = 'none';
        document.body.style.background = '#EFEFEF';

       }), false;
     }
}

function selectTaurus(){
  const taurus = document.getElementById('Taurus');
  const exit = document.getElementById('exit');
  if (taurus){
    taurus.addEventListener('mouseover', function() {
          this.style.cursor = 'pointer';
      }, false);
      taurus.addEventListener('click', function() {
        const infoText = document.getElementById('infoText');
        const carHeading = document.getElementById('carHeading');
        const pageHeading = document.getElementById('pageHeading');
        const label = document.getElementById('label');
        infoText.style.color = '#050505';
        carHeading.style.color = '#050505';
        pageHeading.style.color = '#050505';
        label.style.color = '#050505';
        infoText.style.display = 'block';
        infoText.textContent = 'You selected the MGB';
        carHeading.textContent = 'MGB';
        exit.style.display = 'flex';
        document.body.style.background = '#008C47';
      }, false);
  }    
  if (exit){
     exit.addEventListener('mouseover', function() {
       this.style.cursor = 'pointer';
     }, false);

     exit.addEventListener('click', function()  {
      const infoText = document.getElementById('infoText');
      const carHeading = document.getElementById('carHeading');
      infoText.style.display = 'none';
      infoText.textContent = ' ';
      carHeading.textContent = 'Select a car for more information.'
      exit.style.display = 'none';
      document.body.style.background = '#EFEFEF';

     }), false;
   }
}

function selectGemini(){
  const sign = document.getElementById('Gemini');
  const exit = document.getElementById('exit');
  if (sign){
    sign.addEventListener('mouseover', function() {
          this.style.cursor = 'pointer';
      }, false);
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
        infoText.textContent = 'You selected the Fiat 124 Spider';
        carHeading.textContent = 'Fiat 124 Spider';
        exit.style.display = 'flex';
        document.body.style.background = '#F6E684';
      }, false);
  }    
  if (exit){
     exit.addEventListener('mouseover', function() {
       this.style.cursor = 'pointer';
     }, false);

     exit.addEventListener('click', function()  {
      const infoText = document.getElementById('infoText');
      const carHeading = document.getElementById('carHeading');
      infoText.style.display = 'none';
      infoText.textContent = ' ';
      carHeading.textContent = 'Select a car for more information.'
      exit.style.display = 'none';
      document.body.style.background = '#EFEFEF';

     }), false;
   }
}

function selectCancer(){
  const sign = document.getElementById('Cancer');
  const exit = document.getElementById('exit');
  if (sign){
      sign.addEventListener('mouseover', function() {
          this.style.cursor = 'pointer';
      }, false);
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
        infoText.textContent = 'You selected the Porche 911';
        carHeading.textContent = 'Porche 911';
        exit.style.display = 'flex';
        document.body.style.background = '#FFFFF0';
      }, false);
  }    
  if (exit){
     exit.addEventListener('mouseover', function() {
       this.style.cursor = 'pointer';
     }, false);

     exit.addEventListener('click', function()  {
      const infoText = document.getElementById('infoText');
      const carHeading = document.getElementById('carHeading');
      infoText.style.display = 'none';
      infoText.textContent = ' ';
      carHeading.textContent = 'Select a car for more information.'
      exit.style.display = 'none';
      document.body.style.background = '#EFEFEF';

     }), false;
   }
}

function selectLeo(){
  const sign = document.getElementById('Leo');
  const exit = document.getElementById('exit');
  if (sign){
      sign.addEventListener('mouseover', function() {
          this.style.cursor = 'pointer';
      }, false);
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
        infoText.textContent = 'You selected the Plymouth Roadrunner';
        carHeading.textContent = 'Plymouth Roadrunner';
        exit.style.display = 'flex';
        document.body.style.background = '#DAA157';
      }, false);
  }    
  if (exit){
     exit.addEventListener('mouseover', function() {
       this.style.cursor = 'pointer';
     }, false);

     exit.addEventListener('click', function()  {
      const infoText = document.getElementById('infoText');
      const carHeading = document.getElementById('carHeading');
      infoText.style.display = 'none';
      infoText.textContent = ' ';
      carHeading.textContent = 'Select a car for more information.'
      exit.style.display = 'none';
      document.body.style.background = '#EFEFEF';

     }), false;
   }
}

function selectLeo(){
  const sign = document.getElementById('Leo');
  const exit = document.getElementById('exit');
  if (sign){
      sign.addEventListener('mouseover', function() {
          this.style.cursor = 'pointer';
      }, false);
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
        infoText.textContent = 'You selected the Plymouth Roadrunner';
        carHeading.textContent = 'Plymouth Roadrunner';
        exit.style.display = 'flex';
        document.body.style.background = '#DAA157';
      }, false);
  }    
  if (exit){
     exit.addEventListener('mouseover', function() {
       this.style.cursor = 'pointer';
     }, false);

     exit.addEventListener('click', function()  {
      const infoText = document.getElementById('infoText');
      const carHeading = document.getElementById('carHeading');
      infoText.style.display = 'none';
      infoText.textContent = ' ';
      carHeading.textContent = 'Select a car for more information.'
      exit.style.display = 'none';
      document.body.style.background = '#EFEFEF';

     }), false;
   }
}

function selectVirgo(){
  const sign = document.getElementById('Virgo');
  const exit = document.getElementById('exit');
  if (sign){
      sign.addEventListener('mouseover', function() {
          this.style.cursor = 'pointer';
      }, false);
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
  if (exit){
     exit.addEventListener('mouseover', function() {
       this.style.cursor = 'pointer';
     }, false);

     exit.addEventListener('click', function()  {
      const infoText = document.getElementById('infoText');
      const carHeading = document.getElementById('carHeading');
      infoText.style.display = 'none';
      infoText.textContent = ' ';
      carHeading.textContent = 'Select a car for more information.'
      exit.style.display = 'none';
      document.body.style.background = '#EFEFEF';

     }), false;
   }
}

function selectLibra(){
  const sign = document.getElementById('Libra');
  const exit = document.getElementById('exit');
  if (sign){
      sign.addEventListener('mouseover', function() {
          this.style.cursor = 'pointer';
      }, false);
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
  if (exit){
     exit.addEventListener('mouseover', function() {
       this.style.cursor = 'pointer';
     }, false);

     exit.addEventListener('click', function()  {
      const infoText = document.getElementById('infoText');
      const carHeading = document.getElementById('carHeading');
      infoText.style.display = 'none';
      infoText.textContent = ' ';
      carHeading.textContent = 'Select a car for more information.'
      exit.style.display = 'none';
      document.body.style.background = '#EFEFEF';

     }), false;
   }
}

function selectScorpio(){
  const sign = document.getElementById('Scorpio');
  const exit = document.getElementById('exit');
  if (sign){
      sign.addEventListener('mouseover', function() {
          this.style.cursor = 'pointer';
      }, false);
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
  if (exit){
     exit.addEventListener('mouseover', function() {
       this.style.cursor = 'pointer';
     }, false);

     exit.addEventListener('click', function()  {
      const infoText = document.getElementById('infoText');
      const carHeading = document.getElementById('carHeading');
      const pageHeading = document.getElementById('pageHeading');
      const label = document.getElementById('label');
      infoText.style.display = 'none';
      infoText.textContent = ' ';
      carHeading.textContent = 'Select a car for more information.'
      exit.style.display = 'none';
      document.body.style.background = '#EFEFEF';
      infoText.style.color = '#050505';
      carHeading.style.color = '#050505';
      pageHeading.style.color = '#050505';
      label.style.color = '#050505';
     }), false;
   }
}

function selectSagit(){
  const sign = document.getElementById('Sagittarius');
  const exit = document.getElementById('exit');
  if (sign){
      sign.addEventListener('mouseover', function() {
          this.style.cursor = 'pointer';
      }, false);
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
  if (exit){
     exit.addEventListener('mouseover', function() {
       this.style.cursor = 'pointer';
     }, false);

     exit.addEventListener('click', function()  {
      const infoText = document.getElementById('infoText');
      const carHeading = document.getElementById('carHeading');
      const pageHeading = document.getElementById('pageHeading');
      const label = document.getElementById('label');
      infoText.style.display = 'none';
      infoText.textContent = ' ';
      carHeading.textContent = 'Select a car for more information.'
      exit.style.display = 'none';
      document.body.style.background = '#EFEFEF';
      infoText.style.color = '#050505';
      carHeading.style.color = '#050505';
      pageHeading.style.color = '#050505';
      label.style.color = '#050505';
     }), false;
   }
}

function selectCapri(){
  const sign = document.getElementById('Capricorn');
  const exit = document.getElementById('exit');
  if (sign){
      sign.addEventListener('mouseover', function() {
          this.style.cursor = 'pointer';
      }, false);
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
  if (exit){
     exit.addEventListener('mouseover', function() {
       this.style.cursor = 'pointer';
     }, false);

     exit.addEventListener('click', function()  {
      const infoText = document.getElementById('infoText');
      const carHeading = document.getElementById('carHeading');
      infoText.style.display = 'none';
      infoText.textContent = ' ';
      carHeading.textContent = 'Select a car for more information.'
      exit.style.display = 'none';
      document.body.style.background = '#EFEFEF';

     }), false;
   }
}

function selectAqua(){
  const sign = document.getElementById('Aquarius');
  const exit = document.getElementById('exit');
  if (sign){
      sign.addEventListener('mouseover', function() {
          this.style.cursor = 'pointer';
      }, false);
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
  if (exit){
     exit.addEventListener('mouseover', function() {
       this.style.cursor = 'pointer';
     }, false);

     exit.addEventListener('click', function()  {
      const infoText = document.getElementById('infoText');
      const carHeading = document.getElementById('carHeading');
      infoText.style.display = 'none';
      infoText.textContent = ' ';
      carHeading.textContent = 'Select a car for more information.'
      exit.style.display = 'none';
      document.body.style.background = '#EFEFEF';

     }), false;
   }
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
/**
 * @description
 * Given a month and day, determine the corresponding Zodiac sign.
 * @param {number} month - month of the year (1-12)
 * @param {number} day - day of the month (1-31)
 * @returns {string} the corresponding Zodiac sign
 */
/** function getZodiac(month, day) {
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
  */