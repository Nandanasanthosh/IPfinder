function finder(){
    let ip=document.getElementsByClassName("input").value;
    
    axios
        .get(`http://ip-api.com/batch`)
        .then((res) => {
            let response=res.data;
            console.log(response);
            response.forEach((item) => {
                console.log(item.query);
            });
        })
        .catch((err) =>{
            console.log(err);
        });
        
}
