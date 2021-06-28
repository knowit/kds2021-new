import  { GoogleSpreadsheet } from 'google-spreadsheet'; 
import dotenv from 'dotenv';

const docId = '1B8sdJBfb3ercx_kPMfq0j5kCItxuSp6-7SXveW7UL7s';
dotenv.config(); 

async function spreadsheetWriter() {
    const doc = new GoogleSpreadsheet(docId);
    await doc.useServiceAccountAuth({
        client_email: process.env.CLIENT_EMAIL,
        private_key: process.env.PRIVATE_KEY.toString().split('\\n').join('\n')   
    });
    //doc.resetLocalCache();  
    await doc.loadInfo();
    await doc.updateProperties({title: 'WRITE TO SHEET TEST'});
    
    var sheet = doc.sheetsByTitle["Sheet1"]; 
    // var header = "header"; 

    await sheet.setHeaderRow(Object.keys(sheetDict));
    await sheet.loadHeaderRow(); 

    // append rows
    var rows = await sheet.getRows(); 
    for (var i = 0; i < sheetDict["talkId"].length; i++) {
        rows[i].talkId = sheetDict["talkId"][i];
        rows[i].title = sheetDict["title"][i];
        rows[i].language = sheetDict["language"][i];
        rows[i].difficulty = sheetDict["difficulty"][i];
        rows[i].type = sheetDict["type"][i];
        rows[i].room = sheetDict["room"][i];
        rows[i].day = sheetDict["day"][i];
        rows[i].timeStart = sheetDict["timeStart"][i];
        rows[i].timeEnd = sheetDict["timeEnd"][i];
        rows[i].tags = sheetDict["tags"][i]; // .join(" | ");
        await rows[i].save(); 
    }

    //const larryRow = await sheet.addRow({ talkId: 'Larry Page', title: 'larry@google.com' }); 

    // append rows
    //const larryRow = await sheet.addRow({ name: 'Larry Page', email: 'larry@google.com' });
    //const moreRows = await sheet.addRows([
    //{ name: 'Sergey Brin', email: 'sergey@google.com' },
    //{ name: 'Eric Schmidt', email: 'eric@google.com' },
    //]);
    
   

    //const sheet = await doc.addSheet({ headerValues: ['name', 'email'] });
    
    //await sheet.addRow({ name: 'Larry Page', email: 'larry@google.com' });
    //rows[1] = 'sergey@abc.xyz'; // update a value
    //await rows[1].save(); // save updates
}

const sheetDict = {
    "talkId" : [ '1', '2', '3', '4', '5' ],
    "title": [
      'Webcomponents in EPiServer',
      'How to Polish',
      'The dangers of closed source and software as a service',
      'A quick-draw designer and a cowboy developer walk into a saloon...',
      'Test talk'
    ],
    "language": [ 'English', 'Polish', 'English', 'English', 'Norwegian' ],
    "difficulty": [ 'Advanced', 'Hard', 'Intermediate', 'Beginner', 'Beginner' ],
    "type": [
      'Some time (20 min)',
      'Short (5 min)',
      'Long (60 min)',
      'Long presentation (60 minutes)',
      'Lightning talk'
    ],
    "description": [
      'Lalla',
      'Plz come',
      'Cool presentation',
      'Frontiers is a Bergen-based group of developers and designers.',
      'lalal'
    ],
    "room": [ 'Dræggen 42', 'Dræggen 7', 'Dræggen 4', 'Kongesalen', 'Room 404' ],
    "day": [ 'Sunday', 'Friday', 'lørdag', 'fredag', 'fredag' ],
    "timeStart": [ '1400', '1100', '1300', '1000', '1000' ],
    "timeEnd": [ '1420', '1105', '1400', '1100', '1100' ],
    "tags": [
      'front-end | ux',
      'arduino | git',
      'machine learning | deep learning',
      'deep learning | data mining',
      'ux | arduino'
    ]
}

const speakerDict = {
    name: [
      'Fredrik Høgberg',
      'Marcus Grenangen',
      'Maja Jaakson',
      'Lewandowski'
    ],
    info: [
      '.NET Developer, Certified Lead Developer',
      'Marcus is a long time software engineer that has worked around the world in various technical roles.\\n\\nMarcus has worked at Microsoft, written core infrastructures in AAA games such as Battlefield and Starwars as well as worked on open source technologies to name a few things.\\n\\nMarcus has a deep passion for software and open source and tries his best to try to make the world a little bit better, through software and services. ',
      'Maja is a front-end developer by day and a sophist by night. She enjoys candlelight pair programming, long walks to the powerlifting gym, and annoying innocent bystanders with questions about what makes something a programming language.',
      'Lewandowski is from Poland, and he speaks Polish. He is here today to speak about nail polish. Also he is decent at football.'
    ],
    talkId: [ '1 | 5', '3', '2 | 4', '2|3' ]
}

const otherEventDict = {
    type: [ 'Lunch', 'Lunch', 'Welcome' ],
    day: [ 'fredag', 'lørdag', 'fredag' ],
    timeStart: [ '1130', '1130', '1000' ],
    timeEnd: [ '1230', '1230', '1030' ]
}

spreadsheetWriter(); 