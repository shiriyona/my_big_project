import { Email } from "../../models/emails.model";

export const EMAILS_MOCK_DATA: Email[] = [
  {id: 1, subject: 'Meeting for discussing', time: '8:15', name: 'Shlomi Biton',
   description: 'Hello, I would like to schedule a meeting with you to discuss the progress of the project. Send me your date for the week and we will schedule a meeting.'},
  {id: 2, subject: 'Finding job', time: 'wed 20:29', name: 'Alex Levi',
   description: 'Hello, I heard that you are looking for employees in your company, I would love to join'},
  {id: 3, subject: 'Information about the banana project', time: 'wed 20:23', name: 'Lili Bloom', 
  description: 'Hello, I need a detailed report of the banana project, I would appreciate it if you could do it by tomorrow'},
  {id: 4, subject: 'Reset password', time: 'wed 18:56', name: 'Bebe', description: 'Forgot your password? Click the link attached below to reset it'},
  {id: 5, subject: 'Someone logged into your Google account', time: 'wed 16:00', name: 'Bel Reve', description: ''},
  {id: 6, subject: 'The order is on the way', time: 'wed 12:22', name: 'Chuck Vog', description: ''},
  {id: 7, subject: 'Weekly Projects', time: 'wed 10:45', name: 'Noam', description: 'Your shipment has arrived at the supplier and will reach you within a few days'},
  {id: 8, subject: 'Verify your email address with TikTok', time: 'tu 22:00' , name: 'Olivia Deko', 
  description: 'You need to confirm your account by entering your email. Please click on the link and enter your email'},
  {id: 9, subject: 'Verify your email address with TikTok', time: 'tu 20:56', name: 'Frank Mosh', description: ''},
  {id: 10, subject: 'Neon', time: 'tu 20:22', name: 'Neil Wes', description: ''},
  ];