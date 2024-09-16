 document.write(`  
<!-- Модальные окна -->
<div id="aboutModal" class="modal">
  <span class="close">&times;</span>
  <div class="modal-content">
    <h2 class="mdo">About QA Mirth</h2>
    <p>This is the QA Mirth website - a structured catalog and an analogue of a search engine of interesting tools and instruments that relate to the assurance and maintenance of various products quality. In short, for QA and their friends - developers, this may be a useful thing.</p><p><br></p><p>Do not judge strictly for the design and UI part because the author of this "masterpiece" did not worry about whether someone needed it or not. He was just bored and lonely, and he also had a fight with his girlfriend.</p><p><br></p><p>As a result of his terrible fate, he decided to do something possibly useful for "QA Sapiens" since he himself is a representative of this "genus". </p>
  </div>
</div>

<div id="feedbackModal" class="modal">
  <span class="close">&times;</span>
  <div class="modal-content">
    <h2 class="mdo">Feedback</h2>
    <p>If you want to leave a review, give advice or found an error/bug, you can report it in the mail form below</p><br/><br/>

    <!-- modify this form HTML and place wherever you want your form -->
<form
  action="https://formspree.io/f/movazkeg"
  method="POST">
   <label>
    <input type="text" name="username" placeholder="Your Name" required>
  </label>
  <label>
    <input type="email" name="email" placeholder="Email" required>
  </label>
  <label>
    <textarea name="message" placeholder="Message" required></textarea>
  </label>
  <input type="submit" value="Submit" />
</form>

  </div>
</div>



<div id="contactsModal" class="modal">
  <span class="close">&times;</span>
  <div class="modal-content">
    <h2 class="mdo">Contacts</h2>
    
    Want to contact the admin! Here are the contact options:<br/><br/>
Email: katzeniy008@gmail.com<br/>
T̳̿͟͞e̳̿͟͞l̳̿͟͞e̳̿͟͞g̳̿͟͞r̳̿͟͞a̳̿͟͞m̳̿͟͞: https://t.me/katzeniy 

<br/><br/>
You can also use the feedback form to contact the admin.

  </div>
</div>



<div id="addModal" class="modal">
  <span class="close">&times;</span>
  <div class="modal-content">
    <h2 class="mdo">Add tool form</h2>
    
    Want to add a tool to the site! Fill out the form below and send a message. After moderation, the admin will post the material on the site.<br/><br/>

<form id="contact-form" action="https://formspree.io/f/xzzpgpnl" method="POST">
  <div class="form-group">
    <input type="email" id="user-email" name="user-email" placeholder="Your Email" required />
  </div>
  <div class="form-group">
    <input type="text" id="title" name="title" placeholder="Tool Name" required />
  </div>
  <div class="form-group">
    <textarea id="description" name="description" placeholder="Full Description" required></textarea>
  </div>
  <div class="form-group">
  <label for="format" class="select-title">Tool Format:</label>
    <select id="format" name="format" multiple required>
      <option value="CLI">CLI (Command Line Interface)</option>
      <option value="Download">Download</option>
      <option value="DevTools">DevTools part</option>
      <option value="Extension">Extension</option>
      <option value="Online">Online (use in Browser)</option>
    </select>
  </div>
  <div class="form-group">
  <label for="freepaid" class="select-title">License:</label>
    <select id="freepaid" name="freepaid" required>
      <option value="Free">Free</option>
      <option value="Freemium">Freemium (A combination of free and paid elements)</option>
      <option value="Paid">Paid</option>
      <option value="Trial">Trial</option>
    </select>
  </div>
  <div class="form-group">
    <input type="text" id="image" name="image" placeholder="Tool logo image URL" required />
  </div>
  <div class="form-group">
    <input type="text" id="link" name="link" placeholder="Link on the tool's web-site" required />
  </div>
  <div class="form-group">
   <label for="testing-type" class="select-title">Type of Testing:</label>
    <select id="testing-type" name="testing-type" multiple required>
      <option value="Static Review">Static Review</option>
      <option value="Static Analysis">Static Analysis</option>
      <option value="Black-box">Black-box</option>
      <option value="White-box">White-box</option>
      <option value="Unit">Unit</option>
      <option value="Integration">Integration</option>
      <option value="System">System</option>
      <option value="End-to-end testing">End-to-end testing</option>
      <option value="Smoke">Smoke</option>
      <option value="Sanity">Sanity</option>
      <option value="Regression">Regression</option>
      <option value="Performance">Performance</option>
      <option value="UI/UX">UI/UX</option>
      <option value="Security">Security</option>
      <option value="Automated">Automated</option>
      <option value="Mobile testing">Mobile testing</option>
      <option value="Test case based">Test case based</option>
      <option value="Exploratory">Exploratory</option>
      <option value="Ad hoc">Ad hoc</option>
    </select>
  </div>
  <div class="form-group">
    <select id="link-type" name="link-type">
      <option value="target_blank">Open in New Tab</option>
    </select>
  </div>
  <div class="form-group">
    <input type="submit" value="Submit" />
  </div>
</form>


  </div>
</div>



<!-- Крестик для закрытия -->
<span class="close">&times;</span>
`);
