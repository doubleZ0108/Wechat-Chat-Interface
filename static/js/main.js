window.onload = function(){

};


function handleBubbleEffect() {
    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if(entry.isIntersecting){
            entry.target.classList.add('animate')
            // observer.unobserve(entry.target)
          } else {
            entry.target.classList.remove('animate')
          }
        })
    })
    
    document.querySelectorAll('.info-group').forEach(yoyo => {
      observer.observe(yoyo);
    });
}

function handleWechatRecordContent(data) {
    this.state.data.map(({ node }) => {
        var time = node.time
        var records = node.records.childMarkdownRemark.rawMarkdownBody.split("\n");
        records = records.map((record) => {
            var item = {}
            record = record.substr(2);
            if(record.startsWith("yoyo")){
                item.who = "yoyo";
                item.what = record.substr(6);
            } else if(record.startsWith("zz")) {
                item.who = "zz";
                item.what = record.substr(4);
            }
            return item
        });
        // records.pop();
        // console.log(records);

        var recordContainer = document.getElementById("wechat-record-container");
        
        // Time
        var timeDiv = document.createElement("div");
        timeDiv.classList.add("time");
        timeDiv.innerHTML = time;
        recordContainer.appendChild(timeDiv);

        records.map((record) => {
            //Bubble
            var infoGroupDiv = document.createElement("div");
            infoGroupDiv.classList.add("info-group");
            infoGroupDiv.classList.add(record.who=="yoyo" ? "yoyo" : "zz");
            var avatarImg = document.createElement("img");
            avatarImg.classList.add("avatar");
            avatarImg.src = record.who=="yoyo" ? YoyoAvatar : zzAvatar;
            var bubbleDiv = document.createElement("div");
            bubbleDiv.classList.add("bubble");
            bubbleDiv.innerHTML = record.what;

            if(record.who=="zz"){
                infoGroupDiv.appendChild(avatarImg);
                infoGroupDiv.appendChild(bubbleDiv);
            } else if (record.who=="yoyo"){
                infoGroupDiv.appendChild(bubbleDiv);
                infoGroupDiv.appendChild(avatarImg);
            }
            recordContainer.appendChild(infoGroupDiv);
        });
    })
}
