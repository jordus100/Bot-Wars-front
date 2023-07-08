package KlientApp;


import ServerApp.DummyServerApp;
import Utils.IServerApp;

public class KlientAppTest{
    private static KlientApp app;
    private static IServerApp serwer;

    public static void main(String [] args){
        serwer = new DummyServerApp();
        app = new KlientApp(serwer);
        test("botwars list games".split(" "));
        test("botwars list tournaments".split(" "));
        test("botwars list history".split(" "));
        test("botwars list players".split(" "));
    }

    public static void KlientSetUp(){

    }

    public static boolean test(String [] args){
        app.doSomething(args);
        return true;
    }
}