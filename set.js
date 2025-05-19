const fs = require('fs-extra');
//const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'ALPHA;;;H4sIAAAAAAAAA5VVXbOiOBD9L3nVGhERwapbtYDKh3LFT9StfQgQMAoEQxBhyv++hV5nbtXszt7lKSSk+5zTp5vvICU4R1NUgeF3kFF8hQw1S1ZlCAyBWoQhoqANAsggGAJTq+KD1HuXlTq91btsXVJZmnjbqq47pDyIbpTrp/3eRyn3Bu5tkBVejP3fBUQ4rAbB9DbqlB1cdryrv5Dx/taqWvqEurNJeOiR+aZFVtIbuDcRIaY4jcbZESWIwniKKgdi+jX4uREbW8/YRqPJTk3SxCbbcmonzLN3FixX2UqAVeBWvjzefw3+iamLzF/PC8Pn3v3Mt+BF13JOsdc3R1/DTVcOit0p6ZKR/4Sf4yhFgRmglGFWfVl3Xolvs0TcvvfqOUN5Bb1budzMTN3m/KS1n2QrMzmJXJdOvqh7KXvUdS8XTpA7gb6Hpd4hV1M7rYtq/r7I8eVsK5IEq71GPgN36Msr5/+jO6e19E6hSP2W29HnXWdRoLHGM+lqBCyGQXGJxMWhVqw+538N/sQQ3W0L1bvN7jCOTmd+vlvr5zRKrfzCVoMzGWi8qPQi/rz5CR+ygv4O5XLJRoZoTUacpFi7+abbY7c0tP3V8Uimvg5XMX/VVUWL00mxlQ924Zws7ASaH7qq5SytpDhek1rKUyvzd7Z0k6fCeVS+PRidUWUGYNi9twFFEc4ZhQyTtNkT+20Ag+sK+RSxh7rgom6SmdFSolrZL+2LGMeimi2dxGMOPXSD/NIXHJLxZ2Hgv4E2yCjxUZ6jwMA5I7SyUZ7DCOVg+OejUA1nihLCkIWDxk29Xr/f7UuSyA/+yL+VR8hymGXfUsRAG4SUJDYCQ0YL1AaPC/0xJ0o8J4w5QRpoI1URxqLSG6hyV5Qmkqw1DJNn0jVOUM5gkoFhdyAMxP5A6vXuf7VBim7saZ+GdK/bBiGmOdukRRYTGLy89TqEvk+KlK2q1NeaBaJg+GkbMYbTKG+YFSmk/hFfkdbwAMMQxjn6oTOiKHhx+ZgdGgma8vOzg6rrYwU02JtAv2gzFLq/ypPC5mvgwBgyDGPQBvHzoij1BFnqS6IgcGK3udsc3H9gblIEiEEc52AItGmdEj/XxrPQpPZY1xUzUrSoQfPi+LLs0xNIrKHl2HStxYkw4A8klGu2Pmse3OjC3jt5I17w4wPHR9LbPwQBQ3CliisfpwvpIu+rMslcz9i3omrG0HI/2otHpNY98+wpnETiVHO94y5Qz6oTW8pO3Eamk5zd4HbyDSs3MfQXiUp0pEVvTbYAXbGPPidzDFQxe5/GungbCdlyHtP4ug0LGzqdyExX0SXFOsaYYAGubpNLzy1FMbvW0zNmJzNajJSVXU0MudUlxWWBbkYyUZTFs5kezRx/DFH84XP8eA0xesykjyr9ZzWfwBvTcff2pxgfU+5fJoW6K3Ier+spV2aHYi4n0Oj4g01fSfhYLXRd4Eu5MCw3eCcOuDfuz2LIQkKT5ieUeBC0ASVFY2EzDclvMmmqaWrKk3YMc6b8bItfO20gi8+vHEoyA+bHRgFdUJKi8XilZNmKQfbqMqA0jzZwwf1vW6eoygcIAAA=',
    PREFIXE: process.env.PREFIX || ".",
    GITHUB : process.env.GITHUB|| 'https://github.com/Keithkeizzah/ALPHA-MD',
    OWNER_NAME : process.env.OWNER_NAME || "Keith",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "254748387615",  
    CHATBOT : process.env.CHATBOT || "no",  
    CHATBOT_INBOX : process.env.CHATBOT_INBOX || "yes",                     
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'non',
    AUTO_REACT: process.env.AUTO_REACTION || "non",
    OWNER_REACT: process.env.OWNER_REACT || "yes",
    URL: process.env.URL || "https://files.catbox.moe/6hd2t7.jpg",  
    AUTO_LIKE_STATUS: process.env.AUTO_LIKE_STATUS || 'yes',              
    EMOJIS: process.env.EMOJIS || "⚔️, 👿, 🌎, 💜",
    AUTOBIO_MSG: process.env.AUTOBIO_MSG || "I DON'T GIVE A FUCK⚔️",
   GREET_MSG: process.env.GREET_MSG || "Huskii am unavailable mzee 😂",               
    AUTO_READ_MESSAGES: process.env.AUTO_READ_MESSAGES || "no",
    AUTO_BLOCK: process.env.AUTO_BLOCK || 'no', 
    GCF: process.env.GROUP_CONTROL || 'no', 
    GREET : process.env.GREET || "yes", 
    VOICE_CHATBOT: process.env.VOICE_CHATBOT || 'no',
    VOICE_CHATBOT_INBOX: process.env.VOICE_CHATBOT_INBOX || 'yes',
              
    AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || 'viewed by alpha',   
    AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || 'no',
    AUTOBIO: process.env.AUTOBIO || 'yes',       
    ANTICALL_MSG : process.env.ANTICALL_MSG || 'call declined',             
    GURL: process.env.GURL  || "https://whatsapp.com/channel/0029Vaan9TF9Bb62l8wpoD47",
    EVENTS :process.env.EVENTS || "yes",
    CAPTION : process.env.CAPTION || "ALPHA-MD",
    BOT : process.env.BOT_NAME || 'ALPHA_MD',
    MODE: process.env.PUBLIC_MODE || "yes",              
    TIMEZONE: process.env.TIMEZONE || "Africa/Nairobi", 
    PM_PERMIT: process.env.PM_PERMIT || 'no',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME || null,
    HEROKU_API_KEY : process.env.HEROKU_API_KEY || null,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '1',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ADM : process.env.ANTI_DELETE_MESSAGE || 'no',
    ANTICALL: process.env.ANTICALL || 'yes',              
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9" : "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9",
    /* new Sequelize({
     dialect: 'sqlite',
     storage: DATABASE_URL,
     logging: false,
})
: new Sequelize(DATABASE_URL, {
     dialect: 'postgres',
     ssl: true,
     protocol: 'postgres',
     dialectOptions: {
         native: true,
         ssl: { require: true rejectUnauthorized: false },
     },
     logging: false,
}),*/
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});
