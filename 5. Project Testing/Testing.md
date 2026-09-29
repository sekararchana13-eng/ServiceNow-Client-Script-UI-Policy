# Project Testing

## Project Title

**Implement Client Script & UI Policy on ServiceNow Incident**

---

## 1. Introduction

Testing is an important phase of the project used to verify whether the configured Client Scripts and UI Policy work according to the expected requirements.

The ServiceNow Incident form is tested under different conditions to verify dynamic field behavior, validation, submission control, and list-based editing.

---

## 2. Testing Objectives

The main objectives of testing are:

- To verify the UI Policy configuration.
- To verify Client Script behavior.
- To check mandatory field enforcement.
- To verify read-only field behavior.
- To verify field visibility behavior.
- To validate Incident submission.
- To test invalid data handling.
- To verify reverse conditions.
- To test applicable list editing behavior.
- To ensure the expected Incident form behavior is achieved.

---

## 3. Testing Environment

| Item | Details |
|---|---|
| Platform | ServiceNow |
| Module | Incident Management |
| Table | Incident |
| Environment | ServiceNow PDI / Development Instance |
| Browser | Modern Web Browser |
| Scripts | JavaScript Client Scripts |
| Configuration | UI Policy |
| Testing Type | Functional Testing |

---

## 4. Test Case Format

Each test case contains:

- Test Case ID
- Test Scenario
- Test Steps
- Expected Result
- Actual Result
- Status

---

## 5. UI Policy Testing

### Test Case UI-01: UI Policy Activation

**Test Scenario:** Verify that the UI Policy is activated when its configured condition is satisfied.

**Steps:**

1. Open the Incident form.
2. Enter the required Incident information.
3. Set the relevant field values according to the configured UI Policy condition.
4. Observe the affected fields.

**Expected Result:**

The UI Policy should become active and apply the configured field behavior.

**Actual Result:**

The configured UI Policy behavior was applied successfully.

**Status:** Passed

---

### Test Case UI-02: Mandatory Field Behavior

**Test Scenario:** Verify mandatory field enforcement.

**Steps:**

1. Activate the UI Policy condition.
2. Leave the configured mandatory field empty.
3. Attempt to submit the Incident.

**Expected Result:**

The system should require the mandatory field to be completed before submission.

**Actual Result:**

The required field was enforced according to the configured UI Policy.

**Status:** Passed

---

### Test Case UI-03: Read-only Field Behavior

**Test Scenario:** Verify read-only behavior.

**Steps:**

1. Activate the UI Policy condition.
2. Locate the configured read-only field.
3. Attempt to modify the field.

**Expected Result:**

The configured field should not be editable while the UI Policy condition is active.

**Actual Result:**

The field remained read-only according to the configuration.

**Status:** Passed

---

### Test Case UI-04: Field Visibility

**Test Scenario:** Verify visibility behavior.

**Steps:**

1. Open the Incident form.
2. Set the values required to activate the configured UI Policy.
3. Observe the affected field.

**Expected Result:**

The field visibility should change according to the configured UI Policy Action.

**Actual Result:**

The field visibility behaved according to the configuration.

**Status:** Passed

---

## 6. Client Script Testing

### Test Case CS-01: onLoad Client Script

**Test Scenario:** Verify onLoad Client Script execution.

**Steps:**

1. Open or create an Incident.
2. Allow the Incident form to load completely.
3. Observe the configured behavior.

**Expected Result:**

The onLoad Client Script should execute when the form loads.

**Actual Result:**

The configured onLoad behavior was executed successfully.

**Status:** Passed

---

### Test Case CS-02: onChange Client Script

**Test Scenario:** Verify dynamic behavior when a configured field changes.

**Steps:**

1. Open an Incident form.
2. Locate the configured field.
3. Change its value.
4. Observe the related field or form behavior.

**Expected Result:**

The configured onChange Client Script should execute and apply the expected behavior.

**Actual Result:**

The configured dynamic behavior was triggered successfully.

**Status:** Passed

---

### Test Case CS-03: onSubmit Client Script

**Test Scenario:** Verify form submission validation.

**Steps:**

1. Open an Incident.
2. Leave the information required by the configured validation incomplete.
3. Click Submit.

**Expected Result:**

The Client Script should prevent submission when the validation condition is not satisfied.

**Actual Result:**

The configured validation prevented invalid submission.

**Status:** Passed

---

### Test Case CS-04: Valid Submission

**Test Scenario:** Verify successful submission with valid information.

**Steps:**

1. Open an Incident.
2. Enter all required information.
3. Submit the Incident.

**Expected Result:**

The Incident should be submitted successfully.

**Actual Result:**

The Incident was submitted successfully.

**Status:** Passed

---

### Test Case CS-05: onCellEdit Client Script

**Test Scenario:** Verify list-based Incident editing.

**Steps:**

1. Open the Incident list.
2. Edit the applicable field directly from the list.
3. Enter the required value.
4. Save the change.

**Expected Result:**

The configured onCellEdit Client Script should validate or control the change according to its configuration.

**Actual Result:**

The list edit behavior worked according to the configured Client Script.

**Status:** Passed

---

## 7. Reverse Condition Testing

### Test Case RC-01: Reverse UI Policy Condition

**Test Scenario:** Verify that field behavior is restored when the UI Policy condition becomes false.

**Steps:**

1. Activate the UI Policy condition.
2. Observe the configured field behavior.
3. Change the relevant value so that the condition becomes false.
4. Observe the field again.

**Expected Result:**

The field should return to its normal behavior when Reverse if false is configured.

**Actual Result:**

The field behavior was restored according to the configuration.

**Status:** Passed

---

## 8. Incident State Testing

The Incident form is tested using different Incident states.

| State | Test Purpose |
|---|---|
| New | Verify initial Incident behavior |
| In Progress | Verify behavior during Incident processing |
| Resolved | Verify behavior during Incident resolution |

The actual field behavior depends on the conditions configured in the ServiceNow instance.

---

## 9. Testing Summary

| Test ID | Test Area | Expected Result | Status |
|---|---|---|---|
| UI-01 | UI Policy Activation | Policy applies correctly | Passed |
| UI-02 | Mandatory Field | Required field enforced | Passed |
| UI-03 | Read-only Field | Field cannot be modified | Passed |
| UI-04 | Field Visibility | Visibility changes correctly | Passed |
| CS-01 | onLoad | Script executes on form load | Passed |
| CS-02 | onChange | Dynamic behavior works | Passed |
| CS-03 | onSubmit | Invalid submission prevented | Passed |
| CS-04 | Valid Submission | Incident saves successfully | Passed |
| CS-05 | onCellEdit | List edit is controlled | Passed |
| RC-01 | Reverse Condition | Normal behavior restored | Passed |

---

## 10. Testing Result

The configured Client Scripts and UI Policy were tested using different Incident form and list scenarios.

The testing verified:

- Dynamic field behavior.
- Mandatory field enforcement.
- Read-only restrictions.
- Field visibility.
- Form submission validation.
- Successful Incident submission.
- Reverse UI Policy behavior.
- Applicable list editing behavior.

The configured functionality worked according to the implemented project requirements.

---

## 11. Screenshots as Testing Evidence

Screenshots of the ServiceNow implementation and testing results are maintained in the project repository.

Recommended evidence includes:

- UI Policy configuration.
- UI Policy Actions.
- Client Script configuration.
- Incident form before condition.
- Incident form after condition.
- Validation message.
- Successful submission.
- List editing behavior.

---

## 12. Conclusion

Testing confirms that the Client Scripts and UI Policy provide the required dynamic behavior and validation for the ServiceNow Incident form.

The test cases cover form loading, field changes, form submission, UI Policy actions, reverse conditions, and applicable list editing.

Successful testing provides evidence that the implemented configuration works according to the defined project requirements.
