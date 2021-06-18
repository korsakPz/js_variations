const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const result = document.getElementById('result');

function sum()
{
  const v1 = input1.value;
  const v2 = input2.value;

  document.getElementById('elem1').innerHTML=("Результат: "+(+v1 + +v2));
  
  //document.write(+v1 + +v2);
  //alert('Результат: ' + (+v1 + +v2));
  //result.innerText = ('Результат:' + ${v1+v2});
}

function vich() 
{
  const v1 = input1.value;
  const v2 = input2.value;
  document.getElementById('elem1').innerHTML=("Результат: "+(+v1 - +v2));
  //alert('Результат: ' + (+v1 - +v2));
}

function vum() 
{
  const v1 = input1.value;
  const v2 = input2.value;
  document.getElementById('elem1').innerHTML=("Результат: "+(+v1 * +v2));
  //alert('Результат: ' + (+v1 * +v2));
}

function delen()
{
  const v1 = input1.value;
  const v2 = input2.value;

  if (v2 == 0) {
    alert("Делитель не может быть равен НУЛЮ. Измените делитель!");
  } else {
      document.getElementById('elem1').innerHTML=("Результат: "+(+v1 / +v2));
      //alert('Результат: ' + (+v1 / +v2));
  }

}