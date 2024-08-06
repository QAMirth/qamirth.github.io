document.write(`
 <style>
        .toolbar {
            border: 1px solid #ccc;
            padding: 5px;
        }

        .toolbar button {
            margin-right: 5px;
        }

        #description {
            border: 1px solid #ccc;
            padding: 10px;
            min-height: 200px;
            overflow: auto;
        }
    </style>
<button id="add-material-btn">+</button>
         <div id="popup-form" style="display: none;">
        <form id="material-form">
            <label for="title">Title:</label>
            <input type="text" id="title" name="title" required><br>
            <label for="description">Description:</label>
            <div class="toolbar">
                <button type="button" onclick="formatText('bold')"><b>B</b></button>
                <button type="button" onclick="formatText('italic')"><i>I</i></button>
                <button type="button" onclick="formatText('underline')"><u>U</u></button>
                <button type="button" onclick="formatText('strikeThrough')"><s>S</s></button>
                <button type="button" onclick="formatBlock('H1')">H1</button>
                <button type="button" onclick="formatBlock('H2')">H2</button>
                <button type="button" onclick="formatBlock('H3')">H3</button>
                <button type="button" onclick="createLink()">Link</button>
                <button type="button" onclick="insertImage()">Image</button>
            </div>
            <div id="description" contenteditable="true"></div><br>
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
            const popup = document.getElementById('popup-form');
            const addBtn = document.getElementById('add-material-btn');
            const closeBtn = document.querySelector('.close');

            addBtn.onclick = function() {
                popup.style.display = "block";
            }

            closeBtn.onclick = function() {
                popup.style.display = "none";
            }

            window.onclick = function(event) {
                if (event.target == popup) {
                    popup.style.display = "none";
                }
            }

            document.getElementById('material-form').onsubmit = function() {
                const descriptionInput = document.createElement('input');
                descriptionInput.setAttribute('type', 'hidden');
                descriptionInput.setAttribute('name', 'description');
                descriptionInput.value = document.getElementById('description').innerHTML;
                this.appendChild(descriptionInput);
            };
        });

        function formatText(command) {
            document.execCommand(command, false, null);
        }

        function formatBlock(tag) {
            document.execCommand('formatBlock', false, tag);
        }

        function createLink() {
            const url = prompt("Enter the link URL:", "http://");
            document.execCommand('createLink', false, url);
        }

        function insertImage() {
            const url = prompt("Enter the image URL:", "http://");
            document.execCommand('insertImage', false, url);
        }
    </script>
`);
