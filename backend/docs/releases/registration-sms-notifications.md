# Registration SMS delivery

Owner-supplied SMS.ir templates: submission 411055, activation 833279; parameter CODE.
A committed startup submission or committed approved status enqueues a notice in the existing outbox. The payload excludes the recipient and tracking code.
The dispatcher is disabled by default. Enable explicitly on the API after template approval and release verification using MOON_SMS_REGISTRATION_NOTIFICATIONS_ENABLED=true and the template configuration. The existing production Compose must receive the new configuration; loading an image alone does not enable notifications.
Provider acceptance is not proof of delivery to a handset. An ambiguous response or interrupted claim is dead-lettered for operator reconciliation, without automatic duplicate sends. Explicit not-configured results can retry without contacting the provider.
No historical backfill, new schema, company registration or payment behavior. Company registration must integrate its own durable events when implemented.
