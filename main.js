// Elements
const issuesList = document.getElementById('issuesList');
const issueInputForm = document.getElementById('issueInputForm');

// Use expense tracker template

const localStorageIssues = JSON.parse(localStorage.getItem('issues'));

let issues = localStorage.getItem('issues') !== null ? localStorageIssues : [];

function addIssue(e) {
  e.preventDefault();

  const id = Math.floor(Math.random() * 100000000);
  const status = 'Open';
  const description = document.getElementById('issueDescInput').value;
  const severity = document.getElementById('issueSeverityInput').value;
  const assignedTo = document.getElementById('issueAssignedToInput').value;

  const issue = {
    id,
    description,
    severity,
    assignedTo,
    status,
  };

  issues.push(issue);

  addIssueDOM(issue);

  updateLocalStorage();

  issueInputForm.reset();

  console.log(issues);
}

function updateLocalStorage() {
  localStorage.setItem('issues', JSON.stringify(issues));
}

function closeStatus(id) {
  issues.forEach((issue) => {
    if (issue.id === id) {
      issue.status = 'Closed';
    }
  });
  console.log(issues);
  updateLocalStorage();

  init();
}

function deleteIssue(id) {

  issues.forEach((issue, index) => {
    if (issue.id == id) {
      issues.splice(index, 1);
    }
  });

  updateLocalStorage();

  init();
}

function addIssueDOM(issue) {
  // Create Element
  const issueEL = document.createElement('div');
  // Add class to value
  issueEL.className = 'well';

  const id = issue.id;
  const description = issue.description;
  const severity = issue.severity;
  const assignedTo = issue.assignedTo;
  const status = issue.status;

  issueEL.innerHTML = `
    <h5><strong>Issue ID:</strong> ${id}</h5>
    <p><span class="label label-info">${status}</span></p>
    <h3>${description}</h3>
    <p><span class="glyphicon glyphicon-time"></span>  ${severity}</p>
    <p><span class="glyphicon glyphicon-user"></span>  ${assignedTo}</p>
    <a href="#" class="btn btn-warning" onclick="closeStatus(${id})">Close</a>
    <a href="#" class="btn btn-danger" onclick="deleteIssue(${id})">Delete</a>
    `;

  issuesList.appendChild(issueEL);
}

//Initialize APP
function init() {
  issuesList.innerHTML = '';

  issues.forEach(addIssueDOM);
}

init();

//Event Listeners
issueInputForm.addEventListener('submit', addIssue);
