const fs = require('fs');

function save(data)
{
    
    const filePath = 'E:\\prgs\\HTML\\dynamic div tag\\fb\\post.json';
    fs.readFile(filePath, 'utf8', (err, fileData) => {
        if (err) {
        

            console.error('Error reading file:', err);
           
        } else {
            try {
            
            const dataArray = JSON.parse(fileData);
    
            dataArray.push(data);
    
            const updatedData = JSON.stringify(dataArray);
    
            fs.writeFile(filePath, updatedData, (writeErr) => {
                if (writeErr) {
                console.error('Error writing to file:', writeErr);
                } else {
                console.log('Data has been appended to post.json');
                userInput = document.getElementById("userInput");
                userInput.value = "";
                userInput.focus();
                }
            });
            } catch (parseError) {
            console.error('Error parsing existing JSON data:', parseError);
            }
        }
        });
        return
}



function input() {

    var userInput = document.getElementById("userInput").value;
    var currentDate = new Date();
    var formattedDate = currentDate.toISOString();

    
    const data = {
        user_name: "Nikola Tesla",
        date_time: formattedDate,
        input: userInput,
        like: 0,
        comment: 0,
        share: 0
    };

    save(data);
    document.write("hello");
    userInput = document.getElementById("userInput");
    userInput.value = "";
    userInput.focus();
   
}

input()