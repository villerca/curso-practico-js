const resultYearMath = [
    {
        noteExam: 7,
        credit: 1,

    },
    {
        noteExam: 5,
        credit: 1,
    },
    {
        noteExam: 6,
        credit: 1,
    },
    {
        noteExam: 6,
        credit: 3,
    },
];

// Formula 
// [(noteExam * credit)+(noteexam *credit)+(noteExamen *credit)+(noteExam*credit)] / (credit1 + credit 2 +credit3 + creditEnd)

const notesWithCredit = resultYearMath.map(function(noteObject) {
    return noteObject.noteExam * noteObject.credit;

});

const sumNoteWithCredit = notesWithCredit.reduce(
    function (sum = 0, newVal) {
        return sum + newVal;
    }
);

const credits = resultYearMath.map(function (noteObject) {
    return noteObject.credit;
});

const sumCredits = credits.reduce(
    function (sum = 0, newVal) {
        return sum + newVal;
    }
);

const mediaAritPonderada = sumNoteWithCredit / sumCredits;