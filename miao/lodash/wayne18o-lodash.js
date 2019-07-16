var wayne18o = {
    chunk: function (array, size) {
        const sum = Math.ceil(array.length / size)
        var result = []
        var i = 0
        if (!array.length || !size || size < 1) {
            return []
        }
        var start = 0, end = size
        while (i < sum) {
            result[i] = array.slice(start, end)
            start += size
            end += size
            i++
        }
        return result
    },
    compact: function (array) {
        var result = []
        for (let i = 0; i < array.length; i++) {
            var num = array[i]
            if (Boolean(num)) {
                result.push(num)
            }
        }
        return result
    },
    concat: function (array, ...args) {
        var result = args
        for (let i = 0; i < result.length; i++) {
            if (result[i].length) {
                for (let j = 0; j < result[i].length; j++) {
                    array.push(result[i][j])
                }
            } else {
                array.push(result[i])
            }

        }
        return array
    },
    reduce: function (collection, fun, initialval) {
        if (arguments.length === 2) {
            initialval = 0
        }
        for (var i in collection) {
            initialval = fun(initialval, collection[i], i)
        }
        return initialval
    },
    identity: function (...args) {
        return args[0]
    },
    every: function (collection, fun) {
        for (var i in collection) {
            if (!fun) {
                return false
            }
        }
        return true
    },
}
