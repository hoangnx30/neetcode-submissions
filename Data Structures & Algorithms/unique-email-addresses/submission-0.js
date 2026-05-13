class Solution {
    /**
     * @param {string[]} emails
     * @return {number}
     */
    numUniqueEmails(emails) {
        const uniqueEmails = new Set();
        for (const email of emails) {
            let [local, domain] = email.split("@");
            local = local.split('+')[0]
            local = local.replace(/\./g, '')
            uniqueEmails.add(`${local}@${domain}`)
        }
        
        return uniqueEmails.size
    }
}
