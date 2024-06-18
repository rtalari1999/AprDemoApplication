var PrintMedia;
(function (PrintMedia) {
    PrintMedia["NewsPaper"] = "NewsPaper";
    PrintMedia["NewsLetter"] = "NewsLetter";
    PrintMedia["Magazine"] = "Magazine";
    PrintMedia["Book"] = "Book";
})(PrintMedia || (PrintMedia = {}));
function getMedia(mediaName) {
    if (mediaName === 'Forbs') {
        console.log(PrintMedia.Book);
        return PrintMedia.Book;
    }
    return PrintMedia.NewsPaper;
}
getMedia('Forbs');
