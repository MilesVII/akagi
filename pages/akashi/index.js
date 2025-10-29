const DEFAULT_SYLLABS = [
	"wa", "ra", "ya", "ma", "pa", "ba", "ha", "na", "da", "ta", "za", "sa", "ga", "ka", "ri", "mi", "pi", "bi", "ni", "chi", "ji", "shi", "gi", "ki", "i", "ru", "yu", "mu", "pu", "bu", "hu", "nu", "tsu", "zu", "su", "gu", "ku", "re", "me", "pe", "be", "he", "ne", "de", "te", "ze", "se", "ge", "ke", "ro", "yo", "mo", "po", "bo", "ho", "no", "do", "to", "zo", "so", "go", "ko",
	//"rya", "mya", "pya", "bya", "hya", "nya", "chya", "jya", "shya", "gya", "kya", "ryu", "myu", "pyu", "byu", "hyu", "nyu", "chyu", "jyu", "shyu", "gyu", "kyu", "ryo", "myo", "pyo", "byo", "hyo", "nyo", "chyo", "jyo", "shyo", "gyo", "kyo"
];
const RUNS = 12;

document.addEventListener("DOMContentLoaded", main);

function main() {
	console.log("hoio")
	const inputs = {
		list: document.querySelector("#i-syllist"),
		count: document.querySelector("#i-sylcount"),
		button: document.querySelector("#i-run")
	};
	const output = document.querySelector("output");

	inputs.list.value = DEFAULT_SYLLABS.join("\n");
	inputs.count.value = "3";
	inputs.button.addEventListener("click", () => {
		output.innerHTML = "";
		for (let i = 0; i < RUNS; ++i) {
			const count = parseInt(inputs.count.value, 10);
			const list = inputs.list.value.split("\n");

			const item = document.createElement("span");
			item.textContent = word(count, list);
			output.append(item);
		}
	})
}

function pickRandom(array, random = Math.random()) {
	return array[Math.floor(array.length * random)]
}

function range(from, to) {
	const r = [];
	for (let i = from; i < to; ++i)
		r.push(i);
	return r;
}

function word(sylcount, list) {
	// const sylcount = Math.floor(2 + 3 * Math.random());
	return range(0, sylcount).map(() => pickRandom(list)).join("")
}
