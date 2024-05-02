public class BasicCalculator {
public integer firstnumber {set;get;}
public integer secondnumber{set;get;}
public integer result{set;get;}

public void addition()
{
result= firstnumber + secondnumber;
}
public void sub()
{
result= firstnumber - secondnumber;
}
public void mul()
{
result= firstnumber * secondnumber;
}
public void div()
{
if(secondnumber > 0)
{
result= firstnumber / secondnumber;
ApexPages.addmessage(new ApexPages.message(ApexPages.severity.CONFIRM,'DIVISION IS COMPLETED '));}
else
{
ApexPages.addmessage(new ApexPages.message(ApexPages.severity.WARNING,'Please enter value'));}
}









}