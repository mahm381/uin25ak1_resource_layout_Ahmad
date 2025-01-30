document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll("nav a");
    const contentArea = document.getElementById("content-area");

    // Ensure the resources array is defined before use
    if (typeof resources === "undefined" || !Array.isArray(resources)) {
        console.error("Error: 'resources' array is not defined.");
        return;
    }

    function updateContent(category) {
        // Find the corresponding resource data
        const resource = resources.find(res => res.category === category);
        if (!resource) {
            console.error(`Error: No content found for category '${category}'`);
            return;
        }

        // Generate HTML for the content section
        contentArea.innerHTML = `
            <h2>${resource.category}</h2>
            <p>${resource.text}</p>
            <ul>
                ${resource.sources?.map(source => `<li><a href="${source.url}" target="_blank">${source.title}</a></li>`).join('') || ''}
            </ul>
        `;

        // Update active link styling
        navLinks.forEach(link => link.classList.remove("active-link"));
        const activeLink = document.querySelector(`nav a[data-category="${category}"]`);
        if (activeLink) {
            activeLink.classList.add("active-link");
        }
    }

    // Attach event listeners to each navigation link
    navLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault(); // Prevent default link behavior

            const selectedCategory = event.target.dataset.category;
            if (!selectedCategory) {
                console.error("Error: Clicked navigation link has no 'data-category' attribute.");
                return;
            }

            updateContent(selectedCategory);
        });
    });

    // Load the first category by default (HTML)
    updateContent("HTML");
});
