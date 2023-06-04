const a = document.getElementById('sel');
const b = document.getElementById('body1');
const c = document.getElementById('pole');
const paragraf = document.getElementById('par');
const but = document.getElementById('but');


function Opt(elem)
{
let cValue = elem.target.value;

switch(cValue)
	{
	case '1':
	console.log("nothing");
	c.value = "";
	b.style.backgroundImage = "url(koshara_bg.jpg)";
	b.style.color = "white";
	break;
	
	case '2':
	c.value = "";
	b.style.backgroundColor = '#ffcf48';
	console.log('Sun');
	c.value += "Praise the Sun!";
	b.style.backgroundImage = "none";
	b.style.color = "black";
	break;
	
	case '3':
	c.value = "";
	b.style.backgroundColor = '#A9A9A9';
	console.log('rain');
	c.value += "Rain..";
	b.style.backgroundImage = "none";
	b.style.color = "black";
	break;
	
	case '4':
	c.value = "";
	b.style.backgroundColor = '#B0E0E6';
	console.log('snow');
	c.value += "Its winter, nice!";
	b.style.backgroundImage = "none";
	b.style.color = "black";
	break;
	
	case '5':
	c.value = "";
	b.style.backgroundImage = "url('koshara.jpg')";
	b.style.backgroundSize = "100% 100%";
	b.style.backgroundRepeat = "no-repeat";
	console.log('анимки');
	c.value += "Другая кошка";
	b.style.color = "black";
	break;
	
	}
}
a.addEventListener('change', function(elem){ Opt(elem)});

const form = document.getElementById('forma');



const timer =  document.getElementById('span');
form.addEventListener('submit', checkForm );

const err = document.querySelector('.error');
err.innerText = "";

console.log(err);

let symvols = ['?', '!', ':', ';', '/'];

function checkForm(event)
{
	event.preventDefault();	
	let login = form.vvod.value;
	let parol = form.vvod2.value;
	let gender = form.pol;
	let flag1 = false;
	let flag2 = false;
	for(let i = 0; i < symvols.length; i++)
	{
		
			if(parol.indexOf(symvols[i]) !== -1)
			{
				err.innerText = "Некоректно!!";
				console.log("ERROR");

			}
			else
			{
				flag1 = true;
				console.log(parol.includes(symvols[i]))
				break;
			}
	}	
	for(let j = 0; j < gender.length; j++)
	{
		if(login == "" || parol == "" || parol.length < 3 || login.length < 3 || !gender[j].checked)
		{
			err.innerText = "Некоректно!!";
			console.log("ERROR");

		}
		else
			{
				flag2 = true;
				break;
			}
	}
	if(flag1 == true & flag2 == true)
	{

		err.innerText = "вы зашли!";
		vizvatInterval();
		console.log("Логин:" + " " + login + "\n" + "Пароль" + " " + parol);
		let timeout = setTimeout(Silka, 4000);
	}

}

function Silka()
{
	alert("вы зареганы");
	window.location = "https://koptilnik.github.io/Space-Calculator/";
	
}

let seconds = 3;
function vizvatInterval()
{
let interval = setInterval(function Timer1() 
{
	err.innerText = "";
	timer.innerHTML = " Переход через" + " " + seconds  + " " + "секунды";
	console.log(seconds);
	seconds--;
	if(seconds < 0)
	{
		clearInterval(interval);
	}
},
	1000);
}


const but1 = document.getElementById('but2');
but1.onmouseover = function Transform(subject, subject1)
{
	subject = "right";
	subject1 = "left";
	but1.style.cssFloat += subject;
	Trololo1();
	console.log('ok');
		but1.onmouseover = function TransformBack()
		{
			if(but1.style.cssFloat == subject)
			{
			
			but1.style.cssFloat = subject1;
			console.log('ok2');
			Trololo2();
			
			}
		}	
		
	if(but1.style.cssFloat == subject1)
	{
		console.log('ok3');
		but1.onmouseover = Transform();
	}
} 
const otstup = document.querySelector('.otstup');
function Trololo1()
{
	err.innerHTML = "ахахах лох";
	err.style.left = "90%";
}

function Trololo2()
{
	
	err.innerHTML ="ахахах опять";
	err.style.left = "0%";
	setTimeout(function() {
		but1.style.cssFloat = 'none';
	err.style.position = 'relative';
	err.innerHTML ="";
	}, 2000)
}


