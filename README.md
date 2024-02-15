# SendGrid Slack Integration

sendgrid-slack-integration is a Google Apps Script project that enables seamless integration between SendGrid and Slack. This script allows users to receive real-time notifications in a designated Slack channel for various email events, such as opens and clicks, tracked by SendGrid. With easy setup and configuration, stay informed about email engagement directly within your Slack workspace.


## Setup Instructions

### Slack Setup
1. Create a new Slack App in your Slack workspace.
2. Add the Slack App to the channel where you want to receive notifications.
3. Obtain the webhook URL for your Slack App.

### Google Apps Script Setup
1. Create a new Google Apps Script project.
2. Copy and paste the contents of the `sendgrid_slack_integration.gs` file into your Google Apps Script project.
3. Deploy the Google Apps Script as a web app and obtain the URL.

### SendGrid Setup
1. Log in to your SendGrid account.
2. Navigate to the "Settings" > "Mail Settings" > "Event Webhook" section.
3. Add a new Event Webhook with the URL of your Google Apps Script web app.
4. Specify the events you want to track, such as "Opened" and "Clicked"...
5. Test the integration by sending test emails and verifying the notifications in your Slack channel.

## File Structure
- `sendgrid_slack_integration.gs`: Google Apps Script file containing the integration code.
- `README.md`: This file, providing setup instructions and usage details.

## Credits
This integration script was created by me EL AMRANI Amine.
