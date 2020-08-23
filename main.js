const kickBtn = document.querySelector('#btn-kick');
const hero = {
	HP: 100,
	selector: document.querySelector('.character'),
	name: function() {
		return this.selector.querySelector('.name').innerText;
	},
	attacked: function (damage)  {
		this.HP -= damage;
	}
}

const enemy = {
	HP: 100,
	selector: document.querySelector('.enemy'),
	name: function() {
		return this.selector.querySelector('.name').innerText;
	},
	attacked: function (damage) {
		this.HP -= damage;
	}
}

function kick() {
	console.log('Kick!');
	changeHP(enemy, randomDamage(20));
	changeHP(hero, randomDamage(20));
}

function changeHP(person, damage) {
	if (person.HP < damage) {
		person.HP = 0;
		kickBtn.disabled = true;
		finishGame(person);
	} else {
		person.attacked(damage);
	}
	renderHP(person);
}

function renderHP(person) {
	person.selector.querySelector('.text').innerText = `100 / ${person.HP}`;
	person.selector.querySelector('.health').style.width = `${person.HP}%`;
}

function randomDamage(delta) {
	return Math.ceil(Math.random() * delta);
}

function init() {
	console.log('Start game!');
	kickBtn.addEventListener('click', kick);
	renderHP(hero);
	renderHP(enemy);
}

function finishGame(person) {
	alert(`${person.name()} проиграл!`)
}

init();