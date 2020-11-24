// Ігра писали на лекції 20-11-2020

// const Hero = function (name, hp = 100, hitPower = 2, hitSpeed = 1) {
//   this.name = name;
//   this.hp = hp;
//   this.hitPower = hitPower;
//   this.hitSpeed = hitSpeed;
// }
// Hero.prototype.getHit = function (hitPower, hitSpeed) {
//   this.hp = this.hp - hitPower * hitSpeed
// };

// const spiderMan = new Hero('SpiderMan', 100, 10, 2);
// const hulk = new Hero('Hulk',100, 30, 1);

// console.log(hulk);
// hulk.getHit(spiderMan.hitPower, spiderMan.hitSpeed);
// hulk.getHit(spiderMan.hitPower, spiderMan.hitSpeed);
// console.log(spiderMan);
// console.log(hulk);

const Hero = function (name, hp = 100, hitPower = 2, hitSpeed = 1) {
	this.name = name
	this.hp = hp
	this.hitPower = hitPower
	this.hitSpeed = hitSpeed
}
Hero.prototype.getHit = function (hitPower, hitSpeed) {
	this.hp = this.hp - hitPower * hitSpeed
}

const GoodHero = function (name, hp, hitPower, hitSpeed, kindNess) {
	this.kindNess = kindNess
	Hero.call(this, name, hp, hitPower, hitSpeed)
	// this.name = name;
	// this.hp = hp;
	// this.hitPower = hitPower;
	// this.hitSpeed = hitSpeed;
}

// const BadHero = new Hero();
// console.log(GoodHero);
const spiderMan = new GoodHero("SpiderMan", 100, 5, 2, 10)
console.log(spiderMan)
