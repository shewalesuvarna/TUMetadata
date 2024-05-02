trigger AccountDescription on Account (before insert, after insert, before update, after update) {
    if(trigger.isinsert)
        if(trigger.isBefore)
        AccountTriggerhandler.beforeinserdata(trigger.new);
            else if (trigger.isAfter)
            {
                AccountTriggerhandler.Afterinserdata(trigger.new);
            }
    
   if(trigger.isUpdate)
   {
       if(trigger.isBefore){
        AccountTriggerhandler.beforeupdate(trigger.new, trigger.oldmap);
       }}
}