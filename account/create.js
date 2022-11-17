const Router = require("express").Router()
const xml = require("xml")
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
Router.post('/xml-api/createacct.php', (req, res) => {
    res.header('Content-Type', 'text/xml')
    res.send(`
 <?xml version="1.0" encoding="UTF-8"?>
<createacct>
  <result>
    <options>
      <ip>n</ip>
      <vpusername>mofhpr_${getRandomInt(99999999)}</vpusername>
      <nameserver>ns1.byet.org</nameserver>
      <nameserver2>ns2.byet.org</nameserver2>
      <nameserver3></nameserver3>
      <nameserver4></nameserver4>
      <nameservera></nameservera>
      <nameservera2></nameservera2>
      <nameservera3></nameservera3>
      <nameservera4></nameservera4>
      <nameserverentry></nameserverentry>
      <nameserverentry2></nameserverentry2>
      <nameserverentry3></nameserverentry3>
      <nameserverentry4></nameserverentry4>
      <package></package>
    </options>
    <rawout>account added to queue to be added</rawout>
    <status>1</status>
    <statusmsg>This account has been successfuly created</statusmsg>
  </result>
</createacct>
`)
})
Router.post('/xml-api/suspendacct.php.php', (req, res) => {
    res.header('Content-Type', 'text/xml')
    res.send(`
 <?xml version="1.0" encoding="UTF-8"?>
    <suspendacct>
    <result>
        <status>1</status>
        <statusmsg>
            <script>if (self['clear_ui_status']) { clear_ui_status(); }</script>
            Changing Shell to /bin/false...Changing shell for username.
            Shell changed.
            Locking Password...Locking password for user username.
            marking user vhosts / databases for suspension.
            ..
            ..
            Completed, this account will be fully suspended in 2 minutes.
        </statusmsg>
    </result>
</suspendacct>
`)
})
Router.post('/xml-api/unsuspendacct.php', (req, res) => {
 res.header('Content-Type', 'text/xml')
    res.send(`
 <?xml version="1.0" encoding="UTF-8"?>c
<unsuspendacct>
    <result>
        <status>1</status>
        <statusmsg>
            <script>if (self['clear_ui_status']) { clear_ui_status(); }</script>
            username account has been unsuspended
        </statusmsg>
    </result>
</unsuspendacct>
`)
})

Router.post('/xml-api/passwd.php', (req, res) => {
    res.header('Content-Type', 'text/xml')
    res.send(`
 <?xml version="1.0" encoding="UTF-8"?>c
<passwd>
    <passwd>
        <rawout>
            Changing password for username
            Password for username has been changed
            Updating ftp passwords for username
            Ftp password files updated.
            Ftp vhost passwords synced
        </rawout>
        <services>
            <app>system</app>
        </services>
        <services>
            <app>ftp</app>
        </services>
        <services>
            <app>mail</app>
        </services>
        <services>
            <app>mySQL</app>
        </services>
        <status>1</status>
        <statusmsg>Password changed for user username</statusmsg>
    </passwd>
</passwd>
`)
})
module.exports = Router
