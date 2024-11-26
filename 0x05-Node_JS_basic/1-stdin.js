#!/usr/bin/node

console.log('Welcome to Holberton School, what is your name?');


process.stdin.setEncoding('utf-8');


let Piped = false;


if (!process.stdin.isTTY){
	Piped = true;
}
process.stdin.on('data', (data) => {
	const input = data.trim();
	console.log(`Your name is: ${input}`);
	if(Piped){
		console.log('This important software is now closing');
	}
	process.exit();
});

process.on('SIGINT', () => {
	if (Piped){
		console.log('This important software is now closing');
	}
	process.exit();
});
