function talk(){
    let know = {
      "hello" : "Hello, how can I help you?",
      "how are you?" : "Good, how are you?",
      "contact" : "My contact info is displayed in the contact section. You can either call, email or meet me in person.Thrilled to hear from you!",
      "working hours" : "I'm a chatbot, so mine-25/7. But when using the contact info you may want to try 9-5.",
      "projects" : "As I'm a begginner my portfolio is small, but mighty and would love to extend it by working on your projects.",
      "ok" : "Want to know more?",
      "bye" : "Bye! Nice talking to you!"
    };
    let user = document.getElementById('userBox').value;   
    let userLower=user.toLowerCase();
    let inputCurated=userLower.replace(/[^a-z ?]/g,'');
    if (inputCurated in know ) {
      document.getElementById('chatLog').innerHTML = know[inputCurated] + "<br>";
      document.getElementById("userMessage").innerHTML=user+ "<br>";           
    }else{
      document.getElementById('chatLog').innerHTML = "Sorry,I didn't understand <br>"; 
      document.getElementById("userMessage").innerHTML=user+ "<br>";       
    }
   
  }
  function openChat() {
    document.getElementById("chatBox").style.display = "block";
  }
  function closeChat() {
    document.getElementById("chatBox").style.display = "none";
  }
