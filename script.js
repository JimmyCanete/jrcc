let currentPage;

function loadPage(htmlPage) {
    if(currentPage === htmlPage) {
      return;
    }
    currentPage = htmlPage;
    $('#content').load(`${htmlPage}`);
}