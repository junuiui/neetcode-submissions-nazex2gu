/*
    Intuition:
        email = [local_name]@[domain_name]
            - can contain '.' or '+'
                - . => forward to local name without .
                - + => after the first plus sign will be ignored

        @return the number of different addresses that actually recieve mails

        @example 1
            - emails = ["test.email+alex@neetcode.com", 
                        "test.e.mail+bob.cathy@neetcode.com"
                        "testemail+david@nee.tcode.com"]

            test.email+alex@neetcode.com        => testemail@neetcode.com
            test.e.mail+bob.cathy@neetcode.com  => testemail@neetcode.com

            testemail+david@nee.tcode.com"      => testemail@nee.tcode.com
    
    Approach:
        1 - iterate all values of email in emails[]
        2 - transform the email address by applying the rules 
        3 - insert it into Set
        4 - return the number of elements in the set

*/

class Solution {
    /**
     * @param {string[]} emails
     * @return {number}
     */
    numUniqueEmails(emails) {
        const set = new Set();

        for (const email of emails) {
            // Transform the email address
            let [localName, domainName] = email.split("@");
            let newLocalName = localName.replaceAll('.', '');
            set.add(newLocalName.split('+')[0] + '@' + domainName);
        }

        return set.size;
    }
}
