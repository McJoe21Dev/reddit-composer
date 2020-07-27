function goform(){
  let vals = {

  to: document.getElementById("to").value,
  subject: document.getElementById("subject").value,
  body: document.getElementById("body").value
  }
  
  var output = 'https://www.reddit.com/message/compose/?to='+vals.to+'&subject='+vals.subject+'&message='+vals.body
  output = output.replace(/ /g, '+')
  var output2 = '[Message to '+ vals.to+']('+output+')'
  
  document.getElementById("result").value = output
  document.getElementById("result2").value = output2
  document.getElementById("link").href = output
  
}