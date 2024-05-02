public class CustomController_constrocuter {
public string searchData{set;get;}
public   void CustomController_constrocuter1 ()
{

Account acc=new Account();
acc.Name='suvarna123';
acc.Rating='hot';
acc.phone=' 1234567890 ';
insert acc;
if(acc.id != null)
{
 searchData='Record inserted'      +acc.id;
 }
 else
 {
  searchData='Record  not inserted';

 }

}

}