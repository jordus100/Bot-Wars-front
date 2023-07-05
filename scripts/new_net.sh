$switch=$(VBoxManage hostonlyif create | pcregrep -o1 "'(.+)'")
echo "switch: $switch" >> definitions
pserver modify --network $Switch --server-ip 10.10.10.1 --netmask 255.0.0.0 --lower-ip 10.10.10.2 --upper-ip 10.10.10.254 --enable
./new_vm.sh arc mach1 "$switch"
./new_vm.sh arc mach2 "$switch"
./new_vm.sh arc mach3 "$switch"
./new_vm.sh arc mach4 "$switch"
./new_vm.sh ubu serwer "$switch"