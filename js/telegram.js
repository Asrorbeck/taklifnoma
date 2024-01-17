function sendTelegram() {
    // Get form values
    var name = document.getElementById('name').value;
    var wish = document.getElementById('wish').value;
    var come = document.querySelector('input[name="come"]:checked').value;
    var answer = document.querySelector('input[name="answer"]:checked').value;
  
    // Replace 'YOUR_BOT_TOKEN' with your actual bot token
    var botToken = '6791860726:AAFbe51RxirUwPk9lHYbs5qnfIbqRlPjPdQ';
  
    // Replace 'YOUR_CHAT_IDS' with an array of your actual chat IDs
    var chatIds = ['905770018'];
  
    // Construct the message
    var message = `Name: ${name}
  
Will he/she come?: ${answer}
  
From whose side: ${come}
  
Wish: ${wish}`;
  
    // Telegram Bot API endpoint for sending messages
    var apiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
  
    // Iterate through each chat ID and send the message
    chatIds.forEach(chatId => {
      // Construct the data to be sent
      var data = {
        chat_id: chatId,
        text: message,
      };
  
      // Make a POST request to the Telegram Bot API
      fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then(response => response.json())
        .then(data => {
          console.log(`Message sent`);
          // You can handle the response here if needed
        })
        .catch(error => {
          console.error(`Error sending message:`, error);
        });
    });
  
    // Show alert
    alert("Your message successfully sent!");
  
    // Clear the form
    document.getElementById('name').value = '';
    document.getElementById('wish').value = '';
    document.querySelector('input[name="answer"]:checked').checked = false;
    document.querySelector('input[name="come"]:checked').checked = false;
  
    // Prevent the form from submitting traditionally
    return false;
  }