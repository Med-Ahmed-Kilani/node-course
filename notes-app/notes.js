const fs = require("fs");
const chalk = require("chalk")

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicated = notes.filter((note) => note.title === title);

  if (duplicated.length === 0) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log(chalk.green("Note added!"));
  } else {
    console.log(chalk.red.bgWhite("Note title is already taken!"));
  }
};

const saveNotes = (notes) => {
  const data = JSON.stringify(notes);
  fs.writeFileSync("notes.json", data);
};

const removeNote = (title)=>{
  const notes = loadNotes();
  const duplicated = notes.filter((note)=>note.title===title)
  if(duplicated.length != 0 ){
    const filtredNotes = notes.filter((note)=>note.title!=title)
    saveNotes(filtredNotes)
    
    console.log(chalk.green.inverse('note with title '+title+' deleted'));
  }else{
    console.log(chalk.red.bold.inverse('there is no such note with title: '+title));
  }

}

const loadNotes = () => {
  try {
    const bufferData = fs.readFileSync("notes.json");
    const JSONData = bufferData.toString();
    return JSON.parse(bufferData);
  } catch (error) {
    return [];
  }
};

module.exports = { addNote: addNote, removeNote:removeNote };
