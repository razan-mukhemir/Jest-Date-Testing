const add = require('../add');
test('add days test1', () => {
	expect(add(new Date('December 17, 1995 03:24:00'), '5d')).toBe(22)
})
test('add days test2', () => {
	expect(add(new Date('December 17, 1995 03:24:00'), '3D')).toBe(20)
})
test('add houres test1', () => {
	expect(add(new Date('December 17, 1995 03:24:00'), '5h')).toBe(8)
})
test('add houres test2', () => {
	expect(add(new Date(1998, 5, 14, 12), '3H')).toBe(15)
})