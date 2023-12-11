let movie={
    name:"Baahubali",
    director:"SS.Rajamauli",
    cast:{
        hero:["Prabhas","Anushka Shetty","Tamanna Bhatia","Rana"]
     
    },
    Dateofrelease:"12-06-2015",
    Budget:"500cr",
    Kids:true,
    show:function()
    {
        console.log(this.name,this.director)
    }

}
console.log(movie.name,movie.director)
console.log(movie["Budget"])