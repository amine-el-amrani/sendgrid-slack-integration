/**
 * Sends event data to Slack.
 * @param {string} email - The email address associated with the event.
 * @param {string} event - The type of event (e.g., "open", "click").
 * @param {string} url - The URL associated with the event.
 */
function sendToSlack(email, event, url) {
  // Slack webhook URL
  var slackWebhookUrl = "YOUR SLACK WEBHOOK";

  // Create payload to send to Slack
  var payload = {
    "text": "###NEW EVENT FROM SENDGRID### \nEmail: " + email + "\nEvent: " + event + "\nUrl: " + url
  };

  // Send POST request to Slack webhook URL
  var options = {
    "method": "post",
    "contentType": "application/json",
    "payload": JSON.stringify(payload)
  };
  
  UrlFetchApp.fetch(slackWebhookUrl, options);
}

/**
 * Processes received data and sends it to Slack.
 * @param {Object} e - The event object containing the data received.
 */
function doPost(e) {
  var data = JSON.parse(e.postData.contents);

  // Iterate through each set of received data
  data.forEach(function(eventData) {
    var email = eventData.email;
    var event = eventData.event;
    var url = eventData.url || ""; // Leave empty if URL is not available

    // Send data to Slack
    sendToSlack(email, event, url);
  });
}
