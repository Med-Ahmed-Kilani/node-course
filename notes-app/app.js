const chalk = require("chalk");
const { argv } = require("yargs");
const yargs = require("yargs");
const notes = require("./notes");

yargs.version("1.1.0");

// Creat add command
yargs.command({
  command: "add",
  describe: "add new note",
  builder: {
    title: {
      describe: "This is your note you going to add",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "This is your note you going to add",
      demandOption: true,
      type: "string",
    },
  },
  handler: () => {
    notes.addNote(argv.title, argv.body);
  },
});

// create remove command
yargs.command({
  command: "remove",
  description: "remove a note",
  builder: {
    title: {
      describe: "delete a note",
      demandOption: true,
      type: "string",
    },
  },
  handler: () => notes.removeNote(argv.title),
});

// List command
yargs.command({
  command: "list",
  description: "List of notes",
  handler: () => notes.listNotes(),
});

// Read note command
yargs.command({
  command: "read",
  description: "Read a note",
  builder: {
    title: {
      demandOption: true,
      type: "string",
      describe: "title of the demanded note",
    },
  },
  handler: () => notes.readNote(argv.title),
});

yargs.parse();
