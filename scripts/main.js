Events.on(ClientLoadEvent, () => {
    Time.runTask(7, () => {
        let
        list = Vars.mods.list(),
        mods = Vars.ui.mods;
        
        mods.buttons.button("@reinstall", Icon.download, () => {
            if(list.size == 0){
                Vars.ui.showInfo("@nomods");
                return;
            }
            
            list.each(mod => {
                if(mod.getRepo() != null && mod.enabled()){
                    mods.githubImportMod(mod.getRepo(), mod.isJava());
                }
            });
        }).size(210, 64);
    });
});
