require("./db");
const Vocab = require("./models/Vocab");

async function seed() {
  await Vocab.deleteMany();

  await Vocab.insertMany([
    { category: "school", english: "Table", arabic: "طاولة" },
    { category: "school", english: "Chair", arabic: "كرسي" },
    { category: "hospital", english: "Doctor", arabic: "طبيب" }
  ]);

  console.log("Data inserted");
  process.exit();
}

seed();
