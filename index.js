function calculateTax(amount) {
    let Tax = 0.1 * amount
    console.log("The tax is " + Tax)
    return Tax
}

function convertToUpperCase(text) {
    let upperCaseText = text.toUpperCase()
    console.log("The uppercase text is " + upperCaseText)
    return upperCaseText
}

function findMaximum( num1, num2) {
    if (num1 > num2) {
        console.log("The maximum number is " + num1)
        return num1
    } else {
        console.log("The maximum number is " + num2)
        return num2
    }
}

function isPalindrome(word) {
    let convertedword = word.toLowerCase()
    let reversedWord = convertedword.split('').reverse().join('')
    if (convertedword === reversedWord) {
        console.log("The word is a palindrome.")
        return true
    } else {
        console.log("The word is not a palindrome.")
        return false
    }
}

function calculateDiscountedPrice(originalPrice, discountPercentage) {
    let discountedPrice = originalPrice - (originalPrice * discountPercentage / 100)
    console.log("The discounted price is: " + discountedPrice)
    return discountedPrice
}

calculateTax(1000)
convertToUpperCase("John")
findMaximum(100,200)
isPalindrome("madam")
calculateDiscountedPrice(100, 20)
// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };