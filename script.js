function generateResume(){

let name=document.getElementById("name").value;
let education=document.getElementById("education").value;
let skills=document.getElementById("skills").value;

document.getElementById("rname").innerText=name;

document.getElementById("contact").innerText=
"Bihar, India | +91 | email@example.com";

document.getElementById("summary").innerText=
"Detail-oriented and reliable Data Entry Operator with strong typing skills and computer knowledge.";

document.getElementById("reducation").innerText=education;

document.getElementById("rskills").innerText=skills;

}
