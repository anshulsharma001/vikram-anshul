
const myFunction = () => {
    document.getElementById("first").style.display ='block';
    document.getElementById("second").style.display ='none';
    document.getElementById("third").style.display ='none';
    document.getElementById("fourth").style.display ='none';
    document.getElementById("five").style.display ='none';
    document.getElementById("six").style.display ='none';
    document.getElementById("seven").style.display ='none';
    document.getElementById("eight").style.display ='none';
    document.getElementById("nine").style.display ='none';
    document.getElementById("ten").style.display ='none';
  }
  
  const myFunction2 = () => {
    document.getElementById("second").style.display ='block';
    document.getElementById("first").style.display ='none';
    document.getElementById("third").style.display ='none';
    document.getElementById("fourth").style.display ='none';
    document.getElementById("five").style.display ='none';
    document.getElementById("six").style.display ='none';
    document.getElementById("seven").style.display ='none';
    document.getElementById("eight").style.display ='none';
    document.getElementById("nine").style.display ='none';
    document.getElementById("ten").style.display ='none';
  }
  
  const myFunction3 = () => {
    document.getElementById("third").style.display ='block';
    document.getElementById("first").style.display ='none';
    document.getElementById("second").style.display ='none';
    document.getElementById("fourth").style.display ='none';
    document.getElementById("five").style.display ='none';
    document.getElementById("six").style.display ='none';
    document.getElementById("seven").style.display ='none';
    document.getElementById("eight").style.display ='none';
    document.getElementById("nine").style.display ='none';
    document.getElementById("ten").style.display ='none';
  }
  const myFunction4 = () => {
    document.getElementById("fourth").style.display ='block';
    document.getElementById("first").style.display ='none';
    document.getElementById("second").style.display ='none';
    document.getElementById("third").style.display ='none';
    document.getElementById("five").style.display ='none';
    document.getElementById("six").style.display ='none';
    document.getElementById("seven").style.display ='none';
    document.getElementById("eight").style.display ='none'
    document.getElementById("nine").style.display ='none';
    document.getElementById("ten").style.display ='none';
  }
  const myFunction5 = () => {
    document.getElementById("five").style.display ='block';
    document.getElementById("first").style.display ='none';
    document.getElementById("second").style.display ='none';
    document.getElementById("third").style.display ='none';
    document.getElementById("fourth").style.display ='none';
    document.getElementById("six").style.display ='none';
    document.getElementById("seven").style.display ='none';
    document.getElementById("eight").style.display ='none';
    document.getElementById("nine").style.display ='none';
    document.getElementById("ten").style.display ='none';
  }
  const myFunction6 = () => {
    document.getElementById("six").style.display ='block';
    document.getElementById("first").style.display ='none';
    document.getElementById("second").style.display ='none';
    document.getElementById("third").style.display ='none';
    document.getElementById("fourth").style.display ='none';
    document.getElementById("five").style.display ='none';
    document.getElementById("seven").style.display ='none';
    document.getElementById("eight").style.display ='none';
    document.getElementById("nine").style.display ='none';
    document.getElementById("ten").style.display ='none';
  }
  const myFunction7 = () => {
    document.getElementById("seven").style.display ='block';
    document.getElementById("first").style.display ='none';
    document.getElementById("second").style.display ='none';
    document.getElementById("third").style.display ='none';
    document.getElementById("fourth").style.display ='none';
    document.getElementById("five").style.display ='none';
    document.getElementById("six").style.display ='none';
    document.getElementById("eight").style.display ='none';
    document.getElementById("nine").style.display ='none';
    document.getElementById("ten").style.display ='none';
  }
  const myFunction8 = () => {
    document.getElementById("eight").style.display ='block';
    document.getElementById("first").style.display ='none';
    document.getElementById("second").style.display ='none';
    document.getElementById("third").style.display ='none';
    document.getElementById("fourth").style.display ='none';
    document.getElementById("five").style.display ='none';
    document.getElementById("six").style.display ='none';
    document.getElementById("seven").style.display ='none';
    document.getElementById("nine").style.display ='none';
    document.getElementById("ten").style.display ='none';
  }
  const myFunction9 = () => {
    document.getElementById("nine").style.display ='block';
    document.getElementById("first").style.display ='none';
    document.getElementById("second").style.display ='none';
    document.getElementById("third").style.display ='none';
    document.getElementById("fourth").style.display ='none';
    document.getElementById("five").style.display ='none';
    document.getElementById("six").style.display ='none';
    document.getElementById("seven").style.display ='none';
    document.getElementById("eight").style.display ='none';
    document.getElementById("ten").style.display ='none';
  }
  const myFunction10 = () => {
    document.getElementById("ten").style.display ='block';
    document.getElementById("first").style.display ='none';
    document.getElementById("second").style.display ='none';
    document.getElementById("third").style.display ='none';
    document.getElementById("fourth").style.display ='none';
    document.getElementById("five").style.display ='none';
    document.getElementById("six").style.display ='none';
    document.getElementById("seven").style.display ='none';
    document.getElementById("nine").style.display ='none';
    document.getElementById("eight").style.display ='none';
  }


  function increaseValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
    console.log(value);
  }
  
  function decreaseValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value < 1 ? value = 1 : '';
    value--;
    document.getElementById('number').value = value;
  }