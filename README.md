# Implement Client Script & UI Policy (Incident)
## Project Overview
This project demonstrates the implementation of Client Scripts and UI Policies on the ServiceNow Incident form to improve user experience, enforce field behavior, and prevent incorrect data entry.
## Objectives
- Dynamically control Incident form fields
- Enforce mandatory fields
- Validate Incident data before submission
- Update fields based on user actions
- Control field behavior during list editing
## Technologies Used
- ServiceNow
- JavaScript
- Client Scripts
- UI Policies
- Incident Management
## Client Scripts
### 1. onLoad Client Script
Controls or populates Incident form fields when the form loads.
### 2. onChange Client Script
Runs when the Category or other relevant field changes and dynamically updates another field.
### 3. onSubmit Client Script
Validates required information before allowing an Incident to be submitted.
### 4. onCellEdit Client Script
Validates and controls Incident field updates made directly from the list view.
## UI Policy
A UI Policy is configured on the Incident table to dynamically control field behavior based on Incident conditions.
Conditions can include:
- State
- Category
- Priority
- Impact

The UI Policy can make fields:
- Mandatory
- Read-only
- Visible
## Testing
The implementation was tested using different Incident scenarios:
- New
- In Progress
- Resolved
Validation was also tested by attempting to submit an Incident without the required Assigned To information.

## Expected Result

Invalid Incident data should not be submitted, and appropriate validation messages should be displayed to the user.

## Conclusion

The project demonstrates how UI Policies and Client Scripts can work together to enforce dynamic field behavior, automate updates, and prevent incorrect data submission on Incident forms. The implementation improves form usability and maintains consistent data integrity in ServiceNow.
