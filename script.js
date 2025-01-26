/*function saveCheckboxState() {
  const checkbox = document.getElementById('q1');
  console.log(checkbox);
  localStorage.setItem('q1-checked', checkbox.checked ? 'true' : 'false'); // Save the state as a string
}

// Function to restore the checkbox state
function restoreCheckboxState() {
  const checkbox = document.getElementById('q1');
  // console.log(checkbox);
  const savedState = localStorage.getItem('q1-checked'); // Get the saved state
  if (savedState === 'true') {
    checkbox.checked = true; // Restore to checked
    console.log(checkbox.checked);
  } else {
    checkbox.checked = false; // Restore to unchecked
  }
}

// Add an event listener to save state when checkbox changes
document.getElementById('q1').addEventListener('change', saveCheckboxState);

// Restore state on page load
document.addEventListener('DOMContentLoaded', restoreCheckboxState);
*/



function saveCheckboxStates() {
  const checkboxes = document.querySelectorAll('.attempted-checkbox'); // Select all checkboxes
  checkboxes.forEach(checkbox => {
    const id = checkbox.id; // Use the checkbox ID as a key
    localStorage.setItem(id, checkbox.checked ? 'true' : 'false'); // Save state
  });
}

// Restore the state of all checkboxes
function restoreCheckboxStates() {
  const checkboxes = document.querySelectorAll('.attempted-checkbox');
  checkboxes.forEach(checkbox => {
    const id = checkbox.id;
    const savedState = localStorage.getItem(id); // Get the saved state
    if (savedState === 'true') {
      checkbox.checked = true; // Restore to checked
    } else {
      checkbox.checked = false; // Restore to unchecked
    }
  });
}

// Add event listeners to save state when a checkbox changes
document.querySelectorAll('.attempted-checkbox').forEach(checkbox => {
  checkbox.addEventListener('change', saveCheckboxStates);
});

// Restore states on page load
document.addEventListener('DOMContentLoaded', restoreCheckboxStates);