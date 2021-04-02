class DefaultList{

    constructor(pagination){
        this.pagination = pagination;
        this.current = false;
        this.init();
    }

    update(title, elements, pickCallback, submitCallback){
        $('.default-list-title').text(title);
        this.elements = elements;
        this.pick = (elementId, elementName) => {
            this.current = elementName;
            pickCallback(elementId, elementName);
        }
        this.submit = () =>{
            submitCallback();
            this.hide();
        }
        this.pagination.update(this.elements.length, () => {
            this.render();
        });
    }

    init(){
        $('.default-list-submit').click(() => {
            this.submit();
        });

        $('.default-list-close').click(() => {
            this.hide();
        });
    }

    getCurrent(){
        return this.current;
    }

    render(){
        $('.default-list-body').html('');
        const self = this;
        this.pagination.list(this.elements).forEach( (element, id) => {
            var button = document.createElement('button');
            button.type="button";
            button.classList.add('list-group-item', 'list-group-item-action');
            button.innerHTML = element + ` #${id}`;
            button.onclick = function(){
                self.pick(id, element);
            };
            $('.default-list-body').append(button);
        });
    }

    show(){
        $('.default-list').css('display', 'block');
    }

    hide(){
        $('.default-list').css('display', 'none');
        mp.events.call('client:exitPreview');
    }
}