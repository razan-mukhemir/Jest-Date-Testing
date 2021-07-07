const stringToDateFormat = require('../stringToDateFormat');
test('convert string date to date object test1', () => {
	expect(stringToDateFormat("January.10.2009", 'mmmm.D.yy')).toStrictEqual(new Date(2009, 0, 10))
});
test('convert string date to date object test2', () => {
	expect(stringToDateFormat("January/10/2009", 'mmmm/dd/yyYY')).toStrictEqual(new Date(2009, 0, 10))
});
test('convert string date to date object test3', () => {
	expect(stringToDateFormat("01 10 2009", 'mm dd yy')).toStrictEqual(new Date(2009, 0, 10))
});
test('convert string date to date object test4', () => {
	expect(stringToDateFormat("JAN/10/2009", 'mMm/dd/yy')).toStrictEqual(new Date(2009, 0, 10))
});
test('convert string date to date object test5', () => {
	expect(stringToDateFormat("1 10 2009", 'm dd y')).toStrictEqual(new Date(2009, 0, 10))
});