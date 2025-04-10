const sectionTitles = {
  home: "Home | Mutamba Roofing Services",
  about: "About Us | Mutamba Roofing Services",
  projects: "Our Projects | Mutamba Roofing Services",
  contact: "Contact Us | Mutamba Roofing Services",
  reviews: "Reviews | Mutamba Roofing Services",
  blogs: "Our Blogs | Mutamba Roofing Services",
};

const options = {
  threshold: 0.6,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const sectionId = entry.target.id;
      document.title = sectionTitles[sectionId] || "Mutamba Roofing Services";
    }
  });
}, options);

document.querySelectorAll("section").forEach((section) => {
  observer.observe(section);
});
