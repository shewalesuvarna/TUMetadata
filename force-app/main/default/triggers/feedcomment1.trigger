trigger feedcomment1 on FeedComment (after Insert, after Update)  {
    
    String accKeyPrefix = Account.sObjectType.getDescribe().getKeyPrefix();
    Map<Id, feedComment> mapIdByFeedComment = new Map<Id, FeedComment>();
    for(FeedComment fc : trigger.new){ 
  //      if (parentId.startsWith(accKeyPrefix)){
            mapIdByFeedComment.Put(fc.ParentId, fc);
        }
    
    if(!mapIdByFeedComment.IsEmpty()){
        List<Account> accList = new List<Account>();
        for(Account acc : [select Id, Subject__c ,Feed_Date__c	 from Account where ID =: mapIdByFeedComment.KeySet()]){
           acc.Feed_Date__c	  = system.now();
           acc.Subject__c=mapIdByFeedComment.get(acc.Id).CommentBody; 
        }
        update accList;
    }

}