public class Linkedin_Example {
    public String  ClientId 	{set;get;}
        public String  ClientSecret	{set;get;}
          public String  redirectUri 	{set;get;}
          public String  Code 	{set;get;}
            public String  accessToken  {set;get;}
                public String  state  {set;get;}
      public static final string SCOPE ='r_emailaddress r_liteprofile w_member_social';

    public Linkedin_Example(){
     redirectUri  ='https://dynamkisch-dev-ed--c.visualforce.com/apex/LinkedlnoAuth';   
    }
    public pagereference   requestCode(){
        String url='https://www.linkedin.com/oauth/v2/authorization';
    url=url+'?response_type=code';
    url=url+'&client_id=' + ClientId;
    url=url+'&redirect_uri='+ redirectUri; 
       url=url+'&state='+ state;
      url=url +'&scope='+SCOPE ;
        pagereference p=new pagereference(url) ;
        return p; 
        }
    
}