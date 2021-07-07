const dateToStringFormat = require('../dateToStringFormat');
test("test1", () => {
	expect(dateToStringFormat(new Date(2021, 6, 6), 'MM/D/YY')).toBe("07/6/21")
})
test("test2", () => {
	expect(dateToStringFormat(new Date(2021, 6, 6), 'M/D/YYYY')).toBe("7/6/2021")
})
test("test3", () => {
	expect(dateToStringFormat(new Date(2021, 6, 6), 'MMM/D/YYYY')).toBe(("JUL/6/2021").toLowerCase())
})
test("test4", () => {
	expect(dateToStringFormat(new Date(2021, 6, 6), 'MMMM/D/YYYY')).toBe(("July/6/2021").toLowerCase())
})
test("test5", () => {
	expect(dateToStringFormat(new Date(2021, 6, 6), 'MMM/DD/YYYY')).toBe(("JUL/06/2021").toLowerCase())
})
test("test6", () => {
	expect(dateToStringFormat(new Date(2021, 6, 6), 'MMMM/D/Y')).toBe(("July/6/2021").toLowerCase())
})
test("test7", () => {
	expect(dateToStringFormat(new Date(2021, 6, 6), 'M-D/YYYY')).toBe("7-6/2021")
})
test("test8", () => {
	expect(dateToStringFormat(new Date(2021, 6, 6), 'MMMM,D-YYYY')).toBe(("July,6-2021").toLowerCase())
})
test("test9", () => {
	expect(dateToStringFormat(new Date(2021, 6, 6), 'MM:D:YYYY')).toBe("07:6:2021")
})
test("test10", () => {
	expect(dateToStringFormat(new Date(2021, 6, 6), 'M D YYYY')).toBe("7 6 2021")
})
test("test11", () => {
	expect(dateToStringFormat(new Date(2021, 6, 6), 'MMm/Dd/YYyy')).toBe(("JUL/06/2021").toLowerCase())
})