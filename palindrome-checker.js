function palindrome(str) {
  let lower = str.toLowerCase()
     const newStr = lower.replace(/[_\W]/g,"");
     console.log(newStr)
          let string = newStr.split("")
      console.log(string)
      let reversed = string.reverse()
      console.log(reversed)
      let joined = reversed.join("")
      console.log(joined)
          if (newStr === joined){
    return true; 
    }else {
    return false; 
    }

  }
palindrome("nope");
