public class searchAccountDataController {
public string serchString{set;get;}

public pagereference GotoSerchresultpage()
{
pagereference pgref = new pagereference ('/apex/searchRecords?stext='+serchString);

return pgref.setredirect(true);
}




}