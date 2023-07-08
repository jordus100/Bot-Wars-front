$switch=$(cat definitions | pcre2grep -o1 "switch: (.+)")
VBoxManage hostonlyif remove $switch

$jobIds = .\power.ps1 off | Select-Object -ExpandProperty Id | ForEach-Object { [int]$_ }
$finishedJobs = $null
do {
    $finishedJobs = Get-Job -Id $jobIds | Where-Object { $_.State -eq "Completed" }
    Start-Sleep -Milliseconds 500 
} until ($finishedJobs.Count -eq $jobIds.Count)

VBoxManage unregistervm mach1 --delete
VBoxManage unregistervm mach2 --delete
VBoxManage unregistervm mach3 --delete
VBoxManage unregistervm mach4 --delete
VBoxManage unregistervm serwer --delete

Remove-Item -Recurse -Force "$Home\VirtualBox VMs\mach1"
Remove-Item -Recurse -Force "$Home\VirtualBox VMs\mach2"
Remove-Item -Recurse -Force "$Home\VirtualBox VMs\mach3"
Remove-Item -Recurse -Force "$Home\VirtualBox VMs\mach4"
Remove-Item -Recurse -Force "$Home\VirtualBox VMs\serwer"
rm definitions