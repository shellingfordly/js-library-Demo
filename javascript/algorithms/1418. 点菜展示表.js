/**
 * @param {string[][]} orders
 * @return {string[][]}
 */
var displayTable = function (orders) {
    const result = []
    const foodMap = {}
    const tableMap = {}
    for (let i = 0; i < orders.length; i++) {
        const table = orders[i][1]
        const food = orders[i][2]
        foodMap[food] = 1
        if (!tableMap[table]) tableMap[table] = {}
        if (tableMap[table][food]) {
            tableMap[table][food]++
        } else {
            tableMap[table][food] = 1
        }
    }
    const foodList = Object.keys(foodMap).sort()
    result[0] = ['Table', ...foodList]

    let index = 1
    for (let key in tableMap) {
        const table = tableMap[key]
        console.log('table:', table)
        console.log('=========================')
        result[index] = [key]
        for (let i = 0; i < foodList.length; i++) {
            const food = foodList[i]
            const tf = table[food]
            console.log('food:', food, '--- tf:', tf)
            if (tf) {
                result[index].push(tf)
            } else {
                result[index].push(0)
            }
        }
        index++
    }

    return result
};

console.log(displayTable([["David", "3", "Ceviche"], ["Corina", "10", "Beef Burrito"], ["David", "3", "Fried Chicken"], ["Carla", "5", "Water"], ["Carla", "5", "Ceviche"], ["Rous", "3", "Ceviche"]]))