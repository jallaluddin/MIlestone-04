// script.js
document.addEventListener('DOMContentLoaded', function () {
    var generateButton = document.getElementById('generate-button');
    var resumeSection = document.getElementById('resume');
    var resumeForm = document.getElementById('resume-form');
    var profileImageInput = document.getElementById('profile-image');
    // Placeholder for the profile image URL
    var profileImageUrl = '';
    // Handle profile image preview
    profileImageInput.addEventListener('change', function (event) {
        var _a;
        var file = (_a = event.target.files) === null || _a === void 0 ? void 0 : _a[0];
        if (file) {
            var reader = new FileReader();
            reader.onload = function (e) {
                var _a;
                profileImageUrl = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
            };
            reader.readAsDataURL(file);
        }
    });
    generateButton === null || generateButton === void 0 ? void 0 : generateButton.addEventListener('click', function () {
        var formData = new FormData(resumeForm);
        // Generate the resume content with profile picture
        var resumeContent = "\n            ".concat(profileImageUrl ? "<img src=\"".concat(profileImageUrl, "\" alt=\"Profile Picture\" class=\"profile-picture\">") : '', "\n            <h1>").concat(formData.get('name'), "</h1>\n            <p><strong>Profession:</strong> ").concat(formData.get('profession'), "</p>\n            <p><strong>Email:</strong> ").concat(formData.get('email'), "</p>\n            <p><strong>Phone:</strong> ").concat(formData.get('phone'), "</p>\n            <p><strong>Address:</strong> ").concat(formData.get('address'), "</p>\n            <h2>About Me</h2>\n            <p>").concat(formData.get('about'), "</p>\n            <h2>Education</h2>\n            <p>").concat(formData.get('education'), "</p>\n            <h2>Experience</h2>\n            <p>").concat(formData.get('experience'), "</p>\n            <h2>Skills</h2>\n            <p>").concat(formData.get('skills'), "</p>\n            <h2>Languages</h2>\n            <p>").concat(formData.get('languages'), "</p>\n            <button id=\"resume-edit-button\" class=\"edit-button\">Edit</button>\n        ");
        // Insert the resume content into the section
        resumeSection.innerHTML = resumeContent;
        resumeSection.style.display = 'block';
        resumeForm.style.display = 'none';
        // Add event listener to the "Edit" button in the resume section
        var resumeEditButton = document.getElementById('resume-edit-button');
        resumeEditButton === null || resumeEditButton === void 0 ? void 0 : resumeEditButton.addEventListener('click', function () {
            resumeSection.style.display = 'none';
            resumeForm.style.display = 'block';
        });
    });
});
