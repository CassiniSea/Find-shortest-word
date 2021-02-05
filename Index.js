function findShort(s){
	return Math.min(...s.split(' ').map(word => word.length))
}
console.log(findShort('bitcoin take over the world maybe who knows perhaps'))
console.log(Math.min(...[1,3,5]))