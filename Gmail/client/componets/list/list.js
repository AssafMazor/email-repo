class UI_List {
    tempalte;
    data = {
        items:[]
    }

    constructor() {
        this.setHtml();
    }
    
    setHtml(){
        $.get("./componets/list/list.hbs",  (result) => {
            this.template = Handlebars.compile(result);
            this.data.items = app.dataService.getMails();
            $(".list").html(this.template(this.data));
            this.initEvents();
       });
    }


    initEvents(){

    }
  }