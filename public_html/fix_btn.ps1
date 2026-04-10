$content = Get-Content 'c:\Users\Sam Babu\Desktop\aswin\New\website\public_html\js\enquiry-btn.js' -Raw -Encoding utf8
$old = [regex]::Escape('<div class="pill-divider"></div>')
$idx = $content.IndexOf('<div class="pill-divider"></div>')
$endIdx = $content.IndexOf('</a>', $idx) + 4
$newBlock = '<div class="pill-divider"></div>' + "`r`n     <a href=""coming-soon.html"" class=""pill-pay"">`r`n       <svg width=""13"" height=""13"" viewBox=""0 0 24 24"" fill=""none"" stroke=""#2a4074"" stroke-width=""2.5"" stroke-linecap=""round"" stroke-linejoin=""round""><rect x=""3"" y=""11"" width=""18"" height=""11"" rx=""2""/><path d=""M7 11V7a5 5 0 0 1 10 0v4""/></svg>`r`n       Applicant Login`r`n     </a>"
$result = $content.Substring(0, $idx) + $newBlock + $content.Substring($endIdx)
$result | Set-Content 'c:\Users\Sam Babu\Desktop\aswin\New\website\public_html\js\enquiry-btn.js' -Encoding utf8
Write-Host 'done'
