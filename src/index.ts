//requiring path and fs modules
import {join} from 'path'
import {readdir} from 'fs'

//joining path of directory 
const directoryPath = join(__dirname, '.');
let types = ""
//passsing directoryPath and callback function
readdir(directoryPath, function (err, files) {
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 
    //listing all files using forEach
    files.forEach((file,i) => {
        const fileName = file.split(".")[0]

        if(i === 0)
            types += fileName
        else
            types += ` | ${fileName}`
    });
    console.log(types)
});


