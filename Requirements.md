# Requirement Analysis

## Project Title

**Implement Client Script & UI Policy on ServiceNow Incident**

---

## 1. Introduction

Requirement analysis is an important phase of the project that identifies the functional and non-functional requirements needed to implement Client Scripts and UI Policies on the ServiceNow Incident form.

The purpose of this phase is to understand the required form behavior, validation requirements, field controls, testing requirements, and technical environment before starting the implementation.

---

## 2. Problem Identification

The ServiceNow Incident form contains several fields that are used to record and manage incident information.

Without proper controls, users may:

- Leave important fields empty.
- Enter incomplete information.
- Modify fields that should be restricted.
- Submit invalid information.
- Make inappropriate changes through list editing.
- Enter inconsistent data during Incident processing.

To address these issues, Client Scripts and UI Policies are used to provide dynamic form behavior and validation.

---

## 3. Functional Requirements

The system should satisfy the following functional requirements.

### FR-01: Incident Form Control

The system shall provide controlled behavior for fields on the ServiceNow Incident form.

### FR-02: UI Policy

The system shall provide a UI Policy on the Incident table.

The UI Policy should dynamically control selected fields based on the configured conditions.

### FR-03: Mandatory Field Control

The system shall make configured fields mandatory when the specified UI Policy condition is satisfied.

### FR-04: Read-only Field Control

The system shall make configured fields read-only when the applicable UI Policy condition is satisfied.

### FR-05: Field Visibility

The system shall control the visibility of configured fields according to the UI Policy configuration.

### FR-06: onLoad Client Script

The system shall execute the configured onLoad Client Script when the Incident form is loaded.

### FR-07: onChange Client Script

The system shall respond dynamically when the configured Incident field value is changed.

### FR-08: onSubmit Client Script

The system shall validate the required Incident information before allowing the form to be submitted.

### FR-09: onCellEdit Client Script

The system shall control or validate applicable Incident field changes made through list editing.

### FR-10: Validation

The system shall prevent invalid or incomplete information from being submitted when the configured validation condition is not satisfied.

### FR-11: Reverse Behavior

Where configured, the system shall restore the normal field behavior when the UI Policy condition becomes false.

### FR-12: Testing

The system shall be tested using different Incident form scenarios to verify the expected behavior.

---

## 4. Non-Functional Requirements

### 4.1 Usability

The configuration should provide clear and understandable behavior for users working with Incident records.

### 4.2 Reliability

Client Scripts and UI Policies should work consistently when the configured conditions are satisfied.

### 4.3 Maintainability

The implementation should be organized and documented so that the configuration can be understood and maintained later.

### 4.4 Performance

The Client Scripts and UI Policies should execute efficiently without causing unnecessary delays in the Incident form.

### 4.5 Security

The configuration should support controlled access and prevent inappropriate client-side modification where applicable.

---

## 5. Software Requirements

The following software and platforms are required:

| Requirement | Description |
|---|---|
| ServiceNow | Development and implementation platform |
| Incident Management | ServiceNow module used in the project |
| Personal Developer Instance | Development and testing environment |
| Web Browser | Access to ServiceNow |
| JavaScript | Client Script programming language |
| GitHub | Project source and documentation repository |
| Markdown | Documentation format |

---

## 6. Hardware Requirements

The project does not require specialized hardware.

A standard computer or laptop with internet connectivity is sufficient.

Recommended requirements include:

- Computer or laptop
- Minimum 4 GB RAM
- Stable internet connection
- Modern web browser
- Keyboard and mouse

---

## 7. ServiceNow Requirements

The ServiceNow environment should provide:

- Access to the Incident table.
- Incident Management functionality.
- Permission to create and configure Client Scripts.
- Permission to create and configure UI Policies.
- Permission to create and update Incident records.
- Access to the required Incident form and list views.
- Suitable administrative or developer access for configuration and testing.

---

## 8. User Requirements

The user should be able to:

1. Open the Incident form.
2. Create a new Incident.
3. Enter required Incident information.
4. Modify applicable Incident fields.
5. Observe dynamic field behavior.
6. Submit valid Incident information.
7. Receive validation when required information is missing.
8. Work with Incident records according to the configured field restrictions.
9. Edit applicable Incident information through the list view where permitted.

---

## 9. Client Script Requirements

The project requires the following Client Script types:

| Client Script | Requirement |
|---|---|
| onLoad | Execute behavior when the Incident form loads |
| onChange | Respond to changes in a configured field |
| onSubmit | Validate information before form submission |
| onCellEdit | Control applicable list-based field editing |

Each Client Script should be tested independently and together with the UI Policy where applicable.

---

## 10. UI Policy Requirements

The UI Policy should:

- Be created for the Incident table.
- Use the defined project condition.
- Control the required field properties.
- Support mandatory behavior.
- Support read-only behavior.
- Support visibility behavior.
- Reverse the configured behavior when applicable.
- Be tested using different Incident conditions.

The exact fields and conditions should match the configuration implemented in the ServiceNow instance.

---

## 11. Validation Requirements

The project should verify that:

- Required information is entered before submission.
- Invalid information is appropriately handled.
- Mandatory fields cannot be left empty when the policy is active.
- Read-only fields cannot be modified while the restriction is active.
- Dynamic behavior changes according to the configured conditions.
- Applicable list edits are validated.

---

## 12. Testing Requirements

The implementation should be tested using different scenarios, including:

### Test Scenario 1: New Incident

Create a new Incident and verify the initial form behavior.

### Test Scenario 2: Field Change

Change the configured field and verify the onChange behavior.

### Test Scenario 3: Valid Submission

Enter valid information and submit the Incident.

**Expected Result:**  
The Incident should be submitted successfully.

### Test Scenario 4: Invalid Submission

Leave required information empty and attempt to submit.

**Expected Result:**  
The configured validation should prevent submission.

### Test Scenario 5: UI Policy Condition

Set the Incident values so that the UI Policy condition is satisfied.

**Expected Result:**  
The configured field behavior should be applied.

### Test Scenario 6: Reverse Condition

Change the values so that the UI Policy condition becomes false.

**Expected Result:**  
The configured fields should return to their normal behavior where Reverse if false is enabled.

### Test Scenario 7: List Editing

Attempt an applicable field update through the Incident list.

**Expected Result:**  
The configured onCellEdit validation or restriction should be applied.

---

## 13. Project Constraints

The project has the following constraints:

- The implementation depends on access to a suitable ServiceNow environment.
- Client-side behavior depends on the configured ServiceNow form and fields.
- Exact field behavior depends on the project configuration.
- Testing requires appropriate ServiceNow permissions.
- Internet connectivity is required to access the ServiceNow instance and GitHub repository.

---

## 14. Project Scope

### Included

- ServiceNow Incident table.
- Client Script configuration.
- UI Policy configuration.
- Incident form behavior.
- Client-side validation.
- List editing validation where applicable.
- Testing.
- Documentation.
- Screenshots and demonstration.

### Not Included

- Development of a separate external Incident Management application.
- Replacement of the ServiceNow Incident Management module.
- Advanced server-side application development beyond the project requirements.
- Integration with external enterprise systems.

---

## 15. Requirement Traceability

| Requirement | Implementation | Testing |
|---|---|---|
| Incident form control | UI Policy / Client Scripts | Form Testing |
| Mandatory fields | UI Policy | Mandatory Field Test |
| Read-only fields | UI Policy | Read-only Test |
| Field visibility | UI Policy | Visibility Test |
| Form load behavior | onLoad Client Script | Form Load Test |
| Dynamic field behavior | onChange Client Script | Field Change Test |
| Submission validation | onSubmit Client Script | Save Validation Test |
| List editing control | onCellEdit Client Script | List Edit Test |

---

## 16. Expected Result

After satisfying the identified requirements, the project should provide a controlled ServiceNow Incident form in which Client Scripts and UI Policies work together to:

- Improve data entry.
- Enforce required information.
- Control field behavior.
- Validate user input.
- Reduce incorrect Incident updates.
- Provide consistent form behavior.
- Support proper Incident record management.

---

## 17. Conclusion

The requirement analysis identifies the functional, non-functional, technical, user, and testing requirements for implementing Client Scripts and UI Policies on the ServiceNow Incident table.

These requirements provide a clear foundation for the next phase of the project, **Project Design**, where the system workflow, components, and implementation structure are planned.
