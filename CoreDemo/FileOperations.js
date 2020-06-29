//requiring path and fs modules
const path = require('path');
const fs = require('fs');
//joining path of directory 

const directoryPath = path.join('D:\\NodeDemos', 'CoreDemo');
fs.readdir(directoryPath, (err, files) => {
    console.log('-------------File Count in a Directory------------------ ');
    console.log("Length "+  files.length);
  });
//passsing directoryPath and callback function
fs.readdir(directoryPath, function (err, files) {
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 
    //listing all files using forEach
    files.forEach(function (file) {
        fs.readFile(path.join(directoryPath, file), (err, Buffer) => {
            console.log(Buffer.length);
          });
          console.log('-------------------------------------------- ');
        
        console.log(file); 
    });
});
//Vowel cOunt
fs.readdir(directoryPath, function (err, files) {
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 
    //listing all files using forEach
    files.forEach(function (file) {
        fs.readFile(path.join(directoryPath, file), 'utf8', (err, Buffer) => {
            var VowelsCount =0;
            if(Buffer.length > 0)
            {
           VowelsCount = Buffer.match(/[aeiou]/gi).length;
            }
           console.log('-------------------------------------------- ');
           console.log('File Name : ' + file);
           console.log('Text Count : ' + Buffer.length);
           console.log('Vowels Count : ' + VowelsCount);
            
          });

       
    });
});

fs.readdir(directoryPath, function (err, files) {
    //handling error
    console.log("text1");
    if (err) {
        console.log("text");
        return console.log('Unable to scan directory: ' + err);
    } 
    //listing all files using forEach
    files.forEach(function (file) {
        if(file.endsWith('.txt'))
        {
            console.log('End with .txt ' +file);
            // fs.unlink(file, function(err){

            //     if(err){
            //         throw err;
            //     }
            //     console.log('file deleted !');
            // });

            fs.appendFile(file, 'New text', function(err){

                if(err){
                    throw err;
                }
                console.log('file updated !');
            });
        }
        else
        {

            console.log('not ends with txt' +file);
        }
      
    });
});