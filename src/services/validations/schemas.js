const arr = [ (async () => Promise.resolve(1))(),(async () => Promise.resolve(2))(), (async () => Promise.resolve(3))()];
(async function(){
    const result = await Promise.all(arr);
    console.log(result);
})();