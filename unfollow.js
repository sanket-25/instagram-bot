(() => {
    let i = 0;
    let count = 0;
    const unfollowInterval = setInterval(() => {
        if (count >= 200) {
            clearInterval(unfollowInterval);
            return;
        }
        let list = document.querySelectorAll('button');
        for(let btn of list)
        {
            if(btn.innerText === 'Unfollow'){
                btn.click();
                console.log('Unfollowed');
                count++;
            }
        }
        if (list[i].innerText === 'Following') {
            list[i].click();
        }
        i++;
    }, 100);
    console.log("intervalID => ",unfollowInterval);
})();
