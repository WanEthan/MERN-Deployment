const StoreController = require("../controllers/store_controllers")


module.exports = (app) => {
    // --------------------READ ALL DATA  -----------
    app.get("/api/stores", StoreController.allStores);

    // --------------------READ ONLY ONE DATA -----------

    app.get("/api/stores/:id", StoreController.oneStore);

    // --------------------CREAT NEW Author -----------
    app.post("/api/stores", StoreController.addStore);

    // --------------------UPDATE Author INFO -----------
    app.patch("/api/stores/:id", StoreController.editStore);

    // --------------------DELETE Author  -----------
    app.delete("/api/stores/:id", StoreController.removeStore);

}