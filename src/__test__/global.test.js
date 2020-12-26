const text = 'Hola Mundo'
const fruits = ['manzana', 'melon', 'banana']

//Probar String
test('Debe contener un texto', () => {
	expect(text).toMatch(/Mundo/)
})

//Probar Array
test('¿Tenemos una banana?', () => {
	expect(fruits).toContain('banana')
})

//Probar Numeros
test('Mayor que', () => {
	expect(10).toBeGreaterThan(9)
})

//Probar Boolean
test('Verdadero', () => {
	expect(true).toBeTruthy()
})

//Probar Callbacks
const reverseString = (str, callback) => {
	callback(str.split('').reverse().join(''))
}
test('Probar un callback', () => {
	reverseString('hola', (str) => {
		expect(str).toBe('aloh')
	})
})

//Probar Promesas
const reverseString2 = (str) => {
	return new Promise((resolve, reject) => {
		if (!str) {
			reject(Error('Error'))
		}
		resolve(str.split('').reverse().join(''))
	})
}
test('Probar una Promesa', () => {
	return reverseString2('Hola').then((string) => {
		expect(string).toBe('aloH')
	})
})

//Probar async await
test('Probas async/await', async () => {
	const string = await reverseString2('hola')
	expect(string).toBe('aloh')
})

//Correr algo antes y después de nuestras pruebas
// afterEach(() => console.log('Despues de cada prueba'))
// afterAll(() => console.log('Despues de todas las pruebas'))
// beforeEach(() => console.log('antes de cada prueba'))
// beforeAll(() => console.log('antes de todas las pruebas'))
