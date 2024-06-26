Overview
This repository contains the initial design and implementation of a scalable and reliable payment system. The system supports multiple payment methods, focusing on card payments, and aims to provide a comprehensive solution for financial transactions.

Key Components
Payment Service:

Handles payment events and coordinates the payment process.
APIs:
POST /v1/payments
GET /v1/payments/{id}
Payment Executor:

Executes payment orders via a Payment Service Provider (PSP).
Card Schemes:

Processes credit card operations (e.g., Visa, MasterCard).
Ledger:

Maintains financial records using a double-entry accounting system.
Wallet:

Tracks merchant account balances and user payments.
Functional Workflows
Pay-In Flow: Manages the process from user payment to updating merchant and ledger balances.
Pay-Out Flow: Handles transferring funds from the merchant’s account to the seller’s account.
Data Model
Payment Event Table: Stores checkout and buyer information.
Payment Order Table: Stores individual payment order details.
Algorithms and Patterns
Idempotency: Ensures payments are processed exactly once.
Retry Mechanisms: Handles transient errors with retry queues.
Reconciliation: Verifies consistency between internal and external services.
Security Measures
HTTPS and Encryption: Protects data during transfer.
Tokenization: Prevents card theft by replacing card numbers with tokens.
PCI Compliance: Adheres to credit card data handling standards.
Aim
This project is a starting point for building a robust and secure payment system. Ongoing work focuses on enhancing these components and algorithms.
