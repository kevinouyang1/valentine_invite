import axios from "axios";

const accountSid = "AC138914e58e668a82cca0b28937177857";
const authToken = "88fa46cb26509d2f561917b20c303209";
const from = "+17405633039";
const to = "+12265075210";


export async function sendMessage() {
    const url = `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`;

    const data = new URLSearchParams({
        Body: "you have been reserved for a date on valentine's day with your soulmate, kevin ouyang :3",
        From: from,
        To: to,
      });

    const config = {
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${btoa(`${accountSid}:${authToken}`)}`,
    },
    };

    try {
        const response = await axios.post(url, data, config);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
  

}