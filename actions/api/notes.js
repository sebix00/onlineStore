const Note = require("../../db/models/note")

module.exports = {
   saveNote(req,res){
    const newNote = new Note({
        title:"zakupy",
        body: "jajka",
    })
    
    newNote.save().then(()=>{
        console.log("Notatka nozstala zapisana")
    })

       res.send("Strona glowna dziala")
   }
}

