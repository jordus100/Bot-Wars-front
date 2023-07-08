./clean.ps1 *>$null
./new_net.ps1

$jobIds = .\power.ps1 on | Select-Object -ExpandProperty Id | ForEach-Object { [int]$_ }

$finishedJobs = $null
do {
    $finishedJobs = Get-Job -Id $jobIds | Where-Object { $_.State -eq "Completed" }
    Start-Sleep -Milliseconds 500 
} until ($finishedJobs.Count -eq $jobIds.Count)

pcre2grep "machine: .+" definitions | ForEach-Object {
    $name = pcre2grep -o1 "machine: (.+)" "$1"
    $ip = (VBoxManage guestproperty get mach3 "/VirtualBox/GuestInfo/Net/1/V4/IP" | pcre2grep -o1 "Value: (.+)")
    echo "machineip: $name $ip" >> definitions
}

./power.ps1 save
Get-job | Remove-Job