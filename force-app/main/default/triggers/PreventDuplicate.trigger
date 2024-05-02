trigger PreventDuplicate on Contact (before insert,before update, after undelete) {
list<Contact> conList=new list<Contact>();
    set<String> EmailSet= new set<String>();
    set<String>LastNameset=new set<string>();
    set<String>Firstnameset=new set<string>();
    set<String>existingEmailset=new set<String>();
    set<String>existingFirstnameset= new set<String>();
    set<String>existingLastnameset=new set<String>();
    if(trigger.isbefore && (trigger.isInsert || trigger.isupdate)){
        conList=trigger.new ;
    }
      if(trigger.isAfter &&  trigger.isundelete)
      {
                  conList=trigger.new;
      }
    for(Contact con:conList )
    {
        if(con.Email !=null)
        {
            EmailSet.add(con.Email) ;
            Firstnameset.add(con.FirstName);
           LastNameset.add(con.LastName);

        }
    }
List<Contact> existingContact= [select id,FirstName ,LastName , Email from Contact where Email IN:EmailSet AND  FirstName IN:Firstnameset AND LastName IN:LastNameset AND  Email != null ];
    
    for(Contact con: existingContact)
    {
      existingEmailset.add(con.Email);  
      existingFirstnameset.add(con.FirstName);
        existingLastnameset.add(con.LastName);
      }
for(Contact con: conList)
{
    if(existingEmailset.contains(con.Email)  && existingFirstnameset.contains(con.FirstName) && existingLastnameset.contains(con.LastName) )
    { 
        con.Email.AddError('Duplicate Email not allow ');
        con.FirstName.AddError('Duplicate Firstname not allow ');
       con.LastName.AddError('Duplicate lastname not allow ');
    }
   else {
 existingEmailset.add(con.Email);  
      existingFirstnameset.add(con.FirstName);
      existingLastnameset.add(con.LastName);   
   }
} 
}