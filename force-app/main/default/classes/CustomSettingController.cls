public class CustomSettingController {
    public contact__c customSettingInstance { get; set; }
    public String successMessage { get; set; }

    public CustomSettingController() {
        customSettingInstance = contact__c.getInstance();
    }

    public void saveCustomSetting() {
        try {
            update customSettingInstance;
            successMessage = 'Data saved successfully!';
        } catch (Exception e) {
            System.debug('Error message: ' + e.getMessage());
            ApexPages.addMessage(new ApexPages.Message(ApexPages.Severity.ERROR, 'Error saving data.'));
        }
    }
}