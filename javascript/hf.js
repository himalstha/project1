class MyComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `

    <div class="nanobar my-class" id="my-id" style="position: fixed;">
    <div class="bar"></div>
    </div>
    <a href="./../../../../../index.html" class="logo">    <img src="./../../../../img/dark-logo.png" alt="">
himalstha<span>.com.np</span></a>
    <nav class="navbar">
      <ul class="navbar-list">
        <li><ion-icon name="moon-outline" class="fas"></ion-icon></li>
        <li><a href="./../../../../../index.html" class="navbar-link">home</a></li>
        <li><a href="./../../../../../navlinks/notes.html" class="navbar-link"> E-Notes </a></li>
        <li><a href="./../../../../../setquestion/grade-12-set-questions.html" class="navbar-link"> Grade 12 set questions</a></li>
     </ul>
    </nav>    
    `;
  }
}
customElements.define('header-links', MyComponent);


class faceLeft extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
           <div class="left-sidebar-imp-link">
                <a href="./../../../../../../index.html"><img src="./../../img/home.png">Home</a>
                <a href="./../../../../../navlinks/notes.html"><img src="./../../img/note.png">See Notes</a>
                <a href="./../../../../../navlinks/contact.html"><img src="./../../img/contact.png">Contact Admin</a>
                <a href="#">See More</a>
            </div>
            <div class="left-sidebar-shortcut-link">
                <p class="shortcuttitle">Your Shortcuts</p>
                <div class="listofrecentpost">
                    <ol>
                        <li><a href="./../../../../../navlinks/notes/physics/11-physics-syllabus.html">Grade 11 Physics Syllabus NEB</a></li>
                        <li><a href="./../../../../../navlinks/notes/chemistry/11-chemistry-syllabus.html">Grade 11 Chemistry Syllabus NEB</a>
                        </li>
                        <li><a href="./../../../../../navlinks/notes/math/11-math-syllabus.html">Grade 11 Math Syllabus NEB</a></li>
                        <li><a href="./../../../../../navlinks/notes/nepali/11-nepali-syllabus.html">Grade 11 Nepali Syllabus NEB</a></li>
                        <li><a href="./../../../../../navlinks/notes/english/11-english-syllabus.html">Grade 11 English Syllabus NEB</a></li>
                        <li><a href="./../../../../../navlinks/notes/computer/11-computer-syllabus.html">Grade 11 Computer Syllabus NEB</a></li>
                        <a href=""></a>
                        <li><a href="./../../../../../navlinks/notes/physics/12-physics-syllabus.html">Grade 12 Physics Syllabus NEB</a></li>
                        <li><a href="./../../../../../navlinks/notes/chemistry/12-chemistry-syllabus.html">Grade 12 Chemistry Syllabus NEB</a>
                        </li>
                        <li><a href="./../../../../../navlinks/notes/math/12-math-syllabus.html">Grade 12 Math Syllabus NEB</a></li>
                        <li><a href="./../../../../../navlinks/notes/nepali/12-nepali-syllabus.html">Grade 12 Nepali Syllabus NEB</a></li>
                        <li><a href="./../../../../../navlinks/notes/english/12-english-syllabus.html">Grade 12 English Syllabus NEB</a></li>
                        <li><a href="./../../../../../navlinks/notes/computer/12-computer-syllabus.html">Grade 12 Computer Syllabus NEB</a></li>
                    </ol>
                </div>
                
            </div>
    `;
  }
}
customElements.define('body-left', faceLeft);

class faceRight extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div class="right-sidebar-title">
                <h4>Recent Posts</h4><a href="#">See more</a>
            </div>
            
            <div class="right-sidebar-title">
                <h4>Up Comming Events</h4><a href="#">See more</a>
            </div>
            <div class="right-sidebar-event">
             <a href="./../../../../navlinks/physics/12-physics-syllabus.html>Grade 12 Physics</li>
            </div>
            
            
    `;
  }
}
customElements.define('body-right', faceRight);


class subNav extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <div class="sub-navbar">
            <button onclick="showleftSidebar()" id="lbar">Short cuts</button>
            <button onclick="showMainContent()" id="mbar" class="mystyle">Feeds</button>
            <button onclick="showRightSidebar()" id="rbar">Events</button>
        </div> `;
  }
}
customElements.define('sub-nav', subNav);



class MyFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
  <footer class="footer-distributed">
    <div class="footer-left">
      <h3>himalstha<span>.com.np</span></h3>
      <p class="footer-links">
        <a href="./../../../../../index.html">Home</a>
        <a href="./../../../../../../navlinks/game.html">Games</a>
        <a href="./../../../../../../navlinks/notes.html">Notes</a>
        <a href="./../../../../../../navlinks/exercise.html">Exercise</a>
        <a href="./../../../../../../navlinks/contact.html">Contact</a>
      </p>
      <p class="footer-company-name">himalstha.com.np © 2022</p>
    </div>
    <div class="footer-center">
      <div>
        <i class="fa fa-map-marker"></i>
        <p><span>Nepal</span> Kalankistan-14, Kathmandu</p>
      </div>
      <div>
        <i class="fa fa-phone"></i>
        <p>+977 9881219312</p>
      </div>
      <div>
        <i class="fa fa-envelope"></i>
        <p><a href="mailto:admin@himalstha.com.np">admin@himalstha.com.np</a></p>
      </div>
    </div>
    <div class="footer-right">
      <div class="footer-icons">
        <a href="" onclick="window.open('http://www.facebook.com/share.php?u=' + 
                encodeURIComponent(location.href))" target="_blank">
                <ion-icon name="logo-facebook"></ion-icon></a>
        <a href="https://www.youtube.com/@Himalshresthax" target="_blank"><ion-icon name="logo-youtube"></ion-icon></a>
        <a href="https://www.pinterest.com/himalshresthx/" target="_blank"><ion-icon name="logo-pinterest"></ion-icon></a>
        <a href="./../../../../../navlinks/contact.html" target="_blank"><ion-icon name="call-outline"></ion-icon></i></a>
      </div>
    </div>
    <div class="termsCondition"><a href="./../../../../termsCondition.html">Terms</a><a href="./../../../../privacyPolicy.html">Privacy and Policy</a><a href="./../../../../cookies.html
        ">Cookies</a><a href="./../../../../advertising.html">Advertising</a><a>himalstha.com.np © 2023</a></div>
  </footer>

  

    `;
  }
}

customElements.define('footer-last', MyFooter);











class overLays extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div id="progress">
    <span id="progress-value"><ion-icon name="chevron-up-outline"></ion-icon></span>
  </div>
    `;
  }
}

customElements.define('body-overlays', overLays);




// -- - - - - -- - -Dark theme ---- - -- - - -
const darkBtn = document.querySelector('.fas');
const bodyEl = document.querySelector('body');

const darkMode = () => {
  bodyEl.classList.toggle('dark')
}

darkBtn.addEventListener('click', () => {
  // Get the value of the "dark" item from the local storage on every click
  setDarkMode = localStorage.getItem('dark');

  if (setDarkMode !== "on") {
    darkMode();
    // Set the value of the itwm to "on" when dark mode is on
    setDarkMode = localStorage.setItem('dark', 'on');
  } else {
    darkMode();
    // Set the value of the item to  "null" when dark mode if off
    setDarkMode = localStorage.setItem('dark', null);
  }
});

// Get the value of the "dark" item from the local storage
let setDarkMode = localStorage.getItem('dark');

// Check dark mode is on or off on page reload
if (setDarkMode === 'on') {
  darkMode();
}


//-- - -  - - -     Go to top -     - - -- - - - -   

let calcScrollValue = () => {
  let scrollProgress = document.getElementById("progress");
  let progressValue = document.getElementById("progress-value");
  let pos = document.documentElement.scrollTop;
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);
  if (pos > 100) {
    scrollProgress.style.display = "grid";
  } else {
    scrollProgress.style.display = "none";
  }
  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
  scrollProgress.style.background = `conic-gradient(#12c4fa ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
};
window.onscroll = calcScrollValue;
window.onload = calcScrollValue;



