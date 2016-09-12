var doneTheStuff;
function whatever() {
  if (!doneTheStuff) {
    doneTheStuff = true;
    $('input[type=checkbox]').bootstrapToggle();
  }
}
whatever();