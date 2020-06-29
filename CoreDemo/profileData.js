 fs = require('fs');
 const path = require('path');
 const directoryPath = path.join('D:\\NodeDemos', 'CoreDemo');
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
            fs.stat(file, (error, stats) => { 
                if (error) { 
                  console.log(error); 
                } 
                else { 
                  console.log("Stats object for: Text.txt"); 
                  console.log(stats); 
                  fs.appendFile('newText.txt', JSON.stringify(stats), function(err){

                    if(err){
                        throw err;
                    }
                    console.log('file updated !');
                });
                  // Using methods of the Stats object 
                //   console.log("Path is file:", stats.isFile()); 
                //   console.log("Path is directory:", stats.isDirectory()); 
                } 
              }); 

            
        }
        
      
    });
});