./clean.ps1 &>/dev/null
./new_net.ps1
./power.ps1 on 
grep "machine: .+" definitions | while read -r line ; do
    $name=$(pcregrep -o1 "machine: (.+)" $line)
    $ip=$(VBoxManage guestproperty get mach3 "/VirtualBox/GuestInfo/Net/1/V4/IP" | pcregrep -o1 "Value: (.+)")
    echo "machineip: $name $ip" >> definitions
}
./power.ps1 save
