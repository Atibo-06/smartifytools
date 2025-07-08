const gradePoints = {
  'A+': 10,
  'A': 9,
  'B+': 8,
  'B': 7,
  'C': 6,
  'D': 5,
  'F': 0
};
function addSubject() {
  const subjectInputs = document.getElementById('subjectInputs');
  const newSubject = document.createElement('div');
  newSubject.classList.add('subject');
  newSubject.innerHTML = `
    <input type="text" placeholder="Subject Name">
    <input type="number" placeholder="Credit Hours" class="credits">
    <input type="text" placeholder="Grade (e.g., A, B+)" class="grade"> 
  `;
  subjectInputs.appendChild(newSubject);
}
document.getElementById('gpaForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const creditInputs = document.querySelectorAll('.credits');
  const gradeInputs = document.querySelectorAll('.grade');
  let totalPoints = 0;
  let totalCredits = 0;
  for (let i = 0; i < creditInputs.length; i++) {
    const credit = parseFloat(creditInputs[i].value);
    const grade = gradeInputs[i].value.trim().toUpperCase();
    if (!isNaN(credit) && gradePoints[grade] !== undefined) {
      totalPoints += gradePoints[grade] * credit ;
      totalCredits += credit;
    }
  }
 const gpa = (totalCredits > 0) ? (totalPoints / totalCredits).toFixed(2) : 0;
 document.getElementById('result').textContent = `Your GPA is: ${gpa}`;
});