const icons = {
  person: `<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-person-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
</svg>`,
  alarm: `<svg class="mr-1" width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-alarm" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M8 15A6 6 0 1 0 8 3a6 6 0 0 0 0 12zm0 1A7 7 0 1 0 8 2a7 7 0 0 0 0 14z"/>
  <path fill-rule="evenodd" d="M8 4.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.053.224l-1.5 3a.5.5 0 1 1-.894-.448L7.5 8.882V5a.5.5 0 0 1 .5-.5z"/>
  <path d="M.86 5.387A2.5 2.5 0 1 1 4.387 1.86 8.035 8.035 0 0 0 .86 5.387zM11.613 1.86a2.5 2.5 0 1 1 3.527 3.527 8.035 8.035 0 0 0-3.527-3.527z"/>
  <path fill-rule="evenodd" d="M11.646 14.146a.5.5 0 0 1 .708 0l1 1a.5.5 0 0 1-.708.708l-1-1a.5.5 0 0 1 0-.708zm-7.292 0a.5.5 0 0 0-.708 0l-1 1a.5.5 0 0 0 .708.708l1-1a.5.5 0 0 0 0-.708zM5.5.5A.5.5 0 0 1 6 0h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5z"/>
  <path d="M7 1h2v2H7V1z"/></svg>`,
  cardText: `<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-card-text" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M14.5 3h-13a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/>
  <path fill-rule="evenodd" d="M3 5.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 8zm0 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z"/>
</svg>`,
  bell: `<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-bell" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2z"/>
  <path fill-rule="evenodd" d="M8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"/>
</svg>`,
};

// Elements
const issuesList = document.getElementById('issuesList');
const issueInputForm = document.getElementById('issueInputForm');

const welcomeAlert = document.getElementById('welcome');
const formAlert = document.getElementById('formAlert');
const closeBtn = document.getElementById('closeBtn');

const dateBtn = document.getElementById('dateBtn');
const priorityBtn = document.getElementById('priorityBtn');

const search = document.getElementById('search');
const searchForm = document.getElementById('searchForm');
const searchAlert = document.getElementById('searchAlert');
const navAddBtn = document.getElementById('navAddBtn');

// Data Structures
const localStorageIssues = JSON.parse(localStorage.getItem('issues'));

let issues = localStorage.getItem('issues') !== null ? localStorageIssues : [];

function addIssue(e) {
  e.preventDefault();

  welcomeAlert.style.display = 'none';

  const description = document.getElementById('issueDescInput').value;
  const title = document.getElementById('issueTitleInput').value;
  const assignedTo = document.getElementById('issueAssignedToInput').value;
  const id = Math.floor(Math.random() * 100000000);
  const key = issues == 0 ? 0 : issues.length + 1;
  const status = 'Open';
  const date = new Date();
  const severity = new Array(
    document.getElementById('issueSeverityInput').value
  );
  console.log(key);
  switch (severity[0]) {
    case 'Low':
      severity.push(1);
      break;
    case 'Medium':
      severity.push(2);
      break;
    case 'High':
      severity.push(3);
      break;
    default:
      console.log('There has been an error!');
  }

  if (title.trim() == '' || assignedTo.trim() == '') {
    formAlert.innerHTML = `<div class='alert alert-danger mt-3 mb-1' role='alert'>
       Please enter both a title and the person this issue should be assigned to!</div>`;
    setTimeout(() => {
      formAlert.innerHTML = '';
    }, 2000);
  } else {
    const issue = {
      key,
      id,
      title,
      description,
      severity,
      assignedTo,
      status,
      date,
    };

    console.log(issue);

    issues.push(issue);

    addIssueDOM(issue);

    updateLocalStorage();

    issueInputForm.reset();

    setSearchAlert('', 'default');
  }
}

function updateLocalStorage() {
  localStorage.setItem('issues', JSON.stringify(issues));
}

function searchIssue(e) {
  e.preventDefault();
  // first set search term and then clear value of search
  const term = search.value.trim();
  search.value = '';
  if (term) {
    const matchingIssues = issues.filter(
      (issue) => issue.title.includes(term) || issue.description.includes(term)
    );
    console.log(matchingIssues);
    // Check if the search term matches anything in issues array is true
    if (matchingIssues.length) {
      setSearchAlert(`Here are your search results for '${term}'! `, 'success');
      issuesList.innerHTML = '';
      matchingIssues.forEach(addIssueDOM);

      const yOffset = -90;
      const y =
        searchAlert.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: 'smooth' });
    } else {
      issuesList.innerHTML = '';
      setSearchAlert(`No results for '${term}'. `, 'warning');
    }
  } else {
    issuesList.innerHTML = '';
    setSearchAlert('Please enter a search term! ', 'danger');
  }
}

function setSearchAlert(text, type) {
  searchAlert.innerHTML = '';
  const hasIssues = issues.length > 0;
  if (type == 'default' && hasIssues) {
    type = 'primary';
    text = 'You are currently viewing all issues.';
    console.log(type, text);
    searchAlert.innerHTML = `<div class="alert alert-${type}" role="alert">
      <div class="d-flex align-items-center justify-content-between">
          <span>${text}</span>
          <span>
            <span class="mr-2">Sort By:   </span> 
            <button id="dateBtn" type="button" class="btn btn-sm btn-outline-dark mr-2" onclick="sortByDate()">Date</button>
            <button id="priorityBtn"type="button" class="btn btn-sm btn-outline-dark mr-2" onclick="sortByPriority()">Priority</button>
          </span>
        </div>
      </div>`;
  } else if (type == 'default' && !hasIssues) {
    type = 'secondary';
    text = 'Add an issue — there are no current issues!';
    searchAlert.innerHTML = `<div class="alert alert-${type}" role="alert">${text}</div>`;
  } else {
    const seeAllLink = `<a href="#!" class="alert-${type}" onclick="init()"><strong>Click here to view all issues.</strong></a>`;
    searchAlert.innerHTML = `<div class="alert alert-${type}" role="alert">${text} ${
      hasIssues ? seeAllLink : ''
    }</div>`;
  }
}

function closeStatus(id) {
  issues.forEach((issue) => {
    if (issue.id === id) {
      issue.status = 'Closed';
    }
  });

  updateLocalStorage();

  noScrollLoad();
}

function deleteIssue(id) {
  const deleteAlert = document.getElementById(id.toString());
  deleteAlert.innerHTML =
    '<div class="card-footer"><em><strong>This issue has been deleted.</strong></em></div>';

  setTimeout(() => {
    issues.forEach((issue, index) => {
      if (issue.id == id) {
        issues.splice(index, 1);
      }
    });

    updateLocalStorage();
    noScrollLoad();
  }, 2000);
}

function editIssue(id) {
  console.log(id);

  // -------------------------------------------- //
  $('.modal').modal('show');

  const modalAlert = document.getElementById('modalAlert');
  const title = document.getElementById('issueTitleInputModal');
  const description = document.getElementById('issueDescInputModal');
  const severity = document.getElementById('issueSeverityInputModal');
  const assignedTo = document.getElementById('issueAssignedToInputModal');

  issues.forEach((issue) => {
    if (issue.id == id) {
      console.log('Got it!');
      title.value = issue.title;
      description.value = issue.description;
      severity.value = issue.severity[0];
      assignedTo.value = issue.assignedTo;
      return;
    }
  });

  // Event listener for SAVE in Edit Modal
  const saveEditBtn = document.getElementById('saveEdit');

  saveEditBtn.addEventListener('click', () => {
    issues.forEach((issue) => {
      if (issue.id == id.toString()) {
        // issue = {id:id, title: title.value }
        issue.title = title.value;
        issue.description = description.value;
        issue.assignedTo = assignedTo.value;
        issue.severity = [
          severity.value,
          severity.value == 'Low' ? 1 : severity.value == 'Medium' ? 2 : 3,
        ];
      }
    });
    updateLocalStorage();
    noScrollLoad();

    modalAlert.innerHTML = `<div class="alert alert-success" role="alert">A simple success alert—check it out!</div>`;
    saveEditBtn.setAttribute('disabled', true);
    setTimeout(() => {
      modalAlert.innerHTML = '';
      saveEditBtn.removeAttribute('disabled');
      $('.modal').modal('hide');
    }, 1000);
  });
}

function sortByPriority() {
  issues.sort((a, b) => {
    return a.severity[1] - b.severity[1];
  });

  updateLocalStorage();

  init();
}

function sortByDate() {
  issues.sort((a, b) => {
    // Turn your strings into dates, and then subtract them
    // to get a value that is either negative, positive, or zero.
    return new Date(a.date) - new Date(b.date);
  });
  updateLocalStorage();

  init();
}

function addIssueDOM(issue) {
  // Create Element
  const issueEL = document.createElement('div');
  // Add class to value
  issueEL.className = 'card mb-3';

  const id = issue.id;
  const description = issue.description;
  const severity = issue.severity[0];
  const assignedTo = issue.assignedTo;
  const status = issue.status;
  const title = issue.title;
  const dateRaw = new Date(issue.date);
  const date = `
  ${dateRaw.getFullYear()}/${dateRaw.getMonth()}/${dateRaw.getDate()} ${dateRaw.getHours()}:${
    dateRaw.getMinutes() < 10
      ? '0' + dateRaw.getMinutes()
      : dateRaw.getMinutes()
  }:${
    dateRaw.getSeconds() < 10
      ? '0' + dateRaw.getSeconds()
      : dateRaw.getSeconds()
  }`;

  const severityColor =
    severity === 'Low' ? 'success' : severity === 'Medium' ? 'info' : 'danger';

  console.log(severityColor);

  issueEL.innerHTML = `
    
    <div id="${id.toString()}"class="card w-80">
    <div class="card-header d-flex justify-content-between">
      <span class="badge badge-${severityColor} py-2 ml-2">
      ${icons.bell}
      ${severity} Priority</span>
      <span class="mr-2"><em><strong>id: </strong>${id.toString()}</em></span>
    </div>
    <div class="card-body px-4">
      <h5 class="card-title"><em>${title}</em></h5>
      <p class="card-text"><span>${icons.cardText}</span> ${description}</p>
      <p><span>${icons.person}</span> ${assignedTo}</p>
      <p>${icons.alarm}<span class="mt-7">${date}</span></p>

      ${/* CLOSE Btn */ ''}
      <button type="button" class="btn btn-primary px-3 mr-2
        ${ status == 'Closed' ? 'disabled' : ''}"
        id="close" onclick="closeStatus(${id})" 
        ${status == 'Closed' ? 'disabled' : ''}>
        ${status == 'Closed' ? 'Completed' : 'Close'}
      </button>
      ${/* EDIT Btn */ ''}
      <button type="button" class="btn btn-outline-secondary px-4 mr-2
        ${status == 'Closed' ? 'disabled' : ''}"
        ${status == 'Closed' ? 'disabled' : ''}
        onclick="editIssue(${id.toString()})">Edit
      </button>
      ${/* DELETE Btn */ ''}
      <button class="btn btn-warning" onclick="deleteIssue(${id})">Delete</button>
      
    </div>
  </div>
    `;

  // issuesList.appendChild(issueEL);
  issuesList.insertAdjacentElement('afterbegin', issueEL);
}

function smoothScroll() {
  const yOffset = -160;
  const y =
    issueInputForm.getBoundingClientRect().top + window.pageYOffset + yOffset;
  window.scrollTo({ top: y, behavior: 'smooth' });
}

//Initialize APP
function init() {
  issuesList.innerHTML = '';
  searchAlert.innerHTML = '';
  setSearchAlert('', 'default');
  issues.forEach(addIssueDOM);

  const yOffset = -90;
  const y =
    searchAlert.getBoundingClientRect().top + window.pageYOffset + yOffset;

  window.scrollTo({ top: y, behavior: 'smooth' });
}

function noScrollLoad() {
  issuesList.innerHTML = '';
  searchAlert.innerHTML = '';
  setSearchAlert('', 'default');
  issues.forEach(addIssueDOM);
}

noScrollLoad();

//Event Listeners
issueInputForm.addEventListener('submit', addIssue);
searchForm.addEventListener('submit', searchIssue);

// Nav Add Issue button is added on scroll
window.addEventListener('scroll', () => {
  // scrollTop - distance from top; clientHeight - height of the window; scrollHeight - total scrollable height
  // let scrollBottom = scrollHeight - scrollTop - clientHeight;
  const { scrollTop } = document.documentElement;

  if (scrollTop >= 450) {
    console.log("we're here!");
    navAddBtn.innerHTML = `<button type="button" class="btn btn-info ml-3" onclick="smoothScroll()"><em>Add Issue</em></button>`;
  } else {
    navAddBtn.innerHTML = '';
  }
});
