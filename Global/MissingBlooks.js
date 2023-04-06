let str = '';
blacket.packBlooks.forEach(a => {
    if (!Object.keys(blacket.user.blooks).includes(a)) str+= '[' + a + '] '
})
console.log(str)
