({
    startGame : function(component, event, helper) {
        //access the combobox
        let GameModeCombobox=component.find("Gamemode");
        // acess the va;lue of cobobox
        let selectedmode=GameModeCombobox.get("v.value") ;

        //accesss the selecte mode
         component.set("v.selectedMode1",  selectedmode);
        //alert("The selectes game mode is"+ selectedmode);
       console.log("selectd mode is" +component.get("v.selectedmode1"));

    },
    ReshufleGame: function(component, event, helper) {
        console.log("Reshuffle the game")
    }
})