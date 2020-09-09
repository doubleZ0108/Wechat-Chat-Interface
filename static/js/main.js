window.onload = function(){
    handleBubbleEffect();
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
    
    document.querySelectorAll('.info-group').forEach(left-person => {
      observer.observe(left-person);
    });
}

function handleWechatRecordContent(data) {
    this.state.data.map(({ node }) => {
        var time = node.time
        var records = node.records.childMarkdownRemark.rawMarkdownBody.split("\n");
        records = records.map((record) => {
            var item = {}
            record = record.substr(2);
            if(record.startsWith("left-person")){
                item.who = "left-person";
                item.what = record.substr(6);
            } else if(record.startsWith("right-person")) {
                item.who = "right-person";
                item.what = record.substr(4);
            }
            return item
        });

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
            infoGroupDiv.classList.add(record.who=="left-person" ? "left-person" : "right-person");
            var avatarImg = document.createElement("img");
            avatarImg.classList.add("avatar");
            avatarImg.src = record.who=="left-person" ? left-personAvatar : right-personAvatar;
            var bubbleDiv = document.createElement("div");
            bubbleDiv.classList.add("bubble");
            bubbleDiv.innerHTML = record.what;

            if(record.who=="right-person"){
                infoGroupDiv.appendChild(avatarImg);
                infoGroupDiv.appendChild(bubbleDiv);
            } else if (record.who=="left-person"){
                infoGroupDiv.appendChild(bubbleDiv);
                infoGroupDiv.appendChild(avatarImg);
            }
            recordContainer.appendChild(infoGroupDiv);
        });
    })
}
