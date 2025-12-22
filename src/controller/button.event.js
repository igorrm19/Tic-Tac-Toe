result = arrayObj.filter(obj => {
    return [1, 2, 3].includes(obj.id) && obj.nome === X || [1, 2, 3].includes(obj.id) && obj.nome === O
}).map(obj => obj.nome).find(objt => {
    return objt.nome === X || objt.nome === O
})