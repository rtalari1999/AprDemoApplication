enum PrintMedia{
    NewsPaper = "NewsPaper",
    NewsLetter  = '0',
    Magazine = 0,
    Book 
}

function getMedia(mediaName : string): PrintMedia{

    if(mediaName === 'Forbs'){
        console.log(PrintMedia.Book);
        return PrintMedia.Book;
    }
    return PrintMedia.NewsPaper;
    
}

getMedia('Forbs');