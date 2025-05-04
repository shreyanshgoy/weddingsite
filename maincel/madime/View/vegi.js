// Add tilt effect to all images
document.querySelectorAll('.thumbnail img').forEach((img) => {
    img.addEventListener('mousemove', (e) => {
      const rect = img.getBoundingClientRect();
      const x = e.clientX - rect.left; // Mouse X position relative to the image
      const y = e.clientY - rect.top;  // Mouse Y position relative to the image
      const centerX = rect.width / 2; // Center X of the image
      const centerY = rect.height / 2; // Center Y of the image
  
      // Calculate rotation angles based on mouse position
      const rotateX = ((y - centerY) / centerY) * 15; // Tilt up or down
      const rotateY = ((x - centerX) / centerX) * -15; // Tilt left or right
  
      // Apply the transformation
      img.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.1)`;
    });
  
    img.addEventListener('mouseleave', () => {
      // Reset the transformation when the mouse leaves the image
      img.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)';
    });
  });