const os = require('os')

//info about current user
const user = os.userInfo()
console.log(user)


//method retures the system uptime in secomd
console.log('the system uptime is ${os.uptime()} seconds');

const current = {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),

}

console.log(currentOS)
