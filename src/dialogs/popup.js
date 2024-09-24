Office.onReady((info) => {
    if(info.host === Office.HostType.Excel){
        document.getElementById("ok-button").onclick = () => tryCatch(sentStringToParentPage);
    }
});

const sentStringToParentPage = () => {
    const userName = document.getElementById("name-box").value;
    Office.context.ui.messageParent(userName);
};

const tryCatch = async(callback) => {
    try{
        await callback();
    }catch(error){
        console.error(error);
    }
}