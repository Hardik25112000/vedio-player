const player = document.getElementById("player");
console.log(player);
const err = document.getElementById("err");

function func(e) {
    let [file] = e.files;
    let type = file.type;
    if (type === "video/ogg" || type === "video/webm" || type === "video/mp4") {
        let url = URL.createObjectURL(file);
        player.src = url;
        err.innerHTML = `<span class="text-success">Video is ready to play!</span>`;
    }
    else {
        err.innerHTML = `<span class="text-danger">Invalid File Format!</span>`
    }

}