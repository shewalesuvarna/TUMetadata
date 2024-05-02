// HrOneAttendance.cls
public with sharing class HrOneAttendance {
    @AuraEnabled
    public static String HrOneAttendanceremark(String currentRecordId, String newvalue) {
        try {
            List<Employee__c> emp = [SELECT Id, Name FROM Employee__c WHERE Id = :currentRecordId LIMIT 1];
            
            if (!emp.isEmpty()) {
                emp[0].Remark__c = newvalue;
                emp[0].In_Time__c = System.now();
                update emp[0];
                return 'Update successful';
            } else {
                return 'Employee record not found';
            }
        } catch (Exception e) {
            return 'Error while updating: ' + e.getMessage();
        }
    }

    @AuraEnabled
    public static String HrOneCheckOut(String currentRecordId1) {
        try {
            List<Employee__c> emp = [SELECT Id, Name FROM Employee__c WHERE Id = :currentRecordId1 LIMIT 1];
            
            if (!emp.isEmpty()) {
                emp[0].Out_Time__c = System.now();
                update emp[0];
                return 'Update successful';
            } else {
                return 'Employee record not found';
            }
        } catch (Exception e) {
            return 'Error while updating: ' + e.getMessage();
        }
    }
}