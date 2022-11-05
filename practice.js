let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format

let n = parseInt(readLine());
for (let i=0;i<n;i++){
	let [a1,a2] = readLine().split(" ");
	let g = readLine();
	let b1 = g.indexOf(a1), b2 = g.indexOf(a2);
	let result = g.split("");
	let temp = a2;
	result[b2] = result[b1];
	result[b1] = temp;
	result = result.join("");
	console.log(result);
}