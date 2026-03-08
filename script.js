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
function downloadPDF() {

const { jsPDF } = window.jspdf;

let doc = new jsPDF();

let resume = document.getElementById("result").innerText;

doc.text(resume, 10, 10);

doc.save("resume.pdf");

}
