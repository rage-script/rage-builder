class Pagination{

    constructor(pageSize = 100){
        this.pageSize = pageSize;
        this.init();
    }

    init(){ // Add Pagination click handlers
        $('.pagination-page-form').submit((event) => {
            event.preventDefault();
            this.setPage( $('.pagination-current').val() );
        });

        $('.pagination-prev').click(() => {
            this.prev();
        });

        $('.pagination-next').click(() => {
            this.next();
        });
    }

    update(elementsCount, renderCallback){
        this.current = 1;
        this.total = Math.ceil(elementsCount /  this.pageSize );
        this.render = () => {
            this.renderNumbers();
            renderCallback();
        }
        this.render();
    }

    renderNumbers(){
        $('.pagination-current').val(this.current);
        $('.pagination-total').text(this.total);
    }

    next(){
        this.current++;
        if(this.current > this.total) this.current  = 1;
        this.render();
    }

    prev(){
        this.current--;
        if(this.current < 1) this.current = this.total;
        this.render();
    }

    setPage(pageNumber){
        if(pageNumber < 1 || pageNumber > this.total) return;

        this.current = pageNumber;
        this.render();
    }

    list(allElements){
        const start = (this.current -1) * this.pageSize;
        return allElements.slice( start, start + this.pageSize);
    }
}