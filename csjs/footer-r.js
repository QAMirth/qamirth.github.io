 document.write(`
      <div class="sidebar-container">


              <div class="sidebar-block">
                <div class="inner">
                  <div class="sidebar-block-content">
                    <!--<filters / user settings>-->
                  
<div id="filters-r">

<div class="stdb-first">
<h2 class="sidebar-block-title" role="heading" aria-level="2">Order</h2>
</div>
<select id="sort-filter-r" onchange="sortMaterials()">
<option value="title-asc">Titleа (A)</option>
<option value="title-desc">Title (D)</option>
</select>


<div class="stdb">
<h2 class="sidebar-block-title" role="heading" aria-level="2">Filters</h2>
</div>
<select id="format-filter-r" onchange="filterMaterials()">
<option value="">All Formats</option>
</select>
<select id="freepaid-filter-r" onchange="filterMaterials()">
<option value="">All Free/Paid</option>
</select>


</div>


<div id="settings">
  <div class="cusa">

    <div class="stdb-t">
    <h2 class="sidebar-block-title" role="heading" aria-level="2">Text</h2>
    </div>
    <div class="cusa-radio">
      <label class="custom-radio">
        <input type="radio" name="fontSize" value="small" id="small">
        <span class="radio-btn"></span>
        Small
      </label>

      <label class="custom-radio">
        <input type="radio" name="fontSize" value="normal" id="normal">
        <span class="radio-btn"></span>
        Standart
      </label>

      <label class="custom-radio">
        <input type="radio" name="fontSize" value="large" id="large">
        <span class="radio-btn"></span>
        Large
      </label>
    </div>
  </div>



  <div class="cusa">
    <div class="stdb">
    <h2 class="sidebar-block-title" role="heading" aria-level="2">Color</h2>
    </div>
    <div class="cusa-radio">    
      <label class="custom-radio">
      <input type="radio" name="color" value="standart" id="standart">
      <span class="radio-btn"></span>
      Standart
      </label>

      <label class="custom-radio">
      <input type="radio" name="color" value="blue" id="blue">
      <span class="radio-btn"></span>
      Blue
      </label>

      <label class="custom-radio">
      <input type="radio" name="color" value="green" id="green">
      <span class="radio-btn"></span>
      Teal
      </label>

      <label class="custom-radio">
      <input type="radio" name="color" value="light-green" id="light-green">
      <span class="radio-btn"></span>
      Green
      </label>

      <label class="custom-radio">
      <input type="radio" name="color" value="black" id="black">
      <span class="radio-btn"></span>
      Black
      </label>
   </div>
  </div>

</div>

                    <!--</filters / user settings>-->
                  </div>
                </div>
              </div>




<div class="sidebar-block2">
                <div class="inner">
                <div class="stdb-first">
                  <h2 class="sidebar-block-title" role="heading" aria-level="2">Top tags</h2>
                 </div>
                  <div class="sidebar-block-content">
                    <!--<tags>-->
<div id="tagCloud" class="tag-cloud"></div>
 <!--</tags>-->
                  </div>
                </div>
              </div>





<a href="#" class="lang" data-lang="en">EN</a>
<a href="#" class="lang" data-lang="ru">RU</a>
<a href="#" class="lang" data-lang="uk">UA</a>
<a href="#" class="lang" data-lang="de">DE</a>

<div id="google_translate_element"></div>
<script type="text/javascript">
    function googleTranslateElementInit() {
        new google.translate.TranslateElement({
            pageLanguage: 'en',
            includedLanguages: 'en,ru,uk,de',
            autoDisplay: false // Отключаем авто-предложения перевода
        });
    }

    function changeLanguage(lang) {
        var googleTranslateFrame = document.querySelector('iframe.goog-te-banner-frame');
        if (googleTranslateFrame) {
            googleTranslateFrame.contentWindow.document.querySelector(`.goog-te-menu2-item span.text:contains(${lang})`).click();
        }
    }

    document.querySelectorAll('.lang').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            var lang = this.getAttribute('data-lang');
            changeLanguage(lang);
        });
    });
</script>
<script type="text/javascript" src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>

<!-- CSS для скрытия баннера и тулбара Google Translate -->
<style>
    .goog-te-banner-frame.skiptranslate,
    .goog-te-gadget-icon {
        display: none !important;
    }

    body {
        top: 0px !important;
    }

    .goog-te-banner-frame {
        display: none !important;
    }

    .goog-te-menu-frame {
        display: none !important;
    }
</style>








              <div class="sidebar-block-footer" aria-label="Footer">
                <div class="inner-footer">
                  <div class="sidebar-block-content-footer">
                    <!--<footer>-->
                     <ul>
                      <li class="copyright-footer-item">© <span id="currentYear"></span> <a href="../99/katzeniy.html">Katzeniy</a></li>
                      <span class="spf">·</span>
             <li class="footer-item"><a class="footer-link" href="#" data-modal="aboutModal">About</a><span class="spf"> · </span></li>
                      <li class="footer-item"><a class="footer-link2" href="../99/katzeniy.html">Author</a><span class="spf"> · </span></li>
         <li class="footer-item"><a class="footer-link" href="#" data-modal="feedbackModal">Feedback</a><span class="spf"> · </span></li>
  <li class="footer-item"><a class="footer-link" href="#" data-modal="contactsModal">Contacts</a><span class="spf"> · </span></li>
  <li class="footer-item"><a class="footer-link" href="#" data-modal="addModal">Add software to the site</a></li>
                    </ul>
                    <!--</footer>-->
                  </div>
                </div>
              </div>



            </div>


<!-- Drop down menu settings -->
<div id="slideoutMenu" class="slideout-menu">
  <div class="inner-slideout">
    <button id="closeMenu" class="close-menu">X</button>
  </div>
</div>

<div id="toast" class="toast hidden">Link copied to clipboard!</div>

    `);
