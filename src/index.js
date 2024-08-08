module.exports = function check(str, bracketsConfig) {
	// your solution
	bracketsConfig = bracketsConfig.map(item => item.join(''));
	while (bracketsConfig.length) {
		let a = 0;
		bracketsConfig.forEach(item => {
			if (str.indexOf(item) != -1) {
				str = str.replace(item, '');
			}
			else {
				a += 1;
			}
		})
		if (a === bracketsConfig.length) {
			bracketsConfig.length = 0;
		}
	}
	return str.length === 0 ? true : false;
}
