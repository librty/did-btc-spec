/**
 * A verification relationship expresses the relationship between the DID subject and a
 * verification method. Each flag corresponds to a bit, and the set of flags form a byte
 * to represent the active verification relationships for a verification method.
 * @see https://www.w3.org/TR/did-core/#verification-relationships
 */
export var VerificationRelationshipFlags;
(function (VerificationRelationshipFlags) {
    /** The authentication verification relationship is used to specify how the DID subject is
     * expected to be authenticated, for purposes such as logging into a website or engaging in
     * any sort of challenge-response protocol. */
    VerificationRelationshipFlags[VerificationRelationshipFlags["AUTHENTICATION"] = 1] = "AUTHENTICATION";
    /** The assertionMethod verification relationship is used to specify how the DID subject is
     * expected to express claims, such as for the purposes of issuing a Verifiable Credential */
    VerificationRelationshipFlags[VerificationRelationshipFlags["ASSERTION"] = 2] = "ASSERTION";
    /** The keyAgreement verification relationship is used to specify how an entity can generate
     * encryption material in order to transmit confidential information intended for the DID subject,
     * such as for the purposes of establishing a secure communication channel with the recipient. */
    VerificationRelationshipFlags[VerificationRelationshipFlags["KEY_AGREEMENT"] = 4] = "KEY_AGREEMENT";
    /** The capabilityInvocation verification relationship is used to specify a verification method
     * that might be used by the DID subject to invoke a cryptographic capability, such as the
     * authorization to update the DID Document. */
    VerificationRelationshipFlags[VerificationRelationshipFlags["CAPABILITY_INVOCATION"] = 8] = "CAPABILITY_INVOCATION";
    /** The capabilityDelegation verification relationship is used to specify a mechanism that might
     * be used by the DID subject to delegate a cryptographic capability to another party, such as
     * delegating the authority to access a specific HTTP API to a subordinate. */
    VerificationRelationshipFlags[VerificationRelationshipFlags["CAPABILITY_DELEGATION"] = 16] = "CAPABILITY_DELEGATION";
})(VerificationRelationshipFlags || (VerificationRelationshipFlags = {}));
