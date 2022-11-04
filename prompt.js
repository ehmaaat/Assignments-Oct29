const prompt = require("prompt-async");
    
    var firstName ="";
    var email;
async function ps()
{
    prompt.start();

    const {firstName, email} = await prompt.get(["Name","Email"]);
    console.log(`Hi! I am ${firstName}. My email is ${email}`);
    
}

ps();
