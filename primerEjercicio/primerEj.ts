export interface Pagination {
    currentPage: null;
    nextPage:    null;
    totalPages:  null;
}

type ResponseData ={
    "statusCode" : 200,
    "message" : "Quotes", 
    "pagination" : {
        "currentPage": 1,
        "nextPage": 2,
        "totalPages":7268
    },

    "totalQuotes":72672,
    "data":[{
        "quoteGenre": string
        "quoteAuthor":string
        "quoteText":string
    }]
    
}

const fetchData = ()=>{
    
        fetch("https://quote-garden.onrender.com/api/v3/quotes")
        .then((response) => response.json())
        .then((data: ResponseData) => {
            
            console.log("Status : ",data.statusCode);
            data.data.forEach(data =>{
                console.log("------------------------------------------------------------");
                console.log("Genero:" , data.quoteGenre, "|" ,"Autor:", data.quoteAuthor
                ,"|" ,"Quote:", data.quoteText)
            })

    }).catch((error) => console.log(error));
}

fetchData();