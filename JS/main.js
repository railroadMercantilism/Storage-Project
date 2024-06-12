// Database Connection Details
const config = {
    user: 'root',
    password: '4421James!;Missi',
    server: '127.0.0.1:3306',
    database: 'Catacombs'
}

// Attempt to connect to the database
try {
    const pool = sql.connect(config)
}
catch (err) {
    console.log(err)
}


//Drag and Drop Process
// Source: https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API/File_drag_and_drop
// Prevent default drag behaviors
['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
    document.getElementById('dropZone').addEventListener(eventName, preventDefaults, false)
    document.body.addEventListener(eventName, preventDefaults, false)
})

// Highlight drop area when item is dragged over it
['dragenter', 'dragover'].forEach(eventName => {
    document.getElementById('dropZone').addEventListener(eventName, highlight, false)
})

// Unhighlight when drag event leaves dropzone or user drops the file
['dragleave', 'drop'].forEach(eventName => {
    document.getElementById('dropZone').addEventListener(eventName, unhighlight, false)
})

// Handle dropped files
document.getElementById('dropZone').addEventListener('drop', handleDrop, false)

function handleDrop(e) {
    e.preventDefault()
    // Open the modal
    document.getElementById('myModal').style.display = "block";
}

// Highlight drop area
function highlight(e) {
    document.getElementById('dropZone').style.backgroundColor = 'gray';
}

// Unhighlight drop area
function unhighlight(e) {
    document.getElementById('dropZone').style.backgroundColor = 'black';
}

// Handle dropped files
function handleDrop(e) {
    let dt = e.dataTransfer
    let files = dt.files

    handleFiles(files)
}

// Handle files
function handleFiles(files) {
    ([...files]).forEach(uploadFile)
}

// Upload file
function uploadFile(file) {
    let url = URL.createObjectURL(file)
    let img = document.createElement('img')
    img.src = url
    document.getElementById('dropZone').appendChild(img)
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// When the user clicks the button, open the modal 
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


