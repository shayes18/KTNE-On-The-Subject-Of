var numberOfWires = 3;
function showForm(numWires) {
            var x = document.getElementById("wireForm");
            if(numWires == 3){
                var numberOfWires = 3;
                x.style.display = "block";
                document.getElementById("wire4").style.display = "none";
                document.getElementById("wire5").style.display = "none";
                document.getElementById("wire6").style.display = "none";
                document.getElementById("serialNum").style.display = "none";
            }else if(numWires == 4){
                numberOfWires = 4;
                x.style.display = "block";
                document.getElementById("wire4").style.display = "block";
                document.getElementById("serialNum").style.display = "block";
                document.getElementById("wire5").style.display = "none";
                document.getElementById("wire6").style.display = "none";
            }else if(numWires == 5){
                numberOfWires = 5;
                x.style.display = "block";
                document.getElementById("wire4").style.display = "block";
                document.getElementById("wire5").style.display = "block";
                document.getElementById("serialNum").style.display = "block";
                document.getElementById("wire6").style.display = "none";
            }else if(numWires == 6){
                numberOfWires = 6;
                x.style.display = "block";
                document.getElementById("wire4").style.display = "block";
                document.getElementById("wire5").style.display = "block";
                document.getElementById("wire6").style.display = "block";
                document.getElementById("serialNum").style.display = "block";
            }
        }
        function submitFunc(){
            var ele1 = document.getElementsByName('color');
            var color1 = "";
            for(i = 0; i < ele1.length; i++){
                if(ele1[i].checked){
                    color1 = ele1[i].value;
                }
            }
            var ele2 = document.getElementsByName('color2');
            var color2 = "";
            for(j = 0; j < ele2.length; j++){
                if(ele2[j].checked){
                    color2 = ele2[j].value;
                }
            }
            var ele3 = document.getElementsByName('color3');
            var color3 = "";
            for(k = 0; k < ele3.length; k++){
                if(ele3[k].checked){
                    color3 = ele3[k].value;
                }
            }
            var ele4 = document.getElementsByName('color4');
            var color4 = "";
            for(l = 0; l < ele4.length; l++){
                if(ele4[l].checked){
                    color4 = ele4[l].value;
                }
            }
            var ele5 = document.getElementsByName('color5');
            var color5 = "";
            for(m = 0; m < ele5.length; m++){
                if(ele5[m].checked){
                    color5 = ele5[m].value;
                }
            }
            var ele6 = document.getElementsByName('color6');
            var color6 = "";
            for(n = 0; n < ele6.length; n++){
                if(ele6[n].checked){
                    color6 = ele6[n].value;
                }
            }
            var ele7 = document.getElementsByName('serial');
            var Snum = "";
            for(p = 0; p < ele7.length; p++){
                if(ele7[p].checked){
                    Snum = ele7[p].value;
                }
            }
            var numRed = 0;
            var numBlue = 0;
            var numYellow = 0;
            var numBlack = 0;
            var numWhite = 0;
          
            if(color1 == "red"){
                numRed++;
            }else if(color1 == "blue"){
                numBlue++;
            }else if(color1 == "yellow"){
                numYellow++;
            }else if(color1 == "black"){
                numBlack++;
            }else if(color1 == "white"){
                numWhite++;
            }

            if(color2 == "red"){
                numRed++;
            }else if(color2 == "blue"){
                numBlue++;
            }else if(color2 == "yellow"){
                numYellow++;
            }else if(color2 == "black"){
                numBlack++;
            }else if(color2 == "white"){
                numWhite++;
            }

            if(color3 == "red"){
                numRed++;
            }else if(color3 == "blue"){
                numBlue++;
            }else if(color3 == "yellow"){
                numYellow++;
            }else if(color3 == "black"){
                numBlack++;
            }else if(color3 == "white"){
                numWhite++;
            }

            if(color4 == "red"){
                numRed++;
            }else if(color4 == "blue"){
                numBlue++;
            }else if(color4 == "yellow"){
                numYellow++;
            }else if(color4 == "black"){
                numBlack++;
            }else if(color4 == "white"){
                numWhite++;
            }

            if(color5 == "red"){
                numRed++;
            }else if(color5 == "blue"){
                numBlue++;
            }else if(color5 == "yellow"){
                numYellow++;
            }else if(color5 == "black"){
                numBlack++;
            }else if(color5 == "white"){
                numWhite++;
            }

            if(color6 == "red"){
                numRed++;
            }else if(color6 == "blue"){
                numBlue++;
            }else if(color6 == "yellow"){
                numYellow++;
            }else if(color6 == "black"){
                numBlack++;
            }else if(color6 == "white"){
                numWhite++;
            }
          
            if(numberOfWires == 3){
                if(numRed < 1){
                    alert("Cut the 2nd wire");
                }else if(color3 == "white"){
                    alert("Cut the last wire");
                }else if(numBlue > 1){
                    alert("Cut the last blue wire");
                }else{
                    alert("Cut the last wire");
                }
            }

            if(numberOfWires == 4){
                if((numRed > 1) && (Snum == "odd")){
                    alert("Cut the last red wire");
                }else if((color4 == "yellow") && (numRed < 1)){
                    alert("Cut the 1st wire");
                }else if(numBlue == 1){
                    alert("Cut the 1st wire");
                }else if(numYellow > 1){
                    alert("Cut the last wire");
                }else{
                    alert("Cut the 2nd wire");
                }
            }

            if(numberOfWires == 5){
                if((color5 == "black") && (Snum == "odd")){
                    alert("Cut the 4th wire");
                }else if((numRed == 1) && (numYellow > 1)){
                    alert("Cut the 1st wire");
                }else if(numBlack < 1){
                    alert("Cut the 2nd wire");
                }else{
                    alert("Cut the 1st wire");
                }
            }

            if(numberOfWires == 6){
                if((numYellow < 1) && (Snum == "odd")){
                    alert("Cut the 3rd wire");
                }else if((numYellow == 1) && (numWhite > 1)){
                    alert("Cut the 4th wire");
                }else if(numRed < 1){
                    alert("Cut the last wire");
                }else{
                    alert("Cut the 4th wire");
                }
            }
        }
