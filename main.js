// const firstRow = 'мама мыла раму';
// const secondRow = 'собака друг человека';

// function getRow(firstRow, secondRow) {
// 	return countChar(firstRow, 'а') > countChar(secondRow, 'а') ? firstRow : secondRow;
// }

// function countChar(string, char) {
// 	let count = 0;
// 	Array.from(string).forEach((ch, i) => {
// 		if (string.charAt(i) === char) count += 1;
// 	});
// 	return count;
// }

// console.log(getRow(firstRow, secondRow));

function formattedPhone(phone) {
	let result = '';
	Array.from(phone).forEach((ch, i) => {
		switch (i) {
			case 2: result += ( ' (' + ch);
				break;
			case 4: result += ( ch + ') ');
			 break;
			case 7: result += (ch + '-');
			 break;
			case 9: result += (ch + '-');
			 break;
			default: result += ch;
		}
	});
	return result;
}

console.log(formattedPhone('+71234567890'));