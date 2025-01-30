// Function to create the resource HTML
function createResourceHtml(resource) {
    const resourceHtml = 
        <section id="${resource.category.toLowerCase()}" class="category-section">
            <h2>${resource.category}</h2>
            <p>${resource.text}</p>
            <ul>
                ${resource.sources.map(source => <li><a href="${source.url}" target="_blank">${source.title}</a></li>).join('')}
            </ul>
        </section>
    ;
    return resourceHtml;
  }

  // Event listener for nav link click
  document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');
    const contentArea = document.getElementById('content-area');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            // Remove active class from all nav links
            navLinks.forEach(navLink => navLink.classList.remove('active-link'));

            // Add active class to the clicked link
            e.target.classList.add('active-link');

            const category = e.target.innerText.toLowerCase().trim();
            const resource = resources.find(res => res.category.toLowerCase().trim() === category);
            console.log(category)
            console.log(resource)
            console.log(resources.map(res => res.category.toUpperCase()))
            if (resource) {
                contentArea.innerHTML = createResourceHtml(resource);
            }
        });
    });
  });