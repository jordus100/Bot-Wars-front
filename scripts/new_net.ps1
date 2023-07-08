$switch=$(VBoxManage hostonlyif create | pcre2grep -o1 "'(.+)'")
echo "switch: $switch" >> definitions
echo $switch
$path=$(pwd)
add_to_path $path 

VBoxManage dhcpserver modify --network $Switch --server-ip 10.10.10.1 --netmask 255.0.0.0 --lower-ip 10.10.10.2 --upper-ip 10.10.10.254 --enable

new_vm arc mach1 "$switch"
new_vm arc mach2 "$switch"
new_vm arc mach3 "$switch"
new_vm arc mach4 "$switch"
new_vm ubu serwer "$switch"