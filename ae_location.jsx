if(app.project.file == null) {
    alert("You have to save the project first");
} else {
    app.project.file.parent.execute();
}
