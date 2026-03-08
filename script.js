function generateResume(){

let name=document.getElementById("name").value;
let education=document.getElementById("education").value;
let skills=document.getElementById("skills").value;

let resume=`
Name: ${name}

Education:
${education}

Skills:
${skills}
`;

document.getElementById("result").innerText=resume;

}
