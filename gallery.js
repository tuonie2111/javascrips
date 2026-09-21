function upDate(previewPic) {
  // Check that the mouseover event is firing.
  console.log("Mouse is over an image.");

  // Display information about the selected image in the console.
  console.log("Alt text:", previewPic.alt);
  console.log("Image source:", previewPic.src);

  // Get the div whose id is "image".
  const imageDiv = document.getElementById("image");

  // Change the text to the alt text of the image being previewed.
  imageDiv.textContent = previewPic.alt;

  // Change the background image to the source of the image being previewed.
  imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
}

function unDo() {
  const imageDiv = document.getElementById("image");

  // Restore the original empty background image.
  imageDiv.style.backgroundImage = "url('')";

  // Restore the original text.
  imageDiv.textContent = "Hover over an image below to display here.";
}
