document.addEventListener("DOMContentLoaded", function () {
  // Select elements with the class "skill-level"
  const skills = document.querySelectorAll(".skill-level");

  // Check if elements were found
  if (skills.length > 0) {
    skills.forEach((skill) => {
      // Retrieve skill level from data attribute
      const skillLevel = skill.getAttribute("data-skill");

      // Validate skill level (optional)

      // Set width based on skill level
      skill.style.width = skillLevel;
    });
  } else {
    console.error("No elements with class 'skill-level' found.");
  }
});
