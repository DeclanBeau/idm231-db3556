const taurus = document.getElementById('Taurus');
const gemini = document.getElementById('Gemini');
const cancer = document.getElementById('Cancer');
const leo = document.getElementById('Leo');
const virgo = document.getElementById('Virgo');
const libra = document.getElementById('Libra');
const scorpio = document.getElementById('Scorpio');
const sagit = document.getElementById('Sagittarius')
const capricorn = document.getElementById('Capricorn');
const aqua = document.getElementById('Aquarius');

function selectAires(){
    const aires = document.getElementById('Aires');
    if (aires){
        aires.addEventListener('mouseover', function() {
            this.style.cursor = 'pointer';
        }, false);
        aires.addEventListener('click', function() {
            const infoText = document.getElementById('infoText');
                if(infoText){
                    infoText.style.display = 'block';
                }
            document.body.style.background = '#910000';        
        }, false);
    }
}

selectAires();
/**const backgroundColor = document.getElementsByTagName('body');
if(backgroundColor){
    console.log('backgrond');   
    backgroundColor.color = 'magenta';
}
*/

/** function changeBackground(color){
    document.body.style.background = color;
}

window.addEventListener('load', function(){ changeBackground('magenta')});
const infoText = document.getElementById("infoText");
*/

/**if(infoText) { 
    console.log('there is info text');
    infoText.style.display = 'block';
}
*/

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