let Converts = (() => {
  const Stack = require('../lib/Stack')
  class Converts {
    /**
     * @param  {} decNumber 进制转换的源数据
     * @param  {} base 需要转换的进制类型
     */
    static baseConverter (decNumber, base) {
      let remStack = new Stack(),
        rem,
        baseString = '',
        digits = '0123456789ABCDEF'
      while(decNumber > 0){
        rem = Math.floor(decNumber % base)
        remStack.push(rem)
        decNumber = Math.floor(decNumber / base)
      }
      while(!remStack.isEmpty()){
        baseString += digits[remStack.pop()]
      }
      return baseString
    }
    static moneyConverter (money, digitNum = 2) {
      digitNum = (digitNum >= 0 && digitNum <= 20) ? digitNum : 2
    }
  }
  return Converts
})()

exports = module.exports = Converts