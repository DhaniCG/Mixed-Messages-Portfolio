const randomizedMessages = (dat1, dat2, dat3) => {
    console.log(`Welcome to the Program Challenger\n`);
    console.log(`Your challenge will be making ${dat1[Math.floor(Math.random() * dat1.length)]}, using ${dat2[Math.floor(Math.random() * dat2.length)]} language\n`);
    console.log(`Don't care how you do it, but you HAVE to do it. Cuz' it comes with a worth it prize of: ${dat3[Math.floor(Math.random() * dat3.length)]}\n`);
}

const challenges = ['Game', 'Shader', 'Application', 'Robot', 'Operating System'];
const lang = ['C', 'C++', 'C#', 'Java', 'Javascript', 'Python', 'Ruby', 'Rust', 'PHP', 'Swift', 'Kotlin'];
const prizes = ['$100', '$1,000', 'A toy car', 'A whole abandoned house', 'Nothing', 'Your device get stolen', 'A free tour to a small stranded island and left behind'];

randomizedMessages(challenges, lang, prizes)