window.onload = function(){
    readJson("static/json/data.json")
        .then(testData => {
            handleWechatRecordContent(testData);
            handleIntersectionObserver();
        })
        .catch(error => console.log(error));
};


function handleIntersectionObserver() {
    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if(entry.isIntersecting){
            entry.target.classList.add('animate')
          } else {
            entry.target.classList.remove('animate')
          }
        })
    })
    
    document.querySelectorAll('.info-group').forEach(info => {
      observer.observe(info);
    });
}

function handleWechatRecordContent(data) {
    var leftPersonAvatar = "img/left-person-avatar.jpg";
    var rightPersonAvatar = "img/right-person-avatar.jpg";

    data.recordGroup.map((node) => {
        var recordContainer = document.getElementById("wechat-record-container");
        
        // Time
        var timeDiv = document.createElement("div");
        timeDiv.classList.add("time");
        timeDiv.innerHTML = node.time;
        recordContainer.appendChild(timeDiv);

        // Records
        var records = node.records;
        records = records.map((record) => {
            var item = {}
            if(record.startsWith(data.leftPrefix)){
                item.who = "left-person";
                item.what = record.substr(data.leftPrefix.length);
            } else if(record.startsWith(data.rightPrefix)) {
                item.who = "right-person";
                item.what = record.substr(data.rightPrefix.length);
            }
            return item;
        });
        records.map((record) => {
            //Bubble
            var infoGroupDiv = document.createElement("div");
            infoGroupDiv.classList.add("info-group");
            infoGroupDiv.classList.add(record.who=="left-person" ? "left-person" : "right-person");

            var avatarImg = document.createElement("img");
            avatarImg.classList.add("avatar");
            avatarImg.src = record.who=="left-person" ? leftPersonAvatar : rightPersonAvatar;
            avatarImg.alt = record.who=="left-person" ? "left person avatar" : "right person avatar";
            avatarImg.draggable = false;

            var bubbleDiv = document.createElement("div");
            bubbleDiv.classList.add("bubble");
            bubbleDiv.innerHTML = record.what;

            if(record.who=="right-person"){
                infoGroupDiv.appendChild(bubbleDiv);
                infoGroupDiv.appendChild(avatarImg);
            } else if (record.who=="left-person"){
                infoGroupDiv.appendChild(avatarImg);
                infoGroupDiv.appendChild(bubbleDiv);
            }
            recordContainer.appendChild(infoGroupDiv);
        });
    });
}
