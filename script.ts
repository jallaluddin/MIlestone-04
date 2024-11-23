// script.js
document.addEventListener('DOMContentLoaded', () => {
    const generateButton = document.getElementById('generate-button');
    const resumeSection = document.getElementById('resume');
    const resumeForm = document.getElementById('resume-form') as HTMLFormElement;
    const profileImageInput = document.getElementById('profile-image') as HTMLInputElement;

    // Placeholder for the profile image URL
    let profileImageUrl = '';

    // Handle profile image preview
    profileImageInput.addEventListener('change', (event) => {
        const file = (event.target as HTMLInputElement).files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                profileImageUrl = e.target?.result as string;
            };
            reader.readAsDataURL(file);
        }
    });

    generateButton?.addEventListener('click', () => {
        const formData = new FormData(resumeForm);

        // Generate the resume content with profile picture
        const resumeContent = `
            ${profileImageUrl ? `<img src="${profileImageUrl}" alt="Profile Picture" class="profile-picture">` : ''}
            <h1>${formData.get('name')}</h1>
            <p><strong>Profession:</strong> ${formData.get('profession')}</p>
            <p><strong>Email:</strong> ${formData.get('email')}</p>
            <p><strong>Phone:</strong> ${formData.get('phone')}</p>
            <p><strong>Address:</strong> ${formData.get('address')}</p>
            <h2>About Me</h2>
            <p>${formData.get('about')}</p>
            <h2>Education</h2>
            <p>${formData.get('education')}</p>
            <h2>Experience</h2>
            <p>${formData.get('experience')}</p>
            <h2>Skills</h2>
            <p>${formData.get('skills')}</p>
            <h2>Languages</h2>
            <p>${formData.get('languages')}</p>
            <button id="resume-edit-button" class="edit-button">Edit</button>
        `;

        // Insert the resume content into the section
        resumeSection!.innerHTML = resumeContent;
        resumeSection!.style.display = 'block';
        resumeForm.style.display = 'none';

        // Add event listener to the "Edit" button in the resume section
        const resumeEditButton = document.getElementById('resume-edit-button');
        resumeEditButton?.addEventListener('click', () => {
            resumeSection!.style.display = 'none';
            resumeForm.style.display = 'block';
        });
    });
});
