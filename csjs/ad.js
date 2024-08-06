document.write(`
 <link href="https://cdn.quilljs.com/1.3.6/quill.snow.css" rel="stylesheet">
    <script src="https://cdn.quilljs.com/1.3.6/quill.js"></script>
    <style>
        #description-container {
            height: 300px;
        }
    </style>
<button id="add-material-btn">+</button>
         <div id="popup-form" style="display: none;">
        <form id="material-form">
            <label for="title">Title:</label>
            <input type="text" id="title" name="title" required><br>
            <label for="description">Description:</label>
            <div id="description-container"></div><br>
            <label for="format">Format:</label>
            <input type="text" id="format" name="format" required><br>
            <label for="freepaid">Free/Paid:</label>
            <input type="text" id="freepaid" name="freepaid" required><br>
            <label for="image">Image URL:</label>
            <input type="text" id="image" name="image" required><br>
            <label for="link">Link:</label>
            <input type="text" id="link" name="link" required><br>
            <label for="link-type">Link Type:</label>
            <select id="link-type" name="link-type">
                <option value="target_blank" selected>Open in New Tab</option>
                <option value="direct_link">Direct Link</option>
            </select><br>
            <input type="submit" value="Add Material">
        </form>
        <button class="close">Close</button>
    </div>
     <script>
       document.addEventListener('DOMContentLoaded', function() {
    var quill = new Quill('#description-container', {
        theme: 'snow'
    });

    // Handle form submission to include Quill data
    document.getElementById('material-form').onsubmit = function(event) {
        var descriptionInput = document.createElement('input');
        descriptionInput.setAttribute('type', 'hidden');
        descriptionInput.setAttribute('name', 'description');
        descriptionInput.value = quill.root.innerHTML;
        this.appendChild(descriptionInput);
    };
});
    </script>
`);
