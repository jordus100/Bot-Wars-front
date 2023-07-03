Switch ($args[0])
{
    "on-gui"{
        VBoxManage startvm mach1 --type gui &
        VBoxManage startvm mach2 --type gui &
        VBoxManage startvm mach3 --type gui &
        VBoxManage startvm mach4 --type gui &
        VBoxManage startvm serwer --type gui &
    }

    {"on-headless" || "on"} {
        VBoxManage startvm mach1 --type headless &
        VBoxManage startvm mach2 --type headless &
        VBoxManage startvm mach3 --type headless &
        VBoxManage startvm mach4 --type headless &
        VBoxManage startvm serwer --type headless &
    }

    "off" {
        VBoxManage controlvm mach1 poweroff &
        VBoxManage controlvm mach2 poweroff &
        VBoxManage controlvm mach3 poweroff &
        VBoxManage controlvm mach4 poweroff &
        VBoxManage controlvm serwer poweroff &   
    }

    "save" {
        VBoxManage controlvm mach1 savestate &
        VBoxManage controlvm mach2 savestate &
        VBoxManage controlvm mach3 savestate &
        VBoxManage controlvm mach4 savestate &
        VBoxManage controlvm serwer savestate &
    }
}