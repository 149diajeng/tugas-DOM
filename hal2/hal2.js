// light slider
$(document).ready(function () {
      $('#autoWidth5').lightSlider({
        autoWidth: true,
        autoWidth2: true,
        loop: true,
        onSliderLoad: function () {
          $('#autoWidth5').removeClass('cS-hidden');
        }
      });
    });

$(document).ready(function () {
      $('#autoWidth6, #autoWidth7').lightSlider({
        autoWidth: true,
        autoWidth2: true,
        loop: true,
        onSliderLoad: function () {
          $('#autoWidth6, #autoWidth7').removeClass('cS-hidden');
        }
      });
    });
    
 const nav = document.getElementById('navbarDom');

        // set the font size
        navbarDom.innerHTML = "Beenemas";
        navbarDom.style.fontSize = '24px';
        navbarDom.style.color = "#fad33d";

        const navItem = document.getElementById("navItem");
        navItem.innerHTML = "Home";
        navItem.style.fontSize = "20px";
        navItem.style.color = "#fad33d";



        //  dropdown
        const dropdown = document.querySelector('.dropdown');
        const dropdownContent = document.querySelector('.dropdown-content');
        const dropdownToggle = document.querySelector('.dropdown-toggle');

        dropdownToggle.addEventListener('click', () => {
            dropdown.classList.toggle('active');
        });

        // search
        const searchForm = document.querySelector('.search-form');
        const searchInput = document.querySelector('.search-input');

        searchForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const searchQuery = searchInput.value;
            console.log(`Search query: ${searchQuery}`);

            searchInput.value = '';
        });

        // toggle hide show

        const button = document.querySelector('#toggleButton');
        const element = document.querySelector('#elementToToggle');

        // Hide the element on page load
        element.style.display = 'none';
        button.style.backgroundColor = '#333';
        button.style.color = '#fad33d';
        button.style.fontWeight = 'bold';
        button.style.margin = '1px';
        button.style.borderRadius = '50px';
        button.style.padding = '10px';
        element.style.color = '#fad33d';
        element.style.padding = '10px';

        // button click
        button.addEventListener('click', () => {
            // show button
            if (element.style.display === 'none') {
                element.style.display = 'block';
            } else {
                element.style.display = 'none';
            }
        });

// pagination
         const prevBtn = document.querySelector('#prev');
            const nextBtn = document.querySelector('#next');
            const page1 = document.querySelector('#page1');
            const page2 = document.querySelector('#page2');
            const page3 = document.querySelector('#page3');

            // add event listeners
            prevBtn.addEventListener('click', () => {
                // decrement active page number
                let activePage = document.querySelector('.pagination a.active');
                activePage.classList.remove('active');
                if (activePage.id === 'page1') {
                    page3.classList.add('active');
                } else if (activePage.id === 'page2') {
                    page1.classList.add('active');
                } else if (activePage.id === 'page3') {
                    page2.classList.add('active');
                }
            });

            nextBtn.addEventListener('click', () => {
                // increment active page number
                let activePage = document.querySelector('.pagination a.active');
                activePage.classList.remove('active');
                if (activePage.id === 'page1') {
                    page2.classList.add('active');
                } else if (activePage.id === 'page2') {
                    page3.classList.add('active');
                } else if (activePage.id === 'page3') {
                    page1.classList.add('active');
                }
            });

// random color
const generateRandomColor = () => {
	const r = Math.floor(Math.random() * 255);
	const g = Math.floor(Math.random() * 255);
	const b = Math.floor(Math.random() * 255);

	return `rgb(${r}, ${g}, ${b})`;
};

const buttons = document.querySelectorAll('button');

for (let button of buttons) {
	button.addEventListener('click', colorize);
}


function colorize() {
	this.style.backgroundColor = generateRandomColor();
	this.style.color = generateRandomColor();
}

// input
const form = document.querySelector('#myForm');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission behavior

  const firstNameInput = document.querySelector('#firstName');
  const lastNameInput = document.querySelector('#email');

  console.log(`Halo ${firstNameInput.value}, Selamat Datang.
  email: ${email.value} akan segera dibalas !`);

  // You can also reset the form if needed using reset() method
  form.reset();

  
});


const input = document.getElementById('input');
      const list = document.getElementById('list');

      input.addEventListener('keyup', (event) => {
        if (event.code === "Enter") {
          const newItem = document.createElement('li');
          newItem.innerText = event.target.value;
          list.appendChild(newItem);
          event.target.value = "";
        }
      });

