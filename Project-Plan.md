# Project Planning

## Project Title

**Implement Client Script & UI Policy on ServiceNow Incident**

---

## 1. Project Overview

This project focuses on implementing and configuring **Client Scripts and UI Policies** on the ServiceNow Incident table.

The purpose of the project is to control Incident form behavior dynamically, improve data entry, validate user inputs, and ensure that Incident records follow the required conditions and business rules.

The project includes the implementation and testing of different Client Script types such as **onLoad, onChange, onSubmit, and onCellEdit**, along with UI Policy configuration.

---

## 2. Project Objective

The main objective of this project is to develop a controlled and user-friendly Incident form in ServiceNow.

The project aims to:

- Configure UI Policies for the Incident table.
- Implement Client Scripts for dynamic form behavior.
- Validate Incident information before submission.
- Control field properties such as mandatory, read-only, and visible.
- Dynamically respond to changes in Incident field values.
- Prevent invalid or incomplete data from being submitted.
- Test the configured behavior under different Incident conditions.
- Document the complete implementation and testing process.

---

## 3. Problem Statement

Incident management requires accurate and complete information to ensure that issues are properly recorded and processed.

Without appropriate form controls, users may:

- Leave required information empty.
- Enter incomplete Incident details.
- Modify fields that should be restricted.
- Submit invalid information.
- Make inconsistent updates to Incident records.

Therefore, Client Scripts and UI Policies are used to provide dynamic form control and client-side validation.

---

## 4. Project Scope

The scope of this project includes:

### Client Scripts

The project covers the following Client Script types:

- **onLoad Client Script**
- **onChange Client Script**
- **onSubmit Client Script**
- **onCellEdit Client Script**

### UI Policy

The UI Policy is configured on the **Incident** table to control field behavior based on defined conditions.

The supported field behaviors include:

- Mandatory
- Read-only
- Visible

### Testing

The implementation is tested using different Incident form scenarios to verify that the configured behavior works as expected.

---

## 5. Technology and Platform

| Component | Technology |
|---|---|
| Platform | ServiceNow |
| Module | Incident Management |
| Table | Incident |
| Scripting Language | JavaScript |
| Configuration | Client Scripts and UI Policies |
| Development Environment | ServiceNow Personal Developer Instance (PDI) |
| Documentation | Markdown |
| Repository | GitHub |

---

## 6. Project Requirements

The following requirements are considered for the project:

### Software Requirements

- ServiceNow Personal Developer Instance (PDI) or Incident Management enabled instance
- Modern web browser
- ServiceNow administrative/developer access
- GitHub account for project documentation and deliverables

### Knowledge Requirements

Basic knowledge of:

- ServiceNow Incident Management
- Client Scripts
- UI Policies
- JavaScript
- Form fields and conditions
- Basic testing and debugging

---

## 7. Project Modules

The project is divided into the following modules:

### Module 1: UI Policy

Create and configure a UI Policy on the Incident table to dynamically control field properties.

### Module 2: onLoad Client Script

Configure Client Script behavior when an Incident form is loaded.

### Module 3: onChange Client Script

Configure dynamic behavior when a selected Incident field value is changed.

### Module 4: onSubmit Client Script

Validate required information before allowing the Incident form to be submitted.

### Module 5: onCellEdit Client Script

Control and validate changes made through list-based Incident editing.

### Module 6: Testing

Test the configured Client Scripts and UI Policy using different Incident scenarios.

### Module 7: Documentation

Document the implementation, configuration, testing results, and project demonstration.

---

## 8. Project Milestones

The project is planned using the following milestones:

| Milestone | Description |
|---|---|
| Milestone 1 | Create UI Policy on Incident |
| Milestone 2 | Configure UI Policy Actions |
| Milestone 3 | Create onChange Client Script |
| Milestone 4 | Create onSubmit Client Script |
| Milestone 5 | Create onCellEdit Client Script |
| Milestone 6 | Test the Configuration |
| Milestone 7 | Prepare Project Documentation |

---

## 9. Team Members

The project is completed as a team project.

| Member | Role |
|---|---|
| Archana J | Team Lead |
| Saliha Beevi M | Team Member |
| E Mari Kanagalakshmi | Team Member |
| R Bhavani | Team Member |

---

## 10. Task Distribution

The project activities are distributed among the team members.

### Archana J

- Configure Urgency Field through UI Policy Action
- Create onCellEdit Client Script
- Perform form-based update testing
- Coordinate the project activities
- Manage GitHub project submission

### Saliha Beevi M

- Create onChange Client Script
- Test mandatory field enforcement
- Verify dynamic field behavior

### E Mari Kanagalakshmi

- Create UI Policy
- Test successful Incident save
- Contribute to project conclusion

### R Bhavani

- Create onSubmit Client Script
- Perform save validation testing
- Test reverse conditions
- Test list-edit restrictions

---

## 11. Project Workflow

The planned project workflow is:

```text
Project Planning
       ↓
Requirement Analysis
       ↓
Project Design
       ↓
Client Script & UI Policy Development
       ↓
Testing
       ↓
Documentation
       ↓
Project Demonstration
       ↓
GitHub Submission
12. Expected Outcome
At the end of the project, the ServiceNow Incident form should provide controlled and dynamic behavior according to the configured Client Scripts and UI Policy.
The expected outcomes include:
Improved Incident data accuracy.
Better control over Incident form fields.
Dynamic response to field changes.
Validation before form submission.
Controlled list-based editing.
Consistent Incident data entry.
Proper documentation of implementation and testing.
13. Project Deliverables
The following deliverables are planned for the project:
Project planning document
Requirement analysis document
Project design document
Client Script documentation
UI Policy documentation
Testing documentation
Project documentation/report
ServiceNow implementation screenshots
Project demonstration video
GitHub repository containing project deliverables
14. GitHub Repository
The project deliverables are maintained in the following GitHub repository:
Repository:
ServiceNow-Client-Script-UI-Policy
The repository contains project documentation, implementation details, screenshots, testing evidence, and demonstration information.
15. Conclusion
The project planning phase defines the objectives, scope, requirements, modules, milestones, team responsibilities, and expected deliverables of the ServiceNow Client Script and UI Policy project.
