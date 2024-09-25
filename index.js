const fs = require('node:fs')

const timestamp = Date.now()
const dateObject = new Date(timestamp)
const hours = `0${dateObject.getHours()}`.slice(-2)
const minutes = `0${dateObject.getMinutes()}`.slice(-2);
const seconds = `0${dateObject.getSeconds()}`.slice(-2);
const date = `0${dateObject.getDate()}`.slice(-2)
const month = `0${dateObject.getMonth()}`.slice(-2)
const year = `${dateObject.getFullYear()}`

//write function
function createfile(){
fs.appendFile(`./timestamps/[${date}-${month}-${year} ${hours}hr${minutes}min${seconds}sec].txt`,`CurrentTimestamp : ${timestamp}`,(err) => {
    if(err) throw err
    console.log("done ");
    
})
}


function readfiles(){
    fs.readdir('./timestamps',(err,allfiles) => {
        if(err) throw err
        if(allfiles)
            {
                //read files in a folder function
                console.log(allfiles)

               // read content of files 

               allfiles.map((filename)=>{
                fs.readFile(`./timestamps/${filename}`,(err,contents) => {
                    if(err) throw err
                    console.log(`${filename} file contains  ${contents.toString()}`)
                })
               })
               
               
            }
    })
}

// read content of files


createfile()
readfiles()
