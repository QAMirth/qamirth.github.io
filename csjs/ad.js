document.write(`
<button id="add-material-btn">+</button>
         <div id="popup-form" style="display: none;">
        <form id="material-form">
            <label for="title">Title:</label>
            <input type="text" id="title" name="title" required><br>
            <label for="description">Description:</label>
            <input type="text" id="description" name="description" required><br>
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
                <option value="target_blank">Open in New Tab</option>
                <option value="direct_link">Direct Link</option>
            </select><br>
            <input type="submit" value="Add Material">
        </form>
        <button class="close">Close</button>
    </div>
`);
