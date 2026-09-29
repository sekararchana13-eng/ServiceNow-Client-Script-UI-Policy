# Project Design

## Project Title

**Implement Client Script & UI Policy on ServiceNow Incident**

---

## 1. Introduction

The project design phase defines the structure and workflow of the ServiceNow Incident configuration.

The system is designed using **Client Scripts** and **UI Policies** to provide dynamic control over the Incident form, validate user input, and maintain consistent data entry.

The design connects the Incident form, Client Scripts, UI Policy, user actions, and validation process into a single workflow.

---

## 2. System Design Overview

The project is designed around the ServiceNow Incident Management module.

The main components are:

- ServiceNow Incident Form
- Incident Table
- UI Policy
- UI Policy Actions
- onLoad Client Script
- onChange Client Script
- onSubmit Client Script
- onCellEdit Client Script
- Incident List
- Testing and Validation

---

## 3. High-Level Architecture

```text
                    ServiceNow Platform
                           |
                           v
                 +--------------------+
                 |  Incident Management|
                 +--------------------+
                           |
             +-------------+-------------+
             |                           |
             v                           v
      Incident Form                Incident List
             |                           |
             |                           |
      +------+-------+             +-----+------+
      |              |             |
      v              v             v
 UI Policy      Client Scripts   onCellEdit
      |              |
      |       +------+------+------+
      |       |      |      |
      |       v      v      v
      |     onLoad onChange onSubmit
      |              |
      +--------------+
             |
             v
      Field Behavior
             |
     +-------+-------+
     |       |       |
     v       v       v
 Mandatory Read-only Visible
             |
             v
       Validation
             |
             v
       Incident Update
