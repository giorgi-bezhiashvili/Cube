        var restart = document.getElementById("restart")
        var player = document.getElementById("player")
        var timerminus=1000
        var timer = document.getElementById("timer")
        var idk=document.getElementById("idk")
        let score=0
        var realtimer=60
        
        var interval =setInterval(() => {
            realtimer--
            timer.innerText=realtimer
            
            if (realtimer<1){
            swal("time is over" + " " + score)
            clearInterval(interval);
            }
        }, 1000);
        

        
        player.addEventListener("click",function(){
            timer.innerText=realtimer
            score++
            idk.innerText = "score" + " " + score;
            var randomposX=Math.ceil(Math.random()*450)
            var randomposY=Math.ceil(Math.random()*450)
            var randomsize=Math.ceil(Math.random()*100)
        
            if (randomsize<20){
                randomsize=20
                player.style.width=Math.floor(randomsize) + "px"
                player.style.height=Math.floor(randomsize) + "px"        
            }
            player.style.width=Math.floor(randomsize) + "px"
            player.style.height=Math.floor(randomsize) + "px"
        
            player.style.marginTop = randomposY + "px"
            player.style.marginLeft = randomposX + "px"
            
            if (score == 20) {
                var megacube=document.getElementById("megacube")
                megacube.style.width=Math.floor(randomsize) + "px"
                megacube.style.height=Math.floor(randomsize) + "px"
            
                megacube.style.marginTop = Math.random * 400 + "px"
                megacube.style.marginLeft = Math.random * 400 + "px"
                
                megacube.addEventListener("click",function(){
                    score+=10
                    idk.innerText="score" + " " + score
        
                if (this.click=true){
                    megacube.style.width=0 + "px"
                    megacube.style.height=0 + "px"
                }
                })
        }
        })
