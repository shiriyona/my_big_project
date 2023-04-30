import { Email } from "../../models/emails.model";
import { v4 as uuidv4 } from 'uuid';

export const EMAILS_MOCK_DATA: Email[] = [
  {id: uuidv4(), subject: 'Meeting for discussing', date:	'10/2/23, 8:23', name: 'Shlomi Biton',
   description: 'Hello, I would like to schedule a meeting with you to discuss the progress of the project. Send me your date for the week and we will schedule a meeting.'},
  {id: uuidv4(), subject: 'Finding job', date: '5/2/23, 6:22 PM', name: 'Alex Levi',
   description: 'Hello, I heard that you are looking for employees in your company, I would love to join'},
  {id: uuidv4(), subject: 'Information about the banana project', date: '4/2/23, 6:16 PM', name: 'Lili Bloom', 
  description: 'Hello, I need a detailed report of the banana project, I would appreciate it if you could do it by tomorrow'},
  {id: uuidv4(), subject: 'Reset password', date: '4/2/23, 2:29 AM', name: 'Bebe', description: 'Forgot your password? Click the link attached below to reset it'},
  {id: uuidv4(), subject: 'Someone logged into your Google account', date: '2/2/23, 2:22 AM', name: 'Bel Reve', description: ''},
  {id: uuidv4(), subject: 'The order is on the way', date: '1/2/23, 4:06 PM', name: 'Chuck Vog', description: ''},
  {id: uuidv4(), subject: 'Weekly Projects', date: '31/1/23, 12:00 AM', name: 'Noam', description: 'Your shipment has arrived at the supplier and will reach you within a few days'},
  {id: uuidv4(), subject: 'Verify your email address with TikTok', date: '30/1/23, 2:10 PM', name: 'Olivia Deko', 
  description: 'You need to confirm your account by entering your email. Please click on the link and enter your email'},
  {id: uuidv4(), subject: 'Verify your email address with TikTok', date: '28/1/23, 8:54 AM', name: 'Frank Mosh', description: ''},
  {id: uuidv4(), subject: 'Neon', date: '26/1/23, 10:10 AM', name: 'Neil Wes', description: ''},
  ];





    // console.log(uuid);
    // console.log(d);