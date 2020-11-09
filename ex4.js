document.addEventListener("DOMContentLoaded", ()=>{
    document.getElementById("change").addEventListener("click", ()=>{
        Border = document.getElementById("border").value;
        Background = document.getElementById("background").value;
        if (!isNaN(Number(Border))) {
            document.getElementById("text").style.borderWidth = Border +"px";
        } else {
            switch (Border) {
                case "red":
                    document.getElementById("text").style.borderColor = "red";
                    break;
                case "blue":
                    document.getElementById("text").style.borderColor = "blue";
                    break;
                case "green":
                    document.getElementById("text").style.borderColor = "green";
                    break;
                default:
                    alert("incorrect input");
                    break;
            }
        }

        if (!isNaN(Number(Background))) {
            document.getElementById("text").style.borderWidth = Border +"px"; //??
        } else {
            switch (Background) {
                case "red":
                    document.getElementById("text").style.backgroundColor = "red";
                    break;
                case "blue":
                    document.getElementById("text").style.backgroundColor = "blue";
                    break;
                case "green":
                    document.getElementById("text").style.backgroundColor = "green";
                    break;
                default:
                    alert("incorrect input");
                    break;
            }
        }
    });
});