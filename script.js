document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll("nav a");
    const contentArea = document.getElementById("content-area");

    function updateContent(category) {
        // Find the corresponding resource data
        const resource = resources.find(res => res.category === category);
        if (!resource) return;

        // Generate HTML for the content section
        contentArea.innerHTML = `
            <h2>${resource.category}</h2>
            <p>${resource.text}</p>
            <ul>
                ${resource.sources.map(source => `<li><a href="${source.url}" target="_blank">${source.title}</a></li>`).join('')}
            </ul>
        `;

        // Update active link styling
        navLinks.forEach(link => link.classList.remove("active-link"));
        document.querySelector(`nav a[data-category="${category}"]`).classList.add("active-link");
    }

    // Attach event listeners to each navigation link
    navLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault(); // Prevent default link behavior
            const selectedCategory = event.target.dataset.category;
            updateContent(selectedCategory);
        });
    });

    // Load the first category by default (HTML)
    updateContent("HTML");
});
