const http = require('http');

const html = `<!DOCTYPE html>
<form id="f" style="font-family:sans-serif;display:flex;flex-direction:column;gap:8px;max-width:260px">
  <h3>Register Here</h3>
  <div id="msg"></div>
  <input name="name" placeholder="Name" required>
  <input name="email" type="email" placeholder="Email" required>
  <input name="mobile" pattern="\\d{10}" title="10-digit number" placeholder="Mobile" required>
  <input name="pw" id="p1" type="password" minlength="6" placeholder="Password" required>
  <input id="p2" type="password" placeholder="Confirm Password" required>
  <button type="submit">Register</button>
</form>
<script>
  f.onsubmit = e => {
    e.preventDefault();
    const ok = p1.value === p2.value;
    msg.textContent = ok ? "Registration successful!" : "Passwords do not match.";
    msg.style.color = ok ? "green" : "red";
  };
</script>`;

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(html);
}).listen(3000, () => console.log('Running on http://localhost:3000'));
