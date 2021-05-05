export function defineProperty(obj, key, value, enumerable) {
	Object.defineProperty(obj, key, {
		value,
		enumerable
	})
}