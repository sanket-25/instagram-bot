(() => {
    let i = 0;
    let count = 0;
    const followInterval = setInterval(() => {
        if (count >= 199) {
            clearInterval(followInterval);
            return;
        }
        let list = document.querySelectorAll('button');
        for(let btn of list)
        {
            if(btn.innerText === 'Follow'){
                btn.click();
                console.log('Followed');
                count++;
            }
        }
        if (list[i].innerText === 'Follow') {
            list[i].click();
        }
        i++;
    }, 100);
    console.log("intervalID => ",followInterval);
})();
