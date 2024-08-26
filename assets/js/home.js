function deleteTask() {
    const form = document.getElementById('list-form');
    if (confirm('Are you sure you want to delete the selected tasks?')) {
        form.submit();
    }
}

document.getElementById('delete-btn').addEventListener('click', deleteTask);