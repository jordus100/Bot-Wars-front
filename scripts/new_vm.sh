$VMName = $1 #name of the machine
$Switch = $2 #switch name
$Path = "$Home\Documents\Obrazy\"
Switch ($args[0])
{
    "arc")
        $iso = $Path + "archlinux-2023.05.03-x86_64.iso"
        $ostype = "ArchLinux_64" 
        ;;

    "ubu")
        $iso = $Path + "ubuntu-22.04.2-desktop-amd64.iso"
        $ostype = "Ubuntu22_LTS_64"
        ;;
    *)
        echo "Unkown iso image"
        exit
        ;;
}
mkdir "$Home/VirtualBox VMs/$VMName"
VBoxManage -q setproperty machinefolder "$Home/VirtualBox VMs/$VMName"
VBoxManage -q createvm  --name $VMName --register --ostype $ostype
VBoxManage -q modifyvm $VMName --memory 2048 --cpus 1 --vram 256
VBoxManage -q modifyvm $VMName --nic1 nat
VBoxManage -q modifyvm $VMName --nic2 hostonly --host-only-adapter2=$Switch
VBoxManage -q storagectl $VMName --name "IDE Controller" --add ide --controller PIIX4
VBoxManage -q storageattach $VMName --storagectl "IDE Controller" --port 1 --device 0 --type dvddrive --medium $iso
echo "machine: $VMName" >> definitions