class UI_Header {
    html;

    constructor() {
        this.setHtml();
    }

    setHtml(){
        $.get("./componets/header/header.html",  (result) => {
            this.html = result;
            $(".header-wrap").html(this.html);

            this.initEvents();
       });
    }

    initEvents(){
        $(".search-btn").click(function (){
            app.dataService.search($(".input").val())
        })
    }
}