trigger oppmember on Opportunity (after insert,after update) {
list<OpportunityTeamMember>teams=new list<OpportunityTeamMember>();
 Student__c st =[select CreatedById from Student__c where Name='suvarna'];
    for(Opportunity opp: trigger.new)
{
   If(opp.Type == 'New Customer')
    {
       OpportunityTeamMember opteam=new OpportunityTeamMember();
       opteam.OpportunityId=opp.id;
       opteam.userId=st.CreatedById;
        opteam.TeamMemberRole='Account Manager';
        opteam.OpportunityAccessLevel='Read Only';
         teams.add(opteam);
}
}
 insert teams;
    
   
    
}