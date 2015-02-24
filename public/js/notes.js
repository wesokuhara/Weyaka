

/** When the user wants to add a note, toggle the 
  * visibility of the add note popup form to show
  * When the user cancels, hide the form.
  */
function toggle_visibility(id) {

	console.log("Visbility toggled.");

  var popup = document.getElementById(id);
  if (popup.style.display == 'block') {

    //reset form fields
    document.getElementById('title-field').value='';
    document.getElementById('details-field').value='';

    //hide the popup
    popup.style.display = 'none';
  }
  else {
    //display the popup
    popup.style.display = 'block';
  }
}
