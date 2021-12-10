/**
 * @param {number} n
 * @param {number[][]} relation
 * @param {number} k
 * @return {number}
 */
var numWays = function (n, relation, k) {
  const start = relation[0]
  const res = []
  for (let i = 0; i < relation.length; i++) {
    const a = find(start[1], relation, k)
    console.log(a)
    if (a && a.length == k - 1) res.push(a)
  }

  // console.log(res);
  return res.length
};

const hash = {}
let count = 1

function find(start, relation, k) {
  for (let i = 0; i < relation.length; i++) {
    const item = relation[i]
    if (item[0] === start) {
      count++
      let res = [item]
      if (count < k) {
        const l = find(item[1], relation, k)
        if (l) res = [item, ...l]
      }
      return res
    }
  }
}
// n = 5, relation = [[0,2],[2,1],[3,4],[2,3],[1,4],[2,0],[0,4]], k = 3
numWays(5, [[0, 2], [2, 1], [3, 4], [2, 3], [1, 4], [2, 0], [0, 4]], 3)