KYC & Bank Employee Fraud Monitoring System
Overview

This project is a full-stack web application developed to monitor internal banking activities and identify suspicious behavior performed by employees.

In banking systems, employees often have access to sensitive operations like transaction approvals, customer data updates, and KYC verification. If such actions are misused, it can lead to internal fraud.

This system aims to track employee activities, analyze suspicious patterns, and generate fraud alerts so that managers and auditors can monitor potential risks in real time.

Why This Project?

Internal fraud is one of the biggest risks in banking. Employees with system access may misuse privileges to manipulate transactions or customer data.

This project helps address that problem by:

Monitoring employee actions inside the system

Detecting suspicious activities

Generating alerts for unusual behavior

Providing dashboards for managers and auditors

Tech Stack
Frontend

React

HTML

CSS

JavaScript

Axios

Backend

Java

Spring Boot

Spring Security

Spring Data JPA

REST APIs

Database

MySQL

Tools

Git & GitHub

Maven

Docker (optional)

JUnit (testing)

System Architecture
User (Browser)
      │
      ▼
React Frontend
      │
REST API Calls
      │
Spring Boot Backend
      │
Spring Data JPA
      │
MySQL Database

The frontend interacts with backend APIs, which process the business logic and store or retrieve data from the database.

Main Features
Employee Activity Monitoring

Tracks actions performed by bank employees such as:

Transactions

Customer data modifications

KYC verification activities

KYC Monitoring

The system records customer verification details including:

Identity verification status

Employee who verified the KYC

Timestamp of verification

Fraud Detection

The system identifies suspicious patterns like:

Too many transactions in a short time

Transactions outside working hours

Frequent changes to customer information

Repeated failed login attempts

When such activities are detected, the system generates a fraud alert.

Dashboard & Reports

Managers and auditors can view:

Fraud alerts

Suspicious employees

Transaction statistics

KYC verification history
