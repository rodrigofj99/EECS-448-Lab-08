document.addEventListener("DOMContentLoaded",()=>{
    picCount = 1;
    document.getElementById("next").addEventListener("click", ()=>{
        if (picCount+1 > 5) {
            alert("No more pictures!")
        } else {
            image = document.getElementById("image");
            picCount++;
            switch (picCount) {
                case 2:
                    image.src = "pca50.png";
                    document.getElementById("title").innerHTML = "50 principal components";
                    break;
                case 3:
                    image.src = "pca100.png";
                    document.getElementById("title").innerHTML = "100 principal components";
                    break;
                case 4:
                    image.src = "pca200.png";
                    document.getElementById("title").innerHTML = "200 principal components";
                    break;
                case 5:
                    image.src = "Faces.jpg";
                    document.getElementById("title").innerHTML = "Original picture";
                    break;
                default:
                    break;
            }
        }
    });
    document.getElementById("previous").addEventListener("click", ()=>{
        if (picCount-1 < 1) {
            alert("No more pictures!")
        } else {
            image = document.getElementById("image");
            picCount--;
            switch (picCount) {
                case 1:
                    image.src = "pca10.png";
                    document.getElementById("title").innerHTML = "10 principal components";
                    break;
                case 2:
                    image.src = "pca50.png";
                    document.getElementById("title").innerHTML = "50 principal components";
                    break;
                case 3:
                    image.src = "pca100.png";
                    document.getElementById("title").innerHTML = "100 principal components";
                    break;
                case 4:
                    image.src = "pca200.png";
                    document.getElementById("title").innerHTML = "200 principal components";
                    break;
                default:
                    break;
            }
        }
    });
});