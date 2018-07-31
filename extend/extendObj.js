if (!Object.deleteKeys) {
    /**
     * @author winer
     * @param  {Object} obj
     * @param  {Boolean} deep 是否深度删除，默认值：false
     * @param  {Array} equalVals 满足数组中的条件值即删除，默认值：['', undefined, null]
     * @returns {*}
     */
    Object.deleteKeys = function (obj, deep = false, equalVals = ['', undefined, null]) {
        if (!(obj instanceof Object)) return obj;
        if (!(equalVals instanceof Array)) return obj;
        for (let key in obj) {
            if (equalVals.includes(obj[key])) {
                delete obj[key];
                continue;
            }
            if (deep) {
                obj[key] = Object.deleteKeys(obj[key], deep, equalVals)
            }
        }
        return obj
    }
}

if (!Object.replaceKeys) {
    /**
     * @author winer
     * @param  {Object} obj
     * @param  {Object} tempVal 用于替换的值
     * @param  {Boolean} deep 是否深度替换，默认值：false
     * @param  {Array} equalVals 满足数组中的条件值即替换，默认值：['', undefined, null]
     */
    Object.replaceKeys = function (obj, tempVal, deep = false, equalVals = ['', undefined, null]) {
        if (!(obj instanceof Object)) return obj;
        if (!(equalVals instanceof Array)) return obj;
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                if (equalVals.includes(obj[key])) {
                    obj[key] = tempVal
                } else {
                    if (deep) obj[key] = Object.replaceKeys(obj[key], tempVal, deep, equalVals)
                }
            }
        }
        return obj;
    }
}