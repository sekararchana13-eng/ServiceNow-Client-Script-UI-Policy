# Client Scripts

## Project
Implement Client Script & UI Policy (Incident)

## Table
Incident

## Client Scripts Implemented

### 1. onLoad Client Script
Used to control or populate Incident form fields when the form loads.

### 2. onChange Client Script
Configured on the Category field to dynamically update another field when the Category changes.

### 3. onSubmit Client Script
Used to validate the Incident before submission.
The Incident should not be submitted when the Assigned To field is empty.

### 4. onCellEdit Client Script
Used to validate field changes made directly from the Incident list view.

## Testing

The Client Scripts were tested with different Incident conditions and field values.

## Expected Result

The scripts should dynamically control the Incident form, validate user input, and prevent invalid data from being submitted.
