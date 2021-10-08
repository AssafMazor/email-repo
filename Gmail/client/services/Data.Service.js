
class DataService {
    queue = [];
    data;

    constructor() {
        this.getDefaultData();
    }


    getDefaultData(){
        $.getJSON("./data/data-mail.json", (data) => {
            this.data = data;
        });
    }

    next(data){
        this.queue.forEach((event)=>{
            event(data);
        })
    }

    subscribe(event){
        this.queue.push(event);
    }

    search(val){
        this.next(val)
    }

    getMails(){
        return this.data
    }
}