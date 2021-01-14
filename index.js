// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]
   function destructivelyAppendDriver(name) {
       return drivers.push(name)
   }
   function destructivelyPrependDriver(name) {
       return drivers.unshift(name)
   }
   function destructivelyRemoveLastDriver() {
       return drivers.pop()
       //.pop removes the last so no argument needed
   }

   function destructivelyRemoveFirstDriver() {
       return drivers.shift()
   }
   function appendDriver(name) {
       return [...drivers, name]
   }
   function prependDriver(name) {
       return [name, ...drivers]
   }
   function removeLastDriver() {
       return drivers.slice()
   }
   function removeFirstDriver() {
       return drivers.slice()
   }