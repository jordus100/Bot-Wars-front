pid=()
case $1 in
    "on-gui")
        pid[0]=$(VBoxManage startvm mach1 --type gui & pcregrep -o1 "[\d+] (\d+)")
        pid[1]=$(VBoxManage startvm mach2 --type gui & pcregrep -o1 "[\d+] (\d+)")
        pid[2]=$(VBoxManage startvm mach3 --type gui & pcregrep -o1 "[\d+] (\d+)")
        pid[3]=$(VBoxManage startvm mach4 --type gui & pcregrep -o1 "[\d+] (\d+)")
        pid[4]=$(VBoxManage startvm serwer --type gui & pcregrep -o1 "[\d+] (\d+)")
    ;;

    "on-headless" | "on")
        pid[0]=$(VBoxManage startvm mach1 --type headless & pcregrep -o1 "[\d+] (\d+)")
        pid[1]=$(VBoxManage startvm mach2 --type headless & pcregrep -o1 "[\d+] (\d+)")
        pid[2]=$(VBoxManage startvm mach3 --type headless & pcregrep -o1 "[\d+] (\d+)")
        pid[3]=$(VBoxManage startvm mach4 --type headless & pcregrep -o1 "[\d+] (\d+)")
        pid[4]=$(VBoxManage startvm serwer --type headless & pcregrep -o1 "[\d+] (\d+)")
    ;;

    "off")
        pid[0]=$(VBoxManage controlvm mach1 poweroff & pcregrep -o1 "[\d+] (\d+)")
        pid[1]=$(VBoxManage controlvm mach2 poweroff & pcregrep -o1 "[\d+] (\d+)")
        pid[2]=$(VBoxManage controlvm mach3 poweroff & pcregrep -o1 "[\d+] (\d+)")
        pid[3]=$(VBoxManage controlvm mach4 poweroff & pcregrep -o1 "[\d+] (\d+)")
        pid[4]=$(VBoxManage controlvm serwer poweroff & pcregrep -o1 "[\d+] (\d+)")
    ;;

    "save") 
        pid[0]=$(VBoxManage controlvm mach1 savestate & pcregrep -o1 "[\d+] (\d+)")
        pid[1]=$(VBoxManage controlvm mach2 savestate & pcregrep -o1 "[\d+] (\d+)")
        pid[2]=$(VBoxManage controlvm mach3 savestate & pcregrep -o1 "[\d+] (\d+)")
        pid[3]=$(VBoxManage controlvm mach4 savestate & pcregrep -o1 "[\d+] (\d+)")
        pid[4]=$(VBoxManage controlvm serwer savestate & pcregrep -o1 "[\d+] (\d+)")
    ;;
esac

wait pid