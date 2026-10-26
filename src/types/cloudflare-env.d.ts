export {};

declare global {
  interface CloudflareEnv {
    /** Secret. API key of the mail delivery service used by /api/contact. */
    RESEND_API_KEY?: string;
    /** Where contact messages are delivered. Defaults to the address in the profile. */
    CONTACT_TO?: string;
    /** Sender shown on the delivered email. Defaults to the service's sandbox sender. */
    CONTACT_FROM?: string;
    /** Override of the delivery API endpoint (used by the test suite). */
    RESEND_API_URL?: string;
  }
}
