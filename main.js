function doGet(e) {
    return HtmlService
        .createTemplateFromFile('Index.html')
        .evaluate();
}

function loadPage() {
    return {
        title: 'Hello World'
    }
}