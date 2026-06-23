@echo off
echo Serving docs/ at http://localhost:8080
echo Press Ctrl+C to stop.
start http://localhost:8080/works.html
python -m http.server 8080 --directory docs
