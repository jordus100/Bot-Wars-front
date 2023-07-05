$switch=$(cat definitions | pcregrep -o1 "switch: (.+)")
VBoxManage hostonlyif remove $switch
./power.sh off
VBoxManage unregistervm mach1 --delete
VBoxManage unregistervm mach2 --delete
VBoxManage unregistervm mach3 --delete
VBoxManage unregistervm mach4 --delete
VBoxManage unregistervm serwer --delete
rm -r "$Home\VirtualBox VMs\mach1"
rm -r "$Home\VirtualBox VMs\mach2"
rm -r "$Home\VirtualBox VMs\mach3"
rm -r "$Home\VirtualBox VMs\mach4"
rm -r "$Home\VirtualBox VMs\serwer"
rm definitions 