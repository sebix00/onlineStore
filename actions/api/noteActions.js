const Note = require("../../db/models/note")

class NoteActions {
   saveNote(req,res){
//     const newNote = new Note({
//         title:"zakupy",
//         body: "jajka",
//     })
    
//     newNote.save().then(()=>{
//         console.log("Notatka nozstala zapisana")
//     })

const title = req.body.title;
const body = req.body.body

       res.send(`notatka zostala stworzona tytul: ${title}, tresc: ${body}`)
   }
   getAllNotes(req,res){
       //pobieranie notatek
       res.send("API dziala")
   }
   getNote(req,res){
       //pobieranie konkretnej notatki
       res.send("Info o notatce")
   }
   updateNote(req,res){
       //aktualizacja notatki
       res.send("notatka zaktualizowana")
   }
   deleteNote(req,res){
       const id = req.params.id
       //usuwanie notatki
       res.send(`Notatka usunieta ID: ${id}`)
   }
}

module.exports = new NoteActions();

