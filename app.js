document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function() {
        const contentId = this.id.replace('btn', 'answer'); // "btnOne" to "answerOne"
        const content = document.getElementById(contentId);

        // Toggle expansion
        if (content.style.maxHeight && content.style.maxHeight !== '0px') {
            content.style.maxHeight = '0px'; // Collapse the section
        } else {
            // Expand the section by setting max-height to its scrollHeight
            // This ensures expansion without upward movement
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
});
