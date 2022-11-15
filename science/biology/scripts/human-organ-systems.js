/*
author:	Peter A. Martin
name:	human-organ-systems.js
date:	Thursday, January 13, 2021
purpose: provide application features
*/


class HumanOrganSystems {
	constructor() {
		console.log("     Testing All Systems");
		var digestive = new DigestiveSystem();
		var respitory = new RespitorySystem();
		var cardiovascular = new CardiovascularSystem();
		var lymphatic = new LymphaticSystem();
		var immune = new ImmuneSystem();
		var excretory = new ExcretorySystem();
		var endocrine = new EndocrineSystem();
		var reproductive = new ReproductiveSystem();
		var nervous = new NervousSystem();
		var muscular = new MuscularSystem();
		var skeletal = new SkeletalSystem();
		var integumentary = new IntegumentarySystem();
		console.log("     All Systems Running");
	}
}

class DigestiveSystem {
	constructor() {
		console.log("Digestive System 		-Running");
	}
}
class RespitorySystem {
	constructor() {
		console.log("Respitory System 		-Running");
	}
}
class CardiovascularSystem {
	constructor() {
		console.log("Cardiovascular System 	-Running");
	}
}
class LymphaticSystem {
	constructor() {
		console.log("Lymphatic System 		-Running");
	}
}
class ImmuneSystem {
	constructor() {
		console.log("Immune System 			-Running");
	}
}
class ExcretorySystem {
	constructor() {
		console.log("Excretory System 		-Running");
	}
}
class EndocrineSystem {
	constructor() {
		console.log("Endocrine System 		-Running");
	}
}
class ReproductiveSystem {
	constructor() {
		console.log("Reproductive System 	-Running");
	}
}
class NervousSystem {
	constructor() {
		console.log("Nervous System 			-Running");
	}
}
class MuscularSystem {
	constructor() {
		console.log("Muscular System 		-Running");
	}
}
class SkeletalSystem {
	constructor() {
		console.log("Skeletal System 		-Running");
	}
}
class IntegumentarySystem {
	constructor() {
		console.log("Integumentary System 	-Running");
	}
}


let body = document.querySelector("body");
body.addEventListener("load", testOrganSystems());
function testOrganSystems() {
	var systemCheck = new HumanOrganSystems();
}


































