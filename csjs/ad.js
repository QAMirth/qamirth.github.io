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
             <label for="tags">Tags:</label>
            <input type="text" id="tags" name="tags" required><br>
               <label for="format">Format:</label>
    <select id="format" name="format" multiple required>
        <option value="Online">Online</option>
        <option value="Download">Download</option>
        <option value="Offline">Offline</option>
    </select><br>
    <label for="freepaid">Free/Paid:</label>
    <select id="freepaid" name="freepaid" multiple required>
        <option value="Free">Free</option>
        <option value="Paid">Paid</option>
        <option value="Trial">Trial</option>
    </select><br>  
            <label for="image">Image URL:</label>
            <input type="text" id="image" name="image"><br>
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
`);
