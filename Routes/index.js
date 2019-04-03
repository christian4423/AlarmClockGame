import path from "path";
module.exports = app => {
    const reg = new RegExp("^\/(?!public).*");
    app.route(reg)        
        .get((req, res) => {
            const env = app.get("environment");
            const ViewBag= {
                title: "Christian Matsoukis",
                env
            }
            if(env !== "production"){
                res.render("home", ViewBag);
            }else{
                const p = path.join(__dirname, "../Views/index.html");
                res.sendFile(p);
            }
        });

};
