public class Showallaccountrecords {
public list<Account>  acc {set;get;}

public Showallaccountrecords() {
  acc=new list<Account>();
  acc=[select id,name , rating, phone, fax from Account];
  }

}