@RestResource(urlMapping='/v1/BookManagement/')
global class BookManager {

	@httpGet
    global static Book__c doGetBook(){
        Book__c book = new Book__c();
      //  Map<String, String> paramsMap = RestContext.request.params;
    //    String bookId = paramsMap.get('Id');
        book = [Select Id, Name From Book__c ];
        return book;
    }
    
    @httpDelete
    global static String doDeleteBook(){
        Book__c book = new Book__c();
 //       Map<String, String> paramsMap = RestContext.request.params;
     //   String bookId = paramsMap.get('Id');
        book = [Select Id, Name From Book__c];
        delete book;
        return 'Record Deleted!';
    }
   /* 
    @httpPost
    global static Book__c doCreateBook(BooksInfo bookInfo){
        Book__c book = bookInfo.book;
        insert book;
        return book;
    }
    @httpPut
    global static Book__c doUpdateBook(String Name){
        Map<String, String> paramsMap = RestContext.request.params;
        String bookId = paramsMap.get('Id');
        Book__c book = new Book__c(Name = name, Id = bookId);
        update book;
        return book;
    }
    */
   
}